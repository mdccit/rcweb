<template>
  <RegisterStepTwo :token="token" />
</template>

<script setup>
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import RegisterStepTwo from '~/components/RegisterStepTwo.vue';
definePageMeta({
  colorMode: 'light',
  layout: 'outer',
  middleware: ['role'],
  requiredRole: ['default'],
});
// Capture the dynamic token from the route
const route = useRoute();
const token = route.params.token;  // Access the token parameter from the route

// Prevent the back button by intercepting the route change
onBeforeRouteLeave((to, from, next) => {
  next(false); // Prevent navigation
});

</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
