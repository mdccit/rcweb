<template>
  <div id="app" data-v-app="">
    <!-- Notification Component -->
    <Notification v-if="showNotification" :message="notificationMessage" :type="notification_type" :duration="3000" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import Cookies from 'js-cookie';

import Notification from '~/components/common/Notification.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';

const userStore = useUserStore();
const errors = ref([]);
const showNotification = ref(false);
const notificationMessage = ref('');
const notification_type = ref('');

// Computed property to split error messages by comma
const splitErrors = computed(() => errors.value.flatMap((error) => error.split(',')));

const logoutUser = async () => {
  try {
    // Handle logout logic
    userStore.clearUser();

    notification_type.value = 'success';
    notificationMessage.value = 'User Successfully Logged Out';
    showNotification.value = true;
  } catch (err) {
    errors.value.push('Error logging out');
    notification_type.value = 'error';
    notificationMessage.value = 'Failed to log out';
    showNotification.value = true;
  }
};

onMounted(() => {
  logoutUser();
});


definePageMeta({
    ssr: 'true',
});
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
