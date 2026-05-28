# GreenPutt Image Lab Log

작성일: 2026-05-27
담당 역할: Image Lab
상태: 최초 운영 로그

## 목표

GreenPutt 홈페이지가 일반 쇼핑몰처럼 보이지 않고, premium golf homepage처럼 보이도록 이미지 후보를 계속 만든다. Image Lab은 생성만 하지 않는다. 후보를 남기고, 왜 쓸 만한지 설명하고, Art Director가 고를 수 있게 정리한다.

## 이미지 트랙

공통 생성 원칙:

- 제품에 이미 새겨져 있거나 부착된 로고, 패치, 상표, 시그니처 마크는 훼손하지 않는다.
- Polvert처럼 로고가 구매 판단과 상품 식별의 핵심인 경우, 생성 프롬프트에 `로고 보존`을 명시하고 결과 검수 때 가장 먼저 확인한다.
- AI가 로고를 정확히 재현하지 못하면 최종 후보로 바로 쓰지 않고, 실제 로고 합성 또는 원본 촬영본 사용 대상으로 표시한다.

### 1. GreenPutt System Film

목적:

- Zero Head-Up 시스템을 첫 화면에서 바로 이해시키는 hero와 product film 이미지를 만든다.
- 퍼팅 매트, 퍼터, 공 근처 거리 데이터, 거리 피드백 장치가 한 장면에 들어와야 한다.

좋은 후보 기준:

- [ ] 첫눈에 골프/퍼팅 브랜드로 보인다.
- [ ] 공 근처에 거리 데이터가 보이거나 강하게 암시된다.
- [ ] 텍스트를 얹을 수 있는 어두운 여백이 있다.
- [ ] 장치가 너무 SF 장난감처럼 보이지 않는다.
- [ ] Titleist처럼 넓고 신뢰감 있는 campaign scale이 있다.

프롬프트 방향:

```text
Premium Korean golf putting practice campaign image, indoor putting mat, putter head near a white golf ball, subtle projected neon lime distance number on the mat near the ball, cinematic low angle, realistic product photography, dark green and graphite tones, luxury golf brand mood, clean negative space for headline, no logos, no text except the projected distance number
```

### 2. Product Close-Up

목적:

- Crossputt처럼 제품 가까이 들어가는 이미지를 만든다.
- 매트 표면, 퍼터 헤드, 센서/거리 피드백 장치, 공의 위치 관계를 선명하게 보여준다.

좋은 후보 기준:

- [ ] 제품이 화면의 주인공이다.
- [ ] 빛과 반사가 고급스럽다.
- [ ] 구조가 이해된다.
- [ ] 너무 많은 소품이 없다.
- [ ] homepage 중간 섹션이나 제품 페이지에 바로 쓸 수 있다.

프롬프트 방향:

```text
Macro product photograph of a premium putting training system, putter face behind a golf ball on a refined putting mat, compact distance feedback device at the side, projected lime green number on the surface, shallow depth of field, realistic materials, premium golf equipment detail, dark cinematic lighting, no brand text
```

### 3. Polvert StorePick

목적:

- Polvert를 GreenPutt의 핵심 발명품이 아니라 지금 구매 가능한 premium golf gear로 보여준다.
- 장갑 착용감, 그립, 손목/클럽 접점, 소재감을 강조한다.

좋은 후보 기준:

- [ ] 장갑이 선명하고 손/그립 자세가 자연스럽다.
- [ ] 상품 상세와 campaign band 둘 다에 쓸 수 있다.
- [ ] GreenPutt 시스템보다 앞에 나오지 않는다.
- [ ] 너무 패션 화보처럼 흐르지 않고 골프 장비로 보인다.
- [ ] 색상/소재가 실제 제품과 크게 어긋나지 않는다.

프롬프트 방향:

```text
Premium golf glove product photograph, golfer gripping a club with a clean white and black glove, close-up on fingers and grip pressure, refined golf course or indoor practice background softly blurred, luxury sports equipment mood, realistic leather and microfiber texture, clean lighting, no visible logo text unless provided by reference
```

## 후보 기록 형식

새 이미지를 만들거나 선택하면 아래 형식으로 기록한다.

```markdown
### YYYY-MM-DD 후보 N

- 트랙:
- 원본/참조:
- 프롬프트:
- 장점:
- 보완점:
- 사용 후보 위치:
- Art Director 판단:
- 최종 상태: 후보 / 보류 / 선택 / 폐기
```

## 현재 선택 가능 asset

- `prototype/assets/greenputt-system-render.png`: 현재 hero와 system stage에 사용 중인 GreenPutt 시스템 render.
- `prototype/assets/polvert-glove-grip.png`: 현재 StorePick 섹션에 사용 중인 Polvert glove grip 이미지.
- `prototype/assets/greenputt-logo.png`: 현재 header에 사용 중인 GreenPutt logo.
- `prototype/assets/greenputt-hero-signal.jpg`: local AI 후보 `greenputt_hero_2_user_experience.png`를 웹용으로 리사이즈한 hero 이미지. 골퍼, 매트, 거리 신호가 한 장면에 보여 첫 화면에 사용.
- `prototype/assets/greenputt-system-closeup.jpg`: local AI 후보 `greenputt_product_showcase_2_putter.png`를 웹용으로 리사이즈한 제품 close-up 이미지. Zero Head-Up film과 product stage 기본 이미지로 사용.
- `prototype/assets/greenputt-lineup-showcase.jpg`: local AI 후보 `greenputt_product_showcase_3_accessories.png`를 웹용으로 리사이즈한 전체 라인업 이미지. GreenPutt identity band와 putting mat stage에 사용.
- `prototype/assets/greenputt-polvert-showcase.jpg`: local AI 후보 `greenputt_product_showcase.png`를 웹용으로 리사이즈한 Polvert/볼 쇼케이스 이미지. StorePick과 Polvert stage에 사용.
- `prototype/assets/greenputt-putter-macro.jpg`: local AI 후보 `greenputt_hero_section.png`를 웹용으로 리사이즈한 putter macro 이미지. Data Layer stage에 사용.
- `prototype/assets/polvert/logo-locked-v10/polvert-storepick-logo-locked-10-homepage-hero.jpg`: StorePick 대표 이미지. AI에는 빈 검은 패치만 생성하게 하고, 05 폴더의 실제 `폴베르_로고.jpg`를 흰색 투명 로고로 변환해 실제 장갑처럼 회전 합성했다. v10은 가장 큰 검은 패치 컴포넌트를 분리한 뒤 최소 면적 회전 박스를 만들고, 그 회전 박스의 수직/수평 중앙 교차점에 로고를 맞췄다. 로고 각도는 회전 박스의 가로축을 따르며, 크기는 회전 박스의 긴 변 기준으로 산정한다.
- `prototype/assets/polvert/logo-locked-v10/polvert-storepick-logo-locked-contact-sheet.jpg`: 실제 로고 회전 합성 후보 10장 검토용 시트.
- `prototype/assets/polvert/logo-locked-v10/polvert-storepick-logo-locked-centerline-check.jpg`: 검은 패치 회전 박스와 회전된 중앙 십자선을 확인하기 위한 검수 이미지.
- Google Drive export: `GreenPutt Website/11_Final_Web_Exports/Polvert/StorePick_Logo_Locked`

### 2026-05-27 후보 1

- 트랙: GreenPutt System Film
- 원본/참조: `GreenPutt Website/07_AI_Image_Work/Generated_Images_And_Photoshop/사진첩/20260526/greenputt_hero_2_user_experience.png`
- 프롬프트: 기존 local AI candidate 사용. 웹에서는 canvas signal overlay와 함께 재구성.
- 장점: 실제 퍼팅 자세, 매트, 거리 신호, 장치가 한 화면에 보여 GreenPutt homepage identity가 즉시 읽힌다.
- 보완점: 이미지 안의 로고와 장치 디테일은 최종 실물 촬영으로 교체 필요.
- 사용 후보 위치: Home hero
- Art Director 판단: 선택
- 최종 상태: 선택

### 2026-05-27 후보 2

- 트랙: Product Close-Up
- 원본/참조: `greenputt_product_showcase_2_putter.png`, `greenputt_product_showcase_3_accessories.png`, `greenputt_hero_section.png`
- 프롬프트: 기존 local AI candidate 사용. 제품 stage hover/focus 전환 이미지로 재배치.
- 장점: 제품 단품보다 GreenPutt lineup이 하나의 퍼팅 시스템으로 보인다.
- 보완점: 실제 제품과 다를 수 있는 로고, 소재, 비율은 prototype label 또는 내부 검수 필요.
- 사용 후보 위치: Zero Head-Up film, System stage, Identity band
- Art Director 판단: 선택
- 최종 상태: 선택

### 2026-05-27 후보 3

- 트랙: Polvert StorePick
- 원본/참조: `greenputt_product_showcase.png`
- 프롬프트: 기존 local AI candidate 사용. Polvert를 GreenPutt 세계관 안의 구매 가능 gear로 배치.
- 장점: 장갑과 볼이 선명하고 검은 배경이라 프리미엄 제품 band에 적합하다.
- 보완점: 실상품 로고/디테일과 일치 여부는 판매 전 확인 필요.
- 사용 후보 위치: StorePick, Polvert product stage
- Art Director 판단: 선택
- 최종 상태: 선택

### 2026-05-27 작동 원리 reference

- 트랙: GreenPutt System Film
- 원본/참조: `GreenPutt Website/99_Inbox_To_Sort/그린펏 시현 예상도.mp4`
- 프롬프트: 해당 없음. 사용자가 업로드한 시현 예상도 영상을 제품 원리 reference로 확인.
- 장점: "공을 따라 고개를 드는 순간을 막고, 시선이 머무는 자리의 숫자 포인트로 거리감을 확인한다"는 작동 원리가 명확하다.
- 보완점: 영상 자체는 prototype asset으로 복사하지 않고, 원리만 UI 인터랙션에 반영한다.
- 사용 후보 위치: Zero Head-Up 작동 원리 섹션
- Art Director 판단: 반영
- 최종 상태: reference 반영

### 2026-05-27 후보 4

- 트랙: GreenPutt System Film
- 원본/참조: `prototype/assets/greenputt-system-render.png`
- 저장 위치: Google Drive `GreenPutt Website/12_To_Review/02_AI_Candidates/2026-05-27_reference-based_generation/greenputt-system-hero-render-ai-candidate.png`
- 프롬프트: 기존 GreenPutt 시스템 렌더를 기반으로 어두운 실내 스튜디오, 프리미엄 제품 필름, 왼쪽 headline-safe 여백, 공 근처 lime 거리 피드백을 요청.
- 장점: 기존 제품 구조를 유지하면서 hero용 어두운 여백과 캠페인 무드가 생김.
- 보완점: 최종 공개 전 실제 제품 형상, 로고 노출, 거리 숫자 표현 정확도를 재확인해야 함.
- 사용 후보 위치: homepage hero 또는 첫 product film band.
- Art Director 판단: 후보.
- 최종 상태: 후보

### 2026-05-27 후보 5

- 트랙: Product Close-Up
- 원본/참조: `prototype/assets/greenputt-system-render.png`
- 저장 위치: Google Drive `GreenPutt Website/12_To_Review/02_AI_Candidates/2026-05-27_reference-based_generation/greenputt-system-closeup-ai-candidate.png`
- 프롬프트: 기존 렌더 기반으로 매트, 공, 퍼터, 거리 피드백 장치를 낮은 카메라 시점의 studio close-up으로 요청.
- 장점: Spline/WebGL 섹션을 만들 때 참고하기 좋은 제품 거리감과 조명 분위기가 있음.
- 보완점: 프로젝션 숫자와 장치 세부 형상이 실제 제품 사양과 맞는지 확인 필요.
- 사용 후보 위치: system section, technology close-up, 3D section visual reference.
- Art Director 판단: 후보.
- 최종 상태: 후보

### 2026-05-27 후보 6

- 트랙: Polvert StorePick
- 원본/참조: `prototype/assets/polvert-glove-grip.png`
- 저장 위치: Google Drive `GreenPutt Website/12_To_Review/02_AI_Candidates/2026-05-27_reference-based_generation/polvert-glove-grip-ai-candidate.png`
- 프롬프트: Polvert 장갑 착용/그립 사진 기반으로 프리미엄 실내 골프 연습장 배경, 장갑 중심 close-up을 요청. 초기 프롬프트에 읽히는 브랜드 텍스트/로고 금지를 포함함.
- 장점: 착용샷, 소재감, 그립 자세는 자연스러움.
- 보완점: 원본에 있던 Polvert 로고가 사라져 상품 식별력이 약함.
- 사용 후보 위치: 착용감 참고.
- Art Director 판단: 로고 없는 버전은 최종 후보로 부적합.
- 최종 상태: 보류

### 2026-05-27 후보 7

- 트랙: Polvert StorePick
- 원본/참조: `prototype/assets/polvert-glove-grip.png`
- 저장 위치: Google Drive `GreenPutt Website/12_To_Review/02_AI_Candidates/2026-05-27_reference-based_generation/polvert-glove-grip-logo-preserved-ai-candidate.png`
- 프롬프트: 후보 6의 문제를 수정해 검은 패치와 흰색 Polvert 스타일 스크립트 로고를 반드시 보존하도록 재생성.
- 장점: 장갑 착용샷의 자연스러움과 Polvert 상품 식별력이 함께 살아남.
- 보완점: AI가 만든 로고는 실제 벡터 로고와 100% 동일하지 않을 수 있으므로 최종 광고/상세페이지용은 실제 로고 합성 또는 원본 촬영본 사용이 안전함.
- 사용 후보 위치: StorePick campaign band, Polvert product section.
- Art Director 판단: 후보 6보다 우선 검토.
- 최종 상태: 후보

### 2026-05-27 후보 8

- 트랙: Polvert StorePick
- 원본/참조: `05_Product_Polvert_Glove/폴베르_로고.jpg`, `05_Product_Polvert_Glove/000.폴베르자료실/001.극세사_장갑/카테고리_라인업_남양(3).jpg`
- 저장 위치: `prototype/assets/polvert/logo-locked-v10/`
- Google Drive 저장 위치: `GreenPutt Website/11_Final_Web_Exports/Polvert/StorePick_Logo_Locked`
- 프롬프트: Polvert 극세사 오른손 장갑 착용/그립/필드 라이프스타일 이미지를 생성하되, 손등 검은 패치는 완전히 빈 상태로 남기도록 요청. 이후 실제 로고 파일을 흰색 투명 로고로 변환해 패치 위에 합성했다. v10에서는 주변 검은 물체를 제외하고 가장 큰 검은 패치 컴포넌트만 분리한 다음, 패치가 차지하는 공간을 따라 도는 최소 면적 회전 박스를 만들고 그 박스의 중앙 십자점에 로고 중심을 맞췄다. 로고도 박스의 가로축과 같은 기울기를 따르게 했고, 크기는 화면 기준 박스가 아니라 회전 박스의 긴 변 길이를 기준으로 잡았다.
- 장점: AI가 만든 제각각의 가짜 로고를 제거하고, 실제 Polvert 로고 형태와 원본 장갑의 회전 패턴을 유지한다. 홈쇼핑 제품 컷과 필드/연습장 라이프스타일 컷이 함께 있다.
- 보완점: 최종 상업 광고물에서는 실물 촬영 또는 패치 표면 원근 왜곡을 더 정교하게 맞춘 합성본이 가장 안전하다.
- 사용 후보 위치: StorePick campaign band, Polvert product card, Polvert detail page 후보.
- Art Director 판단: 대표 컷 `polvert-storepick-logo-locked-10-homepage-hero.jpg` 선택.
- 최종 상태: 선택

### 2026-05-28 후보 9

- 트랙: Polvert PV01 structure test
- 원본/참조: `docs/agent-studio/polvert-pv01-rh-microfiber-feature-analysis.md`, `05_Product_Polvert_Glove/01_Reference_Source/PV01_MICROFIBER/RH_MEN/`
- 저장 위치: Google Drive `GreenPutt Website/05_Product_Polvert_Glove/02_AI_Work/PV01_MICROFIBER/TEST_RH_MEN_001/PV_PV01_RH_MEN_PALM_WHITE_LOGO_NONE_LABEL_NONE_DRAFT_001.jpg`
- 프롬프트: 오른손 남성 흰색 극세사 장갑의 `PALM` 컷을 요청했다. 핵심 조건은 오른손 방향, 오픈팜, 반손가락, 노출 손끝, 검은 손가락 밴드, 흰색 파이핑, 매끈한 극세사 질감, 빈 검은 손목 라벨 영역이다. 로고와 읽히는 글자는 금지했다.
- 장점: PV01의 가장 중요한 오픈팜 구조, 노출 손끝, 검은 손가락 밴드가 선명하게 재현됐다. 로고를 AI가 임의로 만들지 않았다.
- 보완점: 손목 라벨은 실제 제품처럼 가로형 검은 라벨에 더 가깝게 유도해야 한다. 손목 원단의 퀼팅/주름이 실제 극세사 레퍼런스보다 조금 장식적으로 보인다.
- 사용 후보 위치: PV01 오른손 극세사 생성 프롬프트 검증, 다음 `PALM` 컷 후보 생성 기준.
- Art Director 판단: 구조 학습 테스트 후보.
- 최종 상태: 후보

## 다음 보완

- [ ] Polvert 실제 제품군별 reference를 더 모아 착용/그립 후보를 생성한다.
- [x] 매트와 거리 피드백 장치의 실물/렌더 reference를 추가 확인한다.
- [x] 최종 후보는 source, prompt, 생성일, 사용 위치를 남긴다.
- [x] private/admin 자료가 public asset으로 들어오지 않았는지 CSO 체크리스트와 함께 확인한다.
