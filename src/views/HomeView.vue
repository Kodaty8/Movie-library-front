<script setup>
import { ref } from 'vue'
import axios from 'axios'
import MovieCard from '../components/MovieCard.vue'

const movies = ref({})
const currentPage = ref(1)
const pageNb = ref(1)

async function fetchData(page) {
  //TODO: const file
  const url = 'http://127.0.0.1:8000/movies/list?page=' + page
  axios.get(url).then((response) => {
    movies.value = response.data.movies
    currentPage.value = response.data.page
    pageNb.value = response.data.pages_nb
  })
}

fetchData(1)
</script>

<template>
  <div>
    <h1>Popular movies :</h1>
    <main>
      <MovieCard v-for="item in movies" :movie="item" />
    </main>
  </div>
  <div class="pagination">
    page
    <nav>
      <span v-if="currentPage > 2" class="link" @click="fetchData(1)">{{ 1 }}</span>
      <span v-if="currentPage > 1" class="link" @click="fetchData(currentPage - 1)">{{
        currentPage - 1
      }}</span>
      <span>{{ currentPage }}</span>
      <span v-if="currentPage < pageNb" class="link" @click="fetchData(currentPage + 1)">{{
        currentPage + 1
      }}</span>
      <span v-if="currentPage < pageNb - 1" class="link" @click="fetchData(pageNb)">{{
        pageNb
      }}</span>
    </nav>
  </div>
</template>

<style scoped>
span {
  margin: 0.2em;
}

.link {
  text-decoration: underline;
  cursor: pointer;
  color: var(--green);
}

nav {
  display: flex;
  justify-content: center;
}

.pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
