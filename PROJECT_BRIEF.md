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
- Product naming decision: `펏트너(PUTTNER)` refers to the GreenPutt putting system that combines the golf mat and distance-measurement feedback device. Use GreenPutt as the brand and 펏트너(PUTTNER) as the product/system name in hero and product copy.

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
- GreenPutt direction: use a campaign-led first impression inspired by Titleist's trust and scale, then structure the homepage as modular exportable sections inspired by a product system. Crossputt's product focus should inform close-up product and technology storytelling without making GreenPutt feel limited to only putters.
- Current selected homepage concept: an A+B hybrid, with `Campaign-Led Home` as the main emotional direction and `Exportable System Home` as the structure. Each major section should be usable later as an Imweb image, video, or content block.
- Updated prototype direction: `Premium Putting Film`. Use actual GreenPutt system render and Polvert assets first, with Titleist-scale campaign framing and Crossputt-style product immersion. The homepage should feel like a premium golf product film rather than a generic landing page.
- Identity refresh direction: `GreenPutt Signal System`. The homepage should feel interactive through distance signals, scan lines, hover-responsive product stages, and canvas-based putting trajectory overlays. References like Titleist, Crossputt, Spline, or AI-generated 3D examples are inputs only; the GreenPutt identity is the near-ball data signal and zero-head-up routine.
- 3D section exploration: the frontend team should consider one restrained Spline-style or WebGL/Three.js-style section for the GreenPutt system, focused on the distance feedback device, projected number, putter, ball, and mat relationship. It should clarify one product-story moment rather than replace the first hero image.
- Existing asset candidate: `홈페이지 제작/1.메인/메인(Heads Down. Data On).jpeg` is a strong first homepage hero direction.
- Existing message candidate: `Heads Down. Data On.`
- Avoid generic golf-stock imagery, decorative gradients, and filler landing-page copy.
- Copy direction selected: write primary homepage copy in natural Korean with a concise, premium rhythm. Keep English only for brand/product names where it helps recognition; avoid literal translation, internal design commentary, and mixed Korean/English filler.

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

Design specification:

- The approved planning direction is documented in `docs/superpowers/specs/2026-05-27-greenputt-hybrid-home-design.md`.
- The updated premium visual direction is documented in `docs/superpowers/specs/2026-05-27-greenputt-premium-putting-film-design.md`.
- The homepage should be treated as a custom prototype and content laboratory, while database-backed operational surfaces can remain in Imweb.
- Every homepage section should have a clear export path so it can later become an Imweb content block, image, video, or reference for a production design.

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
  - Preserve product logos, patches, engraved marks, and signature brand details when they are already present on reference products. For Polvert especially, the glove logo is a key product signal and must be checked before accepting a candidate.
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
- Current prototype-selected web assets are documented in `docs/agent-studio/image-lab-log.md`. Local AI candidates were resized into `prototype/assets/greenputt-hero-signal.jpg`, `greenputt-system-closeup.jpg`, `greenputt-lineup-showcase.jpg`, `greenputt-polvert-showcase.jpg`, and `greenputt-putter-macro.jpg` for performance.
- 2026-05-27 prototype refinement: Polvert homepage imagery should use the original Polvert glove and logo source files under `05_Product_Polvert_Glove/000.폴베르자료실` rather than generated GreenPutt-branded glove placeholders. The current local replacement asset is `prototype/assets/polvert-showcase-real.jpg`, with the logo copied as `prototype/assets/polvert-logo.png`.
- 2026-05-27 Polvert StorePick correction: do not let AI invent the Polvert logo. Generate wearing/use shots with a blank black glove patch, then composite the actual `05_Product_Polvert_Glove/폴베르_로고.jpg` mark in white onto the patch. The logo should be rotated on the patch like the real microfiber right-hand glove reference, not placed upright. The v10 set isolates the largest dark connected component as the actual patch, builds a minimum-area rotated bounding box from the space occupied by that patch, centers the rotated logo on the rotated box crosshair, tilts the logo with the box's horizontal axis, and scales the logo from the rotated box long side. Final generated exports are mirrored into Google Drive at `GreenPutt Website/11_Final_Web_Exports/Polvert/StorePick_Logo_Locked`.
- 2026-06-05 Polvert StorePick new-logo update: the active StorePick image is `prototype/assets/polvert/logo-locked-v11-new-logo/polvert-storepick-logo-locked-new-logo-homepage-hero.jpg`; use this same image for the StorePick section, Polvert lineup card thumbnail, and selected stage slide so the thumbnail and slide stay visually matched. The exact no-logo original for the 1657x949 homepage scene was not retained in Drive, so v11 preserves the v10 scene, removes the old white logo strokes from the black patch, and composites `POLVERT_LOGO_NEW_BLACK_BG-TRANSPARENT_ORIGINAL.png` as a white alpha mark. Placement follows the v10 homepage patch rotated box: center `(1164.5, 376.5)`, horizontal patch axis `19.8deg`, logo angle `160.2deg`, selected local logo width `185px`. Keep `polvert-storepick-new-logo-axis-check.jpg` and `polvert-storepick-new-logo-contact-sheet.jpg` as the alignment proof.
- 2026-05-28 Polvert file organization: use `docs/agent-studio/polvert-file-organization-guide.md` as the version-controlled source of truth for Polvert glove folder structure, product codes, logo/label naming, and AI/final-export file naming. Product material folders are `PV01_MICROFIBER`, `PV02_MESH`, `PV03_SHEEPSKIN`, and `PV04_WINTER_SHEEPSKIN_WOOL`. The same guide is mirrored in Google Drive at `05_Product_Polvert_Glove/POLVERT_FILE_ORGANIZATION_GUIDE.md`.
- User-uploaded reference video `GreenPutt Website/99_Inbox_To_Sort/그린펏 시현 예상도.mp4` clarifies the core interaction: after the putt, the ball can roll away while the golfer keeps their gaze near the address/display point and reads a digital distance number there. The homepage interaction should show this principle directly rather than abstract steps like stroke/measure/display/repeat.
- Zero Head-Up principle demos should change phase only on hover, focus, or click, not while scrolling. The visual should keep the mat, putter, display box, and ball geometry consistent on mobile and desktop.
- The hero should keep the golfer readable as a product-use scene: place copy on a calmer dark area of the image, avoid covering the putting posture, and let pointer-responsive signal motion imply repeated putts.
- The lineup section should read as its own editorial/product chapter with restrained heading scale and a clear explanation of each product's role in one putting routine. Product changes should be controlled as a carousel/slider, not by hover-only stage changes.
- Official GreenPutt favicon source: `GreenPutt Website/01_Brand/Favicons/그린펏_favicons_투명배경.png`. Use this transparent brand mark for favicon/browser icon exports; do not invent alternate favicon artwork.
- The custom homepage should keep its composition inside a centered maximum layout width on large monitors. QHD and ultrawide screens should preserve the MacBook-approved hero rhythm instead of stretching section grids or carousel controls across the full viewport.
- Product carousel cards may use commerce close-ups, but stage images should use stable wide-aspect product scenes so active slides preserve visual scale across QHD and ultrawide displays.

## Tooling Direction

- Figma is useful for professional visual design, especially once the homepage structure, product hierarchy, and brand mood are clearer.
- Recommended sequence for this project:
  - First: define sitemap, section order, copy needs, and asset list in this brief.
- Second: create a low-maintenance custom web prototype with content structure, product behavior, and Imweb bridge purchase flows.
  - Third: use Figma if high-fidelity homepage/product-page design, designer collaboration, or exact visual rhythm becomes important.
  - Fourth: manage AI image generation as a separate asset track with prompts, selected outputs, source references, and replacement status.
- Figma is not required before deciding content structure. It becomes valuable when choosing exact layouts, visual rhythm, typography, image crops, and responsive variants.
- Since the direction is now a custom website, Figma can become useful after the sitemap and wireframe-level section structure are clear. It should not block the first requirements and prototype work.
- Spline or similar 3D design tools can be evaluated after the static prototype proves the story flow. Keep a static image fallback for Imweb export, mobile performance, accessibility, and slower devices.

## Platform Direction

- Direction changed: use a custom GreenPutt front-end site with Imweb as the bridge/backend for commerce operations.
- Updated direction: keep Imweb as the operational system for commerce and database-backed content, and use the custom homepage as an experimental premium front door and exportable content source.
- Domain routing and rollback details are documented in `docs/operations/greenputt-domain-routing-guide.md`; use that guide before changing Gabia, GitHub Pages, or Imweb domain settings.
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
- The first custom homepage implementation artifact lives in `prototype/`. It is a static experimental prototype for campaign direction, section rhythm, and Imweb-exportable content structure.
- Agent workflow decisions now live in `docs/agent-studio/greenputt-agent-studio.md`.
- Security posture and gstack `/cso` checklist decisions now live in `docs/agent-studio/cso-security-checklist.md`.
- Do not rewrite unrelated files.
