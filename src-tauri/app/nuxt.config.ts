// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: [
    "nuxt-headlessui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@nuxtjs/plausible",
    "@sentry/nuxt/module",
  ],
  sentry: {
    sourceMapsUploadOptions: {
      org: "doshare",
      project: "nuxt",
      authToken:
        "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",
    },
  },
  ssr: false,
  devtools: { enabled: false },
  plausible: {
    domain: "cloud.doshare.me",
    trackLocalhost: true,
  },
  supabase: {
    redirectOptions: {
      login: "/auth/login",
      callback: "/confirm",
      include: false,
      exclude: [
        "/auth/login",
        "/confirm",
        "/auth/*",
        process.env.BUILDFOR == "Linux" ? "/*" : "/onboard",
      ],
      cookieRedirect: false,
    },
  },
});
