// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/content',
    '@sidebase/nuxt-auth',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    AUTH_SERVICE_BASE_URL: process.env.AUTH_SERVICE_BASE_URL,
    NUXT_AUTH_SECRET: process.env.NUXT_AUTH_SECRET,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },
});
