import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user?.token,
    role: (state) => state.user?.role || 'guest',
    token: (state) => state.user?.token || '',
  },
  actions: {
    setUser(user) {
      this.user = user;
      if (process.client) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    },
    clearUser() {
      this.user = null;
      if (process.client) {
        localStorage.removeItem('user');
      }
      const router = useRouter();
      router.push('/');
    },
    initializeUser() {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      }
    },
  },
});

