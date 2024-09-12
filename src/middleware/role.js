import { useUserStore } from '~/stores/userStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  // Get the required roles from the meta
  const requiredRoles = to.meta.requiredRole;

  // Check if requiredRoles is an array. If not, make it an array.
  const rolesArray = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];

  // Get the user's role from the store
  const userRole = userStore.getRole();

  // Check if the user's role is in the required roles array
  if (!rolesArray.includes(userRole)) {
    // Redirect to an unauthorized page if the user doesn't have the correct role
    return navigateTo('/unauthorized');
  }
});
