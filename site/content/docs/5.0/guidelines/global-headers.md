---
layout: guidelines
title: Global headers
description: This design kit contains the essential UI elements for designing, prototyping and building Orange products and services on the web.
group: guidelines
subgroup: Modules
toc: true
---

<main>
  <div class="container">
    <h2 id="suprabar">Supra bar</h2>
    <p>
      <strong>Supra bars are hidden on tablet and mobile devices.</strong>
      Based on viewport size, supra bar is hidden under <var>768px</var>.
    </p>
  </div>
  <div class="container">
    <h3 class="mt-5 h5" id="web-glh-sub-003">Supra bar with actions — <a id="web-glh-sub-003" class="ui-kit-id">web-glh-sub-003</a></h3>
  </div>
  <nav role="navigation" class="navbar navbar-dark bg-dark navbar-expand-md pt-0 d-none d-sm-block d-sm-none d-md-block">
    <div class="container">
      <div class="navbar-nav d-flex flex-row">
        <a href="#" class="nav-link active pb-1" aria-current="page">Personal</a>
        <a class="nav-link pb-1" href="#">Business</a>
      </div>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-mail pb-1">
        <img src="/docs/5.0/assets/img/boosted-search.svg" width="30" height="50" role="img" alt="Search" loading="lazy">
            <span class="visually-hidden">Search</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-buy pb-1">
          <img src="/docs/5.0/assets/img/boosted-buy.svg" width="30" height="50" role="img" alt="Basket" loading="lazy">
          <span class="visually-hidden">Basket</span>
          </a>
        </li>
        <li class="nav-item">
          <svg width="2em" height="2em" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.0/assets/img/boosted-search.svg"/></svg>
          <a href="#" class="nav-link nav-icon svg-avatar pb-1">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</main>