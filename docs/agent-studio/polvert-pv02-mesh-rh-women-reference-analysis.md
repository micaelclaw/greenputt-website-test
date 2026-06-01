# Polvert PV02 Mesh RH Women Reference Analysis

This note records the product details that must be preserved when generating AI images for the Polvert PV02 mesh women's right-hand golf glove.

Reference scope:

- Product: `PV02_MESH`
- Hand/gender: `RH_WOMEN`
- Source folder: `05_Product_Polvert_Glove/01_Reference_Source/PV02_MESH/RH_WOMEN/`
- Supporting source folders:
  - `05_Product_Polvert_Glove/01_Reference_Source/PV02_MESH/PAIR_WOMEN/`
  - `05_Product_Polvert_Glove/000.폴베르자료실/002.메쉬_장갑/`
- Primary reference files:
  - `PV_PV02_RH_WOMEN_BACK_PATCH_WHITE_LOGO_OLD_LABEL_NONE_001.png`
  - `PV_PV02_RH_WOMEN_PALM_WHITE_LOGO_OLD_LABEL_MIK_001.png`
  - `PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_MIK_001.png`
  - `PV_PV02_RH_WOMEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_MIK_002.png`
  - `PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_MIB_001.png`
  - `PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_MIB_002.png`
  - `PV_PV02_PAIR_WOMEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_MIB_001.png`
  - `망사여자오른손1.png` through `망사여자오른손6.png`
  - `망사여자양손1.png`
  - `★여자_여름망사_장갑_상세페이지★.png`
  - `★여자_여름망사_장갑_상세페이지★2.png`

## Generation-Critical Summary

PV02 women's right-hand mesh is a white fingerless summer golf glove with a pale mesh back and a deep blue Polvert patch. The patch is not black. The patch blue samples around approximately `#3f4786` in the back-patch reference, with white script logo text.

The glove should read as lightweight and breathable, not padded winter fabric or solid leather. The mesh is the main product cue.

The official detail page describes the back-of-hand cover as mesh fabric that helps ventilation, sweat comfort, and UV blocking. It also calls out separate finger pockets for index, middle, ring, and little fingers, an exposed thumb, an open palm, an elastic wrist band, and a wrist velcro closure.

## Back-Of-Hand Structure

- The hand back is mostly pale white mesh with small, dense, staggered slit/oval perforations.
- The mesh should look like fine knit summer fabric with tiny diagonal dash-like openings, not large honeycomb netting or coarse sports mesh.
- The mesh has a faint pink/skin-tone cast because the hand is visible underneath.
- White leather or synthetic leather trim frames the mesh panel.
- The mesh panel occupies the central back of the hand, then transitions into white solid side panels near the outer edges and wrist closure.
- The wrist area has a gathered/elastic stitched section above the logo patch.
- The wrist strap is white, with raised white edging around the colored patch.
- The Polvert patch is deep blue, centered on the wrist closure, and slightly curved by the glove surface.

## Patch And Logo

- Patch color: deep royal/cobalt blue, close to `#3f4786` in the reference.
- Patch shape: rounded rectangular or arched shield-like panel, wider than tall, set inside a white raised border.
- Logo: white Polvert script on the blue patch.
- AI generation should not invent logo letters. Generate a blank blue patch first when possible, then composite the real Polvert logo.
- Logo alignment rule: center the logo inside the blue patch's rotated bounding box and match the patch angle.
- In wrist-side wearing shots, the patch may rotate with the wrist and can appear sideways or upside down depending on hand orientation.

## Finger And Thumb Details

- This is a right-hand glove.
- Four fingers are fingerless, exposing natural fingertips and nails.
- The index, middle, ring, and little finger have short white finger stalls ending around the upper finger joint.
- On the back side, the finger stalls show narrow pale mesh columns, but each fingertip opening has a solid white cap/band.
- Each finger opening has a white microfiber/synthetic-leather cap or band at the cut edge.
- The middle and ring fingers show the clearest long mesh columns, separated by raised white U-shaped trim.
- The index finger has mesh on the back side and a white trim/cap at the fingertip opening.
- The little finger is shorter and more side-exposed; avoid making it a full closed glove finger.
- The little finger has more white solid microfiber/synthetic-leather coverage than the middle mesh columns. Its fingertip opening and outer-side edge show a wider white cap/side panel, while mesh appears mostly on the inner/back-facing side that connects to the main back-of-hand mesh.
- The valley between the ring finger and little finger is framed by a white U-shaped trim. Do not run mesh continuously around the whole little finger tip.
- The thumb is mostly open/exposed in the product structure. It is not a full covered thumb. Keep a white trim/strap around the thumb base rather than a closed thumb tube.

## Palm-Side Structure

- The palm side has a large oval opening exposing most of the palm.
- The oval palm cutout is framed by white piping.
- Palm-side finger stalls are smoother white microfiber/synthetic fabric below the finger pockets, with open fingertips.
- The wrist label/patch on palm-side views is also blue with white Polvert text and small lower text.
- Preferred label text for future high-resolution palm/wrist label edits: `Polvert / Design by KOREA`.
- If the wrist label is too small or partially hidden, classify as `LABEL_NONE` or keep it out of the crop rather than letting AI invent text.

## Material Cues

- Mesh holes should be small, regular, dense, and slit/oval shaped, not coarse sports netting.
- Avoid oversized honeycomb holes. The page macro shows fine knit texture with many tiny diagonal openings.
- Mesh should look slightly translucent over skin.
- White trim should have leather-like grain and stitching.
- Stitching is clean and product-photography sharp.
- Avoid thick padding, wool texture, sheepskin grain, or winter glove bulk.

## Generation Checklist

Before accepting a generated PV02 mesh glove image, check:

- Does the back mesh read as fine knit summer mesh, not large netting?
- Are the patch and palm/wrist labels blue, never black?
- Is the main blue patch inside a raised white velcro/strap border?
- Are index, middle, ring, and little fingers fingerless with exposed nails?
- Do index/middle/ring fingers have narrow mesh columns plus solid white fingertip caps?
- Does the little finger have a wider white solid cap/outer-side panel than the middle mesh columns?
- Is the thumb exposed or mostly open, with trim around the base?
- If the palm is visible, is there a large oval palm opening with white piping?
- Is the wrist band/velcro area visibly elastic or quilted/stitched?
- Was the real Polvert logo composited instead of AI-generated text?

## Prompt Guardrails

Use these constraints in PV02 RH women mesh prompts:

- white fingerless right-hand women's golf glove
- pale breathable fine-knit mesh over the back of the hand and finger backs
- tiny dense staggered slit/oval perforations, not large honeycomb or coarse netting
- exposed fingertips and nails
- little finger with a wider white solid microfiber/synthetic-leather cap and outer-side panel, with mesh only on the inner/back-facing portion
- mostly exposed/open thumb with white trim around the thumb base
- large open palm cutout if palm side is visible
- deep blue wrist patch, not black
- blank blue patch for generation if a real logo will be composited
- no generated logo text, no fake brand marks, no warped letters
- avoid closed fingers, covered thumb, black patch, blue-black patch, winter padding, and non-mesh solid back
