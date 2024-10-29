<template>
  <!-- common full screen loader -->
  <ScreenLoader v-if="loading"/>
  <!-- / common full screen loader -->
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      
      <!-- Stripe Logo and Subscription Text -->
      <div class="flex items-center justify-center mb-4">
        <img src="https://stripe.com/img/v3/home/twitter.png" alt="Stripe Logo" class="h-6 mr-2"/>
        <p class="text-gray-600 text-sm">
          You are subscribing to <strong>Recruited Premium</strong> using Stripe.
        </p>
      </div>

      <!-- Trial Subscription Notice -->
      <div v-if="subscriptionType === 'trial'"
        class="mb-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
        <p class="text-sm">
          Please note that a payment method is required for trial subscriptions because Payment Processing needs it to
          create a subscription, even for a free trial to continue later. No amount will be charged from your card.
        </p>
      </div>

      <!-- Name Input Field -->
      <div class="mb-4">
        <label for="customer-name" class="block text-sm font-medium text-gray-700">Name on Card</label>
        <input v-model="customerName" type="text" id="customer-name" class="mt-1 p-2 border rounded-md w-full" />
      </div>

      <h2 class="text-center text-lg font-semibold mb-4">Enter your card details</h2>

      <!-- Card Element (ensure it's mounted) -->
      <div id="card-element" class="border p-4 rounded-md"></div>
      <span v-if="cardError" class="text-red-500 text-sm mt-2 block">{{ cardError }}</span>

      <!-- Submit Payment Button -->
      <button @click="confirmPayment" :disabled="loading" v-if="!paymentRedirect"
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
import { useRouter, useRoute } from 'vue-router';
import ScreenLoader from '@/layouts/screen_loader.vue';

// Access services and configurations from Nuxt context
const nuxtApp = useNuxtApp();
const RuntimeConfig = useRuntimeConfig();
const $authService = nuxtApp.$authService;
const router = useRouter(); // Initialize router
const route = useRoute();

const subscriptionType = ref('');
const is_auto_renewal = ref(false);

// Refs and state
const stripe = ref(null);
const cardElement = ref(null);
const cardError = ref('');
const loading = ref(false);
const paymentRedirect = ref(false);

// Client secret and setup intent refs
const clientSecret = ref('');
const setupIntentId = ref('');
const stripePublicKey = ref('');

// Additional refs for billing details
const customerName = ref('');
const customerEmail = ref('');
const customerPhone = ref('');

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

    // Card element without ZIP code
    const cardElementOptions = {
      style: {
        base: {
          fontSize: '16px',
          color: '#32325d',
        },
      },
      hidePostalCode: true,  // Hide the postal/ZIP code field
    };

    cardElement.value = elements.create('card', cardElementOptions);
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
    subscriptionType.value = route.query.package || 'monthly';
    is_auto_renewal.value = route.query.is_auto_renewal || false;

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
        billing_details: {
          name: customerName.value,
          email: customerEmail.value,
          phone: customerPhone.value
        }
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
        subscription_type: subscriptionType.value,
        is_auto_renewal: is_auto_renewal.value === 'true',
        payment_method_id: paymentMethodId,
      };

      const subscription = await $authService.createSubscription(subscriptionDetails);

      if (subscription.status === 'success') {
        paymentRedirect.value = true;
        console.log('Subscription created successfully');
        router.push('/payment-success');
      } else {
        // throw new Error(subscription.message);
        router.push('/payment-fail');
      }
    } else {
      router.push('/payment-fail');
      //throw new Error('Failed to complete payment process.');
    }

  } catch (error) {
    router.push('/payment-fail');
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
