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
</template>

<style scoped>
.shows-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  justify-content: center;
  gap: 1rem;
}
</style>
