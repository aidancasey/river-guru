<template>
  <v-card height="100%" width="100%">
    <v-card-title>Weather Forecast for {{ displayHeading }}</v-card-title>
    <v-data-table :headers="headers" :items="forecasts">
      <template v-slot:item.from="{ item }">
        <span>{{ formatDate(item.from) }}</span>
      </template>

      <!-- #myimg {
    -ms-transform: rotate(7deg); /* IE 9 */
    -webkit-transform: rotate(7deg); /* Chrome, Safari, Opera */
    transform: rotate(7deg);
} -->

      <template v-slot:item.windDirectionDegree_degrees="{ item }">
        <img
          :src="'/icons/wind/weather-wind-arrow.svg'"
          :style="
            'width: 30px; height: 30px; transform: rotate(' +
              item.windDirectionDegree_degrees +
              'deg);'
          "
        />
      </template>

      <template v-slot:item.weatherSymbol_number="{ item }">
        <img
          :src="'/icons/day/' + item.weatherSymbol_number + '.svg'"
          style="width: 60px; height: 60px"
        />
      </template>
    </v-data-table>
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

      getData() {
        RiverDataService.getLatestWeather(
          this.$props.river,
          this.$props.location
        )
          .then((response) => {
            console.log("FORECAST IS");
            console.log(response);
            var results = response.data.data;
            this.forecasts = results;
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
        headers: [
          {
            text: "",
            align: "left",
            filterable: false,
            value: "from",
          },
          { text: "Weather", value: "weatherSymbol_number" },
          { text: "Temp (C)", value: "temperature_celsius" },
          { text: "Wind Dir", value: "windDirectionName" },
          { text: "Wind Degrees", value: "windDirectionDegree_degrees" },
          { text: "Wind Speed (kph)", value: "windSpeed_kph" },
          { text: "Rain (mm)", value: "rain_mm" },
        ],
        forecasts: [],
        forecasts1: [
          {
            from: "2021-03-25T00:00:00.000+00:00",
            to: "2021-03-25T00:00:00.000+00:00",
            temperature_celsius: "1.3",
            windDirectionName: "NW",
            windDirectionDegree_degrees: "329.6",
            windSpeed_mps: "0.9",
            windSpeed_kph: 3.2399999999999998,
            pressure: "1017.9",
            cloudiness_percentage: "95.0",
            rain_mm: "0.0",
            weatherSymbol_descriptionID: "Cloud",
            weatherSymbol_number: "4",
          },
          {
            from: "2021-03-25T01:00:00.000+00:00",
            to: "2021-03-25T01:00:00.000+00:00",
            temperature_celsius: "1.3",
            windDirectionName: "NW",
            windDirectionDegree_degrees: "325.1",
            windSpeed_mps: "1.6",
            windSpeed_kph: 5.76,
            pressure: "1017.5",
            cloudiness_percentage: "91.5",
            rain_mm: "0.0",
            weatherSymbol_descriptionID: "Cloud",
            weatherSymbol_number: "4",
          },
        ],
      };
    },
  };
</script>
