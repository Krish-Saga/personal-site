# SSC MTS Practice — Test Series

A fast, fully static practice-test site. The page is small; every question paper
lives as its own JSON file and is fetched **only when a student opens it**.

## Files

| File | What it is |
|---|---|
| `index.html` | The page shell |
| `styles.css` | All styling (themes, layout, exam, results, settings) |
| `app.js` | All behaviour (navigation, exam engine, review, study hub, settings) |
| `papers.json` | The **manifest** — the index the site reads at startup |
| `scan_papers.py` | Regenerates `papers.json` after you add/remove papers |
| `download_papers.py` | Helper used to download papers originally |
| `SSC MTS 2026 Test Series/` | Your category folders |
| `SSC MTS 2026 Vocabulary Test Series/` | Your category folders |

## Navigation

The site mirrors your folder tree **exactly** — every level, generated directly
from the paths in `papers.json`:

```
All series  →  SSC MTS 2026 Test Series        (level 1)
            →    Previous Year Papers          (level 2)
            →      SSC MTS 2024                (level 3)
            →        <paper>.json              (the paper)
```

Nothing is hardcoded, so the navigation can never drift from your folders. Add a
folder, run the scanner, re-upload — the new folder appears by itself, at whatever
depth you created it.

## Study hub

The home screen shows a progress dashboard built entirely from the attempts the
site already stores: papers attempted, questions solved, average accuracy, best
score, day streak, a level/XP bar, a daily goal ring, per-series progress bars,
"focus areas" (your lowest-accuracy folders), recent attempts and a 7-day activity
chart. "Resume paper" reopens your last paper with saved answers restored.

## Themes

Sixteen built-in themes, switchable from the header **or** the settings drawer
(which shows a live colour preview of each): Light, Dark, Warm Paper, Parchment,
Paperwhite, Slate, Midnight, Aurora, Emerald, Sunrise, Tokyo Night, Catppuccin
Mocha, Catppuccin Latte, Dracula, Rosé Pine and Cyberpunk. Your choice is saved.

## Settings

The account button in the header opens a settings drawer: profile name and photo,
profile switching, theme picker, sound and motion toggles, volume, plus export and
reset for your results.

## Adding or removing papers

1. Drop the `.json` file into the right folder (any depth you like).
2. Run the scanner once:
   ```
   python3 scan_papers.py
   ```
3. Upload/push the whole folder to your host.

`scan_papers.py` auto-detects Hindi/English pairs: two papers with the same title
**in the same folder** become one entry with a language switch. The pairing is
folder-scoped, so identically-titled papers in different sub-folders are never
merged.

## Hosting on GitHub Pages

Push these files to your repo (e.g. the `main` branch or a `/docs` folder) and
turn on **Settings → Pages**. Nothing else is required.

## Important

The papers are loaded with `fetch()`, so the site must be **served over HTTP**
(GitHub Pages, or locally with `python3 -m http.server`). Opening `index.html`
by double-clicking will not work — browsers block reading local files that way.
