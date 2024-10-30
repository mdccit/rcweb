<template>
    <!-- **************************************************************************************** -->
    <section class="w-full mb-5 p-3">
        <div class="relative">
            <!-- Cover Picture -->
            <img class="w-full h-[400px] rounded-xl"
                :src="coverPictureUrl"
                :alt="coverPictureUrl">

            <!-- Gradient Overlay -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-xl">
            </div>

            <!-- SVG Button (for editing the cover picture) -->
            <div class="absolute top-0 right-0 mt-[8px] mr-[8px] w-6 h-6 bg-timberwolf rounded-full flex justify-center items-center cursor-pointer text-steelBlue"
                @click="toggleModal('cover')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </div>
        </div>

        <span>
            <div class="-mt-[144px]">
                <div class="grid grid-cols-10 gap-4 flex">
                    <div class="col-span-3">
                        <div class="text-center flex relative">
                            <div class="relative ml-5">
                                <img class="mx-auto w-[180px] h-[180px] rounded-xl mt-[45px]" :src="profilePictureUrl"
                                    alt="">

                                <!-- SVG Wrapper positioned at the bottom right of the image -->
                                <div  @click="toggleModal('name')"
                                    class="absolute bottom-0 right-0 mb-[10px] mr-[10px] w-6 h-6 bg-timberwolf rounded-full flex justify-center items-center cursor-pointer text-steelBlue">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </div>
                            </div>


                            <!-- Wrapper for the SVG to position it absolutely at the bottom right corner -->
                            <div class="text-left mt-[80px] ml-5">
                                <h2 class="text-lg font-semibold text-white text-3xl">{{ data.name }} </h2>
                                <h5 class="text-md text-white font-normal text-black text-primaryblue">School
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-5">
                        <div class="col-span-3">
                            <div
                                class="mt-[140px] text-sm font-medium text-center text-gray-500 border-b border-gray-200 text-gray-400 border-gray-400">

                                <!-- <CoachTabNavigation :tabs="tabs" :initialTab="tab" @tabChanged="handleTab" /> -->
                            </div>
                        </div>
                    </div>

                    <div class="col-span-2 mt-[70px] z-10 text-right">
                        <div class="">
                            <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1 mr-2"
                               >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-500 m-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
                <div class="grid grid-cols-6 gap-4 flex -mt-[85px] tabs-align">
                    <div class="col-span-1">
                    </div>
                    <div class="col-span-5">
                        <div class="pl-3">
                            <div
                                class="-mt-[10px] text-sm font-medium text-center text-gray-500 border-b border-gray-200 text-gray-400 border-gray-400">
                                <SchoolTabNavigation :tabs="tabs" :initialTab="tab" @tabChanged="handleTab"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    </section>

    <!-- Modal Components with Standardized Props -->
    <NameModal :visible="modals.name" @close="handleModalClose" :slug="slug" />
    <CoverModal :visible="modals.cover" @close="handleModalClose" :slug="slug" />

</template>

<script setup>
import { ref, defineEmits, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import SchoolTabNavigation from '~/components/profiles/navigation/SchoolTabNavigation.vue';
import NameModal from '~/components/profiles/schoolProfile/modals/nameModal.vue';
import CoverModal from '~/components/profiles/schoolProfile/modals/coverModal.vue';


// Import the default profile picture
import defaultCoverPicture from '@/assets/images/default_cover.png';
import defaultProfilePicture from '@/assets/images/user.png';


const emit = defineEmits(['changeTab']);
const nuxtApp = useNuxtApp();

const $publicService = nuxtApp.$publicService;

const galleryItems = ref([]);

const { data, schoolSlug } = defineProps({
    data: {
        type: Object,
        required: true,
    },
    schoolSlug: {
        type: String,
        required: true,
    }
});
const route = useRoute();
const tab = ref('feed');
const slug = ref('');
const loggedUserSlug = ref(null);


const handleTab = (selectedTab) => {
    tab.value = selectedTab;
    emit('changeTab', selectedTab)
};

const tabs = ref([
    { name: 'feed', label: 'Post' },
    { name: 'member', label: 'Member' },
    { name: 'team', label: 'Team' },
    { name: 'media', label: 'Media' },
    { name: 'academic', label: 'Academics' }
]);

// Define reactive state for all modals
const modals = reactive({
    name: false,
    cover: false,
});

// Generic toggle function
const toggleModal = (modalName) => {
    if (modals.hasOwnProperty(modalName)) {
        modals[modalName] = !modals[modalName];
    } else {
        console.warn(`Modal "${modalName}" does not exist.`);
    }
};

// Generic function to close the modal and fetch user details
const handleModalClose = (modalName) => {
    // Defensive check to make sure modalName exists
    if (modals[modalName] !== undefined) {
        modals[modalName] = false;  // Close the modal
        fetchSchoolDetails();         // Fetch updated user details after closing
    } else {
        console.error(`Invalid modal name: ${modalName}`);
    }
};


const setGalleryItems = (mediaInfo) => {
    galleryItems.value = mediaInfo.media_urls.map(media => {
      // Append a timestamp to the URL to prevent browser caching
      const cacheBustedUrl = `${media.url}?t=${new Date().getTime()}`;
  
      if (media.media_type === 'image') {
        return {
          type: 'image',
          href: cacheBustedUrl,
          src: cacheBustedUrl,
          media_id: media.media_id,
        };
      } else if (media.media_type === 'video') {
        return {
          type: 'video',
          href: cacheBustedUrl,
          src: cacheBustedUrl || 'https://via.placeholder.com/200x150.png?text=Video',
          media_id: media.media_id,
        };
      }
    });
  };
  

// Reactive data properties for URLs
const profile_picture = ref(defaultProfilePicture);
const cover_picture = ref(defaultCoverPicture);

// Computed properties for profile and cover picture URLs
const profilePictureUrl = ref('');
const coverPictureUrl =  ref('');



const fetchSchoolDetails = async () => {
    try {
        const dataSets = await $publicService.get_school(route.params.slug);
        if (dataSets.media_info) {
            profilePictureUrl.value = dataSets.media_info?.profile_picture?.url;
            coverPictureUrl.value = dataSets.media_info?.cover_picture?.url;
            setGalleryItems(dataSets.media_info);
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}


onMounted(async () => {
  slug.value = schoolSlug;

  if (process.client) {
    loggedUserSlug.value = localStorage.getItem('user_slug');
  }

  await fetchSchoolDetails();
});


// Watch for changes in data
watch(
    () => data,
    (newVal) => {
        if (newVal && newVal.media_info) {
            console.log(newVal.media_info);
            profile_picture.value = newVal.media_info.profile_picture?.url || defaultProfilePicture;
        } else {
            profile_picture.value = defaultProfilePicture; // Fallback to default if media_info is undefined
        }
    },
    { immediate: true } // Execute immediately when component is mounted
);

watch(
    () => data,
    (newVal) => {
        if (newVal && newVal.media_info) {
            cover_picture.value = newVal.media_info.cover_picture?.url || defaultCoverPicture;
        } else {
            cover_picture.value = defaultCoverPicture; // Fallback to default if media_info is undefined
        }
    },
    { immediate: true } // Execute immediately when component is mounted
);







// onMounted(() => {
//     slug.value = schoolSlug;

//     if (process.client) {
//         loggedUserSlug.value = localStorage.getItem('user_slug')
//     }

    
//     await fetchSchoolDetails();
    // // Set profile picture when data becomes available
    // if (data) {
    //     profile_picture.value = data.cover?.url || defaultProfilePicture;
    //     cover_picture.value = data.profile?.url || defaultProfilePicture;
    // } else {
    //     console.log('media not available');
    //     cover_picture.value = defaultCoverPicture;
    // }

// })

</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>