---
permalink: /
title: CLEAN Lab
author_profile: false
full_width: true
redirect_from:
  - /about/
  - /about.html
---

<div class="clean-home">
  <div>
    <div class="clean-intro">
      <img src="{{ '/images/clean-lab-logo.png' | relative_url }}" alt="CLEAN Lab logo" width="383" height="383">
      <p>CLEAN Lab is based in the Department of Aeronautical and Aviation Engineering at The Hong Kong Polytechnic University. We study combustion dynamics to develop cleaner, quieter, and safer energy and propulsion systems.</p>
    </div>

    <h2>Research focus</h2>
    <ul>
      <li><strong><span class="clean-letter">C</span>arbon-free energy</strong> — Study hydrogen and ammonia combustion for low-carbon energy systems.</li>
      <li><strong><span class="clean-letter">L</span>ow-noise design</strong> — Understand and control combustion-driven oscillations and noise.</li>
      <li><strong><span class="clean-letter">E</span>nergy utilization</strong> — Improve how combustion systems convert fuel energy into useful power.</li>
      <li><strong><span class="clean-letter">A</span>I for combustion</strong> — Use machine learning and data-driven models to analyze and predict combustion dynamics.</li>
      <li><strong>Aerospace propulsio<span class="clean-letter clean-letter-final">n</span></strong> — Investigate combustion stability in gas turbines and rocket engines.</li>
    </ul>
  </div>

  {% assign featured_extensions = '.jpg,.jpeg,.png,.webp,.avif' | split: ',' %}
  {% assign featured_count = 0 %}
  {% capture featured_slides %}
    {% for file in site.static_files %}
      {% assign folder = file.path | slice: 0, 17 %}
      {% assign extension = file.extname | downcase %}
      {% if folder == '/images/featured/' and featured_extensions contains extension %}
        {% assign label = file.basename | replace: '-', ' ' | replace: '_', ' ' %}
        <img src="{{ file.path | relative_url | uri_escape }}" alt="{{ label | escape }}"{% if featured_count > 0 %} hidden loading="lazy"{% endif %}>
        {% assign featured_count = featured_count | plus: 1 %}
      {% endif %}
    {% endfor %}
  {% endcapture %}
  {% if featured_count > 0 %}
  <section class="clean-featured" aria-label="Featured photos">
    <div class="clean-featured-frame">
      {{ featured_slides }}
    </div>
    {% if featured_count > 1 %}
    {% include clean-featured-controls.html %}
    {% endif %}
  </section>
  {% endif %}
</div>
