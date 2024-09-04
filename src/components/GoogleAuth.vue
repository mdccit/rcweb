<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4 text-center">Login or Register with Google</h1>
    <div class="flex justify-center space-x-4">
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="initiateGoogleAuth('login')">
        Continue with Google (Login)
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="initiateGoogleAuth('register')">
        Continue with Google (Register)
      </button>
    </div>
    
    <!-- Notification Component for showing messages -->
    <Notification v-if="showNotification" :message="notificationMessage" :type="notificationType" :duration="3000" />
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue'; // Import Notification component

const error = ref('');
const successMessage = ref('');
const router = useRouter();
const userStore = useUserStore();
const authType = ref('');

// Notification related states
const showNotification = ref(false);
const notificationMessage = ref('');
const notificationType = ref('');

// Access authService from the context
const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;

// Function to handle Google authentication
const initiateGoogleAuth = async (type) => {
  try {
    authType.value = type;
    localStorage.setItem('authType', type);
    const authUrl = await $authService.getGoogleAuthUrl();
    console.log(authUrl);
    window.location.href = authUrl; // Redirect the user to the Google authentication URL
  } catch (err) {
    notificationType.value = 'failure';
    notificationMessage.value = err.message;
    showNotification.value = true;
  }
};

// Function to handle the callback and get the code parameter
const handleGoogleAuthCallback = async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const type = localStorage.getItem('authType');
  if (code && type) {
    try {
      let response;
      if (type === 'login') {
        response = await $authService.googleLogin(code);
      } else {
        response = await $authService.googleRegister(code);
      }
      
      notificationType.value = 'success';
      notificationMessage.value = response.display_message;
      showNotification.value = true;

      const token = response.data.token;
      if (process.client) {
        localStorage.setItem('token', token);
      }
      userStore.setUser({ token });
      setTimeout(() => {
        router.push('/dashboard'); // Redirect to dashboard after successful login/registration
      }, 2000); // Adjust delay if needed to ensure notification is seen
    } catch (err) {
      notificationType.value = 'failure';
      notificationMessage.value = err.message;
      showNotification.value = true;
    }
  }
};

// Ensure the callback is handled when the component is mounted
onMounted(handleGoogleAuthCallback);
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
}
</style>
