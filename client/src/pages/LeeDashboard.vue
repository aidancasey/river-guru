<template>
  <div>
    <v-container fluid fill-height>
      <v-row>
        <v-col>
          <flow-rate-chart />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <river-level
            river="lee"
            location="waterworks"
            displayHeading="Waterworks Weir"
          />
        </v-col>
        <v-col>
          <river-level
            river="lee"
            location="ovens"
            displayHeading="River Bride at Ovens Bridge"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <sun-moon
            river="lee"
            location="anglers-rest"
            displayLocation="The Angler's Rest"
          ></sun-moon>
        </v-col>
        <v-col>
          <tide-times location="cork" displayLocation="Cork Harbour" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <weather
            river="lee"
            location="anglers-rest"
            displayHeading="The Anglers Rest"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import FlowRateChart from "../components/FlowRateChart.vue";
  import TideTimes from "../components/TideTimes.vue";
  import SunMoon from "../components/SunMoon.vue";
  import Weather from "../components/Weather.vue";

  export default {
    components: { FlowRateChart, TideTimes, SunMoon, Weather },
    data() {
      return {};
    },
  };
</script>
<style></style>
