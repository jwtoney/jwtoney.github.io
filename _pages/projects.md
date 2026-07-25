---
layout: page
title: research
permalink: /research/
description: Four threads of my work on machine learning and electronic structure for organometallic chemistry.
nav: true
nav_order: 2
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
