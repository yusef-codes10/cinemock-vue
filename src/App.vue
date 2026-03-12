<script setup>
import NavBar from './components/NavBar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="h-screen">
    <NavBar />
    <div
      v-if="route.name === 'Home'"
      class="hero-section bg-cover bg-center"
      style="
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url(/images/hero.jpg);
      "
    >
      <RouterView />
    </div>
    <div v-else>
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
