#!/usr/bin/env node
/**
 * Environment diagnostic.  Run:  npm run check:env
 *
 * Reports whether each variable is PRESENT and whether the app will actually
 * work — never prints a secret value. Safe to run on the VPS and safe to paste
 * the output into a chat or ticket.
 */

import { readFileSync, existsSync } from "fs";
import path from "path";

// Load .env the same way Next does, so this reflects reality rather than the
// shell's exported environment.
const envPath = path.join(process.cwd(), ".env");
const fileEnv = {};

if (existsSync(envPath)) {
  const raw = readFileSync(envPath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    // strip matching surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    fileEnv[key] = value;
  }
}

const get = (key) => process.env[key] ?? fileEnv[key] ?? "";
const has = (key) => get(key).trim().length > 0;

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

let problems = 0;
let warnings = 0;

function line(status, name, note) {
  const marks = {
    ok: `${GREEN}  OK  ${RESET}`,
    fail: `${RED} FAIL ${RESET}`,
    warn: `${YELLOW} WARN ${RESET}`,
    info: `${DIM} ..   ${RESET}`,
  };
  console.log(`${marks[status]} ${name.padEnd(34)} ${note}`);
}

function section(title) {
  console.log(`\n${title}`);
  console.log("-".repeat(72));
}

console.log("\nExagic AI — environment check");
console.log("=".repeat(72));

if (!existsSync(envPath)) {
  console.log(`${YELLOW}No .env file at ${envPath}${RESET}`);
  console.log("Values may still come from the process environment (PM2/CyberPanel).");
} else {
  const size = readFileSync(envPath).length;
  if (size === 0) {
    line("fail", ".env", "file exists but is EMPTY (0 bytes) — unsaved edits?");
    problems++;
  } else {
    line("ok", ".env", `found (${size} bytes, ${Object.keys(fileEnv).length} vars)`);
  }
}

section("Email — required for every form, comment and booking");
for (const key of ["SMTP_HOST", "SMTP_USER", "SMTP_PASSWORD"]) {
  if (has(key)) line("ok", key, "set");
  else {
    line("fail", key, "MISSING — all mail will fail silently");
    problems++;
  }
}

const port = get("SMTP_PORT") || "465 (default)";
line("info", "SMTP_PORT", port);
if (has("SMTP_PORT") && !["465", "587", "25", "2525"].includes(get("SMTP_PORT"))) {
  line("warn", "SMTP_PORT", `unusual port "${get("SMTP_PORT")}"`);
  warnings++;
}

line("info", "CONTACT_RECIPIENT_EMAIL", has("CONTACT_RECIPIENT_EMAIL") ? "set" : "unset — falls back to SMTP_USER");
line("info", "MAIL_FROM_NAME", has("MAIL_FROM_NAME") ? "set" : 'unset — defaults to "Exagic AI"');

// Catch obvious placeholder credentials before they reach production.
// Deliberately narrow — a real password can look unusual, and a checker that
// cries wolf on every run stops being read.
const pass = get("SMTP_PASSWORD");
if (pass && /^(your[-_.]?|changeme|placeholder|xxx+$|<.*>$)/i.test(pass)) {
  line("warn", "SMTP_PASSWORD", "looks like a PLACEHOLDER, not a real password");
  warnings++;
}

const tls = get("SMTP_TLS_REJECT_UNAUTHORIZED");
if (tls.toLowerCase() === "true") {
  line("ok", "SMTP_TLS_REJECT_UNAUTHORIZED", "true — certificates validated");
} else {
  line("warn", "SMTP_TLS_REJECT_UNAUTHORIZED", "not 'true' — TLS certs NOT validated (MITM risk)");
  warnings++;
}

section("reCAPTCHA — required in production, bypassed in development");
for (const key of ["NEXT_PUBLIC_RECAPTCHA_SITE_KEY", "RECAPTCHA_SECRET_KEY"]) {
  if (has(key)) line("ok", key, `set (${get(key).length} chars)`);
  else {
    line("fail", key, "MISSING — every submission rejected in production");
    problems++;
  }
}
if (has("NEXT_PUBLIC_RECAPTCHA_SITE_KEY") && has("RECAPTCHA_SECRET_KEY")) {
  if (get("NEXT_PUBLIC_RECAPTCHA_SITE_KEY") === get("RECAPTCHA_SECRET_KEY")) {
    line("fail", "reCAPTCHA keys", "site key and secret key are IDENTICAL — wrong values");
    problems++;
  }
}

section("Meeting scheduler");
if (has("MEETING_ADMIN_TOKEN")) {
  const t = get("MEETING_ADMIN_TOKEN");
  line("ok", "MEETING_ADMIN_TOKEN", `set (${t.length} chars)`);
  if (t.length < 24) {
    line("warn", "MEETING_ADMIN_TOKEN", "shorter than 24 chars — use: openssl rand -hex 32");
    warnings++;
  }
} else {
  line("fail", "MEETING_ADMIN_TOKEN", "MISSING — /api/meeting/admin returns 503; cannot re-open slots");
  problems++;
}

if (has("BOOKINGS_FILE")) {
  const f = get("BOOKINGS_FILE");
  const absolute = path.isAbsolute(f);
  line(absolute ? "ok" : "warn", "BOOKINGS_FILE", `${f}${absolute ? "" : "  (relative — prefer an absolute path outside the repo)"}`);
  if (!absolute) warnings++;
} else {
  line("warn", "BOOKINGS_FILE", "unset — defaults to .data/bookings.json inside the repo");
  warnings++;
}

if (has("NEXT_PUBLIC_CALENDLY_URL")) {
  line("warn", "NEXT_PUBLIC_CALENDLY_URL", "SET — the built-in scheduler and ALL slot-blocking are BYPASSED");
  warnings++;
} else {
  line("ok", "NEXT_PUBLIC_CALENDLY_URL", "unset — built-in scheduler active (correct)");
}

console.log("\n" + "=".repeat(72));
if (problems > 0) {
  console.log(`${RED}${problems} problem(s)${RESET} and ${warnings} warning(s). The app will NOT work correctly.`);
  process.exit(1);
}
console.log(`${GREEN}No blocking problems.${RESET} ${warnings} warning(s).`);
process.exit(0);
