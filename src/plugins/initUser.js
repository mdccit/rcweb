
import { useUserStore } from '@/stores/userStore';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const userStore = useUserStore(nuxtApp.$pinia);
    userStore.initializeUser();
    const token = localStorage.getItem('token');  // Fetch the token from local storage
    if (token) {
     
    }
  }
});
