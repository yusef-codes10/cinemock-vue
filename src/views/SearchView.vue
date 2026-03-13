<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { moviesStore } from '@/stores/moviesStore.js'

const route = useRoute()
const myStore = moviesStore()

// better way to access the query is with computed
const searchQuery = computed(() => {
  return route.query.q?.toLowerCase() || ''
})

const filterdMovies = computed(() => {
  return myStore.movies.filter((movie) => movie['#TITLE'].toLowerCase().includes(searchQuery.value))
})
</script>

<template>
  <div>
    this is the search view
    {{ filterdMovies['#TITLE'] }}
  </div>
</template>

<style scoped>
</style>
