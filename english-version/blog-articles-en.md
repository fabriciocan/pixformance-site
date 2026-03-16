# Pixformance — Blog Articles (EN)

## Page Metadata
- **Route/Slug:** `/en/blog-articles/` (must keep this slug for SEO)
- **Title tag:** `Blog - Pixformance Sports GmbH`
- **Source URL (reference):** https://www.pixformance.com/en/blog-articles/
- **Language:** EN
- **Equivalent DE page:** Check for `/blog/` or similar — use as layout/design reference
- **Page type:** Standard page (full nav header + full footer) — Blog listing/index page

---

## Instructions for Claude Code

1. **This is a blog listing/index page** — displays a grid/list of blog post cards, each linking to an individual blog post page.
2. **Find the German blog listing page** in the Astro project and replicate its layout.
3. **7 blog posts** listed on this page. Each card has: thumbnail image, title (H2 link), category tag(s), and excerpt text.
4. **One blog post (article 6) has no thumbnail image** — check DE page.
5. **The H1 shows "Über uns"** — same bug as the News page (German text leaking). Should be "Blog" or "Blog Articles" in English.
6. **Category pages exist** — each category tag links to a category archive page (`/en/category/...`). These category pages will need to be created separately or handled dynamically.
7. **The individual blog post pages** (`/en/...slug.../`) will need to be created separately. This .md covers only the listing page.

---

## Section 1: Page Title

### H1:
> **Bug:** Shows "Über uns" (German). Should be **"Blog"** or **"Blog Articles"** in English. Check DE page for the correct implementation.

---

## Section 2: Blog Post Cards

### Post 1: Increase Physical Therapy Sales
- **Image:** `https://www.pixformance.com/wp-content/uploads/2021/05/umsatz-steigern-physiotherapie-pixformance-selbstzahlerbereich-400x250.jpg`
- **Title:** Increase Physical Therapy Sales: What Opportunities Does The Self-Pay Sector Have To Offer Now?
- **Categories:** [Physiotherapy](/en/category/physiotherapy-2/)
- **Excerpt:** The move into the second healthcare market in physical therapy offers some current opportunities for physical therapists in Germany.
- **Link:** `/en/increase-physical-therapy-sales-what-opportunities-does-the-self-pay-sector-have-to-offer-now/`

### Post 2: Digitization in Healthcare
- **Image:** `https://www.pixformance.com/wp-content/uploads/2020/05/Digitalisierung-Chance-Gesundheitsbranche-Pixformance-Blog-Online-Plattform-Analyse-Ehealth-Physiotherapie-Telemedizin-Telerehabilitation-Rehageraet-400x250.jpg`
- **Title:** Digitization: An Opportunity For The Healthcare Industry
- **Categories:** [Clinic](/en/category/clinic/), [Physiotherapy](/en/category/physiotherapy-2/)
- **Excerpt:** Our everyday lives are already smart and digital in many respects. Digitization is also advancing rapidly in the healthcare industry.
- **Link:** `/en/digitization-an-opportunity-for-the-healthcare-industry/`

### Post 3: Weight Watchers Lessons
- **Image:** `https://www.pixformance.com/wp-content/uploads/2019/11/Canva-People-in-Gym-400x250.jpg`
- **Title:** Three Lessons Fitness Clubs Can Learn From Weight Watchers' New Business Strategy
- **Categories:** [Corporate](/en/category/corporate/), [Corporate Health](/en/category/corporate-health/)
- **Excerpt:** Weight Watchers had been the most dominant player in the dieting market for decades up until 2015 when the company's subscription revenue shrank from $6 billion to $1 billion over a four year period. In response to this…
- **Link:** `/en/three-lessons-fitness-clubs-can-learn-from-weight-watchers/`

### Post 4: Quantified Self
- **Image:** `https://www.pixformance.com/wp-content/uploads/2019/11/quantified-self-movement-for-fitness-and-health-400x250.jpg`
- **Title:** Why The "Quantified Self" Movement Is A Business Opportunity
- **Categories:** [Health](/en/category/health/)
- **Excerpt:** These days everyone is talking about the "quantified self". With the rapid development of new fitness software in the form of apps and wearable devices, we've witnessed a growing interest in collecting data about our lives in order to make self-improvements. This trend has…
- **Link:** `/en/why-the-quantified-self-is-a-business-opportunity/`

### Post 5: Integrating New Technologies
- **Image:** `https://www.pixformance.com/wp-content/uploads/2019/11/quantified-self-movement-is-trending-400x250.jpg`
- **Title:** Three Strategies On Integrating New Technologies Into Your Functional Fitness Club
- **Categories:** [Corporate](/en/category/corporate/), [Corporate Health](/en/category/corporate-health/)
- **Excerpt:** Currently, much discussion is taking place about how the "quantified self" movement is reshaping the fitness and health industry. In this post, we introduce three strategies on how to integrate new technologies…
- **Link:** `/en/three-strategies-on-integrating-new-technologies-into-your-functional-fitness-club/`

### Post 6: Smart Training for Multiple Sclerosis
- **Image:** (no thumbnail rendered — check DE page)
- **Title:** How "Smart Training" With Pixformance Can Improve The Quality of Life Among People Living With Multiple Sclerosis
- **Categories:** [Therapy](/en/category/therapy/)
- **Excerpt:** Multiple Sclerosis is one of the most common neurological conditions among young adults in the U.K. In this article, we discuss a recently released qualitative study that tested the effectiveness…
- **Link:** `/en/smart-training-with-pixformance-improves-life-quality-of-people-with-multiple-sclerosis/`

### Post 7: Top 5 Challenges Faced By Physiotherapists
- **Image:** `https://www.pixformance.com/wp-content/uploads/2019/11/physiotherapist-with-woman-patient-400x250.jpg`
- **Title:** Top 5 Challenges Faced By Physiotherapists
- **Categories:** [Physiotherapy](/en/category/physiotherapy/)
- **Excerpt:** In this article, let us shed some light on the major challenges faced by physiotherapists. Like in any other profession, Physiotherapy has its positives and negatives as well. Although the branch is rewarding, it sure comes with its downsides. After talking to several physiotherapists and…
- **Link:** `/en/top-five-challenges-faced-by-physiotherapists/`

---

## Blog Categories (for routing)

These category archive pages may need to be created:

| Category | URL |
|---|---|
| Physiotherapy | `/en/category/physiotherapy-2/` |
| Physiotherapy (alt) | `/en/category/physiotherapy/` |
| Clinic | `/en/category/clinic/` |
| Corporate | `/en/category/corporate/` |
| Corporate Health | `/en/category/corporate-health/` |
| Health | `/en/category/health/` |
| Therapy | `/en/category/therapy/` |

> **Note:** There are two different Physiotherapy category slugs (`physiotherapy-2` and `physiotherapy`). This is likely a WordPress artifact. Check DE page for how categories are handled in Astro — may need to consolidate.

---

## Footer

*(Standard footer — same as homepage. Use the shared footer component.)*

---

## All Image URLs (for download)

```
https://www.pixformance.com/wp-content/uploads/2021/05/umsatz-steigern-physiotherapie-pixformance-selbstzahlerbereich-400x250.jpg
https://www.pixformance.com/wp-content/uploads/2020/05/Digitalisierung-Chance-Gesundheitsbranche-Pixformance-Blog-Online-Plattform-Analyse-Ehealth-Physiotherapie-Telemedizin-Telerehabilitation-Rehageraet-400x250.jpg
https://www.pixformance.com/wp-content/uploads/2019/11/Canva-People-in-Gym-400x250.jpg
https://www.pixformance.com/wp-content/uploads/2019/11/quantified-self-movement-for-fitness-and-health-400x250.jpg
https://www.pixformance.com/wp-content/uploads/2019/11/quantified-self-movement-is-trending-400x250.jpg
https://www.pixformance.com/wp-content/uploads/2019/11/physiotherapist-with-woman-patient-400x250.jpg
```

---

## Important Notes for Claude Code

1. **Simple listing page** — blog card grid. Check DE page for column count (likely 2 columns on desktop, 1 on mobile).
2. **H1 "Über uns" bug** — same issue as the News page. Fix to "Blog" or "Blog Articles".
3. **Post 6 has no thumbnail** — may have a default/placeholder image in the DE version, or it could be a missing featured image.
4. **Two different "Physiotherapy" category slugs** exist (`physiotherapy` and `physiotherapy-2`). This is a WordPress artifact — decide with the client whether to consolidate.
5. **Category archive pages** (`/en/category/...`) — decide whether to implement these in Astro or just use the category as a label without a link.
6. **Individual blog post pages** need to be created separately — this .md only covers the listing/index.
7. **Thumbnail images are 400×250** — consistent sizing. Check DE page for CSS handling.
8. **Each card structure:** image (linked) → H2 title (linked) → category tag(s) → excerpt text. No dates visible.
