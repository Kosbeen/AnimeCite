<template>
  <section class="main-container">
    <navigation></navigation>
    <router-view></router-view>
  </section>
</template>

<script>
// import CardElement from './components/Cardelements/CardElement.vue';
import Navigation from './components/Navigation/Navigation.vue';

export default {
  components: {
    Navigation,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.main-container {
  width: 1024px;
  margin: 0 auto;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
</style>
