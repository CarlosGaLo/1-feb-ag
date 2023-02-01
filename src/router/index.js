import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ForSale from '@/views/ForSale.vue'
import ForRent from '@/views/ForRent.vue'
import OurServices from '@/views/OurServices.vue'
import OurTeam from '@/views/OurTeam.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/for-sale',
      name: 'forSale',
      component: ForSale
    },
    {
      path: '/for-rent',
      name: 'forRent',
      component: ForRent
    },
    {
      path: '/our-services',
      name: 'ourServices',
      component: OurServices
    },
    {
      path: '/our-team',
      name: 'ourTeam',
      component: OurTeam
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
