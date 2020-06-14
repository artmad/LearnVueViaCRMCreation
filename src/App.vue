<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>


<script>
import MainLayout from './layouts/MainLayout';
import EmptyLayout from './layouts/EmptyLayout';

export default {
  components:{
    "main-layout": MainLayout,
    "empty-layout": EmptyLayout
  },
  computed: {
    layout() {
      console.log(this.$route.meta.layout);
      return this.$route.meta.layout;
    }
  }
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
