<template>
  <div>
    <!-- Notification component -->
    <Notification v-if="showNotification" :message="notificationMessage" :type="notificationType"
      :visible="showNotification" @close="closeNotification" :key="notificationKey" />
  </div>
  <main >
    <NavBarPublic></NavBarPublic>
    <div class="grid grid-cols-6 gap-4 temp-row grid-rows-[90px_auto] mt-16" >
      <div class="row-span-2 col-span-1 ">
        <playerProfileLeft/>
      </div>
      <div class="col-start-2 col-span-5 ">
        <playerProfileHedarer/>
      </div>
      <div class="col-start-2 col-span-4 bg-brown-500">
        <playerProfileFeed/>
      </div>
      <div class="p-2"> 
        <playerProfileRight/>
      </div>
    </div>
  </main>
  <FooterPublic></FooterPublic>
</template>

<script setup>
import playerProfileLeft from '~/components/profiles/player/layout/playerProfileLeft.vue';
import playerProfileRight from '~/components/profiles/player/layout/playerProfileRight.vue';
import playerProfileHedarer from '~/components/profiles/player/layout/playerProfileHeader.vue';
import playerProfileFeed from '~/components/profiles/player/layout/playerProfileFeed.vue';
import NavBarPublic from '~/components/user/navbar.vue';
import FooterPublic from '~/components/user/user-footer.vue';
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
temp-row {
  grid-template-rows: 90px auto !important;
}

</style>
