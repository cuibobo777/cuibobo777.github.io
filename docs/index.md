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
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: '/'
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<!-- 自定义组件 -->
<script setup>
import count from './.vitepress/components/count.vue';
</script>

<count />
