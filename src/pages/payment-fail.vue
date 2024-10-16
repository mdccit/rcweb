<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md text-center">
      <h1 class="text-2xl font-bold text-red-600 mb-4">Payment Failed</h1>
      <p class="text-gray-700 mb-4">
        Unfortunately, your payment could not be processed. Please try again or contact support.
      </p>

      <NuxtLink to="/" class="bg-blue-600 text-white px-4 py-2 rounded-md">Exit</NuxtLink>
      <NuxtLink to="/retry-payment" class="bg-gray-600 text-white px-4 py-2 rounded-md ml-4">
        Retry Payment
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// No specific logic needed for now
</script>

<style scoped>
/* Optional: add some styles */
</style>
