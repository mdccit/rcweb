<template>
  <div>
    <!-- Notification component -->
    <Notification v-if="showNotification" :message="notificationMessage" :type="notificationType"
      :visible="showNotification" @close="closeNotification" :key="notificationKey" />
  </div>
  <NavBarPublic></NavBarPublic>
  <main class="bg-graySnowDrift">
    <div class="grid grid-cols-6 grid-rows-1 gap-0 mt-16">
      <div class="col-span-6 row-start-1 row-end-2s">
        <ParentHeader :data="parentData" @changeTab="setSelectedTab" :parentId="parentId" :userSlug="route.params.slug"
          @updateData="fetchUserDetailsBySlug" />
      </div>
      <div class="col-start-1 col-end-2 row-start-2 row-end-3">
        <ParentLeft :data="parentData" :userSlug="route.params.slug" :parentId="parentId"
          @updateData="fetchUserDetailsBySlug" />
      </div>
      <div class="col-start-6 col-end-7 row-start-2 row-end-3">
        <ParentRight :data="parentData" :userSlug="route.params.slug" @updateData="fetchUserDetailsBySlug" />
      </div>
      <div class="col-start-2 col-end-6 row-start-2 row-end-3">
        <!-- <ParentFeed/> -->
        <div class="px-3 pt-3">
          <div class="pt-2">
            <UserFeed v-if="tab === 'feed'" :posts="posts" @profileView="redirectPage" @listpost="loadInitfintePost"
              :commentHidden="isHidddenComment" :tab="tab" />
          </div>
          <Connection v-if="tab === 'connection'" :playerId="parentId" @profileView="redirectPage" />
          <mediaTab v-if="tab === 'media'" :galleryItems="galleryItems" :userSlug="route.params.slug"
            @uploadMedia="fetchUserDetailsBySlug" />
          <ChilTab v-if="tab === 'child'" :getChild="child" :userSlug="route.params.slug"
            @updateData="fetchUserDetailsBySlug" />
        </div>

      </div>
    </div>
    <main>


    </main>

  </main>
  <FooterPublic />
</template>

<script setup>
import ParentFeed from '~/components/profiles/parentProfile/parentFeed.vue';
import ParentLeft from '~/components/profiles/parentProfile/parentLeft.vue';
import ParentRight from '~/components/profiles/parentProfile/parentRight.vue';
import ParentHeader from '~/components/profiles/parentProfile/parentCover.vue';
import NavBarPublic from '~/components/user/navbar.vue';
import FooterPublic from '~/components/user/user-footer.vue';
import { ref, watchEffect, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue'; // <-- Ensure this path is correct!
import { useRoute } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import UserFeed from '~/components/user/profile/userFeed.vue';
import mediaTab from '~/components/profiles/parentProfile/tabs/mediaTab.vue';
import Connection from '~/components/user/profile/connection.vue';
import ChilTab from '~/components/profiles/parentProfile/tabs/childTab.vue';

const router = useRouter();

const nuxtApp = useNuxtApp();
const $publicService = nuxtApp.$publicService;
const $feedService = nuxtApp.$feedService;

const userStore = useUserStore();
const route = useRoute();

const bio = ref('');
const country = ref('');
const city = ref('');
const name = ref('')
const joinDate = ref('')
const slug = ref('')
const userId = ref('');
const child = ref([]);
const parentId = ref('')
const parentData = ref({})
const tab = ref('feed');
const firstName = ref('');
const lastName = ref('');
const otherName = ref('')
const addresslLine1 = ref('')
const addressLine2 = ref('')
const stateProvince = ref('')
const postalCode = ref('')
const countryiId = ref('')
const email = ref('')
const currentPage = ref(1)
const lastPage = ref('')
const isHidddenComment = ref([])
const posts = ref([])

onMounted(() => {
  fetchUserDetailsBySlug()
  userId.value = userStore.user?.user_id || null;

});

const fetchUserDetailsBySlug = async () => {
  try {
    const dataSets = await $publicService.get_parent(route.params.slug);
    if (dataSets.user_basic_info) {
      bio.value = dataSets?.user_basic_info?.bio || 'User has not entered bio';
      name.value = dataSets?.user_basic_info?.display_name || 'Anonymous';
      parentId.value = dataSets?.user_basic_info?.id || '';
      firstName.value = dataSets?.user_basic_info?.first_name || '';
      lastName.value = dataSets?.user_basic_info?.last_name || '';
      otherName.value = dataSets?.user_basic_info?.other_names || '';
      email.value = dataSets?.user_basic_info?.email
      const date = new Date(dataSets.user_basic_info.joined_at);

      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const year = date.getFullYear();
      const month = monthNames[date.getMonth()];
      const day = date.getDate();
      joinDate.value = `${year} ${month} ${day}`

      // fetchPost();
      //loadInitfintePost()
    }

    if (dataSets.user_address_info) {
      city.value = dataSets?.user_address_info?.city || '';
      country.value = dataSets?.user_phone_info?.country || '';
      addresslLine1.value = dataSets?.user_phone_info?.address_line_1 || '';
      addressLine2.value = dataSets?.user_phone_info?.address_line_2 || '';
      stateProvince.value = dataSets?.user_phone_info?.state_province || '';
      postalCode.value = dataSets?.user_phone_info?.postal_code || '';
      countryiId.value = dataSets?.user_phone_info?.country_id || '';
    }

    if (dataSets.child_info) {
      child.value = dataSets.child_info
      console.log("child value")
      console.log(child.value)
    }
    parentData.value = {
      bio: bio.value,
      country: country.value,
      city: city.value,
      name: name.value,
      joinDate: joinDate.value,
      cover_picture: dataSets.media_info.cover_picture,
      profile_picture: dataSets.media_info.profile_picture,
      first_name: firstName.value,
      last_name: lastName.value,
      other_name: otherName.value,
      address_line_1: addresslLine1.value,
      address_line_2: addressLine2.value,
      state_province: stateProvince.value,
      postal_code: postalCode.value,
      country_id: countryiId.value,
      email: email.value
    }

    loadInitfintePost()
    if (dataSets.media_info) {
      setGalleryItems(dataSets.media_info);
    }
  } catch (error) {
    console.log(error)
    console.error('Error fetching data:', error.message);
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

const loadInitfintePost = async () => {
  try {
    //  isLoading.value = true;
    const response = await $feedService.list_posts(currentPage.value);
    //const filteredData = response.filter(item => item.user_id === coachId.value);
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
</script>