module.exports = ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      frameguard: { action: 'deny' },
      hsts: { maxAge: 31536000, includeSubDomains: true },
      referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      // Only the portfolio may call the API from a browser. Comma-separated list.
      origin: env.array('CORS_ORIGINS', ['http://localhost:5173', 'http://localhost:4173']),
      methods: ['GET', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Accept'],
      credentials: false,
    },
  },
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
