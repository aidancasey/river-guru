<template>
  <v-app-bar 
    dark
    app
    :color="$root.themeColor">
    <v-toolbar-title>
      <v-app-bar-nav-icon @click="toggleNavigationBar"></v-app-bar-nav-icon>
    </v-toolbar-title>
  </v-app-bar>
</template>
<script>
export default {
  name: 'AppToolbar',
  data() {
    return {
    }
  },
  methods: {
    toggleNavigationBar() {
      const vm = this;
      vm.$emit('toggleNavigationBar');
    },
  }
};
</script>
<style>
  .toolbar-menu-item {
    padding-left: 5px;
  }

  .selected-language-flag {
    max-width: 45px;
  }

  .language-flag {
    max-width: 40px;
  }


  .languages-list-item {
    cursor: pointer;
    margin-top: -2px;
    margin-left: 1px;
  }

  .languages-list-item-title {
    font-size: 16px;
  }

  .languages-list-item-title:hover {
    color: #41B883;
    font-weight: bold;
  }
  .language-menu {
    border-radius: 25px;
    width: 235px;
    margin-right: 10px;
  }
</style>
