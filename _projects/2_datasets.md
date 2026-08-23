---
layout: page
title: datasets for open-shell chemistry
description: the largest, most diverse dataset of quantum chemical properties on experimentally-synthesized transition metal complexes
img: assets/img/publication_preview/bostmc-dataset.png
importance: 2
category: research
related_publications: true
zenodo: https://zenodo.org/records/21383037
---

Machine learning for chemistry has primarily relied on large datasets of closed-shell,
neutral, organic molecules. Despite their numerous applications, transition metal complexes
(TMCs) have received a fraction of the coverage of organics, in part due to their complex
electronic structure and limited experimental data {% cite toney2025curropin %}. Early work
applied natural language processing on existing TMC datasets to curate subsets of chemical
space labeled with their applications in catalysis, photochemistry, medicine, and magnetism
{% cite kevlishvili2025faraday %}.

Chemical relevance is valuable, but our early work utilized noisy datasets of closed-shell
chemistry. We recently introduced the BOS-TMC dataset of DFT properties for 159k
experimentally characterized TMCs, computed in up to three spin states
{% cite garrison2026bostmc %}. With nearly 344k TMC/spin combinations and over 2.9M
properties in total, BOS-TMC is the largest and most diverse dataset of quantum chemical
properties calculated on experimental TMCs.

For a subset of over 10k structures, we calculate properties with twelve exchange-correlation
functionals spanning Jacob's ladder, mapping functional sensitivity across properties and
chemical motifs. I look forward to seeing the community leverage BOS-TMC for advances in
density functional development, machine learning, and the guided exploration of chemical
space. Most importantly, the work is open-access and the dataset freely accessible on
[Zenodo](https://zenodo.org/records/21383037).
