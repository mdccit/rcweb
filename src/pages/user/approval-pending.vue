<template>
  <PendingApproval />
</template>

<script setup>
import PendingApproval from '~/components/user/pending-approval.vue';
import { useNuxtApp } from '#app';
import { useRoute, useRouter } from 'vue-router';


const router = useRouter();

// Access authService from the context
const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;

definePageMeta({
  colorMode: 'light',
  layout: 'outer',
  middleware: ['role'],
  requiredRole: ['default', 'undefined', 'coach', 'business-manager'],
});

useHead({
  title: 'Recruited Approval pending',
})

onMounted(() => {

  const token = localStorage.getItem('token'); // Retrieve token from localStorage
  const userRole = localStorage.getItem('user_role'); // Retrieve user role

  if (token) {
    console.log('token exist');
    if (userRole == 'coach') {
      console.log('coach user found');
      if (token) {
        router.push(`/register-step-three/${token}`);
      } else {
        console.error('Token is missing.');
      }
    } else if (userRole == 'player' || userRole == 'parent' || userRole == 'admin') {
      router.push('/app');
    }
  } else {
    router.push('/login');
  }

});

</script>

<style scoped>
h1 {
  color: #333;
}

p {
  font-size: 16px;
}
</style>