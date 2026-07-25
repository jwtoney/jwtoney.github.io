---
layout: page
title: models across the periodic table
description: deep learning architectures, generative models, and uncertainty quantification built to survive elements past the second row
img: assets/img/publication_preview/elemenet.png
importance: 3
category: research
related_publications: true
github: https://github.com/hjkgrp/ElemeNet
---

Most molecular machine learning quietly assumes H, C, N, O, and a handful of halogens. Push
those models toward metals, unusual oxidation states, or open-shell systems and they fail —
often confidently, which is worse. My work targets that failure mode directly, on both the
architecture side and the reliability side.

**ElemeNet** is a unified, general-purpose package for molecular machine learning that
supports elements 1–100 {% cite toney2026elemenet %}. It defines representations that handle
organometallic and biological systems alongside organic chemistry, natively conditions on
charge and spin state, and adds moiety-level prediction to the usual atom-, bond-, and
molecule-level targets. E(3)-equivariant models, transformers, and classical 2D architectures
all live behind one command-line interface, and every model class includes built-in
uncertainty quantification through deterministic and statistical measures — so a prediction
outside the training domain announces itself instead of silently degrading. It benchmarks
competitively against literature baselines across organic, inorganic, coordination, and
biological chemistry, and scales to millions of molecules.

Generalization failure is measurable if you build benchmarks that provoke it. For generative
transition state prediction, we constructed extensions of Transition1x with controlled
elemental substitutions and transition metal complexes, and showed that models achieving near
chemical accuracy on small organic reactions produce unphysical geometries on chemistry they
have never seen {% cite darouich2026ncs %}. Self-supervised pretraining on equilibrium
conformers fixes much of it: median TS RMSD on TMC reactions drops from 0.39 to 0.19 Å, with
up to 75% less fine-tuning data required.

Related threads: fine-tuning language models on a SMILES variant adapted for coordination
chemistry to generate novel, structurally valid TMCs {% cite liu2025chemrxiv %}, and ongoing
work deriving molecular fingerprints from spectral graph theory so that representations carry
physics rather than learned correlations {% cite toney2026fingerprints %}.
