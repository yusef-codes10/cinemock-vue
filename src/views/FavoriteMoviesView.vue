<script setup>
import MovieComponent from '@/components/MovieComponent.vue'
import { moviesStore } from '@/stores/moviesStore.js'

const myStore = moviesStore()
</script>

<template>
  <div class="movies-grid">
    <!-- <h1 class="text-9xl text-cyan-600">Favorite</h1> -->
    <MovieComponent v-for="movie in myStore.favList" :key="movie['#TITLE']" :movie="movie" />
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
