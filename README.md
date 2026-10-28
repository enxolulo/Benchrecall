# Bench Recall

552 free-recall cards across the BSc and MSc biochemistry curriculum, with 113
inline diagrams. Write your answer from memory, reveal the model answer, rate
yourself — the card comes back on a Leitner schedule (1, 2, 4, 8, 16, 32 days).

Live: https://enxolulo.github.io/benchrecall/

## Installing

`index.html` is the whole app and is **completely self-contained** — content,
styles, code, all 113 diagrams, the app icon and the IBM Plex fonts are all
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
| **Must-know foundations** | **90** |
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
| **SPPS** | **33** |

**Must-know foundations** has its own panel at the top of the Decks page and
ignores the subject and depth filters — it is a fixed set, not a slice of the
bank. Seven blocks:

- *Core facts (35)* — cell architecture, prokaryote vs eukaryote, the amino
  acids and their pKa values, the peptide bond, the four levels of protein
  structure, DNA and base pairing, the central dogma and the genetic code, gene
  and mRNA anatomy, sugars, lipids, membranes, what an enzyme does, ATP,
  glycolysis, the TCA cycle, chemiosmosis, translation, the cell cycle, the
  hydrophobic effect, non-covalent interactions, buffers, the numbers worth
  knowing, gene to purified protein, signalling, ΔG and coupling, protein
  regulation, technique-to-question mapping, endosymbiosis, antibodies,
  genetics vocabulary, Gram staining
- *Enzyme kinetics (8)* — KM, Vmax, kcat, kcat/KM and the diffusion limit,
  reading the curve, the inhibition types, activity units, catalytic
  strategies, measuring an initial rate, temperature and pH
- *Binding and affinity (7)* — Kd, kon/koff and residence time, fitting a
  binding curve, cooperativity and the Hill coefficient, avidity,
  binding thermodynamics, which method for which Kd range
- *Folding and quality control (7)* — Anfinsen and the funnel, what drives
  folding, chaperones, inclusion bodies, disulfides, Tm vs ΔG, disordered
  regions
- *The life of a protein (8)* — the secretory pathway, targeting signals,
  glycosylation, PTMs and their mass shifts, ubiquitin–proteasome, autophagy,
  half-life and the N-end rule, phosphorylation
- *The cloning toolbox (8)* — PCR, primer design, restriction cloning, Gibson
  and Golden Gate, expression plasmids, sequencing platforms, qPCR, CRISPR
- *Redox and cofactors (7)* — oxidation states of carbon, NAD vs NADP, flavins,
  reduction potential and ΔG, glutathione and ROS, metal cofactors, vitamins
- *The core methods (10)* — SDS-PAGE, western blot, chromatography,
  centrifugation, mass spectrometry, microscopy, flow cytometry, protein
  quantification, ELISA, statistics and experimental design

## Orientation first

Every card opens with a short framing block above the model answer: what the
thing actually is, and why it is worth knowing — before any detail. The TCA
cycle card tells you it is the convergence point of all three fuel classes and
that its job is electrons, not ATP; the ΔG card tells you free energy is the
bookkeeping for reaction direction and that only one of the three versions
predicts it in a cell. All 552 cards carry one.

## Figures

113 inline SVG schematics, shown **with the model answer** rather than the
question, so they never give the recall away. 491 of the 552 cards carry one.

- *Protein* — pKa scale, Ramachandran plot, α-helix H-bonding, β-sheets,
  peptide bond, levels of structure, folding funnel, disulfide exchange
- *Enzymes* — Michaelis–Menten, Lineweaver–Burk, MWC vs KNF allostery, serine
  protease, Cleland bisubstrate schemes, pH–rate profile, cofactor map, PLP
- *Metabolism* — glycolysis, TCA, respiratory chain, gluconeogenesis bypasses,
  β-oxidation, FAS vs β-oxidation, pentose phosphate pathway, urea cycle,
  purine ring origins, one-carbon metabolism, ATP, mitochondrion
- *Nucleic acids* — B-DNA, base pairs, nucleotide anatomy, central dogma,
  genetic code, gene and mRNA, replication fork, DNA repair, splicing,
  nucleosome, lac operon, Cas9, ribosome, tRNA, translation
- *Cell* — eukaryotic and prokaryotic cell, membrane, cell cycle, GPCR cycle,
  RTK branches, Na⁺/K⁺-ATPase, GTPase switch, apoptosis, IgG
- *Methods* — FPLC flow path, ion exchange, LC-ESI-MS, peptide fragmentation,
  SDS-PAGE, CD spectra, thermal shift, ITC, SPR, FRET, anisotropy
- *Organic chemistry* — SN1/SN2 profiles, stereoisomer relationships and CIP,
  the carbonyl reactivity ladder, aldol vs Claisen, EAS directing effects, the
  Pd cross-coupling cycle, leaving-group ranking, reducing-agent selectivity,
  chair conformations and A-values, alkene additions, the four rearrangements
- *Physical chemistry* — ΔG vs ΔG°′ and the reaction quotient, hydrogen-bond
  geometry, Lambert–Beer and A280, the MO diagram of O₂, periodic trends, ionic
  strength and the Hofmeister series, first-order kinetics, the carbon
  oxidation ladder
- *Chemistry and bench* — Fmoc-SPPS cycle, native chemical ligation, intein
  splicing, bioorthogonal ligations, maleimide conjugation, PCR, the three
  cloning strategies, ubiquitin–proteasome, flow cytometry gating, microscopy
  resolution, expression plasmid, antibiotic targets, growth curve, orders of
  magnitude

## SPPS

A dedicated 29-card block on solid-phase peptide synthesis, from the principle
through to the bench: why C→N, resins and linkers, loading, Fmoc/tBu
orthogonality, the Fmoc removal mechanism, then the coupling chemistry in
depth — carbodiimide activation and the O-acylisourea, **DIC/Oxyma step by
step** (including the documented HCN side pathway, which occurs at room
temperature and not only on heating), the additives compared by pKa, uronium
and phosphonium reagents and the guanidinylation trap, racemisation by both
mechanisms. Then difficult sequences, pseudoprolines and backbone protection,
side-chain protection including Arg(Pbf), Alloc and ivDde orthogonality,
aspartimide, diketopiperazine, cleavage cocktails, reading the crude LC-MS,
thioesters for NCL, and the yield arithmetic that explains why ligation exists.

Plus the resin question in its own right: TentaGel's PEG-grafted architecture
and what it actually buys, the distinction between the **matrix** (polystyrene,
TentaGel, ChemMatrix — which decides swelling, loading and aggregation) and the
**linker** (which decides what your C-terminus becomes), how the Rink amide
linker releases a primary amide, and why a C-terminal amide is usually the
right default for a protein fragment or a synthetic probe.

## My piles

Mark any card while studying (**Pile**) or from Browse (**Add to a pile**) and
it goes into a named pile of your own. Piles appear at the bottom of the Decks
page, where you can reorder cards with ↑/↓, remove them, rename or delete the
pile, and study it. A pile is studied **in the order you put it in** — it is
never shuffled and never filtered — so you can build your own revision
sequence. Tapping a pile a second time on the same card takes it out again.
Piles travel with the export in **Progress & settings**.

## Usage

- `Space` or `Enter` reveals the answer, `1` / `2` / `3` rate it.
- `Ctrl + Enter` reveals while the cursor is still in the answer box.
- Progress lives in this browser's localStorage. **Progress & settings** at the
  bottom of the Decks page exports it as text and restores it on another device.

## Updating the content

The app is built from a multi-file source — one JS file per subject block, plus
`figures.js` … `figures12.js`, and `leads1.js` … `leads7.js` for the orientation lines for the diagrams — which `build.js` inlines into
the single `index.html`, embedding the fonts from `@fontsource`. After replacing
`index.html`, bump `CACHE` in `sw.js` if you are using the service worker.

All figures share a 424-unit viewBox so their text renders at the same size, and
are themed through CSS custom properties, so they follow light and dark mode.
