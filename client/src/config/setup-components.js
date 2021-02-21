// Core Components
import Toolbar from '../components/core/Toolbar.vue';
import Navigation from '../components/core/NavigationDrawer.vue';
import PageFooter from '../components/core/PageFooter.vue';

import Widget from '../components/Widget.vue';
import SiteViewStatistic from '../components/SiteViewStatistic.vue';
import TotalEarningsStatistic from '../components/TotalEarningsStatistic.vue';

function setupComponents(Vue){

    Vue.component('toolbar', Toolbar);
  Vue.component('navigation', Navigation);
  Vue.component('page-footer', PageFooter);
  Vue.component('widget', Widget);
  Vue.component('site-view-statistic', SiteViewStatistic);
  Vue.component('total-earnings-statistic', TotalEarningsStatistic);
}


export {
  setupComponents
}
