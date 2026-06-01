# Polvert PV02 Mesh RH Women Image Generation Session Guide

This guide helps another AI image-generation session reproduce the best PV02 mesh women's right-hand glove results.

## Scope

- Product: `PV02_MESH`
- Hand/gender: `RH_WOMEN`
- Work folder: `05_Product_Polvert_Glove/02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/`
- Reference folder: `05_Product_Polvert_Glove/01_Reference_Source/PV02_MESH/RH_WOMEN/`
- Logo source: `05_Product_Polvert_Glove/00_Brand/02_Logo_Work/POLVERT_LOGO_OLD_BLACK_BG-TRANSPARENT_ORIGINAL.png`

Read these first:

- `docs/agent-studio/polvert-file-organization-guide.md`
- `docs/agent-studio/polvert-pv02-mesh-rh-women-reference-analysis.md`

## Best Current Examples

Use these as the quality target before creating new images:

- `PV_PV02_RH_WOMEN_BACK_PATCH_WHITE_LOGO_OLD_LABEL_NONE_DRAFT_001.png`
- `PV_PV02_RH_WOMEN_PALM_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_002.png`
- `PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_NONE_DRAFT_001.png`
- `PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_NONE_DRAFT_002.png`

## Reproduction Workflow

1. Inspect the target reference image first. Identify hand orientation, visible side, exposed skin, mesh panels, blue patch angle, and whether the label text is readable.
2. Generate the glove image with blank blue patch and blank golf ball. Do not ask the image model to draw `Polvert`, label text, or any brand letters.
3. Preserve PV02 structure: fine white mesh on the back of hand, exposed fingertips, open thumb/base, large open palm if visible, white microfiber trim, and deep blue patch.
4. Composite the real Polvert logo after generation using the logo source file. Convert the logo to white for blue patches and black/dark charcoal for the golf ball.
5. Match the logo rotation to the physical surface. If the wrist is upside down in the crop, the blue patch logo should appear upside down in the rendered image.
6. Save into `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/` using the file organization guide:

```text
PV_{PRODUCT}_{HAND-GENDER}_{SCENE}_{COLOR}_{LOGO}_{LABEL}_{STATUS}_{NO}.png
```

For AI work, use `DRAFT` until the user approves. Use `LABEL_NONE` when the wrist label text is cropped, too small, hidden, or not trustworthy.

## Visual Guardrails

- The PV02 women's mesh patch is blue, not black.
- Mesh must be fine, dense, and slightly translucent over skin; avoid coarse honeycomb netting.
- Finger backs use mesh columns separated by raised white U-shaped trim.
- Fingertip openings have white microfiber caps/bands, with natural fingertips visible.
- The little finger has more white microfiber coverage than the middle mesh columns.
- The thumb is mostly open. Avoid a full covered thumb tube.
- Palm-side views need a large oval palm cutout with white piping.
- Wrist areas should show white gathered/quilted elastic texture and clean stitching.
- Never let the image model invent Polvert text. Blank first, exact-logo composite second.

## Scene Notes

### `BACK_PATCH`

- Camera faces the back of the hand.
- The blue patch is centered inside the white wrist flap.
- Logo must be centered in the rotated blue patch, matching the patch angle.
- Mesh columns on the finger backs are the main cue.

### `PALM`

- Camera faces the palm side.
- The large oval palm opening is the hero structure.
- The thumb side should be very open, with much more natural skin visible than glove fabric.
- Smooth white palm-side finger pockets and exposed fingertips should remain clean and simple.
- If the wrist label is front-facing and readable, prefer `LABEL_DBK` with `Design by KOREA`.

### `WEAR_BALL` Horizontal Palm Tray

- Forearm enters from the right, fingers point left, hand is nearly horizontal.
- Golf ball sits on the open palm near the finger base.
- Lower outer side should show a long fine-mesh strip.
- Blue wrist patch may be partially visible; use `LABEL_NONE` if lower text is not readable.

### `WEAR_BALL` Hanging Back-Hand

- Forearm enters from the top, back of hand faces camera, fingers angle downward.
- Golf ball sits near the lower right, lightly held by fingertips and thumb.
- Back-hand mesh texture is the main product feature.
- The blue patch logo appears upside down if the physical wrist flap is upside down in the crop.
- Ball logo should be small, dark, and placed on the visible face of the golf ball.

## New Session Prompt

Use this prompt at the start of a new session:

```text
폴베르 PV02_MESH 여성 오른손 골프장갑 AI 이미지를 이어서 만들고 싶어.

먼저 아래 파일들을 읽고, 기존 규칙과 잘 나온 산출물 기준을 그대로 따라줘.

/Users/micaelclaw/Developer/greenputt-website-test/docs/agent-studio/polvert-file-organization-guide.md
/Users/micaelclaw/Developer/greenputt-website-test/docs/agent-studio/polvert-pv02-mesh-rh-women-reference-analysis.md
/Users/micaelclaw/Developer/greenputt-website-test/docs/agent-studio/polvert-pv02-mesh-rh-women-imagegen-session-guide.md

구글드라이브 작업 폴더:
/Users/micaelclaw/Library/CloudStorage/GoogleDrive-micaelclaw@gmail.com/내 드라이브/GreenPutt Website/05_Product_Polvert_Glove

제품 범위는 PV02_MESH, RH_WOMEN이야.
잘 나온 기준 이미지는 아래 4개야.

02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_BACK_PATCH_WHITE_LOGO_OLD_LABEL_NONE_DRAFT_001.png
02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_PALM_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_002.png
02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_NONE_DRAFT_001.png
02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_NONE_DRAFT_002.png

중요:
- 실제 PV02 메쉬 장갑 구조를 따라줘.
- 파란 패치, 손등의 촘촘한 메쉬, 노출된 손끝, 열린 엄지 구조를 유지해줘.
- AI가 Polvert 글자나 라벨 문구를 새로 만들면 안 돼.
- 이미지는 먼저 빈 파란 패치/빈 공으로 생성하고, 실제 로고 파일을 후처리로 합성해줘.
- 로고 파일은 00_Brand/02_Logo_Work/POLVERT_LOGO_OLD_BLACK_BG-TRANSPARENT_ORIGINAL.png를 사용해줘.
- 파란 패치에는 흰색 로고, 골프공에는 검정/차콜 로고를 합성해줘.
- 패치 로고는 패치의 회전 박스 중앙에 맞추고 패치 각도와 같이 기울여줘.
- 라벨 문구가 잘 안 보이거나 각도상 불명확하면 LABEL_NONE으로 저장해줘.
- 결과는 02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/에 가이드 파일명 규칙으로 저장해줘.

이번에 만들 컷:
[여기에 레퍼런스 파일명과 원하는 컷 설명을 적기]

먼저 레퍼런스를 분석해서 짧게 계획을 말한 다음 진행해줘.
괜찮다고 승인하면 분석/제작 포인트를 문서에 기록하고 git commit까지 해줘.
```

## Per-Image Prompt Template

Use this after attaching or naming the specific reference:

```text
이 레퍼런스 기준으로 PV02_MESH RH_WOMEN [SCENE] 컷을 만들어줘.

구도:
- [손/팔 방향]
- [카메라가 보는 면: 손등/손바닥/측면]
- [공, 패치, 손가락 위치]

장갑 구조:
- 흰색 여성 오른손 핑거리스 골프장갑
- 손등은 촘촘한 흰색 메쉬, 작은 타원/슬릿형 구멍
- 손끝은 노출, 손가락 끝에는 흰색 캡/밴드
- 엄지는 많이 열려 있고 흰색 트림만 베이스를 잡음
- 손목은 흰색 퀼팅/셔링 느낌
- 패치는 진한 파란색, 빈 패치로 생성

로고:
- AI 생성 단계에서는 로고/문자 없음
- 생성 후 실제 Polvert 구형 로고를 후처리 합성
- 파란 패치는 흰 로고, 골프공은 검정 로고

저장:
- 02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/
- 파일명: PV_PV02_RH_WOMEN_[SCENE]_WHITE_LOGO_OLD_LABEL_[LABEL]_DRAFT_[NO].png
```
