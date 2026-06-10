# GreenPutt 웹사이트 인수인계서

최종 정리일: 2026-06-10

## 1. 프로젝트 개요

GreenPutt 웹사이트는 퍼팅 훈련 브랜드 GreenPutt와 펏트너(PUTTNER) 퍼팅 시스템을 소개하기 위한 커스텀 정적 홈페이지입니다.

현재 결제, 주문, 회원, 배송, 취소/환불, 고객센터 등 커머스 운영은 아임웹이 담당하고, 이 소스코드는 브랜드형 프론트 페이지와 Polvert 구매 브릿지 역할을 합니다.

## 2. 현재 역할 구조

| 구분 | 담당 |
| --- | --- |
| 브랜드 홈페이지 | `prototype/` 정적 소스 |
| Polvert 상품 구매 | 아임웹 상품 페이지 |
| 장바구니/결제/회원 | 아임웹 |
| FAQ/공지/고객센터 | 현재 아임웹 URL로 연결 |
| 도메인/DNS | 가비아, 아임웹 도메인 설정 |
| 배포 후보 | Vercel 권장, GitHub Pages 대안 |

## 3. 주요 소스 구조

| 경로 | 설명 |
| --- | --- |
| `prototype/index.html` | 홈페이지 HTML 구조 |
| `prototype/styles.css` | 전체 스타일 |
| `prototype/app.js` | 인터랙션, 애니메이션, 슬라이더 등 |
| `prototype/content.js` | 상품 라인업과 지원 링크 데이터 |
| `prototype/assets/` | 홈페이지 이미지, 로고, Polvert 이미지 |
| `prototype/README.md` | 로컬 실행 방법과 현재 브릿지 URL |

## 4. 로컬 실행 방법

프로젝트 루트에서 아래 명령을 실행합니다.

```bash
python3 -m http.server 4173 --directory prototype
```

브라우저에서 아래 주소를 엽니다.

```txt
http://localhost:4173/
```

## 5. 자주 수정하는 위치

| 수정 내용 | 파일 |
| --- | --- |
| 상단 문구, 섹션 구조 | `prototype/index.html` |
| 색상, 여백, 반응형 스타일 | `prototype/styles.css` |
| 슬라이더/인터랙션 동작 | `prototype/app.js` |
| 상품 카드, 링크, 라인업 문구 | `prototype/content.js` |
| 이미지 교체 | `prototype/assets/` |

## 6. Polvert 구매 브릿지

현재 Polvert 구매 관련 링크는 아임웹 운영 URL로 연결됩니다.

| 용도 | URL |
| --- | --- |
| Polvert 상품 | `https://greenputt.kr/all_products/?idx=77` |
| 장바구니 | `https://greenputt.kr/shop_cart` |
| FAQ | `https://greenputt.kr/faq` |
| 공지사항 | `https://greenputt.kr/notice` |

후속 업체는 배포 전 위 링크가 실제 운영 사이트에서 정상 작동하는지 다시 확인해야 합니다.

## 7. 배포 제안

### 7-1. 추천: Vercel

Vercel 배포를 우선 권장합니다.

1. 소스 ZIP 압축을 풉니다.
2. 후속 업체가 새 Git 저장소를 만듭니다.
3. 전체 소스를 커밋합니다.
4. Vercel에서 새 프로젝트를 만들고 Git 저장소를 연결합니다.
5. Root Directory를 `prototype`으로 지정합니다.
6. 정적 사이트로 배포합니다.

장점은 설정이 비교적 쉽고, 도메인 연결과 미리보기 배포가 편하다는 점입니다.

### 7-2. 대안: GitHub Pages

GitHub Pages도 사용할 수 있습니다.

1. 새 GitHub 저장소를 만듭니다.
2. `prototype` 폴더의 정적 파일을 Pages 배포 루트로 설정합니다.
3. Settings > Pages에서 배포 브랜치와 경로를 지정합니다.
4. 커스텀 도메인을 연결할 경우 `CNAME`과 DNS 레코드를 함께 확인합니다.

GitHub Pages는 단순하지만, 배포 루트와 도메인 설정을 잘못 잡으면 이미지나 링크가 깨질 수 있습니다.

## 8. 도메인 / DNS / SSL

### 8-1. 보유 도메인

| 도메인 | 관리처 | 만료일 | 현재 용도 |
| --- | --- | --- | --- |
| `greenputt.kr` | 가비아 | 2035-12-19 | 대표 운영 도메인 |
| `그린펏.com` | 가비아 | 2035-12-19 | 한글 보조 도메인 |

### 8-2. 아임웹 도메인 상태

- 아임웹 기본 도메인: `greenputt.imweb.me`
- 현재 연결 도메인: `greenputt.kr`, `그린펏.com`
- `greenputt.kr`은 아임웹 대표 도메인으로 선택된 상태입니다.
- `대표 도메인으로 자동연결`: ON
- `개인 도메인에 www 포함하기`: OFF
- 아임웹 도메인 설정: `https://greenputt.imweb.me/admin/config/domain?mode=detail`

### 8-3. SSL / 결제 참고

- COMODO Basic SSL 365 결제 이력이 있습니다.
- 아임웹 Pro 24개월 결제 이력이 있습니다.
- 단, 아임웹 도메인 화면에서 개인 도메인 SSL 미적용 경고가 보였으므로 실제 HTTPS 적용 상태는 인수 후 다시 확인해야 합니다.

### 8-4. DNS 수정 전 주의

DNS 변경 전에는 가비아에서 현재 레코드를 백업해야 합니다.

메일, SPF, DKIM, DMARC, Google 인증 레코드는 삭제하지 않습니다.

상세 내용은 `docs/operations/greenputt-domain-routing-guide.md`를 확인합니다.

## 9. 계정 정보

가비아/아임웹 계정 정보는 보안상 소스 ZIP 안에 실제 비밀번호를 저장하지 않는 것을 권장합니다.

빈칸 양식은 `docs/handover/greenputt-account-access-template.md`에 있습니다.

## 10. 공유 자료 폴더

인수인계용 Google Drive 공유 폴더에는 운영 증빙, DNS/SSL 캡처, 브랜드 로고, Polvert 장갑 원본 자료가 정리되어 있습니다.

폴더 구성 안내는 `docs/handover/greenputt-share-folder-guide.md`를 확인합니다.

## 11. 이미지 / 상품 자료 주의사항

- 2026 Polvert 실리콘 NEW 장갑 자료는 신형 로고가 들어간 신제품 촬영본입니다.
- 기존 Polvert 장갑 원본 자료는 2025년까지 판매했고 현재도 판매 중인 제품 자료이며, 구형 로고가 포함된 경우가 많습니다.
- 상품 이미지 수정 시 신형/구형 로고를 혼동하지 않아야 합니다.
- GreenPutt 제품 이미지는 일부 AI 생성/렌더 기반이므로, 실제 양산 사진이 생기면 교체하는 것을 권장합니다.

## 12. 후속 업체 우선 확인 체크리스트

- ZIP 압축 해제 후 로컬 실행 확인
- Vercel 또는 GitHub Pages 배포 방식 선택
- Polvert 구매 링크 정상 작동 확인
- 아임웹 로그인 및 상품/주문/고객센터 접근 확인
- 가비아 DNS와 도메인 만료일 확인
- SSL 적용 상태 확인
- 모바일/데스크톱 화면 확인
- 실제 운영 도메인 연결 전 임시 URL 테스트
