<template>
  <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <!-- X Close Button -->
      <button @click="emitClose" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        &times;
      </button>

      <h2 class="text-lg font-semibold mb-4">Add New Card</h2>
      <form @submit.prevent="handleAddCard">
        <div id="card-element" class="border rounded p-4 mb-4"></div> <!-- Larger padding for card input -->
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded w-full" :disabled="isLoading">
          <span v-if="!isLoading">Add Card</span>
          <span v-else>Processing...</span>
        </button>
      </form>
      <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>

      <!-- Cancel Button -->
      <button @click="emitClose" class="text-gray-500 mt-4 hover:text-gray-700">
        Cancel
      </button>
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
const emit = defineEmits(['close']);

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
    const response = await $subscriptionService.add_new_card({
      payment_method_id: paymentMethod.id,
    });

    if (response.status == 200) {
      nuxtApp.$notification.triggerNotification(response.display_message, 'success');
      emitClose();
    } else {
      nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
    }
  } catch (error) {
    errorMessage.value = 'An error occurred while adding the card.';
    nuxtApp.$notification.triggerNotification('An error occurred while adding the card.', 'failure');
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
    if (visible && !cardElement.value && elements.value) {
      await nextTick();
      cardElement.value = elements.value.create('card', {
        style: {
          base: {
            fontSize: '18px', // Make the font larger to match PaymentComponent
            padding: '10px 15px', // Add padding for larger input size
          },
        },
      });
      cardElement.value.mount('#card-element');
    }
  }
);
</script>

<style scoped>
/* Modal-specific styling for consistent card input size */
#card-element {
  font-size: 18px; /* Consistent font size with PaymentComponent */
  padding: 10px 15px;
}
</style>
