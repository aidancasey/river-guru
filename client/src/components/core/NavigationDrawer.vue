<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app>
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'LeeDashboard' }">
        <img src="@/assets/guru.png" width="36px"/>
      </router-link>
      <router-link :to="{ name: 'LeeDashboard' }" class="text">
         The River Guru
      </router-link>
    </v-toolbar>
    <v-list>
      <v-list-item @click="changeRoute('LeeDashboard', 1)">
        <v-list-item-action>
          <v-icon>mdi-waves</v-icon>
        </v-list-item-action>
        <v-list-item-title :class="[{'active': selectedIndex === 1}, 'item-title' ]" >River Lee, Cork</v-list-item-title>
      </v-list-item>
        <v-list-item @click="changeRoute('BandonDashboard', 2)">
        <v-list-item-action>
          <v-icon>mdi-waves</v-icon>
        </v-list-item-action>
        <v-list-item-title :class="[{'active': selectedIndex === 2}, 'item-title' ]" >River Bandon, Cork</v-list-item-title>
      </v-list-item>
    </v-list>
          <v-list-item @click="changeRoute('BlackwaterDashboard', 3)">
        <v-list-item-action>
          <v-icon>mdi-waves</v-icon>
        </v-list-item-action>
        <v-list-item-title :class="[{'active': selectedIndex === 3}, 'item-title' ]" >River Blackwater, Cork</v-list-item-title>
      </v-list-item>
                <v-list-item @click="changeRoute('OwenboyDashboard', 4)">
        <v-list-item-action>
          <v-icon>mdi-waves</v-icon>
        </v-list-item-action>
        <v-list-item-title :class="[{'active': selectedIndex === 4}, 'item-title' ]" >River Owenboy, Cork</v-list-item-title>
      </v-list-item>
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
