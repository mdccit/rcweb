<template>
  <div class="container mx-auto mt-10">
    <LoadingSpinner v-if="loading" />
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
import LoadingSpinner from '~/components/LoadingSpinner.vue';

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



// Function to handle the callback and get the code parameter
const handleGoogleAuthCallback = async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const type = localStorage.getItem('authType');

  if (!type) {
    // If authType is not set in localStorage
    notificationType.value = 'failure';
    notificationMessage.value = 'Authentication type not found. Redirecting to login.';
    showNotification.value = true;

    // Wait for the notification to be displayed and then redirect to the login page
    setTimeout(() => {
      router.push('/login');
    }, 2000); // Adjust delay as necessary to ensure the user sees the notification
    return;
  }

  if (code) {
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
        router.push('/dashboard'); // Redirect after successful login/registration
      }, 2000);
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
