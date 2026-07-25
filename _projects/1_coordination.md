---
layout: page
title: metal–ligand coordination
description: graph neural networks that predict how a ligand actually binds a metal, and the structure-generation tools that use them
img: assets/img/publication_preview/pnas-coordination.png
importance: 1
category: research
related_publications: true
github: https://github.com/hjkgrp/pydentate
---

Virtual screening of transition metal complexes (TMCs) starts from an assumption that is
almost never checked: that we know which atoms of a ligand bind the metal. Get that wrong
and every downstream number — geometry, spin state, barrier height — is wrong too. Unlike
organic molecules, where valence rules fix connectivity, a coordinating ligand's binding
mode depends on the metal, its oxidation state, the other ligands, and the reaction
conditions.

My work turns this into a learning problem. From ~70,000 unique ligands of known
coordination in the Cambridge Structural Database, I trained graph neural networks that
predict both the **denticity** of a ligand and the **identity of each coordinating atom**
directly from a SMILES string {% cite toney2025pnas %}. Interpreting what the models learn
recovers established coordination chemistry — and surfaces trends that are not in any
textbook. Coupling the models to the structure-generation package molSimplify makes de novo
TMC construction possible from ligand SMILES alone, with DFT-validated geometries
{% cite terrones2026jcim %}.

Real catalysts are messier still. Hemilabile ligands change how they bind mid-cycle, opening
and closing coordination sites — the very behavior that makes them useful, and the behavior a
single-binding-mode assumption erases. I curated labeled datasets of hemilabile and
non-hemilabile ligands, introduced four exhaustive and mutually exclusive classes of
hemilability, and built an ensemble model that proposes a primary *and* alternative
chemically plausible coordination modes end-to-end {% cite toney2025jacs %}. Generating each
complex in its predicted poses and computing the energetic cost of switching between them
with DFT confirms the alternatives are physically reasonable.

Everything here ships as open-source software, because the point is for other people —
including experimentalists — to be able to run it.
