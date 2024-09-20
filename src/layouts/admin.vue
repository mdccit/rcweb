<template>
  <div>
    <AdminNavBar />
    <LoadingSpinner v-if="loading" />
    <main class="min-h-screen bg-gray-100" v-else>
      <NuxtPage />
    </main>

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
import { useUserStore } from '~/stores/userStore';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';
import AdminNavBar from '~/components/admin/AdminNavBar.vue';

const loading = ref(false);
const userStore = useUserStore();

const router = useRouter();
definePageMeta({ 
 colorMode: 'light', 
});

const nuxtApp = useNuxtApp();

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
</style>
