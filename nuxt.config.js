export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'QU',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@700&family=Cairo:wght@600&family=El+Messiri:wght@500&family=Kufam:wght@500&display=swap' },
    ]
  },


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: "@/plugins/aos", ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'vue-sweetalert2/nuxt',
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  // -----------------



}
