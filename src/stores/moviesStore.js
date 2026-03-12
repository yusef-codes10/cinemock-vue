import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // * state
  const movies = ref([])
  const loading = ref(false)

  return { movies, loading }
})
