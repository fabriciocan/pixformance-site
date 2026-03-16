# CLAUDE.md — Pixformance EN Site Build Instructions

## Project Overview

You are building the **English version** of the Pixformance website using **Astro**. The German (DE) version of the site is already fully built and functional in this project. Your job is to create the English (EN) pages by **replicating the design and layout from the DE pages** and **replacing the content with the English text** provided in the briefing files.

## Briefing Files Location

All page briefings are in the folder: **`english version/`**

Each `.md` file contains:
- The **route/slug** the EN page must have (for SEO preservation)
- The **equivalent DE page path** to use as layout/design reference
- **All English text content** organized by sections
- **All image URLs** that need to be downloaded/used
- **All PDF/video/asset URLs** for download
- **Specific notes and warnings** about things to watch for (lazy-loaded images, forms, responsive variants, bugs, etc.)

## Available Pages (13 total)

| # | Briefing File | EN Route | DE Reference |
|---|---|---|---|
| 1 | `homepage-en.md` | `/en/` | `/` (homepage) |
| 2 | `apply-for-trial-en.md` | `/en/apply-for-trial/` | DE landing page (testen/demo) |
| 3 | `products-concept-en.md` | `/en/products-2/` | `/digitales-trainingskonzept/` |
| 4 | `physical-therapy-en.md` | `/en/physical-therapy/` | `/physiotherapie/` or similar |
| 5 | `fitness-en.md` | `/en/fitness/` | `/fitness/` |
| 6 | `corporate-fitness-en.md` | `/en/corporate-fitness/` | `/firmen-fitness/` |
| 7 | `about-us-en.md` | `/en/about-us/` | `/ueber-uns/` |
| 8 | `success-stories-en.md` | `/en/success-stories/` | `/erfolgsgeschichten/` |
| 9 | `news-en.md` | `/en/functional-training-and-fitness-news/` | `/presse/` |
| 10 | `blog-articles-en.md` | `/en/blog-articles/` | DE blog listing |
| 11 | `faq-en.md` | `/en/faq-training-with-pixformance-station/` | `/training-mit-pixformance/` |
| 12 | `jobs-en.md` | `/en/jobs/` | `/jobs/` |
| 13 | `contact-en.md` | `/en/contact/` | `/kontakt-2/` |

## Step-by-Step Workflow

### Phase 0: Understand the Project Structure
1. Explore the full project directory structure
2. Identify how the Astro project is organized (pages, layouts, components, assets, i18n)
3. Understand how the DE pages are built — what layouts, components, and patterns are used
4. Check if there's an existing i18n/internationalization system in place
5. Check if there's already an `/en/` route or partial EN setup

### Phase 1: Setup EN Routing
1. Determine the best approach for EN pages based on the existing project structure:
   - If i18n is already configured, use the existing system
   - If not, create EN pages mirroring the DE file structure under an `/en/` route
2. Ensure the shared layout components (header, footer, navigation) support English content
3. Create or adapt the EN header navigation with correct links (all `/en/` prefixed)
4. Create or adapt the EN footer with US contact info (Pixformance USA Inc., East Windsor NJ, +1 888-420-4572, info@pixformance.com)

### Phase 2: Shared Components
Before building individual pages, ensure these shared components work for EN:

1. **Header/Navigation** — EN menu items with `/en/` prefix links, language switcher, Customer Login button, "Apply For Trial" CTA
2. **Footer** — US contact info, EN blog posts links, social media icons, copyright
3. **Solutions Sub-Navigation Tabs** — Physical Therapy / Fitness / Corporate Fitness (reusable across 3 pages)
4. **Testimonials Carousel** — reusable component for quotes
5. **Partner/Client Logo Bar** — horizontal scrolling or static logo grid
6. **Benefit Cards Grid** — icon + title + text card layout (used on multiple pages)
7. **Team Members Grid** — photo + name + role layout
8. **Popup CTA** — the floating "Apply For Trial" image button that appears on several pages

### Phase 3: Build Pages (Recommended Order)
Build in this order to maximize component reuse:

1. **Homepage** (`/en/`) — establishes core layout, header, footer, logo bars, testimonials
2. **Contact** (`/en/contact/`) — simple page, tests form implementation
3. **FAQ** (`/en/faq-training-with-pixformance-station/`) — tests accordion component
4. **About Us** (`/en/about-us/`) — tests team grid component
5. **Concept/Products** (`/en/products-2/`) — tests numbered sections layout
6. **Physical Therapy** (`/en/physical-therapy/`) — largest page, tests all components
7. **Fitness** (`/en/fitness/`) — reuses many components from Physical Therapy
8. **Corporate Fitness** (`/en/corporate-fitness/`) — reuses components from Fitness
9. **Success Stories** (`/en/success-stories/`) — card grid listing page
10. **Blog Articles** (`/en/blog-articles/`) — card grid listing page
11. **News** (`/en/functional-training-and-fitness-news/`) — numbered timeline + press downloads
12. **Jobs** (`/en/jobs/`) — simplest page
13. **Apply For Trial** (`/en/apply-for-trial/`) — landing page with simplified header/footer

### Phase 4: Assets
1. Download all images listed in each `.md` file's "All Image URLs" section
2. Download all PDFs listed in each `.md` file
3. Download video files (hero videos for homepage and physical therapy page)
4. Place assets in the project's appropriate directory (check where DE assets live)
5. If images already exist from the DE site (many are shared), reuse them — don't duplicate

## Critical Rules

### SEO
- **Slugs must match exactly** as specified in each `.md` file — these preserve existing SEO
- Set correct `<title>` tags as specified in each `.md`
- Maintain heading hierarchy (H1 > H2 > H3) as documented
- Add `hreflang` tags linking EN ↔ DE pages if not already present
- Add FAQ schema markup (JSON-LD) on the FAQ page if the DE version has it

### Design
- **DO NOT redesign anything** — replicate the DE version's design exactly
- Only the text content changes (DE → EN)
- Some pages have different content between EN and DE (different testimonials, different stats, US-specific info) — use the content from the `.md` files, not translated DE content
- Preserve all responsive behavior (mobile/desktop variants)
- Keep all animations (GIFs, video autoplay, counters, carousels)

### Content
- Use the English text **exactly as provided** in the `.md` files — do not translate from German
- The `.md` files ARE the source of truth for EN content
- Where the `.md` notes say "check DE page" for missing content (lazy-loaded images, forms, etc.), look at the actual DE page source code to find what's needed

### Known Bugs to Fix
- **News page and Blog page** have an H1 showing "Über uns" (German text leak) — use appropriate English titles ("News" / "Blog")
- **Some pages have sections duplicated** in HTML for mobile/desktop — follow the DE implementation pattern, don't create double content

### Contact Info (EN/US)
All EN pages should use US contact information:
- **Company:** Pixformance USA Inc.
- **Address:** 3 Windward Way, East Windsor, NJ 08520
- **Phone:** +1 888 – 420-4572
- **Email:** info@pixformance.com
- **Marketing Email:** marketing@pixformance.com

### Forms
Several pages have forms (Contact, Apply For Trial, "Let us advise you" sections). Check the DE implementation to understand how forms are embedded (HubSpot, custom, etc.) and replicate the same approach for EN.

## When In Doubt
1. **Always check the DE equivalent page first** — it's your design reference
2. **Read the "Important Notes for Claude Code" section** at the bottom of each `.md` file — it contains page-specific warnings and tips
3. **Test each page** after building it — check that links work, images load, responsive layout is correct
4. If a component already exists for the DE site, **reuse it** with EN content props rather than creating a duplicate