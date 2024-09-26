<script setup >
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// Get the slug from the route parameters
const route = useRoute();

// Define the layout using `definePageMeta` based on the fetched roleId
definePageMeta({
  layout:'business-layout'
});

</script>

<template>
 
</template>
