import Vue from "vue";
import App from "./App.vue";

// import GhButton from './components/button.vue'
// import './assets/iconfont/ionicons.less'
// Vue.component(GhButton.name, GhButton)
import GhUI from '../packages/index';

Vue.use(GhUI)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
