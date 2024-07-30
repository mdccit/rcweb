<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
        v-model="username"
      />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Sign In
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleSubmit = () => {
  // Handle login logic
  console.log('Username:', username.value)
  console.log('Password:', password.value)
}
</script>

<style scoped>
form {
  max-width: 400px;
  margin: auto;
}
</style>
