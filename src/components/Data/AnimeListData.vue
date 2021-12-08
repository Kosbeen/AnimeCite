<template>
  <button @click="getAnime">KekWe</button>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      info: [],
    };
  },
  methods: {
    getAnime() {
      axios
        .get('https://jikan1.p.rapidapi.com/top/anime/1/upcoming', {
          headers: {
            'x-rapidapi-host': 'jikan1.p.rapidapi.com',
            'x-rapidapi-key':
              '75808d9e1cmsh61fd78c7790325dp1eae09jsne63b53bc6c74',
          },
        })
        .then((response) => {
          if (response) {
            return response.data.top;
          }
        })
        .then((data) => {
          const newArr = [];
          for (const id in data) {
            newArr.push({ id: id, name: data[id].top });
          }
          this.info = newArr;
          console.log(this.info);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>
