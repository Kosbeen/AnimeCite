<template>
  <div class="nav-container">
    <ul class="nav-list">
      <router-link to="/genres">
        <li
          class="nav-list-item"
          @mouseover="genreMouseOn"
          @mouseleave="genreMouseLeave"
        >
          ЖАНРЫ
        </li>
      </router-link>
      <li>ОНГОИНГИ</li>
      <router-link to="/animelist">
        <li class="nav-list-anime">АНИМЕ</li></router-link
      >
      <li>ТОП</li>
    </ul>
    <transition name="genre">
      <genres-mouse-show
        class="genres-show"
        v-show="switchTab"
        @mouseover="genreMouseOn"
        @mouseleave="genreMouseLeave"
      ></genres-mouse-show>
    </transition>
  </div>
</template>

<script>
import GenresMouseShow from '../Page/Menu/GenresMouseShow.vue';
export default {
  components: {
    GenresMouseShow,
  },
  data() {
    return {
      switchTab: false,
      click: false,
    };
  },
  methods: {
    genreMouseOn() {
      this.switchTab = true;
      console.log(this.switchTab);
    },
    genreMouseLeave() {
      this.switchTab = false;
      console.log(this.switchTab);
    },
    closeGenreList() {
      this.switchTab = false;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.nav-list {
  position: relative;
  padding: 10px 10px 10px 10px;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: rgb(168, 184, 233);
  border-radius: 10px;
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

.genre-enter-from {
  transform: scale(0);
}
.genre-enter-active {
  transition: all 0.5s ease-out;
}
.genre-enter-to {
  transform: scale(1);
}
.genre-leave-from {
  transform: scale(1);
}
.genre-leave-from {
  transition: all 0.5s ease-out;
}
.genre-leave-to {
  transform: scale(0);
}

.nav-list-anime {
  color: black;
}
.nav-list-anime:hover {
  color: green;
}
</style>
