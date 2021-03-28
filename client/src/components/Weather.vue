<template>
  <v-card class="mx-auto" height="100%" width="100%">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ displayHeading }}
        </v-list-item-title>
        <v-list-item-subtitle
          >{{ currentTime }}, Mostly sunny</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6"> {{ currentTemp }}&deg;C </v-col>
        <v-col cols="6">
          <img style="width:40%" :src="currentWeatherSymbol" alt="" />
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle
        >{{ currentWindSpeed.toFixed(2) }} km/h</v-list-item-subtitle
      >
    </v-list-item>

    <v-slider
      v-model="time"
      :max="6"
      :tick-labels="labels"
      class="mx-4"
      ticks
    ></v-slider>

    <v-list class="transparent">
      <v-list-item v-for="item in forecasts" :key="item.from">
        <v-list-item-title>{{ formatDate(item.from) }}</v-list-item-title>
        <v-list-item>
          <span :class="getColour(item.temperature_celsius)"
            >{{ item.temperature_celsius }}&deg;</span
          >
        </v-list-item>
        <v-list-item>
          <img
            :src="'/icons/day/' + item.weatherSymbol_number + '.svg'"
            style="width: 60px; height: 60px"
          />
          rain {{ item.rain_mm }}mm
        </v-list-item>

        <v-list-item>
          <img
            :src="'/icons/wind/weather-wind-arrow.svg'"
            :style="
              'width: 30px; height: 30px; transform: rotate(' +
                item.windDirectionDegree_degrees +
                'deg);'
            "
          />
          {{ item.windDirectionName }} {{ item.windSpeed_kph.toFixed(2) }} km/h
        </v-list-item>

        <v-list-item-subtitle class="text-right">
          {{ item.temp }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text>
        Full Report
      </v-btn>
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
      displayHeading: {
        type: String,
        required: false,
      },
    },
    methods: {
      formatDate(value) {
        return this.$luxon(value, "ff");
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

      getData() {
        RiverDataService.getLatestWeather(
          this.$props.river,
          this.$props.location
        )
          .then((response) => {
            console.log("ZEEE FORECAST IS");
            console.log(response);
            var results = response.data.data;
            this.forecasts = results;
            this.currentWeatherSymbol =
              "/icons/day/" + results[0].weatherSymbol_number + ".svg";
            this.currentTemp = results[0].temperature_celsius;
            this.currentTime = this.formatDate(results[0].from);
            this.currentWindSpeed = results[0].windSpeed_kph;
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
        labels: ["1", "2", "3"],
        time: 0,
        forecast: [
          {
            day: "Tuesday",
            icon: "mdi-white-balance-sunny",
            temp: "24\xB0/12\xB0",
          },
          {
            day: "Wednesday",
            icon: "mdi-white-balance-sunny",
            temp: "22\xB0/14\xB0",
          },
          { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" },
        ],
        forecasts: [],
        currentWeatherSymbol: null,
        currentWeatherPic: null,
        currentTemp: null,
        currentTime: null,
      };
    },
  };
</script>
<style scoped>
  span.blue {
    background: #7895cf;
    border-radius: 4em;
    -moz-border-radius: 4em;
    -webkit-border-radius: 4em;
    color: black;
    display: inline-block;
    font-weight: bold;
    line-height: 3em;
    margin-right: 15px;
    text-align: center;
    width: 4em;
  }
  span.red {
    background: hsl(13, 94%, 49%);
    border-radius: 4em;
    -moz-border-radius: 4em;
    -webkit-border-radius: 4em;
    color: black;
    display: inline-block;
    font-weight: bold;
    line-height: 3em;
    margin-right: 15px;
    text-align: center;
    width: 4em;
  }
  span.yellow {
    background: #ffff00;
    border-radius: 4em;
    -moz-border-radius: 4em;
    -webkit-border-radius: 4em;
    color: black;
    display: inline-block;
    font-weight: bold;
    line-height: 3em;
    margin-right: 15px;
    text-align: center;
    width: 4em;
  }
  span.orange {
    background: #ffaa00;
    border-radius: 4em;
    -moz-border-radius: 4em;
    -webkit-border-radius: 4em;
    color: black;
    display: inline-block;
    font-weight: bold;
    line-height: 3em;
    margin-right: 15px;
    text-align: center;
    width: 4em;
  }
</style>
