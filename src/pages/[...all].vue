<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <!-- Unauthorized Heading -->
    <h1 class="text-4xl font-extrabold text-gray-900 mb-4">
    404 - Page Not Found  
    </h1>

    <!-- Description Paragraph -->
    <p class="text-lg text-gray-700 mb-2">
      The page you are looking is not exist.
    </p>
    
    <!-- Display User Role -->
    <p class="text-md text-gray-600 mb-6">
      <!-- User role: {{ user.role }}. -->
    </p>

    <!-- Back to Home Button -->
    <NuxtLink to="/">
      <button class="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm">
        Back to home
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore();

const user = userStore.user;

definePageMeta({
    layout: 'admin',
});

</script>

<style scoped>
/* Add your scoped styles here, if necessary */
</style>
