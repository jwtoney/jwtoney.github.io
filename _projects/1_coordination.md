---
layout: page
title: metal–ligand coordination
description: graph neural networks predicting organometallic bonding, integrated with high-throughput structure generation
img: assets/img/publication_preview/pnas-coordination.png
importance: 1
category: research
related_publications: true
github: https://github.com/hjkgrp/pydentate
---

Computational modeling of transition metal complexes (TMCs) assumes knowledge of which atoms
in a ligand bind to the metal. While trivial to determine for simple molecules from the
spectrochemical series, organometallic bonding becomes challenging to predict for complex
ligands. This limits researchers to relying on imperfect heuristics for assigning
coordination, or restricting their investigations to simple molecules with known
coordination.

My work approaches this from a machine learning perspective. After curating a dataset of 70K
unique ligands of experimentally-characterized coordination, I trained graph neural networks
to predict metal–ligand coordination directly from ligand SMILES {% cite toney2025pnas %}.
Interpreting latent space reveals known trends in coordination chemistry, while integration
with the structure-generation package molSimplify enables faithful reproduction of known 3D
structures from predicted bonding patterns {% cite terrones2026jcim %}.

Real catalysts are more complicated, exhibiting dynamic, "hemilabile" bonding patterns along
a reaction coordinate. To extend our methods to such chemically relevant systems, I curated
datasets of known hemilabile ligands, fine-tuned a performant hemilabile classifier, and
introduced an ensemble algorithm for predicting primary and alternative coordination modes
validated with DFT {% cite toney2025jacs %}.

Each of these developments is available through the open-source
[pydentate](https://github.com/hjkgrp/pydentate) software package, along with tutorials to
facilitate their use among experimental and computational chemists alike.
