// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/icon',
    '@sidebase/nuxt-auth'
  ],
  app: {
    head: {
      title: 'Electricity Offers',
      meta: [{ name: 'description', content: 'Web for electricity offers.' }],
    },
  },
})