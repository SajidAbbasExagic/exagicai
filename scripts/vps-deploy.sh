#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/home/exagic.ai/public_html}"
APP_NAME="${APP_NAME:-exagic}"

export NODE_OPTIONS="--max-old-space-size=4096"
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
  nvm install 20 || true
  nvm use 20 || true
fi

cd "$APP_DIR"

echo "==> Node $(node -v)"
echo "==> NPM $(npm -v)"
echo "==> Fetching latest main"
git fetch origin
git reset --hard origin/main

echo "==> Installing dependencies"
npm install

echo "==> Building"
rm -rf .next
npm run build

echo "==> Restarting app"
if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  pm2 restart "$APP_NAME"
else
  pm2 start npm --name "$APP_NAME" -- start
fi
pm2 save || true

echo "==> Deploy complete"
