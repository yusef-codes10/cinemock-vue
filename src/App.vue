<script setup>
import NavBar from './components/NavBar.vue'
import { useRoute } from 'vue-router'
import SideBar from './components/SideBar.vue'
import { useSidebar } from './stores/useSideBar'

const route = useRoute()

// define the emit handlers
// hide

const sideStore = useSidebar()
</script>

<template>
  <div class="flex flex-col h-screen">
    <div v-if="route.name === 'Home'" class="flex-1 bg-cover bg-center hero-bg">
      <NavBar />
      <SideBar v-show="sideStore.isVisible" />
      <RouterView />
    </div>
    <div v-else class="flex-1">
      <NavBar />
      <SideBar v-show="sideStore.isVisible" />

      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/hero.jpg);
}
</style>

<!-- TODO: fix the conditional rendering, always render from once source (computed + all movies) + show not available when the genre is not included-->
<!-- TODO: use a global search filed to search a movie on demand -->
