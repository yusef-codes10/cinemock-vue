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
    } catch (error) {
    } finally {
      // always happens regardless of try/catch blocks
    }
  }

  return { movies, loading }
})
