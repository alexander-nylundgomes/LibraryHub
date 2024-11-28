import Book from '@/views/Book.vue'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/book/:id',
      name: 'book',
      component: Book,
    },
    {
      path: '/search/:query',
      name: 'search',
      component: Search,
    },
  ],
})

export default router
