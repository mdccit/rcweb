<template>
  <div v-show="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-lg font-semibold mb-4">Add New Card</h2>
      <form @submit.prevent="handleAddCard">
        <div id="card-element" class="border rounded p-2 mb-4"></div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded" :disabled="isLoading">
          <span v-if="!isLoading">Add Card</span>
          <span v-else>Processing...</span>
        </button>
      </form>
      <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
      <button @click="emitClose" class="text-gray-500 mt-4">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { loadStripe } from '@stripe/stripe-js';
import { useNuxtApp, useRuntimeConfig } from '#app';
import { useRouter, useRoute } from 'vue-router';
import ScreenLoader from '@/layouts/screen_loader.vue';

const props = defineProps({
  isVisible: Boolean, // Visibility prop from parent
});
const emit = defineEmits(['close']); // Close event

const nuxtApp = useNuxtApp();
const RuntimeConfig = useRuntimeConfig();
const $subscriptionService = nuxtApp.$subscriptionService;

const stripePublishableKey = ref('');
const stripe = ref(null);
const elements = ref(null);
const cardElement = ref(null);

const isLoading = ref(false);
const errorMessage = ref('');

// Emit close event to notify parent component
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
    const response = await $subscriptionService.update_default_payment_method({
      customer_id: 'customer_id_from_backend_or_store', // Replace with actual customer ID
      payment_method_id: paymentMethod.id,
    });

    if (response.data.success) {
      alert('Card added successfully!');
      emitClose();
    } else {
      errorMessage.value = response.data.error || 'Failed to add card';
    }
  } catch (error) {
    errorMessage.value = 'An error occurred while adding the card.';
  } finally {
    isLoading.value = false;
  }
};

// Initialize Stripe and set up card element when visible
stripePublishableKey.value = RuntimeConfig.public.stripePublicKey;
loadStripe(stripePublishableKey.value).then((loadedStripe) => {
  stripe.value = loadedStripe;
  elements.value = stripe.value.elements();
});

// Watch for visibility and mount the card element when the modal is shown
watch(
  () => props.isVisible,
  (visible) => {
    if (visible && cardElement.value === null && stripe.value) {
      cardElement.value = elements.value.create('card');
      cardElement.value.mount('#card-element');
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* Modal-specific styling */
</style>
