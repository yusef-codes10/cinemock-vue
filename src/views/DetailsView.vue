<script setup>
import { defineProps, computed } from 'vue'
const { slug } = defineProps({
  slug: {
    type: String,
    required: true,
  },
})
console.log(slug)
//* we have to find the movie from the pinia store by the slug (title in this case)
</script>

<template>
  <div>
    <h1 class="text-green-300 text-xl">{{ slug }}</h1>
    we should render the movie results here
  </div>
</template>

<style scoped>
</style>
