# dongsun1.github.io

이력서와 포트폴리오. 외부 의존성은 Google Fonts 뿐인 단일 HTML 두 장.

- https://dongsun1.github.io/ — 이력서 (루트와 `/resume/` 가 같은 전문)
- https://dongsun1.github.io/resume/
- https://dongsun1.github.io/portfolio/ — 프로젝트 구현 상세와 문제 해결 전문

루트를 리다이렉트로 두면 meta refresh 를 따라가지 않는 크롤러가 빈 페이지로
읽기 때문에, 이력서는 두 경로 모두 전문을 서빙한다.

## 나누는 기준

이력서는 인쇄 3페이지에 맞춘다. 성과 수치는 이력서에 남기고(ATS 와 리크루터는
링크를 따라가지 않는다), "어떻게 했는지" 는 포트폴리오로 보낸다.

## 수정

`resume/index.html` 을 고치고 `./sync.sh` 를 돌린 뒤 push 한다.
`portfolio/index.html` 은 sync 대상이 아니다 — 고치고 바로 push 하면 된다.

두 파일은 CSS 를 복제해서 쓴다. 공유 스타일시트로 빼면 단일 HTML 이라는 전제가
깨지므로, 디자인을 바꿀 때는 두 파일을 같이 고친다.

## 인쇄 확인

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --no-pdf-header-footer --print-to-pdf=/tmp/r.pdf \
  "file://$PWD/resume/index.html"
pdftotext -layout /tmp/r.pdf -
```
