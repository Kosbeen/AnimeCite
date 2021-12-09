<template>
  <base-dialog class="genre-container">
    <div class="genre-button-container">
      <button class="genre-button" @click="closeButtonGenre">X</button>
    </div>
    <ul class="genre-list">
      <li v-for="item in genres" :key="item" class="genre-list-item">
        {{ item.genre }}
      </li>
    </ul>
  </base-dialog>
</template>

<script>
export default {
  inject: ['genres'],
  emits: ['close'],
  methods: {
    closeButtonGenre() {
      this.$emit('close');
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.genre-container {
  width: 50%;
  border: 3px solid rgb(117, 167, 248);
  border-radius: 15px;
  padding: 0;
}
.genre-button-container {
  display: flex;
  justify-content: flex-end;
  margin: 3px 12px 0 0;
}
.genre-button {
  padding: 0 2px;
  background: rgba(131, 181, 246, 0.541);
}
.genre-list {
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
  padding: 8px 8px 8px 8px;
}
.genre-list-item {
  font-size: 20px;
}
</style>
