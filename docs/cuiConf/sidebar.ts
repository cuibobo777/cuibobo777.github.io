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
        },
        {
            text: 'VUE',
            collapsed: true,
            items: [
                {
                    text: 'React, vue2, vue3 Diff 算法的区别',
                    link: '/posts/web/vue/v_001_diff _vue_react'
                }
            ]
        }
    ],
    '/posts/backend/': [],
    '/posts/algorithm': [
        {
            text: '两数相加',
            link: '/posts/algorithm/l_001_addTwoNumbers'
        },
        {
            text: '无重复字符的最长子串',
            link: '/posts/algorithm/l_002_longString'
        }
    ]
}