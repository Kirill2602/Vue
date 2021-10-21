import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import myplugin from './plugins/myplugin'

Vue.config.productionTip = false
Vue.use(myplugin)
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
