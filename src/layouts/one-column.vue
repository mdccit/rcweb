<template>
    <!-- common full screen loader -->
    <ScreenLoader v-if="loadingStore.isLoading" />
    <!-- / common full screen loader -->
  
    <div v-if="!loadingStore.isLoading">
    <!-- Top Navigation Bar -->
    <SocialHubNavbar />

    <main class="bg-graySnowDrift min-h-screen">
      <div class="container-compressed">
        <div class="grid grid-cols-6 gap-4 mt-16">
          <!-- Left pane -->
          <div>
            <Filter />
            <CallCard/>
             <!-- <transfer-tracker-left-bar /> -->
             <!-- <NetworkLeft /> -->
            <!-- <Filter v-if="route.meta.showFilterLeft" /> -->
            <!-- <resources-left-bar /> -->
             <!-- <userSettingLeftBar /> -->
          </div>

          <!-- Middle pane -->
          <div class="col-span-4">
            <LoadingSpinner v-if="loading" />
            <NuxtPage v-else />
          </div>

          <!-- Right pane -->
          <div>
            <!-- <Filter /> -->
             <!-- <transfer-tracker-right-bar /> -->
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <FooterBar />

              <!-- Notification component -->
              <Notification 
              v-if="showNotification" 
              :message="notificationMessage" 
              :type="notificationType" 
              :visible="showNotification" 
              @close="closeNotification" 
              :key="notificationKey"
            />

  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '~/components/user/navbar.vue';
import FilterCard from '~/components/user/filter-card.vue';
import FooterBar from '~/components/user/user-footer.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';
import SocialHubNavbar from '~/components/user/navbar.vue';
import TransferTrackerLeftBar from '~/components/user/transferTrackerLeftBar.vue';
import TransferTrackerRightBar from '~/components/user/transferTrackerRightBar.vue';
import ScreenLoader from '@/layouts/screen_loader.vue';
import { useLoadingStore } from '@/stores/loadingStore';
const loadingStore = useLoadingStore();


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

