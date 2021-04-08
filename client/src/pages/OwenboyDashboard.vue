<template>
  <div>
    <v-container fluid fill-height>
      <v-row>
        <v-col>
          <river-level
            river="owenboy"
            location="ballea"
            displayHeading="Ballea Bridge"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <sun-moon
            river="owenboy"
            location="carrigaline"
            displayHeading="Carrigaline Town"
          />
        </v-col>
        <v-col>
          <tide-times location="cork" displayLocation="Cork Harbour" />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <weather
            river="owenboy"
            location="carrigaline"
            displayHeading="Carrigaline"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import TideTimes from "../components/TideTimes.vue";
  import Weather from "../components/Weather.vue";
  import SunMoon from "../components/SunMoon.vue";

  export default {
    components: { TideTimes, Weather, SunMoon },
    data() {
      return {};
    },
  };
</script>
<style></style>
