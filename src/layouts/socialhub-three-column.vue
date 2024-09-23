<template>
  <div>
    <!-- Top Navigation Bar -->
    <SocialHubNavbar />

    <main class="bg-graySnowDrift min-h-screen">
      <div class="container-compressed">
        <div class="grid grid-cols-6 gap-4 mt-16">
          <!-- Left pane -->
          <div >
            <Filter v-if="route.meta.showFilterLeft" />
          </div>

          <!-- Middle pane -->
          <div class="col-span-4">
            <LoadingSpinner v-if="loading" />
            <NuxtPage v-else />
          </div>

          <!-- Right pane -->
          <div>
            <!-- <Filter /> -->
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
import { useRouter, useRoute  } from 'vue-router';
import SocialHubNavbar from '~/components/user/navbar.vue';
import Filter from '~/components/user/feed/filter.vue';
import FooterBar from '~/components/user/user-footer.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';
import checkSession from '~/middleware/checkSession';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue';


defineNuxtRouteMiddleware(checkSession);
const nuxtApp = useNuxtApp();
const loading = ref(false);
const router = useRouter();
const route = useRoute();  

const showFilterLeft = ref(false); 

router.beforeEach((to, from, next) => {
  loading.value = true;
  next();
});

router.afterEach(() => {
  loading.value = false;
});


const showNotification = ref(false);
const notificationMessage = ref('');
const notificationType = ref('');
const notificationKey = ref(0);

// Sync the state from the notification plugin to the layout
watchEffect(() => {
  showNotification.value = nuxtApp.$notification.showNotification.value;
  notificationMessage.value = nuxtApp.$notification.notificationMessage.value;
  notificationType.value = nuxtApp.$notification.notification_type.value;
  notificationKey.value = nuxtApp.$notification.notificationKey.value;
});

const closeNotification = () => {
  showNotification.value = false; // Hide the notification
};
</script>

<style scoped>
main {
  padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>