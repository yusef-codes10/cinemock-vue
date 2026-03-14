<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { moviesStore } from '@/stores/moviesStore.js'
import MovieComponent from '@/components/MovieComponent.vue'

const route = useRoute()
const myStore = moviesStore()

// better way to access the query is with computed
const searchQuery = computed(() => {
  return route.query.q?.toLowerCase() || ''
})

const filterdMovies = computed(() => {
  return myStore.allKinds.filter((movie) =>
    movie['#TITLE'].toLowerCase().includes(searchQuery.value)
  )
})
</script>

<template>
  this is the search view
  <div class="grid" v-if="filterdMovies.length > 0">
    <MovieComponent v-for="movie in filterdMovies" :key="movie" :movie="movie" />
  </div>
  <div v-else>
    <h1>Not Found</h1>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  gap: 1rem;
}
</style>
