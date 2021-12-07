<template>
  <section class="main-container">
    <navigation></navigation>
  </section>
  <!-- <section class="main-container">
    <div class="anime-container">
      <card-element></card-element>
    </div> -->
  <!-- </section> -->
</template>

<script>
// import CardElement from './components/Cardelements/CardElement.vue';
import Navigation from './components/Navigation/Navigation.vue';
export default {
  components: {
    // CardElement,
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
