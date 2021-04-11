<template>
  <v-card height="100%">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="title text-center"
          >{{ displayHeading }}
        </v-list-item-title>
        <v-list-item-subtitle class="text-center"
          >last updated at {{ currentTime }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <!--       <v-row align="left" class="ma-0 pa-0">
        <v-col class="text-center display-1" cols="6"
          >{{ currentDescription }}, {{ currentTemp }}&deg;C
          <img :src="currentWeatherSymbol" style="width:15%" alt="" />
        </v-col>
      </v-row> -->
      <v-list-item class="text-center justify-center display-1">
        <img :src="currentWeatherSymbol" style="width:20%" alt="" />
        {{ currentDescription }}, {{ currentTemp }}&deg;C
      </v-list-item>
    </v-card-text>
    <v-list class="pa-0">
      <v-list-item v-for="item in forecasts" :key="item.from">
        <v-list-item class="caption pa=0">
          {{ formatDate(item.from) }}
        </v-list-item>
        <v-list-item class="caption pa=0">
          <span :class="getColour(item.temperature_celsius)"
            >{{ item.temperature_celsius }}&deg;</span
          >
        </v-list-item>
        <v-list-item class="h5 pa=0">
          <img
            :src="'/icons/day/' + item.weatherSymbol_number + '.svg'"
            style="width: 40px; height: 40px"
          />
          rain {{ item.rain_mm }}mm
        </v-list-item>
        <v-list-item class="h5 pa=0">
          <img
            :src="'/icons/wind/weather-wind-arrow.svg'"
            :style="
              'width: 20px; height: 20px; transform: rotate(' +
                item.windDirectionDegree_degrees +
                'deg);'
            "
          />
          {{ item.windDirectionName }} {{ item.windSpeed_kph.toFixed(2) }} km/h
        </v-list-item>
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-btn
        block
        @click.prevent="loadAllForecasts"
        :disabled="buttonDisabled == 1"
      >
        Load More
      </v-btn>
    </v-card-actions>
    <v-list-item-subtitle align="center" class="ma-3 caption">
      <p>
        weather info provided by Met Éireann public API
      </p>
    </v-list-item-subtitle>
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
      displayHeading: {
        type: String,
        required: false,
      },
    },
    methods: {
      formatDate(value) {
        //Mon 09:00
        return this.$luxon(value, "ccc") + " " + this.$luxon(value, "T");
      },
      formatImageLink(value) {
        return "/day/" + value + ".svg";
      },
      getColour(value) {
        if (value > 20) {
          return "red";
        } else if (value > 14 && value <= 20) {
          return "orange";
        } else if (value > 7 && value <= 14) {
          return "yellow";
        } else {
          return "blue";
        }
      },

      getWeatherDescription(value) {
        var descriptions = {
          1: "Sunny",
          2: "Light Cloud",
          3: "Partly Cloud",
          4: "Cloudly",
          5: "Light Rain Sun",
          6: "Light Rain Thunder Sun",
          7: "Sleet Sun",
          8: "Snow Sunny",
          9: "Light Rain",
          10: "Rain",
          11: "Rain Thunder",
          12: "Sleet",
          13: "Snow",
          14: "Snow Thunder",
          15: "Fog",
          20: "Sleet Sun Thunder",
          21: "Snow Sun Thunder	",
          22: "Light Rain Thunder	",
          23: "Sleet Thunder	",
          24: "Drizzle Thunder Sun",
          25: "Rain Thunder Sun	",
          26: "Light Sleet Thunder Sun	",
          27: "Heavy Sleet Thunder Sun	",
          28: "Light Snow Thunder Sun	",
          29: "Heavy Snow Thunder Sun	",
          30: "Drizzle Thunder	",
          31: "Light Sleet Thunder	",
          32: "Heavy Sleet Thunder	",
          33: "Light Snow Thunder",
          34: "Heavy Snow Thunder",
          40: "Drizzle Sun",
          41: "Rain Sun",
          42: "Light Sleet Sun",
          43: "Heavy Sleet Sun",
          44: "Light Snow Sun",
          45: "Heavy Snow Sun",
          46: "Drizzle",
          47: "Light Sleet",
          48: "Heavy Sleet",
          49: "Light Snow",
          50: "Heavy Snow",
        };
        var val = JSON.stringify(descriptions[value]).toString();
        return val.replace(/"/g, "");
      },
      loadAllForecasts() {
        this.buttonDisabled = this.buttonDisabled + 1;
        this.forecasts = this.allForecasts;
      },

      getData() {
        RiverDataService.getLatestWeather(
          this.$props.river,
          this.$props.location
        )
          .then((response) => {
            var results = response.data.data;
            this.allForecasts = results;
            this.forecasts = results.slice(0, 10);

            this.currentWeatherSymbol =
              "/icons/day/" + results[0].weatherSymbol_number + ".svg";
            this.currentTemp = results[0].temperature_celsius;
            this.currentTime = this.formatDate(results[0].from);
            this.currentWindSpeed = results[0].windSpeed_kph;
            this.currentDescription = this.getWeatherDescription(
              results[0].weatherSymbol_number
            );
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.getData();
    },

    data() {
      return {
        forecasts: [],
        allForecasts: [],
        currentWeatherSymbol: null,
        currentWeatherPic: null,
        currentTemp: null,
        currentTime: null,
        currentDescription: null,
        buttonDisabled: 0,
      };
    },
  };
</script>
<style scoped>
  span.blue {
    background: #7895cf;
    border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    -webkit-border-radius: 2.5em;
    color: black;
    display: inline-block;
    font-weight: bold;
    line-height: 2.5em;
    margin-right: 2px;
    text-align: center;
    width: 3em;
  }
  span.red {
    background: hsl(13, 94%, 49%);
    border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    -webkit-border-radius: 2.5em;
    color: black;
    display: inline-block;
    font-weight: bold;
    line-height: 2.5em;
    margin-right: 2px;
    text-align: center;
    width: 3em;
  }
  span.yellow {
    background: #ffff00;
    border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    -webkit-border-radius: 2.5em;
    color: black;
    display: inline-block;
    font-weight: bold;
    line-height: 2.5em;
    margin-right: 2px;
    text-align: center;
    width: 3em;
  }
  span.orange {
    background: #ffaa00;
    border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    -webkit-border-radius: 2.5em;
    color: black;
    display: inline-block;
    font-weight: bold;
    line-height: 2.5em;
    margin-right: 2px;
    text-align: center;
    width: 3em;
  }
</style>
