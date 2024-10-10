// stores/packageStore.js
import { defineStore } from 'pinia';

export const usePackageStore = defineStore('package', {
  state: () => ({
    stripeCustomerId: null, // State for Stripe Customer ID
    setupIntentClientSecret: null,  // State for SetupIntent client secret
    setupIntentId: null,  // State for SetupIntent ID
  }),
  getters: {
    // Rename the getter for Stripe customer ID to avoid conflict
    retrievedStripeCustomerId: (state) => state.stripeCustomerId || '', 
  },
  actions: {
    // Set Stripe Customer ID
    setStripeCustomerId(stripeCustomerId) {
      this.stripeCustomerId = stripeCustomerId;
      if (process.client) {
        localStorage.setItem('stripeCustomerId', stripeCustomerId); // Store in localStorage if client-side
      }
    },

    // Renaming this method to avoid conflict with $authService
    fetchStoredStripeCustomerId() {
      if (this.stripeCustomerId) {
        return this.stripeCustomerId;
      }
      if (process.client) {
        const storedId = localStorage.getItem('stripeCustomerId');
        if (storedId) {
          this.stripeCustomerId = storedId; // Restore from localStorage
          return storedId;
        }
      }
      return null;
    },

    // Clear Stripe Customer ID
    clearStripeCustomerId() {
      this.stripeCustomerId = null;
      if (process.client) {
        localStorage.removeItem('stripeCustomerId');
      }
    },

    // Set SetupIntent client secret and ID
    setSetupIntentData(clientSecret, setupIntentId) {
      this.setupIntentClientSecret = clientSecret;
      this.setupIntentId = setupIntentId;
      if (process.client) {
        localStorage.setItem('setupIntentClientSecret', clientSecret);
        localStorage.setItem('setupIntentId', setupIntentId);
      }
    },

    // Clear SetupIntent data
    clearSetupIntentData() {
      this.setupIntentClientSecret = null;
      this.setupIntentId = null;
      if (process.client) {
        localStorage.removeItem('setupIntentClientSecret');
        localStorage.removeItem('setupIntentId');
      }
    },
  },
});
