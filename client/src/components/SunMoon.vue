<template>
  <v-card class="mx-auto" height="100%" width="100%">
    <v-card-text class="pa-3">
      <v-card-title>Sun and Moon {{ displayLocation }}</v-card-title>
    </v-card-text>
    <!-- <v-list-item>
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
    <v-list-item> <v-icon>mdi-moon-full</v-icon> moon full </v-list-item> -->

    <v-list-item> dawn : {{ dawn1 }} </v-list-item>
    <v-list-item>
      <img
        :src="'/icons/sunrise-icon.svg'"
        :style="'width: 30px; height: 30px;'"
      />
      sunrise : {{ sunrise1 }}
    </v-list-item>
    <v-list-item>
      <img
        :src="'/icons/sunset-icon.svg'"
        :style="'width: 30px; height: 30px;'"
      />
      sunset : {{ sunset1 }}
    </v-list-item>

    <v-list-item> dusk : {{ dusk1 }} </v-list-item>

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
      river: {
        type: String,
        required: false,
      },
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
      getSunTimes() {
        RiverDataService.getSunTimes(this.$props.river, this.$props.location)
          .then((response) => {
            var results = response.data;
            this.sunTimes = results;
            this.dawn1 = this.sunTimes.data.day1.dawn;
            this.dawn2 = this.sunTimes.data.day2.dawn;
            this.sunrise1 = this.sunTimes.data.day1.sunrise;
            this.sunrise2 = this.sunTimes.data.day2.sunrise;
            this.sunset1 = this.sunTimes.data.day1.sunset;
            this.sunset2 = this.sunTimes.data.day2.sunset;
            this.dusk1 = this.sunTimes.data.day1.dusk;
            this.dusk2 = this.sunTimes.data.day2.dusk;
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.getSunTimes();
    },

    data() {
      return {
        sunTimes: [],
        dawn1: "",
        dawn2: "",
        sunrise1: "",
        sunrise2: "",
        sunset1: "",
        sunset2: "",
        dusk1: "",
        dusk2: "",
      };
    },
  };
</script>
