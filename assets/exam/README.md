# SSC MTS Practice Site

A fully static practice-test site. The page is small and fast; every question
paper lives as its own JSON file and is fetched **only when a student opens it**.

## Files

| File | What it is |
|---|---|
| `index.html` | The page shell (tiny — links the other two) |
| `styles.css` | All styling (themes, layout, admin, study dashboard) |
| `app.js` | All behaviour (exam engine, review, admin, progress) |
| `papers.json` | The **manifest** — the list of papers the site reads at startup |
| `scan_papers.py` | Regenerates `papers.json` after you add/remove papers |
| `*/` | Your category folders, each holding subfolders of `.json` papers |

## Folder layout

The folders **are** the categories. Top-level folder = category, the folder
inside it = subcategory, and the `.json` files are the papers:

```
ENGLISH - CHAPTERWISE TEST/Uncategorized/2648_questions....json
Previous Year Sectional Tests GK-GS/SSC MTS 2025/754_questions....json
Full Mock Tests/Uncategorized/193_questions....json
```

## Adding or removing papers

1. Drop the `.json` file into the right category/subcategory folder.
2. Run the scanner once:
   ```
   python3 scan_papers.py
   ```
3. Upload/push the whole folder to your host.

`scan_papers.py` also auto-detects Hindi/English pairs: two papers with the same
title in the same category become one entry with a language switch — no manual
tagging needed.

## Hosting on GitHub Pages

Push these files to your repo (e.g. the `main` branch or a `/docs` folder) and
turn on **Settings → Pages**. Nothing else is required.

## Important

The papers are loaded with `fetch()`, so the site must be **served over HTTP**
(GitHub Pages, or locally with `python3 -m http.server`). Opening `index.html`
by double-clicking will not work — browsers block reading local files that way.
