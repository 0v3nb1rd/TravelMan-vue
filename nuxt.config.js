const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',

  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico?v2' }
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      // }
    ]
  },

  loading: { color: 'green' },

  css: ['~/assets/main.scss'],

  plugins: ['~/plugins/globals', '~/plugins/axios'],

  buildModules: ['@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000/'
  },

  env: {
    appName: 'Travel-Man'
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss', '@/sass/variables.sass'],
    theme: {
      // dark: true,
      themes: {
        light: {
          primary: '#1c2026',
          accent: '#E0575C'
        }
        //   dark: {
        //     primary: colors.blue.darken2,
        //     accent: colors.grey.darken3,
        //     secondary: colors.amber.darken3,
        //     info: colors.teal.lighten1,
        //     warning: colors.amber.base,
        //     error: colors.deepOrange.accent4,
        //     success: colors.green.accent3
        //   }
      }
    }
  },

  build: {
    extend(config, ctx) {}
  }
}
