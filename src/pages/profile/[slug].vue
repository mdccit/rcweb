<script setup >
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// Get the slug from the route parameters
const route = useRoute();

// Define the layout using `definePageMeta` based on the fetched roleId
definePageMeta({
  middleware: 'role-based-layout'
});

</script>

<template>
  <div v-if="pending">
    <p>Loading...</p>
  </div>

  <div v-if="!pending && user">
    <h1>{{ user.name }}'s Profile</h1>
    <!-- Display user profile content here -->
  </div>

  <div v-if="error">
    <p>{{ error }}</p>
  </div>
</template>
