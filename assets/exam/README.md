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

## Previous year papers by exam

The home page has an **exam-wise** section that groups every paper by SSC exam
and year — currently SSC CGL, CHSL, MTS and STENO, for every year present in the
library. Open an exam, pick a year, and the papers for that exam+year open in one
list (across the English and GK-GS folders), each attemptable with explanations
like any other paper.

The grouping is derived from your folder names: any folder whose name contains an
exam code (CGL, CHSL, MTS, STENO, CPO, GD) **and** a year (e.g. `SSC CGL 2021`)
is picked up automatically. To add a new exam or year:

1. Create a folder named like `SSC CGL 2021` (anywhere under a series).
2. Drop the paper JSONs inside it.
3. Run `python3 scan_papers.py` and re-upload.

The new exam/year then appears in the exam-wise section on its own.

## Hunter rank system

Progress is gamified, lightly and tastefully:

- **Hunter rank** E → D → C → B → A → S, earned from XP (XP = questions answered
  correctly). Shown as a badge in the header and on the home page.
- **Daily quests** — solve 30 questions today, attempt a paper, score 80%+ in a
  paper, keep your streak alive. Each carries an XP reward.
- **Achievements** — 12 badges for milestones (first paper, 50 papers, 100/500
  questions, streaks, accuracy, rank milestones).
- **Level-ups** show a short toast and play a chime.

All of it is computed from the attempts the site already stores — nothing extra to
set up, and it resets/updates as you practise.

## Study tools (evidence-based)

- **Revision queue** — every question you get wrong is collected and resurfaced
  until you answer it correctly in a later attempt. This is *retrieval practice
  with spacing*, the technique with the strongest evidence for long-term
  retention. "Start revision" builds a short paper from just those questions.
- **Study timer** — a Pomodoro-style focus block (25 min work / 5 min break) with
  a session counter for the day. Time-boxing plus short breaks keeps attention up
  and fatigue down.
- **Daily goal + streak** and **focus areas** (weakest folders) live in the study
  hub, so you always know what to do next.
