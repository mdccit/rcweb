
export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router; // Use the existing router

  // Add dynamic route for token-based registration
  nuxtApp.hook('app:created', (vueApp) => {
    router.addRoute({
      name: 'register-step-two-token',
      path: '/register-step-two/:token',
      component: () => import('~/pages/register-step-two/[token].vue')  // Correct path to the dynamic component
    });
  });

});