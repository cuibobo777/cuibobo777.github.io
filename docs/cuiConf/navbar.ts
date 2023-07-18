import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '🍿首页',
    link: '/',
    activeMatch: '/'
  },
  {
    text: '🍔关于我',
    link: '/about',
    activeMatch: '/about'
  },
  {
    text: '🍡Vue记录',
    items: [
        {
            text: '🎉基础练习',
            link: 'posts/vue/Practice',
            activeMatch: 'posts/vue/Practice'
        },
        {
            text: '🎈实践项目',
            link: 'posts/vue/Projects',
            activeMatch: 'posts/vue/Practice'
        }
    ]
  },
  {
    text: '🌈杂谈',
    link: '/essay',
    activeMatch: '/essay'
  }
]
