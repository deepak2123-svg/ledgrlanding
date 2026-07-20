import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { collection, getDocs, getFirestore, orderBy, query } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const app = initializeApp({
  apiKey: "AIzaSyCCPbJdMU0xQHWCtVLakaFeeRCdY3kMP4s",
  authDomain: "classtracker-84920.firebaseapp.com",
  projectId: "classtracker-84920",
  storageBucket: "classtracker-84920.firebasestorage.app",
  messagingSenderId: "170006710635",
  appId: "1:170006710635:web:cf27aa33008adb93daa42e",
});

const escapeHtml = value => String(value || "").replace(/[&<>'"]/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[character]));
const safeUrl = value => { try { const url = new URL(value); return url.protocol === "https:" ? url.href : ""; } catch { return ""; } };

async function renderSampleReports() {
  const lists = [...document.querySelectorAll("[data-sample-report-list]")];
  const statuses = [...document.querySelectorAll("[data-sample-report-status]")];
  if (!lists.length) return;
  try {
    const snapshot = await getDocs(query(collection(getFirestore(app), "sampleReports"), orderBy("createdAt", "desc")));
    const reports = snapshot.docs.map(item => item.data()).filter(item => item.title && safeUrl(item.downloadUrl));
    if (!reports.length) {
      statuses.forEach(element => { element.textContent = "Sample reports are being prepared. Book a demo and we’ll walk you through a live report."; });
      return;
    }
    const cards = reports.map(report => { const url=safeUrl(report.downloadUrl); const title=escapeHtml(report.title); return `<article class="sample-report-card"><div class="sample-report-icon" aria-hidden="true">PDF</div><h3>${title}</h3><p>Public sample Ledgr Report</p><div class="sample-report-actions"><a class="sample-report-action primary" href="${url}" target="_blank" rel="noopener noreferrer">Preview PDF</a><a class="sample-report-action" href="${url}" download>Download</a></div></article>`; }).join("");
    lists.forEach(element => { element.innerHTML = cards; });
    statuses.forEach(element => { element.textContent = ""; });
  } catch {
    statuses.forEach(element => { element.textContent = "Sample reports are temporarily unavailable. Please book a demo to see Ledgr Report in action."; });
  }
}

renderSampleReports();
