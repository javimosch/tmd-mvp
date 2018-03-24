const path = require('path');
const sander = require('sander');



module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Tous Mes Droits',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: ''
    }],
    link: [/*{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico?v3'
    }*/ {
      rel: 'stylesheet',
      href: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css'
    }, {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Montserrat'
    }],
    script:[
      
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  modules: [
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
    '@nuxtjs/font-awesome', ['nuxt-sass-resources-loader', {
      resources: path.join(process.cwd(), 'assets/scss/main.scss')
    }],
  ],
  env: {
    loginSalt: '$2a$10$67Bn8fXfK0peYFBhAKCctequ/QSkwtX4DWE5UmG0DQOieGdGysR8S',
    apiUrl: process.env.API_URL || 'http://localhost:3000',
    loginEmail: process.env.NODE_ENV === 'production' ? '' : 'pierre@diagnostical.fr',
    loginPwd: process.env.NODE_ENV === 'production' ? '' : '041281aaa',
    isProduction: process.env.NODE_ENV === 'production'
  },
  plugins: [
    { src: '@/plugins/vue-disable-autocomplete' },
    { src: '@/plugins/vuejs-noty', ssr: false },
    { src: '@/plugins/vuex-router-sync.js', ssr: false },
    { src: '@/plugins/vue-cookie', ssr: false },
    { src: '@/plugins/codemirror', ssr: false }
  ],
  css: [
    'vuejs-noty/dist/vuejs-noty.css',
    // lib css
    'codemirror/lib/codemirror.css',
    // merge css
    'codemirror/addon/merge/merge.css',
    // theme css
    'codemirror/theme/base16-dark.css'
  ],
  workbox: {
    runtimeCaching: [{
      // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
      urlPattern: 'https://my-cdn.com/.*',
      // Defaults to `networkFirst` if omitted
      //handler: 'cacheFirst',
      // Defaults to `GET` if omitted
      method: 'GET'
    }]
  },
  manifest: {
    display: 'standalone',
    name: 'tous mes droits',
    lang: 'fr'
  },
  render: {
    ssr: true
  },
  generate:{
    routes: function(){
      return new Promise((resolve, reject)=>{
        let p = path.join(process.cwd(),'assets','routes.json');
        if(!sander.existsSync(p)){
          throw new Error('Not found: '+p);
        }
        let res = sander.readFileSync(p).toString('utf-8');
        res = JSON.parse(res);
        resolve(res.nodes.filter(i=>(!i.ssr||i.ssr!==false) && i.path!=undefined).map(i=>i.path));
      })
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
