<template>
  <div class="min-h-screen w-full bg-cover bg-no-repeat flex flex-col sm:justify-center items-center py-12 px-4"
      style="background-image: url(https://qa1.recruited.qualitapps.com/static/bg-generic.svg);">
      <div class="w-full max-w-md">
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
              <div class="w-full text-center mt-4">
                  <img class="text-center mx-auto w-8 h-8" img src="@/assets/images/hourglass.gif" alt="">
              </div>
              <h1 class="text-2xl font-bold mb-4 text-center mt-4">Hi User</h1>
              <p class="text-center text-black">We are thrilled to welcome you to Recruited! Your account has been submitted for
                  approval. We'll
                  notify you as soon as it's approved.
              
              </p>
              <div class="w-full text-center mt-4">
                  <button type="button" @click="logoutUser" class="text-black bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 
                  focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2
                   mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
                  Go back to Home
              </button>
              </div>
          </div>
      </div>

       <!-- Notification Component -->
  <Notification v-if="showNotification" :message="notificationMessage" :type="notification_type" :duration="5000" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { useNuxtApp } from '#app';

import Notification from '~/components/common/Notification.vue';

const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;
const userStore = useUserStore();
const router = useRouter();

const showNotification = ref(false);
const notificationMessage = ref('');
const error = ref('');
const notification_type  = ref('');


const logoutUser = async () => {
  try {
    const response = await $authService.logout();

    if (response.status === 200) {
      userStore.clearUser();
      localStorage.removeItem('token');
      notificationMessage.value = response.display_message;
      notification_type.value = 'success';
      router.push(`/login`);
    } else {
      notificationMessage.value = response.display_message;   
      notification_type.value = 'warning';
      router.push(`/login`);
    }
  } catch (err) {
    error.value = err.response?.data?.message || err.message;
    notification_type.value = 'failure';
    notificationMessage.value = err.message;
    router.push(`/login`);
  }

  showNotification.value = true;
};
</script>

<style scoped>
h1 {
  color: #333;
}

p {
  font-size: 16px;
}
</style>