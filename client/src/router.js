import Vue from "vue";
import Router from "vue-router";
import LeeDashboard from '../src/pages/LeeDashboard.vue';


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
      component: LeeDashboard  }
    
  ]
});