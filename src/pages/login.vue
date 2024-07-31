<template>
  <div class="container mx-auto flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-2xl font-bold mb-4 text-center">Login</h1>
        <LoginForm @submit="handleLogin" />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from '~/components/LoginForm.vue';
import { useNuxtApp } from '#app';
import createAuthService from '~/services/authService.js';

const nuxtApp = useNuxtApp();
const authService = createAuthService(nuxtApp.$config.public);

console.log("Nuxt App Config:", nuxtApp.$config.public);  // Log to check the config in the component

const handleLogin = async ({ email, password }) => {
  console.log("Email:", email);  // Log to check the email value
  console.log("Password:", password);  // Log to check the password value

  try {
    const result = await authService.login(email, password);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
