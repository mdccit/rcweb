<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <!-- Card Element (ensure it's mounted) -->
      <div id="card-element" class="border p-4 rounded-md"></div>
      <span v-if="cardError" class="text-red-500 text-sm">{{ cardError }}</span>

      <!-- Submit Payment Button -->
      <button @click="confirmPayment"
        class="w-full mt-4 bg-steelBlue text-white py-2 px-4 rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Confirm Payment
      </button>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { loadStripe } from '@stripe/stripe-js';
import { usePackageStore } from '@/stores/packageStore';
import { useNuxtApp, useRuntimeConfig } from '#app';


// Access authService from the context
const nuxtApp = useNuxtApp();
const RuntimeConfig = useRuntimeConfig().public;

const $authService = nuxtApp.$authService;
const route = useRoute();

// Package Store
const packageStore = usePackageStore();

// Props received from the parent component
const props = defineProps({
  clientSecret: String,
  setupIntentId: String,
});

// Refs and state
const stripe = ref(null);
const cardElement = ref(null);
const cardError = ref('');
const loading = ref(false);
const customer_token = route.params.token;
const clientSecret = ref('');
const setupIntentId = ref('');

onMounted(async () => {
  // Get stored data from packageStore using token
  clientSecret.value = localStorage.getItem('setupIntentClientSecret');
  setupIntentId.value = localStorage.getItem('setupIntentId');

  // Load Stripe and mount the card element
  const stripePublicKey = RuntimeConfig.public.stripePublicKey;  // Access from runtimeConfig
  stripe.value = await loadStripe(stripePublicKey);
  const elements = stripe.value.elements();
  cardElement.value = elements.create('card');
  cardElement.value.mount('#card-element');

});

const confirmPayment = async () => {
  try {
    loading.value = true;

    // Confirm the card setup using client_secret retrieved from the store
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

    // Once the SetupIntent has succeeded, we proceed without calling confirmSetupIntent again
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
    console.error('Error during payment process:', error);
  } finally {
    loading.value = false;
  }
};

</script>
