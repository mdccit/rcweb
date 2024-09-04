// plugins/initUser.js
import { useUserStore } from '@/stores/userStore';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const userStore = useUserStore(nuxtApp.$pinia);
    userStore.initializeUser();  // Initialize the user data from localStorage
  }
});
