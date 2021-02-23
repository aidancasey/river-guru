<template>
  <v-card class="card">
    <v-card-text class="pa-3">
       <v-card-title>Latest Flow Readings Inniscarra Dam</v-card-title>
      <area-chart :data="chartData"  ytitle="Cubic Metres Per Second"/>
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
