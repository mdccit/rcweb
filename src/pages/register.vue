<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4 text-center">Register</h1>
    <RegisterForm @submit="handleRegister" />
  </div>
</template>

<script setup>
import RegisterForm from '~/components/RegisterForm.vue';
import createAuthService from '~/services/authService';
import { useRuntimeConfig } from '#app';

const $config = useRuntimeConfig();
const authService = createAuthService($config);

const handleRegister = async (email, password) => {
  try {
    const result = await authService.register(email, password);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};
</script>
