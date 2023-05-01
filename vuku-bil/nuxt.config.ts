// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  head: {
    link: {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css"
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  }
})
