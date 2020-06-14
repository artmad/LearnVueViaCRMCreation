<template>
  <div class="app-main-layout">
    <Navbar @click="isOpen = !isOpen" />
    <Sidebar v-model="isOpen" />
    <main class="app-content"  :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" tag="a" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/app/Sidebar";
import Navbar from "../components/app/Navbar";

export default {
  name: "main-layout",
  components: {
    Sidebar,
    Navbar
  },
  data: function() {
    return {
      isOpen: true
    };
  }
};
</script>