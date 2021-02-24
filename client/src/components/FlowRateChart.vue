<template>
  <v-card class="card">
    <v-card-text class="pa-3"> 
       <v-card-title>Inniscarra Dam</v-card-title>
        <p class="text-center display-2 text--primary">{{currentFlow}}</p>
      <area-chart :data="chartData" ytitle="m3/s"/>
    </v-card-text>
  </v-card>
</template>

<script>
  import RiverDataService from "../services/RiverDataService";
  import { DateTime } from 'luxon';

export default {
  data() {
    return {
      chartData: [],
      currentFlow:0,
    }

    },
     methods: {
    retrieveFlowReadings() {
      RiverDataService.getAll()
        .then((response) => {
            console.log(response);
            var results = response.data.map(this.getDisplayFlowReading);
            results.reverse();
          this.chartData = results;
          this.currentFlow = results[0][1][0];
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveFlowReadings();
    },

    getDisplayFlowReading(reading) { 
      return [
            [DateTime.fromISO(reading.recordedAt).toFormat('T')],
            [reading.reading]
        ]
    },
  },
  mounted() {
    this.retrieveFlowReadings();
  },
}
</script>

<style>
  .card {
    border-radius: 3px;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: transparent;
  }
</style>
