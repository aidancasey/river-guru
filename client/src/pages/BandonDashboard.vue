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
        </v-col>
        <v-col>
          <tide-times location="Cork Harbour" />
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

  export default {
    components: { TideTimes, Weather },
    data() {
      return {};
    },
  };
</script>
<style></style>
