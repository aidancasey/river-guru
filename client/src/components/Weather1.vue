<template>
  <v-card height="100%" width="100%">
    <v-data-table :headers="headers" :items="forecasts"></v-data-table>
  </v-card>
</template>

<script>
  export default {
    props: {
      location: {
        type: String,
        required: false,
      },
    },
    methods: {
      formatDate(value) {
        return this.$luxon(value, "DD HH:mm");
      },
    },
    mounted() {
      //this.getTideData();
    },

    data() {
      return {
        headers: [
          {
            text: "From",
            align: "left",
            filterable: false,
            value: "from",
          },
          { text: "To", value: "to" },
          { text: "Weather Symbol", value: "weatherSymbol_descriptionID" },
          { text: "Weather Symbol ID", value: "weatherSymbol_number" },
          { text: "Temp (C)", value: "temperature_celsius" },
          { text: "Wind Dir", value: "windDirectionName" },
          { text: "Wind Degrees", value: "windDirectionDegree_degrees" },
          { text: "Wind Speed (kph)", value: "windSpeed_kph" },
          { text: "Rain (mm)", value: "rain_mm" },
          { text: "Pressure", value: "pressure" },
        ],
        forecasts: [
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
