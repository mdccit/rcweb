<template>
  <div>
    <!-- Card Element (ensure it's mounted) -->
    <div id="card-element" class="border p-4 rounded-md mt-4"></div>
    <span v-if="cardError" class="text-red-500 text-sm">{{ cardError }}</span>

    <!-- Submit Payment Button -->
    <button @click="confirmPayment"
      class="border rounded-full shadow-sm py-2 px-4 focus:outline-none focus:ring bg-steelBlue text-white mt-4">
      Confirm Payment
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { loadStripe } from '@stripe/stripe-js';
import { usePackageStore } from '@/stores/packageStore';
import { useNuxtApp } from '#app';

// Access authService from the context
const nuxtApp = useNuxtApp();

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
const token = route.params.token; // Get token from route params
// OnMounted, retrieve clientSecret and setupIntentId from store using token
const clientSecret = ref('');
const setupIntentId = ref('');

onMounted(async () => {
  // Get stored data from packageStore using token
  const paymentData = packageStore.getPaymentDataByToken(token);


  if (paymentData) {
    console.log('payment data exist');
    console.log(paymentData);
    clientSecret.value = paymentData.clientSecret;
    setupIntentId.value = paymentData.setupIntentId;

    // Load Stripe and mount the card element
    stripe.value = await loadStripe('pk_test_51Q5IlqB1aCt3RRccXbVS8aYnSTynl0TufY4s4mPxlYeZKbZrX2YpKxkwMBbeitKm8iWBAyWwWzcLyYByyE9sGegG00OJSEbT2i');
    const elements = stripe.value.elements();
    cardElement.value = elements.create('card');
    cardElement.value.mount('#card-element');
  } else {
    console.error('No payment data found for the provided token');
  }


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

    const paymentMethodId = result.setupIntent.payment_method;

    // Call the backend to confirm setup intent
    const setupIntentConfirmation = await packageStore.confirmSetupIntent(
      setupIntentId.value,
      paymentMethodId,
      clientSecret.value
    );

    if (setupIntentConfirmation.status === 'success') {
      // Now create the subscription
      const subscriptionDetails = {
        subscription_type: 'monthly',
        is_auto_renewal: true,
        payment_method_id: paymentMethodId,
      };

      const subscription = await packageStore.createSubscription(subscriptionDetails);

      if (subscription.status === 'success') {
        console.log('Subscription created successfully');
      } else {
        throw new Error(subscription.message);
      }
    } else {
      throw new Error('Failed to confirm Setup Intent.');
    }
  } catch (error) {
    console.error('Error during payment process:', error);
  } finally {
    loading.value = false;
  }
};
</script>
