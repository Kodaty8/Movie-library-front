import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/movies/list/1'
    },
    {
      path: '/movies/list',
      redirect: '/movies/list/1'
    },
    {
      path: '/movies/list/:page',
      name: 'movies',
      component: HomeView,
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
