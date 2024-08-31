export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', (vueApp) => {
    const router = vueApp.config.globalProperties.$router;

    router.addRoute({
      name: 'register2-token',
      path: '/register2/:token',
      // Update the path to point to the [token].vue file
      component: () => import('~/pages/register2/[token].vue')  // Correct path to the dynamic component
    });

    // Add more routes if needed
  });
});
