<template>
  <div>
    <NavBar />
    <LoadingSpinner v-if="loading" />
    <main class="min-h-screen bg-gray-100" v-else>
      <NuxtPage />
    </main>

            <!-- Notification Component -->
            <Notification
            v-if="showNotification"
            :message="notificationMessage"
            :type="notification_type"
            :key="notificationKey"
          />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore();


import LoadingSpinner from '~/components/LoadingSpinner.vue';
import NavBar from '~/components/admin/NavBar.vue';
const loading = ref(false);
const router = useRouter();
definePageMeta({ 
 colorMode: 'light', 
});

import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue';

// Access notification data from the plugin
const nuxtApp = useNuxtApp();
const showNotification = nuxtApp.$notification.showNotification;
const notificationMessage = nuxtApp.$notification.notificationMessage;
const notification_type = nuxtApp.$notification.notification_type;
const notificationKey = nuxtApp.$notification.notificationKey;

</script>

<style scoped>
main {
  padding: 20px;
}
</style>
