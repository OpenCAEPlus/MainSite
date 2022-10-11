export default defineNuxtConfig({
  app: {
    head: {
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
    owner: 'OpenCAEPlus',
    repo: 'MainSite',
    branch: 'main'
  },
  colorMode: {
    preference: 'dark'
  }
})
