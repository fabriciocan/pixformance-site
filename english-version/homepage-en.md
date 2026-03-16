# Pixformance Homepage — English Version

## Page Metadata
- **Route/Slug:** `/en/` (must keep this slug for SEO)
- **Title tag:** `Digital Fitness Devices From Pixformance`
- **Source URL (reference):** https://www.pixformance.com/en/
- **Language:** EN
- **Equivalent DE page:** `/` (homepage alemã — use como referência de layout/design)

---

## Instructions for Claude Code

1. **Find the German homepage** in the Astro project (likely `src/pages/index.astro` or `src/pages/de/index.astro`) and use it as the layout/design reference.
2. **Create the English homepage** at `src/pages/en/index.astro` (or equivalent routing structure already in the project).
3. **Keep the same design, components, and layout** as the DE version — only replace the content with the English text below.
4. **Download all images** listed in the "Images" section and place them in the project's assets/images folder if not already present.
5. **Maintain all CTAs, links, and navigation structure** — update hrefs to use `/en/` prefix.
6. **Keep SEO-friendly:** preserve heading hierarchy (H1, H2, H3), alt texts, and meta tags.

---

## Navigation / Header

- **Logo:** `https://www.pixformance.com/wp-content/uploads/2018/10/logo-pixformance.png`
- **CTA Button:** "Apply For Trial" → `/en/apply-for-trial/`
- **Customer Login:** https://new.my.pixformance.com/

### Menu Items:
| Label | URL |
|---|---|
| Concept | `/en/products-2/` |
| Solutions (dropdown) | — |
| → Physical Therapy | `/en/physical-therapy/` |
| → Fitness | `/en/fitness/` |
| → Corporate Fitness | `/en/corporate-fitness/` |
| Company (dropdown) | — |
| → About us | `/en/about-us/` |
| → Success Stories | `/en/success-stories/` |
| → News | `/en/functional-training-and-fitness-news/` |
| → Blog | `/en/blog-articles/` |
| → FAQ | `/en/faq-training-with-pixformance-station/` |
| → Jobs | `/en/jobs/` |
| Contact | `/en/contact/` |

### Language Switcher:
- English (active) → `/en/`
- German → `/`
- Japanese → `/jp/`

---

## Section 1: Hero

### Background:
- **Video (autoplay, muted, loop):** `https://www.pixformance.com/wp-content/uploads/2021/04/HEADER_PHYSIO_Gruppentraining-Pixformance-Fitness-Physiotherapie-Digitalisierung-Funktionelles-Training-Reha-Pandemie-1.mp4`

### Overlay CTA (popup/modal trigger):
- **Image button:** `https://www.pixformance.com/wp-content/uploads/2023/08/image-25.png`
- **Link:** `https://app.monstercampaigns.com/c/ybvlequwgaulmccl90jr/?max-width=650px`

---

## Section 2: Partner Logos Bar

Display a horizontal scrolling or static logo bar with these partners:

| Partner | Logo URL |
|---|---|
| SFR Physical Therapy | `https://www.pixformance.com/wp-content/uploads/2024/09/SFR-logo-pixformance.png` |
| ICAA | `https://www.pixformance.com/wp-content/uploads/2024/09/ICAA-Pixformance.png` |
| FSLA | `https://www.pixformance.com/wp-content/uploads/2024/09/FSLA-logo-pixformance.png` |
| GSLA | `https://www.pixformance.com/wp-content/uploads/2024/09/gsla-logo-pixformance.png` |
| Omnia | `https://www.pixformance.com/wp-content/uploads/2024/06/Omnia-Lifestyle-Ltd.png` |
| Forte | `https://www.pixformance.com/wp-content/uploads/2021/03/fortee-eu-poject-pixformance-partner.png` |
| Oxford Brookes University | `https://www.pixformance.com/wp-content/uploads/2021/02/pixformance-logo-oxford-brookes-university.png` |
| Beanieproof | `https://www.pixformance.com/wp-content/uploads/2024/10/beanieproof.png` |

---

## Section 3: Main Value Proposition

### H1:
**Digital fitness devices from Pixformance**

### H2 (subtitle):
**More Turnover. More relief.**

### Body text:
Our mission is to empower medical health and fitness professionals to unlock their economic and professional potential through the best technology for digital motion analysis.

This is where our digital and fully connected sports and therapy solution comes in. A virtual personal trainer or virtual therapist, as well as a real-time correction on the screen, make training at the Pixformance Station particularly safe and effective. Training with our digital fitness device offers many advantages, both for you, your company and your employees as well as for the user.

### CTA:
- **Text:** "Learn more"
- **Link:** `/en/products-2/`

### Trial CTA (repeated):
- **Image:** `https://www.pixformance.com/wp-content/uploads/2023/08/image-25.png`
- **Link:** `https://app.monstercampaigns.com/c/ybvlequwgaulmccl90jr/?max-width=650px`

---

## Section 4: Stats / Counters

Three animated counters (check DE page for the exact numbers/animation):

| Stat | Label |
|---|---|
| [number] | Exercisers / Year |
| [number] | Workouts / Year |
| [number] | Functional Exercises |

> **Note to Claude Code:** The exact numbers may be loaded dynamically or from the DE page. Check the German homepage component for the counter values and replicate them here.

---

## Section 5: Satisfied Customers (Testimonials Carousel)

### Section Title:
**Satisfied customers**

### Testimonials:

#### 1. Gabriele Buchstein
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/07/Gabriele-Buchstein-Leitung-Physiotherapie-Sauerlandklinik-Hachen.png`
- **Quote:** "The patients are enthusiastic and very motivated, which admittedly is not often the case. Of course, we as therapists also benefit from this, as the patients perform their exercises better and more purposefully. In addition, we save time because, after only 30 minutes of instruction, the patients can train independently under supervision."
- **Name:** Gabriele Buchstein, Head Physiotherapist
- **Company:** Sauerlandklinik Hachen, Germany

#### 2. Christoph Schneider
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/07/Christoph-Schneider-Therapieleiter-Niederrheinklinik-Reha-Klinik-Korschenbroich-Pixformance.png`
- **Quote:** "In search of a way to let patients become active on their own, we decided on Pixformance. The individual training offer is ideal here, as group therapy, for example, is otherwise too easy for some and too difficult for others. So everyone gets an entirely individual workout."
- **Name:** Christoph Schneider, Therapy Manager
- **Company:** Niederrhein Klinik | Rehab Clinic Korschenbroich, Germany

#### 3. Heike Schaible
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/10/Heike-Schaible-round.png`
- **Quote:** "I want to establish a second self-pay area with Pixformance and thus, above all, accommodate my employees and offer them more accessible and more varied work."
- **Name:** Heike Schaible, Owner
- **Company:** Physiotherapy Practice "Raum für Gesundheit", Germany

#### 4. Axel-André Richter
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/10/Axel-Andre-Richter-und-Lopez-Pixformance.png`
- **Quote:** "The great thing is that I can design the new training completely individually for each of our patients. From competitive athletes to grannies, there's something for everyone. And if a therapist is ever out, it's easy to offer that as a backup and compensate with Pixformance, so we don't have to cancel the therapy session."
- **Name:** Axel-André Richter, Owner
- **Company:** Health Practice Richter & Lopez, Germany

#### 5. Christoph Oratsch
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/07/Christoph-Oratsch-AUVA-Klagenfurt-1.png`
- **Quote:** "From the patient side, there is a great deal of interest and curiosity about the Pixformance stations. Many even come of their own accord and want a training program. We recently provided tele-supported support for a young lady after shoulder surgery using the Pixformance app. She then comes to the clinic once a week and does the rest of the therapy at home."
- **Name:** Christoph Oratsch, Head of Therapy
- **Company:** AUVA Hospital, Klagenfurt, Austria

#### 6. Swetlana Zimmermann
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/10/Swetlana-Zimmermann-Schlossphysio-Pixformance-300x300.png`
- **Quote:** "We wanted a holistic training device covering as many muscle groups and movement patterns as possible in sports therapy. Above all, the flexibility you get with the digital training concept was a crucial point for us."
- **Name:** Swetlana Zimmermann & Claas Bickeböller, Physiotherapist & Owner
- **Company:** Schlossphysio Winterthur, Switzerland

#### 7. Gunter Hölig
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Gunter-Hoelig.png`
- **Quote:** "We are pleased to see that our patients are delighted and persistent in their exercise training. The active component of our digital Pixformance therapy equipment certainly plays a part in this."
- **Name:** Gunter Hölig, Therapy Manager
- **Company:** Medical Park Bad Rodach, Germany

#### 8. Erwin Kuglmeier
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/10/Erwin-Kuglmeier-Fitness-California-Pixformance-300x300.png`
- **Quote:** "My members can be individually guided and motivated for training with Pixformance. I especially like that the handling is effortless, and the station takes up little space!"
- **Name:** Erwin Kuglmeier, Owner
- **Company:** Fitness Club California, Germany

#### 9. Kim Essink
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Kim-Essink.png`
- **Quote:** "We made a conscious decision to go with Pixformance because we recognized the opportunity, and we're confident that our investment would pay off quickly."
- **Name:** Kim Essink, Owner
- **Company:** Fitness Club Essink in Eindhoven, Netherlands

#### 10. Volker Sutor
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Volker-Sutor-Testimonial.png`
- **Quote:** "Targeted health training with the virtual trainer increases the efficiency of the treatment and creates more time for the actual care of my patients."
- **Name:** Volker Sutor, Owner
- **Company:** Physiotherapy Centers "Reha Rondell", Germany

---

## Section 6: Press / Media Logos

Display logos of media outlets that have featured Pixformance:

| Media Outlet | Logo URL |
|---|---|
| Focus Gesundheit | `https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Focus-Gesundheit.png` |
| Zeitschrift für Physiotherapeuten | `https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-PT-Zeitschrift-fuer-Physiotherapeuten.png` |
| Fitness Management | `https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Fitness-Management-fmi.png` |
| BILANZ – Das deutsche Wirtschaftsmagazin | `https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Bilanz-das-deutsche-Wirtschaftsmagazin.png` |
| DIFG | `https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-DIFG-Deutscher-Industrieverband-fuer-Fitness-und-Gesundheit-e-V.png` |
| Leistungslust | `https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-LL-Leistungslust-Fachzeitschrift-fuer-Sport-und-Fitnesstrainer.png` |
| Shape Up Business | `https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Shape-Up-Business-Das-Fitnessmagazin-fuer-Studioleiter.png` |
| Body Life | `https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Body-Life.png` |
| Märkische Allgemeine | `https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Maerkische-Allgemeine.png` |

---

## Section 7: Digital Fitness Devices — Real-Time Correction

### H2:
**Digital fitness devices with real-time correction**

### Feature Image (desktop):
`https://www.pixformance.com/wp-content/uploads/2022/02/Live-Feedback-EN-2022.png`

### Feature Image (mobile):
`https://www.pixformance.com/wp-content/uploads/2022/02/Live-Feedback-mobil-EN-2022.png`

### Feature Bullets (with checkmarks ✓):
- ✓ The Integrated 2D Full-HD camera records 25 joint points
- ✓ Virtual personal trainer shows the exercises on-screen
- ✓ Textual and visual feedback is shown on-screen
- ✓ The patented station provides personalized feedback during and after exercises

---

## Section 8: Individual Solutions

### H2:
**INDIVIDUAL SOLUTIONS**

### Body text:
As a pioneer in designing digital business transformations in the fitness and health industry, we offer you individual solutions with our digital fitness devices to make your business more efficient and successful.

### CTA Cards/Buttons (3 columns):
| Label | Link |
|---|---|
| Physical Therapy | `/en/physical-therapy/` |
| FITNESS | `/en/fitness/` |
| CORPORATE | `/en/corporate-fitness/` |

---

## Footer

### Contact Info:
- **Company:** Pixformance USA Inc.
- **Address:** East Windsor, NJ 08520
- **Phone:** +1 888 – 420-4572
- **Email:** info@pixformance.com

### Footer Links:
- Imprint → `/en/imprint/`
- Privacy Policy → `/en/privacy-policy/`

### Recent Blogposts:
1. [Increase Physical Therapy Sales: What Opportunities Does The Self-Pay Sector Have To Offer Now?](/en/increase-physical-therapy-sales-what-opportunities-does-the-self-pay-sector-have-to-offer-now/)
2. [Digitization: An Opportunity For The Healthcare Industry](/en/digitization-an-opportunity-for-the-healthcare-industry/)
3. [Three Lessons Fitness Clubs Can Learn From Weight Watchers' New Business Strategy](/en/three-lessons-fitness-clubs-can-learn-from-weight-watchers/)
4. [Why The "Quantified Self" Movement Is A Business Opportunity](/en/why-the-quantified-self-is-a-business-opportunity/)
5. [Three Strategies On Integrating New Technologies Into Your Functional Fitness Club](/en/three-strategies-on-integrating-new-technologies-into-your-functional-fitness-club/)

### Social Media:
| Platform | URL | Icon |
|---|---|---|
| Facebook | https://www.facebook.com/pixformancesports | `https://www.pixformance.com/wp-content/uploads/2019/01/if_facebook_online_social_media_734399-2.png` |
| Instagram | https://www.instagram.com/pixformance/ | `https://www.pixformance.com/wp-content/uploads/2019/01/if_instagram_online_social_media_734394-2.png` |
| LinkedIn | https://www.linkedin.com/company/2980658/ | `https://www.pixformance.com/wp-content/uploads/2019/01/if_online_social_media_linked_in_734383-2.png` |
| Xing | https://www.xing.com/pages/pixformancesportsgmbh | `https://www.pixformance.com/wp-content/uploads/2019/01/if_xing_social_media_logo_1221594.png` |
| YouTube | https://www.youtube.com/channel/UCw-sWITx6ElTie7ep57Mz2w | `https://www.pixformance.com/wp-content/uploads/2019/01/if_youtube_online_social_media_734361-2.png` |

### Footer Note:
- "Ausbildungsbetrieb der DHfPG" (keep as-is, it's a German certification badge)
- © 2025 Pixformance Sports GmbH

---

## All Image URLs (for download)

```
https://www.pixformance.com/wp-content/uploads/2018/10/logo-pixformance.png
https://www.pixformance.com/wp-content/uploads/2023/08/image-25.png
https://www.pixformance.com/wp-content/uploads/2024/09/SFR-logo-pixformance.png
https://www.pixformance.com/wp-content/uploads/2024/09/ICAA-Pixformance.png
https://www.pixformance.com/wp-content/uploads/2024/09/FSLA-logo-pixformance.png
https://www.pixformance.com/wp-content/uploads/2024/09/gsla-logo-pixformance.png
https://www.pixformance.com/wp-content/uploads/2024/06/Omnia-Lifestyle-Ltd.png
https://www.pixformance.com/wp-content/uploads/2021/03/fortee-eu-poject-pixformance-partner.png
https://www.pixformance.com/wp-content/uploads/2021/02/pixformance-logo-oxford-brookes-university.png
https://www.pixformance.com/wp-content/uploads/2024/10/beanieproof.png
https://www.pixformance.com/wp-content/uploads/2021/07/Gabriele-Buchstein-Leitung-Physiotherapie-Sauerlandklinik-Hachen.png
https://www.pixformance.com/wp-content/uploads/2021/07/Christoph-Schneider-Therapieleiter-Niederrheinklinik-Reha-Klinik-Korschenbroich-Pixformance.png
https://www.pixformance.com/wp-content/uploads/2021/10/Heike-Schaible-round.png
https://www.pixformance.com/wp-content/uploads/2021/10/Axel-Andre-Richter-und-Lopez-Pixformance.png
https://www.pixformance.com/wp-content/uploads/2021/07/Christoph-Oratsch-AUVA-Klagenfurt-1.png
https://www.pixformance.com/wp-content/uploads/2021/10/Swetlana-Zimmermann-Schlossphysio-Pixformance-300x300.png
https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Gunter-Hoelig.png
https://www.pixformance.com/wp-content/uploads/2021/10/Erwin-Kuglmeier-Fitness-California-Pixformance-300x300.png
https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Kim-Essink.png
https://www.pixformance.com/wp-content/uploads/2020/03/Pixformance-Volker-Sutor-Testimonial.png
https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Focus-Gesundheit.png
https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-PT-Zeitschrift-fuer-Physiotherapeuten.png
https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Fitness-Management-fmi.png
https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Bilanz-das-deutsche-Wirtschaftsmagazin.png
https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-DIFG-Deutscher-Industrieverband-fuer-Fitness-und-Gesundheit-e-V.png
https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-LL-Leistungslust-Fachzeitschrift-fuer-Sport-und-Fitnesstrainer.png
https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Shape-Up-Business-Das-Fitnessmagazin-fuer-Studioleiter.png
https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Body-Life.png
https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Maerkische-Allgemeine.png
https://www.pixformance.com/wp-content/uploads/2022/02/Live-Feedback-EN-2022.png
https://www.pixformance.com/wp-content/uploads/2022/02/Live-Feedback-mobil-EN-2022.png
https://www.pixformance.com/wp-content/uploads/2019/01/if_facebook_online_social_media_734399-2.png
https://www.pixformance.com/wp-content/uploads/2019/01/if_instagram_online_social_media_734394-2.png
https://www.pixformance.com/wp-content/uploads/2019/01/if_online_social_media_linked_in_734383-2.png
https://www.pixformance.com/wp-content/uploads/2019/01/if_xing_social_media_logo_1221594.png
https://www.pixformance.com/wp-content/uploads/2019/01/if_youtube_online_social_media_734361-2.png
```

---

## Video URL (for download)

```
https://www.pixformance.com/wp-content/uploads/2021/04/HEADER_PHYSIO_Gruppentraining-Pixformance-Fitness-Physiotherapie-Digitalisierung-Funktionelles-Training-Reha-Pandemie-1.mp4
```
