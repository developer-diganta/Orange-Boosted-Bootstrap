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
    <h2 id="navbar" class="mt-5">Headers (Navbar)</h2>
  </div>
  <div class="container">
    <h3 class="mt-5 h5">OBS Global header standard with navigation bar — <a id="web-glh-obs-002" class="ui-kit-id">web-glh-obs-002</a></h3>
  </div>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
      <div class="container-lg flex-sm-wrap">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
          <h2 class="h4" id="obs-2">
            <span>Business</span><br>Services
          </h2>
        </a>
        <ul class="navbar-nav ml-auto d-md-none flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.0/assets/img/boosted-search.svg" width="30" height="50" role="img" alt="Search" loading="lazy">
              <span class="visually-hidden">Search</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#obs-header-nav" aria-controls="obs-header-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav ml-auto d-none d-md-flex">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.0/assets/img/boosted-search.svg" width="30" height="50" role="img" alt="Search" loading="lazy">
              <span class="visually-hidden">Search</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.0/assets/img/boosted-buy.svg" width="30" height="50" role="img" alt="Basket" loading="lazy">
              <span class="visually-hidden">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        </ul>
      </div>
    </nav>    
    <div class="navbar navbar-dark bg-dark navbar-expand-md bg-dark flex-sm-wrap p-0">
      <hr class="w-100 m-0 d-none d-md-block border-700">
      <div class="container-lg border-bottom">
        <div class="navbar-collapse collapse pb-1" id="obs-header-nav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</main>