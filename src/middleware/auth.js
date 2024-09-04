import { useUserStore } from '@/stores/userStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  if (to.meta.roles && !to.meta.roles.includes(userStore.role)) {
    return navigateTo('/unauthorized');
  }
});
