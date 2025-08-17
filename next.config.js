/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  i18n: { locales: ['ar','en'], defaultLocale: 'ar' }
}
module.exports = nextConfig
