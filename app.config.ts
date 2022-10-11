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
      root: 'content',
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
      logo: false
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Powered by Docus',
        href: 'https://docus.com'
      }
    }
  }
})
