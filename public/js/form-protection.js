/**
 * Form Protection - Pixformance
 * - Phone masking (international / country-agnostic)
 * - Text sanitization (allows German umlauts + all unicode letters)
 * - Spam protection via honeypot + timing check
 */
(function () {
  'use strict';

  // ─────────────────────────────────────────────────────────────────────────
  // 1. Phone masking — flexible international format
  //    Accepts: +, digits, spaces, hyphens, parentheses
  //    Examples: +49 30 123456 | +41 44 123 45 67 | +1 (555) 123-4567
  // ─────────────────────────────────────────────────────────────────────────
  function initPhoneMask(input) {
    if (!input || input.dataset.fpPhone) return;
    input.dataset.fpPhone = '1';

    // Update placeholder to indicate international support
    if (!input.placeholder || input.placeholder === '+49 (0) ...') {
      input.placeholder = '+49 123 456789';
    }

    input.addEventListener('input', function () {
      var val = this.value;
      var cursorPos = this.selectionStart;
      var hasPlus = val.charAt(0) === '+';

      // Build clean string: keep only allowed phone chars
      var clean = '';
      for (var i = 0; i < val.length; i++) {
        var c = val[i];
        if (c === '+' && i === 0) {
          clean += c;
        } else if (/[\d\s\-\(\)]/.test(c)) {
          clean += c;
        }
      }

      // Cap at 25 characters (longest intl. numbers are ~15 digits + formatting)
      clean = clean.slice(0, 25);

      if (val !== clean) {
        var removed = val.length - clean.length;
        this.value = clean;
        var newPos = Math.max(0, cursorPos - removed);
        try { this.setSelectionRange(newPos, newPos); } catch (e) { /* ignore */ }
      }
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 2. Text / textarea sanitization
  //    Blocks HTML / XSS / template-injection characters.
  //    Allows all unicode letters — including ä ö ü ß and other umlauts.
  //    Allows common punctuation: . , - ' ( ) ! ? @ & # % + / : space etc.
  // ─────────────────────────────────────────────────────────────────────────
  function initTextSanitizer(input) {
    if (!input || input.dataset.fpText) return;
    input.dataset.fpText = '1';

    var isEmail = input.type === 'email';

    function sanitize(val) {
      if (isEmail) {
        return val.replace(/\s/g, '').replace(/[<>{}\\\`]/g, '');
      }
      return val.replace(/[<>{}\\\`]/g, '');
    }

    input.addEventListener('input', function () {
      var clean = sanitize(this.value);
      if (this.value !== clean) {
        var pos = this.selectionStart;
        var removed = this.value.length - clean.length;
        this.value = clean;
        try { this.setSelectionRange(Math.max(0, pos - removed), Math.max(0, pos - removed)); } catch (e) { /* ignore */ }
      }
    });

    // Also strip on blur to catch paste with leading/trailing spaces
    if (isEmail) {
      input.addEventListener('blur', function () {
        this.value = sanitize(this.value);
      });
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 3. Spam protection — honeypot field + timing check
  //    Honeypot: a hidden text field that only bots fill in.
  //    Timing:   legitimate users take > 2.5 s to fill a form.
  //    Strategy: capture-phase listener runs BEFORE existing bubble-phase
  //              submit handlers — blocks submission without touching them.
  // ─────────────────────────────────────────────────────────────────────────
  function initFormSpamProtection(form) {
    if (!form || form.dataset.fpSpam) return;
    form.dataset.fpSpam = '1';

    // --- Honeypot field -------------------------------------------------
    var hpWrap = document.createElement('div');
    hpWrap.setAttribute('aria-hidden', 'true');
    hpWrap.style.cssText =
      'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;';

    var hpInput = document.createElement('input');
    hpInput.type = 'text';
    hpInput.name = '_fax_number';        // Field name bots recognise
    hpInput.setAttribute('tabindex', '-1');
    hpInput.setAttribute('autocomplete', 'off');
    hpInput.setAttribute('aria-hidden', 'true');

    hpWrap.appendChild(hpInput);
    form.appendChild(hpWrap);

    // --- Timing ---------------------------------------------------------
    var pageLoadTime = Date.now();
    var MIN_FILL_TIME_MS = 2500; // < 2.5 s = very likely a bot

    // --- Capture-phase submit listener ----------------------------------
    // Capture phase always fires before any bubble-phase listeners,
    // so we intercept spam BEFORE the existing webhook submit handlers run.
    form.addEventListener('submit', function (e) {
      var honeypotFilled = hpInput.value.length > 0;
      var tooFast = (Date.now() - pageLoadTime) < MIN_FILL_TIME_MS;

      if (!honeypotFilled && !tooFast) return; // Legitimate — let through

      e.preventDefault();
      e.stopImmediatePropagation();

      var msgEl =
        form.querySelector('[id$="-message"]') ||
        form.querySelector('#form-message') ||
        form.querySelector('[id$="message"]');

      if (honeypotFilled) {
        // Fake success for bots — they think the form worked
        if (msgEl) {
          msgEl.className =
            'p-4 rounded-lg bg-green-50 text-green-700 border border-green-200';
          msgEl.textContent =
            'Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.';
          msgEl.classList.remove('hidden');
        }
      } else {
        // Too fast — ask user to try again
        if (msgEl) {
          msgEl.className =
            'p-4 rounded-lg bg-yellow-50 text-yellow-800 border border-yellow-200';
          msgEl.textContent =
            'Bitte warten Sie einen Moment und versuchen Sie es erneut.';
          msgEl.classList.remove('hidden');
          setTimeout(function () { msgEl.classList.add('hidden'); }, 4000);
        }
      }
    }, true /* capture phase */);
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Auto-initialise every form, phone input, and text input on the page.
  // Also re-runs when called manually (e.g. after a modal opens).
  // ─────────────────────────────────────────────────────────────────────────
  function autoInit() {
    // Phone fields
    document.querySelectorAll('input[type="tel"]').forEach(initPhoneMask);

    // Text fields and textareas (skip hidden honeypot)
    document.querySelectorAll(
      'input[type="text"], input[type="email"], textarea'
    ).forEach(function (el) {
      if (el.name !== '_fax_number') initTextSanitizer(el);
    });

    // Spam protection on every form
    document.querySelectorAll('form').forEach(initFormSpamProtection);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }

  // Expose for pages that open modals dynamically
  window.FormProtection = { init: autoInit };
})();
