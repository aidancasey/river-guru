<template>
  <v-app>
    <v-app-bar app dark>
      <v-btn to="/readings" text>
        The River Guru
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "app",
};
</script>