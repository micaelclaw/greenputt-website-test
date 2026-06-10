# GreenPutt CSO 보안 체크리스트

작성일: 2026-05-27
담당 역할: CSO
사용 스킬: gstack `/cso`
상태: 최초 공유 체크리스트

## 사용 방법

CSO 역할은 이 Markdown 파일을 계속 갱신한다. 다른 에이전트는 이 파일을 보고 무엇이 확인됐고, 무엇을 보완해야 하는지 바로 알 수 있어야 한다.

- `[x]`: 확인 완료, 현재 기준 문제 없음
- `[ ]`: 미완료, 보완 필요
- `[~]`: 일부 확인, 추후 결정 또는 추가 검증 필요
- 다른 역할의 피드백이 필요하면 항목 아래에 짧은 한국어 메모를 남긴다.
- form, 외부 링크, script, deployment, analytics, commerce, 고객 데이터가 바뀌는 PR/MR 전에는 이 파일을 갱신한다.

현재 Codex 세션에서 gstack skill이 보이면 다음을 실행한다.

```bash
/cso --diff
```

정기 전체 점검은 다음을 실행한다.

```bash
/cso
```

월 1회 또는 큰 변경 전에는 더 깊게 점검한다.

```bash
/cso --comprehensive
```

참고: 2026-05-27에 gstack을 Codex용으로 `~/.codex/skills` 아래 설치했다. 현재 세션의 skill 목록에는 즉시 반영되지 않을 수 있으므로, `/cso`가 보이지 않으면 새 Codex 세션에서 확인한다.

## 현재 상태 요약

- [x] 현재 prototype은 정적 HTML/CSS/JS이며 custom payment, login, order, member, refund, fulfillment backend가 없다.
- [x] Polvert 구매는 custom checkout이 아니라 Imweb으로 넘기는 구조다.
- [x] `prototype/app.js`는 콘텐츠를 raw HTML로 주입하지 않고 DOM API와 `textContent`로 렌더링한다.
- [x] visual companion 임시 파일은 `.superpowers/` ignore 규칙으로 git에 들어가지 않는다.
- [x] 전문 에이전트는 PR까지만 만들고, `main` merge는 Release Manager가 queue로 관리한다.
- [~] Imweb 상품, 장바구니, FAQ, Notice 링크는 있으나 stock/options 활성화 후 최종 구매 흐름을 다시 테스트해야 한다.
- [ ] production security headers, hosting 설정, analytics 정책, form data 정책은 아직 정해지지 않았다.
- [ ] 문의/예약 데이터 처리는 아직 구현되지 않았고, 고객 정보를 받기 전에 반드시 검토해야 한다.
- [ ] 이미지 생성과 asset intake는 private/admin 파일이 public website asset으로 섞이지 않도록 별도 체크가 필요하다.

## 체크리스트

### 1. 정적 사이트 공격면

- [x] 현재 prototype에는 custom server code가 없다.
- [x] 현재 prototype에는 user authentication이 없다.
- [x] 현재 prototype에는 custom cart/payment code가 없다.
- [x] 현재 prototype에는 custom order database가 없다.
- [~] 향후 Astro, Next.js 등 production stack으로 이동하면 이 섹션을 다시 점검한다.

### 2. DOM과 script 안전성

- [x] 제품명과 support label은 `textContent`로 렌더링한다.
- [x] 제품 카드는 sanitization 없는 HTML string이 아니라 DOM API로 만든다.
- [~] 외부 URL은 현재 hard-coded 상태다. 공개 전 최종 Imweb URL을 확인해야 한다.
- [ ] 향후 CMS 기반 content가 들어오면 URL allowlist와 HTML sanitization 규칙을 추가한다.
- [ ] third-party script를 추가하면 목적, 수집 데이터, 담당자, 제거 계획을 기록한다.

### 3. Commerce bridge

- [x] Imweb이 Polvert payment, order, member, shipping, cancellation, refund, fulfillment의 기준 시스템이다.
- [x] custom site는 stock/options 검증 전 direct checkout link를 시도하지 않는다.
- [~] 현재 Polvert URL은 sold out 상태가 풀린 뒤 다시 테스트해야 한다.
- [ ] same-tab handoff와 new-tab handoff 중 무엇이 나은지 실제 browser back behavior로 확인한다.
- [ ] Imweb에서 허용한다면 custom GreenPutt context로 돌아오는 visible return path를 추가한다.

### 4. 문의와 고객 데이터

- [ ] prototype 문의가 Imweb form, email, lightweight external form 중 무엇을 사용할지 결정한다.
- [ ] 수집하는 고객 데이터 항목을 정확히 정의한다.
- [ ] 이름, 전화번호, 이메일, 예약 관심, 문의 내용을 받기 전에 privacy copy를 추가한다.
- [ ] 문의 데이터 저장 위치와 접근 권한을 확인한다.
- [ ] custom form을 만들면 spam/rate-limit 보호를 추가한다.

### 5. Asset과 이미지 공급망

- [x] public website asset folder 구조는 `자료_목록.md`에 정리되어 있다.
- [x] private/admin 자료는 public website asset flow에서 제외한다고 명시되어 있다.
- [~] AI-generated image는 prototype에 사용할 수 있지만, 최종 선택본은 provenance note가 필요하다.
- [x] 새 생성 이미지를 PR에 사용하기 전에 Image Lab log를 만들거나 갱신한다.
- [x] 신분증, 계약서, 민감 번호가 있는 인증서, private business file이 commit/export되지 않았는지 확인한다.
- [x] production 사용 전 큰 이미지는 압축하고 crop한다.

### 6. Dependencies와 build

- [x] 현재 prototype에는 npm package dependency surface가 없다.
- [~] gstack은 local developer tool로 Codex global skill 경로에 설치됐고, 이 repository에는 commit하지 않는다.
- [ ] production이 Astro/Next.js로 이동하면 PR 검증에 dependency audit을 추가한다.
- [ ] package manager가 생기면 lockfile review 단계를 추가한다.

### 7. Deployment와 headers

- [ ] production 전 hosting/deployment target을 결정한다.
- [ ] HTTPS-only deployment를 적용한다.
- [ ] static/custom marketing site에 맞는 security headers를 추가한다: CSP, HSTS, X-Content-Type-Options, Referrer-Policy, frame policy.
- [ ] 허용할 image/script/connect domain을 정의한다.
- [ ] private asset이 들어간 staging URL이 search engine에 index되지 않도록 확인한다.

### 8. AI-agent workflow 보안

- [x] gstack `/cso`를 CSO 역할에 배정했다.
- [x] CSO finding은 다른 에이전트가 대응할 수 있도록 Markdown으로 저장한다.
- [x] 전문 에이전트는 PR까지만 만들고 자기 작업을 직접 `main`에 merge하지 않는다.
- [x] Release Manager가 merge queue를 소유해서 branch conflict와 rollback 혼란을 줄인다.
- [ ] script, form, link, deployment, dependency, 고객 데이터를 건드리는 PR 전에는 `/cso --diff`를 실행한다.
- [ ] public launch 전에는 전체 `/cso`를 실행한다.
- [ ] 월 1회 또는 큰 commerce/customer-data 변경 전에는 `/cso --comprehensive`를 실행한다.

## Findings log

### 2026-05-27

- GreenPutt Agent Studio 모델에 CSO 역할을 추가했다.
- 향후 세션에서 `/cso`를 사용할 수 있도록 Codex용 gstack을 설치했다.
- 현재 정적 prototype과 planning 문서를 기준으로 최초 체크리스트를 만들었다.
- 전문 에이전트는 PR까지만 만들고, Release Manager가 merge queue를 관리하는 규칙을 추가했다.
- identity refresh PR에서 추가된 public prototype 이미지 5개를 Image Lab log에 기록하고, private/admin 키워드와 민감 파일명 혼입 여부를 확인했다.
- 추가 이미지들은 224KB-444KB JPG로 리사이즈했고, EXIF make/model/software 값이 비어 있음을 확인했다.
- `99_Inbox_To_Sort/그린펏 시현 예상도.mp4`는 작동 원리 reference로만 확인했고, repository asset으로 복사하지 않았다.

남은 보완:

- Polvert stock/options가 활성화된 뒤 Imweb 구매 흐름을 다시 테스트한다.
- 고객 데이터를 받기 전에 문의/예약 form provider를 결정한다.
- launch 전 production hosting과 security headers를 정의한다.
- 생성 이미지를 public final asset으로 쓰기 전에 실제 제품과 다른 로고, 소재, 비율을 다시 검수한다.
