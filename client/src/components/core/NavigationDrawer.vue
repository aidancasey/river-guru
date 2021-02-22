<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app>
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'Dashboard' }">
        <img src="@/assets/logo.png" width="36px"/>
      </router-link>
      <router-link :to="{ name: 'Dashboard' }" class="text">
         Vue Admin Template
      </router-link>
    </v-toolbar>
    <v-list>
      <v-list-item @click="changeRoute('Dashboard', 1)">
        <v-list-item-action>
          <v-icon>dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-title :class="[{'active': selectedIndex === 1}, 'item-title' ]" >Dashboard</v-list-item-title>
      </v-list-item>
        <v-list-item @click="changeRoute('Chart', 5)">
        <v-list-item-action>
          <v-icon>bar_chart</v-icon>
        </v-list-item-action>
        <v-list-item-title :class="[{'active': selectedIndex === 5}, 'item-title' ]" >Chart</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },

  data() {
    return {
      selectedIndex: 1
    }
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;
      vm.selectedIndex = selectedIndex;
      return vm.$router.push({ name: routeName });
    }
  }
}
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
</style>
