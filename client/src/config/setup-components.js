// Core Components
import Toolbar from '../components/core/Toolbar.vue';
import Navigation from '../components/core/NavigationDrawer.vue';
import TideTimes from '../components/TideTimes.vue';
import Weather from '../components/Weather.vue';
import FlowRateChart from '../components/FlowRateChart.vue';
import TotalEarningsStatistic from '../components/TotalEarningsStatistic.vue';

function setupComponents(Vue){

  Vue.component('toolbar', Toolbar);
  Vue.component('navigation', Navigation);
  Vue.component('tide-times', TideTimes);
  Vue.component('weather', Weather);
  Vue.component('flow-rate-chart', FlowRateChart);
  Vue.component('total-earnings-statistic', TotalEarningsStatistic);
}


export {
  setupComponents
}
