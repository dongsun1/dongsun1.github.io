# dongsun1.github.io

이력서와 포트폴리오. 외부 의존성은 Google Fonts 뿐이다. 이력서 세 개는 단일 HTML 이고,
포트폴리오만 `portfolio/img/` 의 화면 캡처(WebP)를 함께 쓴다.

- https://dongsun1.github.io/ — 이력서 (루트와 `/resume/` 가 같은 전문)
- https://dongsun1.github.io/resume/ — **프론트엔드 지원용**
- https://dongsun1.github.io/resume/server/ — 서버 지원용. `noindex` 이고 어디에서도 링크하지 않는다
- https://dongsun1.github.io/portfolio/ — 프로젝트 구현 상세와 문제 해결 전문

루트를 리다이렉트로 두면 meta refresh 를 따라가지 않는 크롤러가 빈 페이지로
읽기 때문에, 이력서는 두 경로 모두 전문을 서빙한다.

## 나누는 기준

**이력서와 포트폴리오** — 이력서는 인쇄 3페이지에 맞춘다. 성과 수치는 이력서에
남기고(ATS 와 리크루터는 링크를 따라가지 않는다), "어떻게 했는지" 는 포트폴리오로
보낸다. 이력서가 *무엇을 했는지*면 포트폴리오는 *왜 그렇게 했는지*다 — 포트폴리오에서
프로젝트 하나를 늘릴 때는 기능 목록이 아니라 `문제 → 내 역할 → 선택(대안 비교) →
구현 → 결과 → 지금이라면` 을 채운다. 대안 비교가 없으면 그냥 기능 설명이다.

**프론트엔드판과 서버판** — 직함은 양쪽 다 `Full-stack Developer` 로 같고, 내용이 아니라
**순서와 강조**만 다르다. 같은 재직 기간에 직함이 둘이면 포트폴리오를 타고 들어온 쪽에서
바로 드러나므로 직함은 한쪽으로 통일한다(그렉터는 실제로 Frontend Developer 라 그대로 둔다). 서류는 "이 자리에
맞나" 를 먼저 보기 때문에, 지원 직무와 층이 어긋나면 그 자체가 감점이다. 프론트엔드판은
앱·지면·광고주 플랫폼을 앞에 두고 서버 경험은 CASES 에 남겨 "층을 넘어 파는 사람" 으로
읽히게 한다. 서버판은 매체사 API·배포 파이프라인·connection pool 장애를 앞으로 끌어올린다.
사용자 규모는 **설치 수(Android 5만+)** 로만 쓴다 — DAU 로 바꿔 쓰면 설치 수와 같은 숫자가
두 가지 뜻으로 읽힌다.
**한 쪽만 고치고 끝내지 말 것** — 수치나 사실이 바뀌면 두 파일을 같이 고친다.

## 문서 구조 (두 이력서 공통)

`SUMMARY(60초 요약) → SKILLS → WORK → CASES`. 서류 검토는 1~2분이라 판단 재료를
맨 위에 두고, 마지막 장이 문제 해결로 끝나도록 SKILLS 를 위로 올렸다.
각 불릿은 `[왜 문제였나] → [무엇을 했나] → [그래서 무엇이 바뀌었나]` 순으로 쓴다.
"무엇을 만들었다" 만 있고 `왜` 가 없으면 감점 항목이다.

## 포트폴리오

깊게 쓰는 것은 **세 개뿐**이다 — 숏캐시 · 오퍼월 · 매체사 API. 나머지(마케팅몰,
운영 어드민, 배포 파이프라인, 그렉터)는 한 문단으로 줄인다. 전부 깊게 쓰면 무엇이
중요한지 읽는 쪽이 판단해야 한다.

화면 캡처는 `portfolio/img/` 의 WebP 다. 원본은 버프 사이트
(`Startup/buff/public/images/buff/`) 의 PNG 이고, `cwebp -q 82` 로 변환해
1.7MB → 212KB 가 됐다. 새 캡처를 넣을 때도 같은 절차로 변환하고, `img` 에
`width`/`height`/`loading="lazy"` 를 반드시 붙인다(레이아웃 시프트 방지).

수치와 사실은 노션 이력서 원본이 기준이다. **회고("지금이라면")에 없는 사실을
지어내지 말 것** — 면접에서 그대로 질문받는다.

## 2026 기준 (2026-09 조사)

2024년과 실제로 달라진 것만 적는다. 분량·PDF·수치화 같은 기본은 그대로다.

- **AI 도구는 나열하면 신호가 0이다.** "Claude Code 사용" 은 빼고, `AI 가 한 일 / 내가
  판단한 일` 을 문장 안에서 나눠 쓴다. 채용 가이드가 피해야 할 방식으로 도구 나열을 직접
  지목한다 — [잡코리아 2026-05](https://www.jobkorea.co.kr/recruit/careers/articles/ai-competency-resume)
- **STAR → PAAR.** 구현 사실은 변별력이 없어졌고, `문제 → 대안 검토 → 실행 → 결과` 중
  **대안 검토를 면접관이 가장 본다** — [서치라이트 2026-06](https://blog.searchright.net/developer-career-description-examples/)
- **수치 뒤에 측정 방법을 붙인다.** 2025년 자소서의 64.4% 가 생성형 AI 작성 추정이라
  숫자만 있으면 과장으로 의심받는다 — [전자신문 2026-01](https://www.etnews.com/20260109000170)
- **포트폴리오는 "만든 것" 이 아니라 판단 기록이다.** 사내 성과는 검증이 안 되므로
  *내 몫을 분리한 문서* 가 코드보다 많이 읽힌다 — [youngju.dev 2026-08](https://www.youngju.dev/blog/career/2026-08-15-career-moves-side-projects-and-portfolio)
- **첨부 파일을 전제로 한다.** 국내 대기업 지원서는 PDF 업로드가 기본이고, 추가 클릭을
  요구하는 형식(노션 토글·권한 잠금)은 불리하다. 그래서 세 문서 모두 PDF 를 같이 둔다.

확인 못 한 것: "AI 도구를 안 쓰면 감점" 이라는 국내 근거는 없다. 1인 개발사 경력의 2026년
기재 가이드도 없다. 둘 다 추측으로 문서에 반영하지 않았다.

## 수정

`resume/index.html` 을 고치고 `./sync.sh` 를 돌린 뒤 push 한다.
**본문을 고쳤으면 `./pdf.sh` 도 같이 돌린다** — 안 돌리면 페이지는 새 내용인데
내려받는 PDF 만 옛 내용으로 남는다.
`resume/server/index.html` 과 `portfolio/index.html` 은 sync 대상이 아니다 —
고치고 바로 push 하면 된다.

네 파일은 CSS 를 복제해서 쓴다. 공유 스타일시트로 빼면 단일 HTML 이라는 전제가
깨지므로, 디자인을 바꿀 때는 네 파일을 같이 고친다.

### 인쇄에서 걸린 것들 (다시 밟지 말 것)

- **CSS grid 컨테이너는 Chrome 이 페이지 경계에서 쪼개지 못한다.** 섹션이 통째로
  다음 장에 밀려 앞 장에 열 줄씩 빈다. CASES 는 인쇄에서 `display: block` 으로
  되돌려 흐르게 했다.
- `dl { display: grid }` 는 SKILLS 전용이다. 셀렉터를 `dl` 로 두면 SUMMARY 의
  `dl.sum` 까지 2열로 깨진다. `.skills dl` 로 한정할 것.
- `@media screen and (max-width: 760px)` 의 `screen` 은 의도한 것이다. A4 콘텐츠
  폭이 약 707px 이라 빼면 인쇄에서 2단이 1단으로 접힌다.
- `li::before` 가 CSS 도형이라 PDF 텍스트 추출에 글머리 기호가 안 남는다.
  인쇄에서만 실제 `– ` 문자로 바꿔 ATS 가 항목 경계를 잡게 했다.
- `break-after: avoid` 만으로는 **제목 자체가 두 장에 걸쳐 쪼개지는 것을 못 막는다.**
  제목에는 `break-inside: avoid` 도 같이 건다.
- 포트폴리오 인쇄에서는 캡처를 줄인다(`.row.phone img { width: 96px }`). 화면 크기
  그대로 두면 이미지 한 장이 본문 대여섯 줄을 밀어낸다.
- `.dl`(PDF 내려받기 링크)을 인쇄에서 숨길 때 `.dl { display: none }` 만으로는 안 된다.
  `.reach a` 가 `display: block` 이라 특이도에서 진다 — `.reach a.dl` 로 쓸 것.

## 인쇄 확인

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --no-pdf-header-footer --print-to-pdf=/tmp/r.pdf \
  "file://$PWD/resume/index.html"
pdftotext -layout /tmp/r.pdf -
```
