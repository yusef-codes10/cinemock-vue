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
  return myStore.movies.find((m) => m['#TITLE'] === slug)
})
console.log(movie)
</script>

<template>
  <div class="flex gap-4">
    <div class="poster bg-amber-700 w-50">
      <img :src="movie['#POSTER']" :alt="movie['#TITLE']" />
    </div>
    <div class="details bg-blue-400 flex-1">no</div>
  </div>
</template>

<style scoped>
</style>
