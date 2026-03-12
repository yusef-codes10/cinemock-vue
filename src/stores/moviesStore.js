import { ref } from 'vue'
import { defineStore } from 'pinia'

export const moviesStore = defineStore('counter', () => {
  // * state
  const movies = ref([])
  const loading = ref(false)

  // * actions
  const fetchMovies = async () => {
    loading.value = true
    console.log('waiing!!!')

    try {
      const response = await fetch('https://imdb.iamidiotareyoutoo.com/search?q=the')
      const data = await response.json()
      movies.value = data.description
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      // always happens regardless of try/catch blocks
      loading.value = false
      console.log('loaded!')
    }
  }

  return {
    movies,
    loading,

    fetchMovies,
  }
})
