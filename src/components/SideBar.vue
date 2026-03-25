<script setup>
import { useSidebar } from '@/stores/useSideBar'

const sideStore = useSidebar()
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
          <RouterLink :to="{ name: 'Home' }" @click="sideStore.hide">Home</RouterLink>
        </li>
        <li class="cursor-pointer hover:text-red-500">
          <RouterLink :to="{ name: 'Movies' }" @click="sideStore.hide">Movies</RouterLink>
        </li>
        <li class="cursor-pointer hover:text-red-500">
          <RouterLink :to="{ name: 'Shows' }" @click="sideStore.hide">Shows</RouterLink>
        </li>
        <li class="cursor-pointer hover:text-red-500">
          <RouterLink :to="{ name: 'Favorite' }" @click="sideStore.hide">Favorites</RouterLink>
        </li>
      </ul>

      <!-- Close button -->
      <i class="fa-solid fa-xmark absolute top-5 right-5" @click="sideStore.hide"></i>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: underline;
}
</style>
