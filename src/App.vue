<script setup>
import NavBar from './components/NavBar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="flex flex-col h-screen">
    <div
      v-if="route.name === 'Home'"
      class="flex-1 bg-cover bg-center"
      style="
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url(/images/hero.jpg);
      "
    >
      <NavBar />
      <RouterView />
    </div>
    <div v-else class="flex-1">
      <NavBar />

      <RouterView />
    </div>
  </div>
</template>
