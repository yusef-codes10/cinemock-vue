import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // * state
  const movies = ref([])
  const loading = ref(false)

  // * actions
  const fetchMovies = async () => {
    loading.value = true

    try {
      const response = await fetch('https://imdb.iamidiotareyoutoo.com/search?q=the')
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      // always happens regardless of try/catch blocks
      loading.value = false
    }
  }

  return {
    movies,
    loading,

    fetchMovies,
  }
})
