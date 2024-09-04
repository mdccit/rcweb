export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', (vueApp) => {
    const router = vueApp.config.globalProperties.$router;

    router.addRoute({
      name: 'register-step-two-token',
      path: '/register-step-two/:token',
      // Update the path to point to the [token].vue file
      component: () => import('~/pages/register-step-two/[token].vue')  // Correct path to the dynamic component
    });

    // Add more routes if needed
  });
});
