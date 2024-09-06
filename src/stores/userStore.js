// stores/userStore.js
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';


export const useUserStore = defineStore('user', {
  state: () => ({
    token: null,
    user: null,
    user_role: null,
    email: null,
    roles: [],
    permissions: []
  }),
  getters: {
    isAuthenticated: (state) => !!state.user && !!state.token,
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
    setEmail(email) {
      this.email = email;
      if (process.client) {
        localStorage.setItem('email', email);
      }
    },
    setUser(user) {
      this.user = user;
      this.token = user.token;
      this.user_role = user.role || 'default';
      this.user = user;
      this.roles = user.roles ? [...user.roles, user.role] : [user.role];
      this.permissions = user.permissions || []; // Set user permissions


      // Set the token and role
      this.setToken(user.token);
      this.setRole(user.role);
      this.setEmail(user.email);

      if (process.client) {
        // Remove session cookie by setting it to an expired date
        document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        // Store the user in localStorage
        localStorage.setItem('user', JSON.stringify(user));
      }
    },

    clearUser() {
      this.email = null;
      this.user = null;
      this.token = null;
      this.user_role = null;
      this.roles = [];
      this.permissions = [];

       // Remove session cookie
       Cookies.remove('session', { path: '/' });

      // // const userPermissions = usePermissions();
      // const userRoles = useRoles();

      // // userPermissions.value = []; // Clear permissions
      // userRoles.value = []; // Clear roles

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
    
        // Log user data from localStorage
        // console.log('Loaded user from localStorage:', userData);
    
        // Handle non-logged-in users gracefully
        if (userData) {
          this.user = JSON.parse(userData);
        }
        if (token) {
          this.token = token;
        }
        if (user_role) {
          this.user_role = user_role;
    
          // Set the roles array as well
          this.roles = [user_role];  // Add the user_role to roles array
     
        }
      }
    },
    
  },
});
