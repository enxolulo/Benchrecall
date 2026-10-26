# Bench Recall

429 free-recall cards across the BSc and MSc biochemistry curriculum.
Write your answer from memory, reveal the model answer, rate yourself — the card
comes back on a Leitner schedule (1, 2, 4, 8, 16, 32 days).

Live: https://enxolulo.github.io/benchrecall/

## Installing

`index.html` is the whole app and is **completely self-contained** — content,
styles, code, the 19 diagrams, the app icon and the IBM Plex fonts are all
embedded. It makes no network requests whatsoever, so it also works offline and
by opening the file directly.

**Minimum:** upload `index.html` to the repository. That is enough for GitHub
Pages, including the homescreen icon on iOS.

**Optional, for guaranteed offline use:** also upload `sw.js`,
`manifest.webmanifest`, `icon-180.png` and `icon-512.png`. The service worker
keeps a permanent copy rather than relying on the browser's ordinary cache.

Then: Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
On the phone, open the site in Safari → Share → *Add to Home Screen*.

## Contents

| Block | Cards |
|---|---|
| General chemistry | 44 |
| Organic chemistry | 53 |
| Biochemistry | 54 |
| Metabolism | 46 |
| Molecular biology | 44 |
| Cell & systems | 40 |
| Biochemistry, advanced | 40 |
| Chemical biology | 32 |
| Methods & biophysics | 46 |
| Lab practice | 30 |

19 inline SVG schematics: pKa scale, Ramachandran plot, α-helix hydrogen
bonding, Michaelis–Menten, Lineweaver–Burk inhibition patterns, SN1/SN2 energy
profiles, Fmoc-SPPS cycle, native chemical ligation, intein splicing, tRNA,
FPLC flow path, LC-ESI-MS, gluconeogenesis bypasses, β-oxidation spiral, urea
cycle, purine ring origins, replication fork, splicing chemistry, and the
Na⁺/K⁺-ATPase E1/E2 cycle.

## Usage

- `Space` or `Enter` reveals the answer, `1` / `2` / `3` rate it.
- `Ctrl + Enter` reveals while the cursor is still in the answer box.
- Progress lives in this browser's localStorage. **Progress & settings** at the
  bottom of the Decks page exports it as text and restores it on another device.

## Updating the content

The app is built from a multi-file source — one JS file per subject block, plus
`figures.js` for the diagrams — which `build.js` inlines into the single
`index.html`, embedding the fonts from `@fontsource`. After replacing
`index.html`, bump `CACHE` in `sw.js` if you are using the service worker.
