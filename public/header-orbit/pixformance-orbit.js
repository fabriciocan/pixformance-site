/*!
 * Pixformance – LP header animation "Station mit Ring"
 * Self-contained, no dependencies. Usage:
 *   <div class="pxo" data-pxo aria-hidden="true"></div>
 *   <link rel="stylesheet" href="pixformance-orbit.css">
 *   <script src="pixformance-orbit.js" defer></script>
 * Every element with [data-pxo] gets the animation. Colour comes from the
 * CSS variable --tq (falls back to #6BDBD1).
 */
(function () {
  'use strict';

  /* ---------- content: order = flow of one training session ---------- */
  var ITEMS = [
    ['plan',     'Individuelle Trainingspläne'],
    ['library',  'Über 800 Übungen'],
    ['trainer',  'Virtueller Trainer'],
    ['motion',   'Digitale Bewegungsanalyse'],
    ['feedback', 'Echtzeit-Korrektur'],
    ['platform', 'Automatische Dokumentation']
  ];

  /* ---------- tuning ---------- */
  var SPEED = 0.04;        // turns per second → one turn in 25 s, each label ~4 s
  var RING = 0.42;         // ring radius as share of stage width
  var TILT_DEG = -4;       // roll of the ring plane
  var FLAT = 0.46;         // ring height / width (0.52 on narrow screens)

  /* ---------- icon artwork (567×567 grid, 23px stroke, brand icon style) ---------- */
  var ICONS = {

 motion:`<path class="k" d="M34,124 V34 H124"/><path class="k" d="M443,34 H533 V124"/><path class="k" d="M533,443 V533 H443"/><path class="k" d="M124,533 H34 V443"/><circle class="k" cx="283.47" cy="118" r="38"/><path class="k" d="M163,110 L208,180 L283.47,200 L359,180 L404,110"/><path class="k" d="M283.47,200 V318"/><path class="k" d="M233,318 H334"/><path class="k" d="M233,318 L214,410 L226,478"/><path class="k" d="M334,318 L353,410 L341,478"/>`+[[163,110],[404,110],[208,180],[359,180],[233,318],[334,318],[214,410],[353,410],[226,478],[341,478]].map(([x,y])=>`<circle class="f" cx="${x}" cy="${y}" r="21"/>`).join(''),
 feedback:`<rect class="k" x="34" y="120" width="300" height="413" rx="28"/><circle class="k" cx="184" cy="215" r="34"/><path class="k" d="M100,330 L134,300 Q144,284 162,284 H206 Q224,284 234,300 L268,330"/><path class="k" d="M154,290 V470"/><path class="k" d="M214,290 V470"/><circle class="k" cx="446" cy="132" r="87"/><path class="k" d="M405,134 L435,164 L489,108"/><path class="k" d="M370,262 Q420,282 446,330"/><path class="k" d="M370,330 Q392,340 402,360"/>`,
 library:[46,228,410].map(y=>`<rect class="k" x="34" y="${y}" width="124" height="110" rx="22"/><path class="k" d="M82,${y+32} V${y+78} L120,${y+55} Z"/><path class="k" d="M214,${y+34} H533"/><path class="k" d="M214,${y+78} H410"/>`).join(''),
 plan:`<path class="k" d="M200,76 H124 Q100,76 100,100 V509 Q100,533 124,533 H443 Q467,533 467,509 V100 Q467,76 443,76 H367"/><rect class="k" x="200" y="34" width="167" height="84" rx="22"/><path class="k" d="M158,214 L184,240 L230,190"/><path class="k" d="M280,218 H410"/><path class="k" d="M158,322 L184,348 L230,298"/><path class="k" d="M280,326 H410"/><rect class="k" x="162" y="408" width="56" height="56" rx="12"/><path class="k" d="M280,436 H410"/>`,
 trainer:`<path class="f" d="M283.47,117.64a48,48,0,1,1,48-48A48,48,0,0,1,283.47,117.64Zm0-72.94a25,25,0,1,0,25,25A25,25,0,0,0,283.47,44.7Z"/><path class="f" d="M247,543.6a11.5,11.5,0,0,1-11.5-11.5V363.85a11.5,11.5,0,1,1,23,0V532.1A11.5,11.5,0,0,1,247,543.6Z"/><path class="f" d="M319.93,543.6a11.5,11.5,0,0,1-11.5-11.5V363.85a11.5,11.5,0,1,1,23,0V532.1A11.5,11.5,0,0,1,319.93,543.6Z"/><path class="f" d="M200.58,274.78a11.49,11.49,0,0,1-3.67-.6l-90-30.29a11.5,11.5,0,1,1,7.34-21.8l74.82,25.18v-46A58.58,58.58,0,0,1,247.6,142.8h72.34a58.58,58.58,0,0,1,58.51,58.51v45.15l77-30a11.5,11.5,0,1,1,8.34,21.44l-92.66,36a11.5,11.5,0,0,1-15.67-10.72v-62a35.55,35.55,0,0,0-35.51-35.51H247.6a35.55,35.55,0,0,0-35.51,35.51v62a11.5,11.5,0,0,1-11.5,11.5Z"/>`,
 platform:`<rect class="k" x="34" y="70" width="499" height="320" rx="24"/><path class="k" d="M283,390 V478"/><path class="k" d="M180,490 H386"/><path class="k" d="M100,320 L190,245 L265,285 L360,170 L460,215"/><circle class="f" cx="190" cy="245" r="20"/><circle class="f" cx="360" cy="170" r="20"/>`
  };

  var STATION =
    '<svg viewBox="0 0 566.93 566.93">' +
    '<circle class="pxo-scr" cx="114" cy="128" r="40"/><rect class="pxo-scr" x="34" y="198" width="160" height="102" rx="52"/><rect class="pxo-scr" x="86" y="198" width="56" height="329"/>' +
    '<rect class="pxo-scr" x="256" y="118" width="210" height="409" rx="18"/><path class="pxo-scr" d="M466,182 L540,527 H466 Z"/>' +
    '<circle class="k" cx="114" cy="128" r="40"/><path class="k" d="M34,300 V250 Q34,198 86,198 H142 Q194,198 194,250 V300"/><path class="k" d="M86,198 V527"/><path class="k" d="M142,198 V527"/>' +
    '<path class="k" d="M466,182 L540,527"/><rect class="k" x="256" y="118" width="210" height="409" rx="18"/><path class="k" d="M256,480 H466"/><path class="k" d="M34,527 H540"/><circle class="f" cx="361" cy="150" r="11"/>' +
    '<g class="k" style="stroke-width:16"><path d="M316,344 L406,254"/><path d="M316,254 L340.4,278.4"/><path d="M361,299 L406,344"/></g>' +
    '</svg>';

  var NS = 'http://www.w3.org/2000/svg';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function mount(stage) {
    if (stage.__pxo) return;
    stage.__pxo = true;
    stage.innerHTML =
      '<div class="pxo-glow"></div>' +
      '<svg class="pxo-rings pxo-back-rings"></svg>' +
      '<div class="pxo-layer pxo-back"></div>' +
      '<div class="pxo-station">' + STATION + '</div>' +
      '<svg class="pxo-rings pxo-front-rings"></svg>' +
      '<div class="pxo-layer pxo-front"></div>' +
      '<div class="pxo-label" aria-live="off"></div>';

    var back = stage.querySelector('.pxo-back'), front = stage.querySelector('.pxo-front');
    var label = stage.querySelector('.pxo-label');
    var showLabel = stage.getAttribute('data-pxo-label') !== 'off';
    var colour = getComputedStyle(stage).getPropertyValue('--tq').trim() || '#6BDBD1';

    function ringPath(svg, op) {
      var p = document.createElementNS(NS, 'path');
      p.setAttribute('fill', 'none'); p.setAttribute('stroke', colour);
      p.setAttribute('stroke-opacity', op); p.setAttribute('stroke-width', 3);
      svg.appendChild(p); return p;
    }
    var ringBack = ringPath(stage.querySelector('.pxo-back-rings'), 0.35);
    var ringFront = ringPath(stage.querySelector('.pxo-front-rings'), 0.6);

    var nodes = ITEMS.map(function (it, i) {
      var el = document.createElement('div');
      el.className = 'pxo-ico';
      el.innerHTML = '<svg viewBox="0 0 566.93 566.93">' + ICONS[it[0]] + '</svg>';
      back.appendChild(el);
      return { el: el, name: it[1], a0: i * 2 * Math.PI / ITEMS.length, inFront: false, op: 0 };
    });

    var W = 0, H = 0, tx = 0, ty = 0, tiltX = 0, tiltY = 0;
    function measure() { var r = stage.getBoundingClientRect(); W = r.width; H = r.height; }
    measure();
    if (window.ResizeObserver) new ResizeObserver(function () { measure(); if (reduce || !running) draw(); }).observe(stage);

    // subtle tilt that follows the pointer over the whole hero
    var host = stage.closest('[data-pxo-host]') || stage.parentElement;
    host.addEventListener('pointermove', function (e) {
      var r = stage.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5; ty = (e.clientY - r.top) / r.height - 0.5;
    });
    host.addEventListener('pointerleave', function () { tx = ty = 0; });

    var t = reduce ? 2.2 : 0, last = performance.now(), shown = '', running = false, raf = 0;

    function draw() {
      if (!W) return;
      tiltX += (tx - tiltX) * 0.06; tiltY += (ty - tiltY) * 0.06;
      var narrow = W < 500, m = narrow ? 0.95 : 1;
      var cx = W / 2, cy = H * 0.52;
      var tilt = (TILT_DEG + tiltX * 6) * Math.PI / 180;
      var flat = (narrow ? 0.52 : FLAT) + tiltY * 0.06;
      var cos = Math.cos(tilt), sin = Math.sin(tilt);
      function P(x, y) { return [cx + x * cos - y * sin, cy + x * sin + y * cos]; }

      var rx = RING * W * m, ry = rx * flat, deg = tilt * 180 / Math.PI;
      var a = P(rx, 0), b = P(-rx, 0);
      ringBack.setAttribute('d', 'M' + b[0] + ',' + b[1] + ' A' + rx + ',' + ry + ' ' + deg + ' 0 1 ' + a[0] + ',' + a[1]);
      ringFront.setAttribute('d', 'M' + a[0] + ',' + a[1] + ' A' + rx + ',' + ry + ' ' + deg + ' 0 1 ' + b[0] + ',' + b[1]);

      var base = Math.max(34, Math.min(60, W * 0.11)), best = nodes[0];
      nodes.forEach(function (n) {
        var ang = n.a0 + t * SPEED * 2 * Math.PI;
        var depth = Math.sin(ang);                 // +1 = closest to the viewer
        var p = P(rx * Math.cos(ang), ry * depth);
        var k = (depth + 1) / 2, s = base * (0.7 + 0.4 * k);
        var isFront = depth > 0;
        if (isFront !== n.inFront) { (isFront ? front : back).appendChild(n.el); n.inFront = isFront; }
        n.op = 0.35 + 0.65 * k;
        n.el.style.setProperty('--s', s + 'px');
        n.el.style.transform = 'translate(' + p[0] + 'px,' + p[1] + 'px)';
        n.el.style.opacity = n.op.toFixed(3);
        n.el.style.filter = depth < -0.35 ? 'blur(' + ((-depth - 0.35) * 2.2).toFixed(2) + 'px)' : 'none';
        if (n.op > best.op) best = n;
      });

      if (showLabel && best.name !== shown) {
        shown = best.name; label.style.opacity = 0;
        setTimeout(function () { label.textContent = shown; label.style.opacity = 1; }, 250);
      }
      if (!showLabel) label.style.opacity = 0;
    }

    function frame(now) {
      t += Math.min(0.05, (now - last) / 1000); last = now;
      draw();
      raf = requestAnimationFrame(frame);
    }
    function start() { if (reduce || running) return; running = true; last = performance.now(); raf = requestAnimationFrame(frame); }
    function stop() { running = false; cancelAnimationFrame(raf); }

    draw();
    // only animate while visible on screen and while the tab is active
    if (window.IntersectionObserver) {
      new IntersectionObserver(function (e) { e[0].isIntersecting && !document.hidden ? start() : stop(); }).observe(stage);
    } else { start(); }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else if (stage.getBoundingClientRect().bottom > 0) start();
    });
  }

  function init() { document.querySelectorAll('[data-pxo]').forEach(mount); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.PixformanceOrbit = { mount: mount };
})();
