<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4 text-center">Login or Register with Google</h1>
    <div class="flex justify-center">
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="handleGoogleAuth"
      >
        Continue with Google
      </button>
    </div>
    <div v-if="error" class="mt-4">
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">{{ error }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import createAuthService from '~/services/authService'
import { useRuntimeConfig } from '#app'

const $config = useRuntimeConfig();
const authService = createAuthService($config);

const error = ref('')

const handleGoogleAuth = async () => {
  try {
    const authUrl = await authService.getGoogleAuthUrl();
    window.location.href = authUrl;
  } catch (err) {
    error.value = err.message;
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
}
</style>
