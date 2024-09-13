// ~/plugins/notification.ts
import { ref } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Notification plugin loaded');
  const notificationMessage = ref('');
  const notification_type = ref('');
  const showNotification = ref(false);
  const notificationKey = ref(0);

  const triggerNotification = (message, type) => {
    console.log('Triggering notification:', message, type); 
    notificationMessage.value = message;
    notification_type.value = type;
    showNotification.value = true;

    notificationKey.value += 1; // Force re-render

    // Auto-hide after 3 seconds
    setTimeout(() => {
      showNotification.value = false;
    }, 3000);
  };

  // Make it globally accessible via $notification
  nuxtApp.provide('notification', {
    triggerNotification,
    notificationMessage,
    notification_type,
    showNotification,
    notificationKey,
  });
});
