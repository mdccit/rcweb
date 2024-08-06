<template>
  <div class="container mx-auto flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-2xl font-bold mb-4 text-center">Login</h1>
        <LoginForm @submit="handleLogin" />
        <p v-if="errorMessage" class="text-red-500 text-center mt-4">{{ errorMessage }}</p>
      </div>
    </div>
    <Notification v-if="notificationMessage" :message="notificationMessage" :duration="5000" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import LoginForm from '~/components/LoginForm.vue';
import Notification from '~/components/common/Notification.vue';
import createAuthService from '~/services/authService.js';

const router = useRouter();
const nuxtApp = useNuxtApp();
const authService = createAuthService(nuxtApp.$config.public);

const errorMessage = ref('');
const notificationMessage = ref('');

const handleLogin = async ({ email, password }) => {
  try {
    const result = await authService.login(email, password);
    console.log(result);

    // Show success message
    notificationMessage.value = result.display_message;

    // Store the token in localStorage
    localStorage.setItem('token', result.data.token);

    // Redirect to /admin/dashboard
    setTimeout(() => {
      router.push('/admin/dashboard');
    }, 5000); // Adjust the delay if needed
  } catch (error) {
    console.error(error.message);
    errorMessage.value = 'Failed to login. Please check your credentials.';
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
