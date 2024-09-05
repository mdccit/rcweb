import { useUserStore } from '~/stores/userStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  // Load the user from localStorage if not already loaded
  if (!userStore.user && process.client) {
    userStore.loadUserFromStorage();
  }

  // Access the user's roles and permissions from the store
  const userRoles = userStore.roles;

  // Check if user has the required roles for the route
  const requiredRoles = to.meta.roles || [];

  // If no roles are required, allow access
  if (requiredRoles.length === 0) return;

  // If the user does not have the required roles, redirect to unauthorized page
  if (!requiredRoles.some(role => userRoles.includes(role))) {
    return navigateTo('/unauthorized');
  }
});
