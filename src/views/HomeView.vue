<script setup>
import { ref } from 'vue'
import axios from 'axios'
import MovieCard from '../components/MovieCard.vue'

const movies = ref({})
const page = 1

async function fetchData(page) {

  //TODO: const file
  const url = 'http://127.0.0.1:8000/movies/list?page=' + page
  axios.get(url).then((response) => {
    movies.value = response.data.movies
  })
}

fetchData(page)
</script>

<template>
  <div>
  <h1>Popular movies :</h1>
  <main>
    <MovieCard v-for="item in movies" :movie="item" />
  </main>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.5em;
  text-align: start;
}

main {
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
