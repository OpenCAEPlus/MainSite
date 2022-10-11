export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          defer: true,
          'data-domain': 'content.nuxtjs.org',
          src: 'https://plausible.io/js/script.js'
        }
      ]
    }
  },
  content: {
    highlight: {
      preload: ['xml']
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/',
      ]
    }
  },
  modules: ['@nuxtlabs/github-module'],
  extends: process.env.DOCUS_THEME_PATH || '@nuxt-themes/docus',
  github: {
    owner: 'nuxt',
    repo: 'content',
    branch: 'main'
  },
  colorMode: {
    preference: 'dark'
  }
})
