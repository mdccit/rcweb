<template>
  <div>
  <div>
    <!-- Notification component -->
    <Notification v-if="showNotification" :message="notificationMessage" :type="notificationType"
      :visible="showNotification" @close="closeNotification" :key="notificationKey" />
  </div>

  <main>
    <NavBarPublic></NavBarPublic>
    <div class="grid grid-cols-6 grid-rows-2 gap-0 mt-16">
      <div class="col-span-6 row-start-1 row-end-2s">
        <BusinessUserCover :data="businessUserData" @changeTab="setSelectedTab" :businessUserId="businessUserId"
          :userSlug="route.params.slug" />
      </div>
      <div class="col-start-1 col-end-2 row-start-2 row-end-3">
        <BusinessUserLeft :data="businessUserData" :userSlug="route.params.slug" />
      </div>
      <div class="col-start-6 col-end-7 row-start-2 row-end-3">
        <BusinessUserRight :data="businessUserData" :userSlug="route.params.slug" />
      </div>
      <div class="col-start-2 col-end-6 row-start-2 row-end-3">
        <UserFeed v-if="tab === 'feed'" :posts="posts" @profileView="redirectPage" @listpost="loadInfinitePost"
          :commentHidden="isHiddenComment" />
        <Connection v-if="tab === 'connection'" :playerId="businessUserId" @profileView="redirectPage" />
        <mediaTab v-if="tab === 'media'" :galleryItems="galleryItems" :userSlug="route.params.slug"
          @uploadMedia="fetchUserDetailsBySlug" />
      </div>
    </div>
  </main>
  <FooterPublic></FooterPublic>
</div>
</template>

<script setup>
import NavBarPublic from '~/components/user/navbar.vue';
import FooterPublic from '~/components/user/user-footer.vue';
import { ref, watchEffect, onMounted, reactive } from 'vue';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue'; // <-- Ensure this path is correct!
import BusinessUserRight from '~/components/profiles/businessUserProfile/businessUserRight.vue';
import BusinessUserFeed from '~/components/profiles/businessUserProfile/businessUserFeed.vue';
import BusinessUserLeft from '~/components/profiles/businessUserProfile/businessUserLeft.vue';
import BusinessUserCover from '~/components/profiles/businessUserProfile/businessUserCover.vue';
import Connection from '~/components/user/profile/connection.vue';
import UserFeed from '~/components/user/profile/userFeed.vue';
import { useRoute } from 'vue-router'
import mediaTab from '~/components/profiles/businessUserProfile/tabs/mediaTab.vue';

// Access authService from the context
const nuxtApp = useNuxtApp();
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore();
const $publicService = nuxtApp.$publicService;
const $userService = nuxtApp.$userService;
const $feedService = nuxtApp.$feedService;

const showNotification = ref(false);
const notificationMessage = ref("");
const notificationType = ref("");
const notificationKey = ref(0);

const bio = ref('');
const country = ref('');
const position = ref('');
const name = ref('');
const role = ref('');
const business = ref('');
const connections = ref([]);
const posts = ref([]);
const route = useRoute();
const joinAt = ref('');
const businessUserData = reactive({
  bio: '',
  country: '',
  name: '',
  role: '',
  business: '',
  position: '',
  joinAt: '',
  slug: '',
  profile: null,
  cover: null,
  businessSlug: ''
});
const businessUserId = ref('');
const tab = ref('feed');
const profilePicture = ref(null);
const coverPicture = ref(null);
const businessSlug = ref('');
const setSelectedTab = (selectedTab) => {
  tab.value = selectedTab;
};
const currentPage = ref(1);
const lastPage = ref('');
const isHiddenComment = ref([])
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

  fetchBusinessUserDetails();
  fetchConnections();
  // fetchPost();
  fetchUserDetailsBySlug()

});

const fetchBusinessUserDetails = async () => {
  try {
    const response = await $publicService.get_business_user(route.params.slug); // Replaced 'dataSets' with 'response'

    if (response.user_basic_info) {
      businessUserId.value = response?.user_basic_info?.id || '';
      bio.value = response.user_basic_info.bio || 'User has not entered bio';
      name.value = response.user_basic_info.display_name;
      role.value = response.user_basic_info.user_role;
      
      const date = new Date(response.user_basic_info.joined_at);
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const year = date.getFullYear();
      const month = monthNames[date.getMonth()];
      const day = date.getDate();
      joinAt.value = `${year} ${month} ${day}`;
    }

    if (response.business_manager_info) {
      position.value = response.business_manager_info.position;
      business.value = response.business_manager_info.business_name;
      businessSlug.value = response.business_manager_info.business_slug;
    }

    if (response.user_phone_info) {
      country.value = response.user_phone_info.country;
    }

    if (response.media_info) {
      profilePicture.value = response.media_info.profile_picture;
      coverPicture.value = response.media_info.cover_picture;
    }

    businessUserData.value = {
      bio: bio.value,
      country: country.value,
      name: name.value,
      role: role.value,
      business: business.value,
      position: position.value,
      joinAt: joinAt.value,
      slug: route.params.slug,
      profile: profilePicture.value,
      cover: coverPicture.value,
      businessSlug: businessSlug.value
    };

    loadInfinitePost();

  } catch (error) {
    console.log(error);
    console.error('Error fetching data:', error.message);
  }
};


const fetchUserDetailsBySlug = async () => {
  try {
    const response = await $publicService.get_user_profile(route.params.slug);
    if (response.media_info) {
      setGalleryItems(response.media_info);
    } else {
      console.log('No media info available');
    }
  } catch (error) {
    console.error('Error fetching user details by slug:', error.message);
    // Optionally, trigger a notification
    nuxtApp.$notification.triggerNotification(error.message, 'failure');
  }
};


// Array of gallery items (images and video)
const galleryItems = ref([]);

const setGalleryItems = (mediaInfo) => {
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
};

const redirectPage = (url) =>{
    router.push({
      path: url,

    });
}

const fetchConnections = async () => {
  // try {
  //     const dataSets = await $userService.get_connection('9cf182dd-aff5-43b7-a3ed-4c693b9530c3');
  //     connections.value = dataSets.connection
  // } catch (error) {
  //     console.log(error)

  //     console.error('Error fetching data:', error.message);
  // }
}

// const fetchPost = async () => {
//   try {
//     const response = await $feedService.list_posts({});
//     const filteredData = response.filter(item => item.user_id === businessUserId.value);
//     posts.value = filteredData || [];

//   } catch (error) {
//     console.error('Failed to load posts:', error.message);
//   }
// }

const loadInfinitePost  = async () => {
  try {
    //  isLoading.value = true;
    const response = await $feedService.list_posts(currentPage.value);
    //const filteredData = response.filter(item => item.user_id === businessUserId.value);
    posts.value.push(...response.data);

    lastPage.value = response.last_page
    currentPage.value = response.current_page + 1
    const idsArray = [];
    for (const post of posts.value) {
      idsArray[post.id] = false
    }
    isHiddenComment.value = idsArray
    //  isLoading.value = false;
  } catch (error) {
    //isLoading.value = false;
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
