<script setup>
import { ref } from 'vue'

const isSearch = ref(false)

const showSearch = () => {
  isSearch.value = !isSearch.value
}
</script>

<template>
  <nav class="flex justify-around items-center pt-6 pb-1 pr-3 pl-3 mb-8">
    <h1 class="logo"><RouterLink :to="{ name: 'Home' }">Cinemock</RouterLink></h1>
    <ul class="hidden md:inline-flex gap-4">
      <li><RouterLink :to="{ name: 'Movies' }">Moives</RouterLink></li>
      <li>Shows</li>
      <li>About</li>
    </ul>
    <div class="relative">
      <i
        class="fa-brands fa-sistrix text-red-500 mx-2 cursor-pointer text-2xl"
        @click="showSearch"
      ></i>
      <input
        class="rounded-md w-50 mx-2 px-2 absolute top-1 right-30"
        type="search"
        v-show="isSearch"
        v-model="searchQuery"
      />
      <button class="rounded-md">Click</button>
    </div>
  </nav>
</template>
