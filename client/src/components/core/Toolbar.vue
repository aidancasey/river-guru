<template>
  <v-toolbar
    dark
    app
    :color="$root.themeColor">
    <v-toolbar-title> SSSSSS
      <v-toolbar-side-icon @click="toggleNavigationBar"></v-toolbar-side-icon>
    </v-toolbar-title>
  </v-toolbar>
</template>
<script>
export default {
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
