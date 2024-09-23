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

  <div class="grid grid-cols-6 gap-4">
  <div class="row-span-2 col-span-1">
    <playerProfileLeft/>
  </div>
  <div class="col-start-2 col-span-5">
    <PlayerProfileHeader/>
  </div> 
  <div class="col-start-2 col-span-4">
    <PlayerProfileFeed/>
  </div> 
  <div> <PlayerProfileRight/></div>
</div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue'; // <-- Ensure this path is correct!
import playerProfileLeft from '~/components/profiles/playerProfileLeft.vue';
import PlayerProfileHeader from '~/components/profiles/playerProfileHeader.vue';
import PlayerProfileFeed from '~/components/profiles/playerProfileFeed.vue';
import PlayerProfileRight from '~/components/profiles/playerProfileRight.vue';
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
