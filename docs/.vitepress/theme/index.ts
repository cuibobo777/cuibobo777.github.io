// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/style.css'
import './style/rainbow.css'
import './style/index.css'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
// import footer from '../components/footer.vue'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 'layout-bottom': () => h(footer)
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  }
}
