<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// better way to access the query is with computed
const searchQuery = computed(() => {
  return route.query.q?.toLowerCase() || ''
})
</script>

<template>
  <div>this is the search view</div>
</template>

<style scoped>
</style>
