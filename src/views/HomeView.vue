<script setup>
import { ref } from 'vue'
import axios from 'axios'
import MovieCard from '../components/MovieCard.vue'

const movies = ref({})

const props = defineProps({
  page: String
})

async function fetchData(page) {
  if (isNaN(page) || page <= 0) {
    //TODO: proper redirect
    page = 1
  } else {
    page = parseInt(page)
  }

  //TODO: const file
  const url = 'http://127.0.0.1:8000/movies/list?page=' + page
  axios.get(url).then((response) => {
    movies.value = response.data.movies
  })
}

fetchData(props.page)
</script>

<template>
  <main>
    <MovieCard v-for="item in movies" :movie="item" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
