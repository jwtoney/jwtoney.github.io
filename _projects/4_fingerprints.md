---
layout: page
title: fingerprints from spectral graph theory
description: physics-based molecular representations that encode 3D structure with symmetry enforced by construction, at a fraction of the cost of learned models
img: assets/img/publication_preview/spectral-fingerprints.png
importance: 4
category: research
related_publications: true
github: https://github.com/hjkgrp/SpectralScore
---

Key to cheminformatics and computational chemistry is the notion of chemical similarity.
Whether or not two molecules resemble one another is central to whether they are predicted to
have similar properties, come from shared regions of chemical space, or are
out-of-distribution to training data for machine learning models.

Classical chemical fingerprints rely on 2D connectivity to define vector representations of
molecules. While these methods are fast and interpretable, they are blind to 3D effects such
as stereochemistry and conformers, and generalize poorly to complex organometallic,
biological, or distorted molecules. 3D methods based on shape overlap attempt to resolve this
issue, but rely on pairwise alignment of atoms and are sensitive to atom ordering, limiting
screening of large datasets. Learned representations meanwhile may capture geometry but
require volumes of training data, sacrificing interpretability and generalizability.

Spectral graph theory offers a different path. We encode molecules as interaction tensors,
where each channel consists of a matrix defined by pairwise physical interactions defined in
Euclidean space. Calculating the eigenvalue spectrum produces a molecular fingerprint which is
E(3) and permutation invariant. These fingerprints are inexpensive to compute, scale
favorably, and have been integrated with community detection algorithms for the rapid and
guided exploration of chemical space. Our recent work demonstrates the superior performance of
spectral fingerprints relative to standard baselines across organic, inorganic, biological,
and reticular chemistry {% cite toney2026fingerprints %}. Their interpretability and
efficiency make spectral fingerprints a promising new geometry-aware similarity measure,
well-suited for cheminformatics and machine learning tasks.
