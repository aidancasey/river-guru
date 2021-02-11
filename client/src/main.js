import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import AreaExample from './charts/AreaExample'
import LineExample from './charts/LineExample'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const routes = [
  { path: '/area', component: AreaExample },
  { path: '/line', component: LineExample }
]

const router = new VueRouter({
  routes: routes
})
router.replace('/line')


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')