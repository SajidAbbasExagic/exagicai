#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/home/exagic.ai/public_html}"
APP_NAME="${APP_NAME:-exagic}"

cd "$APP_DIR"

echo "==> Fetching latest main"
git fetch origin
git reset --hard origin/main

echo "==> Installing dependencies"
npm ci || npm install

echo "==> Building"
rm -rf .next
npm run build

echo "==> Restarting app"
pm2 restart "$APP_NAME" || pm2 start npm --name "$APP_NAME" -- start

echo "==> Deploy complete"
