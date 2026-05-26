# GreenPutt Custom Commerce MVP Requirements

Date: 2026-05-26
Status: Draft planning requirements

## Summary

GreenPutt should replace the current Imweb site with a custom commerce MVP that is maintainable through this repository and Codex. The first release should prioritize customer-facing brand/product pages, Polvert checkout, and inquiry/reservation flows for GreenPutt prototype products, while keeping admin functionality intentionally minimal.

## Product Direction

- The website should still feel like a premium golf/putting brand first, not only a shopping mall.
- Polvert is the only product that should support real checkout in the first release.
- Putter, putting mat, and rangefinder should appear in the same product system as catalog items, but their primary action should be inquiry, reservation, or waitlist rather than purchase.
- Imweb should be treated as a reference for current structure and operations, not the long-term platform target.

## Primary Customer Flows

1. Brand discovery
   - Visitor lands on the homepage.
   - Visitor understands GreenPutt as a golf/putting performance brand.
   - Visitor can move into Zero Head-Up, product pages, Polvert, or support.

2. Polvert purchase
   - Visitor opens the Polvert product page.
   - Visitor reviews product information, images, variants/options, price, shipping/return guidance, and trust content.
   - Visitor selects options and completes payment.
   - Order information is stored for fulfillment and later admin review.

3. Prototype product inquiry/reservation
   - Visitor opens putter, putting mat, or rangefinder product page.
   - Visitor understands that the product is in prototype or preparation stage.
   - Visitor submits inquiry, reservation interest, or waitlist information.
   - Inquiry information is stored for follow-up.

4. Support and trust
   - Visitor can read FAQ, Notice, shipping/returns, and support information.
   - Visitor can submit a 1:1 inquiry.

## MVP Requirements

**Customer-facing site**

- R1. Provide the primary navigation: Home, Zero Head-Up, Products, Polvert, Support.
- R2. Provide a homepage that emphasizes golf brand credibility and GreenPutt's putting technology direction.
- R3. Provide product pages for Polvert, putter, putting mat, and rangefinder.
- R4. Show different product states: purchasable for Polvert, inquiry/reservation for GreenPutt prototype products.
- R5. Provide FAQ, Notice, 1:1 Inquiry, and shipping/returns pages or sections.

**Commerce**

- R6. Store product records for all listed products.
- R7. Support Polvert product options, pricing, product images, and purchase CTA.
- R8. Support a checkout/payment flow for Polvert only in the first release.
- R9. Store order records after payment so they can be reviewed for fulfillment.
- R10. Keep payment-provider selection open for planning, with Toss Payments, PortOne, or another Korean commerce-friendly provider as candidates.

**Inquiry and reservation**

- R11. Support inquiry/reservation submissions for putter, putting mat, and rangefinder.
- R12. Support general 1:1 customer inquiries.
- R13. Store inquiry records with enough information for manual follow-up.

**Content and media**

- R14. Support AI-generated and existing image assets with clear replacement paths for future real photography.
- R15. Separate image usage into three tracks: golf-brand atmosphere, GreenPutt product concept/use scenes, and Polvert wearing/use shots.
- R16. Use the Google Drive `GreenPutt Website` folder as the asset source and review workspace, while keeping website code and structured content in the repository/database.

**Admin and operations**

- R17. Launch should prioritize customer-facing pages, payment, and inquiry flows before building a full admin dashboard.
- R18. The first admin approach may be minimal: direct database/CMS management, a small internal dashboard, or a staged combination decided during planning.
- R19. Early operations must still allow the owner to review orders, inquiries, product records, FAQ, and notices.

## Scope Boundaries

- Full shopping mall maturity is out of scope for the first release.
- Coupons, complex memberships, loyalty benefits, subscriptions, advanced refunds, multi-vendor operations, and app-based AI coaching are deferred.
- GreenPutt prototype products should not be presented as immediately purchasable until the product readiness changes.
- Figma is useful later for high-fidelity design, but it should not block the first requirements and prototype work.

## Open Decisions

- Which payment provider should be used first.
- Whether early content/admin management should use a CMS-like tool, direct database editing, or a small custom admin screen.
- Which Polvert variants, sizes, stock behavior, and launch prices should be active at launch.
- Whether reservation should mean simple interest capture, preorder intent, or a stronger lead qualification flow.
- Which specific AI-generated images should be selected for the first homepage and product pages.
