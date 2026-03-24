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
        <li class="cursor-pointer hover:text-red-500">
          <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        </li>
        <li class="cursor-pointer hover:text-red-500">
          <RouterLink :to="{ name: 'Movies' }">Movies</RouterLink>
        </li>
        <li class="cursor-pointer hover:text-red-500">
          <RouterLink :to="{ name: 'Shows' }">Shows</RouterLink>
        </li>
        <li class="cursor-pointer hover:text-red-500">
          <RouterLink :to="{ name: 'Favorite' }">Favorites</RouterLink>
        </li>
      </ul>

      <!-- Close button -->
      <i class="fa-solid fa-xmark absolute top-5 right-5" @click="triggerTheEmit"></i>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: underline;
}
</style>
