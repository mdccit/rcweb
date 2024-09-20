<template>
  <div>
    <main class="min-h-screen bg-gray-100 p-[0px]">
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
import { ref, watchEffect } from 'vue';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue'; // <-- Ensure this path is correct!

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
/* Add any styles here if needed */
</style>
