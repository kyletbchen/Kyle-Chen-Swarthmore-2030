// Renders project cards from projects.js into #project-grid.
// Edit projects.js to change content — this file shouldn't need to change
// unless you're altering the card layout itself.

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  grid.innerHTML = PROJECTS.map((p) => {
    const chips = (p.tags || [])
      .map((t) => `<span class="chip">${escapeHtml(t)}</span>`)
      .join("");

    const note = p.placeholder
      ? `<div class="card-placeholder-note">Draft entry — edit this project in projects.js</div>`
      : "";

    return `
      <article class="card">
        <div class="card-tag">${escapeHtml(p.tag)}</div>
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.summary)}</p>
        <div class="chip-row">${chips}</div>
        <a class="card-link" href="${escapeAttr(p.link)}">${escapeHtml(p.linkText || "Learn more")} &rarr;</a>
        ${note}
      </article>
    `;
  }).join("");
}

function renderExperience() {
  const list = document.getElementById("experience-list");
  if (!list || typeof EXPERIENCE === "undefined") return;

  list.innerHTML = EXPERIENCE.map((e) => {
    const chips = (e.tags || [])
      .map((t) => `<span class="chip">${escapeHtml(t)}</span>`)
      .join("");

    const note = e.placeholder
      ? `<div class="card-placeholder-note">Draft entry — edit this role in experience.js</div>`
      : "";

    return `
      <article class="exp-item">
        <div class="exp-head">
          <div>
            <h3>${escapeHtml(e.role)}</h3>
            <div class="exp-company">${escapeHtml(e.company)}</div>
          </div>
          <div class="exp-meta">
            <div class="exp-period">${escapeHtml(e.period)}</div>
            <div class="exp-location">${escapeHtml(e.location)}</div>
          </div>
        </div>
        <p>${escapeHtml(e.summary)}</p>
        <div class="chip-row">${chips}</div>
        <a class="card-link" href="${escapeAttr(e.link)}">${escapeHtml(e.linkText || "Learn more")} &rarr;</a>
        ${note}
      </article>
    `;
  }).join("");
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/"/g, "&quot;");
}

document.addEventListener("DOMContentLoaded", renderProjects);
document.addEventListener("DOMContentLoaded", renderExperience);

// Footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
