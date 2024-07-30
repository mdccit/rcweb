import { defineNuxtPlugin } from '#app'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/pages/IndexPage.vue'
import Login from '~/pages/LoginPage.vue'

export default defineNuxtPlugin((nuxtApp) => {
  const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  nuxtApp.vueApp.use(router)
})
