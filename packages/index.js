// 整个包的入口
import Button from './button.vue'

import './iconfont/ionicons.less'
const components = [
  Button
]
// Vue.component(button.name, button)
const install = (Vue) => {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}