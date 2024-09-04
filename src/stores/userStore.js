// stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null,
    user: null,
    user_role: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,  // Check if token exists
    role: (state) => state.user_role || 'default',  // Default role if not set
  },
  actions: {
    setToken(token) {
      this.token = token;
      if (process.client) {
        localStorage.setItem('token', token);
      }
    },
    setRole(user_role) {
      this.user_role = user_role;
      if (process.client) {
        localStorage.setItem('user_role', user_role);
      }
    },
    setUser(user) {
      this.user = user;
      this.setToken(user.token);
      this.setRole(user.user_role);
      if (process.client) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    },
    clearUser() {
      this.user = null;
      this.token = null;
      this.user_role = null;
      if (process.client) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('user_role');
      }
    },
    initializeUser() {
      if (process.client) {
        const userData = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        const user_role = localStorage.getItem('user_role');
        
        // Handle non-logged-in users gracefully
        if (userData) {
          this.user = JSON.parse(userData);
        }
        if (token) {
          this.token = token;
        }
        if (user_role) {
          this.user_role = user_role;
        }
        // If no data is found, nothing happens and defaults stay intact
      }
    },
  },
});
