// stores/packageStore.js
import { defineStore } from 'pinia';

export const usePackageStore = defineStore('package', {
  state: () => ({
    stripeCustomerId: null, // State for Stripe Customer ID
    setupIntentClientSecret: null,  // State for SetupIntent client secret
    setupIntentId: null,  // State for SetupIntent ID
    paymentTokens: {} 
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
        localStorage.setItem('setupIntentClientSecret', clientSecret);
        localStorage.setItem('setupIntentId', setupIntentId);
    },

    setPaymentToken(token) {
      // Store payment details associated with a token
      this.paymentTokens[token] = {
        clientSecret: this.clientSecret,
        setupIntentId: this.setupIntentId
      };
    },

    getPaymentDataByToken(token) {
      // Retrieve payment data based on the token
      return this.paymentTokens[token];
    },
    clearPaymentData() {
      this.clientSecret = null;
      this.setupIntentId = null;
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
