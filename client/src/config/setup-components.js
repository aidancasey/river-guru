// Core Components
import Toolbar from '../components/core/Toolbar.vue';
import Navigation from '../components/core/NavigationDrawer.vue';

import Widget from '../components/Widget.vue';
import FlowRateChart from '../components/FlowRateChart.vue';
import TotalEarningsStatistic from '../components/TotalEarningsStatistic.vue';

function setupComponents(Vue){

    Vue.component('toolbar', Toolbar);
  Vue.component('navigation', Navigation);
  Vue.component('widget', Widget);
  Vue.component('flow-rate-chart', FlowRateChart);
  Vue.component('total-earnings-statistic', TotalEarningsStatistic);
}


export {
  setupComponents
}
