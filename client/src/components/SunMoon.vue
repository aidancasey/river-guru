<template>
  <v-card class="mx-auto" height="100%" width="100%" rounded="true">
    <v-card-text class="pa-0">
      <v-list-item-title class="title"
        >Daylight {{ displayLocation }}
      </v-list-item-title>
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

    <v-list-item-content class="pa-0">
      <v-list-item-title class="text-center subheading text--primary">
        {{ day1 }}</v-list-item-title
      >
      <img
        :src="'/icons/sunrise-icon.svg'"
        :style="'width: 50px; height: 50px;'"
      />
      <v-list-item>
        <v-list-item-subtitle class="title text-center pa-0">
          dawn : {{ dawn1 }}
        </v-list-item-subtitle>

        <v-list-item-subtitle class="title text-center">
          sunrise : {{ sunrise1 }}
        </v-list-item-subtitle>
      </v-list-item>
      <img
        :src="'/icons/sunset-icon.svg'"
        :style="'width: 50px; height: 50px;'"
      />
      <v-list-item>
        <v-list-item-subtitle class="title text-center">
          sunset : {{ sunset1 }}
        </v-list-item-subtitle>

        <v-list-item-subtitle class="title text-center">
          dusk : {{ dusk1 }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list-item-content>

    <v-list-item-content>
      <v-list-item-title class="text-center subheading text--primary">
        {{ day2 }}</v-list-item-title
      >
      <img
        :src="'/icons/sunrise-icon.svg'"
        :style="'width: 50px; height: 50px;'"
      />
      <v-list-item>
        <v-list-item-subtitle class="title text-center">
          dawn : {{ dawn2 }}
        </v-list-item-subtitle>

        <v-list-item-subtitle class="title text-center">
          sunrise : {{ sunrise2 }}
        </v-list-item-subtitle>
      </v-list-item>
      <img
        :src="'/icons/sunset-icon.svg'"
        :style="'width: 50px; height: 50px;'"
      />
      <v-list-item>
        <v-list-item-subtitle class="title text-center">
          sunset : {{ sunset2 }}
        </v-list-item-subtitle>

        <v-list-item-subtitle class="title text-center">
          dusk : {{ dusk2 }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list-item-content>
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
            this.dawn1 = this.$luxon(this.sunTimes.data.day1.dawn, "T");
            this.dawn2 = this.$luxon(this.sunTimes.data.day2.dawn, "T");
            this.sunrise1 = this.$luxon(this.sunTimes.data.day1.sunrise, "T");
            this.sunrise2 = this.$luxon(this.sunTimes.data.day2.sunrise, "T");
            this.sunset1 = this.$luxon(this.sunTimes.data.day1.sunset, "T");
            this.sunset2 = this.$luxon(this.sunTimes.data.day2.sunset, "T");
            this.dusk1 = this.$luxon(this.sunTimes.data.day1.dusk, "T");
            this.dusk2 = this.$luxon(this.sunTimes.data.day2.dusk, "T");
            this.day1 = this.$luxon(this.sunTimes.data.day1.dawn, "DDDD");
            this.day2 = this.$luxon(this.sunTimes.data.day2.dawn, "DDDD");
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
        day1: "",
        day2: "",
      };
    },
  };
</script>
