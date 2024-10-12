<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-center text-lg font-semibold mb-4">Enter your card details</h2>

      <!-- Card Element (ensure it's mounted) -->
      <div id="card-element" class="border p-4 rounded-md"></div>
      <span v-if="cardError" class="text-red-500 text-sm mt-2 block">{{ cardError }}</span>

      <!-- Submit Payment Button -->
      <button @click="confirmPayment" :disabled="loading"
        class="w-full mt-4 bg-steelBlue text-white py-2 px-4 rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <span v-if="loading" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
        {{ loading ? 'Processing...' : 'Confirm Payment' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { loadStripe } from '@stripe/stripe-js';
import { useNuxtApp, useRuntimeConfig } from '#app';

// Access services and configurations from Nuxt context
const nuxtApp = useNuxtApp();
const RuntimeConfig = useRuntimeConfig();
const $authService = nuxtApp.$authService;

// Refs and state
const stripe = ref(null);
const cardElement = ref(null);
const cardError = ref('');
const loading = ref(false);

// Client secret and setup intent refs
const clientSecret = ref('');
const setupIntentId = ref('');
const stripePublicKey = ref('');

// Debugging helper to ensure mounting process works correctly
const mountCardElement = async (stripePublicKey) => {

  try {
    stripe.value = await loadStripe(stripePublicKey);

    if (!stripe.value) {
      throw new Error('Stripe failed to load.');
    }

    const elements = stripe.value.elements();
    if (!elements) {
      throw new Error('Stripe Elements not initialized.');
    }

    cardElement.value = elements.create('card');
    cardElement.value.mount('#card-element');
    console.log('Card element mounted successfully');
  } catch (error) {
    console.error('Error mounting card element:', error);
    cardError.value = 'Failed to initialize card input. Please try again later.';
  }
};

onMounted(async () => {
  // Ensure this code runs only in the browser (client-side)
  if (process.client) {
    // Fetch client secret and setup intent from localStorage
    clientSecret.value = localStorage.getItem('setupIntentClientSecret');
    setupIntentId.value = localStorage.getItem('setupIntentId');
    stripePublicKey.value = RuntimeConfig.public.stripePublicKey;

    if (!clientSecret.value || !setupIntentId.value) {
      cardError.value = 'Payment details are missing. Please refresh the page.';
      return;
    }

    // Mount the card element
    await mountCardElement(stripePublicKey.value);
  }
});

const confirmPayment = async () => {
  try {
    loading.value = true;
    cardError.value = '';

    // Confirm the card setup using client_secret retrieved from localStorage
    const result = await stripe.value.confirmCardSetup(clientSecret.value, {
      payment_method: {
        card: cardElement.value,
      },
    });

    if (result.error) {
      cardError.value = result.error.message;
      throw new Error(result.error.message);
    }

    // Handle further actions if required (e.g., 3D Secure)
    if (result.setupIntent && result.setupIntent.status === 'requires_action') {
      const actionResult = await stripe.value.handleCardAction(result.setupIntent.client_secret);
      if (actionResult.error) {
        cardError.value = actionResult.error.message;
        throw new Error(actionResult.error.message);
      }
    }

    // Once the SetupIntent has succeeded, proceed to create the subscription
    if (result.setupIntent.status === 'succeeded') {
      const paymentMethodId = result.setupIntent.payment_method;

      // Now create the subscription
      const subscriptionDetails = {
        subscription_type: 'monthly',
        is_auto_renewal: true,
        payment_method_id: paymentMethodId,
      };

      const subscription = await $authService.createSubscription(subscriptionDetails);

      if (subscription.status === 'success') {
        console.log('Subscription created successfully');
      } else {
        throw new Error(subscription.message);
      }
    } else {
      throw new Error('Failed to complete payment process.');
    }

  } catch (error) {
    cardError.value = error.message || 'An error occurred during payment processing.';
    console.error('Error during payment process:', error);
  } finally {
    loading.value = false;
  }
};
</script>

<style>
/* Add some basic styling to make the card element look nice */
#card-element {
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 4px;
  background-color: white;
  margin-bottom: 12px;
}
</style>
