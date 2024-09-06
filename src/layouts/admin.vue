<template>
  <div>
    <NavBar />
    <LoadingSpinner v-if="loading" />
    <main class="min-h-screen bg-gray-100" v-else>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import LoadingSpinner from '~/components/LoadingSpinner.vue';
import NavBar from '~/components/admin/NavBar.vue';
import checkSession from '~/middleware/checkSession';

defineNuxtRouteMiddleware(checkSession);

const loading = ref(false);
const router = useRouter();
definePageMeta({ colorMode: 'light', })

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
