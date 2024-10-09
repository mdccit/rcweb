// stores/packageStore.js
import { defineStore } from 'pinia';

export const usePackageStore = defineStore('package', {
  state: () => ({
    stripeCustomerId: null, // State for Stripe Customer ID
    setupIntentClientSecret: null,  // State for SetupIntent client secret
    setupIntentId: null,  // State for SetupIntent ID
  }),
  getters: {
    getStripeCustomerId: (state) => state.stripeCustomerId || '', // Getter for Stripe Customer ID
    getSetupIntentClientSecret: (state) => state.setupIntentClientSecret || '', // Getter for SetupIntent client secret
    getSetupIntentId: (state) => state.setupIntentId || '', // Getter for SetupIntent ID
  },
  actions: {
    // Set Stripe Customer ID
    setStripeCustomerId(stripeCustomerId) {
      this.stripeCustomerId = stripeCustomerId;
      if (process.client) {
        localStorage.setItem('stripeCustomerId', stripeCustomerId); // Store in localStorage if client-side
      }
    },

    // Get Stripe Customer ID
    getStripeCustomerId() {
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

    // Get SetupIntent client secret and ID
    getSetupIntentData() {
      if (this.setupIntentClientSecret && this.setupIntentId) {
        return {
          clientSecret: this.setupIntentClientSecret,
          setupIntentId: this.setupIntentId,
        };
      }
      if (process.client) {
        const clientSecret = localStorage.getItem('setupIntentClientSecret');
        const setupIntentId = localStorage.getItem('setupIntentId');
        if (clientSecret && setupIntentId) {
          this.setupIntentClientSecret = clientSecret;
          this.setupIntentId = setupIntentId;
          return {
            clientSecret,
            setupIntentId,
          };
        }
      }
      return null;
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
