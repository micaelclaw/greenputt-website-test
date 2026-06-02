---
title: Polvert WEAR_BALL P Start Stroke Fix
type: fix
status: complete
date: 2026-06-02
---

# Polvert WEAR_BALL P Start Stroke Fix

## Summary

`DRAFT_035`의 전체 구도, 공 로고, 손목 패치 위치는 유지하면서 손목 패치의 `Polvert` 로고 중 `P` 시작 필기체 획이 끊겨 보이는 문제만 보정한다. 새 후보는 `DRAFT_036`으로 저장하고, 확대 검수 이미지를 함께 남긴다.

## Requirements

- R1. `P` 시작 필기체 획이 패치 왼쪽 곡면 안에서 자연스럽게 이어져 보여야 한다.
- R2. `DRAFT_035`의 로고 시작점, 크기감, 손목 패치 중심감은 유지해야 한다.
- R3. 흰 라벨 획은 파란 패치 테두리를 벗어나거나 테두리를 깨뜨려 보이면 안 된다.
- R4. 결과물은 기존 파일명 규칙을 따라 `DRAFT_036` 및 검수용 확대 이미지로 저장한다.

## Scope Boundaries

- 전체 AI 이미지를 새로 생성하지 않는다.
- 골프공 로고, 손 모양, 메쉬/극세사 영역, 손목 패치 자체 형태는 수정하지 않는다.
- `Polvert` 전체를 억지로 다 보이게 하려고 폰트 크기를 줄이거나 위치를 새로 잡지 않는다.

## Context & Research

### Relevant Files and Patterns

- `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_035.png`
- `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/03_LABEL_ASSETS_TRANSPARENT/PV_PV02_NA_DETAIL_PALM_LABEL_WHITE_LOGO_OLD_LABEL_DBK_TRANSPARENT_PHYSICAL_SIDE_4X_001.png`
- `docs/agent-studio/polvert-file-organization-guide.md`
- `docs/agent-studio/polvert-pv02-mesh-rh-women-imagegen-session-guide.md`

## Key Technical Decisions

- `DRAFT_035`를 기준 이미지로 사용한다: 사용자가 승인한 측면 패치 위치감과 전체 컷 안정성을 보존하기 위해서다.
- 패치 내부 마스크만 국소적으로 완화한다: 전체 로고를 이동하면 중심감이 다시 흔들리므로, 왼쪽 시작 획이 잘리는 구간만 더 보이게 한다.
- 여러 마스크 강도 후보를 먼저 비교한다: 테두리 보존과 `P` 시작 획 노출 사이의 균형을 눈으로 검수할 수 있게 한다.

## Implementation Units

### U1. P Start Cut Diagnosis

**Goal:** `DRAFT_035`에서 `P` 시작 획이 잘리는 원인이 라벨 소스, 크롭 범위, 내부 마스크 중 어디에 있는지 확인한다.

**Requirements:** R1, R2

**Files:**
- Read: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_035.png`
- Read: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/03_LABEL_ASSETS_TRANSPARENT/PV_PV02_NA_DETAIL_PALM_LABEL_WHITE_LOGO_OLD_LABEL_DBK_TRANSPARENT_PHYSICAL_SIDE_4X_001.png`

**Approach:**
- 기존 `035`의 패치 영역과 로고 합성 좌표를 유지한 상태에서 마스크 강도만 바꿔 비교한다.

**Test scenarios:**
- Happy path: 왼쪽 내부 마스크 완화 후보에서 `P` 시작 획이 더 길게 이어져 보인다.
- Edge case: 테두리와 너무 가까워져 흰 획이 패치 테두리와 붙어 보이면 후보에서 제외한다.

### U2. DRAFT_036 Candidate Generation

**Goal:** `035` 기준 좌표를 유지한 `DRAFT_036` 후보를 생성한다.

**Requirements:** R1, R2, R3, R4

**Files:**
- Create: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_036.png`
- Create: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_WHITE_LOGO_OLD_LABEL_DBK_CHECK_LABEL_ZOOM_036.png`
- Create: `02_AI_Work/PV02_MESH/TEST_RH_WOMEN_004/PV_PV02_RH_WOMEN_WEAR_BALL_LABEL_035_036_COMPARE.png`

**Approach:**
- 전체 라벨 크기와 시작점은 유지하고, 왼쪽 패치 내부 마스크를 덜 침식시키는 후보를 선택한다.
- 최종본은 `01_WITH_LOGO`에도 복사한다.

**Test scenarios:**
- Happy path: `P` 시작 필기체가 `035`보다 덜 끊긴다.
- Edge case: 파란 패치 테두리와 흰 라벨 획이 섞여 테두리 깨짐처럼 보이지 않는다.
- Integration: 전체 컷에서 손목 패치가 과하게 눈에 띄거나 로고 중심감이 흔들리지 않는다.
