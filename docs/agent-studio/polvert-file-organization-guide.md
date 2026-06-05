# Polvert Glove File Organization Guide

이 문서는 폴베르 골프장갑 자료를 정리하고, 이후 AI 이미지 생성 작업에서 같은 기준으로 파일을 찾고 관리하기 위한 가이드다.

목표는 파일명만 봐도 아래 정보를 바로 알 수 있게 만드는 것이다.

- 어떤 제품군인지
- 오른손/왼손/양손인지
- 남성/여성용인지
- 어떤 촬영 컷인지
- 색상은 무엇인지
- 로고와 라벨 문구가 어떤 상태인지
- 원본/작업본/최종본 중 무엇인지

## 1. 폴더 구조

기준 위치:

```text
GreenPutt Website/
  05_Product_Polvert_Glove/
```

추천 구조:

```text
05_Product_Polvert_Glove/
  00_Brand/
    01_Logo_Original/
    02_Logo_Work/
    03_Logo_Upscale_Archive/

  01_Reference_Source/
    PV01_MICROFIBER/
      RH_MEN/
      RH_WOMEN/
      LH_MEN/
      LH_WOMEN/
      PAIR_MEN/
      PAIR_WOMEN/
      DETAIL_PATCH/
      DETAIL_MATERIAL/

    PV02_MESH/
      RH_MEN/
      RH_WOMEN/
      LH_MEN/
      LH_WOMEN/
      PAIR_MEN/
      PAIR_WOMEN/
      DETAIL_PATCH/
      DETAIL_MATERIAL/

    PV03_SHEEPSKIN/
      RH_MEN/
      RH_WOMEN/
      LH_MEN/
      LH_WOMEN/
      PAIR_MEN/
      PAIR_WOMEN/
      DETAIL_PATCH/
      DETAIL_MATERIAL/

    PV04_WINTER_SHEEPSKIN_WOOL/
      RH_MEN/
      RH_WOMEN/
      LH_MEN/
      LH_WOMEN/
      PAIR_MEN/
      PAIR_WOMEN/
      DETAIL_PATCH/
      DETAIL_MATERIAL/
      DETAIL_INNER_WOOL/

  02_AI_Work/
    PV01_MICROFIBER/
    PV02_MESH/
    PV03_SHEEPSKIN/
    PV04_WINTER_SHEEPSKIN_WOOL/

  03_Final_Exports/
    PV01_MICROFIBER/
    PV02_MESH/
    PV03_SHEEPSKIN/
    PV04_WINTER_SHEEPSKIN_WOOL/
```

## 2. 제품 코드

```text
PV01 = 극세사
PV02 = 메쉬
PV03 = 양피
PV04 = 방한장갑, 양피 + 울
```

폴더명은 더 길게 쓴다.

```text
PV01_MICROFIBER
PV02_MESH
PV03_SHEEPSKIN
PV04_WINTER_SHEEPSKIN_WOOL
```

파일명에서는 짧은 코드만 쓴다.

```text
PV01
PV02
PV03
PV04
```

## 3. 기본 파일명 규칙

제품 사진, 레퍼런스 사진, 최종 이미지의 기본 규칙은 아래 순서를 따른다.

```text
PV_{PRODUCT}_{HAND-GENDER}_{VIEW}_{COLOR}_{LOGO}_{LABEL}_{NO}.jpg
```

예시:

```text
PV_PV01_RH_MEN_PALM_WHITE_LOGO_OLD_LABEL_MIK_003.jpg
PV_PV01_RH_MEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
PV_PV02_LH_WOMEN_BACK_PATCH_WHITE_LOGO_NEW_LABEL_NONE_001.jpg
PV_PV03_LH_WOMEN_BACK_PATCH_WHITE_LOGO_NEW_LABEL_NONE_001.jpg
PV_PV04_PAIR_WOMEN_DETAIL_INNER_WOOL_BLACK_LOGO_NONE_LABEL_NONE_001.jpg
```

핵심 순서:

```text
제품 -> 손/성별 -> 컷 종류 -> 색상 -> 로고 상태 -> 라벨 상태 -> 번호
```

## 4. HAND-GENDER 코드

```text
RH_MEN      = 오른손 남성
RH_WOMEN    = 오른손 여성
LH_MEN      = 왼손 남성
LH_WOMEN    = 왼손 여성
PAIR_MEN    = 양손 남성
PAIR_WOMEN  = 양손 여성
NA          = 손/성별 구분 없음
```

사용 예시:

```text
PV_PV01_RH_MEN_BACK_PATCH_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
PV_PV01_PAIR_WOMEN_FLATLAY_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
PV_PV02_NA_DETAIL_MATERIAL_MESH_WHITE_LOGO_NONE_LABEL_NONE_001.jpg
PV_PV03_NA_DETAIL_MATERIAL_SHEEPSKIN_WHITE_LOGO_NONE_LABEL_NONE_001.jpg
```

## 5. VIEW 코드

촬영 컷이나 레퍼런스 성격을 나타낸다.

```text
FRONT               = 제품 전체 전면
BACK_PATCH          = 손등 로고 패치면
PALM                = 손바닥면 전체
WEAR_GRIP           = 착용 후 골프채 그립을 잡은 컷
WEAR_BALL           = 착용 후 골프공을 잡거나 받친 컷
WEAR_POSE           = 골프채/공 없이 착용 포즈
FLATLAY             = 테이블/바닥 위 제품 컷
DETAIL_PATCH        = 손등 로고 패치 확대
DETAIL_PALM_LABEL   = 손바닥면/손목 라벨 확대
DETAIL_MATERIAL     = 소재 질감 확대
DETAIL_INNER_WOOL   = 방한장갑 내부 울 확대
PACKAGE             = 패키지 컷
CONTACT_SHEET       = 여러 후보를 모은 검토용 시트
ALIGNMENT_CHECK     = 로고 정렬 검수용 이미지
```

사용 예시:

```text
PV_PV01_RH_MEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
PV_PV01_RH_MEN_WEAR_BALL_WHITE_LOGO_NONE_LABEL_NONE_001.jpg
PV_PV01_RH_MEN_DETAIL_PALM_LABEL_WHITE_LOGO_OLD_LABEL_MIK_001.jpg
PV_PV04_NA_DETAIL_INNER_WOOL_BLACK_LOGO_NONE_LABEL_NONE_001.jpg
```

## 6. COLOR 코드

```text
WHITE
BLACK
GRAY
BEIGE
NAVY
RED
MIXED
```

장갑이 흰색이고 부분 배색만 검은색이면 기본 색상은 `WHITE`로 둔다.

예:

```text
PV_PV01_RH_MEN_PALM_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
```

## 7. LOGO 코드

`LOGO`는 Polvert 로고 형태 또는 로고 유무를 나타낸다.

```text
LOGO_OLD      = 구형 Polvert 로고 있음
LOGO_NEW      = 신형 Polvert 로고 있음
LOGO_NONE     = 로고 없음
BLANK_PATCH   = 검은 패치만 있고 로고 없음, AI 합성용
```

예:

```text
PV_PV01_RH_MEN_BACK_PATCH_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
PV_PV01_RH_MEN_WEAR_BALL_WHITE_LOGO_NONE_LABEL_NONE_001.jpg
PV_PV01_RH_MEN_WEAR_GRIP_WHITE_BLANK_PATCH_LABEL_NONE_001.jpg
```

주의:

- `LOGO_OLD`와 `LOGO_NEW`는 Polvert 글자 로고의 형태를 뜻한다.
- 손목 라벨 안의 하단 문구는 `LABEL` 코드에서 따로 관리한다.

## 8. LABEL 코드

`LABEL`은 손바닥면/손목 라벨의 하단 문구 상태를 나타낸다.

```text
LABEL_MIK   = Made in Korea
LABEL_DBK   = Design by KOREA
LABEL_NONE  = 라벨 문구 없음
```

현재 기존 이미지 중 일부는 아래 형태다.

```text
Polvert
Made in Korea
```

이 경우:

```text
LOGO_OLD_LABEL_MIK
```

앞으로 적용할 새 기준은 아래 형태다.

```text
Polvert
Design by KOREA
```

이 경우:

```text
LOGO_OLD_LABEL_DBK
```

예:

```text
PV_PV01_RH_MEN_PALM_WHITE_LOGO_OLD_LABEL_MIK_003.jpg
PV_PV01_RH_MEN_PALM_WHITE_LOGO_OLD_LABEL_DBK_003.jpg
PV_PV01_RH_MEN_DETAIL_PALM_LABEL_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
```

## 9. 번호 규칙

번호는 항상 세 자리로 쓴다.

```text
001
002
003
...
```

같은 조건의 사진이 여러 장이면 번호만 증가시킨다.

```text
PV_PV01_RH_MEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
PV_PV01_RH_MEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_002.jpg
PV_PV01_RH_MEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_003.jpg
```

## 10. 대표 상황별 파일명 예시

### 손바닥면, 구형 로고, Made in Korea

```text
PV_PV01_RH_MEN_PALM_WHITE_LOGO_OLD_LABEL_MIK_001.jpg
```

### 손바닥면, 구형 로고, Design by KOREA

```text
PV_PV01_RH_MEN_PALM_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
```

### 로고와 라벨이 없는 공 잡은 컷

```text
PV_PV01_RH_MEN_WEAR_BALL_WHITE_LOGO_NONE_LABEL_NONE_001.jpg
```

### 골프채 그립을 잡은 착용샷

```text
PV_PV01_RH_MEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_MIK_001.jpg
PV_PV01_RH_MEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
```

### AI 합성 전 빈 검은 패치

```text
PV_PV01_RH_MEN_WEAR_GRIP_WHITE_BLANK_PATCH_LABEL_NONE_001.jpg
```

### 손등 로고 패치 확대

```text
PV_PV01_RH_MEN_DETAIL_PATCH_WHITE_LOGO_OLD_LABEL_NONE_001.jpg
```

### 손목 라벨 확대

```text
PV_PV01_RH_MEN_DETAIL_PALM_LABEL_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
```

### 소재 질감 확대

```text
PV_PV01_NA_DETAIL_MATERIAL_MICROFIBER_WHITE_LOGO_NONE_LABEL_NONE_001.jpg
PV_PV02_NA_DETAIL_MATERIAL_MESH_WHITE_LOGO_NONE_LABEL_NONE_001.jpg
PV_PV03_NA_DETAIL_MATERIAL_SHEEPSKIN_WHITE_LOGO_NONE_LABEL_NONE_001.jpg
PV_PV04_NA_DETAIL_MATERIAL_WOOL_INNER_BLACK_LOGO_NONE_LABEL_NONE_001.jpg
```

### 양손 남성/여성

```text
PV_PV01_PAIR_MEN_FRONT_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
PV_PV01_PAIR_WOMEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_001.jpg
PV_PV04_PAIR_WOMEN_DETAIL_INNER_WOOL_BLACK_LOGO_NONE_LABEL_NONE_001.jpg
```

## 11. DETAIL_MATERIAL 폴더 사용법

`DETAIL_MATERIAL`은 상세페이지 완성 이미지 폴더가 아니다.

이 폴더는 AI에게 제품 소재를 정확히 알려주기 위한 원본 레퍼런스 폴더다.

넣으면 좋은 이미지:

- 극세사 원단 질감
- 메쉬 원단 질감
- 양피 가죽 결
- 방한장갑 울 안감
- 손목 밴드 질감
- 타공 디테일
- 박음질 디테일

파일명 예:

```text
PV_PV01_NA_DETAIL_MATERIAL_MICROFIBER_WHITE_LOGO_NONE_LABEL_NONE_001.jpg
PV_PV02_NA_DETAIL_MATERIAL_MESH_WHITE_LOGO_NONE_LABEL_NONE_001.jpg
PV_PV01_NA_DETAIL_MATERIAL_PERFORATION_WHITE_LOGO_NONE_LABEL_NONE_001.jpg
PV_PV03_NA_DETAIL_MATERIAL_SHEEPSKIN_WHITE_LOGO_NONE_LABEL_NONE_001.jpg
PV_PV04_NA_DETAIL_MATERIAL_WOOL_INNER_BLACK_LOGO_NONE_LABEL_NONE_001.jpg
```

상세페이지 최종 이미지는 `03_Final_Exports`에 저장한다.

예:

```text
03_Final_Exports/PV01_MICROFIBER/
  PV_PV01_DETAIL_PAGE_HERO_WHITE_LOGO_OLD_LABEL_DBK_FINAL_001.jpg
  PV_PV01_DETAIL_PAGE_MATERIAL_WHITE_LOGO_NONE_LABEL_NONE_FINAL_001.jpg
```

## 12. AI 작업용 파일명

AI 작업 중간 결과물은 `02_AI_Work`에 넣는다.

기본 규칙:

```text
PV_{PRODUCT}_{HAND-GENDER}_{SCENE}_{COLOR}_{LOGO}_{LABEL}_{STATUS}_{NO}.jpg
```

`STATUS` 코드:

```text
DRAFT       = 초안
SELECTED    = 후보로 선택
FINAL       = 최종
CHECK       = 검수용
```

예:

```text
PV_PV01_RH_MEN_HOME_SHOPPING_WHITE_LOGO_OLD_LABEL_DBK_DRAFT_001.jpg
PV_PV01_RH_MEN_STUDIO_DETAIL_WHITE_LOGO_OLD_LABEL_DBK_SELECTED_002.jpg
PV_PV01_RH_MEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_FINAL_001.jpg
PV_PV01_LOGO_ALIGNMENT_CHECK_WHITE_LOGO_OLD_LABEL_DBK_CHECK_001.jpg
```

## 13. 최종 export 파일명

최종본은 `03_Final_Exports`에 넣고, 파일명에 `FINAL`을 포함한다.

```text
PV_PV01_RH_MEN_WEAR_GRIP_WHITE_LOGO_OLD_LABEL_DBK_FINAL_001.jpg
PV_PV01_PAIR_WOMEN_FLATLAY_WHITE_LOGO_OLD_LABEL_DBK_FINAL_001.jpg
PV_PV04_PAIR_MEN_WINTER_GOLF_BLACK_LOGO_NEW_LABEL_DBK_FINAL_001.jpg
```

로고 버전별로 함께 관리할 때는 아래 구조를 우선한다.

```text
03_Final_Exports/
  PV02_MESH/
    RH_WOMEN/
      01_NO_LOGO/
        PV_PV02_RH_WOMEN_BACK_PATCH_WHITE_LOGO_NONE_LABEL_NONE_FINAL_001.png

      02_WITH_LOGO/
        01_OLD_LOGO/
          PV_PV02_RH_WOMEN_BACK_PATCH_WHITE_LOGO_OLD_LABEL_NONE_FINAL_001.png

        02_NEW_LOGO/
          PV_PV02_RH_WOMEN_BACK_PATCH_WHITE_LOGO_NEW_LABEL_NONE_FINAL_001.png

      03_ALIGNMENT_CHECK/
        PV_PV02_RH_WOMEN_ALIGNMENT_CHECK_WHITE_LOGO_NEW_LABEL_DBK_*.png
```

원칙:

- `01_NO_LOGO`에는 AI 생성 또는 보정 단계에서 로고/문자가 없는 최종 베이스만 넣는다.
- `02_WITH_LOGO/01_OLD_LOGO`에는 구형 Polvert 로고가 들어간 승인본을 넣는다.
- `02_WITH_LOGO/02_NEW_LOGO`에는 신형 Polvert 로고로 교체한 승인본을 넣는다.
- 같은 구도에서 OLD와 NEW를 모두 남길 때는 파일명에서 `LOGO_OLD`와 `LOGO_NEW`만 다르고 나머지 정보는 최대한 동일하게 유지한다.
- 검수용 축/정렬 이미지는 제품 최종본과 섞지 않고 `03_ALIGNMENT_CHECK`에 둔다.

## 14. 로고 파일명 규칙

로고 파일은 제품 사진과 분리해서 `00_Brand`에 관리한다.

기본 규칙:

```text
POLVERT_LOGO_{VERSION}_{COLOR}_{BG}_{USE}_{SCALE}_{NO}.png
```

코드:

```text
VERSION = OLD / NEW
COLOR   = BLACK / WHITE
BG      = BG_TRANSPARENT / BG_WHITE / BG_BLACK
USE     = ORIGINAL / PATCH / WEB / PRINT
SCALE   = ORIGINAL / WORK / 4X
```

예:

```text
POLVERT_LOGO_OLD_BLACK_BG_TRANSPARENT_PATCH_WORK_001.png
POLVERT_LOGO_OLD_WHITE_BG_TRANSPARENT_PATCH_WORK_001.png
POLVERT_LOGO_NEW_BLACK_BG_WHITE_ORIGINAL_ORIGINAL_001.jpg
POLVERT_LOGO_NEW_WHITE_BG_TRANSPARENT_PATCH_4X_001.png
```

추천 저장 위치:

```text
00_Brand/
  01_Logo_Original/
    원본 AI/JPG/PNG

  02_Logo_Work/
    합성에 바로 쓸 투명 PNG

  03_Logo_Upscale_Archive/
    4X 업스케일 보관본
```

## 15. 로고 합성 회전축 / 중심 정렬 공통 규칙

Polvert 로고는 AI가 직접 그리게 하지 않고 실제 로고 파일을 후처리로 합성한다. 이때 기준은 화면의 수평/수직 좌표가 아니라, 패치가 놓인 물리적인 면의 로컬 좌표다.

공통 절차:

```text
1. 패치의 실제 면을 먼저 찾는다.
2. 패치 기준 X축을 정한다. 보통 패치 상단 테두리 또는 패치의 물리적 가로 방향이다.
3. 패치 기준 Y축은 X축에서 정확히 90도 회전한 축으로 둔다.
4. 패치 픽셀을 이 X/Y축에 투영해 회전 직사각형을 만든다.
5. 실제 로고/라벨 객체도 같은 X/Y축에 투영해 회전 직사각형을 만든다.
6. 로고/라벨 객체의 회전 직사각형 중심을 패치 회전 직사각형 중심에 맞춘다.
7. 최종 검수 이미지에는 패치 박스와 로고 박스가 같은 X/Y축을 공유하는 회전 직사각형으로 표시되어야 한다.
```

검수 색상 기준:

```text
빨간선 = 로고 객체의 X축, Polvert 글자 가로축
초록선 = 로고 객체의 Y축, 빨간선에서 정확히 90도인 축
노랑 박스 = 패치 영역을 빨간/초록 축에 투영한 회전 직사각형
핑크 박스 = 로고/라벨 영역을 같은 축에 투영한 회전 직사각형
하늘색 보조선 = Polvert 글자 가로축 검수선
```

중요한 실패 패턴:

- 화면 기준 bbox로 노랑/핑크 박스를 그리면 안 된다. 패치가 기울어진 컷에서는 박스도 패치 X/Y축과 같은 방향으로 기울어져야 한다.
- 로고 박스 중심만 맞고 `Polvert` 글자 가로축이 빨간 X축과 평행하지 않으면 실패다.
- 패치가 곡면에 있더라도 먼저 보이는 패치 테두리와 손목 방향을 기준으로 로컬 X/Y축을 세운 뒤, 그 축에 맞춰 로고를 회전/중심 정렬한다.
- PIL 같은 이미지 처리 도구는 회전 부호가 화면 좌표와 반대로 보일 수 있다. 최종 합성 전에 `Polvert` 글자 가로축이 빨간 X축과 평행한지 검수 이미지를 만들어 확인한다.
- 정렬이 맞는지 애매하면 `ALIGNMENT_CHECK` 파일을 저장하고, 수치보다 시각적으로 패치 면에 붙어 보이는지를 우선 확인한다.

## 16. 정리 체크리스트

파일을 넣기 전에 아래 순서로 확인한다.

```text
1. 제품군이 맞는가? PV01 / PV02 / PV03 / PV04
2. 손/성별이 맞는가? RH_MEN / LH_WOMEN / PAIR_MEN 등
3. 컷 종류가 맞는가? PALM / WEAR_GRIP / WEAR_BALL / DETAIL_PATCH 등
4. 색상이 맞는가? WHITE / BLACK 등
5. 로고 상태가 맞는가? LOGO_OLD / LOGO_NEW / LOGO_NONE / BLANK_PATCH
6. 라벨 문구가 맞는가? LABEL_MIK / LABEL_DBK / LABEL_NONE
7. 번호가 세 자리인가? 001 / 002 / 003
8. 레퍼런스는 01_Reference_Source에, AI 작업물은 02_AI_Work에, 최종본은 03_Final_Exports에 넣었는가?
```

## 17. 새 채팅에서 요청할 때 쓰는 예시

아래처럼 말하면 바로 작업 기준을 잡기 쉽다.

```text
PV01 극세사 기준으로 RH_MEN, WEAR_GRIP, WHITE, LOGO_OLD, LABEL_DBK 최종 이미지를 만들어줘.
```

또는:

```text
PV02 메쉬 기준으로 RH_WOMEN, WEAR_POSE, WHITE, LOGO_NEW, LABEL_DBK 최종 이미지를 만들어줘.
```

또는:

```text
PV04 방한장갑 기준으로 PAIR_WOMEN, 겨울 필드 라이프스타일 컷을 만들고, 로고는 LOGO_NEW, 라벨은 LABEL_DBK로 맞춰줘.
```

또는:

```text
PV01의 PALM 레퍼런스 중 LABEL_MIK인 구버전들을 LABEL_DBK 기준으로 바꿀 수 있게 후보 이미지를 만들어줘.
```
