<script setup>
import MovieComponent from '@/components/MovieComponent.vue'
import { moviesStore } from '@/stores/moviesStore.js'
import { onMounted } from 'vue'

const myStore = moviesStore()

onMounted(() => {
  if (!myStore.shows.length) {
    myStore.fetchShows()
  }
})
</script>

<template>
  <div class="shows-grid">
    <div v-if="myStore.loading">....Loaaaaading</div>
    <MovieComponent v-for="show in myStore.shows" :key="show['#TITLE']" :movie="show" />
  </div>
  <div v-for="show in myStore.shows" :key="show['#TITLE']" :movie="show">
    <h1 class="text-red-500">{{ show.isFavorite }}</h1>
  </div>
</template>

<style scoped>
.shows-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  gap: 1rem;
}
</style>
