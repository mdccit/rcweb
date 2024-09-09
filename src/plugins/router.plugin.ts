import { defineNuxtPlugin } from '#app';



export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router; // Use the existing router

  // Add dynamic route for token-based registration
  nuxtApp.hook('app:created', (vueApp) => {
    router.addRoute({
      name: 'register-step-two-token',
      path: '/register-step-two/:token',
      component: () => import('~/pages/register-step-two/[token].vue')  // Correct path to the dynamic component
    });

    // router.addRoute({
    //   name: 'post',
    //   path: '/post/:post_id',
    //   component: () => import('~/pages/user/post/[post_id].vue'), // Ensure the correct path
    // });
    
    router.addRoute({
      name: 'app',
      path: '/app',
      component: () => import('~/pages/app.vue') // Ensure this is the correct path
    });

  });

});
