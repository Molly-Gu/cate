import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/icon/iconfont.css'
import './../style/reset.css'
import animated from 'animate.css'
Vue.use(animated)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
