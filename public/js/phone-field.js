/**
 * Phone Field - Pixformance
 * Country-code dropdown + national number -> composes E.164 into a hidden
 * input. Single source of truth for the country/dial-code list and names
 * per locale, shared by every form on the site that uses this pattern.
 *
 * Markup contract (IDs built from a per-form `prefix`):
 *   <select id="{prefix}-country">
 *   <input id="{prefix}-number" type="tel">
 *   <input id="{prefix}-e164" type="hidden" name="phone">
 *   <p id="{prefix}-error"> (optional)
 *
 * Usage: var compose = PixPhoneField.init('popup', { locale: 'de' });
 *        // then, in the form's submit handler, before building FormData:
 *        if (compose && !compose()) { e.preventDefault(); return; }
 */
window.PixPhoneField = (function () {
  'use strict';

  // ISO2 -> dial code (no leading +)
  var DIAL = {
    DE: '49', AT: '43', CH: '41', LI: '423', LU: '352',
    FR: '33', BE: '32', NL: '31', IT: '39', ES: '34', PT: '351',
    GB: '44', IE: '353',
    DK: '45', SE: '46', NO: '47', FI: '358', IS: '354',
    PL: '48', CZ: '420', SK: '421', HU: '36', SI: '386', HR: '385',
    RO: '40', BG: '359', GR: '30',
    EE: '372', LV: '371', LT: '370', MT: '356', CY: '357',
    US: '1', CA: '1',
    MX: '52', BR: '55', AR: '54', CL: '56', CO: '57',
    AU: '61', NZ: '64',
    JP: '81', KR: '82', CN: '86', SG: '65', HK: '852', TW: '886',
    IN: '91', AE: '971', SA: '966', IL: '972', TR: '90', ZA: '27'
  };

  var NAMES = {
    de: {
      DE: 'Deutschland', AT: 'Österreich', CH: 'Schweiz', LI: 'Liechtenstein', LU: 'Luxemburg',
      FR: 'Frankreich', BE: 'Belgien', NL: 'Niederlande', IT: 'Italien', ES: 'Spanien', PT: 'Portugal',
      GB: 'Vereinigtes Königreich', IE: 'Irland',
      DK: 'Dänemark', SE: 'Schweden', NO: 'Norwegen', FI: 'Finnland', IS: 'Island',
      PL: 'Polen', CZ: 'Tschechien', SK: 'Slowakei', HU: 'Ungarn', SI: 'Slowenien', HR: 'Kroatien',
      RO: 'Rumänien', BG: 'Bulgarien', GR: 'Griechenland',
      EE: 'Estland', LV: 'Lettland', LT: 'Litauen', MT: 'Malta', CY: 'Zypern',
      US: 'USA', CA: 'Kanada',
      MX: 'Mexiko', BR: 'Brasilien', AR: 'Argentinien', CL: 'Chile', CO: 'Kolumbien',
      AU: 'Australien', NZ: 'Neuseeland',
      JP: 'Japan', KR: 'Südkorea', CN: 'China', SG: 'Singapur', HK: 'Hongkong', TW: 'Taiwan',
      IN: 'Indien', AE: 'Vereinigte Arabische Emirate', SA: 'Saudi-Arabien', IL: 'Israel', TR: 'Türkei', ZA: 'Südafrika'
    },
    en: {
      DE: 'Germany', AT: 'Austria', CH: 'Switzerland', LI: 'Liechtenstein', LU: 'Luxembourg',
      FR: 'France', BE: 'Belgium', NL: 'Netherlands', IT: 'Italy', ES: 'Spain', PT: 'Portugal',
      GB: 'United Kingdom', IE: 'Ireland',
      DK: 'Denmark', SE: 'Sweden', NO: 'Norway', FI: 'Finland', IS: 'Iceland',
      PL: 'Poland', CZ: 'Czechia', SK: 'Slovakia', HU: 'Hungary', SI: 'Slovenia', HR: 'Croatia',
      RO: 'Romania', BG: 'Bulgaria', GR: 'Greece',
      EE: 'Estonia', LV: 'Latvia', LT: 'Lithuania', MT: 'Malta', CY: 'Cyprus',
      US: 'United States', CA: 'Canada',
      MX: 'Mexico', BR: 'Brazil', AR: 'Argentina', CL: 'Chile', CO: 'Colombia',
      AU: 'Australia', NZ: 'New Zealand',
      JP: 'Japan', KR: 'South Korea', CN: 'China', SG: 'Singapore', HK: 'Hong Kong', TW: 'Taiwan',
      IN: 'India', AE: 'United Arab Emirates', SA: 'Saudi Arabia', IL: 'Israel', TR: 'Turkey', ZA: 'South Africa'
    },
    fr: {
      DE: 'Allemagne', AT: 'Autriche', CH: 'Suisse', LI: 'Liechtenstein', LU: 'Luxembourg',
      FR: 'France', BE: 'Belgique', NL: 'Pays-Bas', IT: 'Italie', ES: 'Espagne', PT: 'Portugal',
      GB: 'Royaume-Uni', IE: 'Irlande',
      DK: 'Danemark', SE: 'Suède', NO: 'Norvège', FI: 'Finlande', IS: 'Islande',
      PL: 'Pologne', CZ: 'Tchéquie', SK: 'Slovaquie', HU: 'Hongrie', SI: 'Slovénie', HR: 'Croatie',
      RO: 'Roumanie', BG: 'Bulgarie', GR: 'Grèce',
      EE: 'Estonie', LV: 'Lettonie', LT: 'Lituanie', MT: 'Malte', CY: 'Chypre',
      US: 'États-Unis', CA: 'Canada',
      MX: 'Mexique', BR: 'Brésil', AR: 'Argentine', CL: 'Chili', CO: 'Colombie',
      AU: 'Australie', NZ: 'Nouvelle-Zélande',
      JP: 'Japon', KR: 'Corée du Sud', CN: 'Chine', SG: 'Singapour', HK: 'Hong Kong', TW: 'Taïwan',
      IN: 'Inde', AE: 'Émirats arabes unis', SA: 'Arabie saoudite', IL: 'Israël', TR: 'Turquie', ZA: 'Afrique du Sud'
    },
    nl: {
      DE: 'Duitsland', AT: 'Oostenrijk', CH: 'Zwitserland', LI: 'Liechtenstein', LU: 'Luxemburg',
      FR: 'Frankrijk', BE: 'België', NL: 'Nederland', IT: 'Italië', ES: 'Spanje', PT: 'Portugal',
      GB: 'Verenigd Koninkrijk', IE: 'Ierland',
      DK: 'Denemarken', SE: 'Zweden', NO: 'Noorwegen', FI: 'Finland', IS: 'IJsland',
      PL: 'Polen', CZ: 'Tsjechië', SK: 'Slowakije', HU: 'Hongarije', SI: 'Slovenië', HR: 'Kroatië',
      RO: 'Roemenië', BG: 'Bulgarije', GR: 'Griekenland',
      EE: 'Estland', LV: 'Letland', LT: 'Litouwen', MT: 'Malta', CY: 'Cyprus',
      US: 'Verenigde Staten', CA: 'Canada',
      MX: 'Mexico', BR: 'Brazilië', AR: 'Argentinië', CL: 'Chili', CO: 'Colombia',
      AU: 'Australië', NZ: 'Nieuw-Zeeland',
      JP: 'Japan', KR: 'Zuid-Korea', CN: 'China', SG: 'Singapore', HK: 'Hongkong', TW: 'Taiwan',
      IN: 'India', AE: 'Verenigde Arabische Emiraten', SA: 'Saoedi-Arabië', IL: 'Israël', TR: 'Turkije', ZA: 'Zuid-Afrika'
    },
    it: {
      DE: 'Germania', AT: 'Austria', CH: 'Svizzera', LI: 'Liechtenstein', LU: 'Lussemburgo',
      FR: 'Francia', BE: 'Belgio', NL: 'Paesi Bassi', IT: 'Italia', ES: 'Spagna', PT: 'Portogallo',
      GB: 'Regno Unito', IE: 'Irlanda',
      DK: 'Danimarca', SE: 'Svezia', NO: 'Norvegia', FI: 'Finlandia', IS: 'Islanda',
      PL: 'Polonia', CZ: 'Cechia', SK: 'Slovacchia', HU: 'Ungheria', SI: 'Slovenia', HR: 'Croazia',
      RO: 'Romania', BG: 'Bulgaria', GR: 'Grecia',
      EE: 'Estonia', LV: 'Lettonia', LT: 'Lituania', MT: 'Malta', CY: 'Cipro',
      US: 'Stati Uniti', CA: 'Canada',
      MX: 'Messico', BR: 'Brasile', AR: 'Argentina', CL: 'Cile', CO: 'Colombia',
      AU: 'Australia', NZ: 'Nuova Zelanda',
      JP: 'Giappone', KR: 'Corea del Sud', CN: 'Cina', SG: 'Singapore', HK: 'Hong Kong', TW: 'Taiwan',
      IN: 'India', AE: 'Emirati Arabi Uniti', SA: 'Arabia Saudita', IL: 'Israele', TR: 'Turchia', ZA: 'Sudafrica'
    }
  };

  var DEFAULT_ISO2 = 'DE';

  var ERROR_TEXT = {
    de: 'Bitte geben Sie eine gültige Telefonnummer ein.',
    en: 'Please enter a valid phone number.',
    fr: 'Veuillez saisir un numéro de téléphone valide.',
    nl: 'Voer een geldig telefoonnummer in.',
    it: 'Inserisci un numero di telefono valido.'
  };

  function init(prefix, opts) {
    opts = opts || {};
    var locale = NAMES[opts.locale] ? opts.locale : 'de';
    var names = NAMES[locale];

    var countrySelect = document.getElementById(prefix + '-country');
    var numberInput = document.getElementById(prefix + '-number');
    var hiddenPhone = document.getElementById(prefix + '-e164');
    var errorEl = document.getElementById(prefix + '-error');
    if (!countrySelect || !numberInput || !hiddenPhone) return null;

    var isoList = Object.keys(DIAL).sort(function (a, b) {
      return (names[a] || a).localeCompare(names[b] || b, locale);
    });

    isoList.forEach(function (iso2) {
      var opt = document.createElement('option');
      opt.value = iso2;
      opt.textContent = '+' + DIAL[iso2] + ' ' + iso2;
      opt.title = (names[iso2] || iso2) + ' (+' + DIAL[iso2] + ')';
      countrySelect.appendChild(opt);
    });

    function setCountry(iso2) {
      countrySelect.value = DIAL[iso2] ? iso2 : DEFAULT_ISO2;
    }
    setCountry(DEFAULT_ISO2);

    // Geo-detect via Cloudflare (same-origin, no CORS/API key needed)
    fetch('/cdn-cgi/trace')
      .then(function (r) { return r.text(); })
      .then(function (text) {
        var m = text.match(/loc=([A-Z]{2})/);
        if (m) setCountry(m[1]);
      })
      .catch(function () {});

    function dialCode() {
      return DIAL[countrySelect.value] || DIAL[DEFAULT_ISO2];
    }

    function compose() {
      var national = (numberInput.value || '').trim().replace(/[^\d]/g, '').replace(/^0+/, '');
      if (!national) { hiddenPhone.value = ''; if (errorEl) errorEl.classList.add('hidden'); return true; }
      var e164 = '+' + dialCode() + national;
      var valid = /^\+[1-9]\d{7,14}$/.test(e164);
      hiddenPhone.value = valid ? e164 : '';
      if (errorEl) {
        if (!valid) {
          errorEl.textContent = ERROR_TEXT[locale] || ERROR_TEXT.de;
          errorEl.classList.remove('hidden');
        } else {
          errorEl.classList.add('hidden');
        }
      }
      return valid;
    }

    numberInput.addEventListener('blur', compose);
    countrySelect.addEventListener('change', compose);

    return compose;
  }

  return { init: init };
})();
