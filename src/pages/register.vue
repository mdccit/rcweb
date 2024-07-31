<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4 text-center">Register</h1>
    <RegisterForm @submit="handleRegister" />
  </div>
</template>

<script setup>
import RegisterForm from '~/components/RegisterForm.vue';
import { register } from '~/services/authService';

const handleRegister = async (email, password) => {
  try {
    const result = await register(email, password);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};
</script>
