import { ref } from 'vue'
import { defineStore } from 'pinia'

export const moviesStore = defineStore('counter', () => {
  // * state
  const movies = ref([])
  const loading = ref(false)

  // * actions
  const fetchAllMovies = async () => {
    loading.value = true

    try {
      const queries = ['the', 'woman', 'war']

      const responses = await Promise.all(
        queries.map((q) => fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${q}`)),
      )

      const json = await Promise.all(responses.map((r) => r.json()))

      movies.value = json.flatMap((data) => data.description)
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }
  const fetchMovies = async () => {
    loading.value = true
    console.log('waiing!!!')

    try {
      const response = await fetch('https://imdb.iamidiotareyoutoo.com/search?q=spider')
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
    fetchAllMovies,
  }
})

// TODO: lazy loading and optimization for the api
