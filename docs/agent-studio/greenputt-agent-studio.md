# GreenPutt Agent Studio

작성일: 2026-05-27
상태: 운영 모델 v1

## 목적

GreenPutt 웹사이트 제작은 `총괄 PM + 자동 작업 루프` 방식으로 운영한다.

사용자는 공동 목표와 중요한 사업/브랜드 결정을 승인한다. 각 에이전트는 자기 직책에 맞는 산출물을 만들고, 결과를 저장소의 Markdown 문서와 PR로 공유한다. 사용자를 부르는 순간은 브랜드 방향, 구매 흐름, 공개 배포, 보안 리스크처럼 실제 의사결정이 필요한 때로 제한한다.

## 운영 모드

- 총괄 PM은 목표, 범위, 우선순위, 역할 배정, 승인 게이트, 최종 통합을 책임진다.
- 전문 에이전트는 채팅 기억이 아니라 저장소 문서를 기준으로 일한다.
- 작업 단위가 끝나면 브랜치, 커밋, 한국어 PR 설명으로 변경 이력을 남긴다.
- 낮은 리스크의 탐색 작업은 빠르게 진행한다.
- 공개 사이트, 커머스, 문의폼, 고객 데이터, 보안 관련 변경은 승인 게이트를 둔다.

## 역할 분담

| 역할 | 책임 | 공유 문서 |
| --- | --- | --- |
| 총괄 PM | 목표를 작업 단위로 쪼개고, 역할을 배정하고, PR 범위를 작게 유지하고, 사용자 승인 시점을 판단한다. | `docs/agent-studio/greenputt-agent-studio.md` |
| Brand Strategist | GreenPutt의 정체성을 지킨다. 핵심은 프리미엄 퍼팅 퍼포먼스, Zero Head-Up, 공 근처 거리 피드백이다. | `PROJECT_BRIEF.md` |
| Copy Planner | 사업계획서의 강점을 홈페이지 문구, 섹션 메시지, CTA, 제품 상태 라벨로 바꾼다. | `docs/superpowers/specs/` |
| Image Lab | Polvert, 퍼팅 매트, 거리측정기, 골프 사용 장면 이미지를 계속 생성하고 후보화한다. | 향후 `docs/agent-studio/image-lab-log.md` |
| Art Director | 이미지 후보를 고르고, 홈 배치, 시각 위계, 프리미엄 골프 분위기를 결정한다. | 홈페이지 spec과 `prototype/` |
| Frontend Motion | 인터랙티브 홈, 스크롤 연출, 반응형 레이아웃, asset-ready 섹션을 구현한다. | `prototype/` 또는 향후 production app |
| Commerce Bridge | Polvert 구매 경로를 Imweb으로 연결하고, 뒤로가기/복귀 흐름을 검증한다. | `CUSTOM_COMMERCE_REQUIREMENTS.md` |
| Asset Librarian | 원본 에셋, 생성 후보, 최종 export, 프롬프트, 교체 상태를 관리한다. | `ASSET_INVENTORY.md` |
| QA Critic | PR 전에 데스크톱/모바일 레이아웃, 링크, 문구 명확성, 이미지 렌더링, 회귀 리스크를 확인한다. | PR 메모와 QA 리포트 |
| CSO | gstack `/cso` 방식으로 보안 자세를 점검하고, 체크된 것과 보완할 것을 쉬운 체크리스트로 유지한다. | `docs/agent-studio/cso-security-checklist.md` |
| Release Manager | 브랜치, 커밋, 한국어 PR/MR 설명, merge queue를 관리한다. | Git history와 PR/MR 본문 |

## 사용자 승인 게이트

아래 항목이 바뀔 때만 사용자에게 확인한다.

- 브랜드 방향, hero 문구, 제품 우선순위, 벤치마크 해석
- 공개적으로 사용할 최종 이미지 세트
- Polvert 구매 경로, Imweb handoff, 문의/예약 흐름, 고객 데이터 처리
- production 기술 스택, 호스팅, analytics, form provider, 결제 관련 연동
- 공개 배포, 외부 공유, 높은 리스크 변경의 main 병합, rollback 결정

## PR/MR 변경 이력 규칙

의미 있는 작업 단위는 반드시 추적 가능한 이력으로 남긴다.

1. tracked file을 수정하기 전에 `codex/*` 브랜치를 만든다.
2. 작업 단위는 나중에 되돌리기 쉬울 만큼 작게 유지한다.
3. 가장 관련 있는 명령이나 브라우저 확인으로 검증한다.
4. 의도한 파일만 stage하고 commit한다.
5. branch를 push하고 PR/MR을 만든다.
6. PR/MR 본문은 한국어로 작성한다.
7. 무엇을 바꿨는지, 왜 바꿨는지, 어떻게 검증했는지, 남은 리스크와 rollback 방법을 적는다.

기본 merge 정책:

- 문서, 기획, 정적 프로토타입 변경은 검증 후 merge queue에 넣는다.
- 공개 사이트, commerce bridge, 문의폼, analytics, deployment, 보안 민감 변경은 명시적 승인 후 merge한다.

## 브랜치와 머지 조율

각 에이전트가 자기 PR을 바로 merge하면 충돌과 rollback 혼란이 생긴다. 따라서 전문 에이전트는 PR까지만 만들고, 실제 `main` 병합은 Release Manager가 관리한다.

기본 규칙:

- 전문 에이전트는 branch, commit, PR을 만든다.
- 전문 에이전트는 자기 PR을 `main`에 직접 merge하지 않는다.
- Release Manager가 merge queue를 소유한다.
- 여러 PR이 같은 영역을 건드리면 총괄 PM이 merge 순서를 정한다.
- `main`은 항상 preview, demo, rollback이 가능한 안정 상태로 유지한다.

브랜치 이름:

- `codex/strategy-*`: 기획, 브랜드, 카피
- `codex/image-*`: Image Lab 로그, 이미지 후보, asset workflow
- `codex/design-*`: 비주얼 방향, 레이아웃, prototype styling
- `codex/frontend-*`: 홈페이지 구현, 인터랙션, motion
- `codex/commerce-*`: Imweb 링크, 구매 경로, 문의/예약 흐름
- `codex/cso-*`: 보안 체크리스트, 보안 audit report, 보안 수정

Merge queue:

1. PR은 작고 명확하게 유지한다.
2. 다른 PR에 의존하면 PR 본문에 표시한다.
3. `main`이 바뀌었으면 queue 진입 전에 branch를 rebase/update한다.
4. 한 번에 하나의 PR만 merge한다.
5. 각 merge 후 관련 smoke check를 실행한다.
6. 충돌이 나면 강제 merge하지 않고 branch 담당자 또는 총괄 PM에게 되돌린다.

권장 merge 순서:

1. 공유 운영 문서와 프로젝트 규칙
2. Asset inventory와 Image Lab manifest
3. 카피와 콘텐츠 모델
4. 디자인/prototype 레이아웃
5. 프론트엔드 동작과 motion
6. Commerce bridge, forms, analytics, deployment, 보안 민감 변경

Rollback 규칙:

- PR을 작고 역할별로 나누면 대부분 한 PR 또는 한 merge commit만 revert하면 된다.
- 브랜드 결정, 이미지 asset, frontend code, commerce link를 한 PR에 섞지 않는다.

## 홈페이지 방향

홈페이지 방향은 `Premium Interactive Putting Film`이다.

- Titleist에서 가져올 것: 큰 캠페인 첫인상, 차분한 프리미엄 신뢰감, 명확한 제품 경로
- Crossputt에서 가져올 것: 제품 클로즈업, 퍼터 중심 몰입감, 어두운 cinematic 제품 스토리
- GreenPutt가 내세울 것: Zero Head-Up, 공 근처에 투사되는 거리 피드백, 스마트 퍼팅 보조기와 매트/디바이스 시스템
- Polvert의 역할: `GreenPutt StorePick`, 지금 구매 가능한 첫 상품이지만 GreenPutt의 핵심 발명품과는 분리해서 보여준다.

총괄 PM은 Brand Strategist, Copy Planner, Image Lab, Art Director가 사업계획서와 GreenPutt 정체성을 더 잘 표현하는 문구/배치/이미지 구성을 제안하면 이를 반영할 수 있다.

## 기술 방향

현재 prototype:

- `prototype/` 아래 정적 HTML/CSS/JS
- 빠른 컨셉 검증, Imweb export용 섹션 실험, 낮은 유지비에 적합

향후 production 후보:

- Astro 또는 Next.js: SEO, 이미지 최적화, 제품 페이지 확장, 유지 가능한 콘텐츠 구조
- GSAP 또는 Framer Motion: 스크롤 기반 interactive product film 연출
- Imweb: 1차 단계에서 Polvert 결제, 주문, 회원, 배송, 취소, 환불, fulfillment를 계속 담당

새로운 기술 스택은 멋있어 보여서가 아니라, 인터랙티브 홈, 이미지 최적화, 페이지 확장 요구가 정적 prototype을 넘어설 때 선택한다.
