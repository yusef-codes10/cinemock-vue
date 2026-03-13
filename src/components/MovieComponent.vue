<script setup>
import { ref } from 'vue'
import { moviesStore } from '@/stores/moviesStore.js'

defineProps({
  movie: Object,
})

const isFav = ref(false)
const myStore = moviesStore()

const addToFavorite = () => {
  isFav.value = !isFav.value
  // myStore.addToFavList(movie)
  console.log(myStore.favoriteMovies)
}
</script>

<template>
  <div class="movie-card w-48 cursor-pointer">
    <div class="poster relative">
      <img
        :src="movie['#IMG_POSTER']"
        :alt="movie['#TITLE']"
        class="w-full h-72 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <i
        @click="addToFavorite"
        class="absolute text-3xl top-1 right-0 hover:scale-105 transition-transform duration-300"
        :class="{ 'fa-solid fa-star text-amber-300': isFav, 'fa-regular fa-star': !isFav }"
      ></i>
    </div>

    <div class="title mt-2 text-white text-sm font-semibold text-center">
      {{ movie['#TITLE'] }}
    </div>
  </div>
</template>

<style scoped>
</style>
