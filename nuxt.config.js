
module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'universal',
  target: 'server',
  ssr: true,
  head: {
    title: 'nuxt-vuetify-express-mysql',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt-vuetify-express-mysql' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
   
    extend (config, { isDev }) {
      if (isDev && process.client) {
      config.module.rules.push({
      enforce: 'pre',
      test: /\.(js|vue)$/,
      exclude: /(node_modules)/
      })
      } 
      }
    // extend (config, ctx) {
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
