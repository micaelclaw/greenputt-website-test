# Polvert Patent Certificate Asset

Generated public-facing patent certificate asset for Polvert product/detail-page use.

## Outputs

- `polvert-patent-certificate-final.jpg`: compressed website-ready export.
- `polvert-patent-certificate-draft.png`: higher-quality review export.
- `polvert-patent-certificate-layout-guide.png`: coordinate guide showing title ring, zoom crop source, and zoom lens placement.

## Generator

Run from the repository root:

```bash
python3 scripts/generate_polvert_patent_certificate.py
```

The generator uses Python 3 and Pillow.

## Source Assets

The source images stay in Google Drive and are not copied into this repository.

- Mosaic-safe certificate: `/Users/micaelclaw/Library/CloudStorage/GoogleDrive-micaelclaw@gmail.com/내 드라이브/골프장갑_특허권_모자이크.jpg`
- Polvert transparent logo: `/Users/micaelclaw/Library/CloudStorage/GoogleDrive-micaelclaw@gmail.com/내 드라이브/그린펏 인수인계 공유자료/04_폴베르_장갑_상품자료/04_폴베르_로고_신형_구형/폴베르 신형로고_투명배경_한글포함.png`

## Coordinates

Coordinates are based on the `2482 x 3510` mosaic-safe certificate before it is placed on the final canvas.

- Final canvas: `2654 x 3682`
- Certificate offset on canvas: `(86, 86)`
- Title ring document bbox: `(132, 1360, 790, 1542)`
- Zoom crop document bbox: `(112, 1290, 850, 2028)`
- Zoom lens canvas bbox: `(1290, 1035, 2392, 2137)`

## Privacy Notes

The committed outputs are generated from the already mosaic-safe certificate image. The unredacted original patent scan is not copied into the repository and is not used as the zoom crop source.

Before using the asset publicly, verify that private names, addresses, QR code content, and identifying registration details remain obscured at least as strongly as the original mosaic-safe certificate.
