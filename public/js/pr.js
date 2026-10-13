/**
 * Pixformance Reports: eigene Herkunftsmessung (welcher Kanal bringt Besucher und Anfragen).
 *
 * Datenschutz (DSGVO + TDDDG §25):
 * - Ohne Einwilligung in "Statistiken": eine anonyme Zählung der Ankunft (Kanal, Kampagne,
 *   Einstiegsseite). Kein Cookie, kein Speicherzugriff, keine Geräte-Merkmale.
 * - Mit Einwilligung: der Server setzt ein HttpOnly-Cookie mit einer Zufalls-ID (12 Monate).
 *   Gemessen werden aufgerufene Seiten, Scrolltiefe, sichtbare Zeit, Ladezeiten (Core Web
 *   Vitals), Klicks auf WhatsApp/Telefon/E-Mail/Kalender/PDF und welche Formularfelder
 *   berührt wurden (nur der Feldname, nie der Inhalt). Beim Absenden geht nur die zufällige
 *   event_id mit, die das Formular auch an das CRM übergibt.
 * - Widerruf im Cookie-Banner löscht die Daten dieses Geräts auf dem Server.
 *
 * Höchstens zwei Anfragen pro Seite (beim Laden und beim Verlassen), per sendBeacon im
 * Hintergrund. Klicks auf Kontakt-Links und Formular-Absendungen kommen einzeln dazu.
 * /pr/* leitet das nginx der Website an Pixformance Reports weiter (gleiche Domain).
 */
(function () {
  if (window.__pixReports) return;
  window.__pixReports = true;

  var EP = '/pr/';
  var YEAR = 365 * 24 * 60 * 60 * 1000;

  function consent() {
    try {
      var c = JSON.parse(localStorage.getItem('pix_consent') || 'null');
      return c && c.ts && Date.now() - c.ts < YEAR ? c : null;
    } catch (e) { return null; }
  }

  function allowed() {
    var c = consent();
    return !!(c && c.statistics);
  }

  function send(path, body) {
    var data = JSON.stringify(body);
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(EP + path, new Blob([data], { type: 'text/plain' }))) return;
    } catch (e) {}
    try { fetch(EP + path, { method: 'POST', body: data, keepalive: true, credentials: 'same-origin' }); } catch (e) {}
  }

  // Zufällige Kennung dieser Seitenansicht (nur im Speicher, nicht im Gerät abgelegt).
  var pid = (function () {
    var a = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789', s = '';
    var r = window.crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(16)) : null;
    for (var i = 0; i < 16; i++) s += a.charAt((r ? r[i] : Math.floor(Math.random() * 256)) % a.length);
    return s;
  })();

  // Neu laden und Vor/Zurück zählen nicht noch einmal.
  var nav = performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : null;
  var repeat = !!(nav && (nav.type === 'reload' || nav.type === 'back_forward'));
  // Klick innerhalb der Website ohne neue Kampagnen-Parameter ist keine neue Ankunft.
  var marked = /[?&](utm_[a-z]+|gclid|gbraid|wbraid|fbclid|msclkid|li_fat_id)=/.test(location.search);
  var internal = false;
  try { internal = !marked && !!document.referrer && new URL(document.referrer).host === location.host; } catch (e) {}
  var notFound = window.__pr404 === 1;
  var sent = false;

  function hit(statistics) {
    if (sent || repeat) return;
    // Ohne Einwilligung nur die Ankunft (anonym), keine internen Seitenwechsel.
    if (!statistics && internal) return;
    sent = true;
    var body = { c: statistics ? 1 : 0, url: location.href, ref: document.referrer };
    if (notFound) body.nf = 1;
    if (internal) body.in = 1;
    if (statistics) {
      body.pid = pid;
      body.dev = window.matchMedia && matchMedia('(pointer:coarse)').matches ? 'm' : 'd';
    }
    send('hit', body);
    if (statistics) {
      try { startMeasuring(); } catch (e) {}
    }
  }

  /* ---------- Nur mit Einwilligung: Verhalten auf der Seite ---------- */

  var measuring = false;
  var maxScroll = 0, visibleMs = 0, visibleSince = null;
  var vitals = {}, clsValue = 0, inpMax = 0;
  var forms = {};

  function startMeasuring() {
    if (measuring) return;
    measuring = true;

    // Scrolltiefe: passiv und höchstens einmal pro Frame.
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        var h = document.documentElement.scrollHeight - innerHeight;
        var p = h > 0 ? Math.round((scrollY / h) * 100) : 100;
        if (p > maxScroll) maxScroll = Math.min(p, 100);
      });
    }
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Sichtbare Zeit.
    if (document.visibilityState === 'visible') visibleSince = Date.now();
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        visibleSince = Date.now();
      } else {
        if (visibleSince) { visibleMs += Date.now() - visibleSince; visibleSince = null; }
        leave();
      }
    });
    addEventListener('pagehide', leave);

    // Core Web Vitals (wie das Google-Skript web-vitals, ohne die Bibliothek).
    try {
      new PerformanceObserver(function (l) {
        var e = l.getEntries(); if (e.length) vitals.lcp = Math.round(e[e.length - 1].startTime);
      }).observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {}
    try {
      new PerformanceObserver(function (l) {
        l.getEntries().forEach(function (x) { if (!x.hadRecentInput) clsValue += x.value; });
      }).observe({ type: 'layout-shift', buffered: true });
    } catch (e) {}
    try {
      new PerformanceObserver(function (l) {
        l.getEntries().forEach(function (x) { if (x.interactionId && x.duration > inpMax) inpMax = x.duration; });
      }).observe({ type: 'event', buffered: true, durationThreshold: 40 });
    } catch (e) {}
    if (nav && nav.responseStart) vitals.ttfb = Math.round(nav.responseStart);

    // Formulare: begonnen und zuletzt berührtes Feld (nur der Name des Felds).
    document.addEventListener('focusin', function (e) {
      var el = e.target, f = el && el.form;
      if (!f || !f.querySelector('input[type="email"]')) return;
      var name = el.name || el.id || '';
      if (!name || /^(_|website$|fax)/.test(name)) return;
      var key = f.getAttribute('data-form-name') || f.id || 'form';
      var s = forms[key] || (forms[key] = { f: key, l: '', n: 0, d: 0, seen: {} });
      if (!s.seen[name]) { s.seen[name] = 1; s.n++; }
      s.l = name;
    }, true);
  }

  var lastLeave = 0;
  function leave() {
    // Aba escondida e logo depois fechada dispara dois eventos: manda uma vez só.
    if (!measuring || Date.now() - lastLeave < 2000) return;
    lastLeave = Date.now();
    var t = visibleMs + (visibleSince ? Date.now() - visibleSince : 0);
    var v = {};
    if (vitals.lcp != null) v.lcp = vitals.lcp;
    if (vitals.ttfb != null) v.ttfb = vitals.ttfb;
    v.cls = Math.round(clsValue * 1000) / 1000;
    if (inpMax) v.inp = Math.round(inpMax);
    var f = [];
    for (var k in forms) f.push({ f: forms[k].f, l: forms[k].l, n: forms[k].n, d: forms[k].d });
    send('leave', { pid: pid, s: maxScroll, t: Math.round(t / 1000), v: v, f: f });
  }

  /* ---------- Klicks auf Kontakt-Links und PDFs ---------- */

  document.addEventListener('click', function (e) {
    if (!measuring || !allowed()) return;
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '', type = '';
    if (/^(https?:)?\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i.test(href) || /^whatsapp:/i.test(href)) type = 'whatsapp';
    else if (/^tel:/i.test(href)) type = 'phone';
    else if (/^mailto:/i.test(href)) type = 'email';
    else if (/calendar\.pixformance\.com|^\/calendar(\/|$)/i.test(href)) type = 'calendar';
    else if (/\.pdf($|[?#])/i.test(href)) type = 'pdf';
    if (!type) return;
    send('ev', { pid: pid, type: type, target: type === 'phone' || type === 'email' ? '' : a.href.split('?')[0], url: location.href });
  }, true);

  /* ---------- Formular-Anfrage ---------- */

  function currentEventId() {
    var dl = window.dataLayer || [];
    for (var i = dl.length - 1; i >= 0; i--) {
      if (dl[i] && dl[i].event_id) return String(dl[i].event_id);
    }
    return '';
  }

  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!allowed() || !f || !f.querySelector || !f.querySelector('input[type="email"]')) return;
    var key = f.getAttribute('data-form-name') || f.id || 'form';
    if (forms[key]) forms[key].d = 1;
    var id = currentEventId();
    if (!/^\d{10,16}_\d{1,16}$/.test(id)) return;
    send('conv', { e: id, form: key, url: location.href });
  }, true);

  /* ---------- Start (am Ende, damit alle Variablen oben schon existieren) ---------- */

  var initial = consent();
  var hadStatistics = !!(initial && initial.statistics);
  if (initial) {
    hit(hadStatistics);
  } else {
    // Noch keine Entscheidung: warten. Wer die Seite ohne Entscheidung verlässt, zählt anonym.
    addEventListener('pagehide', function () { hit(false); });
  }

  // CookieBanner.astro meldet jede Entscheidung (auch spätere Änderungen in den Einstellungen).
  document.addEventListener('pix:consent', function (e) {
    var statistics = !!(e.detail && e.detail.statistics);
    hit(statistics);
    if (hadStatistics && !statistics) send('forget', {});
    hadStatistics = statistics;
  });
})();
