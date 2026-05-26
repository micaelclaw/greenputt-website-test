# GreenPutt Imweb Bridge MVP Requirements

Date: 2026-05-26
Status: Draft planning requirements

## Summary

GreenPutt should launch a custom front-end website for premium brand storytelling and product presentation while using Imweb as the operational commerce backend. The first release should make the custom site feel like the main GreenPutt experience, then hand users into Imweb for Polvert purchase, checkout, member, order, and fulfillment workflows.

## Product Direction

- The website should feel like a premium golf/putting brand first, not only a shopping mall.
- The custom site owns the public brand experience: home, Zero Head-Up story, product storytelling, visual assets, and prototype inquiry/reservation.
- Imweb remains the system of record for Polvert payment, order management, member login, shipping, cancellation/refund, and fulfillment in the first phase.
- Polvert is the only first-release product with a real purchase path.
- Putter, putting mat, and rangefinder should appear in the same product system as catalog items, but their primary action should be inquiry, reservation, or waitlist rather than purchase.

## Primary Customer Flows

1. Brand discovery
   - Visitor lands on the custom homepage.
   - Visitor understands GreenPutt as a golf/putting performance brand.
   - Visitor can move into Zero Head-Up, product pages, Polvert, or support.

2. Polvert purchase bridge
   - Visitor opens the custom Polvert product story page.
   - Visitor reviews product information, images, variants/options overview, shipping/return guidance, and trust content.
   - Visitor clicks a purchase CTA and is handed off to the Imweb Polvert product, cart, login, or checkout path.
   - Imweb handles payment, order records, member data, shipping, cancellation/refund, and fulfillment.
   - Visitor can use browser back, visible return links, or post-purchase/support navigation to return to a sensible GreenPutt custom-site context.

3. Prototype product inquiry/reservation
   - Visitor opens putter, putting mat, or rangefinder product page on the custom site.
   - Visitor understands that the product is in prototype or preparation stage.
   - Visitor submits inquiry, reservation interest, or waitlist information.
   - Inquiry information is stored or routed in the simplest maintainable way decided during implementation planning.

4. Support and trust
   - Visitor can read FAQ, Notice, shipping/returns, and support information.
   - Visitor can submit a 1:1 inquiry or reach the correct Imweb/customer-support path.

## MVP Requirements

**Custom front-end site**

- R1. Provide the primary navigation: Home, Zero Head-Up, Products, Polvert, Support.
- R2. Provide a homepage that emphasizes golf brand credibility and GreenPutt's putting technology direction.
- R3. Provide product pages for Polvert, putter, putting mat, and rangefinder.
- R4. Show different product states: purchasable through Imweb for Polvert, inquiry/reservation for GreenPutt prototype products.
- R5. Provide FAQ, Notice, 1:1 Inquiry, and shipping/returns pages or links without making users feel lost between systems.

**Imweb bridge commerce**

- R6. Do not build a separate first-phase custom payment provider, order database, or full commerce admin.
- R7. Route Polvert purchase CTAs to the correct Imweb product, cart, login, or checkout path.
- R8. Make the transition to Imweb explicit enough to avoid surprise but visually and verbally consistent with GreenPutt.
- R9. Preserve a smooth return path from Imweb to the custom GreenPutt site wherever the Imweb flow allows.
- R10. Treat Imweb as the source of truth for Polvert order/payment/member/fulfillment data during the bridge phase.

**Inquiry and reservation**

- R11. Support inquiry/reservation submissions for putter, putting mat, and rangefinder.
- R12. Support general 1:1 customer inquiries.
- R13. Decide during implementation planning whether inquiries live in the custom site, Imweb forms, email, or a lightweight external form, but keep the customer path consistent.

**Content and media**

- R14. Support AI-generated and existing image assets with clear replacement paths for future real photography.
- R15. Separate image usage into three tracks: golf-brand atmosphere, GreenPutt product concept/use scenes, and Polvert wearing/use shots.
- R16. Use the Google Drive `GreenPutt Website` folder as the asset source and review workspace.

**Admin and operations**

- R17. Launch operations should rely on Imweb for commerce administration.
- R18. Avoid duplicating order, member, refund, or fulfillment tools in the custom site during the first phase.
- R19. If Imweb APIs are used, use them for read/sync/bridge support only unless later testing proves a stronger custom workflow is necessary.

## Back And Return UX Requirements

- B1. A visitor who clicks from the custom Polvert page into Imweb should understand they are entering the purchase flow.
- B2. Browser back from Imweb should return the visitor to the custom Polvert/product context whenever possible.
- B3. Custom purchase CTAs should avoid opening confusing dead-end tabs unless testing proves a new tab creates a better return path.
- B4. If Imweb supports configurable header/footer/custom code or return URLs, use them to provide a visible route back to GreenPutt's custom site.
- B5. The custom site should include support links for users who completed or abandoned checkout and need to resume, ask, or recover context.

## Imweb Link Test Findings

Tested on 2026-05-27:

- Public product detail bridge works as a normal URL pattern, for example `https://greenputt.kr/shop_view/?idx=50`.
- Public cart entry exists at `https://greenputt.kr/shop_cart`.
- All visible Polvert products were marked `SOLDOUT`, including required size options, so add-to-cart and direct-purchase checkout could not be fully tested.
- The visible `장바구니` and `구매하기` product-page actions are Imweb JavaScript actions that depend on required options and stock state.
- No reliable public direct-checkout deep link was confirmed during this test.

Bridge decision from current evidence:

- Use same-tab handoff to the Imweb product detail page as the default Polvert CTA behavior for the first custom prototype.
- Treat direct cart and direct checkout CTAs as optional enhancements that require a later retest after Imweb stock/options are enabled.
- The custom Polvert page should prepare users for the Imweb handoff before the click and provide a clear way back to the custom GreenPutt context.

## Scope Boundaries

- Full custom shopping mall replacement is out of scope for the first release.
- Custom payment integration, custom order management, custom member accounts, advanced refunds, coupons, loyalty benefits, subscriptions, and app-based AI coaching are deferred.
- GreenPutt prototype products should not be presented as immediately purchasable until the product readiness changes.
- Figma is useful later for high-fidelity design, but it should not block the first requirements and prototype work.

## Open Decisions

- Which exact Imweb Polvert URL should purchase CTAs target: product detail, cart, direct checkout, or another supported flow.
- Whether checkout should open in the same tab or a new tab after stock-enabled browser/back behavior is tested.
- Whether support, FAQ, and notice content should live primarily on the custom site, Imweb, or both.
- Whether prototype inquiry/reservation should use a custom form, Imweb form, email form, or another low-maintenance bridge.
- Which specific AI-generated images should be selected for the first homepage and product pages.
