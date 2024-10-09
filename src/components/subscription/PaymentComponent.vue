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

const stripe = await loadStripe('your-stripe-public-key-here');
let elements, cardElement;

onMounted(() => {
  elements = stripe.elements();
  cardElement = elements.create('card');
  cardElement.mount('#card-element');
});

const handlePayment = async () => {
  try {
    const response = await axios.post('/api/subscription/setup-intent', { userId: 'user-id-here' });
    const clientSecret = response.data.clientSecret;

    const { setupIntent, error } = await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'Customer Name', // Replace with actual billing details
        },
      },
    });

    if (error) {
      console.error('Error confirming card setup:', error);
    } else {
      await createSubscription(setupIntent.payment_method);
    }
  } catch (error) {
    console.error('Error during payment:', error);
  }
};

const createSubscription = async (paymentMethodId) => {
  try {
    const response = await axios.post('/api/subscription/create', {
      paymentMethodId,
      package: 'premium',
    });

    if (response.data.url) {
      window.location.href = response.data.url;
    }
  } catch (error) {
    console.error('Error creating subscription:', error);
  }
};
</script>
