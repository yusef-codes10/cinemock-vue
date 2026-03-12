<script setup>
import NavBar from './components/NavBar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="flex flex-col h-screen">
    <NavBar />

    <div v-if="route.name === 'Home'" class="flex-1 flex items-center justify-center bg-cover bg-center hero-bg">
      <RouterView />
    </div>

    <div v-else class="flex-1">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/hero.jpg);
}
</style>
