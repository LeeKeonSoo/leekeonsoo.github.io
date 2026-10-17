# Keonsoo Lee — research homepage

A single-page academic homepage, following the simple publication-list structure at https://suehyunpark.github.io/.

## Preview

```sh
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Build with `bundle exec jekyll build`.

## Editing

- `_includes/homepage.html`: brief biography, selected papers, education, experience, and teaching/leadership.
- `_layouts/research.html`: metadata and initial theme preference.
- `assets/css/research.css`: typography and responsive layout.
- `assets/downloads/Keonsoo_Lee_CV.pdf`: complete CV.
- `assets/downloads/Keonsoo_Lee_Research_Portfolio.pptx`: interview slides.

Paper entries show only the title, author information, publication/review status, and available links. Project thumbnails, contribution narratives, core concepts, expandable methods, and experimental results are omitted from the website. Full qualifications and research explanations remain in the CV and slides.

Curation remains submitted to IEEE Big Data 2026 and APPLE to ICLR 2027. OptimABS is published at KAIC 2025. APPLE's full author list is unavailable in the supplied anonymous manuscript, so only the applicant's confirmed second-author role appears. No paper links are fabricated.

The site follows the reference section order: introduction, Selected papers, Education, Experience, and Teaching & Leadership. Education includes KAU and confirmed UNLV non-degree coursework. Experience lists the QAI and DiSC research roles. Teaching & Leadership contains teaching and student leadership rather than conference service. The existing services hash remains for direct-link compatibility.

There is no header or section-jump menu. A small light/dark control beside the name follows the system preference initially and remembers an explicit choice locally. Contact and document links remain in the introduction. Direct links use ordinary browser anchors without artificial trailing space. The old About address redirects to the introduction. GitHub Pages publishes from main at the repository root.
