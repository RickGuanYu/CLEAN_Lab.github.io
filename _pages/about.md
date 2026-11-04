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

  {% assign featured_extensions = '.jpg,.jpeg,.png,.webp,.avif,.gif' | split: ',' %}
  {% assign featured_count = 0 %}
  {% capture featured_slides %}
    {% for file in site.static_files %}
      {% assign folder = file.path | slice: 0, 15 %}
      {% assign extension = file.extname | downcase %}
      {% if folder == '/images/Flames/' and featured_extensions contains extension %}
        {% assign label = file.basename | replace: '-', ' ' | replace: '_', ' ' %}
        <img src="{{ file.path | relative_url | uri_escape }}" alt="{{ label | escape }}"{% if featured_count > 0 %} hidden loading="lazy"{% endif %}>
        {% assign featured_count = featured_count | plus: 1 %}
      {% endif %}
    {% endfor %}
  {% endcapture %}
  {% if featured_count > 0 %}
  <section class="clean-featured" aria-label="Featured flame images" data-interval="10000">
    <div class="clean-featured-frame">
      {{ featured_slides }}
    </div>
    {% if featured_count > 1 %}
    {% include clean-featured-controls.html %}
    {% endif %}
  </section>
  {% endif %}
</div>

<section class="clean-news" aria-labelledby="clean-news-title">
  <h2 id="clean-news-title">Recent news</h2>
  {% if site.data.clean_news.size > 0 %}
    {% assign recent_news = site.data.clean_news | sort: 'date' | reverse %}
    <ul>
      {% for item in recent_news limit: 5 %}
      <li><time datetime="{{ item.date | escape }}">{{ item.date | date: "%B %e, %Y" }}</time> · {% if item.url %}<a href="{{ item.url | escape }}">{{ item.title | escape }}</a>{% else %}{{ item.title | escape }}{% endif %}</li>
      {% endfor %}
    </ul>
  {% else %}
    <p>Lab news will appear here.</p>
  {% endif %}
</section>
