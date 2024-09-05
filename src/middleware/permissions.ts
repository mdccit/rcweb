import { useUserStore } from '~/stores/userStore';
export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  // Initialize user from localStorage if not already done
  if (!userStore.user && process.client) {
    userStore.initializeUser();
  }

  // Ensure user exists before accessing roles
  if (!userStore.user) {
    console.log('User is not authenticated. Redirecting to login.');
    return navigateTo('/login'); // Redirect to login if the user is null
  }

  // Access the user's roles from the store
  const userRoles = userStore.roles || [];

  // Check if user has the required roles for the route
  const requiredRoles = to.meta.roles || [];

  // Debug logging
  console.log('User roles from store:', userRoles);
  console.log('Required roles for the route:', requiredRoles);

  // If no roles are required, allow access
  if (requiredRoles.length === 0) {
    console.log('No roles required, allowing access.');
    return;
  }

  // If the user does not have the required roles, redirect to unauthorized page
  const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));
  console.log('Does user have required role?', hasRequiredRole);

  if (!hasRequiredRole) {
    console.log('User does not have the required roles. Redirecting to unauthorized.');
    return navigateTo('/unauthorized');
  }
});
