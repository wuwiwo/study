import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "adun的学习小站",
  description: "Keep studying",
  themeConfig: {
    //https://vitepress.dev/reference/default-theme-config,
    nav: [
      { text: '🏠首页', link: 'doc/index' },
      { text: '🎉UI&UX', link: 'doc/01-ui/ui' },
      { text: '🎮编程', link: 'doc/02-code/code' },
      { text: '🎁其他', link: 'doc/03-other/code' },
      { text: '😶关于我', link: 'doc/04-me/me' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: 'doc/markdown-examples' },
          { text: 'Runtime API Examples', link: 'doc/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
