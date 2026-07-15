// Generates dist/llms-full.txt — a plain-text corpus of the key German pages
// for LLM crawlers (GEO). Runs after `astro build` (see package.json).
// Extracts the <main> content of each built page and converts it to markdown-ish text.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const SITE = 'https://www.pixformance.com';

const KEY_PAGES = ['fakten', 'konzept', 'physiotherapie', 'klinik', 'fitness', 'firmen-fitness', 'faq'];
const caseStudies = readdirSync(join(DIST, 'erfolgsgeschichten'), { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => `erfolgsgeschichten/${e.name}`)
  .sort();

function htmlToText(html) {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  if (!main) return '';
  let t = main
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<(noscript|form|iframe)[\s\S]*?<\/\1>/gi, '')
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n\n# $1\n\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n\n## $1\n\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n\n### $1\n\n')
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n\n#### $1\n\n')
    .replace(/<li[^>]*>/gi, '\n- ')
    .replace(/<\/(p|li|ul|ol|div|section|blockquote|figure|table|tr)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ');
  t = t
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&#8211;/g, '–').replace(/&#8212;/g, '—').replace(/&#8230;/g, '…');
  return t
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .join('\n')
    .replace(/^(#{1,4})\s*\n+(?=\S)/gm, '$1 ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function pageTitle(html) {
  return html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].trim() ?? '';
}

const overview = readFileSync(join(DIST, 'llms.txt'), 'utf8').trim();
const sections = [overview];

for (const page of [...KEY_PAGES, ...caseStudies]) {
  const file = join(DIST, page, 'index.html');
  if (!existsSync(file)) {
    console.warn(`[llms-full] skipped missing page: ${page}`);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  const body = htmlToText(html);
  if (!body) {
    console.warn(`[llms-full] no <main> content: ${page}`);
    continue;
  }
  sections.push(`---\n\nSource: ${SITE}/${page}\nTitle: ${pageTitle(html)}\n\n${body}`);
}

const out = sections.join('\n\n') + '\n';
writeFileSync(join(DIST, 'llms-full.txt'), out, 'utf8');
console.log(`[llms-full] wrote dist/llms-full.txt — ${sections.length - 1} pages, ${(out.length / 1024).toFixed(0)} KB`);
