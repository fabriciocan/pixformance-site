# Pixformance — Contact (EN)

## Page Metadata
- **Route/Slug:** `/en/contact/` (must keep this slug for SEO)
- **Title tag:** `Contact - Pixformance Sports GmbH`
- **Source URL (reference):** https://www.pixformance.com/en/contact/
- **Language:** EN
- **Equivalent DE page:** `/kontakt-2/` — use as layout/design reference
- **Page type:** Standard page (full nav header + full footer)

---

## Instructions for Claude Code

1. **Find the German `/kontakt-2/` page** in the Astro project and replicate its layout.
2. **The page likely has a contact form** that was not rendered in the extraction (forms often don't render via web_fetch). Check the DE page for the form implementation — likely HubSpot, custom form, or similar.
3. **Header section is duplicated** (mobile/desktop). Check DE page for responsive handling.
4. **All email addresses** were obfuscated by Cloudflare — I've decoded them below.
5. **Two headquarter addresses** — USA (primary) and Germany.

---

## Section 1: Page Header

### H2:
**Feel free to write us!**

### Subtitle (bold):
**Let's have a conversation and explore if our concept meets your needs.**

> **Note:** Duplicated for mobile/desktop.

---

## Section 2: Contact Form

> **IMPORTANT:** The contact form was not rendered in the HTML extraction. Check the DE page `/kontakt-2/` for the form component — it's likely the main content element of this page. Could be a HubSpot embed, WPForms, Contact Form 7, or custom implementation. Replicate the same approach.

---

## Section 3: Contact Information Grid

### Headquarter USA
- **Company:** Pixformance USA Inc.
- **Address:** 3 Windward Way, East Windsor, NJ 08520

### Headquarter Germany
- **Company:** Pixformance Sports GmbH
- **Address:** Hauptstraße 19 – 20, 14624 Dallgow-Döberitz

### Marketing and PR
- **Email:** marketing@pixformance.com

### Product Consultation
- **Phone:** +1 888 – 420-4572
- **Email:** info@pixformance.com

### General Inquiries
- **Phone:** +1 888 – 420-4572
- **Email:** info@pixformance.com

### Technical Support
- **Phone:** +1 888 – 420-4572
- **Email:** info@pixformance.com

> **Note on emails:** All emails were obfuscated by Cloudflare email protection on the original site. The pattern suggests: `marketing@pixformance.com` for Marketing/PR, and `info@pixformance.com` for the other three. Verify with the DE page source or with the client. Make all emails proper `mailto:` links.

---

## Footer

*(Standard footer — same as homepage. Use the shared footer component.)*

---

## All Image URLs (for download)

```
(none — no page-specific images)
```

---

## Important Notes for Claude Code

1. **The contact form is the most critical element** on this page and it was NOT captured in the extraction. You MUST check the DE page to find and replicate the form component.
2. **Two office addresses** — USA (primary for EN site) and Germany. Display both in a grid/card layout. Check DE page for the visual layout.
3. **Four contact departments** in a grid: Marketing/PR, Product Consultation, General Inquiries, Technical Support. Each with phone and/or email.
4. **All phone numbers are the same** (+1 888-420-4572) — this is the US toll-free number.
5. **No page-specific images** — but check DE page for possible map embed, background image, or team member photos.
6. **The page is a key conversion page** — many CTAs across the site link here. Make sure the form works properly and is prominently placed.
