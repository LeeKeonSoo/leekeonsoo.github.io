# Keonsoo Lee — research homepage

A single-page academic homepage, following the simple publication-list structure at https://suehyunpark.github.io/.

## Preview

```sh
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Build with `bundle exec jekyll build`.

## Editing

- `_includes/homepage.html`: brief biography, selected papers, and background.
- `_layouts/research.html`: navigation and metadata.
- `assets/css/research.css`: typography and responsive layout.
- `assets/downloads/Keonsoo_Lee_CV.pdf`: complete CV.
- `assets/downloads/Keonsoo_Lee_Research_Portfolio.pptx`: interview slides.

Paper entries show only the title, author information, publication/review status, and available links. Project thumbnails, contribution narratives, core concepts, expandable methods, and experimental results are omitted from the website. Full qualifications and research explanations remain in the CV and slides.

Curation remains submitted to IEEE Big Data 2026 and APPLE to ICLR 2027. OptimABS is published at KAIC 2025. APPLE's full author list is unavailable in the supplied anonymous manuscript, so only the applicant's confirmed second-author role appears. No paper links are fabricated.

The site is one short page, with direct contact and download links instead of section-jump navigation. The old About address redirects to the introduction. GitHub Pages publishes the site from the main branch at the repository root.

The short page intentionally omits Papers/Background navigation: both hash targets reached the same maximum scroll position in tall browser windows.
