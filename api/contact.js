const MAX_BODY_BYTES = 64 * 1024;

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function clean(value, maxLength = 500) {
  return String(value || "").trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return clean(value, 4000)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return parseBody(req.body, req.headers["content-type"] || "");

  let size = 0;
  const chunks = [];

  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      throw new Error("Request body is too large.");
    }
    chunks.push(chunk);
  }

  return parseBody(Buffer.concat(chunks).toString("utf8"), req.headers["content-type"] || "");
}

function parseBody(raw, contentType) {
  if (!raw) return {};
  if (contentType.includes("application/json")) {
    return JSON.parse(raw);
  }
  if (contentType.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(raw));
  }
  return JSON.parse(raw);
}

function normalizeLead(body) {
  return {
    name: clean(body.name, 120),
    phone: clean(body.phone, 80),
    instituteName: clean(body.instituteName, 180),
    message: clean(body.message, 2000),
    website: clean(body.website, 200)
  };
}

function validateLead(lead) {
  if (!lead.name || !lead.phone || !lead.instituteName) {
    return "Please add your name, phone and institute name.";
  }

  if (lead.phone.replace(/\D/g, "").length < 7) {
    return "Please enter a valid phone number.";
  }

  return "";
}

function buildLeadEmail(lead) {
  const rows = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Institute", lead.instituteName],
    ["Message", lead.message || "No message added"]
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = rows
    .map(([label, value]) => `
      <tr>
        <td style="padding:10px 12px;border:1px solid #DDE3ED;font-weight:700;background:#F5F7FA;">${escapeHtml(label)}</td>
        <td style="padding:10px 12px;border:1px solid #DDE3ED;">${escapeHtml(value)}</td>
      </tr>
    `)
    .join("");

  return {
    subject: `Ledgr demo request - ${lead.instituteName}`,
    text,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;color:#111827;line-height:1.5;">
        <h2 style="margin:0 0 14px;font-family:Poppins,Arial,sans-serif;">New Ledgr Classes demo request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:720px;">${htmlRows}</table>
      </div>
    `
  };
}

module.exports = async function handler(req, res) {
  res.setHeader("Allow", "POST, OPTIONS");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Method not allowed." });
    return;
  }

  try {
    const body = await readBody(req);
    const lead = normalizeLead(body);

    if (lead.website) {
      sendJson(res, 200, { ok: true });
      return;
    }

    const validationError = validateLead(lead);
    if (validationError) {
      sendJson(res, 400, { error: validationError });
      return;
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.LEDGR_LEADS_TO_EMAIL;
    const fromEmail = process.env.LEDGR_LEADS_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      sendJson(res, 500, { error: "Lead delivery is not configured yet." });
      return;
    }

    const email = buildLeadEmail(lead);
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: email.subject,
        text: email.text,
        html: email.html
      })
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text();
      console.error("Resend delivery failed:", details);
      sendJson(res, 502, { error: "Could not send the request right now." });
      return;
    }

    sendJson(res, 200, { ok: true });
  } catch (error) {
    console.error("Lead request failed:", error);
    sendJson(res, 400, { error: "Could not process the request." });
  }
};
