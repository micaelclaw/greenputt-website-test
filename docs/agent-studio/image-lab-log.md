# GreenPutt Image Lab Log

작성일: 2026-05-27
담당 역할: Image Lab
상태: 최초 운영 로그

## 목표

GreenPutt 홈페이지가 일반 쇼핑몰처럼 보이지 않고, premium golf homepage처럼 보이도록 이미지 후보를 계속 만든다. Image Lab은 생성만 하지 않는다. 후보를 남기고, 왜 쓸 만한지 설명하고, Art Director가 고를 수 있게 정리한다.

## 이미지 트랙

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

## 다음 보완

- [ ] Polvert 실제 제품군별 reference를 더 모아 착용/그립 후보를 생성한다.
- [ ] 매트와 거리 피드백 장치의 실물/렌더 reference를 추가 확인한다.
- [ ] 최종 후보는 source, prompt, 생성일, 사용 위치를 남긴다.
- [ ] private/admin 자료가 public asset으로 들어오지 않았는지 CSO 체크리스트와 함께 확인한다.
