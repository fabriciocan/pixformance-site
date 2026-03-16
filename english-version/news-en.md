# Pixformance — News (EN)

## Page Metadata
- **Route/Slug:** `/en/functional-training-and-fitness-news/` (must keep this slug for SEO)
- **Title tag:** `Functional Training and Fitness News - Pixformance Sports GmbH`
- **Source URL (reference):** https://www.pixformance.com/en/functional-training-and-fitness-news/
- **Language:** EN
- **Equivalent DE page:** `/presse/` — use as layout/design reference
- **Page type:** Standard page (full nav header + full footer) — Company subpage / press & news listing

---

## Instructions for Claude Code

1. **This is a press/news listing page** with a press download section at the top + a numbered timeline of 14 press articles.
2. **Find the German `/presse/` page** in the Astro project and replicate its layout.
3. **The articles use a numbered alternating layout** (image left/text right, then text left/image right). Check DE page for the pattern.
4. **All articles link to external PDFs or external URLs** — no internal pages.
5. **Many article images were lazy-loaded.** Check DE page for those that didn't render.
6. **The page has a stray H1 "Über uns"** at the top — this seems like a bug from the German version. Check DE page; the EN version should probably say "News" or "Press" instead.
7. **Press Download section is duplicated** (mobile/desktop).

---

## Section 1: Page Title

### H1:
> **Note:** The extracted HTML shows "Über uns" which is German and likely a bug. Check DE page — the EN version should have an English title like "News" or "Press". If the DE page also has this title, replicate it; otherwise use an appropriate English title.

---

## Section 2: Press Download

### H2:
**PRESS DOWNLOAD**

### Body text:
Here you can find our press kit as well as our logos and other pictures for free editorial use for free download.

Should you require further information, please do not hesitate to contact us.

### Image:
`https://www.pixformance.com/wp-content/uploads/2020/03/Pressemappe-EN-Pixformance-web.jpg`

### Download Links:
| Label | URL |
|---|---|
| Press kit (PDF) | `https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Presskit-EN-Functional-Training-Fitness-Physio-Clinic-Corporate-Fitness-1.pdf` |
| Logos (ZIP) | `https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Logos.zip` |
| Pictures (ZIP) | `https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Pictures-Copyright-to-use-for-all-images-Pixformance-Sports-GmbH.zip` |

> **Note:** Duplicated for mobile/desktop.

---

## Section 3: Press Articles Timeline

### Article 01 — FORTEe (2021)
- **H2:** Get strong to fight childhood cancer
- **Text:** Pixformance is a partner of the European research project FORTEe. The project with the motto "Get strong to fight childhood cancer" aims to investigate the effectiveness of exercise therapy and digital health technologies during cancer treatment in children and adolescents.
- **Year:** 2021
- **Image:** `https://www.pixformance.com/wp-content/uploads/2021/04/Pixformance-FORTEe-Stark-gegen-Kinderkrebs-Strong-against-childhood-cancer-Projektpartner-Digitalisierung-Telemedizin-Teletherapie-Ehealth.jpg`
- **Link:** `https://www.pixformance.com/wp-content/uploads/2021/04/PM-07042021-Pixformance-FORTEe-Strong-against-childhood-cancer-EN.pdf`
- **CTA:** "to the press release"

### Article 02 — Shape UP Business (2020)
- **H2:** Shape UP Business
- **Text:** The magazine for fitness studio operators and personal trainers deals with the topic of why functional training in particular benefits from digital support. In an interview with Valerie Bures-Bönström, the advantages for trainers and athletes are also highlighted.
- **Year:** 2020
- **Image:** `https://www.pixformance.com/wp-content/uploads/2020/03/Shape-UP-Business-Pixformance-Functional-goes-digital-Valerie-Bures-Boenstroem-web.jpg`
- **Link:** `https://www.pixformance.com/wp-content/uploads/2020/03/ShapeUP_Business_2020_Pixformance.pdf`
- **CTA:** "to the article"

### Article 03 — Zeitschrift für Physiotherapeuten (2020)
- **H2:** Zeitschrift für Physiotherapeuten
- **Text:** The journal for physiotherapists shows the advantages of using the Pixformance Concept in physiotherapy. In addition, the new Pixformance Station 2.0 is presented in the section "Brand new products".
- **Year:** 2020
- **Image:** `https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Zeitschrift-fuer-Physiotherapeuten-PT-Brandneue-Produkte-Effektive-Entlastung-web.jpg`
- **Link:** `https://www.pixformance.com/wp-content/uploads/2020/03/pt3_2020_Brandneue-Produkte_Pixformance.pdf`
- **CTA:** "to the article"

### Article 04 — Fitness Management (2020)
- **H2:** FITNESS MANAGEMENT
- **Text:** New fitness equipment for the production of the current Big Brother season: Pixformance Sports GmbH from Berlin has placed a digital functional training device in the fitness room of the futuristic Glass house.
- **Year:** 2020
- **Image:** `https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Ausstatter-Big-Brother-SAT1-Fitnessspiegel-Reality-TV-Fitness-Management-web.jpg`
- **Link:** `https://www.fitnessmanagement.de/events/big-brother-fitnessstudio/` (external URL)
- **CTA:** "To the article"

### Article 05 — Fitness & Gesundheit (2019)
- **H2:** Fitness & Gesundheit
- **Text:** The fitness expert and head of the office of the German Industry Association, Prof. Dr. Niels Nagel, spoke with our CEO Valerie Bures-Bönström about the opportunities of real-time digital support in the health and fitness industry. F&G, issue 07/2019.
- **Year:** 2019
- **Image:** `https://www.pixformance.com/wp-content/uploads/2019/12/Veröffentlichung-Fitness-und-Gesundheit-Dez-2019.jpg`
- **Link:** `https://www.pixformance.com/wp-content/uploads/2020/01/Fitness_und_Gesundheit_Ausgabe_7_19_Pixformance_DIFG.pdf`
- **CTA:** "To the article"

### Article 06 — Bodylife (2018)
- **H2:** Bodylife
- **Text:** Pixformance presented at FIBO 2018 with the Pixformance Box their new concept in minimalist and high-quality industrial design, with which they combine ambience, lifestyle and fitness. The new concept is a reaction to the growing demands of fitness enthusiasts, who increasingly attach importance to good care.
- **Year:** 2018
- **Image:** (lazy-loaded — check DE page)
- **Link:** `https://www.pixformance.com/wp-content/uploads/2018/07/bodylife.pdf`
- **CTA:** "To the article"

### Article 07 — Fitness News (2018)
- **H2:** Fitness News
- **Text:** The international fitness magazine reports about Pixformance Sports GmbH and the interactive, digital training with the Pixformance Station.
- **Year:** 2018
- **Image:** (lazy-loaded — check DE page)
- **Link:** `https://www.pixformance.com/wp-content/uploads/2018/07/Fitnessnews.pdf`
- **CTA:** "To the article"

### Article 08 — Fitness Management International (2018)
- **H2:** Fitness Management International
- **Text:** In an interview with one of the leading specialist publishers in the fitness and health industry, Managing Director Valerie Bures-Bönström reports on Pixformance's successful concept.
- **Year:** 2018
- **Image:** (lazy-loaded — check DE page)
- **Link:** `https://www.pixformance.com/wp-content/uploads/2018/10/2018_fMi_138_0418_erfolgskonzepte2.pdf`
- **CTA:** "To the article"

### Article 09 — Medical Park Quality Report (2017/2018)
- **H2:** Medical Park quality report
- **Text:** In the quality report of the rehabilitation clinic Pixformance is presented in the article "Therapy 4.0: Always one step further" as an innovative solution to make the rehabilitation phases even more effective.
- **Year:** 2017/2018
- **Image:** (lazy-loaded — check DE page)
- **Link:** `https://www.pixformance.com/wp-content/uploads/2019/02/Pixformance-Partner-Medical-Park-quality-report.pdf`
- **CTA:** "To the article"

### Article 10 — Zeitschrift für Physiotherapeuten (2015)
- **H2:** Zeitschrift für Physiotherapeuten
- **Text:** The journal for physiotherapists introduces the interactive, functional feedback training at the Pixformance Stations.
- **Year:** 2015
- **Image:** (lazy-loaded — check DE page)
- **Link:** `https://www.pixformance.com/wp-content/uploads/2018/07/Sutor.pdf`
- **CTA:** "To the article"

### Article 11 — MBG Berlin Brandenburg (2015)
- **H2:** MBG Berlin Brandenburg
- **Text:** Even easier and more effective: five-star training with the Smart Trainer from Pixformance. A digital training device in the look of an oversized Smartphone.
- **Year:** 2015
- **Image:** (lazy-loaded — check DE page)
- **Link:** `https://www.pixformance.com/wp-content/uploads/2018/10/2015_MBG-Newsletter.pdf`
- **CTA:** "To the article"

### Article 12 — Berliner Zeitung (2015)
- **H2:** Berliner Zeitung
- **Text:** The magazine from Berlin presents the digital training device: The Pixformance Station as Fitphone!
- **Year:** 2015
- **Image:** (lazy-loaded — check DE page)
- **Link:** `https://www.pixformance.com/wp-content/uploads/2018/10/2015_Berliner-Zeitung.pdf`
- **CTA:** "To the article"

### Article 13 — News & Know How (2015)
- **H2:** News & Know How
- **Text:** It's an increasingly digital world — particularly with respect to fitness: Pixformance provides digital fitness coaching.
- **Year:** 2015
- **Image:** `https://www.pixformance.com/wp-content/uploads/2019/02/Pixformance-Newsroom-know-how.jpg`
- **Link:** `https://www.pixformance.com/wp-content/uploads/2019/02/2015_Newsandknowhow_EN.pdf`
- **CTA:** "to the article"

### Article 14 — Functional Fitness News (2014)
- **H2:** Functional fitness News
- **Text:** Proxomed presented several innovations at MEDICA 2014. Among them was the digital training device from Pixformance with integrated interactive feedback.
- **Year:** 2014
- **Image:** `https://www.pixformance.com/wp-content/uploads/2019/02/Pixformance-Newsroom-Proxomed.jpg`
- **Link:** `https://www.pixformance.com/wp-content/uploads/2018/10/2014_-Fitness-News.pdf`
- **CTA:** "to the article"

---

## Footer

*(Standard footer — same as homepage. Use the shared footer component.)*

---

## All Image URLs (for download)

```
https://www.pixformance.com/wp-content/uploads/2020/03/Pressemappe-EN-Pixformance-web.jpg
https://www.pixformance.com/wp-content/uploads/2021/04/Pixformance-FORTEe-Stark-gegen-Kinderkrebs-Strong-against-childhood-cancer-Projektpartner-Digitalisierung-Telemedizin-Teletherapie-Ehealth.jpg
https://www.pixformance.com/wp-content/uploads/2020/03/Shape-UP-Business-Pixformance-Functional-goes-digital-Valerie-Bures-Boenstroem-web.jpg
https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Zeitschrift-fuer-Physiotherapeuten-PT-Brandneue-Produkte-Effektive-Entlastung-web.jpg
https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Ausstatter-Big-Brother-SAT1-Fitnessspiegel-Reality-TV-Fitness-Management-web.jpg
https://www.pixformance.com/wp-content/uploads/2019/12/Veröffentlichung-Fitness-und-Gesundheit-Dez-2019.jpg
https://www.pixformance.com/wp-content/uploads/2019/02/Pixformance-Newsroom-know-how.jpg
https://www.pixformance.com/wp-content/uploads/2019/02/Pixformance-Newsroom-Proxomed.jpg
```

## All PDF URLs (for download/linking)

```
https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Presskit-EN-Functional-Training-Fitness-Physio-Clinic-Corporate-Fitness-1.pdf
https://www.pixformance.com/wp-content/uploads/2021/04/PM-07042021-Pixformance-FORTEe-Strong-against-childhood-cancer-EN.pdf
https://www.pixformance.com/wp-content/uploads/2020/03/ShapeUP_Business_2020_Pixformance.pdf
https://www.pixformance.com/wp-content/uploads/2020/03/pt3_2020_Brandneue-Produkte_Pixformance.pdf
https://www.pixformance.com/wp-content/uploads/2020/01/Fitness_und_Gesundheit_Ausgabe_7_19_Pixformance_DIFG.pdf
https://www.pixformance.com/wp-content/uploads/2018/07/bodylife.pdf
https://www.pixformance.com/wp-content/uploads/2018/07/Fitnessnews.pdf
https://www.pixformance.com/wp-content/uploads/2018/10/2018_fMi_138_0418_erfolgskonzepte2.pdf
https://www.pixformance.com/wp-content/uploads/2019/02/Pixformance-Partner-Medical-Park-quality-report.pdf
https://www.pixformance.com/wp-content/uploads/2018/07/Sutor.pdf
https://www.pixformance.com/wp-content/uploads/2018/10/2015_MBG-Newsletter.pdf
https://www.pixformance.com/wp-content/uploads/2018/10/2015_Berliner-Zeitung.pdf
https://www.pixformance.com/wp-content/uploads/2019/02/2015_Newsandknowhow_EN.pdf
https://www.pixformance.com/wp-content/uploads/2018/10/2014_-Fitness-News.pdf
```

## ZIP Download URLs

```
https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Logos.zip
https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Pictures-Copyright-to-use-for-all-images-Pixformance-Sports-GmbH.zip
```

---

## Important Notes for Claude Code

1. **Numbered alternating layout** (01–14) — odd numbers have image on the right, even numbers have image on the left. Check DE page for exact pattern.
2. **The H1 "Über uns" is likely a bug** — the German text leaked into the EN page. Use the DE page as reference to determine the correct English title.
3. **Articles 06–12 have lazy-loaded images** that didn't render. Check the DE page for those image URLs.
4. **Article 04 links to an external URL** (fitnessmanagement.de) instead of a PDF. All others link to self-hosted PDFs.
5. **Press Download section** includes downloadable ZIP files (logos + pictures) — these should be self-hosted or linked.
6. **14 PDFs + 2 ZIPs** need to be available — either self-hosted in the Astro project's public folder or linked to the original WordPress URLs.
7. **The press download section is duplicated** in the HTML (mobile/desktop). Check DE page for responsive handling.
8. **Timeline spans 2014–2021** — articles are in reverse chronological order.
