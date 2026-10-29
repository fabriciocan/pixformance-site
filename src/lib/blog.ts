/**
 * Cliente da API pública do blog (back-end Next em `pixformance-blog`, só leitura).
 *
 * As páginas /blog/* são renderizadas sob demanda (prerender = false) e chamam esta
 * API a cada requisição; o header e o footer consultam `blogStatus()` pra decidir se o
 * item "Blog" aparece: sem post publicado, o blog não existe no menu.
 *
 * Endereço: BLOG_API_URL. No container SSR é o nome interno do back-end; no build
 * estático (dentro do `docker build`) é o endereço público, por isso qualquer falha
 * vira "sem blog" em vez de derrubar o build.
 */

export type BlogLocale = 'de' | 'en';

export type BlogCard = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string | null;
  readingMinutes: number;
  coverUrl: string | null;
  coverAlt: string | null;
  categoryName: string | null;
  categorySlug: string | null;
  authorName: string | null;
};

export type BlogStatus = {
  de: number;
  en: number;
  version: string | null;
  site: {
    name: string;
    de: { tagline: string; description: string };
    en: { tagline: string; description: string };
  };
};

export type BlogCategory = { slug: string; name: string; description: string | null; position: number };

export type BlogList = {
  items: BlogCard[];
  total: number;
  page: number;
  pages: number;
  category: { slug: string; name: string; description: string | null } | null;
};

export type BlogPost = {
  post: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    html: string;
    toc: { id: string; text: string }[];
    metaTitle: string | null;
    metaDescription: string | null;
    keywords: string[];
    faq: { question: string; answer: string }[];
    coverUrl: string | null;
    coverAlt: string | null;
    readingMinutes: number;
    wordCount: number;
    publishedAt: string | null;
    updatedAt: string;
  };
  category: { slug: string; name: string } | null;
  author: { slug: string; name: string; roleTitle: string | null; bio: string | null } | null;
  alternateSlug: string | null;
  related: BlogCard[];
};

export const SITE_ORIGIN = 'https://www.pixformance.com';
export const BLOG_ROOT = '/blog';

const API_URL = (process.env.BLOG_API_URL ?? `${SITE_ORIGIN}${BLOG_ROOT}/api/public`).replace(/\/$/, '');
const TIMEOUT_MS = 8000;

/* -------------------------------------------------------------- Endereços */

export const blogPaths = {
  home: (l: BlogLocale) => (l === 'en' ? `${BLOG_ROOT}/en` : BLOG_ROOT),
  page: (l: BlogLocale, n: number) =>
    n <= 1 ? blogPaths.home(l) : `${blogPaths.home(l)}?${l === 'en' ? 'page' : 'seite'}=${n}`,
  post: (l: BlogLocale, slug: string) => `${blogPaths.home(l)}/${slug}`,
  category: (l: BlogLocale, slug: string) =>
    l === 'en' ? `${BLOG_ROOT}/en/category/${slug}` : `${BLOG_ROOT}/rubrik/${slug}`,
};

export function absolute(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}

/* ------------------------------------------------------------------ Fetch */

async function get<T>(path: string): Promise<T | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(`${API_URL}${path}`, {
      signal: controller.signal,
      headers: { accept: 'application/json' },
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** Status com cache curto em memória: header e footer perguntam a cada página. */
let statusCache: { value: BlogStatus | null; until: number } | null = null;
const STATUS_TTL_MS = 60_000;

export async function blogStatus(): Promise<BlogStatus | null> {
  const now = Date.now();
  if (statusCache && statusCache.until > now) return statusCache.value;
  const value = await get<BlogStatus>('/status');
  statusCache = { value, until: now + (value ? STATUS_TTL_MS : 10_000) };
  return value;
}

/** Há posts publicados nesta língua? Decide se o item "Blog" aparece no menu. */
export async function blogVisible(locale: BlogLocale): Promise<boolean> {
  const status = await blogStatus();
  return Boolean(status && status[locale] > 0);
}

export function blogList(locale: BlogLocale, page = 1, category?: string): Promise<BlogList | null> {
  const query = new URLSearchParams({ locale, page: String(page) });
  if (category) query.set('category', category);
  return get<BlogList>(`/posts?${query}`);
}

export function blogPost(locale: BlogLocale, slug: string): Promise<BlogPost | { redirectTo: string } | null> {
  return get<BlogPost | { redirectTo: string }>(`/posts/${encodeURIComponent(slug)}?locale=${locale}`);
}

export function blogCategories(locale: BlogLocale): Promise<BlogCategory[] | null> {
  return get<BlogCategory[]>(`/categories?locale=${locale}`);
}

/* ----------------------------------------------------------------- Textos */

export function formatBlogDate(value: string | null, locale: BlogLocale): string {
  if (!value) return '';
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value));
}

export const blogText = {
  de: {
    blog: 'Blog',
    home: 'Start',
    allPosts: 'Alle Beiträge',
    category: 'Rubrik',
    categories: 'Rubriken',
    readPost: 'Beitrag lesen',
    readMore: 'Weiterlesen',
    readingTime: (n: number) => `${n} Min. Lesezeit`,
    pageOf: (n: number, total: number) => `Seite ${n} von ${total}`,
    previous: 'Zurück',
    next: 'Weiter',
    toc: 'Inhalt',
    faq: 'Häufige Fragen',
    related: 'Weiterlesen',
    emptyCategory: 'In dieser Rubrik gibt es noch keine Beiträge.',
    otherLanguage: 'Read this article in English',
    ctaTitle: 'Pixformance in Ihrer Einrichtung erleben',
    ctaText: 'Lernen Sie die Pixformance Station unverbindlich kennen: digitale Bewegungstherapie mit Echtzeit-Feedback.',
    ctaButton: 'Unverbindlich testen',
    ctaHref: '/testen',
    pagination: 'Seiten',
    postsCount: (n: number) => `${n} ${n === 1 ? 'Beitrag' : 'Beiträge'}`,
  },
  en: {
    blog: 'Blog',
    home: 'Home',
    allPosts: 'All articles',
    category: 'Category',
    categories: 'Categories',
    readPost: 'Read article',
    readMore: 'Read more',
    readingTime: (n: number) => `${n} min read`,
    pageOf: (n: number, total: number) => `Page ${n} of ${total}`,
    previous: 'Previous',
    next: 'Next',
    toc: 'Contents',
    faq: 'Frequently asked questions',
    related: 'Read more',
    emptyCategory: 'There are no articles in this category yet.',
    otherLanguage: 'Diesen Beitrag auf Deutsch lesen',
    ctaTitle: 'Experience Pixformance in your facility',
    ctaText: 'Get to know the Pixformance Station without obligation: digital exercise therapy with real-time feedback.',
    ctaButton: 'Apply for a trial',
    ctaHref: '/en/apply-for-trial/',
    pagination: 'Pages',
    postsCount: (n: number) => `${n} ${n === 1 ? 'article' : 'articles'}`,
  },
} as const;
