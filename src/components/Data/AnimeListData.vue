<template>
  <base-card>
    <div class="anime-container" v-for="item in info" :key="item">
      <h2>{{ item.title }}</h2>
      <p>Japanese Title: {{ item.titleJapanese }}</p>
      <a :href="item.videoUrl">Просмотре серии</a>
    </div>
  </base-card>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      info: [],
    };
  },
  methods: {},
  created() {
    axios
      .get('https://jikan1.p.rapidapi.com/anime/16498/episodes', {
        headers: {
          'x-rapidapi-host': 'jikan1.p.rapidapi.com',
          'x-rapidapi-key':
            '75808d9e1cmsh61fd78c7790325dp1eae09jsne63b53bc6c74',
        },
      })
      .then((response) => {
        return response.data.episodes;
      })
      .then((data) => {
        const res = [];
        for (const episodes in data) {
          res.push({
            titleJapanese: data[episodes].title_japanese,
            title: data[episodes].title,
            videoUrl: data[episodes].video_url,
          });
        }
        console.log(res);
        return (this.info = res);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>

<style scoped>
.anime-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 20px 20px;
  flex-direction: column;
  border: 2px solid rgb(95, 127, 235);
  border-radius: 15px;
}
</style>
