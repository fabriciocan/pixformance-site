# FR Images TODO

Images on FR pages that contain embedded German text and require French versions.
All paths are relative to `public/`.

---

## HIGH PRIORITY — Technical Diagrams (embedded German labels)

### 1. Station dimension diagram
- **Currently used in:** `src/pages/fr/faq/index.astro`
- **Current image:** `/images/faq/masse-pixformance-station.png`
- **Alt text confirms German:** "Die Pixformance Station 2.0 ist 76 cm breit, 50 cm tief und 128,5 cm hoch."
- **EN equivalent exists:** `/images/en/masse-pixformance-station-functional-training-fitness-physio-training-digital-ehealth-300x241.png`
- **Action:** Create `/images/fr/masse-pixformance-station-fr.png` with French labels, OR update the `src` in `fr/faq/index.astro` to use the EN version as a temporary fix.

### 2. Training space requirements diagram
- **Currently used in:** `src/pages/fr/faq/index.astro`
- **Current image:** `/images/faq/pixformance-station-abmessungen.png`
- **Alt text confirms German:** "Der Abstand zum Trainierenden von der Pixformance Station 2.0 sollte 1,60 - 2,30 m betragen. Zudem sollte zu jeder Seite 1,0 bis 1,5 m Platz sein."
- **EN equivalent exists:** `/images/en/Pixformance-Station-2-0-Abmessungen-dimension-functional-training-fitness-physio-training-digital-ehealth-300x300.png`
- **Action:** Create `/images/fr/pixformance-station-abmessungen-fr.png` with French labels, OR update the `src` in `fr/faq/index.astro` to use the EN version as a temporary fix.

---

## MEDIUM PRIORITY — UI/Interface Screenshots (may show German interface)

### 3. Live Feedback GIF animation
- **Currently used in:** `src/pages/fr/physiotherapie/index.astro` (check exact path)
- **Current image:** `/images/Pixformance-Live-Feedback-Digitales-Trainingsgeraet-Bewegungsanalyse-Korrektur-Physiotherapie-Training-mobil-1.gif`
- **EN equivalent exists:** `/images/en/Pixformance-Live-Feedback-Digitales-Trainingsgeraet-Bewegungsanalyse-Korrektur-Physiotherapie-Training-mobil-1.gif`
- **Action:** Visually inspect to verify whether the UI feedback text appears in German. If yes, use the `/images/en/` version, or create a FR version.

---

## LOW PRIORITY — Marketing/Product Images (need visual verification)

These images have German words in their filenames and may contain German text overlays.
Visual inspection required to confirm.

### 4. Fitness concept marketing image
- **Filename:** `/images/Pixformance-Fitness-Digitales-Sportgeraet-Fitnessstudio-eroeffnen-eGym-voll-vernetzt.jpg`
- **Used in:** `src/pages/fr/fitness/index.astro`
- **Action:** Inspect for German text overlays. Replace if necessary.

### 5. Physiotherapy banner
- **Filename:** `/images/Pixformance-Gruppentraining-Physiotherapie-Digitale-Rehabilitation-eHealth-Funktionelles-Training-Banner.jpg`
- **Used in:** `src/pages/fr/physiotherapie/index.astro`
- **Action:** Inspect for German text overlays. Replace if necessary.

### 6. Physiotherapy training image
- **Filename:** `/images/Pixformance-Physiotherapie-Digitalisierung-Digitales-Trainingsgeraet-Spass-Beim-Training.png`
- **Used in:** `src/pages/fr/physiotherapie/index.astro`
- **Action:** Inspect for German text overlays. "Spass beim Training" may appear as visible text.

### 7. BGM/corporate station image
- **Filename:** `/images/Pixformance-Station-2D-Funktionelles-Training-Digital-voll-vernetzt-BGM_Firmenfitness-Personal-Trainer.png`
- **Used in:** `src/pages/fr/fitness-entreprise/index.astro`
- **Action:** Inspect for German text overlays.

---

## Notes

- EN equivalent images are stored in `/images/en/` and can serve as temporary replacements while French versions are produced.
- For FAQ diagrams (#1 and #2), using the EN version is a simple 1-line fix in `fr/faq/index.astro`.
- All portrait/headshot images (testimonials, team) and logo images are language-neutral — no changes needed.
- SVG icon files in `/images/konzept-icons/` and `/images/new-icons-bgm/` contain no text elements — no changes needed.
