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

  const GENRES = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  }

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
  const fetchShows = async () => {
    loading.value = true
    console.log('waiting!!!')

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    try {
      const response = await fetch(url)
      const data = await response.json()

      shows.value = data.results.map((show) => ({
        id: show.id,
        title: show.title,
        image: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
        isFavorite: false,
        overview: show.overview,
        release_date: show.release_date,
        rating: show.vote_average,
        genres: show.genre_ids.map((id) => GENRES[id]),
        cast: [],
        crew: [],
      }))

      console.log(shows.value)
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
      console.log('loaded!')
    }
  }

  const fetchMovies = async () => {
    console.log(API_KEY)
    loading.value = true
    console.log('waiting!!!')

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    try {
      const response = await fetch(url)
      const data = await response.json()

      movies.value = data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        isFavorite: false,
        overview: movie.overview,
        release_date: movie.release_date,
        rating: movie.vote_average,
        genres: movie.genre_ids.map((id) => GENRES[id]),
        cast: [],
        crew: [],
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
