// next.config.js

const isDev = process.env.NODE_ENV === 'development';

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      img-src *;
      script-src 'self' ${isDev ? "'unsafe-eval'" : ''};
      style-src 'self' 'unsafe-inline';
      object-src 'none';
      frame-ancestors 'none';
    `.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;