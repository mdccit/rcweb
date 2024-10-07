<template>
  <div class="flex flex-col min-h-screen">
    <Navbar /> <!-- Top Navigation Bar -->
    
    <div class="flex flex-grow">
      <div></div>
      <!-- Main Content Area -->
      <main class="w-full flex-grow bg-gray-100 p-4"> <!-- Set the main content to take the remaining space -->
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
import Navbar from '~/components/user/navbar.vue';
import FilterCard from '~/components/user/filter-card.vue';
import FooterBar from '~/components/user/user-footer.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';
import TransferTrackerLeftBar from '~/components/user/transferTrackerLeftBar.vue';
import TransferTrackerRightBar from '~/components/user/transferTrackerRightBar.vue';
// import checkSession from '~/middleware/checkSession';

// defineNuxtRouteMiddleware(checkSession);

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

