<script setup>
const emit = defineEmits(['hide'])
// defineProps({
//   visible: {
//     type: String,
//     required: true,
//   },
// })

const triggerTheEmit = () => {
  emit('hide')
}
</script>

<template>
  <div>
    <!-- Overlay -->
    <div class="fixed inset-0 w-48 bg-black bg-opacity-50 z-40"></div>

    <!-- Sidebar -->
    <div class="fixed top-0 left-0 w-60 h-full bg-black text-white z-50 px-4 py-6">
      <h2 class="text-xl font-bold mb-4">Sidebar</h2>
      <ul class="flex flex-col gap-3">
        <li class="cursor-pointer hover:text-red-500">Home</li>
        <li class="cursor-pointer hover:text-red-500">Movies</li>
        <li class="cursor-pointer hover:text-red-500">Shows</li>
        <li class="cursor-pointer hover:text-red-500">Favorites</li>
      </ul>

      <!-- Close button -->
      <button class="mt-6 px-3 py-1 bg-red-500 rounded hover:bg-red-600" @click="triggerTheEmit">
        Close
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
