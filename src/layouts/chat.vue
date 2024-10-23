<template>
    <!-- common full screen loader -->
    <ScreenLoader v-if="loadingStore.isLoading" />
    <!-- / common full screen loader -->
  
    <div v-if="!loadingStore.isLoading">
      <!-- Top Navigation Bar -->
      <SocialHubNavbar />
  
      <main class="bg-graySnowDrift">
        <div class="container-compressed">
          <div class="mt-16">
            <slot />
          </div>
        </div>
      </main>
  
      <!-- Footer -->
      <FooterBar />
  
    </div>
  </template>

<script setup>
import SocialHubNavbar from '~/components/user/navbar.vue';
import FooterBar from '~/components/user/user-footer.vue';
import ScreenLoader from '@/layouts/screen_loader.vue';
import { useLoadingStore } from '@/stores/loadingStore';
const loadingStore = useLoadingStore();
</script>