<script setup>
import { computed, onMounted } from 'vue'
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
  return myStore.allKinds.find((m) => m.title === slug)
})
console.log(movie)

const cast = onMounted(async () => {
  // here we fetch the movie cast
  myStore.fetchCast(movie.value.id)
})
</script>

<template>
  <div class="flex gap-4 flex-col md:flex-row">
    <div class="poster w-full md:w-64 aspect-2/3 overflow-hidden rounded-lg">
      <img :src="movie.image" :alt="movie.title" class="w-full h-full object-cover" />
    </div>
    <div class="details flex-1 flex flex-col px-2 py-1 gap-1">
      <h1 class="text-center text-2xl md:text-4xl my-3">{{ movie.title }}</h1>
      <h2>Actors:</h2>
      <p>{{ cast }}</p>
      <p>{{ movie.overview }}</p>
      <h1>Relase date:</h1>
      <p>{{ movie.release_date }}</p>
      <h2>Genre:</h2>
      <p v-for="genre in movie.genres" :key="genre" class="text-red-600">
        {{ genre }}
      </p>
      <div class="relative">
        <div class="imdb inline bg-amber-300 text-sm px-2 py-1 text-black font-extrabold">IMDB</div>
        <div class="inline">{{ movie.rating }}</div>
      </div>
      <div>
        Check more details on the IMDB page:
        <a :href="movie.title" target="_blank" rel="noopener noreferrer">
          {{ movie.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
