export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "tasty.kiwi",
    htmlAttrs: {
      lang: "ch-de"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Sarabun:wght@200;400;600;800&display=swap"
      }
    ]
  },

  // Env

  publicRuntimeConfig: {
    apiURL: process.env.API_URL || "http://localhost:1337"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/strapi"],

  // Module Config

  tailwindcss: {
    jit: true
  },

  strapi: {
    entities: ["rezepts"]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
