import { useUserStore } from '~/stores/userStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  if (process.client && !userStore.user) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      userStore.setUser(JSON.parse(storedUser));
    }
  }

  // Check if user is authenticated
  if (!userStore.isAuthenticated) {
    return navigateTo('/login');
  }
});
