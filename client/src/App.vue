<template>
  <div>
    <template>
      <v-app id="inspire">
        <div class="app-container">
          <toolbar @toggleNavigationBar="drawer = !drawer"/>
          <navigation :toggle="drawer"/>
          <v-content>
            <router-view/>
          </v-content>
        </div>
      </v-app>
    </template>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: true
    }
  }
}
</script>

<style>
  .v-btn:hover:before{
    color: transparent !important;
  }
</style>
