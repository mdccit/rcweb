<template>
    <PlayerTabNavigation :tabs="tabs" :initialTab="tab" @tabChanged="handleTab" />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import SocialHubNavbar from '~/components/user/navbar.vue';
import Filter from '~/components/user/feed/filter.vue';
import FooterBar from '~/components/user/user-footer.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';
import checkSession from '~/middleware/checkSession';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue';
import PlayerTabNavigation from '~/components/profiles/navigation/PlayerTabNavigation.vue';

defineNuxtRouteMiddleware(checkSession);
const nuxtApp = useNuxtApp();
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const feet = ref(0)
const pounds = ref(0)
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