<script setup>
import { inject, ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  id: String
})

const movie = ref({})
const baseUrl = inject('backendUrl') + '/movies/'

async function fetchMovie() {
  axios.get(baseUrl + props.id).then((response) => {
    movie.value = response.data
  })
}
fetchMovie()
</script>

<template>
  <main>
    <img :src="movie.poster" alt="poster" />
    <div class="details">
      <div class="line">
        <h1>{{ movie.title }}</h1>
        {{ movie.release }} ({{ movie.lang }})
      </div>
      <div class="line">
        <ul>
          <li v-for="genre in movie.genres">{{ genre }}</li>
        </ul>
        {{ movie.rating }}/10 ({{ movie.rating_count }})
      </div>
      <div class="line">
        {{ movie.synopsis }}
      </div>
    </div>
  </main>
</template>

<style scoped>
.line {
  margin-bottom: 1em;
}

ul {
  padding: 0;
  display: inline;
}

li {
  margin-right: 1em;
  padding: 0.5em;
  display: inline;
  border-radius: 5px;
  background-color: var(--color-text);
  color: var(--color-background);
}

.details {
  margin-left: 3em;
}

h1 {
  font-size: 2.5em;
  text-align: start;
  display: inline;
}

main {
  margin-top: 1em;
  display: flex;
  align-items: start;
  justify-content: center;
}
</style>
