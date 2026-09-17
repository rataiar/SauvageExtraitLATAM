/* ==========================================================================
   SAUVAGE EXTRAIT — LATIN AMERICA — interaction layer
   Vanilla JS. No frameworks, no build step. Motion kept deliberately subtle.
   ========================================================================== */

(function () {
  "use strict";

  /* -------------------------------------------------------------- utils */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };
  const escapeHtml = (s) =>
    (s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const displayName = (p) => (p.confirmedName && p.name ? p.name : "@" + p.handle);

  /* -------------------------------------------------------------- nav skin + mobile drawer */
  const nav = $("#siteNav");
  const burger = $("#navBurger");
  const navLinks = $("#navLinks");
  function updateNavSkin() {
    const activeView = document.querySelector(".view.is-active");
    const isLanding = activeView && activeView.id === "view-landing";
    const solid = !isLanding || window.scrollY > window.innerHeight * 0.7;
    nav.classList.toggle("is-solid", solid);
  }
  function closeMobileNav() { navLinks.classList.remove("is-open"); }
  burger.addEventListener("click", () => navLinks.classList.toggle("is-open"));
  window.addEventListener("scroll", updateNavSkin, { passive: true });

  /* -------------------------------------------------------------- routing */
  const views = { landing: $("#view-landing"), event: $("#view-event"), trip: $("#view-trip") };
  function goTo(name, push) {
    if (!views[name]) return;
    Object.keys(views).forEach((k) => views[k].classList.toggle("is-active", k === name));
    $$(".nav-link").forEach((n) => n.classList.toggle("is-active", n.dataset.nav === name));
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    if (push !== false) history.pushState({ view: name }, "", "#" + name);
    closeMobileNav();
    updateNavSkin();
    // (re)pause any playing media when leaving a view
    $$("video").forEach((v) => { if (v.closest(".view") && !v.closest(".view").classList.contains("is-active")) v.pause(); });
  }
  $$("[data-nav]").forEach((node) => node.addEventListener("click", () => goTo(node.dataset.nav)));
  window.addEventListener("popstate", () => {
    const hash = location.hash.replace("#", "") || "landing";
    goTo(hash, false);
  });
  const initial = location.hash.replace("#", "");
  if (initial && views[initial]) goTo(initial, false);
  updateNavSkin();

  /* -------------------------------------------------------------- header meta */
  $("#eventLocation").textContent = SITE.location;
  $("#eventDate").textContent = SITE.eventDate + ", " + SITE.year;
  $("#tripLocation").textContent = SITE.location;
  $("#tripDates").textContent = SITE.tripDates + ", " + SITE.year;

  /* -------------------------------------------------------------- KPI grids */
  function renderKpis(container, kpis) {
    kpis.forEach((k) => {
      const block = el("div", "kpi-block");
      block.innerHTML = `<div class="kpi-value">${k.value}</div><div class="kpi-label">${k.label}</div>`;
      container.appendChild(block);
    });
  }
  renderKpis($("#landingOverallKpiGrid"), SITE.overall.kpis);
  renderKpis($("#eventKpiGrid"), EVENT.kpis);
  renderKpis($("#tripKpiGrid"), TRIP.kpis);
  $("#eventSummary").textContent = EVENT.summary;
  $("#tripSummary").textContent = TRIP.summary;

  /* -------------------------------------------------------------- guest list (Event) */
  // Shown by Instagram handle only, by direct instruction from the PR team —
  // real names are not displayed here even where confirmed elsewhere on the site.
  const guestListEl = $("#guestList");
  EVENT.guests.forEach((g) => {
    const item = el("div", "guest-item");
    item.innerHTML = `
      <a class="g-name" style="display:block;" href="${g.url}" target="_blank" rel="noopener">@${g.handle}</a>
      <div class="g-meta"><span>${escapeHtml(g.country)}</span><span class="g-vit">${g.vit} VIT · ${g.posts} posts</span></div>
    `;
    guestListEl.appendChild(item);
  });

  /* -------------------------------------------------------------- content & coverage (Event) */
  const coverageListEl = $("#eventCoverageList");
  EVENT.content.forEach((c) => {
    const card = el("div", "coverage-card" + (c.preview ? " has-preview" : ""));
    const previewHtml = c.preview
      ? `<div class="cc-preview" data-lightbox data-type="image" data-src="${c.preview}"><img src="${c.preview}" alt="${escapeHtml(c.name)}" loading="lazy" /></div>`
      : `<div class="cc-preview"><span class="cc-noimg">No Preview</span></div>`;
    card.innerHTML = `
      ${previewHtml}
      <div class="cc-name">${escapeHtml(c.name)}</div>
      ${c.country ? `<div class="cc-country">${escapeHtml(c.country)}</div>` : ""}
      <div class="cc-vit">${c.vit} VIT</div>
      <a class="cc-link" href="${c.url}" target="_blank" rel="noopener">View Content →</a>
    `;
    coverageListEl.appendChild(card);
  });

  /* -------------------------------------------------------------- reviewers grid (Trip) */
  const reviewerGridEl = $("#reviewerGrid");
  TRIP.reviewers.forEach((r) => {
    const card = el("div", "reviewer-card");
    const contentLinks = (r.content || [])
      .map((c) => `<a href="${c.url}" target="_blank" rel="noopener">${c.label} — ${c.vit} VIT (${c.activation}) →</a>`)
      .join("");
    const nameLine = r.confirmedName
      ? `<div class="r-name">${escapeHtml(r.name)}</div><a class="r-handle" href="${r.url}" target="_blank" rel="noopener">@${r.handle}</a>`
      : `<a class="r-name" style="display:block;" href="${r.url}" target="_blank" rel="noopener">@${r.handle}</a>`;
    card.innerHTML = `
      <div class="reviewer-portrait">
        <a href="${r.url}" target="_blank" rel="noopener"><img src="${r.portrait}" alt="${escapeHtml(displayName(r))}" loading="lazy" /></a>
        <div class="reviewer-vit-badge"><div class="rv-value">${r.vit}</div><div class="rv-label">VIT Generated</div></div>
      </div>
      <div class="reviewer-body">
        ${nameLine}
        <div class="r-country">${escapeHtml(r.country)}</div>
        ${contentLinks ? `<div class="reviewer-content-links">${contentLinks}</div>` : ""}
      </div>
    `;
    reviewerGridEl.appendChild(card);
  });

  /* -------------------------------------------------------------- trip hero mosaic (built from confirmed portraits) */
  const mosaicEl = $("#tripHeroMosaic");
  TRIP.reviewers.forEach((r) => {
    const img = el("img");
    img.src = r.portrait;
    img.alt = "";
    mosaicEl.appendChild(img);
  });

  /* -------------------------------------------------------------- journey (Trip) */
  // A journey day can be a single description ("media"), or a set of same-day
  // "activities" (e.g. Masterclass + Lunch + Event) rendered back-to-back with
  // no separator line between them, sharing one day/date marker.
  const journeyEl = $("#journeyList");
  function journeyMediaHtml(media) {
    return (media || [])
      .map((m) => {
        if (m.type === "video") {
          return `<div class="jm-item" data-lightbox data-type="video" data-src="${m.src}"><video muted loop playsinline poster="${m.poster}"><source src="${m.src}" type="video/mp4"></video></div>`;
        }
        const ratio = m.w && m.h ? ` style="aspect-ratio:${m.w}/${m.h};"` : "";
        return `<div class="jm-item jm-photo" data-lightbox data-type="image" data-src="${m.src}"${ratio}><img src="${m.src}" alt="" loading="lazy" /></div>`;
      })
      .join("");
  }
  TRIP.journey.forEach((j) => {
    const item = el("div", "journey-item");
    let contentHtml = "";
    if (j.activities && j.activities.length) {
      contentHtml = j.activities
        .map((a) => {
          const mediaHtml = journeyMediaHtml(a.media);
          return `
            <div class="journey-activity">
              <div class="ja-time">${escapeHtml(a.time)}</div>
              <h4>${escapeHtml(a.title)}</h4>
              <div class="j-location">${escapeHtml(a.location)}</div>
              <p>${escapeHtml(a.description)}</p>
              ${mediaHtml ? `<div class="journey-media">${mediaHtml}</div>` : ""}
              ${a.linksToEvent ? `<div class="journey-link-note"><span data-nav="event" style="cursor:pointer;">See the Event chapter →</span></div>` : ""}
            </div>
          `;
        })
        .join("");
    } else {
      const mediaHtml = journeyMediaHtml(j.media);
      contentHtml = `
        <h3>${escapeHtml(j.title)}</h3>
        <div class="j-location">${escapeHtml(j.location)}</div>
        <p>${escapeHtml(j.description)}</p>
        ${mediaHtml ? `<div class="journey-media">${mediaHtml}</div>` : ""}
        ${j.linksToEvent ? `<div class="journey-link-note"><span data-nav="event" style="cursor:pointer;">See the Event chapter →</span></div>` : ""}
      `;
    }
    item.innerHTML = `
      <div class="journey-marker"><div class="j-day">${j.day}</div><div class="j-date">${j.date}</div></div>
      <div class="journey-content">${contentHtml}</div>
    `;
    journeyEl.appendChild(item);
  });
  // re-bind nav links created dynamically inside journey
  $$("[data-nav]").forEach((node) => {
    if (!node._bound) {
      node.addEventListener("click", () => goTo(node.dataset.nav));
      node._bound = true;
    }
  });
  // autoplay muted journey b-roll on hover/visibility (desktop hover, mobile: play on tap)
  $$(".jm-item video").forEach((v) => {
    v.addEventListener("mouseenter", () => v.play().catch(() => {}));
    v.addEventListener("mouseleave", () => v.pause());
  });

  /* -------------------------------------------------------------- masonry builder (uncropped "Tetris" packing) */
  function buildMasonry(container, items) {
    if (!container) return;
    items.forEach((it) => {
      const cell = el("div", "m-item");
      cell.setAttribute("data-lightbox", "");
      cell.setAttribute("data-type", "image");
      cell.setAttribute("data-src", it.src);
      cell.innerHTML = `<img src="${it.src}" alt="${escapeHtml(it.alt || "")}" loading="lazy" />`;
      container.appendChild(cell);
    });
  }

  // Event Story — "Inside the vineyard.": every photo from the PRODUCTION folder, uncropped.
  const vineyardItems = [];
  for (let i = 1; i <= 38; i++) {
    vineyardItems.push({ src: `assets/event/vineyard/v-${String(i).padStart(2, "0")}.jpg`, alt: "Sauvage Extrait Event — Inside the vineyard" });
  }
  buildMasonry($("#vineyardMasonry"), vineyardItems);

  /* -------------------------------------------------------------- scrolling filmstrip (uncropped photos) */
  function buildFilmstrip(container, items) {
    if (!container) return;
    items.forEach((it) => {
      const cell = el("div", "fs-item");
      cell.setAttribute("data-lightbox", "");
      cell.setAttribute("data-type", "image");
      cell.setAttribute("data-src", it.src);
      cell.innerHTML = `<img src="${it.src}" alt="${escapeHtml(it.alt || "")}" loading="lazy" />`;
      container.appendChild(cell);
    });
  }

  // Event Gallery — every photo from the GUESTS folder, uncropped, horizontally scrolling.
  const guestsPhotoItems = [];
  for (let i = 1; i <= 49; i++) {
    guestsPhotoItems.push({ src: `assets/event/guests-gallery/gg-${String(i).padStart(2, "0")}.jpg`, alt: "Sauvage Extrait Event guests" });
  }
  buildFilmstrip($("#guestsFilmstrip"), guestsPhotoItems);

  /* -------------------------------------------------------------- click-to-play uncropped video grid */
  function buildVideoGrid(container, items) {
    if (!container) return;
    items.forEach((it) => {
      const cell = el("div", "vg-item");
      const ratio = it.w && it.h ? ` style="aspect-ratio:${it.w}/${it.h};"` : "";
      cell.innerHTML = `
        <video muted loop playsinline preload="metadata" poster="${it.poster}"${ratio}><source src="${it.src}" type="video/mp4"></video>
        <div class="vg-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
      `;
      const video = cell.querySelector("video");
      cell.addEventListener("click", () => {
        if (video.paused) {
          video.play().catch(() => {});
          cell.classList.add("is-playing");
        } else {
          video.pause();
          cell.classList.remove("is-playing");
        }
      });
      video.addEventListener("pause", () => cell.classList.remove("is-playing"));
      container.appendChild(cell);
    });
  }

  // Event Gallery — every video from the GUESTS folder, uncropped, click to play.
  const GUESTS_VIDEO_DIMS = {
    1: [1080, 1920], 2: [1080, 1920], 3: [1080, 1920], 4: [1080, 1920], 5: [1080, 1920],
    6: [1080, 1920], 7: [1080, 1920], 8: [1080, 1920], 9: [1080, 1920], 10: [1080, 1920],
    11: [1080, 1920], 12: [1080, 1920], 13: [1080, 1920], 14: [1080, 1440],
  };
  const guestsVideoItems = [];
  for (let i = 1; i <= 14; i++) {
    const n = String(i).padStart(2, "0");
    const [w, h] = GUESTS_VIDEO_DIMS[i];
    guestsVideoItems.push({ src: `assets/event/guests-video/ev-${n}.mp4`, poster: `assets/event/guests-video/ev-${n}-poster.jpg`, w, h });
  }

  /* -------------------------------------------------------------- scrolling video filmstrip (uncropped, click-to-play) */
  function buildVideoFilmstrip(container, items) {
    if (!container) return;
    items.forEach((it) => {
      const cell = el("div", "vf-item");
      const ratio = it.w && it.h ? ` style="aspect-ratio:${it.w}/${it.h};"` : "";
      cell.innerHTML = `
        <video muted loop playsinline preload="metadata" poster="${it.poster}"${ratio}><source src="${it.src}" type="video/mp4"></video>
        <div class="vg-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
      `;
      const video = cell.querySelector("video");
      cell.addEventListener("click", () => {
        if (video.paused) {
          video.play().catch(() => {});
          cell.classList.add("is-playing");
        } else {
          video.pause();
          cell.classList.remove("is-playing");
        }
      });
      video.addEventListener("pause", () => cell.classList.remove("is-playing"));
      container.appendChild(cell);
    });
  }
  buildVideoFilmstrip($("#guestsVideoGrid"), guestsVideoItems);

  /* -------------------------------------------------------------- unified media masonry (photos + videos packed Tetris-style) */
  function buildMediaMasonry(container, items) {
    if (!container) return;
    items.forEach((it) => {
      if (it.type === "video") {
        const cell = el("div", "m-item m-video");
        const ratio = it.w && it.h ? ` style="aspect-ratio:${it.w}/${it.h};"` : "";
        cell.innerHTML = `
          <video muted loop playsinline preload="metadata" poster="${it.poster}"${ratio}><source src="${it.src}" type="video/mp4"></video>
          <div class="vg-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
        `;
        const video = cell.querySelector("video");
        cell.addEventListener("click", () => {
          if (video.paused) {
            video.play().catch(() => {});
            cell.classList.add("is-playing");
          } else {
            video.pause();
            cell.classList.remove("is-playing");
          }
        });
        video.addEventListener("pause", () => cell.classList.remove("is-playing"));
        container.appendChild(cell);
      } else {
        const cell = el("div", "m-item");
        cell.setAttribute("data-lightbox", "");
        cell.setAttribute("data-type", "image");
        cell.setAttribute("data-src", it.src);
        cell.innerHTML = `<img src="${it.src}" alt="${escapeHtml(it.alt || "")}" loading="lazy" />`;
        container.appendChild(cell);
      }
    });
  }

  // Trip Visual Story — every asset from the AGENDA folder: the photos and videos
  // behind the TRIP CONTENT links, plus additional clips with no link, all uncropped,
  // packed together into a single Tetris-style masonry with no separation by media type.
  const tripVisualItems = [
    { type: "image", src: "assets/trip/visual/alexander-728.jpg", alt: "Alexander Taramasco — Trip content" },
    { type: "image", src: "assets/trip/visual/daniel-jimenez.jpg", alt: "Daniel Jimenez — Trip content" },
    { type: "image", src: "assets/trip/visual/tonn-269.jpg", alt: "Tonn Martin — Trip content" },
    { type: "image", src: "assets/trip/visual/extra-img-01.jpg", alt: "Educational Trip — Visual Story" },
    { type: "video", src: "assets/trip/visual-video/agustin-931.mp4", poster: "assets/trip/visual-video/agustin-931-poster.jpg", w: 720, h: 1280 },
    { type: "video", src: "assets/trip/visual-video/alexander-112.mp4", poster: "assets/trip/visual-video/alexander-112-poster.jpg", w: 720, h: 1280 },
    { type: "image", src: "assets/trip/visual/extra-img-02.jpg", alt: "Educational Trip — Visual Story" },
    { type: "video", src: "assets/trip/visual-video/ilan-108.mp4", poster: "assets/trip/visual-video/ilan-108-poster.jpg", w: 720, h: 1280 },
    { type: "video", src: "assets/trip/visual-video/lucas-048.mp4", poster: "assets/trip/visual-video/lucas-048-poster.jpg", w: 720, h: 1280 },
    { type: "image", src: "assets/trip/visual/extra-img-03.jpg", alt: "Educational Trip — Visual Story" },
    { type: "video", src: "assets/trip/visual-video/lucas-058.mp4", poster: "assets/trip/visual-video/lucas-058-poster.jpg", w: 720, h: 1280 },
    { type: "video", src: "assets/trip/visual-video/lucas-086-snaptik.mp4", poster: "assets/trip/visual-video/lucas-086-snaptik-poster.jpg", w: 576, h: 1024 },
    { type: "video", src: "assets/trip/visual-video/tonn-055.mp4", poster: "assets/trip/visual-video/tonn-055-poster.jpg", w: 576, h: 1024 },
    // additional clips with no matching link in the source document
    { type: "video", src: "assets/trip/visual-video/ilan-19.mp4", poster: "assets/trip/visual-video/ilan-19-poster.jpg", w: 576, h: 1024 },
    { type: "video", src: "assets/trip/visual-video/extra-01.mp4", poster: "assets/trip/visual-video/extra-01-poster.jpg", w: 720, h: 1280 },
    { type: "video", src: "assets/trip/visual-video/extra-02.mp4", poster: "assets/trip/visual-video/extra-02-poster.jpg", w: 720, h: 1280 },
    { type: "video", src: "assets/trip/visual-video/extra-03.mp4", poster: "assets/trip/visual-video/extra-03-poster.jpg", w: 720, h: 1280 },
    { type: "video", src: "assets/trip/visual-video/extra-04.mp4", poster: "assets/trip/visual-video/extra-04-poster.jpg", w: 720, h: 1280 },
    { type: "video", src: "assets/trip/visual-video/extra-05.mp4", poster: "assets/trip/visual-video/extra-05-poster.jpg", w: 720, h: 1280 },
    { type: "video", src: "assets/trip/visual-video/extra-06.mp4", poster: "assets/trip/visual-video/extra-06-poster.jpg", w: 720, h: 1280 },
    { type: "video", src: "assets/trip/visual-video/extra-07.mp4", poster: "assets/trip/visual-video/extra-07-poster.jpg", w: 720, h: 1280 },
    { type: "video", src: "assets/trip/visual-video/extra-08.mp4", poster: "assets/trip/visual-video/extra-08-poster.jpg", w: 720, h: 1280 },
  ];
  buildMediaMasonry($("#tripVisualMasonry"), tripVisualItems);

  /* -------------------------------------------------------------- lightbox */
  const lightbox = $("#lightbox");
  const lightboxInner = $("#lightboxInner");
  let lightboxItems = [];
  let lightboxIndex = 0;

  function collectLightboxItemsFor(triggerEl) {
    // gather sibling data-lightbox items within the same scroll container for prev/next
    const scope = triggerEl.closest(".section, .masonry, .filmstrip, .coverage-grid") || document;
    return $$("[data-lightbox]", scope);
  }

  function openLightbox(triggerEl) {
    lightboxItems = collectLightboxItemsFor(triggerEl);
    lightboxIndex = lightboxItems.indexOf(triggerEl);
    renderLightbox();
    lightbox.classList.add("is-open");
  }
  function renderLightbox() {
    const node = lightboxItems[lightboxIndex];
    if (!node) return;
    const type = node.getAttribute("data-type") || "image";
    const src = node.getAttribute("data-src");
    lightboxInner.innerHTML = "";
    if (type === "video") {
      const v = el("video");
      v.src = src; v.controls = true; v.autoplay = true; v.playsInline = true;
      lightboxInner.appendChild(v);
    } else {
      const img = el("img");
      img.src = src; img.alt = "";
      lightboxInner.appendChild(img);
    }
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxInner.innerHTML = "";
  }
  document.addEventListener("click", (e) => {
    // clicks on video-grid/filmstrip/masonry video items are handled by their own click-to-play logic
    if (e.target.closest(".vg-item") || e.target.closest(".vf-item") || e.target.closest(".m-video")) return;
    const trigger = e.target.closest("[data-lightbox]");
    if (trigger) { openLightbox(trigger); return; }
  });
  $("#lightboxClose").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  $("#lightboxNext").addEventListener("click", () => { lightboxIndex = (lightboxIndex + 1) % lightboxItems.length; renderLightbox(); });
  $("#lightboxPrev").addEventListener("click", () => { lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length; renderLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") $("#lightboxNext").click();
    if (e.key === "ArrowLeft") $("#lightboxPrev").click();
  });

  /* -------------------------------------------------------------- reveal on scroll */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01, rootMargin: "0px 0px -5% 0px" }
  );
  $$(".reveal").forEach((n) => io.observe(n));
})();
