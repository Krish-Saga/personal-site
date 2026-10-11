#!/usr/bin/env python3
"""
download_papers.py
------------------
Downloads every paper JSON file listed in a classx test-series API response
(the raw JSON you were given), saving each one inside the folder you choose,
named after the paper's title.

The raw response contains a "test_titles" array. Each entry can have up to
two question links:
    "test_questions_url"    - the first language (usually English)
    "test_questions_url_2"  - the second language (e.g. Hindi), when present
and a "test_languages" list telling you which language each link is.

This script downloads BOTH links when they exist. The first is saved as
"<Paper Name>.json" and the second as "<Paper Name> Hindi.json" (the extra
word comes from the test's language list).

Only the Python standard library is used - no pip installs needed.

Usage
-----
    python download_papers.py                            # raw file next to script, saves into the current folder
    python download_papers.py my_raw_file.json           # explicit input file
    python download_papers.py -o "C:/Users/me/papers"    # save directly into this folder

The files are written STRAIGHT INTO the folder you give with -o (or the
folder you run the command from). No extra subfolder is created.

After it finishes you get:
    <output folder>/
        Cloze Test Set 1.json
        MOCK TEST - 1 (SSC MTS 2026).json
        MOCK TEST - 1 (SSC MTS 2026) Hindi.json
        ...
"""

import argparse
import json
import os
import re
import sys
import time
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

# A normal browser User-Agent avoids some servers rejecting the request.
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"
    ),
    "Accept": "application/json, text/plain, */*",
}


def safe_filename(title, test_id):
    """Turn a paper title into a safe file name (no path/illegal chars)."""
    name = re.sub(r'[<>:"/\\|?*\x00-\x1f]', "_", title or "").strip()
    name = re.sub(r"\s+", " ", name).strip(" .")
    return name or f"paper_{test_id}"


def load_papers(path):
    """Read the raw API response and return its list of test titles."""
    with open(path, "r", encoding="utf-8-sig") as f:
        text = f.read()

    try:
        data = json.loads(text)
    except json.JSONDecodeError:
        # Tolerate stray text around the JSON object (e.g. log prefixes).
        start, end = text.find("{"), text.rfind("}")
        if start == -1 or end == -1:
            raise
        data = json.loads(text[start : end + 1])

    papers = data.get("test_titles") or data.get("data", {}).get("test_titles") or []
    if not papers:
        sys.exit("No 'test_titles' array found in the input file.")
    return papers


def language_label(langs, index):
    """Extra word for the link at position 'index' (0 = first language)."""
    if index < len(langs) and str(langs[index]).strip():
        return f" {str(langs[index]).strip()}"
    return f" {index + 1}"


def download(url, dest, retries=3, timeout=60):
    """Download url -> dest. Returns (ok, bytes, error_message)."""
    last_err = None
    for attempt in range(1, retries + 1):
        try:
            req = Request(url, headers=HEADERS)
            with urlopen(req, timeout=timeout) as resp:
                body = resp.read()
            if not body:
                raise URLError("empty response body")
            with open(dest, "wb") as f:
                f.write(body)
            return True, len(body), None
        except (HTTPError, URLError, TimeoutError, OSError) as e:
            last_err = e
            if attempt < retries:
                time.sleep(1.5 * attempt)  # small backoff
    return False, 0, str(last_err)


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    ap = argparse.ArgumentParser(description="Download paper JSONs named by paper title.")
    ap.add_argument(
        "raw_file",
        nargs="?",
        default=os.path.join(here, "papers_raw.json"),
        help="the raw classx API response JSON (default: papers_raw.json next to this script)",
    )
    ap.add_argument(
        "-o", "--out",
        default=os.getcwd(),
        help="folder to save the JSON files into (default: the folder you run from)",
    )
    ap.add_argument("--timeout", type=int, default=60, help="per-request timeout in seconds")
    ap.add_argument("--force", action="store_true",
                    help="re-download even if the file already exists (default: skip existing files)")
    args = ap.parse_args()

    if not os.path.isfile(args.raw_file):
        sys.exit(f"Input file not found: {args.raw_file}")

    papers = load_papers(args.raw_file)
    # The given folder IS the destination - files go directly inside it.
    out_dir = os.path.abspath(os.path.expanduser(args.out))
    os.makedirs(out_dir, exist_ok=True)

    used = {}
    ok_count = 0
    fail_count = 0
    skip_count = 0
    total_links = 0

    for i, p in enumerate(papers, 1):
        title = (p.get("title") or "").strip()
        test_id = str(p.get("id", "")).strip()
        langs = [str(l).strip() for l in (p.get("test_languages") or []) if str(l).strip()]

        # Collect every link this paper has, in language order.
        links = []
        u1 = (p.get("test_questions_url") or "").strip()
        u2 = (p.get("test_questions_url_2") or "").strip()
        if u1:
            links.append((0, u1))
        if u2:
            links.append((1, u2))

        if not links:
            print(f"[{i:>2}/{len(papers)}] {title or test_id}: no URL - skipped")
            continue

        base = safe_filename(title, test_id)
        for idx, url in links:
            total_links += 1
            suffix = "" if idx == 0 else language_label(langs, idx)
            name = base + suffix
            if name.lower() in used:
                name = f"{name} ({test_id})"
            used[name.lower()] = True
            dest = os.path.join(out_dir, name + ".json")

            # Skip files that are already there (unless --force).
            if not args.force and os.path.isfile(dest) and os.path.getsize(dest) > 0:
                skip_count += 1
                print(f"[{i:>2}/{len(papers)}] {name}: already exists - skipped")
                continue

            print(f"[{i:>2}/{len(papers)}] {name}: downloading...", end=" ", flush=True)
            ok, size, err = download(url, dest, timeout=args.timeout)
            if ok:
                ok_count += 1
                print(f"OK ({size:,} bytes)")
            else:
                fail_count += 1
                print(f"FAILED ({err})")

    print(f"\nDone: {ok_count} downloaded, {skip_count} skipped (already present), "
          f"{fail_count} failed - into '{out_dir}'")
    if fail_count:
        print(f"{fail_count} file(s) failed - re-run the script to retry them.")


if __name__ == "__main__":
    main()
