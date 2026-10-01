// Lightweight lightbox for the "Photos" gallery on each detail page.
// Include this file on any page that has a .gallery-grid of <img> tags and
// it wires itself up automatically — no per-page setup needed. Clicking a
// photo opens it full-size with Prev/Next, Esc-to-close, and arrow-key nav.

(function () {
  function initLightbox() {
    const images = Array.from(document.querySelectorAll(".gallery-grid img, .doc-list img"));
    if (images.length === 0) return;

    let currentIndex = 0;

    // Build overlay markup once.
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML = `
      <button type="button" class="lightbox-close" aria-label="Close">&times;</button>
      <button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous photo">&larr;</button>
      <img class="lightbox-image" src="" alt="" />
      <button type="button" class="lightbox-nav lightbox-next" aria-label="Next photo">&rarr;</button>
      <div class="lightbox-caption"></div>
      <div class="lightbox-counter"></div>
    `;
    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector(".lightbox-image");
    const captionEl = overlay.querySelector(".lightbox-caption");
    const counterEl = overlay.querySelector(".lightbox-counter");
    const closeBtn = overlay.querySelector(".lightbox-close");
    const prevBtn = overlay.querySelector(".lightbox-prev");
    const nextBtn = overlay.querySelector(".lightbox-next");

    const showMultiControls = images.length > 1;
    prevBtn.style.display = showMultiControls ? "flex" : "none";
    nextBtn.style.display = showMultiControls ? "flex" : "none";

    function render() {
      const img = images[currentIndex];
      imgEl.src = img.currentSrc || img.src;
      imgEl.alt = img.alt || "";
      captionEl.textContent = img.alt || "";
      counterEl.textContent = showMultiControls
        ? `${currentIndex + 1} / ${images.length}`
        : "";
    }

    function open(index) {
      currentIndex = index;
      render();
      overlay.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function close() {
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      render();
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      render();
    }

    images.forEach((img, index) => {
      img.addEventListener("click", () => open(index));
    });

    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", showPrev);
    nextBtn.addEventListener("click", showNext);

    // Click on the dark backdrop (but not the image itself) closes it.
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });

    document.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft" && showMultiControls) showPrev();
      if (e.key === "ArrowRight" && showMultiControls) showNext();
    });
  }

  document.addEventListener("DOMContentLoaded", initLightbox);
})();
