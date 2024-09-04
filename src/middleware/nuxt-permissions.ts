import { useUserStore } from '~/stores/userStore';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();

  // Ensure user data is loaded from localStorage
  if (!userStore.user && process.client) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      userStore.setUser(JSON.parse(storedUser));
    }
  }

  // Wait for the user data to load before proceeding
  await userStore.$patch();

  const requiredRoles = to.meta.roles || [];

  // Check if the user is authenticated and has the correct role
  if (!userStore.isAuthenticated || !requiredRoles.includes(userStore.role)) {
    return navigateTo('/unauthorized');  // Redirect to unauthorized page
  }
});
