<script setup>
import NavBar from './components/NavBar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="hero-section">
    <NavBar />
    <div
      v-if="route.name === 'Home'"
      class="hero-section bg-cover bg-center min-h-screen"
      style="background-image: url('/images/home-bg.jpg')"
    >
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
