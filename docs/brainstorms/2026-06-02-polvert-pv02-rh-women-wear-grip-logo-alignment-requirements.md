---
title: Polvert PV02 RH Women WEAR_GRIP Logo Alignment Requirements
type: image-generation
status: complete
date: 2026-06-02
---

# Polvert PV02 RH Women WEAR_GRIP Logo Alignment Requirements

## Summary

The existing `WEAR_GRIP` palm-side diagonal grip image had strong glove, hand, and club quality, but the blue wrist patch logo did not read as physically centered on the patch. The accepted fix is `PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_NEW_LABEL_DBK_DRAFT_020.png`: keep the no-logo base, use the NEW Polvert logo, enlarge/separate `Design by KOREA`, and align the label with the patch-local X/Y axes rather than the screen bbox.

## Requirements

- R1. Preserve the existing no-logo base image quality: hand pose, black grip, palm opening, exposed thumb, finger stalls, and PV02 mesh details should not be regenerated.
- R2. Treat the blue wrist patch as a tilted 3D plane with its own horizontal and vertical axes.
- R3. Use patch-derived guide lines to determine center, not eyeballing the image canvas or wrist crop.
- R4. Place the label on the center of the patch's rotated/perspective box.
- R5. Keep the label size balanced: neither tiny inside the patch nor so large that it hits the white border.
- R6. Keep the label direction consistent with the physical wrist patch and reference pose.
- R7. Use real Polvert/logo label assets only; do not ask the image model to generate letters.
- R8. Save the accepted `DRAFT_020` with-logo image and separate alignment/debug check images.

## Scope Boundaries

- Do not regenerate the whole glove scene.
- Do not change the no-logo base unless a patch-mask defect is discovered.
- Do not use the previous `DRAFT_001` logo placement as an anchor.
- Do not force the label to align to the overall image frame; it must align to the patch surface.
- Do not make the label cross or visually damage the white patch border.

## Success Criteria

- A grid/debug overlay clearly shows the patch axes, center, and logo placement.
- The corrected logo appears centered in the blue patch at normal viewing size.
- The `Polvert` word's horizontal stroke follows the red patch-local X axis; a centered box with the word sloping along the wrong diagonal is not acceptable.
- The label has enough scale to feel intentional, while leaving blue padding around all sides.
- The result still reads as the same commercial palm-side grip image.

## Final Alignment Decision

Initial grid debugging showed the earlier logo center sitting off the patch center rather than cleanly on the patch's internal center grid. Later attempts also proved that center alone is insufficient: the yellow patch box and pink logo box must be drawn as oriented rectangles in the same patch-local coordinate system, and the `Polvert` text axis itself must follow the red X axis.

The accepted guide convention is:

- Red line: patch-local X axis and `Polvert` word horizontal axis.
- Green line: patch-local Y axis, exactly 90 degrees from red.
- Yellow box: patch pixels projected onto the red/green axes.
- Pink box: logo/label pixels projected onto the same axes.
- Cyan line: visual guide for the `Polvert` word horizontal stroke.

`DRAFT_019` fixed the word-axis direction. `DRAFT_020` kept the axis/center and improved the lower `Design by KOREA` size and spacing.
