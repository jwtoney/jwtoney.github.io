---
layout: page
title: models across the periodic table
description: property prediction, generative models, SOTA architectures, and uncertainty quantification built to handle the entire periodic table
img: assets/img/publication_preview/elemenet.png
importance: 3
category: research
related_publications: true
github: https://github.com/hjkgrp/ElemeNet
---

Most molecular machine learning methods perform well on small organic molecules, but
generalize poorly to organometallics, open-shell systems, and highly charged species.
ElemeNet is my recently introduced unified, general-purpose package for molecular machine
learning supporting elements 1–100 {% cite toney2026elemenet %}. We define 2D and 3D
representations compatible with organic, inorganic, and biological systems, condition upon
charge and spin through dedicated encoders, and support state-of-the-art E(3)-equivariant and
transformer architectures in addition to classical 2D graph neural networks. ElemeNet also
includes built-in uncertainty quantification for all predictions through deterministic and
ensemble-based methods, benchmarks competitively against literature baselines, and scales
effectively to millions of molecules through distributed training.

In a further effort to build deep learning architectures for the full periodic table, we
introduced novel pretraining protocols for generative transition state models. We extended
Transition1x by introducing element substitutions and transition metal complexes, and showed
that state-of-the-art models collapse on even slightly out-of-distribution chemistry
{% cite darouich2026ncs %}. Critically, self-supervised pretraining on equilibrium conformers
recovers the majority of performance without requiring high-quality fine-tuning data.

Relatedly, we fine-tuned large language models on organometallic SMILES to generate novel,
structurally valid TMCs {% cite liu2025chemrxiv %}, and recently introduced novel 3D-aware
molecular fingerprints from spectral graph theory {% cite toney2026fingerprints %}.
