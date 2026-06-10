# Polvert Patent Certificate Edit Design

Date: 2026-06-10
Status: Approved for implementation planning

## Goal

Create a public-facing Polvert patent certificate image for product detail or promotional use. The image should prove the patent visually while keeping private or identifying details protected.

## Source Assets

- Patent original: `/Users/micaelclaw/Library/CloudStorage/GoogleDrive-micaelclaw@gmail.com/내 드라이브/골프장갑_특허권_1783803_page-0001.jpg`
- Existing mosaic reference: `/Users/micaelclaw/Library/CloudStorage/GoogleDrive-micaelclaw@gmail.com/내 드라이브/골프장갑_특허권_모자이크.jpg`
- Visual style reference: `/Users/micaelclaw/Library/CloudStorage/GoogleDrive-micaelclaw@gmail.com/내 드라이브/골프장갑_특허권_모자이크_규담터_강조_액자.jpg`
- Polvert logo watermark: `/Users/micaelclaw/Library/CloudStorage/GoogleDrive-micaelclaw@gmail.com/내 드라이브/그린펏 인수인계 공유자료/04_폴베르_장갑_상품자료/04_폴베르_로고_신형_구형/폴베르 신형로고_투명배경_한글포함.png`

## Visual Direction

Use the uploaded style reference as the main direction: a certificate image with privacy mosaic, a red oval around the invention title, and a large circular zoom callout. Keep the result suitable for a product detail page, not a purely official document scan.

Blend in a restrained brand feel:

- The red oval remains because it is immediately readable in commerce/detail-page context.
- The Polvert watermark repeats across the certificate like the reference image.
- Watermark opacity stays low so the certificate text remains legible.
- The final certificate sits in a subtle frame/shadow treatment similar to the reference image.

## Highlight Scope

Highlight only the invention title:

```text
오른손 골퍼용 오른손 장갑
```

Do not call out the patent number, application number, registration date, patentee, inventor, QR code, address, or other identifying details.

## Mosaic Scope

Use the existing mosaic reference as the privacy baseline. The edited certificate should preserve the same public-safe information balance:

- Keep the document title and invention title readable.
- Keep private names, addresses, resident/company identifying numbers, QR code, and lower-right verification details obscured.
- Keep patent/application/date areas obscured at the same level as the existing mosaic image.

## Production Approach

Use a hybrid workflow:

1. Generate a repeatable first draft with a script.
2. Export a high-resolution `draft.png` and `final.jpg`.
3. If necessary, use Figma or another manual editor only for minor visual tuning.

The script should composite these layers in order:

1. Framed certificate base using the mosaic-safe certificate.
2. Repeated diagonal Polvert logo watermarks.
3. Red oval around the invention title.
4. Grey gradient connector from the title area to the zoom lens.
5. Circular zoom lens showing an enlarged crop of the invention title area.
6. Final shadow/frame treatment.

## Output Location

Create a dedicated asset folder:

```text
prototype/assets/polvert/patent-certificate/
```

Expected outputs:

- `polvert-patent-certificate-final.jpg`: compressed final image for website/detail-page use.
- `polvert-patent-certificate-draft.png`: lossless or low-compression review image.
- `polvert-patent-certificate-layout-guide.png`: guide image showing ring, lens, connector, and watermark placement.
- `README.md`: source assets, generation command, major coordinates, and review notes.

## Success Criteria

- The invention title is the immediate focal point.
- Private or identifying details remain protected at least as strongly as the existing mosaic reference.
- The watermark clearly uses the provided Polvert logo and appears diagonal/repeated like the style reference.
- The certificate still feels credible and readable, not over-decorated.
- The output can be reused in a website or product detail page without needing the source Google Drive files.
