# 그린펏 소스코드 전달 및 배포 안내

이 문서는 GreenPutt 웹사이트 소스코드를 ZIP 파일로 전달받은 외부 업체가 로컬 확인과 배포 방식을 빠르게 이해하기 위한 안내입니다.

## 1. 소스 ZIP의 목적

소스 ZIP은 GreenPutt 커스텀 홈페이지 프로토타입을 후속 업체가 확인, 수정, 배포할 수 있도록 전달하는 파일입니다.

현재 구조에서 결제, 주문, 회원, 배송, 취소/환불, 고객센터 운영은 아임웹이 담당합니다. 이 소스코드는 브랜드형 프론트 페이지와 Polvert 구매 브릿지 역할을 합니다.

## 2. 권장 소스 ZIP 구성

ZIP에는 최소한 아래 항목을 포함하는 것을 권장합니다.

| 항목 | 용도 |
| --- | --- |
| `prototype/` | 실제 정적 홈페이지 소스 |
| `READ_ME_FIRST.md` | 소스 확인 순서와 실행 방법 |
| `PROJECT_BRIEF.md` 또는 요약본 | 브랜드/사이트 방향 |
| `docs/handover/` | 인수인계 문서 |
| `docs/operations/greenputt-domain-routing-guide.md` | 도메인/DNS/배포/롤백 참고 |

아래 내부 작업 기록은 외부 업체 전달용 ZIP에서는 제외하거나 별도 보관하는 것을 권장합니다.

| 항목 | 이유 |
| --- | --- |
| `docs/brainstorms/` | 내부 기획/작업 논의 기록 |
| `docs/plans/` | 작업 계획 로그 |
| `docs/superpowers/` | Codex 작업용 설계/계획 기록 |
| `docs/agent-studio/` 중 세부 실험 로그 | 이미지 생성/작업 로그가 많아 외부 업체에게는 노이즈가 될 수 있음 |

## 3. 로컬에서 확인하는 방법

ZIP을 압축 해제한 뒤 터미널에서 소스 폴더로 이동합니다.

```bash
python3 -m http.server 4173 --directory prototype
```

브라우저에서 아래 주소를 엽니다.

```txt
http://localhost:4173/
```

정상적으로 열리면 첫 화면에서 GreenPutt 홈페이지가 보여야 합니다.

## 4. Vercel 배포 권장 방식

Vercel로 배포할 경우 아래 둘 중 하나를 선택합니다.

### 방식 A. `prototype` 폴더를 프로젝트 루트로 설정

1. ZIP을 압축 해제합니다.
2. 후속 업체가 새 Git 저장소를 만듭니다.
3. 전체 소스를 커밋합니다.
4. Vercel에서 새 프로젝트를 만들고 해당 Git 저장소를 연결합니다.
5. Vercel 프로젝트 설정에서 Root Directory를 `prototype`으로 지정합니다.
6. Framework Preset은 `Other` 또는 정적 사이트 기준으로 설정합니다.
7. 별도 빌드 명령이 없으면 Build Command는 비워둡니다.

### 방식 B. `prototype` 안의 파일만 새 저장소 루트에 배치

1. `prototype/index.html`, `prototype/styles.css`, `prototype/app.js`, `prototype/assets/` 등을 새 저장소 루트로 옮깁니다.
2. Vercel에서 해당 저장소를 연결합니다.
3. 정적 사이트로 배포합니다.

운영 안정성은 방식 A가 더 좋습니다. 원본 구조를 유지하므로 나중에 인수인계 문서와 코드 위치가 어긋나지 않습니다.

## 5. GitHub Pages 배포 대안

GitHub Pages로 배포할 수도 있습니다.

1. 새 GitHub 저장소를 만듭니다.
2. `prototype` 폴더의 정적 파일을 Pages 배포 브랜치 또는 배포 루트에 둡니다.
3. GitHub 저장소 Settings > Pages에서 배포 브랜치와 경로를 설정합니다.
4. 커스텀 도메인을 연결할 경우 DNS 레코드와 `CNAME` 파일을 함께 확인합니다.

GitHub Pages는 단순하지만, 도메인 연결과 배포 루트 설정을 잘못하면 홈페이지가 빈 페이지처럼 보일 수 있습니다. 후속 업체가 Vercel에 익숙하다면 Vercel을 우선 권장합니다.

## 6. ZIP만으로 배포 가능한가

가능합니다. 다만 ZIP 파일 자체가 자동 배포되는 것은 아니고, 후속 업체가 압축을 풀어 새 Git 저장소를 만들거나 정적 호스팅 서비스에 업로드해야 합니다.

정상 배포를 위해 최소한 아래 조건이 필요합니다.

- `prototype/index.html`이 배포 루트에서 접근 가능해야 합니다.
- `prototype/assets/` 경로의 이미지와 파비콘 파일이 함께 있어야 합니다.
- Polvert 구매 링크가 현재 운영 URL을 가리키는지 확인해야 합니다.
- 도메인 연결 전에는 임시 Vercel/GitHub Pages 주소에서 먼저 화면과 링크를 점검해야 합니다.

## 7. 소스 전달 전 체크리스트

- 로컬에서 `http://localhost:4173/` 접속 확인
- 모바일/데스크톱 화면 확인
- Polvert 구매 버튼 링크 확인
- `greenputt.kr`, `greenputt.imweb.me` 역할 구분 확인
- 외부 업체에게 전달하지 않을 내부 작업 로그 제거 또는 별도 보관
- 계정 비밀번호가 소스 ZIP 안에 들어가지 않았는지 확인
- 공유 폴더의 `00_처음_읽어주세요` 문서와 함께 전달
