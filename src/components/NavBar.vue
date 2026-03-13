<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isSearch = ref(false)
const searchQuery = ref('')

const showSearch = () => {
  isSearch.value = !isSearch.value
}

// the ruter for the search

const route = useRouter()

const submitSearch = () => {
  if (!searchQuery.value) return
  // here we push to the router of search
  route.push({
    name: 'Search',
    query: { q: searchQuery.value },
  })
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
        @keydown.enter="submitSearch"
      />
      <button class="rounded-md">Click</button>
    </div>
  </nav>
</template>

<!-- TODO: Now we should get the query push it to the route and get it in the search view -->
