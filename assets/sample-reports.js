const SAMPLE_REPORTS = [
  {
    title: "Ledgr Sample - Daily Report.pdf",
    period: "Daily",
    fileId: "1qAhRubQMEoHXy3GnhtURNyfN8UmBub9B",
  },
  {
    title: "Ledgr Sample - Weekly Report.pdf",
    period: "Weekly",
    fileId: "1xCbyDt0Jazih_CiOSgjHewEy6C9X_PLd",
  },
  {
    title: "Ledgr Sample - Monthly Report.pdf",
    period: "Monthly",
    fileId: "1VCkxFHpqeVRbVnwR7nJnXbfVwSayawdc",
  },
];

const escapeHtml = value => String(value).replace(
  /[&<>'"]/g,
  character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character],
);

const renderReportCard = report => {
  const title = escapeHtml(report.title);
  const period = escapeHtml(report.period);
  const previewUrl = `https://drive.google.com/file/d/${report.fileId}/preview`;
  const openUrl = `https://drive.google.com/file/d/${report.fileId}/view?usp=sharing`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${report.fileId}`;

  return `
    <article class="sample-report-card">
      <div class="sample-report-preview">
        <iframe
          src="${previewUrl}"
          title="Preview of ${title}"
          loading="lazy"
          allow="autoplay"
        ></iframe>
      </div>
      <div class="sample-report-card-body">
        <div class="sample-report-icon" aria-hidden="true">PDF</div>
        <h3>${title}</h3>
        <p>${period} Ledgr Report sample</p>
        <div class="sample-report-actions">
          <a class="sample-report-action primary" href="${openUrl}" target="_blank" rel="noopener noreferrer">Open PDF</a>
          <a class="sample-report-action" href="${downloadUrl}" target="_blank" rel="noopener noreferrer">Download PDF</a>
        </div>
      </div>
    </article>
  `;
};

function renderSampleReports() {
  const cards = SAMPLE_REPORTS.map(renderReportCard).join("");

  document.querySelectorAll("[data-sample-report-list]").forEach(element => {
    element.innerHTML = cards;
  });

  document.querySelectorAll("[data-sample-report-status]").forEach(element => {
    element.textContent = "";
  });
}

renderSampleReports();
