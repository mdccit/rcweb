<template>
    <div>
      <LoadingSpinner v-if="loading" />
      <main class="min-h-screen bg-gray-100  p-[0px]" v-else>
        <NuxtPage />
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import FooterPublic from '~/components/FooterPublic.vue';
  
  import LoadingSpinner from '~/components/LoadingSpinner.vue';
  import NavBarPublic from '~/components/NavBarPublic.vue';
  import checkSession from '~/middleware/checkSession';
  
  defineNuxtRouteMiddleware(checkSession);
  definePageMeta({ colorMode: 'light', })
  const loading = ref(false);
  const router = useRouter();
  
  router.beforeEach((to, from, next) => {
    loading.value = true;
    next();
  });
  
  router.afterEach(() => {
    loading.value = false;
  });
  </script>
  
  <style scoped>

  </style>
  