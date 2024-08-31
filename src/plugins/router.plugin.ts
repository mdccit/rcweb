export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', (vueApp) => {
    const router = vueApp.config.globalProperties.$router

    router.addRoute({
      name: 'register2-token',
      path: '/register2/:token',
      component: () => import('~/pages/register2.vue')
    })

    // Add more routes if needed
  })
})
