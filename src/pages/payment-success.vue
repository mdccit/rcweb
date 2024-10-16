<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md text-center">
      <h1 class="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>

      <div class="mb-4">
        <p class="text-lg font-medium">Subscription Details:</p>
        <!-- <p class="text-gray-700 mb-2">Subscription ID: {{ stripe_subscription_id || 'N/A' }}</p> -->
        <p class="text-gray-700 mb-2">Price: {{ price || 'Free' }} {{currency || 'USD' }}</p>
        <p class="text-gray-700 mb-2">Start Date: {{ start_date ? formatDate(start_date) : 'Not available' }}</p>
        <p class="text-gray-700 mb-2">End Date: {{ end_date ? formatDate(end_date) : 'Not available' }}</p>
        <p class="text-gray-700 mb-2">Status: {{ status || 'Unknown' }}</p>
      </div>

      <NuxtLink to="/app" class="bg-blue-600 text-white px-4 py-2 rounded-md">Go to Dashboard</NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  colorMode: 'light',
  layout: 'outer',
  middleware: ['role'],
  requiredRole: ['default', 'undefined', 'coach', 'player'],
});

import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { format } from 'date-fns';

const subscription = ref(null);
const stripe_subscription_id = ref('');
const currency = ref('');
const price = ref('');
const start_date = ref('');
const end_date = ref('');
const status = ref('');

const nuxtApp = useNuxtApp();

// Function to format date and handle errors
const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return 'Invalid date'; // Handle invalid dates gracefully
  }
  return format(date, 'MMMM do, yyyy');
};

// Fetch subscription details when the component is mounted
onMounted(async () => {
  try {
    const response = await nuxtApp.$subscriptionService.get_subscription();

    if (response) {
      // Set the subscription details from the response
      stripe_subscription_id.value = response.stripe_subscription_id || '';
      status.value = response.status || '';
      price.value = response.price || '';
      currency.value = response.currency || '';
      start_date.value = response.start_date || '';
      end_date.value = response.end_date || '';
    } else {
      throw new Error('Failed to retrieve subscription data.');
    }
  } catch (error) {
    console.error('Failed to fetch subscription details:', error);
  }
});
</script>
