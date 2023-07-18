<!--
*@File  :count.vue
*@Date  :2023/07/18 16:18:21
*@Author:Xu
-->

<template>
  <div class="access-count">
    <div class="panel-area">
      <section class="panel">
        <h2>本站总访问量 <span id="busuanzi_value_site_pv" /> 次</h2>
        <div style="font-size: 1.5rem;">🙋🏻‍♂️</div>
        <h2>本站访客数 <span id="busuanzi_value_site_uv" /> 人次</h2>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.access-count {
  padding: 0 64px;
  margin-top: 48px;
  .panel-area {
    background-color: var(--vp-c-bg-soft);
    border-radius: 8px;
    width: 100%;
    min-height: 32px;
    max-width: 1152px;
    margin: 0 auto;
    .panel {
        display: flex;
        justify-content: space-between;
        padding: 12px 24px;
        align-items: center;
        h2 {
            font-weight: 600;
            line-height: 24px;
            font-size: 16px;
            overflow-wrap: break-word;
        }
    }
  }
}
</style>
