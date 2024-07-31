<template>
  <form @submit.prevent="submitForm">
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input v-model="email" type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
      <input v-model="password" type="password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
    </div>
    <div class="flex items-center justify-between">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const emit = defineEmits(['submit']);

const submitForm = () => {
  emit('submit', { email: email.value, password: password.value });
};
</script>

<style scoped>
/* Add your styles here */
</style>
