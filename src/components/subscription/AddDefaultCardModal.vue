<template>
  <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <!-- Close Button with SVG -->
      <button @click="emitClose" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h2 class="text-lg font-semibold mb-4">Add New Payment Method</h2>
      <p class="text-sm text-gray-600 mb-4">We use Stripe to process your payment information securely.</p>

      <form @submit.prevent="handleAddCard">
        <div id="card-element" class="border rounded p-4 mb-4"></div> <!-- Larger padding for card input -->
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded w-full" :disabled="isLoading">
          <span v-if="!isLoading">Add Card</span>
          <span v-else>Processing...</span>
        </button>
      </form>
      <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>

      <!-- Cancel Button with SVG -->
      <button @click="emitClose"
        class="mt-4 px-4 py-2 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 transition duration-200">
        Cancel
      </button>

      <!-- Stripe Branding -->
      <div class="flex items-center justify-center mt-6">
        <span class="text-xs text-gray-400">Powered by</span>
        <img src="https://stripe.com/img/v3/home/twitter.png" alt="Stripe" class="h-5 ml-2">
      </div>

    </div>
  </div>
</template>


<script setup>
import { ref, watch, nextTick, onMounted } from 'vue';
import { loadStripe } from '@stripe/stripe-js';
import { useNuxtApp, useRuntimeConfig } from '#app';

const props = defineProps({
  isVisible: Boolean,
});
const emit = defineEmits(['close', 'success']);

const nuxtApp = useNuxtApp();
const RuntimeConfig = useRuntimeConfig();
const $subscriptionService = nuxtApp.$subscriptionService;

const stripePublishableKey = ref('');
const stripe = ref(null);
const elements = ref(null);
const cardElement = ref(null);
const isLoading = ref(false);
const errorMessage = ref('');

// Emit close event to notify parent to hide modal
const emitClose = () => {
  emit('close');
  errorMessage.value = '';

  // Properly unmount the card element to avoid duplicates
  if (cardElement.value) {
    cardElement.value.destroy(); // Safely destroys the element
    cardElement.value = null;
  }
};

const emitSuccessClose = () => {
  emit('success');
  errorMessage.value = '';

  // Properly unmount the card element to avoid duplicates
  if (cardElement.value) {
    cardElement.value.destroy(); // Safely destroys the element
    cardElement.value = null;
  }
};

// Handle adding card
const handleAddCard = async () => {
  isLoading.value = true;
  errorMessage.value = '';

  if (!stripe.value || !cardElement.value) {
    errorMessage.value = 'Stripe not loaded.';
    isLoading.value = false;
    return;
  }

  const { error, paymentMethod } = await stripe.value.createPaymentMethod({
    type: 'card',
    card: cardElement.value,
  });

  if (error) {
    errorMessage.value = error.message;
    isLoading.value = false;
    return;
  }

  try {
    const response = await $subscriptionService.add_new_default_card({
      payment_method_id: paymentMethod.id,
    });

    if (response.status == 200) {
      nuxtApp.$notification.triggerNotification(response.display_message, 'success');
      emitSuccessClose();
    } else {
      nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
    }
  } catch (error) {
    errorMessage.value = 'An error occurred while adding the new default card.';
    nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
  } finally {
    isLoading.value = false;
  }
};

// Initialize Stripe and watch for modal visibility
onMounted(async () => {
  stripePublishableKey.value = RuntimeConfig.public.stripePublicKey;
  stripe.value = await loadStripe(stripePublishableKey.value);
  elements.value = stripe.value.elements();
});

watch(
  () => props.isVisible,
  async (visible) => {
    if (visible) {
      // If the modal is opened and cardElement is null, create and mount it
      if (!cardElement.value && elements.value) {
        await nextTick();
        cardElement.value = elements.value.create('card', {
          style: {
            base: {
              fontSize: '18px',
              padding: '10px 15px',
            },
          },
          hidePostalCode: true, // Hide ZIP code if desired
        });
        cardElement.value.mount('#card-element');
      }
    }
  }
);

</script>

<style scoped>
/* Modal-specific styling for consistent card input size */
#card-element {
  font-size: 18px;
  /* Consistent font size with PaymentComponent */
  padding: 10px 15px;
}
</style>
