import { useUserStore } from '~/stores/userStore';
import { usePermissions, useRoles } from 'nuxt-permissions';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();

  // Load the user from localStorage if not already loaded
  if (!userStore.user && process.client) {
    userStore.loadUserFromStorage();
  }

  // Ensure roles and permissions are set
  const userPermissions = usePermissions();
  const userRoles = useRoles();

  if (userStore.permissions.length && userStore.roles.length) {
    userPermissions.value = userStore.permissions;
    userRoles.value = userStore.roles;
  }

  // Check if user has the required roles/permissions for the route
  const requiredRoles = to.meta.roles || [];
  const requiredPermissions = to.meta.permissions || [];

  if (!requiredRoles.some(role => userRoles.value.includes(role))) {
    return navigateTo('/unauthorized');
  }

  if (!requiredPermissions.some(permission => userPermissions.value.includes(permission))) {
    return navigateTo('/unauthorized');
  }
});
