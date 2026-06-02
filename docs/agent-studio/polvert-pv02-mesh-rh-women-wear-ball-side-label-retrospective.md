# Polvert PV02 RH Women WEAR_BALL Side Label Retrospective

This note records the trial-and-error from the horizontal palm-tray `WEAR_BALL` scene, ending with `DRAFT_036`.

## Final Accepted Image

- Final working image: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_036.png`
- Reference scene: horizontal palm-tray ball pose, forearm from the right, palm facing upward, blue wrist patch visible on the far right side.
- Accepted because the wrist label reads as printed on the curved side patch without breaking the patch border, and the `P` start stroke is less abruptly clipped than earlier versions.

## What Finally Worked

- Keep the existing successful image as the anchor. The final pass did not regenerate the whole glove, hand, ball, or scene.
- Restore only the wrist patch area from the clean base, then composite the label again.
- Use the side-aware physical label asset rather than asking the image model to draw text.
- Preserve the `DRAFT_031`/`DRAFT_035` coordinate feel: same patch position, same broad scale, same side-view reading.
- Treat the wrist patch as a curved 3D surface, not a flat 2D sticker. The visible label can be partial, but it must look hidden by curvature rather than manually cut off.
- Locally relax the left-side patch mask for the `P` start stroke. Global movement or global scaling caused worse problems.

## What Failed Or Looked Wrong

- Centering the label as if the patch were front-facing made the side view feel fake.
- Rotating a normal palm label by 90 degrees put too much readable text into a surface that should be partially hidden by perspective.
- Shrinking the full `Polvert / Design by KOREA` label to fit inside the side patch made the text look tiny and unrelated to the reference.
- Letting letters cross the blue patch border broke product realism, even when the typography itself looked clearer.
- Hard clipping made the `P` and `Design by` text look intentionally chopped. The better direction is partial visibility caused by the wrist curve.
- Adding fade/transparency reduced the hard-cut problem, but it also made the printed label feel less physical.
- Over-focusing on showing `Design by KOREA` harmed the overall side-shot realism. In side view, partial readability is acceptable.

## Current Side-Label Rule

For narrow side-view wrist patches:

- Do not force the full label to be readable.
- Do not reduce the font size just to fit every letter.
- Keep the label inside the blue patch border.
- Preserve the label's physical scale from the palm/front label.
- Let the wrist curvature determine which parts of the label are visible.
- If a stroke appears broken, repair only that local stroke/mask area instead of re-laying out the whole label.

## Useful Future Checks

- Compare against the previous accepted draft before changing scale or position.
- Inspect both a close crop and the full 1254px image; a fix that works in the crop may draw too much attention in the whole product shot.
- Check the patch border after every label edit. Border damage is more noticeable than slightly incomplete label text.
- When the user says a version is centered or natural, treat that draft as an anchor and change only the named defect.
