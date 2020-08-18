
export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css", integrity: "sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==", crossorigin: "anonymous" },
      // { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.13/dist/shoelace/shoelace.css" },
      // { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css", integrity: "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z", crossorigin: "anonymous" }
    ],
    script: [
      // { type: "module", src: "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.13/dist/shoelace/shoelace.esm.js" },
      // { src: "https://code.jquery.com/jquery-3.5.1.slim.min.js", integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj", crossorigin: "anonymous" },
      // { src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js", integrity: "sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN", crossorigin: "anonymous" },
      // { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js", integrity: "sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV", crossorigin: "anonymous" }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '~assets/css/main.css'
  ],

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  plugins: [
  ],

  buildModules: [
  ],

  components: true,

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    'bootstrap-vue/nuxt',
    '@nuxtjs/vuetify'
  ],
  axios: {},
  content: {},

  build: {
    extend(config, ctx) {
    }
  }
}
