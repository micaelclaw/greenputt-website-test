#!/usr/bin/env python3
"""Generate the public-safe Polvert patent certificate promo asset."""

from __future__ import annotations

import sys
import unicodedata
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


REPO_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = REPO_ROOT / "prototype/assets/polvert/patent-certificate"

GOOGLE_DRIVE_ROOT = (
    Path.home() / "Library/CloudStorage/GoogleDrive-micaelclaw@gmail.com"
)

MOSAIC_CERTIFICATE = GOOGLE_DRIVE_ROOT / "내 드라이브/골프장갑_특허권_모자이크.jpg"
POLVERT_LOGO = (
    GOOGLE_DRIVE_ROOT
    / "내 드라이브/그린펏 인수인계 공유자료/04_폴베르_장갑_상품자료"
    / "04_폴베르_로고_신형_구형/폴베르 신형로고_투명배경_한글포함.png"
)

CANVAS_SIZE = (2654, 3682)
CERTIFICATE_OFFSET = (86, 86)
TITLE_RING_DOC_BBOX = (132, 1360, 790, 1542)
ZOOM_CROP_DOC_BBOX = (112, 1290, 850, 2028)
ZOOM_CIRCLE_CANVAS_BBOX = (1290, 1035, 2392, 2137)

WATERMARK_POSITIONS = [
    (210, 90),
    (1020, 80),
    (1810, 70),
    (-80, 650),
    (740, 650),
    (1560, 640),
    (80, 1220),
    (910, 1210),
    (1740, 1200),
    (-120, 1940),
    (700, 1930),
    (1530, 1910),
    (180, 2660),
    (1010, 2630),
    (1800, 2600),
    (340, 3230),
    (1240, 3210),
]


def normalized(value: str) -> str:
    return unicodedata.normalize("NFC", value)


def resolve_asset(candidate: Path, basename: str) -> Path:
    if candidate.exists():
        return candidate

    target_name = normalized(basename)
    for path in GOOGLE_DRIVE_ROOT.rglob("*"):
        if normalized(path.name) == target_name:
            return path

    raise FileNotFoundError(f"Could not find source asset: {basename}")


def load_rgba(path: Path) -> Image.Image:
    return Image.open(path).convert("RGBA")


def paste_with_alpha(base: Image.Image, overlay: Image.Image, xy: tuple[int, int]) -> None:
    base.alpha_composite(overlay, dest=xy)


def fit_width(image: Image.Image, width: int) -> Image.Image:
    height = round(image.height * width / image.width)
    return image.resize((width, height), Image.Resampling.LANCZOS)


def scale_alpha(image: Image.Image, opacity: float) -> Image.Image:
    output = image.copy().convert("RGBA")
    r, g, b, alpha = output.split()
    alpha = alpha.point(lambda value: int(value * opacity))
    return Image.merge("RGBA", (r, g, b, alpha))


def tint_rgba(image: Image.Image, color: tuple[int, int, int]) -> Image.Image:
    output = Image.new("RGBA", image.size, color + (0,))
    output.putalpha(image.getchannel("A"))
    return output


def translate_doc_bbox(bbox: tuple[int, int, int, int]) -> tuple[int, int, int, int]:
    x, y = CERTIFICATE_OFFSET
    left, top, right, bottom = bbox
    return (left + x, top + y, right + x, bottom + y)


def make_certificate_shadow(
    size: tuple[int, int], offset: tuple[int, int], doc_size: tuple[int, int]
) -> Image.Image:
    shadow = Image.new("RGBA", size, (0, 0, 0, 0))
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    x, y = offset
    draw.rectangle((x, y, x + doc_size[0], y + doc_size[1]), fill=105)
    blurred = mask.filter(ImageFilter.GaussianBlur(28))
    shadow.putalpha(blurred)
    return shadow


def draw_antialiased_ellipse(
    base: Image.Image,
    bbox: tuple[int, int, int, int],
    color: tuple[int, int, int, int],
    width: int,
) -> None:
    scale = 4
    layer = Image.new("RGBA", (base.width * scale, base.height * scale), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    scaled_bbox = tuple(value * scale for value in bbox)
    draw.ellipse(scaled_bbox, outline=color, width=width * scale)
    layer = layer.resize(base.size, Image.Resampling.LANCZOS)
    base.alpha_composite(layer)


def add_watermarks(canvas: Image.Image, logo: Image.Image) -> None:
    logo = fit_width(logo, 520)
    logo = tint_rgba(logo, (61, 76, 70))
    logo = scale_alpha(logo, 0.085)
    logo = logo.rotate(-22, expand=True, resample=Image.Resampling.BICUBIC)

    for position in WATERMARK_POSITIONS:
        paste_with_alpha(canvas, logo, position)


def add_connector(canvas: Image.Image) -> None:
    mask = Image.new("L", canvas.size, 0)
    mask_draw = ImageDraw.Draw(mask)

    ring_bbox = translate_doc_bbox(TITLE_RING_DOC_BBOX)
    lens_left, lens_top, _, lens_bottom = ZOOM_CIRCLE_CANVAS_BBOX
    ring_mid_y = (ring_bbox[1] + ring_bbox[3]) // 2
    points = [
        (ring_bbox[2] - 22, ring_mid_y - 16),
        (lens_left + 36, lens_top + 160),
        (lens_left + 36, lens_bottom - 160),
        (ring_bbox[2] - 22, ring_mid_y + 16),
    ]
    mask_draw.polygon(points, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(7))

    connector = Image.new("RGBA", canvas.size, (72, 76, 78, 0))
    connector_alpha = Image.new("L", canvas.size, 0)
    connector_alpha_pixels = connector_alpha.load()
    mask_pixels = mask.load()
    x0 = ring_bbox[2] - 26
    x1 = lens_left + 36
    y0 = lens_top + 135
    y1 = lens_bottom - 135
    span = max(x1 - x0, 1)
    for x in range(max(x0, 0), min(x1 + 1, canvas.width)):
        opacity = int(14 + 58 * ((x - x0) / span))
        for y in range(max(y0, 0), min(y1 + 1, canvas.height)):
            connector_alpha_pixels[x, y] = int(opacity * (mask_pixels[x, y] / 255))

    connector.putalpha(connector_alpha.filter(ImageFilter.GaussianBlur(2)))
    canvas.alpha_composite(connector)


def add_red_title_ring(canvas: Image.Image) -> None:
    bbox = translate_doc_bbox(TITLE_RING_DOC_BBOX)
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw_antialiased_ellipse(shadow, bbox, (225, 29, 57, 92), 26)
    shadow = shadow.filter(ImageFilter.GaussianBlur(5))
    canvas.alpha_composite(shadow)
    draw_antialiased_ellipse(canvas, bbox, (226, 16, 48, 238), 13)
    inner_bbox = (bbox[0] + 10, bbox[1] + 8, bbox[2] - 10, bbox[3] - 8)
    draw_antialiased_ellipse(canvas, inner_bbox, (255, 114, 128, 150), 3)


def add_zoom_lens(canvas: Image.Image, certificate: Image.Image) -> None:
    left, top, right, bottom = ZOOM_CIRCLE_CANVAS_BBOX
    diameter = right - left
    crop = certificate.crop(ZOOM_CROP_DOC_BBOX)
    zoom = crop.resize((diameter, diameter), Image.Resampling.LANCZOS)

    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    shadow_mask = Image.new("L", canvas.size, 0)
    shadow_draw = ImageDraw.Draw(shadow_mask)
    shadow_draw.ellipse((left + 14, top + 20, right + 14, bottom + 20), fill=135)
    shadow.putalpha(shadow_mask.filter(ImageFilter.GaussianBlur(22)))
    canvas.alpha_composite(shadow)

    mask = Image.new("L", (diameter, diameter), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.ellipse((0, 0, diameter - 1, diameter - 1), fill=255)
    canvas.paste(zoom, (left, top), mask)

    lens_layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(lens_layer)
    draw.ellipse((left, top, right, bottom), outline=(92, 95, 95, 215), width=5)
    draw.ellipse((left + 10, top + 10, right - 10, bottom - 10), outline=(255, 255, 255, 92), width=3)
    canvas.alpha_composite(lens_layer)


def add_layout_guide(final_image: Image.Image) -> Image.Image:
    guide = final_image.copy()
    draw = ImageDraw.Draw(guide)
    font = ImageFont.load_default()
    ring_bbox = translate_doc_bbox(TITLE_RING_DOC_BBOX)
    crop_bbox = translate_doc_bbox(ZOOM_CROP_DOC_BBOX)
    lens_bbox = ZOOM_CIRCLE_CANVAS_BBOX

    draw.rectangle(crop_bbox, outline=(0, 120, 255, 220), width=5)
    draw.text((crop_bbox[0], crop_bbox[1] - 18), "zoom crop source", fill=(0, 90, 210), font=font)
    draw.rectangle(lens_bbox, outline=(0, 140, 80, 220), width=5)
    draw.text((lens_bbox[0], lens_bbox[1] - 18), "zoom lens", fill=(0, 120, 70), font=font)
    draw.rectangle(ring_bbox, outline=(255, 0, 0, 220), width=4)
    draw.text((ring_bbox[0], ring_bbox[1] - 18), "red title ring", fill=(220, 0, 0), font=font)
    return guide


def compose() -> Image.Image:
    certificate_path = resolve_asset(MOSAIC_CERTIFICATE, "골프장갑_특허권_모자이크.jpg")
    logo_path = resolve_asset(POLVERT_LOGO, "폴베르 신형로고_투명배경_한글포함.png")

    certificate = load_rgba(certificate_path)
    logo = load_rgba(logo_path)
    canvas = Image.new("RGBA", CANVAS_SIZE, (255, 255, 255, 255))

    shadow = make_certificate_shadow(CANVAS_SIZE, CERTIFICATE_OFFSET, certificate.size)
    canvas.alpha_composite(shadow)
    paste_with_alpha(canvas, certificate, CERTIFICATE_OFFSET)

    border_draw = ImageDraw.Draw(canvas)
    x, y = CERTIFICATE_OFFSET
    border_draw.rectangle(
        (x, y, x + certificate.width, y + certificate.height),
        outline=(224, 224, 224, 255),
        width=2,
    )

    add_watermarks(canvas, logo)
    add_connector(canvas)
    add_red_title_ring(canvas)
    add_zoom_lens(canvas, certificate)
    return canvas


def save_outputs(final_rgba: Image.Image) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    draft_path = OUTPUT_DIR / "polvert-patent-certificate-draft.png"
    final_path = OUTPUT_DIR / "polvert-patent-certificate-final.jpg"
    guide_path = OUTPUT_DIR / "polvert-patent-certificate-layout-guide.png"

    final_rgba.save(draft_path)
    final_rgba.convert("RGB").save(final_path, quality=92, optimize=True, progressive=True)
    add_layout_guide(final_rgba).save(guide_path)

    for path in (draft_path, final_path, guide_path):
        print(path.relative_to(REPO_ROOT))


def main() -> int:
    try:
        save_outputs(compose())
    except Exception as exc:
        print(f"Failed to generate Polvert patent certificate: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
