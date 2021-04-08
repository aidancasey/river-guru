<template>
  <div>
    <v-container fluid fill-height>
      <v-row>
        <v-col>
          <river-level
            river="blackwater"
            location="fermoy"
            displayHeading="Fermoy Bridge"
          />
        </v-col>
        <v-col>
          <river-level
            river="blackwater"
            location="ballyduff"
            displayHeading="BallyDuff"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <sun-moon
            river="blackwater"
            location="fermoy"
            displayLocation="Fermoy Town"
          ></sun-moon>
        </v-col>
        <v-col>
          <tide-times location="youghal" displayLocation="Youghal" />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <weather
            river="blackwater"
            location="fermoy"
            displayHeading="Fermoy Town"
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
