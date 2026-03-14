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
    <h1 class="text-green-300 text-9xl">Details</h1>
  </div>
</template>

<style scoped>
</style>
