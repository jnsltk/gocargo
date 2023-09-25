import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView 
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
     
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../components/Register.vue')
    }
  ]
})

export default router
