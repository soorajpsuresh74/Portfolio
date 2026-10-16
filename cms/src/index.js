'use strict';

const seed = require('./seed-data');

// The only things anonymous visitors may do: read published portfolio content.
// Bootstrap enforces this on every start, so permissions added to the Public
// role in the admin panel are removed again on the next restart.
const PUBLIC_ACTIONS = [
  'api::profile.profile.find',
  'api::project.project.find',
  'api::project.project.findOne',
  'api::skill-group.skill-group.find',
  'api::skill-group.skill-group.findOne',
  'api::capability.capability.find',
  'api::capability.capability.findOne',
];

// Strapi's own admin password rules: 8+ chars with a lowercase, uppercase and digit.
const STRONG_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

/**
 * Create the super admin from ADMIN_EMAIL / ADMIN_PASSWORD when none exists.
 * Runs before the server accepts requests, so nobody can claim the
 * "register first admin" form on a fresh deploy.
 */
async function ensureAdmin(strapi) {
  const userService = strapi.service('admin::user');
  if (await userService.exists()) return;

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const isProduction = process.env.NODE_ENV === 'production';

  if (!email || !password) {
    if (isProduction) {
      throw new Error(
        'No admin user exists. Set ADMIN_EMAIL and ADMIN_PASSWORD so the admin is created at startup.'
      );
    }
    strapi.log.warn('No admin user yet: create one at /admin (local development only).');
    return;
  }

  if (!STRONG_PASSWORD.test(password)) {
    throw new Error(
      'ADMIN_PASSWORD must be at least 8 characters with a lowercase letter, an uppercase letter and a number.'
    );
  }

  await userService.createFirstAdmin({
    email: email.trim().toLowerCase(),
    password,
    firstname: process.env.ADMIN_FIRSTNAME || 'Admin',
  });
  strapi.log.info(`Created super admin ${email}. Remove ADMIN_PASSWORD from the environment after logging in.`);
}

async function lockDownPublicRole(strapi) {
  const roleQuery = strapi.db.query('plugin::users-permissions.role');
  const permissionQuery = strapi.db.query('plugin::users-permissions.permission');

  const publicRole = await roleQuery.findOne({ where: { type: 'public' } });
  if (!publicRole) return;

  const current = await permissionQuery.findMany({ where: { role: publicRole.id } });

  const extra = current.filter((p) => !PUBLIC_ACTIONS.includes(p.action));
  if (extra.length) {
    await permissionQuery.deleteMany({ where: { id: { $in: extra.map((p) => p.id) } } });
    strapi.log.info(`Removed public permissions: ${extra.map((p) => p.action).join(', ')}`);
  }

  const have = new Set(current.map((p) => p.action));
  for (const action of PUBLIC_ACTIONS.filter((a) => !have.has(a))) {
    await permissionQuery.create({ data: { action, role: publicRole.id } });
  }
}

async function disableSignups(strapi) {
  const store = strapi.store({ type: 'plugin', name: 'users-permissions' });
  const advanced = (await store.get({ key: 'advanced' })) || {};
  if (advanced.allow_register !== false) {
    await store.set({ key: 'advanced', value: { ...advanced, allow_register: false } });
  }
}

/** Load the initial content once. Later deletes in the admin panel stay deleted. */
async function seedContent(strapi) {
  const store = strapi.store({ type: 'core', name: 'portfolio' });
  if (await store.get({ key: 'seeded' })) return;

  const publish = (uid, data) => strapi.documents(uid).create({ data, status: 'published' });

  if (!(await strapi.documents('api::profile.profile').findFirst())) {
    await publish('api::profile.profile', seed.profile);
  }

  if ((await strapi.documents('api::capability.capability').count()) === 0) {
    for (const [order, c] of seed.capabilities.entries()) {
      await publish('api::capability.capability', {
        title: c.title,
        color: c.color,
        order,
        items: c.items.map((text) => ({ text })),
      });
    }
  }

  if ((await strapi.documents('api::skill-group.skill-group').count()) === 0) {
    for (const [order, g] of seed.skillGroups.entries()) {
      await publish('api::skill-group.skill-group', {
        name: g.name,
        order,
        skills: g.skills.map((name) => ({ name })),
      });
    }
  }

  if ((await strapi.documents('api::project.project').count()) === 0) {
    for (const [order, p] of seed.projects.entries()) {
      await publish('api::project.project', { ...p, order });
    }
  }

  await store.set({ key: 'seeded', value: true });
  strapi.log.info('Seeded initial portfolio content.');
}

module.exports = {
  register() {},

  async bootstrap({ strapi }) {
    await ensureAdmin(strapi);
    await disableSignups(strapi);
    await lockDownPublicRole(strapi);
    await seedContent(strapi);
  },
};
