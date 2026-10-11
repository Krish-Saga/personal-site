#!/usr/bin/env python3
"""
scan_papers.py  --  rebuild papers.json for the SSC MTS practice site.

Folder layout (put this file in the site root, next to index.html):
    index.html  styles.css  app.js  scan_papers.py
    ENGLISH - CHAPTERWISE TEST/<subfolder>/*.json     <- category / subcategory / papers
    Full Mock Tests/Uncategorized/*.json
    ...

Run it after adding, removing or renaming any paper:
    python3 scan_papers.py

It walks every .json under this folder (except papers.json), reads each paper,
works out its language, and writes papers.json which the site fetches at startup.
The papers themselves are fetched one at a time, only when opened.
"""
import json, os, re, datetime

ROOT = os.path.dirname(os.path.abspath(__file__))

# folder name (lowercased) -> section id used by the app
SECTION_MAP = {
    "english - chapterwise test": "chapterwise",
    "previous year sectional tests - english": "english",
    "previous year sectional tests gk-gs": "gk",
    "reading comprehension": "reading",
    "full mock tests": "mock",
}
# known paper titles by test id (extend freely)
TITLES = {
    "718": "PYST 1: SSC MTS 2025 – Held on 04 Shift 3",
    "719": "PYST 2: SSC MTS 2025 – Held on 05 Shift 1",
    "720": "PYST 3: SSC MTS 2025 – Held on 05 Shift 2",
    "721": "PYST 4: SSC MTS 2025 – Held on 05 Shift 3",
    "722": "PYST 5: SSC MTS 2025 – Held on 06 Shift 1",
    "723": "PYST 6: SSC MTS 2025 – Held on 06 Shift 2",
    "724": "PYST 7: SSC MTS 2025 – Held on 06 Shift 3",
    "725": "PYST 8: SSC MTS 2025 – Held on 09 Shift 1",
    "726": "PYST 9: SSC MTS 2025 – Held on 09 Shift 2",
    "727": "PYST 10: SSC MTS 2025 – Held on 09 Shift 3",
    "728": "PYST 11: SSC MTS 2025 – Held on 10 Shift 1",
    "729": "PYST 12: SSC MTS 2025 – Held on 10 Shift 2",
    "730": "PYST 13: SSC MTS 2025 – Held on 10 Shift 3",
    "731": "PYST 14: SSC MTS 2025 – Held on 11 Shift 1",
    "732": "PYST 15: SSC MTS 2025 – Held on 11 Shift 2",
    "733": "PYST 16: SSC MTS 2025 – Held on 11 Shift 3",
    "734": "PYST 17: SSC MTS 2025 – Held on 12 Shift 1",
    "735": "PYST 18: SSC MTS 2025 – Held on 12 Shift 2",
    "736": "PYST 19: SSC MTS 2025 – Held on 12 Shift 3",
    "737": "PYST 20: SSC MTS 2025 – Held on 13 Shift 1",
    "738": "PYST 21: SSC MTS 2025 – Held on 13 Shift 2",
    "739": "PYST 22: SSC MTS 2025 – Held on 13 Shift 3",
    "740": "PYST 23: SSC MTS 2025 – Held on 16 Shift 1",
    "741": "PYST 24: SSC MTS 2025 – Held on 16 Shift 2",
    "742": "PYST 25: SSC MTS 2025 – Held on 16 Shift 3",
    "743": "PYST 26: SSC MTS 2025 – Held on 17 Shift 1",
    "744": "PYST 27: SSC MTS 2025 – Held on 17 Shift 2",
    "745": "PYST 28: SSC MTS 2025 – Held on 17 Shift 3",
    "746": "PYST 29: SSC MTS 2025 – Held on 18 Shift 1",
    "747": "PYST 30: SSC MTS 2025 – Held on 18 Shift 2",
    "748": "PYST 31: SSC MTS 2025 – Held on 18 Shift 3",
    "749": "PYST 32: SSC MTS 2025 – Held on 19 Shift 1",
    "750": "PYST 33: SSC MTS 2025 – Held on 19 Shift 2",
    "751": "PYST 34: SSC MTS 2025 – Held on 19 Shift 3",
    "752": "PYST 35: SSC MTS 2025 – Held on 20 Shift 1",
    "753": "PYST 36: SSC MTS 2025 – Held on 20 Shift 2",
    "754": "PYST 1: SSC MTS 2025 – Held on 04 Shift 3",
    "755": "PYST 1: SSC MTS 2025 – Held on 04 Shift 3",
    "756": "PYST 2: SSC MTS 2025 – Held on 05 Shift 1",
    "757": "PYST 2: SSC MTS 2025 – Held on 05 Shift 1",
    "758": "PYST 3: SSC MTS 2025 – Held on 05 Shift 2",
    "759": "PYST 3: SSC MTS 2025 – Held on 05 Shift 2",
    "760": "PYST 4: SSC MTS 2025 – Held on 05 Shift 3",
    "761": "PYST 4: SSC MTS 2025 – Held on 05 Shift 3",
    "762": "PYST 5: SSC MTS 2025 – Held on 06 Shift 1",
    "763": "PYST 5: SSC MTS 2025 – Held on 06 Shift 1",
    "764": "PYST 6: SSC MTS 2025 – Held on 06 Shift 2",
    "765": "PYST 6: SSC MTS 2025 – Held on 06 Shift 2",
    "766": "PYST 7: SSC MTS 2025 – Held on 06 Shift 3",
    "767": "PYST 7: SSC MTS 2025 – Held on 06 Shift 3",
    "768": "PYST 8: SSC MTS 2025 – Held on 09 Shift 1",
    "769": "PYST 8: SSC MTS 2025 – Held on 09 Shift 1",
    "770": "PYST 9: SSC MTS 2025 – Held on 09 Shift 2",
    "771": "PYST 9: SSC MTS 2025 – Held on 09 Shift 2",
    "772": "PYST 10: SSC MTS 2025 – Held on 09 Shift 3",
    "773": "PYST 10: SSC MTS 2025 – Held on 09 Shift 3",
    "774": "PYST 11: SSC MTS 2025 – Held on 10 Shift 1",
    "775": "PYST 11: SSC MTS 2025 – Held on 10 Shift 1",
    "776": "PYST 12: SSC MTS 2025 – Held on 10 Shift 2",
    "777": "PYST 12: SSC MTS 2025 – Held on 10 Shift 2",
    "778": "PYST 13: SSC MTS 2025 – Held on 10 Shift 3",
    "779": "PYST 13: SSC MTS 2025 – Held on 10 Shift 3",
    "780": "PYST 14: SSC MTS 2025 – Held on 11 Shift 1",
    "781": "PYST 14: SSC MTS 2025 – Held on 11 Shift 1",
    "782": "PYST 15: SSC MTS 2025 – Held on 11 Shift 2",
    "783": "PYST 15: SSC MTS 2025 – Held on 11 Shift 2",
    "784": "PYST 16: SSC MTS 2025 – Held on 11 Shift 3",
    "785": "PYST 16: SSC MTS 2025 – Held on 11 Shift 3",
    "786": "PYST 17: SSC MTS 2025 – Held on 12 Shift 1",
    "787": "PYST 17: SSC MTS 2025 – Held on 12 Shift 1",
    "788": "PYST 18: SSC MTS 2025 – Held on 12 Shift 2",
    "789": "PYST 18: SSC MTS 2025 – Held on 12 Shift 2",
    "790": "PYST 19: SSC MTS 2025 – Held on 12 Shift 3",
    "791": "PYST 19: SSC MTS 2025 – Held on 12 Shift 3",
    "792": "PYST 20: SSC MTS 2025 – Held on 13 Shift 1",
    "793": "PYST 20: SSC MTS 2025 – Held on 13 Shift 1",
    "814": "PYST 21: SSC MTS 2025 – Held on 13 Shift 2",
    "815": "PYST 21: SSC MTS 2025 – Held on 13 Shift 2",
    "816": "PYST 22: SSC MTS 2025 – Held on 13 Shift 3",
    "817": "PYST 22: SSC MTS 2025 – Held on 13 Shift 3",
    "818": "PYST 23: SSC MTS 2025 – Held on 16 Shift 1",
    "819": "PYST 23: SSC MTS 2025 – Held on 16 Shift 1",
    "820": "PYST 24: SSC MTS 2025 – Held on 16 Shift 2",
    "821": "PYST 24: SSC MTS 2025 – Held on 16 Shift 2",
    "822": "PYST 25: SSC MTS 2025 – Held on 16 Shift 3",
    "823": "PYST 25: SSC MTS 2025 – Held on 16 Shift 3",
    "824": "PYST 26: SSC MTS 2025 – Held on 17 Shift 1",
    "825": "PYST 26: SSC MTS 2025 – Held on 17 Shift 1",
    "826": "PYST 27: SSC MTS 2025 – Held on 17 Shift 2",
    "827": "PYST 27: SSC MTS 2025 – Held on 17 Shift 2",
    "828": "PYST 28: SSC MTS 2025 – Held on 17 Shift 3",
    "829": "PYST 28: SSC MTS 2025 – Held on 17 Shift 3",
    "830": "PYST 29: SSC MTS 2025 – Held on 18 Shift 1",
    "831": "PYST 29: SSC MTS 2025 – Held on 18 Shift 1",
    "832": "PYST 30: SSC MTS 2025 – Held on 18 Shift 2",
    "833": "PYST 30: SSC MTS 2025 – Held on 18 Shift 2",
    "834": "PYST 31: SSC MTS 2025 – Held on 18 Shift 3",
    "835": "PYST 31: SSC MTS 2025 – Held on 18 Shift 3",
    "836": "PYST 32: SSC MTS 2025 – Held on 19 Shift 1",
    "837": "PYST 32: SSC MTS 2025 – Held on 19 Shift 1",
    "838": "PYST 33: SSC MTS 2025 – Held on 19 Shift 2",
    "839": "PYST 33: SSC MTS 2025 – Held on 19 Shift 2",
    "840": "PYST 34: SSC MTS 2025 – Held on 19 Shift 3",
    "841": "PYST 34: SSC MTS 2025 – Held on 19 Shift 3",
    "842": "PYST 35: SSC MTS 2025 – Held on 20 Shift 1",
    "843": "PYST 35: SSC MTS 2025 – Held on 20 Shift 1",
    "844": "PYST 36: SSC MTS 2025 – Held on 20 Shift 2",
    "845": "PYST 36: SSC MTS 2025 – Held on 20 Shift 2",
    "193": "MOCK TEST - 1 (SSC MTS 2026)",
    "194": "MOCK TEST - 1 (SSC MTS 2026)",
    "195": "MOCK TEST - 2 (SSC MTS 2026)",
    "196": "MOCK TEST - 2 (SSC MTS 2026)",
    "197": "MOCK TEST - 3 (SSC MTS 2026)",
    "198": "MOCK TEST - 3 (SSC MTS 2026)",
    "199": "MOCK TEST - 4 (SSC MTS 2026)",
    "200": "MOCK TEST - 4 (SSC MTS 2026)",
    "201": "MOCK TEST - 5 (SSC MTS 2026)",
    "202": "MOCK TEST - 5 (SSC MTS 2026)",
    "203": "MOCK TEST - 6 (SSC MTS 2026)",
    "204": "MOCK TEST - 6 (SSC MTS 2026)",
    "205": "MOCK TEST - 7 (SSC MTS 2026)",
    "206": "MOCK TEST - 7 (SSC MTS 2026)",
    "207": "MOCK TEST - 8 (SSC MTS 2026)",
    "208": "MOCK TEST - 8 (SSC MTS 2026)",
    "209": "MOCK TEST - 9 (SSC MTS 2026)",
    "210": "MOCK TEST - 9 (SSC MTS 2026)",
    "211": "MOCK TEST - 10 (SSC MTS 2026)",
    "212": "MOCK TEST - 10 (SSC MTS 2026)",
    "213": "MOCK TEST - 11 (SSC MTS 2026)",
    "214": "MOCK TEST - 11 (SSC MTS 2026)",
    "215": "MOCK TEST - 12 (SSC MTS 2026)",
    "216": "MOCK TEST - 12 (SSC MTS 2026)",
    "217": "MOCK TEST - 13 (SSC MTS 2026)",
    "218": "MOCK TEST - 13 (SSC MTS 2026)",
    "219": "MOCK TEST - 14 (SSC MTS 2026)",
    "220": "MOCK TEST - 14 (SSC MTS 2026)",
    "221": "MOCK TEST - 15 (SSC MTS 2026)",
    "222": "MOCK TEST - 15 (SSC MTS 2026)",
    "223": "MOCK TEST - 16 (SSC MTS 2026)",
    "224": "MOCK TEST - 16 (SSC MTS 2026)",
    "225": "MOCK TEST - 17 (SSC MTS 2026)",
    "226": "MOCK TEST - 17 (SSC MTS 2026)",
    "227": "MOCK TEST - 18 (SSC MTS 2026)",
    "228": "MOCK TEST - 18 (SSC MTS 2026)",
    "229": "MOCK TEST - 19 (SSC MTS 2026)",
    "230": "MOCK TEST - 19 (SSC MTS 2026)",
    "231": "MOCK TEST - 20 (SSC MTS 2026)",
    "232": "MOCK TEST - 20 (SSC MTS 2026)",
    "233": "MOCK TEST - 21 (SSC MTS 2026)",
    "234": "MOCK TEST - 21 (SSC MTS 2026)",
    "235": "MOCK TEST - 22 (SSC MTS 2026)",
    "236": "MOCK TEST - 22 (SSC MTS 2026)",
    "237": "MOCK TEST - 23 (SSC MTS 2026)",
    "238": "MOCK TEST - 23 (SSC MTS 2026)",
    "239": "MOCK TEST - 24 (SSC MTS 2026)",
    "240": "MOCK TEST - 24 (SSC MTS 2026)",
    "241": "MOCK TEST - 25 (SSC MTS 2026)",
    "242": "MOCK TEST - 25 (SSC MTS 2026)",
    "1582": "MOCK TEST - 26 (SSC MTS 2026)",
    "1583": "MOCK TEST - 26 (SSC MTS 2026)",
    "1584": "MOCK TEST - 27 (SSC MTS 2026)",
    "1585": "MOCK TEST - 27 (SSC MTS 2026)",
    "1586": "MOCK TEST - 28 (SSC MTS 2026)",
    "1587": "MOCK TEST - 28 (SSC MTS 2026)",
    "1588": "MOCK TEST - 29 (SSC MTS 2026)",
    "1589": "MOCK TEST - 29 (SSC MTS 2026)",
    "1590": "MOCK TEST - 30 (SSC MTS 2026)",
    "1591": "MOCK TEST - 30 (SSC MTS 2026)",
    "1592": "MOCK TEST - 31 (SSC MTS 2026)",
    "1593": "MOCK TEST - 31 (SSC MTS 2026)",
    "1594": "MOCK TEST - 32 (SSC MTS 2026)",
    "1595": "MOCK TEST - 32 (SSC MTS 2026)",
    "1596": "MOCK TEST - 33 (SSC MTS 2026)",
    "1597": "MOCK TEST - 33 (SSC MTS 2026)",
    "1598": "MOCK TEST - 34 (SSC MTS 2026)",
    "1600": "MOCK TEST - 34 (SSC MTS 2026)",
    "1599": "MOCK TEST - 35 (SSC MTS 2026)",
    "1601": "MOCK TEST - 35 (SSC MTS 2026)",
    "1602": "MOCK TEST - 36 (SSC MTS 2026)",
    "1603": "MOCK TEST - 36 (SSC MTS 2026)",
    "1604": "MOCK TEST - 37 (SSC MTS 2026)",
    "1605": "MOCK TEST - 37 (SSC MTS 2026)",
    "1606": "MOCK TEST - 38 (SSC MTS 2026)",
    "1607": "MOCK TEST - 38 (SSC MTS 2026)",
    "1608": "MOCK TEST - 39 (SSC MTS 2026)",
    "1609": "MOCK TEST - 39 (SSC MTS 2026)",
    "1610": "MOCK TEST - 40 (SSC MTS 2026)",
    "1611": "MOCK TEST - 40 (SSC MTS 2026)"
}


def slugify(s):
    s = re.sub(r"[^a-z0-9]+", "-", str(s).lower()).strip("-")
    return s or "papers"


def devanagari_ratio(text):
    plain = re.sub(r"<[^>]+>", "", text)
    dev = len(re.findall(r"[\u0900-\u097F]", plain))
    tot = len(re.findall(r"[A-Za-z\u0900-\u097F]", plain)) or 1
    return dev / tot


def scan():
    papers = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if not d.startswith(".")]
        for fn in filenames:
            if not fn.lower().endswith(".json") or fn == "papers.json":
                continue
            full = os.path.join(dirpath, fn)
            rel = os.path.relpath(full, ROOT).replace(os.sep, "/")
            parts = rel.split("/")
            if len(parts) < 2:
                continue  # a paper must sit inside at least one folder (its category)
            section_label = parts[0]
            sub_label = parts[1] if len(parts) > 2 else "Uncategorized"
            section = SECTION_MAP.get(section_label.lower(), slugify(section_label))
            try:
                raw = open(full, encoding="utf-8").read()
                data = json.loads(raw)
            except Exception as exc:
                print("  ! skipping " + rel + " (" + str(exc) + ")")
                continue
            qs = data if isinstance(data, list) else (data.get("questions") or data.get("data") or [])
            if not qs:
                print("  ! skipping " + rel + " (no questions)")
                continue
            first = qs[0] if isinstance(qs[0], dict) else {}
            m = re.match(r"^(\d+)", fn)
            tid = str(first.get("test_id") or first.get("testId") or first.get("id") or (m.group(1) if m else ""))
            title = TITLES.get(tid) or os.path.splitext(fn)[0]
            lang = "hi" if devanagari_ratio(raw) > 0.02 else "en"
            marks = 0
            for q in qs:
                try:
                    marks += int(float(q.get("positive_marks") or 0))
                except Exception:
                    pass
            is_mock = section == "mock"
            minutes = 45 if is_mock else 25
            if not marks:
                marks = 150 if is_mock else 75
            papers.append({
                "path": rel,
                "id": tid,
                "title": title,
                "language": lang,
                "section": section,
                "sectionLabel": section_label,
                "subLabel": sub_label,
                "chapter": None,
                "questionCount": len(qs),
                "minutes": minutes,
                "marks": marks,
            })

    # group bilingual pairs (same section + title, different language)
    groups = {}
    for p in papers:
        groups.setdefault(p["section"] + "::" + p["title"], []).append(p)
    for key, group in groups.items():
        langs = sorted({p["language"] for p in group})
        if len(langs) > 1:
            for p in group:
                p["groupKey"] = key
                p["langs"] = langs

    papers.sort(key=lambda p: p["path"].lower())
    manifest = {
        "version": 2,
        "generated": datetime.datetime.now().isoformat(timespec="seconds"),
        "count": len(papers),
        "papers": papers,
    }
    with open(os.path.join(ROOT, "papers.json"), "w", encoding="utf-8") as fh:
        json.dump(manifest, fh, ensure_ascii=False, separators=(",", ":"))

    cats = {}
    for p in papers:
        cats[p["sectionLabel"]] = cats.get(p["sectionLabel"], 0) + 1
    print("wrote papers.json -- " + str(len(papers)) + " papers")
    for c, n in sorted(cats.items()):
        print("   " + c + ": " + str(n))


if __name__ == "__main__":
    scan()
