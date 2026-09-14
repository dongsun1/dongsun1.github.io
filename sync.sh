#!/bin/sh
# resume/index.html 이 원본. 루트에도 같은 파일을 둔다.
#
# 루트를 meta refresh 리다이렉트로 두면 JS·meta refresh 를 따라가지 않는
# 크롤러(ChatGPT 등)가 본문 11자짜리 빈 페이지로 읽는다. 그래서 두 경로 모두
# 전문을 서빙한다.
set -e
cd "$(dirname "$0")"
cp resume/index.html index.html
echo "synced: resume/index.html -> index.html"
