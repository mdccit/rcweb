// stores/userStore.js
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';


export const useUserStore = defineStore('user', {
  state: () => ({
    token: null,
    user: null,
    user_role: null,
    email: null,
    user_permission_type: null,
    roles: [],
    permissions: []
  }),
  getters: {
    isAuthenticated: (state) => !!state.user && !!state.token,
    isLoggedIn: (state) => !!state.token,  // Check if token exists
    role: (state) => state.user_role || 'default',  // Default role if not set
    loggedUserEmail: (state) => state.email || '',  // Default role if not set
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
    setPermissionType(type) {
      this.type = type;
      if (process.client) {
        localStorage.setItem('user_permission_type', type);
      }
    },
    setUser(user) {
      if (!user) return;
      
      this.email = user.email || '';
      this.user = user;
      this.token = user.token;
      this.user_role = user.role || 'default';
      this.user_permission_type = user.user_permission_type || 'none';
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

    setTempUser(role,token) {
      this.token = token;
      this.user_role = role || 'default';
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

      if (process.client) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('user_role');
        localStorage.removeItem('user_permission_type');
      }
    },

    getUser() {
      if (this.user) {
        return {
          user_role: this.user_role,
          user_permission_type: this.user_permission_type || 'none' // Assuming user_permission_type is part of the user object
        };
      }
      return null;
    },
    getRole() {
      if (this.user) {
        return this.user_role;
       
      }
      return null;
    },
    getEmail() {
      if (this.user) {
        return this.email;
       
      }
      return null;
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
    
          // Set the roles array as well
          this.roles = [user_role];  // Add the user_role to roles array
     
        }
      }
    },
    
  },
});
