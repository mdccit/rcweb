<template>
    <!-- common full screen loader -->
    <ScreenLoader v-if="loadingStore.isLoading" />
    <!-- / common full screen loader -->
  
    <div >
        <!-- Notification component -->
        <Notification v-if="showNotification" :message="notificationMessage" :type="notificationType"
            :visible="showNotification" @close="closeNotification" :key="notificationKey" />
    </div>
    <main>
        <NavBarPublic></NavBarPublic>
        <div class="grid grid-cols-6 grid-rows-2 gap-0 mt-16">
            <div class="col-span-6 row-start-1 row-end-2s">
                <CoachCover />
            </div>
            <div class="col-start-1 col-end-2 row-start-2 row-end-3">
                <CoachLeft :data="coachData"/>
            </div>
            <div class="col-start-6 col-end-7 row-start-2 row-end-3"> 
                <CoachRight />
            </div>
            <div class="col-start-2 col-end-6 row-start-2 row-end-3">
                <!-- <CoachFeed /> -->
            </div>
        </div>
    </main>
    <FooterPublic></FooterPublic>
</template>

<script setup>
import NavBarPublic from '~/components/user/navbar.vue';
import FooterPublic from '~/components/user/user-footer.vue';
import { ref, watchEffect } from 'vue';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue'; // <-- Ensure this path is correct!
import CoachCover from '~/components/profiles/coach/coachCover.vue';
import CoachLeft from '~/components/profiles/coach/coachLeft.vue';
import CoachRight from '~/components/profiles/coach/coachRight.vue';
import CoachFeed from '~/components/profiles/coach/coachFeed.vue';
import { useUserStore } from '~/stores/userStore';
import mediaTab from '~/components/profiles/player/tabs/mediaTab.vue';
import Connection from '~/components/user/profile/connection.vue';
import UserFeed from '~/components/user/profile/userFeed.vue';
import { useRoute } from 'vue-router';
import ScreenLoader from '@/layouts/screen_loader.vue';
import { useLoadingStore } from '@/stores/loadingStore';
const loadingStore = useLoadingStore();

const route = useRoute();

const nuxtApp = useNuxtApp();
const $publicService = nuxtApp.$publicService;
const $userService = nuxtApp.$userService;
const $feedService = nuxtApp.$feedService;
const userStore = useUserStore();

const showNotification = ref(false);
const notificationMessage = ref('');
const notificationType = ref('');
const notificationKey = ref(0);
const slug = ref('');
const userId = ref('')
const bio = ref('');
const country = ref('');
const city = ref('');
const name = ref('')
const role = ref('')
const colleage = ref('')
const connections = ref([])
const posts = ref([])
const connectionStatus = ref(false)
const connectionType = ref(null)
const connectionButtonName = ref('Connect')
const coachData=ref({})
// Sync the state from the notification plugin to the layout
watchEffect(() => {
    showNotification.value = nuxtApp.$notification.showNotification.value;
    notificationMessage.value = nuxtApp.$notification.notificationMessage.value;
    notificationType.value = nuxtApp.$notification.notification_type.value;
    notificationKey.value = nuxtApp.$notification.notificationKey.value;
});

onMounted(() => {
  slug.value = route.params.slug;
  fetchCoacheDetailsFromProps();
  
  userId.value = userStore.user?.user_id || null;
  
});

const fetchCoacheDetailsFromProps = async () => {
    try {
        const dataSets = await $publicService.get_coache(slug.value);
        if (dataSets.user_basic_info) {
            coachData.value = dataSets.user_basic_info;
            // Safely set values with null checks
            bio.value = dataSets?.user_basic_info?.bio || 'N/A';
            country.value = dataSets?.user_phone_info?.country || '';
            city.value = dataSets?.user_address_info?.city || '';
            name.value = dataSets?.user_basic_info?.display_name || 'Anonymous';
            role.value = dataSets?.user_basic_info?.user_role || '';
            colleage.value = dataSets?.coach_info?.school_name || '';
        }
      
    } catch (error) {
        console.error('Error fetching coach details:', error);
    }
};

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