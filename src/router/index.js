import FavoriteMoviesView from '@/views/FavoriteMoviesView.vue'
import HomeView from '@/views/HomeView.vue'
import MoviesView from '@/views/MoviesView.vue'
import SearchView from '@/views/SearchView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/movies',
    name: 'Movies',
    component: MoviesView,
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView,
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: FavoriteMoviesView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
