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
import { login } from '~/services/authService';

import { useNuxtApp } from '#app';
import createAuthService from '~/services/authService';

const nuxtApp = useNuxtApp();
const authService = createAuthService(nuxtApp.$config);

const handleLogin = async (email, password) => {
  try {
    const result = await authService.login(email, password);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};
handleLogin();
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
