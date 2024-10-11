<template>
  <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
    <h3 class="font-semibold text-xl mb-4 text-black">Payment history</h3>
    <p class="text-sm text-darkSlateBlue mb-4">Your subscription payment history is listed below.</p>

    <!-- Payment History Display -->
    <div v-if="paymentHistory.length > 0" class="space-y-3">
      <div v-for="(payment, index) in paymentHistory" :key="index" class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-2">
        <table class="min-w-full border-collapse">
          <thead>
            <tr>
              <th class="p-1 text-left text-darkSlateBlue text-xs">Date</th>
              <th class="p-1 text-left text-darkSlateBlue text-xs">Amount</th>
              <th class="p-1 text-left text-darkSlateBlue text-xs">Status</th>
              <th class="p-1 text-left text-darkSlateBlue text-xs">Invoice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-black p-1 font-semibold text-sm">{{ formatDate(payment.created) }}</td>
              <td class="text-black p-1 font-semibold text-sm">${{ payment.amount_paid }}</td>
              <td class="text-black p-1 font-semibold text-sm">{{ payment.status }}</td>
              <td class="text-black p-1 font-semibold text-sm">
                <a :href="payment.hosted_invoice_url" target="_blank" class="text-blue-500 hover:underline">View Invoice</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-else>
      <p class="text-sm text-gray-500">No payment history available.</p>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

// Access services from the context
const nuxtApp = useNuxtApp();
const $subscriptionService = nuxtApp.$subscriptionService;

// Refs to store payment history
const paymentHistory = ref([]);

onMounted(async () => {
  try {
    // Fetch user payment history
    const response = await $subscriptionService.get_stripe_payment_history();
    console.log(response);
    paymentHistory.value = response;
  } catch (error) {
    console.error('Error fetching payment history:', error);
  }
});

// Format date to Y-m-d format
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};
</script>
