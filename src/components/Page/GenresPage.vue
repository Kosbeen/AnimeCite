<template>
  <div class="main-container">
    <base-card class="genre-button-container">
      <li class="genre-list" v-for="item in genres" :key="item">
        {{ item.genre }}
      </li>
    </base-card>
  </div>
</template>

<script>
import BaseCard from '../BaseComponents/BaseCard.vue';
export default {
  components: { BaseCard },
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
  display: flex;
  justify-content: center;
  margin: 2px 4px 0 0;
  width: 100%;
  border: 2px solid rgb(81, 154, 238);
  border-radius: 10px;
}
.genre-list {
  margin: 0 0 10px 0;
  padding: 5px 0 0 8px;
}
</style>
