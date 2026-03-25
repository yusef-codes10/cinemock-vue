<script setup>
import MovieComponent from '@/components/MovieComponent.vue'
import { moviesStore } from '@/stores/moviesStore.js'
import { onMounted, ref, computed } from 'vue'

const myStore = moviesStore()

onMounted(() => {
  if (!myStore.movies.length) {
    myStore.fetchMovies()
  }
})
const selectedGenre = ref(null)
const selectedGenreName = ref(null)

const showFilter = (event) => {
  // event.target.value is the selected option's value (the id)
  const genreId = Number(event.target.value)
  const genreName = myStore.GENRES[genreId]
  console.log('The filter is:', genreName)
  selectedGenre.value = genreId
  selectedGenreName.value = genreName
  console.log('this is the filtered list: \n', filteredMovies.value)
}

const filteredMovies = computed(() => {
  return myStore.movies.filter((m) => m.genres.includes(selectedGenreName.value))
})

console.log('this is the filtered list: \n', filteredMovies.value)
</script>

<template>
  <div class="my-4 mx-4">
    <label for="g">Choose a filter:</label>

    <select id="g" name="genre" @change="showFilter">
      <option
        class="text-white border-2 bg-black"
        v-for="[id, name] in Object.entries(myStore.GENRES)"
        :key="id"
        :value="id"
      >
        {{ name }}
      </option>
    </select>
  </div>
  <div class="movies-grid" v-if="filteredMovies.length === 0">
    <div v-if="myStore.loading">....Loaaaaading</div>
    <MovieComponent v-for="movie in myStore.movies" :key="movie['#TITLE']" :movie="movie" />
  </div>
  <div class="movies-grid" v-else>
    <div v-if="myStore.loading">....Loaaaaading</div>
    <MovieComponent v-for="movie in filteredMovies" :key="movie['#TITLE']" :movie="movie" />
  </div>
</template>

<style scoped>
.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  justify-items: center;
  gap: 1rem;
}
</style>
