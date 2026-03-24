<script setup>
const emit = defineEmits(['hide'])

const triggerTheEmit = () => {
  emit('hide')
}
</script>

<template>
  <div class="w-60 bg-amber-600 px-4 py-2">
    side bar
    <button @click="triggerTheEmit">Emit/hide</button>
  </div>
</template>

<style scoped>
</style>
