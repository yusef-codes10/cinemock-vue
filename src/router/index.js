import HomeView from '@/views/HomeView.vue'
import MoviesView from '@/views/MoviesView.vue'
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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
