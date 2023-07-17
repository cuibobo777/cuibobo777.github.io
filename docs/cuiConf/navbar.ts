import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '🍿首页',
    link: '/'
  },
  {
    text: '🍡Vue记录',
    items: [
        {
            text: '🎉基础练习',
            link: '/vue/Practice'
        },
        {
            text: '🎈实践项目',
            link: '/vue/Projects'
        }
    ]
  },
  {
    text: '🌈杂谈',
    link: '/essay'
  }
]
