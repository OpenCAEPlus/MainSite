export default defineAppConfig({
  docus: {
    title: 'OpenCAEPlus',
    description: 'The open source CAE + AI',
    layout: 'docs',
    image: 'https://content.nuxtjs.org/preview.png',
    url: 'https://opencaeplus.org',
    debug: false,
    socials: {
      github: 'opencaeplus/mainsite'
    },
    github: {
      root: 'docs/content',
      edit: true,
      releases: true
    },
    cover: {
      src: '/cover.jpg',
      alt: 'Open Source CAE + AI'
    },
    aside: {
      level: 1
    },
    header: {
      title: false,
      logo: false,
      exclude: ['/v1', '/content-v1', '/fr', '/ja', '/ru']
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Powered by Docus',
        href: 'https://docus.com'
      },
      icons: [
        {
          label: 'NuxtJS',
          href: 'https://nuxtjs.org',
          component: 'IconNuxt'
        },
        {
          label: 'Vue Telescope',
          href: 'https://vuetelescope.com',
          component: 'IconVueTelescope'
        }
      ]
    }
  }
})
