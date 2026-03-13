<script setup>
defineProps({
  movie: Object,
})
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
        class="fa-regular fa-star absolute text-3xl top-1 right-0 hover:scale-105 transition-transform duration-300"
      ></i>
    </div>

    <div class="title mt-2 text-white text-sm font-semibold text-center">
      {{ movie['#TITLE'] }}
    </div>
  </div>
</template>

<style scoped>
</style>
