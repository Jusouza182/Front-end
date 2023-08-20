import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home/HomePage.vue"
import About from "../views/About/AboutPage.vue"
import Talents from "../views/Talents/TalentsPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'Home',
      component: Home
    },
    {
      path:'/sobre',
      name: 'Sobre',
      component: About
    },
    {
      path:'/talentos',
      name: 'Talentos',
      component: Talents
    }
  ]
})

export default router
