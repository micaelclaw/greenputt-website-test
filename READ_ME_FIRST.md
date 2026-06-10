# GreenPutt 소스 인수인계 안내

이 ZIP은 GreenPutt 커스텀 홈페이지 소스와 인수인계 문서를 전달하기 위한 패키지입니다.

## 1. 먼저 볼 파일

| 파일/폴더 | 용도 |
| --- | --- |
| `prototype/` | 실제 홈페이지 정적 소스 |
| `prototype/README.md` | 로컬 실행 방법 |
| `docs/handover/greenputt-handover.md` | 실무용 인수인계서 |
| `docs/handover/greenputt-handover-docs-version.md` | 문서/미팅용 인수인계서 |
| `docs/handover/greenputt-source-delivery-guide.md` | ZIP 소스 전달 및 배포 안내 |
| `docs/operations/greenputt-domain-routing-guide.md` | 도메인/DNS/롤백 상세 가이드 |

## 2. 현재 사이트 구조 요약

- `prototype`은 GreenPutt 브랜드형 정적 홈페이지입니다.
- 결제, 주문, 회원, 배송, 취소/환불, 고객센터 운영은 아임웹이 담당합니다.
- Polvert 구매 버튼은 아임웹 상품/장바구니 URL로 연결됩니다.
- 후속 배포는 Vercel을 우선 권장하고, GitHub Pages를 대안으로 사용할 수 있습니다.

## 3. 로컬 실행

압축을 푼 뒤 프로젝트 루트에서 실행합니다.

```bash
python3 -m http.server 4173 --directory prototype
```

브라우저에서 엽니다.

```txt
http://localhost:4173/
```

## 4. 배포 전 확인

- 첫 화면이 GreenPutt 홈페이지로 보이는지 확인합니다.
- 모바일/데스크톱 화면이 깨지지 않는지 확인합니다.
- Polvert 구매 링크가 아임웹 운영 URL로 연결되는지 확인합니다.
- 도메인 연결 전에는 임시 배포 URL에서 먼저 테스트합니다.
- 가비아/아임웹 비밀번호는 소스 ZIP 안에 넣지 않습니다.
