/* =========================================================
   DailyFlutterUI — Interactions
   ========================================================= */
'use strict';

/* ---------- Data (edit these to customize) ---------- */
// Each entry is one app, shown as a title followed by its screens in a 4-per-row grid.
// Add another object here to add a second app group.
const PORTFOLIO = [
  {
    title: 'Airbnb Booking App UI',
    shots: [
      'assets/1.png',
      'assets/2.png',
      'assets/3.png',
      'assets/4.png',
      'assets/5.png',
      'assets/6.png',
      'assets/7.png',
      'assets/8.png',
      'assets/9.png',
      'assets/10.png',
      'assets/11.png',
      'assets/12.png',
      'assets/13.png',
      'assets/14.png',
      'assets/15.png',
      'assets/16.png',
      'assets/17.png',
      'assets/18.png',
      'assets/19.png',
      'assets/20.png',
    ],
  },
  {
    title: 'Pizza App UI',
    shots: [
      'assets/a1.png',
      'assets/a2.png',
      'assets/a3.png',
      'assets/a4.png',
      'assets/a5.png',
      'assets/a6.png',
      'assets/a7.png',
      'assets/a8.png',
      'assets/a9.png',
      'assets/a10.png',

      'assets/a11.png',

      'assets/a12.png',

      'assets/a13.png',


      'assets/a15.png',

      'assets/a16.png',

      'assets/a14.png',

    ],
  },
  {
    title: 'Parcel Delivery App UI',
    shots: [
      'assets/p1.png',
      'assets/p2.png',
      'assets/p3.png',
      'assets/p4.png',
      'assets/p5.png',
      'assets/p6.png',
      'assets/p7.png',
      'assets/p8.png',
      'assets/p9.png',
      'assets/p10.png',
      'assets/p11.png',
      'assets/p12.png',
      'assets/p13.png',
      'assets/p14.png',
      'assets/p15.png',
      'assets/p16.png',
    ],
  },
  {
    title: 'Food Delivery App UI',
    shots: [
      'assets/food0.png',
      'assets/food.png',
      'assets/food1.png',
      'assets/food2.png',
      'assets/food3.png',
      'assets/food4.png',
      'assets/food5.png',
      'assets/food6.png',
      'assets/food7.png',
      'assets/food8.png',
      'assets/food9.png',
      'assets/food10.png',
      'assets/food11.png',
      'assets/food12.png',
      'assets/food13.png',
      'assets/food14.png',
    ],
  },
  {
    title: 'Fashion App UI',
    shots: [
      'assets/c1.png',
      'assets/c2.png',
      'assets/c3.png',
      'assets/c4.png',
      'assets/c5.png',
      'assets/c6.png',
      'assets/c7.png',
      'assets/c8.png',
      'assets/c9.png',
      'assets/c10.png',
      'assets/c11.png',
      'assets/c12.png',
      'assets/c13.png',
      'assets/c14.png',
      'assets/c15.png',
      'assets/c16.png',
    ],
  },
  {
    title: 'Fintech App UI',
    shots: [
      'assets/f1.png',
      'assets/f2.png',
      'assets/f3.png',
      'assets/f4.png',
      'assets/f5.png',
      'assets/f6.png',
      'assets/f7.png',
      'assets/f8.png',
      'assets/f9.png',
      'assets/f10.png',
      'assets/f11.png',
      'assets/f12.png',
      'assets/f13.png',
      'assets/f14.png',
      'assets/f15.png',
      'assets/f16.png',

      'assets/f17.png',

      'assets/f18.png',

      'assets/f19.png',

      'assets/f20.png',
    ],
  },
];

/* ---------- Real shipped apps ----------
   Put the full App Store link (must contain the .../id1234567890 part) in `appStore`
   and the card auto-pulls media from the App Store — no image needed:
     1) the app's first screenshot if Apple's API exposes one, else
     2) the app icon, else a lettered placeholder.
   (Apple only returns screenshots for some apps, so it varies per app.)
   To force your own picture, set `image: 'assets/projects/name.jpg'` — it always wins.
   Leave appStore or playStore as '' to hide that store button.
   Google Play has no public API, so its thumbnail can't be auto-fetched. */
const PROJECTS = [
  {
    name: 'RenAI - Rental App', tagline: 'Property App', image: '',
    appStore: 'https://apps.apple.com/my/app/renai-rental-app/id6743470580', playStore: 'https://play.google.com/store/apps/details?id=com.asia.renai&pcampaignid=web_share'
  },
  {
    name: 'SK Plus+', tagline: 'Warehouse App', image: '',
    appStore: 'https://apps.apple.com/my/app/sk-plus/id6747104029', playStore: 'https://play.google.com/store/apps/details?id=com.asia.skspeed&pcampaignid=web_share'
  },
  {
    name: 'SimpleKeyz', tagline: 'Property App', image: '',
    appStore: 'https://apps.apple.com/my/app/simplekeyz/id6758985100', playStore: 'https://play.google.com/store/apps/details?id=com.asia.simplekeyz&pcampaignid=web_share'
  },

  {
    name: 'HavenX', tagline: 'Property App', image: '',
    appStore: 'https://apps.apple.com/my/app/havenx/id6758002267', playStore: 'https://play.google.com/store/apps/details?id=com.asia.urbanroom&pcampaignid=web_share'
  },
];

/* ---------- Client testimonials ----------
   `avatar` is a Memoji-style image. To use your own real Memoji, save the PNG
   into assets/avatars/ and set avatar: 'assets/avatars/sarah.png'. */
const TESTIMONIALS = [
  { quote: 'Kai turned our Figma into a pixel-perfect app faster than we expected. Smooth animations and zero bugs at launch.', name: 'Bryan Foster', rating: 5, avatar: 'https://api.dicebear.com/9.x/personas/svg?seed=Bryan&backgroundColor=ede7ff' },
  { quote: 'Best Flutter developer I\'ve worked with. Clear communication, clean code, and shipped right on schedule.', name: 'Daniel Mercer', rating: 5, avatar: 'https://api.dicebear.com/9.x/personas/svg?seed=Daniel&backgroundColor=d7f0ff' },
  { quote: 'Our app feels premium now. Performance is great and the UI is exactly what we wanted. Highly recommend.', name: 'Aisha Rahman', rating: 5, avatar: 'https://api.dicebear.com/9.x/personas/svg?seed=Aisha&backgroundColor=ffe5ec' },
  { quote: 'Super professional from start to finish. The app runs buttery smooth and looks fantastic on every device.', name: 'Emily Carter', rating: 5, avatar: 'https://api.dicebear.com/9.x/personas/svg?seed=Emily&backgroundColor=e0f7ec' },
  { quote: 'Delivered exactly what we needed and even suggested improvements we hadn\'t thought of. A real pro.', name: 'Marcus Lee', rating: 5, avatar: 'https://api.dicebear.com/9.x/personas/svg?seed=Marcus&backgroundColor=fff2cc' },
  { quote: 'Great attention to detail. The animations and transitions make our product feel truly high-end.', name: 'Sophia Bennett', rating: 5, avatar: 'https://api.dicebear.com/9.x/personas/svg?seed=Sophia&backgroundColor=ffe5ec' },
  { quote: 'Fast, reliable, and easy to work with. He understood the brief instantly and nailed the final result.', name: 'James Walker', rating: 5, avatar: 'https://api.dicebear.com/9.x/personas/svg?seed=James&backgroundColor=d7f0ff' },
  { quote: 'The whole process was effortless. Clean handover, well-structured code, and a beautiful finished app.', name: 'Olivia Hughes', rating: 5, avatar: 'https://api.dicebear.com/9.x/personas/svg?seed=Olivia&backgroundColor=ede7ff' },
  { quote: 'Couldn\'t be happier with the result. Responsive, talented, and genuinely cares about quality.', name: 'Nathan Brooks', rating: 5, avatar: 'https://api.dicebear.com/9.x/personas/svg?seed=Nathan&backgroundColor=e0f7ec' },
];

/* Brand glyphs for store buttons + a filled star */
const STORE_ICONS = {
  apple: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 12.04c-.03-2.9 2.37-4.29 2.48-4.36-1.35-1.98-3.46-2.25-4.21-2.28-1.79-.18-3.5 1.05-4.41 1.05-.91 0-1.91-1.03-3.15-1-1.62.02-3.11.94-3.94 2.39-1.68 2.92-.43 7.25 1.21 9.62.8 1.16 1.76 2.46 3.02 2.41 1.21-.05 1.67-.78 3.13-.78 1.46 0 1.87.78 3.15.76 1.3-.02 2.12-1.18 2.92-2.35.92-1.35 1.3-2.66 1.32-2.73-.03-.01-2.53-.97-2.55-3.83zM14.78 4.62c.67-.81 1.12-1.94.99-3.07-.96.04-2.13.64-2.82 1.45-.62.72-1.16 1.87-1.02 2.97 1.07.08 2.17-.54 2.85-1.35z"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.6 2.4c-.37.2-.6.58-.6 1.05v17.1c0 .47.23.85.6 1.05l9.96-9.6L3.6 2.4zm12.2 7.5L5.4 3.86l8.95 8.64 1.45-2.6zm3.1 1.78-2.3-1.32-1.65 2.99 1.66 1.6 2.29-1.32c.74-.43.74-1.52 0-1.95zM5.4 20.14l10.4-6.04-1.45-1.4-8.95 7.44z"/></svg>',
};
/* Chevron for the "See more" toggle — flips over when the grid opens */
const CHEVRON = '<svg class="ui-more__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

const STAR = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.26 6.85.78-5.07 4.66 1.38 6.74L12 17.77 5.94 20.44l1.38-6.74L2.25 9.04l6.85-.78L12 2z"/></svg>';

/* Feather-style stroke icons (24x24) */
const ICN = {
  phone: '<rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M11 18h2"/>',
  design: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  server: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
  zap: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
  tools: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2.3-2.3 2.7-2.7z"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.9.7-2.2-.1-3a2.1 2.1 0 0 0-2.9 0z"/><path d="M12 15l-3-3a16 16 0 0 1 8-9c2.5 0 4 1.5 4 4a16 16 0 0 1-9 8z"/><path d="M9 12H4s.5-2.8 2-4c1.7-1.3 5 0 5 0"/><path d="M12 15v5s2.8-.5 4-2c1.3-1.7 0-5 0-5"/>',
};

const SERVICES = [
  { icon: ICN.phone, title: 'Mobile App Development', desc: 'Cross-platform iOS & Android apps built with Flutter — fast, scalable, and reliable.' },
  { icon: ICN.design, title: 'UI / UX to Flutter', desc: 'Turn your Figma or Adobe XD designs into pixel-perfect, animated Flutter screens.' },
  { icon: ICN.server, title: 'Firebase & Backend', desc: 'Auth, Firestore, push notifications and cloud functions — full backend integration.' },
  { icon: ICN.zap, title: 'App Optimization', desc: 'Improve performance, reduce build size, and smooth out janky animations.' },
  { icon: ICN.tools, title: 'Maintenance & Support', desc: 'Bug fixes, new features, and updates to keep your app healthy and current.' },
  { icon: ICN.rocket, title: 'App Store Deployment', desc: 'Publish to the App Store and Google Play with proper setup and compliance.' },
];

const svg = (paths, w = 24) => `<svg viewBox="0 0 ${w} ${w}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

/* ---------- Helpers ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };

/* ---------- Render sections ---------- */
const SHOTS_VISIBLE = 4;   // screens shown before the "See more" toggle

function renderPortfolio() {
  const wrap = $('#showcaseGroups'); if (!wrap) return;

  PORTFOLIO.filter(app => app.shots && app.shots.length).forEach(app => {
    const group = el('div', 'ui-group');
    group.appendChild(el('h3', 'ui-group__title reveal', app.title));

    const grid = el('div', 'ui-grid');
    app.shots.forEach((src, i) => {
      const shot = el('figure', 'ui-shot reveal');
      if (i >= SHOTS_VISIBLE) shot.classList.add('is-extra');   // hidden until expanded
      shot.style.transitionDelay = `${(i % 4) * 80}ms`;         // stagger across each row
      shot.tabIndex = 0;
      shot.innerHTML = `<img src="${src}" alt="${app.title} screen ${i + 1}" loading="lazy" />`;
      shot.addEventListener('click', () => openLightbox(app, i));
      shot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(app, i); }
      });
      grid.appendChild(shot);
    });
    group.appendChild(grid);

    // Only worth a toggle if some screens are actually tucked away.
    if (app.shots.length > SHOTS_VISIBLE) {
      const hidden = app.shots.length - SHOTS_VISIBLE;
      const more = el('div', 'ui-more');
      const btn = el('button', 'ui-more__btn');
      const setLabel = (open) => {
        btn.innerHTML = open
          ? `<span>Show less</span>${CHEVRON}`
          : `<span>See all ${app.shots.length} screens</span><span class="ui-more__count">+${hidden}</span>${CHEVRON}`;
      };
      setLabel(false);
      btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener('click', () => {
        const open = !grid.classList.contains('is-expanded');
        btn.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', String(open));
        setLabel(open);
        toggleShots(grid, open, () => {
          if (!open) group.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
      more.appendChild(btn);
      group.appendChild(more);
    }

    wrap.appendChild(group);
  });
}

/* Smoothly open/close the hidden screens: the grid's height is tweened between
   its measured collapsed and expanded size while the extras fade up on a stagger.
   They stay display:none until asked for, so their images never load early. */
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)');

function animateHeight(grid, from, to, onDone) {
  if (grid._anim) grid._anim();          // a previous tween is still running — drop it

  grid.classList.add('is-animating');
  grid.style.height = `${from}px`;
  void grid.offsetHeight;                // flush, or the browser jumps straight to `to`
  grid.style.height = `${to}px`;

  const stop = (finished) => {
    grid.removeEventListener('transitionend', onEnd);
    clearTimeout(timer);
    grid._anim = null;
    grid.style.height = '';
    grid.classList.remove('is-animating');
    if (finished && onDone) onDone();
  };
  const onEnd = (e) => { if (e.target === grid && e.propertyName === 'height') stop(true); };
  const timer = setTimeout(() => stop(true), 800);   // in case transitionend never lands
  grid.addEventListener('transitionend', onEnd);
  grid._anim = () => stop(false);
}

function toggleShots(grid, open, onDone) {
  const extras = $$('.ui-shot.is-extra', grid);

  if (REDUCED_MOTION.matches) {
    grid.classList.toggle('is-expanded', open);
    extras.forEach(n => n.classList.toggle('in', open));
    if (onDone) onDone();
    return;
  }

  const start = grid.offsetHeight;

  if (open) {
    grid.classList.add('is-expanded');
    extras.forEach((n, i) => {
      n.classList.remove('in');
      n.style.transitionDelay = `${90 + (i % 4) * 70}ms`;   // ripple across each row
    });
    animateHeight(grid, start, grid.offsetHeight, onDone);
    // Two frames, so the browser lays the extras out (still transparent) before
    // they flip to `.in` — in the same frame there'd be nothing to transition from.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      extras.forEach(n => n.classList.add('in'));
    }));
  } else {
    extras.forEach(n => { n.style.transitionDelay = '0ms'; n.classList.remove('in'); });
    setTimeout(() => {                                      // fade them out, then slide shut
      grid.classList.remove('is-expanded');
      animateHeight(grid, start, grid.offsetHeight, onDone);
    }, 170);
  }
}

/* ---------- Lightbox — the grid thumbnails are too small to read, so a click
   opens the screen full size, with arrow-key, click and swipe stepping. ---------- */
let lbEl = null, lbShots = [], lbIndex = 0, lbTitle = '';

function openLightbox(app, i) {
  lbShots = app.shots; lbIndex = i; lbTitle = app.title;
  if (!lbEl) lbEl = buildLightbox();
  paintLightbox();
  lbEl.classList.add('open');
  document.body.style.overflow = 'hidden';   // don't scroll the page behind it
  lbEl.querySelector('.lightbox__close').focus();
}

function closeLightbox() {
  if (!lbEl) return;
  lbEl.classList.remove('open');
  document.body.style.overflow = '';
}

function stepLightbox(d) {
  lbIndex = (lbIndex + d + lbShots.length) % lbShots.length;   // wraps both ways
  paintLightbox();
}

function paintLightbox() {
  const img = lbEl.querySelector('.lightbox__img');
  img.src = lbShots[lbIndex];
  img.alt = `${lbTitle} screen ${lbIndex + 1}`;
  lbEl.querySelector('.lightbox__count').textContent = `${lbIndex + 1} / ${lbShots.length}`;

  const single = lbShots.length < 2;                 // nothing to step to — drop the arrows
  lbEl.querySelectorAll('.lightbox__nav').forEach(n => { n.hidden = single; });
  if (single) return;
  [1, -1].forEach(d => {                             // warm the neighbours so stepping doesn't flash
    new Image().src = lbShots[(lbIndex + d + lbShots.length) % lbShots.length];
  });
}

function buildLightbox() {
  const box = el('div', 'lightbox');
  box.innerHTML = `
    <button class="lightbox__close" aria-label="Close">&times;</button>
    <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous screen">&#8249;</button>
    <img class="lightbox__img" alt="" />
    <button class="lightbox__nav lightbox__nav--next" aria-label="Next screen">&#8250;</button>
    <span class="lightbox__count"></span>`;
  document.body.appendChild(box);

  box.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
  box.querySelector('.lightbox__nav--prev').addEventListener('click', () => stepLightbox(-1));
  box.querySelector('.lightbox__nav--next').addEventListener('click', () => stepLightbox(1));
  box.addEventListener('click', (e) => { if (e.target === box) closeLightbox(); });  // click the backdrop

  // Swipe — on a phone the arrows are small targets, so let a drag across the shot step too.
  let sx = 0, sy = 0, swiping = false;
  box.addEventListener('touchstart', (e) => {
    swiping = e.touches.length === 1;
    if (swiping) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }
  }, { passive: true });
  box.addEventListener('touchend', (e) => {
    if (!swiping) return;
    swiping = false;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) stepLightbox(dx < 0 ? 1 : -1);
  }, { passive: true });

  document.addEventListener('keydown', (e) => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });
  return box;
}

function renderServices() {
  const grid = $('#servicesGrid'); if (!grid) return;
  SERVICES.forEach((s, i) => {
    const card = el('article', 'card service-card reveal');
    card.style.transitionDelay = `${(i % 3) * 80}ms`;
    card.innerHTML = `
      <div class="service-card__icon">${svg(s.icon)}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>`;
    grid.appendChild(card);
  });
}

/* Pull the numeric app id out of an App Store URL (…/id1234567890). */
const appStoreId = (url) => (url && url.match(/id(\d+)/) || [])[1] || '';

/* Load JSON from a JSONP endpoint (used for Apple's iTunes Lookup API — no CORS needed). */
let __jsonpSeq = 0;
function jsonp(url) {
  return new Promise((resolve, reject) => {
    const cb = '__jsonp_cb_' + (++__jsonpSeq);
    const s = el('script');
    const timer = setTimeout(() => { cleanup(); reject(new Error('timeout')); }, 8000);
    const cleanup = () => { delete window[cb]; s.remove(); clearTimeout(timer); };
    window[cb] = (data) => { cleanup(); resolve(data); };
    s.onerror = () => { cleanup(); reject(new Error('jsonp error')); };
    s.src = url + (url.includes('?') ? '&' : '?') + 'callback=' + cb;
    document.body.appendChild(s);
  });
}

/* Replace the card's lettered placeholder with the app's first App Store screenshot
   (falling back to the app icon if no screenshot is available). */
async function hydrateAppStoreMedia(url, media, name) {
  const id = appStoreId(url);
  if (!id) return;
  try {
    const data = await jsonp(`https://itunes.apple.com/lookup?id=${id}`);
    const app = data && data.results && data.results[0];
    if (!app) return;

    const shot = (app.screenshotUrls && app.screenshotUrls[0]) ||
      (app.ipadScreenshotUrls && app.ipadScreenshotUrls[0]);
    const icon = app.artworkUrl512 || app.artworkUrl100;
    const src = shot || icon;
    if (!src) return;

    const img = el('img');
    img.alt = shot ? `${name} screenshot` : `${name} app icon`;
    img.onload = () => {
      media.classList.remove('no-img');
      media.classList.add(shot ? 'is-shot' : 'is-icon');
      media.innerHTML = '';
      media.appendChild(img);
    };
    img.onerror = () => console.warn('[projects] image failed to load:', src);
    img.src = src;
  } catch (e) {
    // Keep the lettered placeholder, but surface why so it's debuggable.
    console.warn('[projects] App Store fetch failed for', name, '—', e.message);
  }
}

function renderProjects() {
  const grid = $('#projectsGrid'); if (!grid) return;
  PROJECTS.forEach((p, i) => {
    const card = el('article', 'card project-card reveal');
    card.style.transitionDelay = `${(i % 3) * 80}ms`;

    const stores = [];
    if (p.appStore) stores.push(
      `<a class="store-badge" href="${p.appStore}" target="_blank" rel="noopener" aria-label="Download ${p.name} on the App Store">
         <img src="assets/badges/app-store.svg" alt="Download on the App Store" /></a>`);
    if (p.playStore) stores.push(
      `<a class="store-badge store-badge--play" href="${p.playStore}" target="_blank" rel="noopener" aria-label="Get ${p.name} on Google Play">
         <img src="assets/badges/google-play.png" alt="Get it on Google Play" /></a>`);

    // Media: use a manual image if given; otherwise start with a lettered placeholder
    // and (when there's an App Store link) swap in the real store icon automatically.
    const onErr = `this.remove(); this.parentNode.classList.add('no-img');`;
    const media = p.image
      ? `<img src="${p.image}" alt="${p.name} app" loading="lazy" onerror="${onErr}" />`
      : '';
    card.innerHTML = `
      <div class="project-card__media${p.image ? '' : ' no-img'}" data-initial="${p.name.charAt(0)}">
        ${media}
      </div>
      <div class="project-card__body">
        <h3>${p.name}</h3>
        <p>${p.tagline}</p>
        <div class="store-row">${stores.join('')}</div>
      </div>`;
    grid.appendChild(card);

    // Only auto-fetch when there's no manual image and we have a real App Store id.
    if (!p.image && p.appStore) hydrateAppStoreMedia(p.appStore, $('.project-card__media', card), p.name);
  });
}

function reviewCard(t) {
  const card = el('article', 'card review-card');
  const stars = Array.from({ length: 5 }, (_, k) =>
    `<span class="star ${k < t.rating ? 'on' : ''}">${STAR}</span>`).join('');
  // Memoji-style avatar image; fall back to a lettered circle if it can't load.
  const onErr = `this.remove(); this.parentNode.classList.add('avatar--letter'); this.parentNode.textContent='${t.name.charAt(0)}';`;
  card.innerHTML = `
    <div class="stars">${stars}</div>
    <p class="review-card__quote">${t.quote}</p>
    <div class="review-card__person">
      <span class="avatar"><img src="${t.avatar}" alt="${t.name}" loading="lazy" onerror="${onErr}" /></span>
      <span class="review-card__meta"><strong>${t.name}</strong></span>
    </div>`;
  return card;
}

function renderReviews() {
  const grid = $('#reviewsGrid'); if (!grid) return;
  const track = el('div', 'reviews-track');
  // Render the cards twice so the marquee can loop seamlessly (the second
  // copy is decorative and hidden from screen readers).
  TESTIMONIALS.forEach(t => track.appendChild(reviewCard(t)));
  TESTIMONIALS.forEach(t => {
    const clone = reviewCard(t);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
  grid.appendChild(track);
}

/* Highlight the nav link for the section currently in view (active underline). */
function initScrollSpy() {
  const links = $$('#navLinks a[href^="#"]');
  const map = new Map();
  links.forEach(l => { const sec = $(l.getAttribute('href')); if (sec) map.set(sec, l); });
  if (!map.size) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l => l.classList.remove('active'));
      map.get(e.target)?.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  map.forEach((_, sec) => io.observe(sec));
}

/* ---------- Navbar ---------- */
function initNav() {
  const nav = $('#nav'), toggle = $('#navToggle'), links = $('#navLinks');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });
  $$('a', links).forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('active'); links.classList.remove('open');
  }));
}

function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(n => io.observe(n));
}

function initForm() {
  const form = $('#contactForm'), status = $('#formStatus'); if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#name').value.trim(), email = $('#email').value.trim(), msg = $('#message').value.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !validEmail || !msg) {
      status.textContent = 'Please fill in all fields with a valid email.';
      status.className = 'form-status err'; return;
    }
    status.textContent = `Thanks, ${name}! Your message was sent — I'll reply soon. ✅`;
    status.className = 'form-status ok';
    form.reset();
    setTimeout(() => { status.textContent = ''; status.className = 'form-status'; }, 6000);
  });
}

/* ---------- Back to top ---------- */
function initToTop() {
  const btn = $('#toTop');
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 600), { passive: true });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderPortfolio();
  renderServices();
  renderReviews();
  initNav();
  initScrollSpy();
  initReveal();
  initForm();
  initToTop();
  $('#year').textContent = '2026';
});
