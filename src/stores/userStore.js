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
    permissions: [],
    user_id :'',
    user_slug:null
  }),
  getters: {
    isAuthenticated: (state) => !!state.user && !!state.token,
    isLoggedIn: (state) => !!state.token,  // Check if token exists
    role: (state) => state.user_role || 'default',  // Default role if not set
    userId: (state) => state.user_id || '',  
    loggedUserEmail: (state) => state.email || '',  // Default role if not set
    loggedUserName: (state) => state.user_name,
    userSlug:(state) => state.user_slug||null,
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
    setUserSlug(slug) {
      this.user_slug = slug;
    },
    setUserId(name) {
      this.user_name = name;
      if (process.client) {
        localStorage.setItem('user_name', name);
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
      this.user_id = user.user_id || ''; 
      this.user_name = user.user_name || ''; 

      // Set the token and role
      this.setToken(user.token);
      this.setRole(user.role);
      this.setEmail(user.email);
      this.setUserId(user.id);
      this.setUserId(user.user_name);
      if (process.client) {
        // Remove session cookie by setting it to an expired date
        document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        // Store the user in localStorage
        localStorage.setItem('user', JSON.stringify(user));
      }
    },
    setPlayerId(id) {
      this.user_id = id;
      if (process.client) {
        localStorage.setItem('user_id', id);
      }
    }, setUserId(id) {
      this.user_id = id;
      if (process.client) {
        localStorage.setItem('user_id', id);
      }
    },
    setTempUser(role,token) {
      this.token = token;
      this.user_role = role || 'default';
    },
    clearRole() {
      this.user_role = null;
    },

    clearUser() {
      this.email = null;
      this.user = null;
      this.token = null;
      this.user_role = null;
      this.roles = [];
      this.permissions = [];
      this.user_id = ''; 
      this.user_id = null; 
      this.user_slug=null;
       // Remove session cookie
       Cookies.remove('session', { path: '/' });

      if (process.client) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('user_role');
        localStorage.removeItem('user_permission_type');
        localStorage.removeItem('user_id');
        localStorage.removeItem('email');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_slug');
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
