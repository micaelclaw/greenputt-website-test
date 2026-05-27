# GreenPutt Hybrid Home Design

Date: 2026-05-27
Status: Approved direction, ready for implementation planning

## Summary

GreenPutt's custom homepage should use a campaign-led first impression inspired by the trust and scale of Titleist, then use modular sections that can later be exported as image, video, or content blocks for Imweb. The homepage is not a full custom commerce replacement. It is a premium front door, content laboratory, and visual source system for the operational Imweb site.

The selected direction is an A+B hybrid:

- A: Campaign-Led Home as the main emotional and visual direction.
- B: Exportable System Home as the structure and maintenance strategy.

## Goals

- Make GreenPutt feel like a credible premium putting performance brand within the first viewport.
- Avoid a generic shopping mall impression.
- Keep the homepage useful even before final product photography exists.
- Make each section portable enough to become an Imweb image, video, or page block later.
- Keep Polvert purchase paths connected to Imweb while GreenPutt prototype products use inquiry, reservation, or waitlist CTAs.
- Preserve a clear return path when visitors move from the custom homepage into Imweb.

## Reference Synthesis

Titleist contributes the brand trust pattern:

- Large campaign photography or campaign-style visual.
- Calm premium product navigation.
- Clear pathways into product categories, stories, and support.
- Confidence through scale, restraint, and operational completeness.

Titleist should not be copied too literally because GreenPutt is not yet a broad global golf catalog. A too-corporate treatment would hide the specificity of the Zero Head-Up idea.

Crossputt contributes the product-focus pattern:

- Putter-centered identity.
- Close-up product atmosphere.
- Focused technical story.
- Reflective, cinematic product presentation.

Crossputt should not be copied too literally because GreenPutt should not feel limited to only one putter product. The brand needs room for the putter, putting mat, rangefinder, Polvert, and future support content.

GreenPutt's answer is a premium putting system:

- First impression: campaign-scale and emotionally simple.
- Core story: Heads Down. Data On.
- Product logic: Zero Head-Up practice system plus selected golf accessories.
- Operating model: custom homepage for story and assets, Imweb for member, payment, order, support, and database-backed pages.

## Homepage Structure

### 1. Campaign Hero

Purpose: establish premium trust before asking visitors to buy or inquire.

Content:

- Main line: `Heads Down. Data On.`
- Supporting copy: one short sentence explaining that GreenPutt helps golfers keep their head down while checking putting distance feedback.
- Primary CTA: `제로 헤드업 보기` or `GreenPutt 시스템 보기`.
- Secondary CTA: `Polvert 구매하기`, clearly marked as an Imweb purchase flow.

Visual direction:

- Full-width photographic or generated campaign scene.
- Putting green, mat, putter, ball, and projected distance feedback should be visible or strongly implied.
- Avoid abstract gradients, generic golf scenery, and product-grid-first composition.

Export rule:

- Hero should be renderable as a standalone image or short video for Imweb.

### 2. Zero Head-Up Story

Purpose: explain why GreenPutt exists.

Content:

- Problem: golfers lift their head to check distance or result too early.
- Mechanism: measured putting feedback is shown near the ball/mat area.
- Benefit: the golfer can maintain gaze and rhythm while receiving usable data.

Design direction:

- Editorial split between a close-up visual and concise text.
- Use one strong diagram, video loop, or staged sequence rather than many small icons.

Export rule:

- This section should become one Imweb story image or a short scroll block.

### 3. Product System

Purpose: show that GreenPutt is more than one product, without making the homepage feel crowded.

Products:

- Putter / smart putting assistant: inquiry or reservation.
- Putting mat: inquiry or reservation.
- Rangefinder / distance feedback device: inquiry or reservation.
- Polvert golf glove: purchasable through Imweb.

Design direction:

- Use a modular four-item system with consistent labels and product states.
- Polvert should be visually connected but labeled as a selected purchasable product, not the core GreenPutt invention.

Export rule:

- Each product block should be separable into an Imweb image or content tile.

### 4. Polvert Bridge Band

Purpose: let Polvert sell now without confusing the GreenPutt brand story.

Content:

- Position Polvert as `Selected Product` or `GreenPutt Store Pick`.
- Show color and size selection expectations before handoff.
- CTA should lead to the Imweb product page first unless direct cart or checkout links are later verified.

Bridge behavior:

- Same-tab handoff to Imweb is the default.
- Copy should make the transition clear: payment, cart, member login, and order are handled by Imweb.
- The custom page should offer a sensible return context before and after handoff.

### 5. Support And Operations Entry

Purpose: provide trust for commerce and prototype-stage products.

Links:

- FAQ.
- Notice.
- 1:1 Inquiry.
- Shipping / Returns.
- Member / order path through Imweb where needed.

Design direction:

- Calm, utility-oriented, and compact.
- Avoid oversized marketing copy.

## Content Model

Every homepage section should have these fields so it can later be exported or recreated in Imweb:

- Section name.
- Role in the homepage.
- Primary headline.
- Short copy.
- Primary CTA.
- Secondary CTA if needed.
- Visual source.
- Export format: image, video, HTML section, or Imweb block.
- Replacement status: generated, render, real photo, or final.

## Data And Backend Boundaries

- The custom homepage should not store member, order, payment, shipping, cancellation, refund, or cart data.
- Imweb remains the backend for commerce and database-backed pages.
- Boards, FAQ, notices, member features, orders, and support can remain in Imweb unless a future limitation requires custom handling.
- Custom prototype inquiry forms may use Imweb forms, email, or a lightweight external form in a later implementation plan.

## Responsive Behavior

- Desktop should feel cinematic but still show the next section hint below the first viewport.
- Mobile should prioritize a clear first message, visible CTA, and non-overlapping text.
- Text must not sit on visually busy image areas without sufficient contrast.
- Fixed-format product tiles and CTA areas should use stable dimensions to avoid layout shifts.

## Verification Plan

During implementation, verify:

- Desktop and mobile screenshots of the homepage.
- First viewport clearly signals GreenPutt, golf, putting, and the Zero Head-Up idea.
- Text does not overflow or overlap.
- Polvert CTA points to the verified Imweb flow.
- Browser back behavior from Imweb returns to a sensible custom-site context where possible.
- Sections can be captured or exported as standalone assets for future Imweb use.

## Out Of Scope

- Full custom shopping mall.
- Custom payment, order, refund, or member database.
- Final Figma design system.
- Final production photo shoot direction.
- Direct Imweb checkout deep links until tested and confirmed.

## Open Follow-Up Decisions

- Final Korean headline and support copy for the hero.
- Whether Polvert is labeled `Selected Product`, `GreenPutt Store Pick`, or another term.
- Which exact visual assets become the first hero and product system images.
- Whether the first prototype should be a static custom homepage, a motion-heavy page, or a capture/export-oriented visual board.
