module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // Public https URL of this service. Render sets RENDER_EXTERNAL_URL automatically;
  // PUBLIC_URL overrides it (e.g. for a custom domain).
  url: env('PUBLIC_URL', env('RENDER_EXTERNAL_URL', '')),
  // Render terminates TLS in front of the app; trust its X-Forwarded-* headers so
  // client IPs (used by login rate limiting) and secure cookies are correct.
  proxy: { koa: env.bool('IS_PROXIED', env('NODE_ENV') === 'production') },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
