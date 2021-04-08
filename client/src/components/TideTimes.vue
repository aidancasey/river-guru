<template>
  <v-card class="mx-auto" height="100%" width="100%">
    <v-card-text class="pa-3">
      <v-card-subtitle>Tide Times - {{ displayLocation }}</v-card-subtitle>
    </v-card-text>
    <v-list class="transparent">
      <v-list-item v-for="item in tides" :key="item.id">
        <v-list-item-subtitle class="text-left">
          {{ item.hilo.toUpperCase() }}
        </v-list-item-subtitle>

        <v-list-item-subtitle class="text-center">
          {{ formatDate(item.time) }}
        </v-list-item-subtitle>

        <v-list-item-subtitle class="text-right">
          {{ item.height }} m
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text> Full Report </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import RiverDataService from "../services/RiverDataService";

  export default {
    props: {
      location: {
        type: String,
        required: false,
      },
      displayLocation: {
        type: String,
        required: false,
      },
      icon: {
        type: String,
        required: false,
      },
      color: {
        type: String,
        required: false,
      },
    },
    methods: {
      formatDate(value) {
        return this.$luxon(value, "HH:mm");
      },
      getTideData() {
        RiverDataService.getLatestTideTimes(this.$props.location)
          .then((response) => {
            var results = response.data;
            this.tides = results;
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.getTideData();
    },

    data() {
      return {
        tides: [],
      };
    },
  };
</script>
