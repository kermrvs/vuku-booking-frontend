// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@/assets/main.scss'],
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
    '@pinia/nuxt', '@vuestic/nuxt'
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
