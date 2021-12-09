<template>
  <div class="main-container">
    <base-card class="genre-button-container">
      <ul class="genre-list">
        <li class="genre-list-item" v-for="item in genres" :key="item">
          {{ item.genre }}
        </li>
      </ul>
    </base-card>
  </div>
</template>

<script>
export default {
  inject: ['genres'],
  data() {
    return {};
  },
};
</script>
<style scoped>
.main-container {
  display: flex;
  justify-content: center;
}
.genre-list {
  list-style: none;
  font-size: 24px;
}
.genre-button-container {
  margin: 2px 4px 0 0;
  width: 100%;
  border: 2px solid rgb(81, 154, 238);
  border-radius: 10px;
}
.genre-list {
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
  padding: 5px 5px 0 8px;
}
</style>
