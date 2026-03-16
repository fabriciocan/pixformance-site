# Pixformance — FAQ (EN)

## Page Metadata
- **Route/Slug:** `/en/faq-training-with-pixformance-station/` (must keep this slug for SEO)
- **Title tag:** `FAQ – Frequently Asked Questions About Pixformance`
- **Source URL (reference):** https://www.pixformance.com/en/faq-training-with-pixformance-station/
- **Language:** EN
- **Equivalent DE page:** `/training-mit-pixformance/` — use as layout/design reference
- **Page type:** Standard page (full nav header + full footer) — Company subpage

---

## Instructions for Claude Code

1. **This is an FAQ/accordion page.** Find the German `/training-mit-pixformance/` page in the Astro project and replicate its layout.
2. **The FAQ items are likely implemented as an accordion** (click to expand/collapse). Check DE page for the component.
3. **Two of the FAQ answers include diagrams/images** (dimensions and training distance). These were lazy-loaded — check DE page for the actual images.
4. **There are two H1 titles** in the HTML — one styled as the page header and one as a section header. Check DE page for the correct hierarchy.
5. **"Let us advise you" section at the bottom** is duplicated (mobile/desktop) and likely has a contact form or CTA. Check DE page.

---

## Section 1: Page Header

### H1 (main):
**FAQ — Functional training with the Pixformance station**

### Subtitle:
What do I have to consider when acquiring a Pixformance Station?

### H1 (section — may be H2 in actual implementation):
**Functional training with Pixformance**

### Subtitle (repeated):
What do I have to consider when acquiring a Pixformance Station?

> **Note:** The two H1s and repeated subtitles suggest mobile/desktop duplication. Check DE page for correct structure.

---

## Section 2: FAQ Items (Accordion)

### Q1: Is the Pixformance Station suitable for my institution?
**Answer:**
With more than 450,000 trainees every year, Pixformance is already used in functional fitness clubs, physiotherapy practices, and rehabilitation clinics.

We design the right health program for your facility according to your wishes and requirements – from the initial planning of the rooms, to the installation of the necessary equipment, and the maintaining of optimal training control.

Your personal consultant will accompany you on your journey to success and will make Pixformance the perfect functional fitness solution for you.

---

### Q2: Was the Pixformance Station designed to replace real life trainers?
**Answer:**
Pixformance is not competing with personal trainers or therapists. Instead, it provides complementary support for personal trainers and therapists. It offers an efficient and intelligent way to train and allows you to offer optimal member care.

Our virtual trainer, with its live feedback, allows the trainees to train independently, without human supervision. This allows one personal trainer to train several people at the same time. Nevertheless, a virtual trainer cannot replace the personal care and attention of a human trainer.

---

### Q3: What are the dimensions of a Pixformance Station?
**Answer:**
The dimensions are 128,5 cm x 76 cm x 50,0 cm

**Diagram Image:**
`https://www.pixformance.com/wp-content/uploads/2020/03/masse-pixformance-station-functional-training-fitness-physio-training-digital-ehealth-300x241.png`
- **Alt:** "The Pixformance Station 2.0 is 76 cm wide, 50 cm deep and 128.5 cm high."

---

### Q4: How much space do I need for training on a Pixformance Station?
**Answer:**
The distance to the device is approx. **1.60 m to 2.30 m** from the user and **1.0 m to 1.5 m** to each side.

**Diagram Image:**
`https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Station-2-0-Abmessungen-dimension-functional-training-fitness-physio-training-digital-ehealth-300x300.png`
- **Alt:** "The distance from the Pixformance Station 2.0 should be 1.60 - 2.30 m. Additionally, 1.0 to 1.5 m space should be available on each side."

Not enough space in your institution? We can provide an individual solution tailored to your requirements.

---

### Q5: Does the Pixformance Station work with Wifi?
**Answer:**
The Pixformance Station itself cannot be connected to Wifi. A permanent connection from the station to the Internet via **LAN cable** is required. However – if you cannot connect the Pixformance Station directly to the LAN network, it is possible to establish an Internet connection using a Wifi repeater/mobile router with an integrated LAN socket to connect the station.

---

### Q6: What are the location conditions to use a Pixformance Station?
**Answer:**
The Station can only be operated indoors.

Your functional training surface should be leveled, non-vibrating, and non-reflecting.

In order for the camera to work optimally, avoid direct sunlight and frontal incidence of light on it.

---

### Q7: Is there hard and software support after acquiring a Pixformance Station?
**Answer:**
Should hardware problems occur (camera, sensor, computer or screen), we will provide you with the spare parts. Also in case of software problems, our support team is always there for you by telephone.

Automatic updates for the Pixformance Station, new workouts, and updates on the Pixformance online platform are all part of our service and are available to you free of charge.

---

## Section 3: Let Us Advise You

### H2:
**Let us advise you**

### Body text:
Sometimes it is easier to answer questions in person. We are looking forward to your message!

> **Note:** Duplicated (mobile/desktop). Check DE page — likely has a contact form or CTA button linking to `/en/contact/`.

---

## Footer

*(Standard footer — same as homepage. Use the shared footer component.)*

---

## All Image URLs (for download)

```
https://www.pixformance.com/wp-content/uploads/2020/03/masse-pixformance-station-functional-training-fitness-physio-training-digital-ehealth-300x241.png
https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Station-2-0-Abmessungen-dimension-functional-training-fitness-physio-training-digital-ehealth-300x300.png
```

---

## Important Notes for Claude Code

1. **FAQ accordion component** — the questions should be clickable to expand/collapse the answers. Check DE page for the specific accordion implementation.
2. **Two FAQ answers include dimension diagrams** (Q3 and Q4). These images were lazy-loaded — verify they render correctly and check DE page for full-resolution versions.
3. **Measurements are in metric (cm, m)** — the original EN page uses metric. For the US market, you may want to add imperial equivalents in parentheses, but keep the original metric values as primary since this is how the current EN site presents them.
4. **The "Let us advise you" section** is duplicated in the HTML. Check DE page for how the responsive variant is handled — likely has a form or CTA button.
5. **Simple page** — only 3 sections (header, FAQ accordion, CTA). Straightforward to implement.
6. **Good for SEO** — FAQ pages benefit from structured data (FAQ schema markup). Consider adding `FAQPage` JSON-LD schema if the DE version has it.
