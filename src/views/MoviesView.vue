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
    <h1 class="text-blue-300">Movies</h1>
  </div>
</template>

<style scoped>
</style>
