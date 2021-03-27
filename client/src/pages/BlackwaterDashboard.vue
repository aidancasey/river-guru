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
        <v-col>
          <tide-times location="Cork Harbour" />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <weather1 river="blackwater" location="fermoy" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import TideTimes from "../components/TideTimes.vue";
  import Weather1 from "../components/Weather1.vue";

  export default {
    components: { TideTimes, Weather1 },
    data() {
      return {};
    },
  };
</script>
<style></style>
