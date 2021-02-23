import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import { setupComponents } from './config/setup-components';
import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js';

import 'vuetify/dist/vuetify.min.css';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'font-awesome/css/font-awesome.css';
import './styles/global.css';
import VueLuxon from "vue-luxon";

Vue.use(VueLuxon);


Vue.config.productionTip = false
Vue.use(VueChartkick, { adapter: Chart });
Vue.use(vuetify);

setupComponents(Vue);

 new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app') ;


/* /* eslint-disable no-new */
/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    themeColor: '#1D2939'
  },  */


//})