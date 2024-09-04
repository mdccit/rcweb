import Cookies from 'js-cookie';
import { useUserStore } from '~/stores/userStore';
import { useNuxtApp, navigateTo } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const sessionCookie = Cookies.get('session');
    
    if (!sessionCookie) {
      // Handle session expiry and logout
      const nuxtApp = useNuxtApp();
      nuxtApp.$authService.logout();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigateTo('/login');
    }
  }
});
