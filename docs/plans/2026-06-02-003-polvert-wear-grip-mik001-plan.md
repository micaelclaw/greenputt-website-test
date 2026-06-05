---
title: Polvert WEAR_GRIP MIK001 Image Pass
type: feat
status: complete
date: 2026-06-02
origin: docs/brainstorms/2026-06-02-polvert-pv02-rh-women-wear-grip-mik001-requirements.md
---

# Polvert WEAR_GRIP MIK001 Image Pass

## Summary

Evaluate the existing `WEAR_GRIP ... LABEL_DBK_DRAFT_001` image against the `MIK_001` reference, keep the existing no-logo and with-logo split, and record the anchor decision for future PV02 RH women grip scenes.

## Requirements

- R1. Preserve the palm-side diagonal golf-grip composition.
- R2. Keep the PV02 palm opening, exposed thumb, fingerless stalls, and visible fingertips.
- R3. Keep the blue wrist patch logo/label aligned to the angled wrist surface.
- R4. Maintain separate no-logo and with-logo assets for the scene.
- R5. Save comparison/check images for review.

## Scope Boundaries

- Do not regenerate the whole image unless the current anchor fails core product checks.
- Do not change this output back to `LABEL_MIK`; the current working standard is `LABEL_DBK`.
- Do not modify the separate `WEAR_GRIP_MIK_002` back-hand/side patch scene.

## Context & Research

### Relevant Files and Patterns

- `docs/agent-studio/polvert-file-organization-guide.md`
- `docs/agent-studio/polvert-pv02-mesh-rh-women-reference-analysis.md`
- `docs/agent-studio/polvert-pv02-mesh-rh-women-imagegen-session-guide.md`
- `docs/brainstorms/2026-06-02-polvert-pv02-rh-women-wear-grip-mik001-requirements.md`

## Key Technical Decisions

- Use the existing `LABEL_DBK_DRAFT_001` image as the first anchor because it is higher resolution and cleaner than the source reference.
- Keep `LABEL_DBK` despite the `MIK_001` source filename because the project guide defines `Design by KOREA` as the newer working label standard.
- Treat no-logo and with-logo separation as an organization/check step, not a new generation task.

## Implementation Units

### U1. Anchor Evaluation

**Goal:** Compare the reference and existing with-logo output for pose, glove structure, logo realism, and grip handling.

**Requirements:** R1, R2, R3

**Files:**
- Read: `01_Reference_Source/PV02_MESH/RH_WOMEN/PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_MIK_001.png`
- Read: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_001.png`

**Approach:**
- Prefer the existing anchor if it keeps the same commercial palm-side grip intent and improves clarity.

**Test scenarios:**
- Happy path: current anchor remains selected with no local fix needed.
- Edge case: patch or text alignment is visibly worse than the reference and requires a local repair.

### U2. Organization And Check Outputs

**Goal:** Preserve the no-logo/with-logo split and create comparison artifacts for review.

**Requirements:** R4, R5

**Files:**
- Read: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/02_NO_LOGO/PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_NONE_LABEL_NONE_DRAFT_001.png`
- Read: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/01_WITH_LOGO/PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_001.png`
- Create: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_GRIP_MIK001_REFERENCE_COMPARE.png`
- Create: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_GRIP_MIK001_NOLOGO_WITHLOGO_COMPARE.png`

**Approach:**
- Use comparison sheets rather than duplicate selected files unless a missing folder copy is discovered.

**Test scenarios:**
- Happy path: no-logo and with-logo images are both present and visually matched.
- Integration: comparison files make the reference and selected output easy to audit.
