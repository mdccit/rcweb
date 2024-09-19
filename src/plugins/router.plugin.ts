import { defineNuxtPlugin } from '#app';



export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router; // Use the existing router

  // Add dynamic route for token-based registration
  nuxtApp.hook('app:created', (vueApp) => {
    router.addRoute({
      name: 'register-step-two-token',
      path: '/register-step-two/:token',
      meta: {
        layout: 'outer' 
      },
      component: () => import('~/pages/register-step-two/[token].vue')  // Correct path to the dynamic component
    });
  });

  // New route for profile page with dynamic slug
  router.addRoute({
    name: 'profile-slug', // Name the route
    path: '/app/profile/:slug', // Dynamic route for slug
    meta: {
      layout: 'user' // You can specify the layout if necessary
    },
    component: () => import('~/pages/app/profile/[slug].vue') // Dynamic import for the profile page
  });

});
