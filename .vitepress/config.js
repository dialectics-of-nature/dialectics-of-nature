import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "自然辩证法",
  description: "当代科学视野下的唯物辩证法重塑",
  base: '/dialectics-of-nature/', 
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [{ text: '首页', link: '/zh/' }],
        sidebar: [
          {
            text: '第一部分：导言与历史',
            items: [
              { text: '第一章：导言', link: '/chapter-1' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [{ text: 'Home', link: '/en/' }],
        sidebar: [
          {
            text: 'Part 1: Intro',
            items: [
              { text: 'Chapter 1: Intro', link: '/en/chapter-1' }
            ]
          }
        ]
      }
    }
  }
})
