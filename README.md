# Mike Huffman — Professional Profile

Static personal profile site for Mike Huffman, CFA — styled as a financial data terminal.
Hosted on GitHub Pages.

**Live site:** https://mikehuffman.info/ (also at https://mthuffness.github.io/mike-huffman/)

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

## Deployment (GitHub Pages)

The site is served directly from the `main` branch root by GitHub Pages — there is no
build step. Pushing to `main` redeploys the site automatically (allow a minute or two
for the Pages build to finish).

```sh
git add -A
git commit -m "Update site"
git push origin main
```

One-time setup, already done for this repo (for reference if recreating it):

1. Create the repo and push: `gh repo create MTHuffness/mike-huffman --public --source . --push`
2. Enable Pages from the `main` branch root:
   `gh api -X POST repos/MTHuffness/mike-huffman/pages -f "source[branch]=main" -f "source[path]=/"`
   (or on github.com: Settings → Pages → Deploy from a branch → `main` / `/ (root)`)
3. The `.nojekyll` file at the repo root tells Pages to serve files as-is instead of
   running them through Jekyll — keep it.

### Custom domain

The site is served at `mikehuffman.info` via the `CNAME` file in the repo root plus the
custom-domain setting in Settings → Pages. DNS is hosted at GoDaddy:

- Apex `@` A records → GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`
- `www` CNAME → `mthuffness.github.io` (GitHub redirects www to the apex domain)
- "Enforce HTTPS" is enabled in Settings → Pages (GitHub provisions the certificate
  automatically once DNS points at the IPs above).

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Professional summary, licenses, education |
| `experience.html` | Interactive career chart (Chart.js) with per-role accomplishments |
| `projects.html` | Project showcase cards |
| `skills.html` | Clickable competency matrix |
| `contact.html` | Contact info and professional network links |
