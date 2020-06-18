<template>
  <div id="app">
    <div v-if="showPreloader" class="preloader-background">
      <img src="./assets/loading.gif" alt />
    </div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>


<script>
import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";

export default {
  components: {
    "main-layout": MainLayout,
    "empty-layout": EmptyLayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
    showPreloader() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";

.preloader-background {
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
  background: rgba(156, 147, 133, 0.7);
}
</style>
