// Organization JSON-LD builder — single source for the sitewide Organization
// schema emitted by each language layout (W3c).
//
// Regulatory properties are deliberately absent and must not be added here:
// no hasCredential, regulatoryStatus/legalStatus, or CE/MDR/FDA wording of any
// kind. Regulatory claims are handled exclusively in the regulatory correction
// pass. MedicalDevice page-level schemas are not built here either — they are
// on the D6 deletion list.

const LOGO = {
  '@type': 'ImageObject',
  url: 'https://www.pixformance.com/images/pix-favicon.png',
  width: 1024,
  height: 1024,
} as const;

const SAME_AS_FULL = [
  'https://www.linkedin.com/company/pixformance',
  'https://www.youtube.com/@pixformance',
  'https://www.facebook.com/pixformancesports',
  'https://www.instagram.com/pixformance/',
] as const;

const ORG_LOCALES = {
  de: {
    name: 'Pixformance Sports GmbH',
    legalName: 'Pixformance Sports GmbH',
    url: 'https://www.pixformance.com',
    description:
      'Pionier in digitaler Bewegungsanalyse und Echtzeit-Feedback für Physiotherapie, Kliniken, Fitness und betriebliches Gesundheitsmanagement.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hauptstraße 19–20',
      addressLocality: 'Dallgow-Döberitz',
      postalCode: '14624',
      addressCountry: 'DE',
    },
    telephone: '+493039805610',
    email: 'contact@pixformance.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'contact@pixformance.com',
      telephone: '+493039805610',
      availableLanguage: ['German', 'English'],
    },
    knowsAbout: [
      'Digitale Bewegungstherapie',
      'Rehabilitation',
      'Physiotherapie',
      'Funktionelles Training',
      'Betriebliches Gesundheitsmanagement',
      'Echtzeit-Bewegungsanalyse',
      'Telerehabilitation',
      'Patientenaktivierung',
    ],
    award: 'FORTEe EU Research Partner',
    sameAs: [
      'https://www.linkedin.com/company/pixformance',
      'https://www.youtube.com/@pixformance',
    ],
    areaServed: ['DE', 'AT', 'CH', 'NL', 'FR', 'IT'],
  },
  en: {
    name: 'Pixformance USA Inc.',
    url: 'https://www.pixformance.com/en/',
    description:
      'Pioneer in digital motion analysis and real-time feedback for physical therapy, clinics, fitness and corporate wellness.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+1-888-420-4572',
      email: 'info@pixformance.com',
      availableLanguage: ['English', 'German'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3 Windward Way',
      addressLocality: 'East Windsor',
      addressRegion: 'NJ',
      postalCode: '08520',
      addressCountry: 'US',
    },
    sameAs: SAME_AS_FULL,
    areaServed: ['US', 'CA', 'GB', 'AU'],
  },
  fr: {
    name: 'Pixformance Sports GmbH',
    url: 'https://www.pixformance.com/fr/',
    description:
      "Pionnier de l'analyse du mouvement digital et du retour en temps réel pour la physiothérapie, les cliniques, le fitness et le bien-être en entreprise.",
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+49-30-39805610',
      email: 'info@pixformance.com',
      availableLanguage: ['French', 'German'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Großbeerenstraße 2',
      addressLocality: 'Unterhaching',
      postalCode: '82008',
      addressCountry: 'DE',
    },
    sameAs: SAME_AS_FULL,
    areaServed: ['FR', 'BE', 'CH', 'LU'],
  },
  it: {
    name: 'Pixformance Sports GmbH',
    url: 'https://www.pixformance.com/it/',
    description:
      "Pioniere nell'analisi del movimento digitale e del feedback in tempo reale per la fisioterapia, le cliniche, il fitness e il benessere aziendale.",
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+49-30-39805610',
      email: 'info@pixformance.com',
      availableLanguage: ['Italian', 'German', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Großbeerenstraße 2',
      addressLocality: 'Unterhaching',
      postalCode: '82008',
      addressCountry: 'DE',
    },
    sameAs: SAME_AS_FULL,
    areaServed: ['IT', 'CH', 'AT'],
  },
  nl: {
    name: 'Pixformance Sports GmbH',
    url: 'https://www.pixformance.com/nl/',
    description:
      'Pionier in digitale bewegingsanalyse en real-time feedback voor fysiotherapie, klinieken, fitness en bedrijfswelzijn.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+49-30-39805610',
      email: 'info@pixformance.com',
      availableLanguage: ['Dutch', 'German'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Großbeerenstraße 2',
      addressLocality: 'Unterhaching',
      postalCode: '82008',
      addressCountry: 'DE',
    },
    sameAs: SAME_AS_FULL,
    areaServed: ['NL', 'BE'],
  },
} as const;

export type OrgLocale = keyof typeof ORG_LOCALES;

export function orgSchema(locale: OrgLocale): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    logo: LOGO,
    foundingDate: '2012',
    ...ORG_LOCALES[locale],
  };
}
