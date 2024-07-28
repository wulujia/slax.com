import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "slax.com",
  description: "Building simple tools, making life relaxed",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/slax-note' }
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

    footer: [
      {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
      }
    ],
//    socialLinks: [
//      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//    ]
  }
})
