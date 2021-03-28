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
        <v-col>
          <tide-times location="Cork Harbour" />
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

  export default {
    components: { TideTimes, Weather },
    data() {
      return {};
    },
  };
</script>
<style></style>
