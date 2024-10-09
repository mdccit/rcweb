<template>
  <div>
    <h2>Enter Payment Information</h2>
    <div id="card-element"></div>
    <div id="card-errors" role="alert"></div>

    <button @click="handlePayment">Submit Payment</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { loadStripe } from '@stripe/stripe-js';

// Props from Register Step 3
const props = defineProps({
  stripeCustomerId: {
    type: String,
    required: true,
  },
  handleSubscription: {
    type: Function,
    required: true,
  }
});

// Stripe Initialization
const stripe = await loadStripe('your-publishable-key');
let cardElement;
onMounted(() => {
  const elements = stripe.elements();
  cardElement = elements.create('card');
  cardElement.mount('#card-element');
});

// Handle Payment Submission
const handlePayment = async () => {
  try {
    // Step 1: Call the parent function to get the setup intent from the backend
    const setupIntent = await props.handleSubscription(props.stripeCustomerId);

    // Step 2: Confirm the card setup using the Stripe client_secret from the setup intent
    const { setupIntent: confirmedSetup, error } = await stripe.confirmCardSetup(setupIntent.client_secret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'Customer Name', // Pass actual billing details
        },
      },
    });

    if (error) {
      console.error('Error during payment confirmation:', error);
      return;
    }

    // Step 3: Call the parent function to finalize subscription
    await props.handleSubscription(confirmedSetup.payment_method);
  } catch (error) {
    console.error('Error during payment:', error);
  }
};
</script>
