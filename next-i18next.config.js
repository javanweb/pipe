// next-i18next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'es', 'fr', 'de', 'fa'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};