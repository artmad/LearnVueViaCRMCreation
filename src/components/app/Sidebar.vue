<template>
  <ul class="sidenav app-sidenav" v-bind:class="{open: value}">
    <router-link v-for="link in links" v-bind:key="link.url" v-bind:to="link.url" tag="li" active-class="active"  exact>
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "sidebar",
  props: ['value'],
  data: function() {
    return {
      links: [
        { title: "Счет", url: "/" },
        { title: "История", url: "/history" },
        { title: "Планирование", url: "/planning" },
        { title: "Новая запись", url: "/record" },
        { title: "Категории", url: "/categories" }
      ]
    };
  }
};
</script>