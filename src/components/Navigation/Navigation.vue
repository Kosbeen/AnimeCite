<template>
  <div class="nav-container">
    <ul class="nav-list">
      <li @click="switchingTab" class="nav-list-item">ЖАНРЫ</li>
      <li>ОНГОИНГИ</li>
      <li>СПИСОК АНИМЕ</li>
      <li>ТОП</li>
    </ul>
    <transition name="genre">
      <genres
        class="genre-list"
        v-if="switchTab"
        @close="closeGenreList"
      ></genres>
    </transition>
  </div>
</template>

<script>
import Genres from '../Data/Genres.vue';
export default {
  components: {
    Genres,
  },
  data() {
    return {
      switchTab: false,
      click: false,
    };
  },
  methods: {
    switchingTab() {
      this.switchTab = !this.switchTab;
      console.log(this.switchTab);
    },
    closeGenreList() {
      this.switchTab = false;
    },
  },
};
</script>

<style scoped>
.nav-list {
  position: relative;
  padding: 10px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
}
.nav-list-item {
  position: relative;
  cursor: pointer;
  height: 10%;
}
.nav-list-item:hover {
  color: green;
}
.nav-list-item::after {
  content: '';
  position: absolute;
  top: -13px;
  left: 0px;
  bottom: 10px;
  width: 60px;
  height: 45px;
}

.genre-list {
  position: absolute;
  top: 70px;
  display: block;
  width: 45vh;
  border: 1px solid blue;
  border-radius: 5px;
}
.genre-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.genre-enter-active {
  transition: all 0.5s ease-out;
}
.genre-enter-to {
  opacity: 1;
  transform: translateX(15px);
}
.genre-leave-from {
  opacity: 1;
  transform: translateX(15px);
}
.genre-leave-active {
  transition: all 0.5s ease-out;
}
.genre-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>
