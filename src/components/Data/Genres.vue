<template>
  <div>
    <div class="genre-button-container">
      <button class="genre-button" @click="closeButtonGenre">Закрыть</button>
    </div>
    <ul class="genre-list">
      <li v-for="item in genres" :key="item">
        {{ item.genre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  data() {
    return {
      genres: [
        { genre: 'Боевые искусства' },
        { genre: 'Романтика' },
        { genre: 'Меха' },
        { genre: 'Мистика' },
      ],
    };
  },
  methods: {
    closeButtonGenre() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.genre-button-container {
  display: flex;
  justify-content: flex-end;
  margin: 2px 4px 0 0;
}
.genre-button {
  padding: 0 2px;
  background: rgba(131, 181, 246, 0.541);
}
.genre-list {
  margin: 0 0 10px 0;
  padding: 5px 0 0 8px;
}
</style>
