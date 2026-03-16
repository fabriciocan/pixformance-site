# Pixformance — Jobs (EN)

## Page Metadata
- **Route/Slug:** `/en/jobs/` (must keep this slug for SEO)
- **Title tag:** `Fitness Innovation Jobs - Pixformance Sports`
- **Source URL (reference):** https://www.pixformance.com/en/jobs/
- **Language:** EN
- **Equivalent DE page:** `/jobs/` — use as layout/design reference
- **Page type:** Standard page (full nav header + full footer) — Company subpage

---

## Instructions for Claude Code

1. **Find the German `/jobs/` page** in the Astro project and replicate its layout.
2. **Very simple page** — hero section with text + body content. No images (aside from possible hero background — check DE page).
3. **Hero section is duplicated** (mobile/desktop) with slight text variations. Check DE page for responsive handling.
4. **No open positions currently** — the page shows a static message. Check DE page for whether job listings are dynamic or static.
5. **Email address** is obfuscated by Cloudflare email protection — the actual email is `jobs@pixformance.com`.

---

## Section 1: Hero

### Label:
**Jobs**

### H1 (desktop version):
**Chronically curious about Fitness innovation?**

### H1 (second line):
**Good, So are we.**

### Tagline:
At Pixformance diversity isn't just something we talk about, it's who we are.

### H1 (mobile version — slight variation):
**Chronically curious about digital functional fitness and training?**

### H1 (mobile second line):
**Good, So are we**

### Mobile tagline:
At Pixformance diversity isn't just something we talk about, it's who we are.

> **Note:** Two versions exist (mobile/desktop) with different H1 text. Check DE page for how this is handled — likely CSS show/hide.

---

## Section 2: Body Content

### Body text (paragraph 1):
As pioneers of functional fitness innovation, we are always on the lookout for creative and highly motivated people with interesting and provocative ideas, courageous perspectives, and unwavering curiosity.

### Body text (paragraph 2):
We link the unique experiences of each employee to shape our common vision of the future. Our corporate culture revolves around the continuous professional and personal development of each individual while we courageously seek to drive change in this modern world.

### Current Status (bold):
**There are no open job positions.**

### Unsolicited Application:
Feel free to send us your unsolicited application to jobs@pixformance.com.

> **Note:** The email is `jobs@pixformance.com` — was obfuscated by Cloudflare on the original site. Make it a proper `mailto:` link.

---

## Footer

*(Standard footer — same as homepage. Use the shared footer component.)*

---

## All Image URLs (for download)

```
(none — no page-specific images)
```

> **Note:** Check DE page for a possible hero background image or illustration that wasn't rendered in the extraction.

---

## Important Notes for Claude Code

1. **Simplest page in the site** — just hero text + 2 paragraphs + status message + email link.
2. **Hero has two text variants** (mobile/desktop) — different H1 copy. Preserve this responsive behavior from DE page.
3. **The job listings section** currently shows "no open positions" — check DE page for whether this is a dynamic component (e.g., pulling from an API or CMS) or just static text.
4. **Email link:** `mailto:jobs@pixformance.com` — ensure it's a clickable mailto link, not obfuscated.
5. **No images to download** for this page — but check DE page for possible hero background.
