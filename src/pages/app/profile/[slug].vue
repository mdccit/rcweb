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

</template>
