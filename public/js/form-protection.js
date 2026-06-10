/**
 * Form Protection - Pixformance
 * - Phone masking (international / country-agnostic)
 * - Text sanitization (allows German umlauts + all unicode letters)
 * - Spam protection via honeypot
 */
(function () {
  'use strict';

  // Expose namespace for external checks (e.g. inline LP script)
  window.FormProtection = window.FormProtection || {};

  // ─────────────────────────────────────────────────────────────────────────
  // 1. Phone masking — flexible international format
  // ─────────────────────────────────────────────────────────────────────────
  function initPhoneMask(input) {
    if (!input || input.dataset.fpPhone) return;
    input.dataset.fpPhone = '1';

    if (!input.placeholder || input.placeholder === '+49 (0) ...') {
      input.placeholder = '+49 123 456789';
    }

    input.addEventListener('input', function () {
      var val = this.value;
      var cursorPos = this.selectionStart;

      var clean = '';
      for (var i = 0; i < val.length; i++) {
        var c = val[i];
        if (c === '+' && i === 0) {
          clean += c;
        } else if (/[\d\s\-\(\)]/.test(c)) {
          clean += c;
        }
      }

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

    if (isEmail) {
      input.addEventListener('blur', function () {
        this.value = sanitize(this.value);
      });
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 3. Spam protection — honeypots only
  //    Two honeypots: _fax_number (legacy) and website (looks natural to bots)
  //    Strategy: capture-phase listener runs BEFORE existing bubble-phase handlers
  // ─────────────────────────────────────────────────────────────────────────

  function addHoneypot(form, name) {
    if (form.querySelector('input[name="' + name + '"]')) return null;

    var wrap = document.createElement('div');
    wrap.setAttribute('aria-hidden', 'true');
    wrap.style.cssText =
      'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;';

    var input = document.createElement('input');
    input.type = 'text';
    input.name = name;
    input.setAttribute('tabindex', '-1');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('aria-hidden', 'true');

    wrap.appendChild(input);
    form.appendChild(wrap);
    return input;
  }

  function initFormSpamProtection(form) {
    if (!form || form.dataset.fpSpam) return;
    form.dataset.fpSpam = '1';

    var hp1 = addHoneypot(form, '_fax_number');
    var hp2 = addHoneypot(form, 'website');

    form.addEventListener('submit', function (e) {
      var honeypotFilled = (hp1 && hp1.value.length > 0) || (hp2 && hp2.value.length > 0);

      if (!honeypotFilled) return; // Legitimate — let through

      // Fake success for bots
      e.preventDefault();
      e.stopImmediatePropagation();

      var msgEl =
        form.querySelector('[id$="-message"]') ||
        form.querySelector('#form-message') ||
        form.querySelector('[id$="message"]');

      if (msgEl) {
        msgEl.className =
          'p-4 rounded-lg bg-green-50 text-green-700 border border-green-200';
        msgEl.textContent =
          'Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.';
        msgEl.classList.remove('hidden');
      }
    }, true /* capture phase */);
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Auto-initialise every form, phone input, and text input on the page.
  // ─────────────────────────────────────────────────────────────────────────
  function autoInit() {
    document.querySelectorAll('input[type="tel"]').forEach(initPhoneMask);

    document.querySelectorAll(
      'input[type="text"], input[type="email"], textarea'
    ).forEach(function (el) {
      if (el.name !== '_fax_number' && el.name !== 'website') initTextSanitizer(el);
    });

    document.querySelectorAll('form').forEach(initFormSpamProtection);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }

  window.FormProtection.init = autoInit;
})();
