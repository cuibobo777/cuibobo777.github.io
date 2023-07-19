---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 脆啵啵的博客
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
  name: "加一份脆啵啵"
  text: "No one can refuse a delicious CuiBobo"
  tagline: /Vue/Nest/Python/啥也不会
  image:
      src: /imgs/avatar.png
      alt: 卡比
  actions:
    - theme: brand
      text: 探索
      link: /about/me
    - theme: alt
      text: 进入我的Github
      link: https://github.com/cuibobo777

features:
  - icon: 📚
    title: 前端学习
    details: web的世界多姿多彩，探索中总能记录些什么
    link: '/posts/web/'
    linkText: '看看'
  - icon: 🧩
    title: 杂谈
    details: 自己总是在连接，在交换，混乱而统一
    link: '/essay/'
    linkText: '谈谈'
  - icon: ☃
    title: 后端学习
    details: Do you want to build a snowman?
    link: '/posts/backend/'
    linkText: Come on let's go and play!
---

<!-- 自定义组件 -->
<script setup>
import count from './.vitepress/components/count.vue';
</script>

<count />
