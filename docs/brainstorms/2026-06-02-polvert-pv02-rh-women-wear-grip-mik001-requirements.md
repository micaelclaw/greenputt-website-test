---
title: Polvert PV02 RH Women WEAR_GRIP MIK001 Requirements
type: image-generation
status: complete
date: 2026-06-02
---

# Polvert PV02 RH Women WEAR_GRIP MIK001 Requirements

## Brainstorm Summary

The target is the `PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_MIK_001.png` reference: a palm-side wearing shot where a women's right hand grips a black golf club diagonally. The palm opening, exposed thumb, fingerless stalls, and blue wrist label are the primary product cues.

The existing `PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_001.png` already matches the scene well and should be treated as the quality anchor. The `MIK` reference is used for pose and product structure; the working output can keep the newer `LABEL_DBK` direction.

## Requirements

- R1. Match the reference composition: forearm enters from upper right, palm faces camera, black grip runs diagonally from lower left to upper right.
- R2. Preserve PV02 palm-side construction: large open palm/thenar area, mostly open thumb, exposed fingertips, and white fingerless stalls.
- R3. Show the finger stalls wrapping naturally around the black grip, with nails and fingertip openings visible.
- R4. Keep the wrist patch deep blue, placed on the upper wrist flap, and rotated with the wrist.
- R5. Use real logo compositing; do not let AI invent Polvert text or lower label text.
- R6. Keep the working label as `LABEL_DBK` when using the updated `Design by KOREA` standard, even though the source reference filename is `LABEL_MIK`.
- R7. Maintain no-logo and with-logo versions in their separate folders.

## Scope Boundaries

- Do not replace this palm-side grip scene with the back-hand `WEAR_GRIP_MIK_002` pose.
- Do not regenerate the whole scene if the current anchor remains stronger than new candidates.
- Do not force a perfectly front-facing label; the patch should follow the wrist angle and can be partly perspective-compressed.
- Do not make the thumb a closed tube or lose the large palm opening.

## Success Criteria

- The image reads as a close, commercial product shot of a woman wearing the PV02 mesh glove while gripping a golf club.
- The palm-side glove structure is clearer than the original 600px reference.
- The blue patch logo/label is believable on the angled wrist patch.
- The no-logo and with-logo files are easy to compare and reuse.

## Existing Anchors

- No-logo base: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/02_NO_LOGO/PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_NONE_LABEL_NONE_DRAFT_001.png`
- With-logo output: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_001.png`
- With-logo folder copy: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/01_WITH_LOGO/PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_001.png`
