/**
 * URL Parameter Persistence
 * Saves URL parameters to sessionStorage and appends them to all internal links
 * so they persist across page navigations.
 */
(function () {
  var STORAGE_KEY = '__url_params';

  function getStoredParams() {
    try {
      var raw = sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveParams(params) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    } catch (e) {
      // sessionStorage not available
    }
  }

  // Merge current URL params with stored ones (current URL wins)
  function captureParams() {
    var search = window.location.search;
    if (!search) return;
    var stored = getStoredParams();
    var current = new URLSearchParams(search);
    current.forEach(function (value, key) {
      stored[key] = value;
    });
    saveParams(stored);
  }

  function isInternalLink(a) {
    if (!a.href) return false;
    try {
      var url = new URL(a.href, window.location.origin);
      return url.origin === window.location.origin;
    } catch (e) {
      return false;
    }
  }

  function applyParamsToLink(a, params) {
    try {
      var url = new URL(a.href, window.location.origin);
      var keys = Object.keys(params);
      for (var i = 0; i < keys.length; i++) {
        if (!url.searchParams.has(keys[i])) {
          url.searchParams.set(keys[i], params[keys[i]]);
        }
      }
      a.href = url.toString();
    } catch (e) {
      // skip malformed hrefs
    }
  }

  function decorateAllLinks() {
    var params = getStoredParams();
    if (!Object.keys(params).length) return;
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      if (isInternalLink(links[i])) {
        applyParamsToLink(links[i], params);
      }
    }
  }

  // Also inject stored params into form hidden fields so they're submitted
  function decorateForms() {
    var params = getStoredParams();
    if (!Object.keys(params).length) return;
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
      var form = forms[i];
      var keys = Object.keys(params);
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        // Skip if form already has a field with this name
        if (form.querySelector('[name="' + key + '"]')) continue;
        var hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.name = key;
        hidden.value = params[key];
        form.appendChild(hidden);
      }
    }
  }

  // Intercept clicks to dynamically-added links
  document.addEventListener('click', function (e) {
    var params = getStoredParams();
    if (!Object.keys(params).length) return;
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (a && isInternalLink(a)) {
      applyParamsToLink(a, params);
    }
  }, true);

  // Run
  captureParams();
  decorateAllLinks();
  decorateForms();

  // Re-run after DOM mutations (for dynamically added links/forms)
  if (typeof MutationObserver !== 'undefined') {
    var debounceTimer;
    new MutationObserver(function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        decorateAllLinks();
        decorateForms();
      }, 100);
    }).observe(document.body, { childList: true, subtree: true });
  }
})();
