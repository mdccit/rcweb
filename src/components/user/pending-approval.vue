<template>
  <div class="min-h-screen w-full bg-generic bg-cover bg-no-repeat flex flex-col sm:justify-center items-center py-12 px-4">
      <div class="w-full sm:max-w-lg">
          <div class="bg-white rounded-lg p-12 mb-6">
              <div class="w-full text-center">
                  <img class="text-center mx-auto w-8 h-8" img src="@/assets/images/hourglass.gif" alt="">
              </div>
              <h1 class="text-2xl font-bold mb-4 text-center mt-4">Hi User</h1>
              <p class="text-center text-black">We are thrilled to welcome you to Recruited! Your account has been submitted for
                  approval. We'll
                  notify you as soon as it's approved.
              
              </p>
              <div class="w-full text-center mt-8">
                <button type="submit" @click="logoutUser"  class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-steelBlue hover:bg-brightSkyBlue active:bg-royalBlue text-white border-transparent focus:border-lightAzure focus:ring-lightPastalBlue min-w-44"><span>Go back to Home</span></button>
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
