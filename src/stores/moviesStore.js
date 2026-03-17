import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const moviesStore = defineStore('counter', () => {
  // * state
  const movies = ref([])
  const shows = ref([])
  const loading = ref(false)
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  // const favoriteMovies = ref([])
  // const search = ref('')

  // * actions
  const fetchAllMovies = async () => {
    // console.log(API_KEY)
    loading.value = true

    try {
      const queries = ['the', 'woman', 'war', 'spider', 'girl', 'love']

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
    console.log('waiting!!!')

    try {
      const response = await fetch('https://imdb.iamidiotareyoutoo.com/search?q=spider')
      const data = await response.json()

      movies.value = data.description.map((movie) => ({
        ...movie,
        isFavorite: false,
      }))

      console.log(movies.value)
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
      console.log('loaded!')
    }
  }

  const fetchShows = async () => {
    console.log(API_KEY)
    loading.value = true
    console.log('waiting!!!')

    const url = 'https://imdb.iamidiotareyoutoo.com/search?q=hannah+montana'
    try {
      const response = await fetch(url)
      const data = await response.json()

      shows.value = data.description.map((shows) => ({
        ...shows,
        isFavorite: false,
      }))

      console.log(shows.value)
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
      console.log('loaded!')
    }
  }

  // const addToFavList = (movie) => {
  //   if (favoriteMovies.value.includes(movie)) {
  //     console.log('ALREAY EXISTS')
  //     return
  //   }
  //   favoriteMovies.value.push(movie)
  // }

  // * getters
  // const allMovies = computed(() => {
  //   return movies.value.filter((movie) => movie.toLowerCase().includes(search.value.toLowerCase()))
  // })
  const favList = computed(() => {
    return allKinds.value.filter((movie) => movie.isFavorite === true)
  })

  const allKinds = computed(() => {
    const all = [...movies.value, ...shows.value]
    return all
  })

  return {
    movies,
    shows,
    loading,
    // favoriteMovies,

    fetchMovies,
    fetchAllMovies,
    fetchShows,
    // addToFavList,

    // allMovies,
    favList,
    allKinds,
  }
})

// TODO: lazy loading and optimization for the api

// TODO: complete experementing with a different api and use allPromises

// TODO: add a sidebar for mobile and a better home section
