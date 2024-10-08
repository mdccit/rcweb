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
                <BusinessCover :data="businessData" @changeTab="setSelectedTab"  :businessSlug="route.params.slug" @updateData="fetchbusinessDetatils"/>
            </div>
            <div class="col-start-1 col-end-2 row-start-2 row-end-3">
                <BusinessLeft :data="businessData" :businessSlug="route.params.slug"  @updateData="fetchbusinessDetatils"/>
            </div>
            <div class="col-start-6 col-end-7 row-start-2 row-end-3"> 
                <BusinessRight :data="businessData" :businessSlug="route.params.slug" />
            </div>
            <div class="col-start-2 col-end-6 row-start-2 row-end-3">
                <UserFeed v-if="tab === 'feed'" :posts="posts" @profileView="redirectPage" @listpost="fetchPost" />
                <Member v-if="tab == 'member'" :members="members"/>
                <mediaTab v-if="tab === 'media'" :galleryItems="galleryItems" :userSlug="route.params.slug"
                     @uploadData="fetchbusinessDetatils" />

            </div>
        </div>
    </main>
    <FooterPublic></FooterPublic>
</template>

<script setup>
import NavBarPublic from '~/components/user/navbar.vue';
import FooterPublic from '~/components/user/user-footer.vue';
import { ref, watchEffect ,onMounted } from 'vue';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue'; // <-- Ensure this path is correct!
import BusinessCover from '~/components/profiles/businessProfile/businessCover.vue';
import BusinessLeft from '~/components/profiles/businessProfile/businessLeft.vue';
import BusinessRight from '~/components/profiles/businessProfile/businessRight.vue';
import { useRoute } from 'vue-router'
import Member from '~/components/user/profile/member.vue';
import UserFeed from '~/components/user/profile/userFeed.vue';
import mediaTab from '~/components/profiles/businessProfile/tabs/mediaTab.vue';

const route = useRoute();

const nuxtApp = useNuxtApp();
const $publicService = nuxtApp.$publicService;
const $userService = nuxtApp.$userService;
const $feedService = nuxtApp.$feedService;

const showNotification = ref(false);
const notificationMessage = ref('');
const notificationType = ref('');
const notificationKey = ref(0);
const bio =ref('');
const name =ref('')
const members =ref([])
const tab = ref('feed')
const posts = ref([])
const joinAt = ref('')
const businessData =ref({})
const profile = ref(null)
const cover = ref(null)

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

onMounted(() => {
    fetchbusinessDetatils();
   fetchPost();

});

const fetchbusinessDetatils = async () =>{
    try {
       const dataSets = await $publicService.get_business(route.params.slug);
       console.log(dataSets.business_info.joined_at)
        if(dataSets.business_info){
            bio.value =dataSets.business_info.bio
            name.value =dataSets.business_info.name
            const date = new Date(dataSets.business_info.joined_at);
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            const year = date.getFullYear();
            const month = monthNames[date.getMonth()];
            const day = date.getDate();
            joinAt.value = `${year} ${month} ${day}`
        }
        console.log(dataSets)

        if(dataSets.business_managers_info){
            members.value =dataSets.business_managers_info
        }

        if(dataSets.media_info){
            console.log(dataSets.media_info)
            setGalleryItems(dataSets.media_info);
            profile.value =dataSets.media_info.profile_picture
            cover.value =dataSets.media_info.cover_picture
        }
        
        businessData.value ={
            name:name.value,
            bio:bio.value,
            joinAt:joinAt.value,
            profile:profile.value,
            cover:cover.value,
        }
        
        console.log(dataSets)
    } catch (error) {
        console.log(error)
       console.error('Error fetching data:', error.message);
    } 
}

const setSelectedTab = (selectedTab) => {
    console.log(tab.value)
  tab.value = selectedTab;
};

const redirectPage = (url) =>{
    router.push({
      path: url,

    });
}

const fetchPost = async () => {
  try {
    const response = await $feedService.list_posts({});
    //console.log(response)
    //const filteredData = response.filter(item => item.user_id === coachId.value);
    // posts.value = response
   
  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
}

const galleryItems = ref([]);

const setGalleryItems = (mediaInfo) => {
    console.log(7458)
  galleryItems.value = mediaInfo.media_urls.map(media => {
    if (media.media_type === 'image') {
      return {
        type: 'image',
        href: media.url,
        src: media.url, // Replace with thumbnail URL if available
      };
    } else if (media.media_type === 'video') {
      return {
        type: 'video',
        href: media.url,
        src: media.url || 'https://via.placeholder.com/200x150.png?text=Video', // Use server-provided thumbnail or placeholder
      };
    }
  });
  console.log(galleryItems.value)
};
</script>

<style scoped>
/* Add any styles here if needed */
temp-row {
    grid-template-rows: 90px auto !important;
}
</style>