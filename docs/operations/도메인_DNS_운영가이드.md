# GreenPutt 도메인/DNS 운영 가이드

최종 확인일: 2026-06-05

이 문서는 `greenputt.kr` 운영 도메인을 정적 페이지로 연결하고, 결제/회원/쇼핑 기능은 아임웹에 유지하기 위한 운영 가이드입니다. 설정값을 판단해야 할 때는 먼저 이 문서의 "현재 상태"를 기준 백업으로 삼고, 변경 또는 롤백 작업을 진행합니다.

## 1. 현재 아임웹/가비아 연결 상태

현재 구조는 `greenputt.kr`이 아임웹 사이트의 대표 도메인으로 잡혀 있는 상태입니다.

### 아임웹 도메인 상태

아임웹 관리자 위치:

```txt
https://greenputt.imweb.me/admin/config/domain?mode=detail
```

현재 연결된 도메인:

| 도메인 | 현재 역할 | 비고 |
| --- | --- | --- |
| `greenputt.imweb.me` | 아임웹 기본 도메인 | 네임서버 설정 불필요 |
| `greenputt.kr` | 대표 도메인 | 현재 라디오 버튼이 선택된 상태 |
| `그린펏.com` | 연결 도메인 | 대표 도메인은 아님 |

현재 스위치 상태:

| 설정 | 현재값 | 롤백 시 복구값 |
| --- | --- | --- |
| 대표 도메인으로 자동연결 | ON | ON |
| 개인 도메인에 www 포함하기 | OFF | OFF |

`greenputt.kr`의 아임웹 할당 네임서버:

```txt
cns1.hostcocoa.com  205.251.196.138
cns2.hostcocoa.com  205.251.194.81
cns3.hostcocoa.com  205.251.193.7
cns4.hostcocoa.com  205.251.199.181
```

### 가비아 DNS 상태

가비아 관리자 위치:

```txt
https://dns.gabia.com/dns/internals/total_set
```

도메인:

```txt
greenputt.kr
```

현재 레코드 개수:

```txt
9개
```

최근 업데이트:

```txt
2026-03-29 19:33:26
```

현재 네임서버:

```txt
cns1.hostcocoa.com
cns2.hostcocoa.com
cns3.hostcocoa.com
cns4.hostcocoa.com
```

현재 웹 연결 관련 레코드:

| 타입 | 호스트 | 값/위치 | TTL | 서비스 |
| --- | --- | --- | --- | --- |
| A | `@` | `11.111.11.11` | 600 | DNS 설정 |
| A | `www` | `11.111.11.11` | 600 | DNS 설정 |
| CNAME | `www` | `ghs.googlehosted.com.` | 600 | DNS 설정 |

현재 유지해야 하는 메일/인증 관련 레코드:

| 타입 | 호스트 | 값/위치 | TTL | 우선순위 | 서비스 |
| --- | --- | --- | --- | --- | --- |
| MX | `@` | `mailapp.hiworks.co.kr.` | 1800 | 10 | 도메인연결 |
| TXT | `@` | `"v=spf1 include:_spf.hiworks.co.kr ~all"` | 1800 |  | 도메인연결-하이웍스 |
| TXT | `stb_domainkey` | `"dkim.stibee.com"` | 600 |  | DNS 설정 |
| TXT | `_dmarc` | `"v=DMARC1; p=none;"` | 600 |  | DNS 설정 |
| SRV | `_sip._tls.@` | `1 443 slpfed.online.lync.com.` | 600 | 100 | DNS 설정 |
| TXT | `@` | `"google-site-verification=ezwicDFXidDv77nH1DNUaDkS7mtQBV7A9asiiEnXNGQ"` | 600 |  | DNS 설정 |

주의: 현재 공개 DNS 조회에서는 `greenputt.kr`과 `www.greenputt.kr`이 CloudFront 계열 IP로 풀리지만, 가비아 DNS 화면에서 롤백 기준으로 보이는 값은 위의 `11.111.11.11` 및 `ghs.googlehosted.com.`입니다. 롤백할 때는 가비아 화면의 현재값을 기준으로 복구합니다.

### GitHub Pages 상태

현재 정적 페이지 배포 주소:

```txt
https://micaelclaw.github.io/greenputt-website-test/
```

현재 GitHub Pages 설정:

| 항목 | 현재값 |
| --- | --- |
| Source branch | `gh-pages` |
| Source path | `/` |
| Custom domain | 없음 |
| Status | built |

## 2. 가비아에서 정적 페이지로 연결하는 방법

목표 구조:

```txt
greenputt.kr              -> 정적 GreenPutt 메인 페이지
www.greenputt.kr          -> 정적 GreenPutt 메인 페이지
greenputt.imweb.me        -> 아임웹 결제/회원/쇼핑
```

작업 전에 가비아 DNS 화면에서 `엑셀 다운로드`를 눌러 현재 DNS 레코드를 백업합니다.

### 2-1. 아임웹에서 대표 도메인 분리

아임웹 관리자에서 다음 순서로 설정합니다.

1. 도메인 탭으로 이동합니다.

   ```txt
   https://greenputt.imweb.me/admin/config/domain?mode=detail
   ```

2. `greenputt.imweb.me` 행의 라디오 버튼을 대표 도메인으로 선택합니다.

3. `대표 도메인으로 자동연결`을 OFF로 변경합니다.

4. `개인 도메인에 www 포함하기`는 OFF 상태로 유지합니다.

5. `greenputt.kr`은 당장 삭제하지 않아도 되지만, 대표 도메인으로는 두지 않습니다. 정적 페이지 전환이 안정화된 뒤 아임웹에서 `greenputt.kr`을 제거해도 됩니다.

이 작업을 먼저 하는 이유는 아임웹이 `greenputt.imweb.me` 접속을 다시 `greenputt.kr`로 자동 이동시키는 상황을 피하기 위해서입니다.

### 2-2. GitHub Pages에 커스텀 도메인 등록

GitHub 저장소 위치:

```txt
https://github.com/micaelclaw/greenputt-website-test
```

GitHub에서 다음 순서로 설정합니다.

1. `Settings`로 이동합니다.

2. `Pages` 메뉴를 엽니다.

3. `Custom domain`에 다음 값을 입력합니다.

   ```txt
   greenputt.kr
   ```

4. 저장합니다.

5. 배포 루트에 `CNAME` 파일을 둡니다.

   ```txt
   greenputt.kr
   ```

현재 프로젝트의 배포 방식에서는 `prototype/` 폴더가 `gh-pages`에 배포되므로, 원본에도 다음 파일을 유지하는 것이 좋습니다.

```txt
prototype/CNAME
```

파일 내용:

```txt
greenputt.kr
```

GitHub Pages의 공식 커스텀 도메인 문서는 apex domain을 `A` 레코드로 연결하고, `www`는 GitHub Pages 사용자 도메인으로 CNAME 연결하는 방식을 안내합니다.

참고:

```txt
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
```

### 2-3. 가비아 DNS에서 기존 웹 레코드 삭제

가비아 DNS 관리에서 `greenputt.kr`의 `레코드 수정`을 누른 뒤 아래 레코드를 삭제합니다.

| 타입 | 호스트 | 값/위치 |
| --- | --- | --- |
| A | `@` | `11.111.11.11` |
| A | `www` | `11.111.11.11` |
| CNAME | `www` | `ghs.googlehosted.com.` |

메일, SPF, DKIM, DMARC, Google 인증, SRV 레코드는 삭제하지 않습니다.

### 2-4. 가비아 DNS에 GitHub Pages 레코드 추가

아래 A 레코드를 추가합니다.

| 타입 | 호스트 | 값/위치 | TTL |
| --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | 600 |
| A | `@` | `185.199.109.153` | 600 |
| A | `@` | `185.199.110.153` | 600 |
| A | `@` | `185.199.111.153` | 600 |

아래 CNAME 레코드를 추가합니다.

| 타입 | 호스트 | 값/위치 | TTL |
| --- | --- | --- | --- |
| CNAME | `www` | `micaelclaw.github.io.` | 600 |

가비아에서 AAAA 레코드 입력을 지원하고 IPv6까지 같이 열고 싶다면 아래 레코드도 추가할 수 있습니다.

| 타입 | 호스트 | 값/위치 | TTL |
| --- | --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` | 600 |
| AAAA | `@` | `2606:50c0:8001::153` | 600 |
| AAAA | `@` | `2606:50c0:8002::153` | 600 |
| AAAA | `@` | `2606:50c0:8003::153` | 600 |

### 2-5. 정적 페이지의 아임웹 링크 확인

정적 페이지 안의 구매, 회원, 주문, 결제 관련 CTA는 `greenputt.kr` 내부 경로가 아니라 아임웹 주소로 연결합니다.

기본 임시 운영 링크:

```txt
https://greenputt.imweb.me
```

상품 상세, 로그인, 장바구니 URL을 확정하면 CTA를 해당 아임웹 상세 URL로 교체합니다.

### 2-6. 전환 확인

DNS 변경 후 아래 명령으로 확인합니다.

```bash
dig +short greenputt.kr A
dig +short www.greenputt.kr CNAME
curl -I https://greenputt.kr
```

기대값:

```txt
greenputt.kr A       -> 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
www.greenputt.kr     -> micaelclaw.github.io.
https://greenputt.kr -> 정적 GreenPutt 메인 페이지
```

GitHub Pages에서 인증서 발급이 끝난 뒤 `Enforce HTTPS`를 켭니다. DNS 전파와 SSL 발급은 수 분에서 길면 24시간 정도 걸릴 수 있습니다.

## 3. 다시 롤백하는 방법

롤백 목표:

```txt
greenputt.kr       -> 다시 아임웹 대표 도메인
greenputt.imweb.me -> 아임웹 기본 도메인
```

롤백은 GitHub, 가비아, 아임웹 순서로 진행합니다.

### 3-1. GitHub Pages 커스텀 도메인 제거

GitHub 저장소에서 다음 순서로 진행합니다.

1. `Settings`로 이동합니다.

2. `Pages` 메뉴를 엽니다.

3. `Custom domain`의 `greenputt.kr`을 삭제합니다.

4. `CNAME` 파일을 제거합니다.

삭제 대상:

```txt
prototype/CNAME
gh-pages 브랜치 루트의 CNAME
```

### 3-2. 가비아 DNS에서 GitHub Pages 레코드 삭제

아래 레코드를 삭제합니다.

| 타입 | 호스트 | 값/위치 |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `micaelclaw.github.io.` |

AAAA 레코드를 추가했었다면 아래도 삭제합니다.

| 타입 | 호스트 | 값/위치 |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

### 3-3. 가비아 DNS를 현재 아임웹 연결값으로 복구

아래 웹 연결 레코드를 다시 추가합니다.

| 타입 | 호스트 | 값/위치 | TTL | 서비스 |
| --- | --- | --- | --- | --- |
| A | `@` | `11.111.11.11` | 600 | DNS 설정 |
| A | `www` | `11.111.11.11` | 600 | DNS 설정 |
| CNAME | `www` | `ghs.googlehosted.com.` | 600 | DNS 설정 |

아래 레코드는 계속 유지합니다. 롤백 중에도 삭제하지 않습니다.

```txt
MX   @
TXT  @
TXT  stb_domainkey
TXT  _dmarc
SRV  _sip._tls.@
TXT  @  google-site-verification
```

### 3-4. 아임웹 대표 도메인 복구

아임웹 관리자에서 다음 순서로 설정합니다.

1. 도메인 탭으로 이동합니다.

   ```txt
   https://greenputt.imweb.me/admin/config/domain?mode=detail
   ```

2. `greenputt.kr` 행의 라디오 버튼을 대표 도메인으로 선택합니다.

3. `대표 도메인으로 자동연결`을 ON으로 변경합니다.

4. `개인 도메인에 www 포함하기`는 OFF 상태로 유지합니다.

5. 정적 페이지 전환 과정에서 `greenputt.kr`을 아임웹에서 삭제했다면, 다시 `도메인 연결`로 `greenputt.kr`을 추가한 뒤 대표 도메인으로 지정합니다.

### 3-5. 롤백 확인

아래 주소를 확인합니다.

```txt
https://greenputt.kr
https://www.greenputt.kr
https://greenputt.imweb.me
```

기대값:

```txt
greenputt.kr       -> 아임웹 사이트
www.greenputt.kr   -> 아임웹 사이트 또는 대표 도메인으로 이동
greenputt.imweb.me -> 아임웹 사이트
```

명령으로도 확인할 수 있습니다.

```bash
dig +short greenputt.kr A
dig +short www.greenputt.kr A
dig +short www.greenputt.kr CNAME
```

DNS 전파 중에는 일부 기기에서 GitHub Pages가 보이고 일부 기기에서 아임웹이 보일 수 있습니다. 롤백 직후에는 최소 수 분에서 최대 24시간까지 혼재될 수 있으므로, 브라우저 캐시보다 DNS 전파 상태를 먼저 확인합니다.
