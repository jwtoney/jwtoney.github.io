---
layout: page
title: datasets for open-shell chemistry
description: high-fidelity quantum chemistry data across charge and spin states, where machine learning for organometallics has been starved
img: assets/img/publication_preview/bostmc-dataset.png
importance: 2
category: research
related_publications: true
---

Machine learning for chemistry has been carried by a handful of large, clean datasets — and
nearly all of them cover closed-shell organic molecules. Transition metal complexes get a
fraction of the coverage despite being where catalysis, photophysics, and magnetism actually
happen. The reasons are structural: charge and spin states have to be assigned before a
calculation can even be set up, many electronic structure methods are unreliable for
open-shell metals, and experimental reference data is scarce for exactly the complexes that
are catalytically interesting {% cite toney2025curropin %}.

The **BOS-TMC dataset** is my attempt to close that gap {% cite garrison2026bostmc %}. It
reports DFT properties for 159k experimentally characterized mononuclear TMCs from the
Cambridge Structural Database, computed in up to three spin states across a range of formal
charges — 343.8k TMC/spin combinations and over 2.9M properties in total. Two choices
matter. First, overall complex charge is assigned by an iterative procedure rather than
guessed, which is what makes multi-charge coverage trustworthy. Second, experimental
heavy-atom coordinates are preserved during optimization, so the structures stay tied to
what was actually crystallized. For a 10k-complex subset we swept twelve exchange–correlation
functionals spanning rungs of Jacob's ladder, which maps out where in TMC space DFT itself is
least certain — useful both as a benchmark and as a warning label.

Coverage is only half the problem; relevance is the other half. Using supervised and
unsupervised NLP over the literature, we linked experimentally synthesized complexes to their
reported applications, yielding the tmCAT (catalysis), tmPHOTO (photophysics), tmBIO
(biological), and tmSCO (magnetism) datasets {% cite kevlishvili2025faraday %}. Screening
against an application-specific subset beats screening against everything.
