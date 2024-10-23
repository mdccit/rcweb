<template>
    <!-- common full screen loader -->
    <ScreenLoader v-if="loadingStore.isLoading" />
    <!-- / common full screen loader -->
  
    <div >
    <NavBarPublic></NavBarPublic>
    <LoadingSpinner v-if="loading" />
    <main class="min-h-screen bg-gray-100" v-else>
      <NuxtPage />
    </main>
    <FooterPublic></FooterPublic>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FooterPublic from '~/components/FooterPublic.vue';

import LoadingSpinner from '~/components/LoadingSpinner.vue';
import NavBarPublic from '~/components/NavBarPublic.vue';
import ScreenLoader from '@/layouts/screen_loader.vue';
import { useLoadingStore } from '@/stores/loadingStore';
const loadingStore = useLoadingStore();
// defineNuxtRouteMiddleware(checkSession);
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
main {
  padding: 20px;
}
</style>
