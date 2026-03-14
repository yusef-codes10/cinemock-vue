<script setup>
const { slug } = defineProps({
  slug: {
    type: String,
    required: true,
  },
})
console.log(slug)
</script>

<template>
  <div>
    <h1 class="text-green-300 text-xl">{{ slug }}</h1>
    we should render the movie results here
  </div>
</template>

<style scoped>
</style>
