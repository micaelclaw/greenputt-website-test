# Project Brief

## Project

- Name: GreenPutt website
- Repository: https://github.com/micaelclaw/greenputt-website-test
- Status: Planning
- Planning date: 2026-05-26

## Purpose

Plan a premium golf/putting brand website before implementation. The site should introduce GreenPutt as a credible putting-focused brand, organize product and support content, and prepare for later replacement of generated visuals with real product photography once prototypes are ready.

## Product Line

- Initial sale product: Polvert golf glove. This can be the first real commerce item while GreenPutt's own products are still in prototype development.
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
- Support the initial Polvert golf glove sales path without making GreenPutt's long-term putting/putter positioning feel secondary.
- Build a custom front-end website that Codex can maintain from the repository while using Imweb as the operational commerce backend.
- Keep payment, order, member, shipping, and fulfillment operations in Imweb for the first phase.
- Use the custom site for premium brand storytelling, product presentation, prototype inquiry/reservation, and polished navigation into Imweb purchase flows.

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
- Zero Head-Up: core campaign/technology story explaining the putting problem, head-up prevention, distance feedback, and why GreenPutt exists.
- Products listing: product-card structure for putter, putting mat, rangefinder, and Polvert.
- Polvert golf glove product page: first commerce-ready product story page with purchase CTA that bridges to the Imweb product/checkout flow.
- Putter page: product concept, visual showcase, technology/design story, specs placeholder, reservation/inquiry CTA.
- Putting mat page: practice scenario, surface/roll/value story, size/spec placeholder, reservation/inquiry CTA.
- Rangefinder page: use case, feature story, specs placeholder, reservation/inquiry CTA.
- FAQ: shipping, launch timing, product readiness, support, A/S, purchase questions.
- Notice: launch updates, prototype progress, preorder announcements if used.
- 1:1 inquiry: customer questions and early lead capture.
- About/Brand story: optional, but useful if GreenPutt needs credibility before product photos and reviews exist.

## Sitemap And Navigation Direction

Primary navigation:

- `Home`
- `Zero Head-Up`
- `Products`
- `Polvert`
- `Support`

Suggested support subpages:

- `FAQ`
- `Notice`
- `1:1 Inquiry`
- `Shipping / Returns`

Products should be structured so all four products can appear in one catalog-like system, while purchase behavior differs by product readiness:

- Polvert: visible as a `Selected Product` and available for actual purchase through Imweb.
- Putter, putting mat, rangefinder: visible as GreenPutt product concepts with reservation, inquiry, or waitlist CTA instead of immediate checkout.

## Homepage Section Wireframe

Working section order:

1. Hero campaign
   - Message: `Heads Down. Data On.`
   - Role: instantly signal a premium golf/putting brand.
   - Visual direction: Titleist-like large photographic golf scene or generated image, not a generic product grid.
2. Zero Head-Up problem/solution
   - Explain the head-up putting problem and the value of checking distance feedback without lifting the head.
   - Use concise benefit copy backed by the existing product narrative.
3. Product system overview
   - Cards or campaign bands for putter, putting mat, rangefinder, and Polvert.
   - GreenPutt prototype products should feel like a coherent performance system.
4. Featured technology/use scene
   - Show the projected distance feedback concept, indoor putting practice scenario, or reflective product presentation inspired by Crossputt.
5. Polvert selected product band
   - Present Polvert as a curated golf glove product that can be purchased now through Imweb.
   - Keep it visually connected to the golf performance story without making it look like GreenPutt's core invention.
   - Purchase CTA should make the transition to Imweb feel intentional, and users should be able to return to the custom site without losing context.
6. Trust/support entry
   - FAQ, Notice, 1:1 Inquiry, shipping/returns, and support links.
   - Useful because prototypes and AI-generated visuals require extra trust-building.

## Content And Assets

- Real product photos are not available yet because all three products are still in prototype development.
- Use existing AI-generated or rendered product visuals for the first version, with clear internal tracking so they can be replaced later.
- Use `Polvert` as the English spelling for 폴베르.
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
  - `GreenPutt Website/05_Product_Polvert_Glove`
  - `GreenPutt Website/06_References`
  - `GreenPutt Website/07_AI_Image_Work`
  - `GreenPutt Website/08_Imweb_Current_Site`
  - `GreenPutt Website/09_Selected_For_Website`
  - `GreenPutt Website/10_AI_Image_Prompts`
  - `GreenPutt Website/11_Final_Web_Exports`
  - `GreenPutt Website/12_To_Review`
  - `GreenPutt Website/99_Inbox_To_Sort`
- Recommended AI image workflow:
  - Track 1: golf-brand atmosphere images that make the homepage feel like a premium golf website, similar in role to Titleist's large campaign photography.
  - Track 2: GreenPutt product concept/use images for the putting mat, rangefinder/distance feedback device, projected-number scene, and indoor practice situations.
  - Polvert track: use existing glove assets as references, then generate additional wearing shots, grip shots, and golf-use lifestyle shots.
  - Keep prompts, reference inputs, generated candidates, selected outputs, and final web exports in separate folders so replacement with real photography remains manageable.
- Newly created working folders:
  - `GreenPutt Website/09_Selected_For_Website`
  - `GreenPutt Website/10_AI_Image_Prompts/01_Golf_Brand_Atmosphere`
  - `GreenPutt Website/10_AI_Image_Prompts/02_GreenPutt_Product_Concepts`
  - `GreenPutt Website/10_AI_Image_Prompts/03_Polvert_Glove_Use_Shots`
  - `GreenPutt Website/11_Final_Web_Exports/Home`
  - `GreenPutt Website/11_Final_Web_Exports/Products`
  - `GreenPutt Website/11_Final_Web_Exports/Polvert`
  - `GreenPutt Website/12_To_Review/01_User_Uploads`
  - `GreenPutt Website/12_To_Review/02_AI_Candidates`
- Do not modify unrelated existing folders named `micaelclaw_monitoring`, `micaelclaw_scripts`, `micaelclaw_ballmark`, or `전문편성채널 모니터링`.
- Uploaded assets have been sorted out of `99_Inbox_To_Sort`. The working Drive folder should stay focused on public website planning and assets; private/admin materials are intentionally excluded from this project folder.

## Tooling Direction

- Figma is useful for professional visual design, especially once the homepage structure, product hierarchy, and brand mood are clearer.
- Recommended sequence for this project:
  - First: define sitemap, section order, copy needs, and asset list in this brief.
- Second: create a low-maintenance custom web prototype with content structure, product behavior, and Imweb bridge purchase flows.
  - Third: use Figma if high-fidelity homepage/product-page design, designer collaboration, or exact visual rhythm becomes important.
  - Fourth: manage AI image generation as a separate asset track with prompts, selected outputs, source references, and replacement status.
- Figma is not required before deciding content structure. It becomes valuable when choosing exact layouts, visual rhythm, typography, image crops, and responsive variants.
- Since the direction is now a custom website, Figma can become useful after the sitemap and wireframe-level section structure are clear. It should not block the first requirements and prototype work.

## Platform Direction

- Direction changed: use a custom GreenPutt front-end site with Imweb as the bridge/backend for commerce operations.
- Imweb should remain the system of record for first-phase payment, order, member, shipping, cancellation/refund, and fulfillment workflows.
- The custom site should own the premium brand experience:
  - Home, Zero Head-Up story, product storytelling, campaign imagery, and prototype product inquiry/reservation.
  - Polvert selected product story page and strong purchase CTA.
  - Smooth handoff into Imweb for Polvert product purchase, cart, login, and checkout.
- First custom build should be an Imweb Bridge MVP:
  - Custom product presentation for Polvert and GreenPutt prototype products.
  - Purchase links or embedded bridge flows into the existing Imweb Polvert commerce path.
  - Prototype product pages for putter, putting mat, and rangefinder with inquiry/reservation CTA.
  - FAQ, Notice, and support content may live in the custom site, Imweb, or both, but the user path should not feel fragmented.
  - No separate custom payment provider, custom order database, or full admin dashboard should be built in the first phase unless Imweb bridge testing proves insufficient.
- Back/return UX is a first-class requirement: when users enter Imweb checkout or product pages from the custom site, browser back behavior, return links, and post-purchase/support navigation should bring them back to a sensible GreenPutt context.
- Custom commerce replacement can be reconsidered later only after Imweb bridge limitations are proven through real user flow testing.

## Current Site Context

- The existing Imweb site is accessible in the logged-in Chrome session at `imweb.me/mysite`.
- The active site card is `그린펏(Greenputt)` with domain `greenputt.kr` and Imweb preview/public URL `greenputt.imweb.me`.
- Public homepage captures are stored in `GreenPutt Website/08_Imweb_Current_Site/Screenshots`.
- Current visible navigation includes `제로 헤드업`, `폴베르 장갑`, `고객센터`, language selector, login, cart, and search.
- The current homepage already uses the `Heads Down. Data On` direction and a laser/putting hero image, so the next version should refine rather than discard this concept.
- Admin screen capture could not be saved via macOS `screencapture` because desktop capture was blocked, but the logged-in structure was inspected without changing settings.

## Imweb Bridge Test Notes

- Tested on 2026-05-27 against `greenputt.kr` and `greenputt.imweb.me`.
- Public Polvert product detail URLs are stable enough for first bridge testing, for example `https://greenputt.kr/shop_view/?idx=50`.
- The cart URL is `https://greenputt.kr/shop_cart`.
- Current Polvert products are marked `SOLDOUT`, so full add-to-cart and direct-purchase checkout behavior could not be verified yet.
- The visible product-page purchase controls are Imweb JavaScript actions tied to required option selection and stock state, not simple public direct-checkout URLs.
- Bridge default for the custom site should be same-tab navigation to the Imweb product detail page first, with a clear pre-handoff message and a custom-site return path.
- Direct cart or direct checkout CTAs should remain provisional until at least one Polvert product has testable stock/options and the flow is retested end to end.

## Open Decisions

- Primary customer segment and brand tone.
- Exact balance between brand trust, Polvert sales conversion, and GreenPutt prototype reservations on the homepage.
- Exact Polvert product variants, sizes, options, and launch pricing.
- Whether `Heads Down. Data On.` should become the main homepage campaign line.
- Whether Figma should be introduced after the first wireframe/prototype or only when high-fidelity design handoff is needed.
- Exact AI image style per track: golf-brand campaign imagery, GreenPutt concept/use imagery, and Polvert wearing/use imagery.
- Whether video should be a generated brand/product motion piece, a future prototype shoot, or a lightweight web animation in the first phase.
- Which exact Polvert product detail URL should be the primary CTA target once active variants are confirmed.
- Whether a direct cart or direct checkout bridge is possible after Imweb stock/options are enabled and retested.
- Which support and inquiry flows should live on the custom site versus remain in Imweb.
- Whether future custom commerce replacement is still needed after the Imweb Bridge MVP is tested.

## Maintenance Notes

- Keep decisions in this file when they affect future development.
- Update this brief before or during major design, content, or architecture changes.
- Keep generated image prompts and final selected assets organized so future real product photography can replace them cleanly.
- Do not rewrite unrelated files.
