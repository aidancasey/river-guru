// Core Components
import Toolbar from "../components/core/Toolbar.vue";
import Navigation from "../components/core/NavigationDrawer.vue";
import TideTimes from "../components/TideTimes.vue";
import SunMoon from "../components/SunMoon.vue";
import Weather from "../components/Weather.vue";
import FlowRateChart from "../components/FlowRateChart.vue";
import TotalEarningsStatistic from "../components/TotalEarningsStatistic.vue";
import RiverLevel from "../components/RiverLevel.vue";

function setupComponents(Vue) {
  Vue.component("toolbar", Toolbar);
  Vue.component("navigation", Navigation);
  Vue.component("tide-times", TideTimes);
  Vue.component("sun-moon", SunMoon);
  Vue.component("weather", Weather);
  Vue.component("flow-rate-chart", FlowRateChart);
  Vue.component("river-level", RiverLevel);
  Vue.component("total-earnings-statistic", TotalEarningsStatistic);
}

export { setupComponents };
