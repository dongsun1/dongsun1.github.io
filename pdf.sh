#!/bin/sh
# 세 문서를 PDF 로 굽는다.
#
# 국내 대기업 지원서는 파일 첨부를 전제로 돌아간다. 링크만 주면 받는 쪽이
# 한 번 더 움직여야 하므로, 같은 내용의 PDF 를 페이지에서 바로 내려받게 둔다.
# 본문을 고치면 반드시 다시 실행할 것 — 안 하면 PDF 만 옛 내용으로 남는다.
set -e
cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || { echo "Chrome 을 찾지 못했다: $CHROME" >&2; exit 1; }

burn() { # <소스 html> <출력 pdf>
  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$PWD/$2" "file://$PWD/$1" 2>/dev/null
  echo "  $2 ($(du -h "$2" | cut -f1))"
}

echo "PDF:"
burn resume/index.html        resume/kim-dongsun-resume.pdf
burn resume/server/index.html resume/server/kim-dongsun-resume.pdf
burn portfolio/index.html     portfolio/kim-dongsun-portfolio.pdf
