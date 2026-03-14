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
  return myStore.allKinds.find((m) => m['#TITLE'] === slug)
})
console.log(movie)
</script>

<template>
  <div class="flex gap-4">
    <div class="poster w-50">
      <img :src="movie['#IMG_POSTER']" :alt="movie['#TITLE']" />
    </div>
    <div class="details flex-1 flex flex-col px-2 py-1 gap-1">
      <h1 class="text-center text-2xl md:text-4xl my-3">{{ movie['#TITLE'] }}</h1>
      <h2>Actors:</h2>
      <p>{{ movie['#ACTORS'] }}</p>
      <h1>Relase year:</h1>
      <p>{{ movie['#YEAR'] }}</p>
      <div class="relative">
        <div class="imdb inline bg-amber-300 text-sm px-2 py-1 text-black font-extrabold">IMDB</div>
        <div class="inline">{{ movie['#RANK'] }}</div>
      </div>
      <div>
        Check more details on the IMDB page:
        <a :href="movie['#IMDB_URL']" target="_blank" rel="noopener noreferrer">
          {{ movie['#IMDB_URL'] }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
