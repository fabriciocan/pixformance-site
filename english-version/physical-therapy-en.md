# Pixformance — Physical Therapy (EN)

## Page Metadata
- **Route/Slug:** `/en/physical-therapy/` (must keep this slug for SEO)
- **Title tag:** `Physical Therapy and Orthopedic Rehab and Sports Medicine - Pixformance Sports GmbH`
- **Source URL (reference):** https://www.pixformance.com/en/physical-therapy/
- **Language:** EN
- **Equivalent DE page:** Check for `/physiotherapie/` or similar — use as layout/design reference
- **Page type:** Standard page (full nav header + full footer) — Solutions subpage

---

## Instructions for Claude Code

1. **This is the most content-rich page so far.** It has many sections: hero with video, partner logos, value prop, stats counters, feature walkthrough with GIF, testimonials carousel, benefit cards (two grids), references/case studies, research studies, service section with team members, and a FORTEe research project callout.
2. **Find the German equivalent** in the Astro project and replicate its layout.
3. **There is a sub-navigation tab bar** at the top (Physical Therapy / Fitness / Corporate Fitness) — this should be a shared component across all three Solutions pages.
4. **Sections are duplicated for mobile/desktop** — check DE page for responsive handling.
5. **Many images are lazy-loaded** and didn't render — noted where Claude Code should check DE page.

---

## Sub-Navigation Tabs (Solutions Switcher)

| Tab | Link | Active? |
|---|---|---|
| PHYSICAL THERAPY | `/en/physical-therapy/` | ✅ Active |
| FITNESS | `/en/fitness/` | |
| CORPORATE FITNESS | `/en/corporate-fitness/` | |

---

## Section 1: Hero

### Background Video (autoplay, muted, loop):
`https://www.pixformance.com/wp-content/uploads/2021/04/HEADER_PHYSIO_Gruppentraining-Pixformance-Physiotherapie-Digitalisierung-Selbstzahlerbereich-Aufbauen-Erweitern-Pandemie.mp4`

### Popup CTA:
- **Image:** `https://www.pixformance.com/wp-content/uploads/2023/08/image-25.png`
- **Link:** `https://app.monstercampaigns.com/c/ybvlequwgaulmccl90jr/?max-width=650px`

---

## Section 2: Partner/Client Logos Bar

| Client | Logo URL |
|---|---|
| Gesundheitsrondell | `https://www.pixformance.com/wp-content/uploads/2020/03/Logo-Gesundheitsrondell-Reharondell.png` |
| Medical Park | `https://www.pixformance.com/wp-content/uploads/2020/03/Logo-Medical-Park.png` |
| Niederrheinklinik | `https://www.pixformance.com/wp-content/uploads/2021/07/AK_logo_Niederrhein_Klinik.png` |
| Charité | `https://www.pixformance.com/wp-content/uploads/2020/03/Logo-Charite.png` |
| Klinikum Ludwigsburg | `https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Klinikum-Ludwigsburg-Im-Verbund-der-Regionalen-Kliniken-Holding-RKH.png` |
| Rehaklinik am Kurpark | `https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Rehaklinik-am-Kurpark-Bad-Kissingen.png` |
| Oxford Brookes University | `https://www.pixformance.com/wp-content/uploads/2021/02/pixformance-logo-oxford-brookes-university.png` |
| Mediclin | `https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Mediclin.png` |
| Sauerlandklinik Hachen | `https://www.pixformance.com/wp-content/uploads/2021/07/SKH_Logo_4c-scaled-1.jpg` |
| FORTEe | `https://www.pixformance.com/wp-content/uploads/2021/03/fortee-eu-poject-pixformance-partner.png` |
| AUVA | `https://www.pixformance.com/wp-content/uploads/2021/07/2560px-Logo_AUVA.svg.png` |

---

## Section 3: Main Value Proposition

### H1:
**Innovative, digital rehabilitation devices**

### H2 (subtitle):
**Increase Patient Throughput & Relieve Your Therapists**

### Body text (paragraph 1):
No technology in the world can replace therapists. However, digitalization in physiotherapy and rehabilitation effectively relieves therapists and provides patients with even more intensive care.

### Body text (paragraph 2):
Our mission here is to create an individual solution for therapists and their exceptional patients with the best technology for digital motion analysis. Pixformance relieves the burden of exercise instruction and thus accompanies patients on the road to recovery in a highly effective way.

### Medical Device Badge:
- **Image:** `https://www.pixformance.com/wp-content/uploads/2024/03/RX-Logo.png`
- **Alt:** "RX Medical Device Class 2"
- **Text:** Pixformance is classified as a Class 2 medical device in the USA.

### Body text (paragraph 3):
The Pixformance Station stands at the forefront of rehabilitation technology, specifically engineered to enhance the operational efficiency of therapists in delivering movement therapy. This innovative device enables the customization of therapy regimens to meet the individual health conditions and needs of patients, significantly diminishing the need for continuous supervision and facilitating an increase in patient throughput. Importantly, it introduces the capability for concurrent therapy sessions, allowing therapists to manage multiple patients simultaneously, thereby optimizing their time and resources.

### Body text (paragraph 4):
By leveraging the Pixformance Station, therapists can more effectively administer both individualized and group therapy sessions. This not only maximizes the therapeutic impact for patients but also improves the efficiency of care delivery, ensuring therapists can extend their expertise across a broader patient base without compromising the quality of care.

### CTA Button:
- **Text:** "Free Consultation"
- **Link:** `/en/contact/`

---

## Section 4: Stats / Counters

| Stat | Label |
|---|---|
| [number] | Exercisers / Year |
| [number] | Hospitals, Rehabilitation Centers, Practices & Fitness Studios |
| [number] | Functional Exercises |

> **Note:** Check DE page for exact counter values/animation.

---

## Section 5: Fully-Connected Rehabilitation Device

### H2:
**fully-connected rehabilitation device**

### Intro text:
The 360° Pixformance Concept is a fully-connected digital solution consisting of a station, an online platform and an app. Our participatory therapy concept accompanies patients digitally and safely through every movement.

### Feature GIF:
`https://www.pixformance.com/wp-content/uploads/2021/04/Pixformance-Live-Feedback-Digitales-Trainingsgeraet-Bewegungsanalyse-Korrektur-Physiotherapie-Training-mobil.gif`

### Feature 1: Good Practice Exercise Guide
**Text:** The exercise is demonstrated by a virtual therapist on-screen with optimal movement sequence. The patient sees himself on the screen while performing the exercise.

### Feature 2: Depth Sensor For Movement Analysis
**Text:** During the exercise, a camera with built-in depth sensor scans 25 joint points of the exerciser within seconds and compares them with the optimal motion sequence.

### Feature 3: Feedback In Real-Time
**Text:** The patient receives individualized feedback that covers individual aspects of movement execution. The feedback is highlighted visually and textually in the patient video in real-time.

> **Note:** There are additional images in this section that were lazy-loaded (empty `![]()` tags). Check the DE page for the full set of images — likely step-by-step screenshots or diagrams.

---

## Section 6: Success Stories

### H2:
**Success Stories**

### Featured Story Image:
`https://www.pixformance.com/wp-content/uploads/2021/07/Pixformance-Sauerland-Klinik-Hachen-Telerehabilitation-Portrait-Gabriele-Buchstein.jpg`

### Featured Story Text:
**Gabriele Buchstein**, Head Physiotherapist, Sauerlandklinik Hachen, Germany

With over 450,000 exercisers worldwide, the Pixformance training and therapy concept can already be found in Germany's top rehabilitation clinics, physiotherapy practices, and fitness studios. Read our success stories to discover how and why Ms. Buchstein from the "Sauerland Special Clinic for MS" and many other customers have integrated the digital movement therapy from Pixformance.

### CTA:
- **Text:** "All Success Stories"
- **Link:** `/en/success-stories/`

### Testimonials Carousel:

#### 1. Gabriele Buchstein
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/07/Gabriele-Buchstein-Leitung-Physiotherapie-Sauerlandklinik-Hachen.png`
- **Quote:** "The patients are enthusiastic and very motivated, which admittedly is not often the case. Of course, we as therapists also benefit from this, as the patients perform their exercises better and more purposefully as a result. In addition, we save time, because after only 30 minutes of instruction, the patients can exercise independently under supervision."
- **Name:** Gabriele Buchstein, Head Physiotherapist
- **Company:** Sauerlandklinik Hachen | Neurological Special Clinic for Multiple Sclerosis, Germany

#### 2. Christoph Schneider
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/07/Christoph-Schneider-Therapieleiter-Niederrheinklinik-Reha-Klinik-Korschenbroich-Pixformance.png`
- **Quote:** "In search of a way to let patients become active on their own, we decided on Pixformance. The individual training offer is ideal here, as group therapy, for example, is otherwise too easy for some and too difficult for other patients. So everyone gets a completely individual workout."
- **Name:** Christoph Schneider, Therapy Director
- **Company:** Niederrhein-Klinik | Rehabilitation Clinic Korschenbroich, Germany

#### 3. Christoph Oratsch
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/07/Christoph-Oratsch-AUVA-Klagenfurt-1.png`
- **Quote:** "From the patient side, there is a great deal of interest and curiosity about the Pixformance stations. Many even approach us by themselves and want a training program. We recently provided tele-supported support for a young lady after shoulder surgery using the Pixformance app. She visits our clinic once a week – the rest of the therapy she does at home. It's a really great option for patients who aren't capable of moving around too much."
- **Name:** Christoph Oratsch, Therapy Director
- **Company:** AUVA Accident Hospital, Klagenfurt, Austria

#### 4. Gunter Hölig
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Gunter-Hoelig.png`
- **Quote:** "We are pleased to observe that our patients enjoy the exercise training very much and persevere. The playful component of our digital Pixformance therapy equipment certainly plays a part in this – and when our patients forget about the illness for a moment and simply have fun, that is extremely valuable."
- **Name:** Gunter Hölig, Therapy Director
- **Company:** Medical Park, Bad Rodach, Germany

---

## Section 7: Schedule a Call

### H2:
**Schedule a call or ask us a question**

### Logo Image:
`https://www.pixformance.com/wp-content/uploads/2018/11/Pixformance_Logo_round-e1542109099881.png`

### CTA:
- **Text:** "Write us"
- **Link:** `/en/contact/`

---

## Section 8: Economically Autonomous — Cash Pay

### H2:
**Economically autonomous thanks to "Cash Pay"**

### Body text:
Pixformance allows therapists to build up or expand the self-pay sector and thus an additional mainstay in the second healthcare market: for more economic independence from doctors' prescribing practices.

### Six Benefit Cards (Icon Grid):

> **Note:** Icons were lazy-loaded. Check DE page for icons.

#### Card 1: 500+ exercises – one device
Individual training plans can be compiled from a collection of over 500 functional exercises on the online platform.

#### Card 2: Simultaneous care
Thanks to the patented software, several patients can be cared for simultaneously and without additional staffing.

#### Card 3: Patients become clients
Individual training sessions and secondary prevention measures can be offered as an additional source of revenue.

#### Card 4: Efficient administration
Each patient's training history is accurately documented on the online platform for training analysis and optimization.

#### Card 5: Individual training
Exercise programs can be tailored to each patient's health condition and therapy needs.

#### Card 6: Time for the essential
The therapist does not have to demonstrate each exercise personally and saves time, which benefits the care of all patients.

---

## Section 9: Loved by Patients — Proven by Therapists

### H2:
**Loved by patients – proven by therapists**

### Intro text:
Whether for inpatient stays, before or after surgery or integrated physiotherapy, the Pixformance rehabilitation device is suitable for various indications in every rehabilitation phase and for every health condition.

### Seven Benefit Cards:

#### 1. 500+ Exercises, One Device
Depending on the indication, special exercises are possible in a wheelchair, with walking bars, on a daybed or on the floor. Each exercise can be tailored to the individual needs of the patient.

#### 2. More Empowerment & Self-Control
Patients are able to assess their own movement quality independently and to influence movement deviations independently.

#### 3. More Time For What Matters
The therapist does not have to personally demonstrate each exercise and saves time – which in turn benefits the care of all patients.

#### 4. Innovative Equipment
An innovative and modern therapy concept with Pixformance has a positive effect on the image and perception of your facility.

#### 5. Relief For Your Therapists
Targeted and individual treatment without additional staffing and more time for the individual as well as personal care of each patient.

#### 6. More Desire For Movement
A positive therapy experience is created and patients are motivated to achieve their therapy goals with fun and motivation.

#### 7. Tangible Therapy Success
The storage of the training data enables a before-and-after comparison to be made and the clinical course and treatment successes to be made tangible.

### Image (right side):
`https://www.pixformance.com/wp-content/uploads/2021/07/Pixformance-Digitales-Rehageraet-Spass-beim-Training-1.png`
- **Alt:** "Two women in front of the Pixformance Station"

---

## Section 10: References

### H2:
**References**

### Reference 1: Medical Park
- **Image:** `https://www.pixformance.com/wp-content/uploads/2018/12/LOESUNGEN-KLINIK-BROSCHÜREN.jpg`
- **Title:** Medical Park, Bad Rodach, Germany
- **Text:** Pixformance is already providing highly effective support to patients at the Medical Park rehabilitation clinic, Bad Rodach, on their treatment journey.
- **CTA:** "Learn more" → `https://www.pixformance.com/wp-content/uploads/2019/02/Pixformance-Partner-Medical-Park-quality-report.pdf`

### Reference 2: Focus Gesundheit
- **Image:** `https://www.pixformance.com/wp-content/uploads/2019/01/FocusGesundheit.png`
- **Title:** Pixformance In Germany's Top Rehabilitation Clinics
- **Text:** Pixformance – known from the FOCUS Gesundheit issue Dec./Jan. 2018/19 – has been operating in the best rehabilitation clinics in Germany for years.
- **CTA:** "Learn more" → `https://www.pixformance.com/wp-content/uploads/2019/01/Focus-Gesundheit-2018.pdf`

---

## Section 11: Research Studies

### H2:
**Research Studies**

### Study 1:
- **Institution:** Hochschule Fresenius | University of Applied Sciences
- **Topic:** Does the use of Pixformance with the recommended homework program have a positive effect on the walking ability of a patient with MS?
- **PDF:** `https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Multiple-Sclerosis-MS-Walking-Ability-Training-Medical-Study-University-Fresenius-Frankfurt.pdf`

### Study 2:
- **Institution:** Hochschule Fresenius | University of Applied Sciences
- **Topic:** Influence of a strengthening program with visual feedback on the condition of a patient with muscular dystrophy Emery triptych – a single case study
- **PDF:** `https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Emery-Dreifuss-Muscular-Dystrophy-Training-Medical-Study-Single-Case-Study-Walking-Ability-University-Fresenius-Frankfurt.pdf`

### Study 3:
- **Institution:** Hochschule Fresenius | University of Applied Sciences
- **Topic:** What effect does the use of Pixformance have on balance, walking ability and quality of life in the treatment of patients with Parkinson's syndrome?
- **PDF:** `https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Parkinson-Treatment-Walking-Ability-Training-Medical-Study-University-Fresenius-Frankfurt.pdf`

### Study 4:
- **Institution:** Hochschule Fresenius | University of Applied Sciences
- **Topic:** Investigation of the effect of Pixformance on the upper limb in a patient after Mamma-Ca
- **PDF:** `https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Breast-Cancer-Mamma-Ca-Training-Medical-Study-University-Fresenius-Frankfurt.pdf`

### Study 5:
- **Institution:** German University for Prevention and Health Management
- **Topic:** Empirical review of the training effects of a standardized training program on the example Mrs.Sporty and Pixformance
- **PDF:** `https://www.pixformance.com/wp-content/uploads/2019/02/Pixformance-medical-study-empirical-review-of-training-functional-effects-study-programme-mrs-sporty.pdf`

---

## Section 12: Our Powerful Service

### H2:
**Our Powerful Service**

### Intro text:
We do not sell rehabilitation equipment, but an individual care offer. With our competent team, you have the right expert for motion analysis to make your daily clinic routine even more efficient.

### Service 1: Personal Consulting And Training
We give you individual advice, starting with the planning of the rooms, through the installation of the necessary equipment or the optimal therapy control. To make it as easy as possible for you to get started, you and your therapists will receive personal training on how to use the Pixformance Station.

### Service 2: Hard- And Software Support
If hardware problems occur (camera, sensor, computer or screen), we will provide you with the spare parts. Also in case of software problems our support team is always there for you by phone. By the way, automatic updates for the Pixformance Station, new workouts, but also updates on the Pixformance online platform are part of our service and are available to you free of charge.

### Service 3: Complete 360° Marketing Package
We support you with a marketing package tailored to your needs to enable a smooth introduction of Pixformance to your staff and patients. As our customer, you get exclusive access to our Pixformance marketing package for print and web, with free downloads and much more. Personalize your materials with logo, opening hours as well as address and choose from different motifs.

### Service 4: Financing
Whether purchasing or leasing, you can structure the financing individually. We will advise and support you right from the start. Call us without obligation [or write to us](/en/contact/) and find out how you can start with Pixformance already from $99 per month.

### Service 5: FAQ | Frequently Asked Questions
[Here](/en/faq-training-with-pixformance-station/) you will find answers to the most frequently asked questions about our training concept.

---

## Section 13: Team Members

### Team Member 1:
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/04/Laura-Alves-Pixformance-1.png`
- **Name:** Laura Alves
- **Role:** Sales & Purchasing

### Team Member 2:
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/04/Rebecca-Goehrt-Pixformance.png`
- **Name:** Rebecca Göhrt
- **Role:** Technical Support

### Team Member 3:
- **Photo:** `https://www.pixformance.com/wp-content/uploads/2021/04/Patricia-Olear-Pixformance.png`
- **Name:** Patricia Olear
- **Role:** Marketing Support

---

## Section 14: FORTEe Research Project

### Image:
`https://www.pixformance.com/wp-content/uploads/2021/04/FORTEe-Pixformance-Partner-Round.png`
- **Alt:** "FORTEe Pixformance Partner"

### H3:
**Pixformance is a partner in the European research project FORTEe**

### Body text:
Specially adapted exercise training at the Pixformance Station has already achieved positive effects in adult cancer patients in the context of a study in the past. However, these effects have not yet been clearly demonstrated in children and adolescents. This is where FORTEe comes in, promoting an exercise therapy designed to strengthen young patients for the fight against childhood cancer.

### CTA:
- **Text:** "Read Press Article"
- **Link:** `https://www.pixformance.com/wp-content/uploads/2021/04/PM-07042021-Pixformance-FORTEe-Strong-against-childhood-cancer-EN.pdf`

---

## Footer

*(Standard footer — same as homepage. Use the shared footer component.)*

---

## All Image URLs (for download)

```
https://www.pixformance.com/wp-content/uploads/2023/08/image-25.png
https://www.pixformance.com/wp-content/uploads/2020/03/Logo-Gesundheitsrondell-Reharondell.png
https://www.pixformance.com/wp-content/uploads/2020/03/Logo-Medical-Park.png
https://www.pixformance.com/wp-content/uploads/2021/07/AK_logo_Niederrhein_Klinik.png
https://www.pixformance.com/wp-content/uploads/2020/03/Logo-Charite.png
https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Klinikum-Ludwigsburg-Im-Verbund-der-Regionalen-Kliniken-Holding-RKH.png
https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Rehaklinik-am-Kurpark-Bad-Kissingen.png
https://www.pixformance.com/wp-content/uploads/2021/02/pixformance-logo-oxford-brookes-university.png
https://www.pixformance.com/wp-content/uploads/2020/04/Pixformance-Logo-Mediclin.png
https://www.pixformance.com/wp-content/uploads/2021/07/SKH_Logo_4c-scaled-1.jpg
https://www.pixformance.com/wp-content/uploads/2021/03/fortee-eu-poject-pixformance-partner.png
https://www.pixformance.com/wp-content/uploads/2021/07/2560px-Logo_AUVA.svg.png
https://www.pixformance.com/wp-content/uploads/2024/03/RX-Logo.png
https://www.pixformance.com/wp-content/uploads/2021/04/Pixformance-Live-Feedback-Digitales-Trainingsgeraet-Bewegungsanalyse-Korrektur-Physiotherapie-Training-mobil.gif
https://www.pixformance.com/wp-content/uploads/2021/07/Pixformance-Sauerland-Klinik-Hachen-Telerehabilitation-Portrait-Gabriele-Buchstein.jpg
https://www.pixformance.com/wp-content/uploads/2021/07/Gabriele-Buchstein-Leitung-Physiotherapie-Sauerlandklinik-Hachen.png
https://www.pixformance.com/wp-content/uploads/2021/07/Christoph-Schneider-Therapieleiter-Niederrheinklinik-Reha-Klinik-Korschenbroich-Pixformance.png
https://www.pixformance.com/wp-content/uploads/2021/07/Christoph-Oratsch-AUVA-Klagenfurt-1.png
https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Gunter-Hoelig.png
https://www.pixformance.com/wp-content/uploads/2018/11/Pixformance_Logo_round-e1542109099881.png
https://www.pixformance.com/wp-content/uploads/2021/07/Pixformance-Digitales-Rehageraet-Spass-beim-Training-1.png
https://www.pixformance.com/wp-content/uploads/2018/12/LOESUNGEN-KLINIK-BROSCHÜREN.jpg
https://www.pixformance.com/wp-content/uploads/2019/01/FocusGesundheit.png
https://www.pixformance.com/wp-content/uploads/2021/04/Laura-Alves-Pixformance-1.png
https://www.pixformance.com/wp-content/uploads/2021/04/Rebecca-Goehrt-Pixformance.png
https://www.pixformance.com/wp-content/uploads/2021/04/Patricia-Olear-Pixformance.png
https://www.pixformance.com/wp-content/uploads/2021/04/FORTEe-Pixformance-Partner-Round.png
```

## PDF URLs (for download/linking)

```
https://www.pixformance.com/wp-content/uploads/2019/02/Pixformance-Partner-Medical-Park-quality-report.pdf
https://www.pixformance.com/wp-content/uploads/2019/01/Focus-Gesundheit-2018.pdf
https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Multiple-Sclerosis-MS-Walking-Ability-Training-Medical-Study-University-Fresenius-Frankfurt.pdf
https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Emery-Dreifuss-Muscular-Dystrophy-Training-Medical-Study-Single-Case-Study-Walking-Ability-University-Fresenius-Frankfurt.pdf
https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Parkinson-Treatment-Walking-Ability-Training-Medical-Study-University-Fresenius-Frankfurt.pdf
https://www.pixformance.com/wp-content/uploads/2019/01/Pixformance-Breast-Cancer-Mamma-Ca-Training-Medical-Study-University-Fresenius-Frankfurt.pdf
https://www.pixformance.com/wp-content/uploads/2019/02/Pixformance-medical-study-empirical-review-of-training-functional-effects-study-programme-mrs-sporty.pdf
https://www.pixformance.com/wp-content/uploads/2021/04/PM-07042021-Pixformance-FORTEe-Strong-against-childhood-cancer-EN.pdf
```

## Video URL (for download)

```
https://www.pixformance.com/wp-content/uploads/2021/04/HEADER_PHYSIO_Gruppentraining-Pixformance-Physiotherapie-Digitalisierung-Selbstzahlerbereich-Aufbauen-Erweitern-Pandemie.mp4
```

---

## Important Notes for Claude Code

1. **This is the largest page** — 14 distinct sections. Plan the component structure carefully.
2. **Sub-navigation tabs** (Physical Therapy / Fitness / Corporate Fitness) should be a reusable component shared across all three Solutions pages.
3. **The feature walkthrough section (Section 5)** has a GIF animation and additional images that were lazy-loaded. Check the DE page source for the complete set.
4. **Benefit cards appear twice** — Section 8 (6 cards for business owners) and Section 9 (7 cards for patients/therapists). These are different content sets despite some overlap.
5. **Research Studies section** links to external PDFs. These PDFs should be downloaded and placed in the project's public/assets folder for self-hosting.
6. **Team member photos** may need to be updated — check with client if Laura, Rebecca, and Patricia are still on the team.
7. **Testimonials are duplicated** in the HTML (mobile + desktop carousel). Check DE page for implementation.
8. **The "Cash Pay" heading** uses US-market terminology — keep as-is for the EN version.
