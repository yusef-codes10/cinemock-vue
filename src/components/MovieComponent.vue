<script setup>
// import { ref } from 'vue'
import { moviesStore } from '@/stores/moviesStore.js'

defineProps({
  movie: Object,
})

// const isFav = ref(false)
const myStore = moviesStore()

const addToFavorite = (movie) => {
  // isFav.value = !isFav.value
  movie.isFavorite = !movie.isFavorite
  // myStore.addToFavList(movie)
  console.log(myStore.favoriteMovies)
}
</script>

<template>
  <div class="movie-card w-48 cursor-pointer">
    <div class="poster relative">
      <img
        :src="movie.poster_path"
        :alt="movie.title"
        class="w-full h-72 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <i
        @click="addToFavorite(movie)"
        class="absolute text-3xl top-1 right-0 hover:scale-105 transition-transform duration-300"
        :class="{
          'fa-solid fa-star text-amber-300': movie.isFavorite,
          'fa-regular fa-star': !movie.isFavorite,
        }"
      ></i>
    </div>

    <div class="title mt-2 text-white text-sm font-semibold text-center">
      <RouterLink :to="{ name: 'Details', params: { slug: movie.title } }">
        {{ movie.title }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
</style>
