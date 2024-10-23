<template>
  <!-- common full screen loader -->
  <ScreenLoader v-if="loadingStore.isLoading" />
  <!-- / common full screen loader -->

  <div>
    <LoadingSpinner v-if="loading" />
    <main class="min-h-screen p-[0px]" v-else>
      <div class="container-compact px-8">
        <NuxtPage />
      </div>
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
import ScreenLoader from '@/layouts/screen_loader.vue';
import { useLoadingStore } from '@/stores/loadingStore';
const loadingStore = useLoadingStore();

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

<style scoped></style>