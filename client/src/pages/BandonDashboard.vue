<template>
  <div>
    <v-container fluid fill-height>
      <v-row>
        <v-col>
          <river-level
            river="bandon"
            location="curranure"
            displayHeading="Curranure Bridge"
          />
        </v-col> </v-row
      >>
      <v-row>
        <v-col>
          <river-level
            river="bandon"
            location="bealaboy"
            displayHeading="Bealaboy Bridge"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <sun-moon
            river="bandon"
            location="bandon"
            displayLocation="Bandon Town"
          ></sun-moon>
        </v-col>
        <v-col>
          <tide-times location="kinsale" displayLocation="Kinsale" />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <weather
            river="bandon"
            location="bandon"
            displayHeading="Bandon Town"
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
