---
title: Polvert WEAR_GRIP Logo Alignment Fix
type: fix
status: complete
date: 2026-06-02
origin: docs/brainstorms/2026-06-02-polvert-pv02-rh-women-wear-grip-logo-alignment-requirements.md
---

# Polvert WEAR_GRIP Logo Alignment Fix

## Summary

Rebuild only the blue wrist patch label for the PV02 RH women `WEAR_GRIP` palm-side grip image. The accepted output uses the existing no-logo base, derives the patch-local X/Y axes from the patch surface, applies the NEW Polvert logo plus larger/separated `Design by KOREA`, and saves `DRAFT_020` plus alignment check images.

## Requirements

- R1. Preserve the existing no-logo base image.
- R2. Detect the blue patch and draw multiple patch-relative grid lines for visual debugging.
- R3. Reposition the real label asset to the patch center, aligned to the patch's local axes.
- R4. Tune label size with enough blue padding inside the white patch border.
- R5. Save corrected with-logo and check artifacts in the work folder.
- R6. Mirror approved no-logo, OLD_LOGO, and NEW_LOGO versions into `03_Final_Exports/PV02_MESH/RH_WOMEN/`.

## Scope Boundaries

- Do not regenerate the whole product image.
- Do not alter hand, grip, glove mesh, or no-logo patch shape.
- Do not overwrite earlier drafts; save the accepted correction as `DRAFT_020`.
- Do not include unrelated PV01 or prototype changes in any commit.

## Context & Research

### Relevant Files and Patterns

- `docs/agent-studio/polvert-file-organization-guide.md`
- `docs/agent-studio/polvert-pv02-mesh-rh-women-reference-analysis.md`
- `docs/agent-studio/polvert-pv02-mesh-rh-women-imagegen-session-guide.md`
- `docs/brainstorms/2026-06-02-polvert-pv02-rh-women-wear-grip-logo-alignment-requirements.md`

## Key Technical Decisions

- Use the no-logo image as the base so the glove scene quality remains intact.
- Compute the patch center from the blue patch mask, not from manual visual placement.
- Use alignment check images as a required output because the defect is primarily spatial.
- Draw patch and logo boxes as oriented rectangles in the same patch-local X/Y axes, not as screen-axis bounding boxes.
- Verify the `Polvert` word axis itself, not only the logo box center.
- Keep `LABEL_DBK` for the corrected working image because the project guide treats `Design by KOREA` as the newer working label standard.

## Implementation Units

### U1. Patch Grid Debug

**Goal:** Produce check images that show patch axes, patch center, and logo/text-axis offset.

**Requirements:** R2

**Files:**
- Read: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/02_NO_LOGO/PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_NONE_LABEL_NONE_DRAFT_001.png`
- Read: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_001.png`
- Create: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/04_ALIGNMENT_CHECK/*DRAFT_020*.png`

**Approach:**
- Detect the blue patch mask and derive local patch axes.
- Draw red X and green Y axes.
- Draw yellow and pink oriented boxes projected onto those same axes.
- Draw a cyan guide for the `Polvert` word horizontal axis.

**Test scenarios:**
- Happy path: the overlay makes the current logo offset visible.
- Edge case: patch detection excludes the surrounding white border and leather texture.

### U2. Corrected Logo Composite

**Goal:** Create `DRAFT_020` with the label centered on the patch local grid and the `Polvert` word axis parallel to the red X axis.

**Requirements:** R1, R3, R4, R5

**Files:**
- Read: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/03_LABEL_ASSETS_TRANSPARENT/PV_PV02_NA_DETAIL_PALM_LABEL_WHITE_LOGO_NEW_LABEL_DBK_TRANSPARENT_4X_002.png`
- Create: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_NEW_LABEL_DBK_DRAFT_020.png`
- Create: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/01_WITH_LOGO/PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_NEW_LABEL_DBK_DRAFT_020.png`

**Approach:**
- Create candidate composites with small scale/center variations.
- Correct the PIL rotation sign so the visible `Polvert` word axis follows the red X axis.
- Increase and separate `Design by KOREA` after the accepted axis/center is locked.

**Test scenarios:**
- Happy path: label appears centered with even blue padding.
- Edge case: label is not so large that script strokes or lower text touch the border.

### U3. Final Checks And Documentation

**Goal:** Save comparison/check artifacts and update the session guide so future sessions do not reuse the flawed center-only or screen-bbox placement.

**Requirements:** R5

**Files:**
- Create: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/04_ALIGNMENT_CHECK/PV_PV02_RH_WOMEN_ALIGNMENT_CHECK_WHITE_LOGO_NEW_LABEL_DBK_DRAFT_019_020_COMPARE.png`
- Create: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/04_ALIGNMENT_CHECK/PV_PV02_RH_WOMEN_ALIGNMENT_CHECK_WHITE_LOGO_NEW_LABEL_DBK_TEXT_AXIS_DRAFT_020.png`
- Modify: `docs/agent-studio/polvert-pv02-mesh-rh-women-imagegen-session-guide.md`
- Modify: `docs/agent-studio/polvert-file-organization-guide.md`

**Approach:**
- Compare `DRAFT_019` and `DRAFT_020` side by side.
- Record `DRAFT_020` as the corrected anchor after visual inspection.
- Record the patch-local X/Y axis method as the common logo alignment rule.

**Test scenarios:**
- Integration: future session guide points to `DRAFT_020` for this scene.
- Regression: unrelated PV02 scenes and prior accepted WEAR_BALL files are not changed.

### U4. Final Export Classification

**Goal:** Mirror approved assets into final export folders separated by logo state.

**Requirements:** R6

**Files:**
- Create: `03_Final_Exports/PV02_MESH/RH_WOMEN/01_NO_LOGO/*.png`
- Create: `03_Final_Exports/PV02_MESH/RH_WOMEN/02_WITH_LOGO/01_OLD_LOGO/*.png`
- Create: `03_Final_Exports/PV02_MESH/RH_WOMEN/02_WITH_LOGO/02_NEW_LOGO/*.png`
- Create: `03_Final_Exports/PV02_MESH/RH_WOMEN/PV_PV02_RH_WOMEN_FINAL_EXPORT_CONTACT_SHEET.png`
- Create: `03_Final_Exports/PV02_MESH/RH_WOMEN/PV_PV02_RH_WOMEN_FINAL_EXPORT_MANIFEST.md`

**Approach:**
- Copy approved no-logo bases directly.
- Copy approved OLD_LOGO files into the old-logo folder.
- Generate or copy NEW_LOGO equivalents and place them in the new-logo folder.
- Keep alignment check artifacts separate from final product images.

**Test scenarios:**
- Happy path: final folders contain 5 no-logo, 6 OLD_LOGO, and 6 NEW_LOGO images.
- Edge case: side-view label conversions are visually checked because small logo components can be split into multiple fragments.
