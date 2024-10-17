<template>
    <header class="bg-gray-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <div class="flex items-center gap-4">
                    <NuxtLink to="/admin/schools">
                        <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg>
                    </NuxtLink>
                    <h2 class="font-bold text-black text-lg self-center"> Editing: {{ name }} </h2>
                </div>

                <div class="">
                    <NuxtLink :to="`/app/profile/school/${slug}`"><button type="submit"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-blue-300 focus:ring-blue-200">
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

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-7 mb-5 ">
        <!-- Use the SchoolNavigation component -->
        <SchoolNavigation :schoolId="school_id" />
        <div class="mt-10"></div>

        <mediaTab :galleryItems="galleryItems"  @updateMedia="fetchSchoolDetails"/>
        <div class="my-8"></div>
      
    </div>

</template>

<script setup>

import { ref, computed, watch, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { useRoute } from 'vue-router';
import SchoolNavigation from '~/components/admin/school/SchoolNavigation.vue';
import mediaTab from '~/components/admin/school/mediaTab.vue';

const route = useRoute(); // Use useRoute to access query parameters

// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;
const errors = ref([]);
const name = ref('');
const action = ref(route.params.action || 'view'); // default to 'view' if action not provided
const school_id = ref(route.params.school_id || '');
const slug = ref('')
onMounted(() => {

    // Update the refs directly
    action.value = route.query.action || 'view';
    school_id.value = route.query.school_id || '';

    if (action.value === 'view' || action.value === 'edit') {
        fetchSchoolDetails();
    }
});

// Fetch School Details
const fetchSchoolDetails = async () => {
    errors.value = [];
    try {
        const data = await $adminService.get_school_details(school_id.value);
        name.value = data.school_info.name || '';
        slug.value = data.school_info.slug || '';
        if( data.media_info){
            setGalleryItems(data.media_info)
        }

    } catch (error) {
        console.log(error)
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
};

definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
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