import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '🍿首页',
    link: '/',
    activeMatch: '/'
  },
  {
    text: '🍔关于我',
    link: '/about/me',
    activeMatch: '/about'
  },
  {
    text: '🍡笔记',
    items: [
        {
            text: '🎉前端笔记',
            link: 'posts/web/index',
            activeMatch: 'posts/web'
        },
        {
            text: '🎈后端笔记',
            link: 'posts/backend/index',
            activeMatch: 'posts/backend'
        }
    ]
  },
  {
    text: '🌈杂谈',
    link: '/essay/index',
    activeMatch: '/essay'
  }
]
