<script setup>
import MovieComponent from '@/components/MovieComponent.vue'
import { moviesStore } from '@/stores/moviesStore.js'
import { onMounted } from 'vue'

const myStore = moviesStore()

onMounted(() => {
  if (!myStore.movies.length) {
    myStore.fetchMovies()
  }
})
</script>

<template>
  <label for="fruits">Choose a filter:</label>
  <select id="fruits" name="fruit">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="cherry" selected>Cherry</option>
  </select>
  <div class="movies-grid">
    <div v-if="myStore.loading">....Loaaaaading</div>
    <MovieComponent v-for="movie in myStore.movies" :key="movie['#TITLE']" :movie="movie" />
  </div>
</template>

<style scoped>
.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  justify-items: center;
  gap: 1rem;
}
</style>
