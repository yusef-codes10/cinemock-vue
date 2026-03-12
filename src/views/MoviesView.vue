<script setup>
import { moviesStore } from '@/stores/moviesStore.js'
import { onMounted } from 'vue'

const myStore = moviesStore()

onMounted(() => {
  myStore.fetchMovies()
})
</script>

<template>
  <div>
    <div class="movies" v-for="movie in myStore.movies" :key="movie.title">
      {{ movie.title }}
    </div>
  </div>
</template>

<style scoped>
</style>
