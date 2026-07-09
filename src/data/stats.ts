// Canonical company statistics — single source of truth (Site-Fix 2026-07).
// Stat-card `value:` fields must read from DISPLAY; prose and meta descriptions
// remain plain text (W3b phase 1). v1 legacy pages are excluded.

export const CANON = {
  installations: 6000,
  usersPerYear: 2_500_000,
  workoutsPerYear: 6_000_000,
  exercises: 700,
  partners: 1100,
  partnerClinics: 150,
  partnerPhysio: 500,
  partnerFitness: 400,
  countries: 16,
  spaceSqm: 6,
  founded: 2012,
  founder: 'Valerie Bures-Bönström',
} as const;

export const DISPLAY = {
  de: { users: '2,5M+', installations: '6.000+', workouts: '6M+', exercises: '700+', partners: '1.100+', clinics: '150+', countries: '16' },
  en: { users: '2.5M+', installations: '6,000+', workouts: '6M+', exercises: '700+', partners: '1,100+', clinics: '150+', countries: '16' },
  fr: { users: '2,5M+', installations: '6 000+', workouts: '6M+', exercises: '700+', partners: '1 100+', clinics: '150+', countries: '16' },
  it: { users: '2,5M+', installations: '6.000+', workouts: '6M+', exercises: '700+', partners: '1.100+', clinics: '150+', countries: '16' },
  nl: { users: '2,5M+', installations: '6.000+', workouts: '6M+', exercises: '700+', partners: '1.100+', clinics: '150+', countries: '16' },
} as const;

export type StatsLocale = keyof typeof DISPLAY;
