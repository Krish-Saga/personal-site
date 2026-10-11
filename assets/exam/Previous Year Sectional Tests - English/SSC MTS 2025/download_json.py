

from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urlparse, unquote
import json
import time

URL_FILE = Path("urls.txt")
OUTPUT_DIR = Path("downloaded_json")
OUTPUT_DIR.mkdir(exist_ok=True)

urls = [
    line.strip()
    for line in URL_FILE.read_text(encoding="utf-8").splitlines()
    if line.strip() and not line.lstrip().startswith("#")
]

report = []

for number, url in enumerate(urls, start=1):
    # Preserve the exact filename from the URL path.
    filename = Path(unquote(urlparse(url).path)).name

    if not filename.endswith(".json"):
        report.append({
            "url": url,
            "status": "Skipped: URL does not end in .json"
        })
        continue

    destination = OUTPUT_DIR / filename

    try:
        request = Request(
            url,
            headers={"User-Agent": "Mozilla/5.0"}
        )

        with urlopen(request, timeout=30) as response:
            content = response.read()

        # Verify that the downloaded response is valid JSON.
        json.loads(content.decode("utf-8-sig"))

        destination.write_bytes(content)
        report.append({
            "url": url,
            "filename": filename,
            "status": "Downloaded",
            "bytes": len(content)
        })
        print(f"[OK] {filename}")

    except Exception as error:
        report.append({
            "url": url,
            "filename": filename,
            "status": f"Failed: {error}"
        })
        print(f"[FAILED] {filename}: {error}")

    # Avoid sending requests too rapidly.
    time.sleep(1)

Path("download_report.json").write_text(
    json.dumps(report, indent=2, ensure_ascii=False),
    encoding="utf-8"
)

print(f"\nFinished. Check the folder: {OUTPUT_DIR}")
print("Failures and download details: download_report.json")
