<template>
  <header class="bg-gray-200">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="flex w-full justify-between gap-8">
        <div class="flex items-center gap-4">
          <NuxtLink to="/admin/business">
            <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
          </NuxtLink>
          <h2 class="font-bold text-lg self-center text-black"> Editing: {{ name }}</h2>
        </div>
        <div>
          <a href="https://qa1.recruited.qualitapps.com/app/business/9c7d0c22-c388-4383-8da0-4d83319cf4ba">
            <button type="submit"
              class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
              View
              <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M17 7l-10 10"></path>
                <path d="M8 7l9 0l0 9"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  </header>

  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <!-- Use the BusinessNavigation component -->
      <BusinessNavigation :businessId="business_id" />
      <div class="mt-10"></div>

      <mediaTab :galleryItems="galleryItems" @updateMedia="fetchBusinessDetails" />

      <div class="my-8"></div>


    </div>
    <!-- Notification Component -->
    <Notification v-if="showNotification" :message="notificationMessage" :duration="3000" />
  </div>
</template>


<script setup>


</script>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

import Notification from '~/components/common/Notification.vue';
import BusinessNavigation from '~/components/admin/business/BusinessNavigation.vue';
import mediaTab from '~/components/admin/business/mediaTab.vue';


definePageMeta({
  ssr: false,
  layout: 'admin',
  middleware: ['role'],
  requiredRole: ['admin'],
});

const route = useRoute();
const router = useRouter();
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const business_id = ref('');
const name = ref('');
const action = ref('');

const showNotification = ref(false);
const notificationMessage = ref('');
const loading = ref(false);
const notification_type = ref('');
const notificationKey = ref(0);

// Fetch business details
const fetchBusinessDetails = async () => {
  try {
    const data = await $adminService.get_business_details(business_id.value);
    business_id.value = data.business_info.id;
    name.value = data.business_info.name;
    if( data.media_info){
        setGalleryItems(data.media_info)
    }
  } catch (error) {
    console.error('Error fetching business details:', error.message);
  }
};

// Fetch details on component mount
onMounted(() => {
    action.value = route.query.action || 'view';
    business_id.value = route.query.business_id || '';

  fetchBusinessDetails();
});


const galleryItems = ref([]); 

const setGalleryItems = (mediaInfo) => {
  galleryItems.value = mediaInfo.media_urls.map(media => {
    if (media.media_type === 'image') {
      return {
        type: 'image',
        href: media.url,
        src: media.url, // Replace with thumbnail URL if available
        media_id: media.media_id,
      };
    } else if (media.media_type === 'video') {
      return {
        type: 'video',
        href: media.url,
        src: media.url || 'https://via.placeholder.com/200x150.png?text=Video', // Use server-provided thumbnail or placeholder
         media_id: media.media_id,
      };
    }
  });

  
};



</script>


<style scoped>
.container {
  max-width: 600px;
}
</style>