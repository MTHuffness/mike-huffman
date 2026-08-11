# Mike Huffman — Professional Profile

Static personal profile site for Mike Huffman, CFA — styled as a financial data terminal.
Hosted on GitHub Pages.

This is the static successor to the original Django version of the site. All resume
content that previously lived in the Django database now lives in this repo:

- `static/js/resume-data.js` — the data the site actually renders:
  - `JOB_DATA` — work experience entries (employer, title, dates, accomplishment bullets),
    ordered by `display_order`; drives the chart and details on `experience.html`.
  - `SKILLS_BY_CATEGORY` — skills grouped by category with the roles each was applied in;
    drives `skills.html`.
- `data/resume_source.json` — the raw Django `dumpdata` export (pages app only) from the
  production database, kept as the source-of-truth backup.

## Editing content

- **Experience / skills:** edit `static/js/resume-data.js` directly. No build step.
- **Summary, projects, contact:** edit the corresponding HTML page.
- Shared header/footer markup is duplicated across the five pages — if you change the nav
  or footer, apply the change to all of `index.html`, `experience.html`, `projects.html`,
  `skills.html`, `contact.html`.

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Professional summary, licenses, education |
| `experience.html` | Interactive career chart (Chart.js) with per-role accomplishments |
| `projects.html` | Project showcase cards |
| `skills.html` | Clickable competency matrix |
| `contact.html` | Contact info and professional network links |
