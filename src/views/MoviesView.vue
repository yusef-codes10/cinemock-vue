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
  <div>
    <div v-if="myStore.loading">....Loaaaaading</div>
    <MovieComponent v-for="movie in myStore.movies" :key="movie.title" :movie="movie" />
  </div>
</template>

<style scoped>
</style>
