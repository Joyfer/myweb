import colors from "vuetify/es5/util/colors";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Joyfer Web",
    title: "Joyfer Web",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "title",
        name: "title",
        content: "Joyfer Web - Programador Full-Stack, Javascript."
      },
      {
        hid: "description",
        name: "description",
        content:
          "Mi página personal donde podras encontrar mi perfil, datos, proyectos, intereses y mi lista de contactos."
      },
      {
        name: "keywords",
        content: "Joyfer Ramos, Joyfer, Ramos, Web, Programador, Javascript"
      },
      {
        name: "robots",
        content: "index"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true"
      },
      {
        href:
          "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&amp;display=swap",
        rel: "stylesheet"
      },
      {
        href:
          "https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@400;700&display=swap",
        rel: "stylesheet"
      }
    ]
  },

  generate: {
    routes: [
      "/colection/1",
      "/colection/2",
      "/colection/3",
      "/colection/4",
      "/colection/5",
      "/colection/6",
      "/colection/7"
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ { src: '~/plugins/typer.js',  mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    defaultAssets: false,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#6b63ff"
        },
        dark: {
          primary: "#6b63ff",
          accent: colors.grey.darken3,
          secondary: colors.blueGrey.darken4,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.darken4
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
