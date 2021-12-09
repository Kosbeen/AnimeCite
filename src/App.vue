<template>
  <section class="main-container">
    <navigation></navigation>
    <router-view></router-view>
  </section>
</template>

<script>
import Navigation from './components/Navigation/Navigation.vue';

export default {
  components: {
    Navigation,
  },
  provide() {
    return {
      genres: this.genres,
    };
  },
  data() {
    return {
      genres: [
        { genre: 'Боевые искусства' },
        { genre: 'Романтика' },
        { genre: 'Меха' },
        { genre: 'Мистика' },
        { genre: 'Ужасы' },
        { genre: 'Триллеры' },
        { genre: 'Повседневность' },
      ],
    };
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
