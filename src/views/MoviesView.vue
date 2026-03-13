<script setup>
import MovieComponent from '@/components/MovieComponent.vue'
import { moviesStore } from '@/stores/moviesStore.js'
import { onMounted } from 'vue'

const myStore = moviesStore()

onMounted(() => {
  myStore.fetchMovies()
})
</script>

<template>
  <div class="movies-grid">
    <div v-if="myStore.loading">....Loaaaaading</div>
    <MovieComponent v-for="movie in myStore.movies" :key="movie['#TITLE']" :movie="movie" />
  </div>
  <div v-for="movie in myStore.movies" :key="movie['#TITLE']" :movie="movie">
    <h1 class="text-red-500">{{ movie.isFavorite }}</h1>
  </div>
</template>

<style scoped>
.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  gap: 1rem;
}
</style>
