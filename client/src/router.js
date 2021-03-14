import Vue from "vue";
import Router from "vue-router";
import LeeDashboard from '../src/pages/LeeDashboard.vue';
import BlackwaterDashboard from '../src/pages/BlackwaterDashboard.vue';
import BandonDashboard from '../src/pages/BandonDashboard.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/reading",
      alias: "/readings",
      name: "readings",
      //component: () => import("./components/RiverFlowReadingList")
    },
    {
      path: '/',
      name: 'LeeDashboard',
      component: LeeDashboard  },
      {
        path: 'blackwater',
        name: 'BlackwaterDashboard',
        component: BlackwaterDashboard  },
        {
          path: 'bandon',
          name: 'BandonDashboard',
          component: BandonDashboard  }
    
  ]
});