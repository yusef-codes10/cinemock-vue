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
    <div v-if="myStore.loading">....Loaaaaading</div>
    <div class="text-4xl text-red-800" v-for="movie in myStore.movies" :key="movie.title">
      {{ movie['#TITLE'] }}
    </div>
  </div>
</template>

<style scoped>
</style>
