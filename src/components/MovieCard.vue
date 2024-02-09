<script setup>
const props = defineProps({
  movie: Object
})
function url() {
  return '/movies/' + props.movie.id
}
</script>

<template>
  <RouterLink
    :to="url()"
    class="card"
    :style="{ 'background-image': 'url(' + movie.backdrop + ')' }"
  >
    <div class="banner">
      <div class="info">
        {{ movie.title }}<span class="small"> ({{ movie.lang }})</span>
      </div>
      <div class="rating">{{ movie.rating }}<span class="small">/10</span></div>
    </div>
  </RouterLink>
</template>

<style scoped>
.small {
  color: var(--vt-c-text-dark-2);
  font-size: 0.7em;
}

.rating {
  flex-shrink: 0;
  padding-right: 0.6em;
  padding-left: 0.3em;
}

.info {
  padding-left: 0.6em;
  padding-right: 0.3em;
}

.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000a;
  min-height: 25%;
  width: 100%;
  color: var(--vt-c-text-dark-1);
  padding-top: 0.1em;
  padding-bottom: 0.1em;
}

.card {
  height: 8.5em;
  width: 15.1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 1em;
  background-size: contain;
  background-repeat: no-repeat;
}

.card:hover {
  margin: 0;
  height: 9.7em;
  width: 17.1em;
}
</style>
