import { useUserStore } from '@/stores/userStore';

import HomePage from '@/pages/index.vue';
import AdminPage from '@/pages/admin/dashboard.vue';
import DashboardPage from '@/pages/admin/dashboard.vue';
import LoginPage from '@/pages/login.vue';
import SchoolPage from '@/pages/admin/schools.vue';
import UnauthorizedPage from '@/pages/unauthorized.vue';

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

  // Add global navigation guard for role-based access
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore(); // Access the user store

    // If the route requires authentication
    if (to.meta.requiresAuth) {
      // Check if the user is logged in
      if (!userStore.isLoggedIn) {
        return next({ name: 'login' }); // Redirect to login if not logged in
      }

      // Check if the route has role-based restrictions
      if (to.meta.roles && !to.meta.roles.includes(userStore.role)) {
        return next({ name: 'unauthorized' }); // Redirect to unauthorized page if role mismatch
      }
    }

    // Proceed to the next route
    next();
  });

  // Define the routes
  const routes = [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage,
      meta: {
        requiresAuth: true, // Require authentication
        roles: ['admin'], // Only admin can access this route
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
      meta: {
        requiresAuth: true, // Require authentication
        roles: ['admin'], // Only admin can access this route
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: UnauthorizedPage, // Display unauthorized access message
    },
    {
      path: '/admin/schools',
      name: 'schools',
      component: SchoolPage,
      meta: {
        requiresAuth: true, // Require authentication
        roles: ['admin'], // Admins can access this route
      },
    },
  ];

  // Add the routes dynamically
  routes.forEach((route) => {
    router.addRoute(route);
  });
});
