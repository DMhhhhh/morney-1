import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import layout from '@/components/layout.vue';
import icon from '@/components/icon.vue';

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('layout', layout)
Vue.component('icon', icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
