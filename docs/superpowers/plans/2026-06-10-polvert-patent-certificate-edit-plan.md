# Polvert Patent Certificate Edit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate a public-safe Polvert patent certificate image with privacy mosaic, invention-title emphasis, a circular zoom callout, and repeated diagonal Polvert watermarks.

**Architecture:** Use one deterministic Python/Pillow generator to composite all visual layers from external Drive source images into committed web assets. Keep private source images out of the repository and commit only the generated public-safe outputs plus a README describing the source inputs and coordinates.

**Tech Stack:** Python 3.9, Pillow 11.3.0, static assets under `prototype/assets/polvert/patent-certificate/`.

---

### Task 1: Build The Generator

**Files:**
- Create: `scripts/generate_polvert_patent_certificate.py`

- [ ] **Step 1: Create the script with source constants and output paths**

Use `apply_patch` to create `scripts/generate_polvert_patent_certificate.py` with these constants:

```python
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = REPO_ROOT / "prototype/assets/polvert/patent-certificate"
MOSAIC_CERTIFICATE = Path("/Users/micaelclaw/Library/CloudStorage/GoogleDrive-micaelclaw@gmail.com/내 드라이브/골프장갑_특허권_모자이크.jpg")
POLVERT_LOGO = Path("/Users/micaelclaw/Library/CloudStorage/GoogleDrive-micaelclaw@gmail.com/내 드라이브/그린펏 인수인계 공유자료/04_폴베르_장갑_상품자료/04_폴베르_로고_신형_구형/폴베르 신형로고_투명배경_한글포함.png")

CANVAS_SIZE = (2654, 3682)
CERTIFICATE_OFFSET = (86, 86)
TITLE_RING_DOC_BBOX = (132, 1360, 790, 1542)
ZOOM_CROP_DOC_BBOX = (112, 1290, 850, 2028)
ZOOM_CIRCLE_CANVAS_BBOX = (1290, 1035, 2392, 2137)
```

- [ ] **Step 2: Add compositing helpers**

Implement helper functions with exact responsibilities:

```python
def load_rgba(path):
    return Image.open(path).convert("RGBA")

def paste_with_alpha(base, overlay, xy):
    base.alpha_composite(overlay, dest=xy)

def make_certificate_shadow(size, offset, doc_size):
    shadow = Image.new("RGBA", size, (0, 0, 0, 0))
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    x, y = offset
    draw.rectangle((x, y, x + doc_size[0], y + doc_size[1]), fill=150)
    blurred = mask.filter(ImageFilter.GaussianBlur(26))
    shadow.putalpha(blurred)
    return shadow
```

- [ ] **Step 3: Add watermark tiling**

Resize the provided logo to about `520px` wide, reduce alpha to `0.08`, rotate it by `-22deg`, and paste it at repeated positions across the canvas:

```python
WATERMARK_POSITIONS = [
    (210, 90), (1020, 80), (1810, 70),
    (-80, 650), (740, 650), (1560, 640),
    (80, 1220), (910, 1210), (1740, 1200),
    (-120, 1940), (700, 1930), (1530, 1910),
    (180, 2660), (1010, 2630), (1800, 2600),
    (340, 3230), (1240, 3210),
]
```

- [ ] **Step 4: Add emphasis layers**

Draw a red oval around `TITLE_RING_DOC_BBOX` after translating by `CERTIFICATE_OFFSET`. Draw a grey triangular connector from the ring area to the zoom circle. Build the zoom circle from `ZOOM_CROP_DOC_BBOX` cropped from the mosaic certificate, enlarged, masked to a circle, and outlined in soft grey.

- [ ] **Step 5: Save outputs**

Save these files:

```text
prototype/assets/polvert/patent-certificate/polvert-patent-certificate-draft.png
prototype/assets/polvert/patent-certificate/polvert-patent-certificate-final.jpg
prototype/assets/polvert/patent-certificate/polvert-patent-certificate-layout-guide.png
```

### Task 2: Generate Asset Documentation

**Files:**
- Create: `prototype/assets/polvert/patent-certificate/README.md`

- [ ] **Step 1: Document the source assets**

Record the source image paths, generator command, output files, and the important coordinates from Task 1.

- [ ] **Step 2: Include privacy notes**

State that the committed outputs are generated from the mosaic-safe certificate and do not include the unredacted original patent scan.

### Task 3: Run And Verify

**Files:**
- Modify: generated files under `prototype/assets/polvert/patent-certificate/`

- [ ] **Step 1: Run the generator**

```bash
python3 scripts/generate_polvert_patent_certificate.py
```

Expected output includes all three generated image paths.

- [ ] **Step 2: Inspect generated dimensions**

```bash
sips -g pixelWidth -g pixelHeight prototype/assets/polvert/patent-certificate/polvert-patent-certificate-final.jpg
```

Expected final dimensions: `2654 x 3682`.

- [ ] **Step 3: Visually inspect the final and guide images**

Open the final image and layout guide. Confirm:

- invention title is the focal point,
- private fields remain blurred,
- watermark repeats diagonally,
- red ring and zoom lens are aligned with the title,
- output does not look more cluttered than the provided style reference.

### Task 4: Commit And Prepare PR

**Files:**
- Commit all created files.

- [ ] **Step 1: Review git diff**

```bash
git status --short
git diff --stat
```

- [ ] **Step 2: Commit**

```bash
git add scripts/generate_polvert_patent_certificate.py prototype/assets/polvert/patent-certificate docs/superpowers/plans/2026-06-10-polvert-patent-certificate-edit-plan.md
git commit -m "feat: generate Polvert patent certificate asset"
```

- [ ] **Step 3: Push and open PR**

Push `codex/polvert-patent-certificate` and create a PR against `main` after final verification.
