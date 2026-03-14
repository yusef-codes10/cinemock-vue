<script setup>
import { defineProps, computed } from 'vue'
import { moviesStore } from '@/stores/moviesStore.js'

const { slug } = defineProps({
  slug: {
    type: String,
    required: true,
  },
})
console.log(slug)
//* we have to find the movie from the pinia store by the slug (title in this case)
const myStore = moviesStore()
const movie = computed(() => {
  return myStore.movies.filter((movie) => movie['#TITLE'] === slug)
})
console.log(movie)
</script>

<template>
  <div>
    <h1 class="text-green-300 text-xl">{{ slug }}</h1>
    we should render the movie results here
  </div>
</template>

<style scoped>
</style>
