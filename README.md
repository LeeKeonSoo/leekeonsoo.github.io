# Keonsoo Lee — research homepage

A single-page academic homepage, following the simple publication-list structure at https://suehyunpark.github.io/.

## Preview

```sh
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Build with `bundle exec jekyll build`.

## Editing

- `_includes/homepage.html`: brief biography, selected papers, education, experience, and services.
- `_layouts/research.html`: navigation and metadata.
- `assets/css/research.css`: typography and responsive layout.
- `assets/downloads/Keonsoo_Lee_CV.pdf`: complete CV.
- `assets/downloads/Keonsoo_Lee_Research_Portfolio.pptx`: interview slides.

Paper entries show only the title, author information, publication/review status, and available links. Project thumbnails, contribution narratives, core concepts, expandable methods, and experimental results are omitted from the website. Full qualifications and research explanations remain in the CV and slides.

Curation remains submitted to IEEE Big Data 2026 and APPLE to ICLR 2027. OptimABS is published at KAIC 2025. APPLE's full author list is unavailable in the supplied anonymous manuscript, so only the applicant's confirmed second-author role appears. No paper links are fabricated.

The site follows the reference section order: introduction, Selected papers, Education, Experience, and Services. Education includes KAU and confirmed UNLV non-degree coursework. Experience lists the QAI and DiSC research roles. Services contains confirmed teaching and student leadership. Section navigation remains within one page; no Background grouping or empty sections are shown. Real hash links support direct links and browser history. The navigation script adds only the trailing space needed to reach a heading in tall viewports. The old About address redirects to the introduction. GitHub Pages publishes from the main branch at the repository root.
