import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'
import ConnectionView from '../views/ConnectionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/movies/list'
    },
    {
      path: '/movies/list',
      name: 'movies',
      component: HomeView
    },
    {
      path: '/movies/:id',
      name: 'movie',
      component: MovieView,
      props: true
    },
    {
      path: '/users/:action',
      name: 'connection',
      component: ConnectionView,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
