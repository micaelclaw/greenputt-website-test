# GreenPutt 소스 패키지 안내

이 패키지는 GreenPutt 커스텀 홈페이지를 확인, 수정, 배포하기 위한 소스와 운영 문서를 포함합니다.

## 1. 먼저 확인할 항목

| 파일/폴더 | 용도 |
| --- | --- |
| `prototype/` | 실제 홈페이지 정적 소스 |
| `prototype/README.md` | 로컬 실행 방법과 현재 연결 URL |
| `docs/handover/greenputt-handover.md` | 실무용 인수인계서 |
| `docs/handover/greenputt-handover-docs-version.md` | 회의/문서 공유용 요약본 |
| `docs/handover/greenputt-source-delivery-guide.md` | 소스 ZIP 배포 안내 |
| `docs/operations/greenputt-domain-routing-guide.md` | 도메인, DNS, 롤백 상세 가이드 |

## 2. 현재 사이트 구조

- `prototype/`은 GreenPutt 브랜드형 정적 홈페이지입니다.
- 결제, 주문, 회원, 배송, 취소/환불, 고객센터 운영은 아임웹에서 처리합니다.
- Polvert 구매 버튼은 아임웹 상품/장바구니 URL로 연결됩니다.
- 배포 방식은 Vercel을 우선 검토하고, GitHub Pages를 대안으로 사용할 수 있습니다.

## 3. 로컬 실행

압축 해제 후 프로젝트 루트에서 실행합니다.

```bash
python3 -m http.server 4173 --directory prototype
```

브라우저에서 아래 주소를 엽니다.

```txt
http://localhost:4173/
```

## 4. 배포 전 확인

- 첫 화면이 GreenPutt 홈페이지로 표시되는지 확인합니다.
- 모바일과 데스크톱 화면에서 레이아웃이 깨지지 않는지 확인합니다.
- Polvert 구매 링크가 아임웹 운영 URL로 연결되는지 확인합니다.
- 운영 도메인 연결 전 임시 배포 URL에서 화면과 링크를 먼저 점검합니다.
- 가비아/아임웹 비밀번호는 소스 ZIP 안에 저장하지 않습니다.
