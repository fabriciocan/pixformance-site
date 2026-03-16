# Pixformance — About Us (EN)

## Page Metadata
- **Route/Slug:** `/en/about-us/` (must keep this slug for SEO)
- **Title tag:** `Relentless Innovative Strength – And That Already Since 2012`
- **Source URL (reference):** https://www.pixformance.com/en/about-us/
- **Language:** EN
- **Equivalent DE page:** `/ueber-uns/` — use as layout/design reference
- **Page type:** Standard page (full nav header + full footer) — Company subpage

---

## Instructions for Claude Code

1. **Find the German `/ueber-uns/` page** in the Astro project and replicate its layout.
2. **This is a relatively simple page** — company intro text + team grid. No carousels, no accordions, no video.
3. **Two photos were lazy-loaded** and didn't render (Fran Hackett, Kateryna Misarenko). Check DE page for those images.
4. **Team member photos have consistent dimensions** (517×667 or 259×334). Maintain aspect ratio.

---

## Section 1: Company Introduction

### H2:
**Established market know-how meets start-up dynamics**

### Body text (paragraph 1 — bold intro):
**Pixformance Sports GmbH is still a 100% owner-managed company characterized by short coördination paths, high product quality, and tireless innovation.**

### Body text (paragraph 2):
Our founder and CEO is Valerie Bures-Bönström. As a mother of three and a computer scientist, she has been one of Germany's most successful entrepreneurs for years. As recently as 2021, she was named one of the 50 most influential women in the German tech scene by Handelsblatt. In 2012, she launched the Pixformance Station, the first digital device for functional training with motion analysis. **Today, our digital training station is already successfully in use in over 600 fitness, rehab, and health facilities and has over 450,000 exercisers worldwide.**

### Body text (paragraph 3):
Together with Stefanie Graf, Valerie is also co-founder of the franchise company Mrs.Sporty and founder of the start-up behind the VAHA brand, an interactive fitness solution for the home, which has already received an investment in the double-digit millions. Thus, Pixformance combines long-standing market expertise with lived start-up agility, distinguished by a tenacious drive for innovation, a team willing to take risks, shortened processes, and a truly personal customer service.

---

## Section 2: Our Team

### H2:
**OUR TEAM**

### Intro text:
Our success is based on years of experience as well as our innovative capacity. We rely on our fearless, passionate, and visionary management board consisting of developers, designers, consultants, marketers, and financial services experts.

### Team Grid:

#### 1. Valerie Bures-Bönström
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2018/12/Valerie_Bönström_CEO_Pixformance.jpg`
- **Role:** CEO

#### 2. Tobias Baader
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2018/12/Tobias-Baader-Head-Of-Business-Development-Pixformance.jpg`
- **Role:** COO

#### 3. Davi Wazlawick
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2022/04/Davi-Wazlawick-Pixformance-3.jpg`
- **Role:** Director of Growth

#### 4. Fran Hackett
- **Photo:** (lazy-loaded — check DE page for image URL)
- **Role:** CEO & President USA

#### 5. Fabio Manes
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2023/05/Fabio-Manes-Pixformance-Sales-Director-DACH.jpg`
- **Role:** Sales Director DACH

#### 6. Patricia Olear
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2019/11/Patricia-Olear-Marketing-Manager-Pixformance-1.jpg`
- **Role:** Senior Marketing Manager

#### 7. Laura Alves
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/02/Laura-Alves-Pixformance.jpg`
- **Role:** Senior Manager Service & Support

#### 8. Sarah Zender
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2019/11/Sara-Zender-Finance-Manager-Pixformance.jpg`
- **Role:** Finance Manager

#### 9. Bita Mohammadi
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2019/11/Bita-Mohammadi-Software-Developer-Pixformance.jpg`
- **Role:** C++ Software Developer

#### 10. Kateryna Misarenko
- **Photo:** (lazy-loaded — check DE page for image URL)
- **Role:** Junior Marketing Manager

---

## Footer

*(Standard footer — same as homepage. Use the shared footer component.)*

---

## All Image URLs (for download)

```
https://www.pixformance.com/wp-content/uploads/2018/12/Valerie_Bönström_CEO_Pixformance.jpg
https://www.pixformance.com/wp-content/uploads/2018/12/Tobias-Baader-Head-Of-Business-Development-Pixformance.jpg
https://www.pixformance.com/wp-content/uploads/2022/04/Davi-Wazlawick-Pixformance-3.jpg
https://www.pixformance.com/wp-content/uploads/2023/05/Fabio-Manes-Pixformance-Sales-Director-DACH.jpg
https://www.pixformance.com/wp-content/uploads/2019/11/Patricia-Olear-Marketing-Manager-Pixformance-1.jpg
https://www.pixformance.com/wp-content/uploads/2021/02/Laura-Alves-Pixformance.jpg
https://www.pixformance.com/wp-content/uploads/2019/11/Sara-Zender-Finance-Manager-Pixformance.jpg
https://www.pixformance.com/wp-content/uploads/2019/11/Bita-Mohammadi-Software-Developer-Pixformance.jpg
```

---

## Important Notes for Claude Code

1. **Simple page structure** — just intro text + team photo grid. No complex components.
2. **Two team member photos missing** (Fran Hackett, Kateryna Misarenko) — lazy-loaded. Check the DE page `/ueber-uns/` source or WordPress uploads folder.
3. **Team grid layout** — check DE page for column count (likely 3 or 4 columns on desktop, 2 on tablet, 1 on mobile).
4. **Photo dimensions vary** — some are 517×667, others 259×334. The DE page likely normalizes these with CSS. Maintain the same approach.
5. **Bold text in paragraphs** — the intro sentence and the "Today, our digital training station..." sentence are bold. Preserve this formatting.
6. **Sarah Zender** is the same Sarah from the Pixformance invoicing correspondence — this confirms she's on the team.
7. **Davi Wazlawick** is Brazilian (Director of Growth) — interesting for Fabrício's context but no action needed.
