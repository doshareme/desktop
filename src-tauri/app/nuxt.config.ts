// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: [
    "nuxt-headlessui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    '@nuxtjs/plausible'
  ],
  ssr: false,
  devtools: { enabled: false },
  plausible: {
    domain: 'cloud.doshare.me',
    trackLocalhost: true,
  },
  supabase: {
    redirectOptions: {
      login: '/auth/login',
      callback: '/confirm',
      include: undefined,
      exclude: [
        '/auth/login',
        '/confirm',
        '/auth/*',
        // '/'

      ],
      cookieRedirect: false,
    }  
  }
});