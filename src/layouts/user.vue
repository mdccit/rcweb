<template>
  <div class="flex flex-col min-h-screen">
    <Navbar /> <!-- Top Navigation Bar -->
    
    <div class="flex flex-grow">
      <!-- Sidebar for Filters -->
      <aside class="w-full p-4 bg-white shadow-md">
        <FilterCard />
      </aside>

      <!-- Main Content Area -->
      <main class="flex-grow bg-gray-100 p-4">
        <LoadingSpinner v-if="loading" />
        <NuxtPage v-else />
      </main>
    </div>
    
    <!-- Footer at the Bottom -->
    <FooterBar />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '~/components/user/user-navbar.vue';
import FilterCard from '~/components/user/filter-card.vue';
import FooterBar from '~/components/user/user-footer.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';
import checkSession from '~/middleware/checkSession';

defineNuxtRouteMiddleware(checkSession);

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

/* Adjust padding or other styles as needed */
</style>
