# GreenPutt Home Prototype

This directory contains the first custom homepage prototype for GreenPutt.

## Preview

Run from the repository root:

```bash
python3 -m http.server 4173 --directory prototype
```

Open:

`http://localhost:4173/`

## Intent

- Use a campaign-led first viewport.
- Balance the selected tone: premium 60%, technology clarity 40%.
- Keep each homepage section modular enough to export as an Imweb image, video, or content block.
- Bridge Polvert purchase traffic into Imweb as `GreenPutt StorePick`.
- Keep Imweb responsible for payment, member, order, shipping, cancellation, refund, support, and database-backed pages.

## Current Bridge Targets

- Polvert product: `https://greenputt.kr/all_products/?idx=77`
- Cart: `https://greenputt.kr/shop_cart`
- Inquiry fallback: `https://greenputt.kr/contact`
