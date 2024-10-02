<template>
  <div>
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
  <main>
    <NavBarPublic></NavBarPublic>
    <div class="grid grid-cols-6 grid-rows-2 gap-0 mt-16">
      <div class="col-span-6 row-start-1 row-end-2s">
        <BusinessUserCover />
      </div>
      <div class="col-start-1 col-end-2 row-start-2 row-end-3">
        <BusinessUserLeft />
      </div>
      <div class="col-start-6 col-end-7 row-start-2 row-end-3">
        <BusinessUserRight />
      </div>
      <div class="col-start-2 col-end-6 row-start-2 row-end-3">
        <BusinessUserFeed />
      </div>
    </div>
  </main>
  <FooterPublic></FooterPublic>
</template>

<script setup>
import NavBarPublic from "~/components/user/navbar.vue";
import FooterPublic from "~/components/user/user-footer.vue";
import { ref, watchEffect } from "vue";
import { useNuxtApp } from "#app";
import Notification from "~/components/common/Notification.vue"; // <-- Ensure this path is correct!
import BusinessUserRight from "~/components/profiles/businessUserProfile/businessUserRight.vue";
import BusinessUserFeed from "~/components/profiles/businessUserProfile/businessUserFeed.vue";
import BusinessUserLeft from "~/components/profiles/businessUserProfile/businessUserLeft.vue";
import BusinessUserCover from "~/components/profiles/businessUserProfile/businessUserCover.vue";
import { useUserStore } from "~/stores/userStore";
import mediaTab from "~/components/profiles/businessUserProfile/tabs/mediaTab.vue";
import { useRoute } from "vue-router";

const nuxtApp = useNuxtApp();
const slug = ref("");
const userId = ref("");
const bio = ref("");
const country = ref("");
const city = ref("");
const name = ref("");
const role = ref("");
const colleage = ref("");
const posts = ref([]);
const coachData = ref({});
const sportName = ref({});
const joinAt = ref("");
const tab = ref("feed");
const coachId = ref("");
const router = useRouter();
const loadedSlug = ref("");

const showNotification = ref(false);
const notificationMessage = ref("");
const notificationType = ref("");
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
