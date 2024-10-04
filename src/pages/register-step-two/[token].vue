<template>
  <RegisterStepTwo :token="token" />
</template>

<script setup>
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import RegisterStepTwo from '~/components/RegisterStepTwo.vue';
import { onMounted, onBeforeUnmount } from 'vue';

definePageMeta({
  colorMode: 'light',
  layout: 'outer',
  middleware: ['role'],
  requiredRole: ['default','undefined'],
});
// Capture the dynamic token from the route
const route = useRoute();
const token = route.params.token;  // Access the token parameter from the route

// Prevent the back button by intercepting the route change
onBeforeRouteLeave((to, from, next) => {
  next(false); // Prevent navigation
});

onMounted(() => {
  // Add a new history entry
  history.pushState(null, null, location.href);

  // Listen for the popstate event
  const preventBackNavigation = (event) => {
    history.pushState(null, null, location.href);
  };

  window.addEventListener('popstate', preventBackNavigation);

  // Clean up the event listener when the component is unmounted
  onBeforeUnmount(() => {
    window.removeEventListener('popstate', preventBackNavigation);
  });
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
