---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Slax"
  text: "Simple & Relaxed"
  tagline: Simple tools, relaxed life
  actions:
    - theme: brand
      text: Slax Note 
      link: /slax-note
    - theme: alt
      text: Slax Reader 
      link: /slax-reader

features:
  - title: Simplicity
    details: Essential, intuitive, and clean. Clear design that aligns with common sense and requires no training.
  - title: Longevity
    details: Committed to creating enduring value, with a decade-long perspective.
  - title: Small yet beautiful
    details: Elegant solutions to specific pain points.
  - title: Difference
    details: Delivering unique value in everything we do.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>