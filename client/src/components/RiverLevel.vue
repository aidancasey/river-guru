<template>
  <v-card class="mx-auto" height="100%" width="100%">
    <v-card-text class="pa-3">
      <v-card-subtitle class="title text-center"
        >Water Level {{ displayHeading }}</v-card-subtitle
      >
      <p class="text-center display-1 text--primary">{{ currentLevel }} m</p>
      <area-chart :data="chartData" :colors="['cornflowerblue']" />
    </v-card-text>
    <v-divider></v-divider>
    <v-list-item-subtitle align="center" class="ma-3 caption">
      <p>
        river levels intrepreted from OPW data
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
        currentLevel: 0,
      };
    },
    props: {
      river: {
        type: String,
        required: false,
      },
      location: {
        type: String,
        required: false,
      },
      displayHeading: {
        type: String,
        required: false,
      },
    },
    methods: {
      retrieveLevelReadings() {
        RiverDataService.getLatestLevels(
          this.$props.river,
          this.$props.location
        )
          .then((response) => {
            var results = this.getDailyFlowReadings(response.data);
            results.reverse();
            this.chartData = results;
            var hourlyResults = this.getHourlyFlowReadings(response.data);
            var latestDate = hourlyResults[0][0][0];
            var latestLevel = hourlyResults[0][1][0];

            //add the latest reading to the end of the daily results to make end of chart accurate
            results.push([[latestDate], [latestLevel]]);

            this.currentLevel = latestLevel; //get the  very last (latest ) flow reading
          })
          .catch((e) => {
            console.log("error " + e);
          });
      },

      refreshList() {
        this.retrieveFlowReadings();
      },

      getDailyFlowReadings(allReadings) {
        var results = [];
        try {
          allReadings.forEach(function(item) {
            if (item.mean != 0) {
              results.push([
                [DateTime.fromISO(item.recordedAt).toLocaleString()],
                [item.mean],
              ]);
            }
          });
        } catch (e) {
          console.log("error in getDailyFlowReadings");
          console.log(e);
        }
        return results;
      },
      getHourlyFlowReadings(allReadings) {
        var results = [];
        allReadings.forEach(function(item) {
          if (item.mean == 0) {
            results.push([
              [DateTime.fromISO(item.recordedAt).toLocaleString()],
              [item.value],
            ]);
          }
        });
        return results;
      },
    },
    mounted() {
      this.retrieveLevelReadings();
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
