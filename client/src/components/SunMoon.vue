<template>
  <v-card class="mx-auto" height="100%" width="100%">
    <v-card-text class="pa-3">
      <v-card-title>Sun and Moon {{ displayLocation }}</v-card-title>
    </v-card-text>
    <v-list-item>
      <v-icon color="blue darken-5">mdi-moon-first-quarter</v-icon> moon first
      quarter
    </v-list-item>
    <v-list-item>
      <v-icon color="pink darken-5">mdi-moon-last-quarter</v-icon> moon last
      quarter
    </v-list-item>
    <v-list-item>
      <v-icon color="blue darken-5">mdi-moon-new</v-icon> moon new
    </v-list-item>
    <v-list-item>
      <v-icon>mdi-moon-waning-crescent</v-icon> moon waning crescent
    </v-list-item>
    <v-list-item>
      <v-icon>mdi-moon-waning-gibbous</v-icon> moon waning gibbous
    </v-list-item>
    <v-list-item>
      <v-icon>mdi-moon-waxing-crescent</v-icon> moon waxing crescent
    </v-list-item>
    <v-list-item>
      <v-icon>mdi-moon-waxing-gibbous</v-icon> moon waxing gibbous
    </v-list-item>
    <v-list-item> <v-icon>mdi-moon-full</v-icon> moon full </v-list-item>

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
    },
    methods: {
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
