<template>
  <v-card class="mx-auto" height="100%" width="100%">
    <v-card-text class="pa-3">
      <v-card-title>Flow Rate - Inniscarra Dam</v-card-title>
      <p class="text-center display-2 text--primary">
        {{ currentFlow }} ㎥/sec
      </p>
      <area-chart :data="chartData" />
    </v-card-text>

    <v-divider></v-divider>
    <v-list-item-subtitle align="center">
      <p>
        current flow rate intrepreted from ESB data feed
      </p>
    </v-list-item-subtitle>
  </v-card>
</template>

<script>
  import RiverDataService from "../services/RiverDataService";
  import { DateTime } from "luxon";

  export default {
    data() {
      return {
        chartData: [],
        currentFlow: 0,
      };
    },
    methods: {
      retrieveFlowReadings() {
        RiverDataService.getAll()
          .then((response) => {
            var results = response.data.map(this.getDisplayFlowReading);
            results.reverse();
            this.chartData = results;
            this.currentFlow = results[results.length - 1][1][0]; //get the  very last (latest ) flow reading
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
          [DateTime.fromISO(reading.recordedAt).toFormat("T")],
          [reading.reading],
        ];
      },
    },
    mounted() {
      this.retrieveFlowReadings();
    },
  };
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
