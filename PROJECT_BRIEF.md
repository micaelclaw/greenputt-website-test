# Project Brief

## Project

- Name: GreenPutt website
- Repository: https://github.com/micaelclaw/greenputt-website-test
- Status: Planning
- Planning date: 2026-05-26

## Purpose

Plan a premium golf/putting brand website before implementation. The site should introduce GreenPutt as a credible putting-focused brand, organize product and support content, and prepare for later replacement of generated visuals with real product photography once prototypes are ready.

## Product Line

- Initial sale product: Paulver golf glove. This can be the first real commerce item while GreenPutt's own products are still in prototype development.
- Putter / smart putting assistant: prototype/concept materials exist. Core story is projection-based distance feedback that helps prevent head-up during putting practice.
- Putting mat: concept/render materials exist. Should communicate indoor practice value, distance feedback, and putting improvement.
- Rangefinder / distance-measurement device: prototype drawings and render materials exist. Should sit naturally within the same golf performance brand without making the website feel unfocused.

## Audience

- Primary audience: Korean golfers interested in improving putting and short-game performance.
- Likely early buyers: golfers who practice at home, players who care about equipment feel and precision, and shoppers comparing premium golf accessories.
- Decision needed: whether GreenPutt should speak more to serious performance golfers, premium lifestyle golfers, beginner/improvement golfers, or a balanced mix.

## Website Goals

- Make the first viewport clearly signal a golf/putting brand, not a generic commerce site.
- Build trust before final product photography exists.
- Present the three product categories in a coherent structure: putter, mat, rangefinder.
- Support the initial Paulver golf glove sales path without making GreenPutt's long-term putting/putter positioning feel secondary.
- Prepare a basic commerce/support structure similar to the current Imweb site: home, product pages, FAQ, 1:1 inquiry, notice/customer support.
- Use the website as a content and design foundation that can later move into a more custom implementation if needed.

## Brand And Design Direction

- Desired feel: premium, precise, performance-oriented, calm, and product-forward.
- Positioning: putting practice/improvement brand plus putter-centered premium brand.
- Visual reference: Titleist Korea homepage uses large photographic campaign sections, strong product/category navigation, product recommendations, stories, and support links.
- Visual reference: Crossputt emphasizes putter identity, product close-ups, video, reflection-style product presentation, and a focused putter/category navigation.
- GreenPutt direction: combine a premium first-viewport hero with polished product renders or AI-generated hero assets, then support it with practical product/category sections.
- Existing asset candidate: `홈페이지 제작/1.메인/메인(Heads Down. Data On).jpeg` is a strong first homepage hero direction.
- Existing message candidate: `Heads Down. Data On.`
- Avoid generic golf-stock imagery, decorative gradients, and filler landing-page copy.
- Copy should be concise and confidence-building; final tone is still to be decided.

## Core Pages Or Features

- Home: premium hero, product category highlights, featured product story, video/image section, brand promise, support entry points.
- Paulver golf glove product page: first commerce-ready product page with purchase CTA, product images, size/options, shipping/return guidance, and credibility copy.
- Putter page: product concept, visual showcase, technology/design story, specs placeholder, inquiry or waitlist CTA.
- Putting mat page: practice scenario, surface/roll/value story, size/spec placeholder, inquiry or waitlist CTA.
- Rangefinder page: use case, feature story, specs placeholder, inquiry or waitlist CTA.
- Shop/product listing: can start as category/product cards while prototypes are not yet ready for full purchase flow.
- FAQ: shipping, launch timing, product readiness, support, A/S, purchase questions.
- Notice: launch updates, prototype progress, preorder announcements if used.
- 1:1 inquiry: customer questions and early lead capture.
- About/Brand story: optional, but useful if GreenPutt needs credibility before product photos and reviews exist.

## Content And Assets

- Real product photos are not available yet because all three products are still in prototype development.
- Use existing AI-generated or rendered product visuals for the first version, with clear internal tracking so they can be replaced later.
- Asset inventory: see `ASSET_INVENTORY.md`.
- Needed assets:
  - Product concept descriptions for putter, mat, and rangefinder.
  - Any sketches, CAD captures, prototype snapshots, dimensions, or material notes.
  - Brand name usage rules, logo files, color preferences, and references the founder likes/dislikes.
  - Existing Imweb screenshots or exported structure if direct inspection is not available.
  - Reference sites and specific sections to emulate.
- Recommended Google Drive structure if shared assets are used:
  - `GreenPutt Website/00_Brief_And_Notes`
  - `GreenPutt Website/01_Brand`
  - `GreenPutt Website/02_Product_Putter`
  - `GreenPutt Website/03_Product_Mat`
  - `GreenPutt Website/04_Product_Rangefinder`
  - `GreenPutt Website/05_Product_Paulver_Glove`
  - `GreenPutt Website/06_References`
  - `GreenPutt Website/07_AI_Image_Work`
  - `GreenPutt Website/08_Imweb_Current_Site`
  - `GreenPutt Website/99_Inbox_To_Sort`
- Do not modify unrelated existing folders named `micaelclaw_monitoring`, `micaelclaw_scripts`, `micaelclaw_ballmark`, or `전문편성채널 모니터링`.
- Uploaded assets have been sorted out of `99_Inbox_To_Sort`. The working Drive folder should stay focused on public website planning and assets; private/admin materials are intentionally excluded from this project folder.

## Tooling Direction

- Figma is useful for professional visual design, especially once the homepage structure, product hierarchy, and brand mood are clearer.
- Recommended sequence for this project:
  - First: define sitemap, section order, copy needs, and asset list in this brief.
  - Second: create a low-maintenance web prototype or Imweb-informed wireframe so the structure is testable.
  - Third: use Figma for high-fidelity homepage/product-page design if precise visual direction, handoff, or designer collaboration becomes important.
  - Fourth: manage AI image generation as a separate asset track with prompts, selected outputs, source references, and replacement status.
- Figma is not required before deciding content structure. It becomes valuable when choosing exact layouts, visual rhythm, typography, image crops, and responsive variants.
- If the website will remain mostly inside Imweb, Figma should be light and section-focused rather than a full design system. If the website will be custom-built, Figma can become the main design source.

## Platform Direction

- Imweb has already been paid for three years, so it should be treated as a useful operating asset unless its limitations block the product direction.
- Near-term option: keep Imweb for checkout, payment, order management, customer support pages, and basic product sales while using a separate custom site for premium brand storytelling.
- Mid-term option: build a custom GreenPutt site for brand, content, member experience, articles/notices, lead capture, and product storytelling, then link purchase CTAs to Imweb checkout/product pages.
- Long-term option: replace Imweb with a custom commerce platform only after the requirements for membership, payments, order management, 게시글/notice/FAQ databases, admin workflows, coupons, shipping, refunds, and analytics are clear.
- Recommended current path: do not fully replace Imweb immediately. Use it for Paulver glove sales and operational reliability first, while planning the custom site architecture in parallel.
- Key reason: custom membership, payment, order, customer support, and database administration is a full product system, not only a visual website. It should be planned deliberately before replacing a paid working platform.
- Uploaded platform reference document also frames Imweb as a strong Korean all-rounder for homepage + shopping mall, domestic PG, and Naver SEO. This supports keeping Imweb for near-term checkout/order operations.

## Current Site Context

- The existing Imweb site is accessible in the logged-in Chrome session at `imweb.me/mysite`.
- The active site card is `그린펏(Greenputt)` with domain `greenputt.kr` and Imweb preview/public URL `greenputt.imweb.me`.
- Public homepage captures are stored in `GreenPutt Website/08_Imweb_Current_Site/Screenshots`.
- Current visible navigation includes `제로 헤드업`, `폴베르 장갑`, `고객센터`, language selector, login, cart, and search.
- The current homepage already uses the `Heads Down. Data On` direction and a laser/putting hero image, so the next version should refine rather than discard this concept.
- Admin screen capture could not be saved via macOS `screencapture` because desktop capture was blocked, but the logged-in structure was inspected without changing settings.

## Open Decisions

- Primary customer segment and brand tone.
- Whether the first launch should sell products, collect leads/waitlist interest, or mainly build brand credibility before prototypes are finished.
- Whether Paulver golf glove should be presented as a GreenPutt store product, a partner/import product, or a separate early commerce test product.
- Whether `Heads Down. Data On.` should become the main homepage campaign line.
- Whether Figma should be introduced now, after wireframes, or only if custom implementation becomes likely.
- Exact AI image style: realistic studio product render, dark premium reflection, lifestyle putting scene, or a mixed system.
- Whether video should be a generated brand/product motion piece, a future prototype shoot, or a lightweight web animation in the first phase.
- Scope of custom platform replacement: brand site only, member/content site, or full commerce/admin platform.

## Maintenance Notes

- Keep decisions in this file when they affect future development.
- Update this brief before or during major design, content, or architecture changes.
- Keep generated image prompts and final selected assets organized so future real product photography can replace them cleanly.
- Do not rewrite unrelated files.
