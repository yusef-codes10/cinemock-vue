import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const moviesStore = defineStore('counter', () => {
  // * state
  const movies = ref([])
  const loading = ref(false)
  // const favoriteMovies = ref([])
  // const search = ref('')

  // * actions
  const fetchAllMovies = async () => {
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
    return movies.value.filter((movie) => movie.isFavorite === true)
  })

  return {
    movies,
    loading,
    // favoriteMovies,

    fetchMovies,
    fetchAllMovies,
    // addToFavList,

    // allMovies,
    favList,
  }
})

// TODO: lazy loading and optimization for the api
