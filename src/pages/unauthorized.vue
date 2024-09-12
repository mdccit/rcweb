<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <!-- Unauthorized Heading -->
    <h1 class="text-4xl font-extrabold text-gray-900 mb-4">
      Unauthorized
    </h1>

    <!-- Description Paragraph -->
    <p class="text-lg text-gray-700 mb-2">
      You do not have permission to access this page.
    </p>
    
    <!-- Conditionally Display User Role -->
    <p v-if="user && userRole" class="text-md text-gray-600 mb-6">
      Your user role: {{ userRole }}
    </p>
    <p v-else class="text-md text-gray-600 mb-6">
      You are not logged in or your role is not defined.
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

// Get the user's role from the store
const user = userStore.user;
const userRole = userStore.getRole();  // Assuming this returns the role, null if undefined

definePageMeta({
    layout: 'outer',
});
</script>

<style scoped>
/* Add your scoped styles here, if necessary */
</style>
