import { useUserStore } from '~/stores/userStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  // Get the required roles from the meta
  const requiredRoles = to.meta.requiredRole;

  // Check if requiredRoles is an array. If not, make it an array.
  const rolesArray = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];

  // Get the user's role from the store
  const userRole = userStore.getRole();

    // If the user's role is not defined yet (e.g., during async fetching), avoid redirecting right away
    if (!userRole) {
      console.warn('User role is not defined yet. Avoiding redirection.');
      return;
    }

  // Check if the user's role is in the required roles array
  if (!rolesArray.includes(userRole)) {
    // Redirect to an unauthorized page if the user doesn't have the correct role
    return navigateTo('/unauthorized');
  }
});
