---
title: Polvert PV02 RH Women WEAR_BALL MIB002 Requirements
type: image-generation
status: complete
date: 2026-06-02
---

# Polvert PV02 RH Women WEAR_BALL MIB002 Requirements

## Brainstorm Summary

The next target is the `PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_MIB_002.png` reference: a vertical hanging back-hand pose with the forearm entering from the top, the back of the PV02 mesh glove facing camera, and a golf ball held near the lower right by the thumb and fingertips.

This scene should be handled differently from the previous horizontal palm-tray `WEAR_BALL` image. The product cue is the back-of-hand mesh and blue wrist patch, not the palm cutout or side wrist label.

## Requirements

- R1. Match the reference pose: forearm enters from the top, hand hangs downward, fingers angle down, golf ball sits near the lower right.
- R2. Preserve PV02 mesh structure: fine dense white mesh over the back of hand and finger backs, exposed fingertips, open thumb side, and white microfiber trim.
- R3. Keep the little finger and outer-side panels more solid white than the middle/ring mesh columns.
- R4. Use a deep blue patch on the wrist flap, not black.
- R5. The patch logo must be upside down relative to the viewer because the physical wrist flap is inverted in this pose.
- R6. Do not ask the image model to invent Polvert text. Use real logo compositing when editing logo-bearing areas.
- R7. The golf ball logo should be small, dark, centered on the visible face of the ball, and not visually louder than the glove.
- R8. Save AI work in `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/` using the established filename pattern.

## Scope Boundaries

- Do not revisit the completed horizontal palm-tray `DRAFT_036` side-label scene.
- Do not force a readable palm/wrist lower label in this back-hand pose; the visible patch is the back wrist patch, so `LABEL_NONE` is acceptable when no lower text is meaningfully visible.
- Do not create a black patch, closed fingers, covered thumb tube, coarse netting, or winter-glove bulk.

## Success Criteria

- The image reads immediately as the MIB002 hanging back-hand reference.
- The mesh is fine and breathable, not honeycomb or padded.
- The blue patch sits naturally on the curved wrist flap and the white Polvert logo follows the inverted patch angle.
- The ball logo looks composited onto the ball surface rather than floating on top.
- Any new draft improves or at least preserves the existing `LABEL_NONE_DRAFT_002` quality target.

## Existing Anchor

- `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_NONE_DRAFT_002.png`

This existing image already matches the MIB002 pose well and should be treated as the first quality anchor before deciding whether a new generated candidate is needed.
