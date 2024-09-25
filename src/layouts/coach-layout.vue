<template>
    <div>
        <!-- Notification component -->
        <Notification v-if="showNotification" :message="notificationMessage" :type="notificationType"
            :visible="showNotification" @close="closeNotification" :key="notificationKey" />
    </div>
    <main>
        <NavBarPublic></NavBarPublic>
        <div class="grid grid-cols-6 grid-rows-2 gap-0 mt-16">
            <div class="col-span-6 row-start-1 row-end-2s">
                <CoachCover :data="coachData"  @changeTab="setSelectedTab" :coachId="coachId" />
            </div>
            <div class="col-start-1 col-end-2 row-start-2 row-end-3">
                <CoachLeft :data="coachData" />
            </div>
            <div class="col-start-6 col-end-7 row-start-2 row-end-3"> 
                <CoachRight :data="coachData" />
            </div>
            <div class="col-start-2 col-end-6 row-start-2 row-end-3">
                <CoachFeed v-if="tab === 'feed'" :posts="posts" />
                <Connection v-if="tab === 'connection'" :playerId="coachId" />
        <!-- <mediaTab v-if="tab === 'media'" :galleryItems="galleryItems" :userSlug="route.params.slug" @uploadMedia="fetchUserDetailsBySlug" /> -->
            </div>
        </div>
    </main>
    <FooterPublic></FooterPublic>
</template>

<script setup>
import NavBarPublic from '~/components/user/navbar.vue';
import FooterPublic from '~/components/user/user-footer.vue';
import { ref, watchEffect, onMounted } from 'vue';
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
import { useRoute } from 'vue-router'

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
const sportName = ref({})
const joinAt = ref('')
const tab = ref('feed');
const coachId = ref('')

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
            bio.value = dataSets?.user_basic_info?.bio || 'User has not entered bio';
            name.value = dataSets?.user_basic_info?.display_name || 'Anonymous';
            role.value = dataSets?.user_basic_info?.user_role || '';  
            coachId.value =dataSets?.user_basic_info?.id || ''; 
            const date = new Date(dataSets.user_basic_info.joined_at);
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            const year = date.getFullYear();
            const month = monthNames[date.getMonth()];
            const day = date.getDate();
            joinAt.value = `${year} ${month} ${day}`
            fetchPost();

        }

        if(dataSets.coach_info){
            colleage.value = dataSets?.coach_info?.school_name || '';
            sportName.value = dataSets?.coach_info?.sport_name || '';
        }

        if(dataSets.user_address_info){
            city.value = dataSets?.user_address_info?.city || '';
        }

        if(dataSets.user_phone_info){
            country.value = dataSets?.user_phone_info?.country || '';
        }

        coachData.value ={
            bio: bio.value,
            country:country.value,
            city:city.value,
            name:name.value,
            role:role.value,
            colleage:colleage.value,
            sport:sportName.value,
            joinAt:joinAt.value
        }
      
    } catch (error) {
        console.error('Error fetching coach details:', error);
    }
};

const setSelectedTab = (selectedTab) => {
  tab.value = selectedTab;
};
const closeNotification = () => {
    showNotification.value = false; // Hide the notification
};

const fetchPost = async () => {
  try {
    const response = await $feedService.list_posts({});
    posts.value = response || [];

  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
}
</script>

<style scoped>
/* Add any styles here if needed */
temp-row {
    grid-template-rows: 90px auto !important;
}
</style>