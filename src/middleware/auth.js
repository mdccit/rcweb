import { useUserStore } from '~/stores/userStore';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();

  // Load the user from localStorage if not already loaded
  if (!userStore.user && process.client) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      userStore.setUser(JSON.parse(storedUser));
    }
  }

  // Wait for the user data to load before checking authentication status
  await userStore.$patch();

  // If the user is not authenticated, redirect to login page
  if (!userStore.isAuthenticated) {
    console.log(' User not authenticatdd');
    return navigateTo('/login');
  }
});
