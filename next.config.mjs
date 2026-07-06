import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      allowedOrigins: ['exagic.ai', 'www.exagic.ai'],
    },
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    },
    {
      // HTML pages only (exclude Next static assets and files with extensions).
      // Force browsers, CDNs and OpenLiteSpeed's LSCache to revalidate so AI
      // crawlers always get the freshest build instead of a stale cached page.
      source: '/((?!_next/|.*\\.[^/]+$).*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, s-maxage=60, must-revalidate, stale-while-revalidate=60',
        },
      ],
    },
  ],
};

export default nextConfig;
