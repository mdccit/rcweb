<template>
  <!-- common full screen loader -->
  <ScreenLoader v-if="loading" />

  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white rounded-lg shadow-md text-center w-[390px] h-[450px]">
      <div class="w-full h-[150px] bg-red-600 rounded-t-lg flex items-center justify-center">
        <img src="@/assets/images/closePayment.png" class="m-auto" alt="">
      </div>
      <div class="mb-4 p-3">
        <h1 class="text-2xl font-light text-red-600 mb-3 mt-4">Payment Failed!</h1>
        <p class="text-gray-400 mb-4">
          Unfortunately, your payment could not be processed. Please try again or contact support.
        </p>
      </div>

      <div class="mt-4">
        <!-- Retry Button -->
        <button @click="goBackTwoSteps" class="bg-red-600 text-white px-7 py-2 rounded-md mt-8 m-2">
          Retry
        </button>
        <Button v-if="userRole == 'coach'" @click="navigateTo('/user/user-setting')"
          class="bg-gray-200 text-black px-7 py-2 rounded-md mt-4 m-2">
          Exit
        </Button>
        <Button v-if="userRole == 'player'" @click="navigateTo('/user/user-setting')"
          class="bg-gray-200 text-black px-7 py-2 rounded-md mt-4 m-2">
          Exit
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  colorMode: 'light',
  layout: 'outer',
  middleware: ['role'],
  requiredRole: ['default', 'undefined', 'coach', 'player'],
});

import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

import ScreenLoader from '@/layouts/screen_loader.vue';
import { useRouter } from 'vue-router';

const userRole = ref('');
const router = useRouter();
const loading = ref(false);

const nuxtApp = useNuxtApp();

onMounted(async () => {
  userRole.value = localStorage.getItem('user_role');


});


const navigateTo = async (path) => {
  loading.value = true; // Show loader

  try {
    await router.push(path); // Navigate to the route
  } finally {
    loading.value = false; // Hide loader after navigation completes
  }
};
const goBackTwoSteps = () => {
  history.go(-2);
};
</script>