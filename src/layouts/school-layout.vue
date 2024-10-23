<template>
  <!-- common full screen loader -->
  <ScreenLoader v-if="loadingStore.isLoading" />

  <div v-if="!loadingStore.isLoading">
    <!-- Notification component -->
    <Notification v-if="showNotification" :message="notificationMessage" :type="notificationType"
      :visible="showNotification" @close="closeNotification" :key="notificationKey" />
  </div>
  <main>
    <NavBarPublic></NavBarPublic>
    <div class="grid grid-cols-6 grid-rows-1 gap-0 mt-16">
      <div class="col-span-6 row-start-1 row-end-2s">
        <SchoolCover :data="schoolData" :schoolSlug="route.params.slug" @changeTab="setSelectedTab" />
      </div>
      <div class="col-start-1 col-end-2 row-start-2 row-end-3">
        <SchoolLeft :data="schoolData" :schoolSlug="route.params.slug" />
      </div>
      <div class="col-start-6 col-end-7 row-start-2 row-end-3">
        <SchoolRight :data="schoolData" :schoolSlug="route.params.slug" />
      </div>
      <div class="col-start-2 col-end-6 row-start-2 row-end-3 px-3 pt-3">
        <UserFeed v-if="tab === 'feed'" :posts="posts" @profileView="redirectPage" @listpost="loadInitfintePost"
          :commentHidden="isHidddenComment" />
        <Member v-if="tab == 'member'" :members="members" :logUserInTheSchool="logUserInTheSchool"
          @getMember="fetchSchooleDatils" />
        <Team v-if="tab == 'team'" :team="team" :members="members" :schoolId="schoolId" @getSchoolTeam="getSchoolTeam"
          :logUserInTheSchool="logUserInTheSchool" />
        <Academic v-if="tab == 'academic'" :academic="academic" />
        <mediaTab v-if="tab === 'media'" :galleryItems="galleryItems" :userSlug="route.params.slug" />


      </div>
    </div>
  </main>
  <FooterPublic></FooterPublic>
</template>

<script setup>
import NavBarPublic from '~/components/user/navbar.vue';
import FooterPublic from '~/components/user/user-footer.vue';
import { ref, watchEffect, computed, watch, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue'; // <-- Ensure this path is correct!

import SchoolCover from '~/components/profiles/schoolProfile/schoolCover.vue';
import SchoolLeft from '~/components/profiles/schoolProfile/schoolLeft.vue';
import SchoolRight from '~/components/profiles/schoolProfile/schoolRight.vue';
import Member from '~/components/user/profile/member.vue';
import Academic from '~/components/user/profile/academic.vue';
import Team from '~/components/user/profile/team.vue';
import UserFeed from '~/components/user/profile/userFeed.vue';
import { useRoute } from 'vue-router'
import mediaTab from '~/components/profiles/schoolProfile/mediaTab.vue';
import { useUserStore } from '~/stores/userStore'
import ScreenLoader from '@/layouts/screen_loader.vue';
import { useLoadingStore } from '@/stores/loadingStore';
const loadingStore = useLoadingStore();

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

const $publicService = nuxtApp.$publicService;
const $userService = nuxtApp.$userService;
const $feedService = nuxtApp.$feedService;

const bio = ref('');
const name = ref('')
const members = ref([])
const tuitionInState = ref('')
const tuitionOutState = ref('')
const costOfAttendance = ref('')
const address = ref('')
const graduationRate = ref('')
const academic = ref({})
const tab = ref('feed')
const posts = ref([])
const schoolData = ref({})
const joinAt = ref('')
const route = useRoute();
const conferenceId = ref('Unknown')
const divitionId = ref('Unknown')
const schoolId = ref('')
const team = ref([])
const profilePicture = ref(null)
const coverPicture = ref(null)
const currentPage = ref(1)
const lastPage = ref('')
const isHidddenComment = ref([])
const logUserInTheSchool = ref(false)
const academicData = ref([])
onMounted(() => {
  fetchSchooleDatils();
  //fetchPost();
});

const fetchSchooleDatils = async () => {
  try {
    const dataSets = await $publicService.get_school(route.params.slug);
    if (dataSets.school_info) {
      schoolId.value = dataSets.school_info.id || '';

      bio.value = dataSets.school_info.bio || 'School has not entered bio';
      name.value = dataSets.school_info.name
      const date = new Date(dataSets.school_info.joined_at);
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const year = date.getFullYear();
      const month = monthNames[date.getMonth()];
      const day = date.getDate();
      joinAt.value = `${year} ${month} ${day}`
      divitionId.value = dataSets.school_info.division_id || 'Unknown';
      conferenceId.value = dataSets.school_info.conference_id || 'Unknown';
    }

    if (dataSets.school_info.other_data) {
      tuitionInState.value = dataSets.school_info.other_data.tuition_in_state
      tuitionOutState.value = dataSets.school_info.other_data.tuition_out_state
      costOfAttendance.value = dataSets.school_info.other_data.cost_of_attendance
      address.value = dataSets.school_info.other_data.address
      graduationRate.value = dataSets.school_info.other_data.graduation_rate
      academic.value = dataSets.school_info.other_data
      if (dataSets.school_info.other_data.academics) {
        academicData.value = dataSets.school_info.other_data.academics ?? []
      }

    }

    if (dataSets.school_users_info) {
      members.value = dataSets.school_users_info
      // logUserInTheSchool.value =dataSets.school_users_info.some(user => user.slug == userStore.userSlug);
    }

    if (dataSets.media_info) {
      profilePicture.value = dataSets.media_info.profile_picture
      coverPicture.value = dataSets.media_info.cover_picture
      setGalleryItems(dataSets.media_info);
    }
    schoolData.value = {
      bio: bio.value,
      name: name.value,
      tuitionInState: tuitionInState.value,
      tuitionOutState: tuitionOutState.value,
      costOfAttendance: costOfAttendance.value,
      address: address.value,
      graduationRate: graduationRate.value,
      academic: academic.value,
      members: members.value,
      joinAt: joinAt.value,
      divisionId: divitionId.value,
      conferenceId: conferenceId.value,
      profile: profilePicture.value,
      cover: coverPicture.value,
      academicData: academicData.value
    }
    loadInitfintePost
    //fetchPost()
    getSchoolTeam()
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// const fetchPost = async () =>{
//       try {
//         const response = await $feedService.list_posts({});
//         const filteredData = response.filter(item => item.user_id === schoolId.value);
//         posts.value = filteredData || [];
//     } catch (error) {
//        console.error('Failed to load posts:', error.message);
//     }
// }

const loadInitfintePost = async () => {
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
    isHidddenComment.value = idsArray
    //  isLoading.value = false;
  } catch (error) {
    //isLoading.value = false;
    console.error('Failed to load posts:', error.message);
  }
}


const setSelectedTab = (selectedTab) => {
  console.log(selectedTab)
  tab.value = selectedTab;
};

const redirectPage = (url) => {
  router.push({
    path: url,

  });
}

const getSchoolTeam = async () => {
  try {
    console.log(72)

    const response = await $publicService.get_school_team(schoolId.value);
    team.value = response.team || [];
  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
}

const galleryItems = ref([]);

const setGalleryItems = (mediaInfo) => {
  console.log(galleryItems.value)
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