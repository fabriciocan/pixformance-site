/**
 * Pixformance Reports: eigene Herkunftsmessung (welcher Kanal bringt Besucher und Anfragen).
 *
 * Datenschutz (DSGVO + TDDDG §25):
 * - Ohne Einwilligung in "Statistiken": eine anonyme Zählung der Ankunft (Kanal, Kampagne,
 *   Einstiegsseite). Kein Cookie, kein Speicherzugriff, keine Geräte-Merkmale.
 * - Mit Einwilligung: der Server setzt ein HttpOnly-Cookie mit einer Zufalls-ID (12 Monate)
 *   und speichert die Kette der Ankünfte. Beim Absenden eines Formulars geht nur der
 *   SHA-256-Hash der E-Mail-Adresse mit, im Browser berechnet.
 * - Widerruf im Cookie-Banner löscht die Daten dieses Geräts auf dem Server.
 *
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

  function send(path, body) {
    var data = JSON.stringify(body);
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(EP + path, new Blob([data], { type: 'text/plain' }))) return;
    } catch (e) {}
    try { fetch(EP + path, { method: 'POST', body: data, keepalive: true, credentials: 'same-origin' }); } catch (e) {}
  }

  // Neu laden und Vor/Zurück sind keine neue Ankunft.
  var nav = performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : null;
  var repeat = nav && (nav.type === 'reload' || nav.type === 'back_forward');
  // Klick innerhalb der Website ohne neue Kampagnen-Parameter auch nicht.
  var marked = /[?&](utm_[a-z]+|gclid|gbraid|wbraid|fbclid|msclkid|li_fat_id)=/.test(location.search);
  try {
    if (!marked && document.referrer && new URL(document.referrer).host === location.host) repeat = true;
  } catch (e) {}
  var sent = false;

  function hit(statistics) {
    if (sent || repeat) return;
    sent = true;
    var body = { c: statistics ? 1 : 0, url: location.href, ref: document.referrer };
    // Gerätetyp nur mit Einwilligung.
    if (statistics) body.dev = window.matchMedia && matchMedia('(pointer:coarse)').matches ? 'm' : 'd';
    send('hit', body);
  }

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

  // Formular-Anfrage: nur mit Einwilligung und nur der Hash der E-Mail.
  document.addEventListener('submit', function (e) {
    var c = consent();
    var f = e.target;
    if (!c || !c.statistics || !f || !f.querySelector || !window.crypto || !crypto.subtle) return;
    var el = f.querySelector('input[type="email"]');
    var email = el && el.value ? el.value.trim().toLowerCase() : '';
    if (email.indexOf('@') < 1) return;
    var form = f.getAttribute('data-form-name') || f.id || '';
    crypto.subtle.digest('SHA-256', new TextEncoder().encode(email)).then(function (buf) {
      var h = Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
      send('conv', { h: h, form: form, url: location.href });
    });
  }, true);
})();
