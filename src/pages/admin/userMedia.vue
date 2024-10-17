<template>
    <header class="bg-gray-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <div class="flex items-center gap-4"><NuxtLink to="/admin/users?role=1"><svg
                            class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg></NuxtLink>
                    <h2 class="font-bold text-lg self-center"> Editing:{{ display_name }} </h2>
                </div>
                <div class="">
                    <NuxtLink :to="`/app/profile/${slug}`"><button type="submit"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                            View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 7l-10 10"></path>
                                <path d="M8 7l9 0l0 9"></path>
                            </svg>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-7">
        <!-- User Edit Section Component -->
        <userEditSection :user_id="user_id" />

        <usermediaTab :galleryItems="galleryItems"  @updateMedia="fetchUserDetails"/>
        <div class="my-16"></div>

    </div>
</template>

<script setup>

import { ref, computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import { defineProps, defineEmits, defineExpose } from 'vue';
import { useRoute } from 'vue-router';
import userEditSection from '~/components/admin/user/userEditSections.vue';

import usermediaTab from '~/components/admin/user/usermediaTab.vue';

const route = useRoute(); // Use useRoute to access query parameters
const router = useRouter();




// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;
const $authService = nuxtApp.$authService;
// Reference to the modal component
const modalRef = ref(null);
const emit = defineEmits(['close']);
const media = ref([])
const action = ref(route.params.action || 'view'); // default to 'view' if action not provided
const user_id = ref(route.params.user_id || '');
const slug= ref('')
onMounted(() => {
    action.value = route.query.action || 'view';
    user_id.value = route.query.user_id || '';

    if (action.value === 'view' || action.value === 'edit') {
        fetchUserDetails();
    }
});



// Watch for changes in the route query parameters
watch([() => route.query.action, () => route.query.user_id], ([newAction, newUserId]) => {
    action.value = newAction || 'view';
    user_id.value = newUserId || '';
  
     if (action.value === 'edit' || action.value === 'view') {
        fetchUserDetails();  // Fetch user details for "edit" & "view"
    }
});


const display_name =ref('')

// Fetch user details function
const fetchUserDetails = async () => {
    try {
        const response = await $adminService.get_user_details(user_id.value);
        const user = response.user_basic_info;
        display_name.value = response.user_basic_info.display_name
        slug.value = response.user_basic_info.slug
        console.log(response.media_info)
        if( response.media_info){
            setGalleryItems(response.media_info)
        }

    } catch (error) {
        console.log(error)
        nuxtApp.$notification.triggerNotification(error.message, 'failure');
    }
};

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

  console.log( galleryItems.value)
};


definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});

const goBack = () =>{
    router.back();
}

</script>

<style scoped>
.container {
    max-width: 600px;
}

.error-messages {
    margin-top: 20px;
    color: red;
}

.error-title {
    font-weight: bold;
}

.error-list {
    list-style-type: disc;
    /* Ensure bullet points are shown */
    margin-left: 20px;
    /* Indent the list */
}

.error-item {
    margin-bottom: 5px;
}
</style>