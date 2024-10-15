<template>
    <div>
        <!-- Notification component -->
        <Notification v-if="showNotification" :message="notificationMessage" :type="notificationType"
            :visible="showNotification" @close="closeNotification" :key="notificationKey" />
    </div>
    <main>
        <NavBarPublic></NavBarPublic>
        <div class="grid grid-cols-6 grid-rows-1 gap-0 mt-16 bg-graySnowDrift ">
            <div class="col-span-6 row-start-1 row-end-2s">
                <CoachCover :data="coachData"  @changeTab="setSelectedTab" :coachId="coachId" :userSlug="route.params.slug"/>
            </div>
            <div class="col-start-1 col-end-2 row-start-2 row-end-3">
                <CoachLeft :data="coachData"  :userSlug="route.params.slug"  />
            </div>
            <div class="col-start-6 col-end-7 row-start-2 row-end-3"> 
                <CoachRight :data="coachData"   :userSlug="route.params.slug"  />
            </div>
            <div class="col-start-2 col-end-6 row-start-2 row-end-3 px-3 pt-3">
                <UserFeed v-if="tab == 'feed'" :posts="posts" @profileView="redirectPage" @listpost="newLoader" :commentHidden="isHidddenComment" />
                <Connection v-if="tab == 'connection'" :playerId="coachId" @profileView="redirectPage"/>
                <mediaTab v-if="tab == 'media'" :galleryItems="galleryItems" :userSlug="route.params.slug" @uploadMedia="fetchUserDetailsBySlug" :commentHidden="isHidddenComment" :coacheId="coachId" />
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
import mediaTab from '~/components/profiles/coach/tabs/mediaTab.vue';
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
const posts = ref([])
const coachData=ref({})
const sportName = ref({})
const joinAt = ref('')
const tab = ref('feed');
const coachId = ref('')
const router = useRouter();
const loadedSlug = ref('');
const birthDay = ref('');
const currentPage = ref(1)
const lastPage  =ref('')
const isHidddenComment = ref([])
const load = ref(false)
const nationality_id =ref('')
const gender =ref('none')
const dateOfBirth =ref('')
// Sync the state from the notification plugin to the layout
watchEffect(() => {
    showNotification.value = nuxtApp.$notification.showNotification.value;
    notificationMessage.value = nuxtApp.$notification.notificationMessage.value;
    notificationType.value = nuxtApp.$notification.notification_type.value;
    notificationKey.value = nuxtApp.$notification.notificationKey.value;
});

onMounted(() => {
  slug.value = route.params.slug;
  if(slug.value){
    fetchUserDetailsBySlug()

  }else{
    console.log("slug not found")
  }
  userId.value = userStore.user?.user_id || null;
  
});

const fetchUserDetailsBySlug = async () => {
  try {
    const dataSets = await $publicService.get_user_profile(route.params.slug);
    console.log(dataSets)
    if (dataSets.user_basic_info) {
        bio.value = dataSets?.user_basic_info?.bio || 'User has not entered bio';
        name.value = dataSets?.user_basic_info?.display_name || 'Anonymous';
        role.value = dataSets?.user_basic_info?.user_role || '';  
        coachId.value = dataSets?.user_basic_info?.id || ''; 
        loadedSlug.value = dataSets?.user_basic_info?.slug || ''; 
        nationality_id.value = dataSets?.user_basic_info?.nationality_id || null; 
        gender.value = dataSets?.user_basic_info?.gender || 'none'; 
        dateOfBirth.value =dataSets.user_basic_info.date_of_birth
        country.value = dataSets?.user_basic_info?.country || '';
        const date = new Date(dataSets.user_basic_info.joined_at);
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const year = date.getFullYear();
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        joinAt.value = `${year} ${month} ${day}`
        const birthDate = new Date(dataSets.user_basic_info.date_of_birth);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
           age--;
        }
        birthDay.value = age ?? 'User has not entered birthday'
       // fetchPost();
       loadInitfintePost()
    }

    if(dataSets.profile_info){
        colleage.value = dataSets?.profile_info?.school_name || '';
        sportName.value = dataSets?.profile_info?.sport_name || '';
    }

    if(dataSets.user_address_info){
        city.value = dataSets?.user_address_info?.city || '';
    }

    

    coachData.value ={
        bio: bio.value,
        country:country.value,
        city:city.value,
        name:name.value,
        role:role.value,
        colleage:colleage.value,
        sport:sportName.value,
        joinAt:joinAt.value,
        slug: loadedSlug,
        media_info: dataSets.media_info,
        school_slug: dataSets.profile_info.school_slug,
        birth_day :birthDay.value,
        gender:gender.value,
        nationality_id:nationality_id.value,
        dateOfBirth:dateOfBirth.value
    }
    
    if (dataSets.media_info) {
      setGalleryItems(dataSets.media_info);
    } else {
      console.log('No media info available');
    }
  } catch (error) {
    console.log(error)
    console.error('Error fetching data:', error.message);
  }
}

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

const setSelectedTab = (selectedTab) => {
  tab.value = selectedTab;
};
const closeNotification = () => {
    showNotification.value = false; // Hide the notification
};

// const fetchPost = async () => {
//   try {
//     const response = await $feedService.list_posts({});
//     //const filteredData = response.filter(item => item.user_id === coachId.value);
//    // posts.value = filteredData || [];
   
//   } catch (error) {
//     console.error('Failed to load posts:', error.message);
//   }
// }

const newLoader = ()=>{
  if(load.value ==false){
    loadInitfintePost()
  }
}

const loadInitfintePost = async () =>{
  load.value = true
    try {
      //  isLoading.value = true;
      const response = await $feedService.list_posts(currentPage.value);
      const filteredData = response.data.filter(item => item.user_id === coachId.value);
       posts.value.push(...filteredData);

      lastPage.value =response.last_page
      currentPage.value =response.current_page +1
      const idsArray = [];
      for (const post of posts.value) {
        idsArray[post.id] = false
      }
      isHidddenComment.value = idsArray
      //  isLoading.value = false;
    } catch (error) {
       //isLoading.value = false;
      console.error('Failed to load posts:', error.message);
    }
    setTimeout(()=>{
      load.value =false
    },10000)
  }

const redirectPage = (url) =>{
    router.push({
      path: url,

    });
}
</script>

<style scoped>
/* Add any styles here if needed */
temp-row {
    grid-template-rows: 90px auto !important;
}
</style>