import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
    '/essay/': [],
    '/posts/web/': [
        {
            text: 'github',
            collapsed: true,
            items: [
                {
                    text: 'vitepress 自动构建',
                    link: '/posts/web/github/g_001_workflows'
                }
            ]
        },
        {
            text: '浏览器',
            collapsed: true,
            items: [
                {
                    text: '浏览器渲染原理',
                    link: '/posts/web/browser/b_001_browserRendering'
                }
            ]
        }
    ],
    '/posts/backend/': [],
    '/posts/algorithm': [
        {
            text: '两数相加',
            link: '/posts/algorithm/l_001_addTwoNumbers'
        }
    ]
}