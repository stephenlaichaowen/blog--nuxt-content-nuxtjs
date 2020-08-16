
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
      { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==", crossorigin: "anonymous" }
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
    '@nuxt/content'
  ],
  axios: {},
  content: {},
  
  build: {    
    extend (config, ctx) {
    }
  }
}
