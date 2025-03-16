import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "slax.com",
  description: "Simple tools, relax life",
  head: [['link', { rel: 'icon', href: 'https://slax.com/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/slax-note' },
      { text: 'Blog', link: '/blog' }
    ],

    sidebar: [
      {
        text: 'Products',
        items: [
          { text: 'Slax Note', link: '/slax-note' },
          { text: 'Slax Reader', link: '/slax-reader' }
        ]
      }
    ],

    footer: {
      message: 'Simple tools, relax life.',
      copyright: 'Copyright © slax.com'
      }
//    socialLinks: [
//      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//    ]
  }
})
