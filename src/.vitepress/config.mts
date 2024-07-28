import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "slax.com",
  description: "build simple and relax tools",
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

//    socialLinks: [
//      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//    ]
  }
})
