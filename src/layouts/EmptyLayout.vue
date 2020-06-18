<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>
<script>
import messages from "../utils/messages";

export default {
  name: "emptyLayout",
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbErr) {
      this.$error(messages[fbErr.code] || messages.somethingWentWrong);
    }
  }
};
</script>
