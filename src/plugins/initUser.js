import { useUserStore } from '@/stores/userStore';

export default defineNuxtPlugin(() => {
  const userStore = useUserStore();

  if (process.client) {
    userStore.initializeUser(); // This will now handle both logged-in and non-logged-in cases
  }
});
