<script setup>
import NavBar from './components/NavBar.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import SideBar from './components/SideBar.vue'

const route = useRoute()

const isVisible = ref(false)

// define the emit handlers
// hide
const hideSideBar = () => {}
</script>

<template>
  <div class="flex flex-col h-screen">
    <div v-if="route.name === 'Home'" class="flex-1 bg-cover bg-center hero-bg">
      <NavBar />
      <SideBar :visible="isVisible" />
      <RouterView />
    </div>
    <div v-else class="flex-1">
      <NavBar />

      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/hero.jpg);
}
</style>
