<template>
  <div>
    <v-container fluid fill-height>
      <v-row>
        <v-col>
          <river-level
            river="suir"
            location="new-bridge"
            displayHeading="New Bridge, Golden, Tipperary"
          />
        </v-col> </v-row
      >>
      <v-row>
        <v-col>
          <river-level
            river="suir"
            location="carrick-on-suir"
            displayHeading="Carrick-On-Suir Tipperary"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <sun-moon
            river="suir"
            location="cahir"
            displayLocation="Cahir, Tipperary"
          ></sun-moon>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <weather
            river="suir"
            location="cahir"
            displayHeading="Cahir, Tipperary"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

  import Weather from "../components/Weather.vue";
  import SunMoon from "../components/SunMoon.vue";

  export default {
    components: { Weather, SunMoon },
    data() {
      return {};
    },
  };
</script>
<style></style>
