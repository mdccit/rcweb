import { useUserStore } from '~/stores/userStore';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();

  if (process.client && !userStore.user) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      userStore.setUser(JSON.parse(storedUser));
    }
  }

  await userStore.$patch();

  if (!userStore.isAuthenticated) {
    return navigateTo('/login');
  }
});
