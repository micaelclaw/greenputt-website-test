---
title: Polvert WEAR_BALL MIB002 Image Pass
type: feat
status: complete
date: 2026-06-02
origin: docs/brainstorms/2026-06-02-polvert-pv02-rh-women-wear-ball-mib002-requirements.md
---

# Polvert WEAR_BALL MIB002 Image Pass

## Summary

Use the MIB002 hanging back-hand reference to evaluate and, if needed, improve the existing `WEAR_BALL ... LABEL_NONE_DRAFT_002` anchor. The work should prioritize pose fidelity, fine PV02 mesh, upside-down blue patch logo, and natural golf-ball logo placement.

## Requirements

- R1. Match the top-down forearm and hanging back-hand pose.
- R2. Preserve fine PV02 mesh and open-finger/open-thumb glove structure.
- R3. Keep the blue back patch natural, with upside-down Polvert logo aligned to the patch.
- R4. Keep the golf-ball logo small, dark, and centered on the visible ball face.
- R5. Save any new draft and check images in the established work folder.

## Scope Boundaries

- Do not modify the completed horizontal palm-tray `DRAFT_036`.
- Do not force `LABEL_DBK` or `LABEL_MIK` lower text into this back-patch pose.
- Do not regenerate the whole image if the existing anchor already satisfies the reference better than a new generated pass.

## Context & Research

### Relevant Files and Patterns

- `docs/agent-studio/polvert-file-organization-guide.md`
- `docs/agent-studio/polvert-pv02-mesh-rh-women-reference-analysis.md`
- `docs/agent-studio/polvert-pv02-mesh-rh-women-imagegen-session-guide.md`
- `docs/brainstorms/2026-06-02-polvert-pv02-rh-women-wear-ball-mib002-requirements.md`

## Key Technical Decisions

- Use `LABEL_NONE_DRAFT_002` as the first anchor because it already closely matches the MIB002 pose.
- Prefer a surgical logo/quality pass over full regeneration unless the anchor fails key product checks.
- Keep `LABEL_NONE` for this pose because the visible patch is the back wrist patch, not a readable palm-side lower label.

## Implementation Units

### U1. Anchor Evaluation

**Goal:** Compare the MIB002 reference with the existing anchor and decide whether the anchor can be accepted or needs a new draft.

**Requirements:** R1, R2, R3, R4

**Files:**
- Read: `01_Reference_Source/PV02_MESH/RH_WOMEN/PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_MIB_002.png`
- Read: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_NONE_DRAFT_002.png`

**Approach:**
- Check pose, mesh density, finger openings, patch angle, patch logo direction, ball placement, and ball logo scale.

**Test scenarios:**
- Happy path: anchor already meets the reference and only needs documentation/selection.
- Edge case: anchor has correct pose but a logo or crop defect that can be repaired locally.

### U2. Candidate Or Selection Output

**Goal:** Save the accepted or improved MIB002 working image and create check imagery if edits are made.

**Requirements:** R3, R4, R5

**Files:**
- Create or preserve: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_NONE_DRAFT_002.png`
- Optional create: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_NONE_DRAFT_003.png`
- Optional create: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_MIB002_REFERENCE_COMPARE.png`

**Approach:**
- If the anchor is accepted, create a comparison/check file and record why it is accepted.
- If it needs a small local fix, create `DRAFT_003` instead of overwriting `DRAFT_002`.

**Test scenarios:**
- Happy path: accepted output remains visually aligned with the reference.
- Integration: file names match the Polvert organization guide and work folder conventions.
