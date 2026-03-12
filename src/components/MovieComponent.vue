<script setup>
defineProps({
  movie: Object,
})
</script>

<template>
  <div class="movie-card w-48 cursor-pointer">
    <div class="poster">
      <img
        :src="movie['#IMG_POSTER']"
        :alt="movie['#TITLE']"
        class="w-full h-72 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div class="title mt-2 text-white text-sm font-semibold text-center">
      {{ movie['#TITLE'] }}
    </div>
  </div>
</template>

<style scoped>
</style>
