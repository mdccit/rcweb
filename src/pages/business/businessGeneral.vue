<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8">
            <div class="flex items-center gap-4">
                <NuxtLink to="/admin/business">
                    <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg>
                </NuxtLink>
                <h2 class="font-bold text-lg self-center text-black"> Editing    {{  name }}</h2>
            </div>
            <div>
                <a href="https://qa1.recruited.qualitapps.com/app/business/9c7d0c22-c388-4383-8da0-4d83319cf4ba">
                    <button type="submit" class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                        View
                        <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    </div>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <!-- Use the BusinessNavigation component -->
            <BusinessNavigation :businessId="business_id" />

            <div class="my-8"></div>

            <!-- Start of Business Update Form -->
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <form @submit.prevent="updateBusinessDetails">
                        <div class="flex flex-row gap-16">
                            <!-- Icon Section -->
                            <div>
                                <span class="block mb-1 text-gray-700 font-sans">Icon</span>
                                <div class="mt-2">
                                    <img v-if="profile == null"
                                src="@assets/images/business.png"
                                alt="SchoolAdm1" class="rounded-full h-20 w-20 object-cover">
                                <img v-if="profile != null"
                                :src="profile.url"
                                alt="SchoolAdm1" class="rounded-full h-20 w-20 object-cover">
                                </div>
                                <div class="flex mt-2 space-x-2">
                                    <div>
                                        <label class="block">
                                            <a class="font-semibold border border-border rounded py-4 px-4 w-full block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center">
                                                <svg class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                                    <path d="M7 9l5 -5l5 5"></path>
                                                    <path d="M12 4l0 12"></path>
                                                </svg>
                                                Select A New Photo
                                                <input name="icon"  @change="handleFileChange" type="file" class="invisible absolute inset-0 w-full h-full disabled:opacity-50">
                                            </a>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <!-- Cover Section -->
                            <div>
                                <span class="block mb-1 text-gray-700 font-sans">Cover</span>
                                <div class="mt-2">
                                    <img v-if="cover == null"
                                src="@assets/images/image.svg"
                                alt="School page background" class="rounded-full h-20 w-20 object-cover">
                                <img v-if="cover != null"
                                :src="cover.url"
                                alt="School page background" class="rounded-full h-20 w-20 object-cover">
                                </div>
                                <div class="flex mt-2 space-x-2">
                                    <div>
                                        <label class="block">
                                            <a class="font-semibold border border-border rounded py-4 px-4 w-full block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center">
                                                <svg class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                                    <path d="M7 9l5 -5l5 5"></path>
                                                    <path d="M12 4l0 12"></path>
                                                </svg>
                                                Select A New Photo
                                                <input name="cover" type="file"  @change="handleFileCoverChange" class="invisible absolute inset-0 w-full h-full disabled:opacity-50">
                                            </a>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Name Field -->
                        <div class="my-8">
                            <label class="block">
                                <span class="block mb-1 text-gray-700 font-sans">Name</span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                    <input v-model="name" class="block px-5 py-3 w-full border-0 rounded-lg text-black" name="name" type="text" placeholder="Enter business name" required>
                                </div>
                            </label>
                        </div>

                        <!-- Bio Field -->
                        <div class="my-8">
                            <label class="block">
                                <span class="block mb-1 text-gray-700 font-sans">Bio</span>
                                <textarea v-model="bio" name="bio" class="block w-full rounded-md border-gray-300 shadow-sm text-black" placeholder="Enter business bio"></textarea>
                            </label>
                        </div>

                        <!-- Approved and Verified Fields -->
                        <div class="flex justify-between gap-x-2 mb-2">
                            <div class="w-full">
                                <label class="block">
                                    <span class="block mb-1 text-gray-700 font-sans">Approved</span>
                                    <div class="relative">
                                        <select v-model="is_approved" name="is_approved" class="block w-full text-black rounded-md border-gray-300 shadow-sm px-5 py-3" required>
                                            <option :value="true">Yes</option>
                                            <option :value="false">No</option>
                                        </select>
                                    </div>
                                </label>
                            </div>

                            <div class="w-full">
                                <label class="block">
                                    <span class="block mb-1 text-gray-700 font-sans">Verified</span>
                                    <div class="relative">
                                        <select v-model="is_verified" name="is_verified" class="block w-full text-black rounded-md border-gray-300 shadow-sm px-5 py-3" required>
                                            <option :value="true">Yes</option>
                                            <option :value="false">No</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="my-4">
                            <button type="submit" class="border rounded-full shadow-sm font-bold py-2.5 px-8 bg-blue-500 hover:bg-blue-700 text-white">
                                Save Changes
                            </button>
                        </div>
                </form>
            </div>
            <!-- End of Business Update Form -->

            <div class="my-16"></div>
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
const bio = ref('');
const is_verified = ref(false);
const is_approved = ref(false);

const showNotification = ref(false);
const notificationMessage = ref('');
const loading = ref(false);
const notification_type = ref('');
const notificationKey = ref(0);
const profile =ref(null)
const cover =ref(null)
const profile_image = ref('')
const cover_image = ref('')
const fileError =ref('')

// Fetch business details
const fetchBusinessDetails = async () => {
  try {
    const data = await $adminService.get_business_details(business_id.value);
    business_id.value = data.business_info.id;
    name.value = data.business_info.name;
    bio.value = data.business_info.bio;
    is_verified.value = data.business_info.is_verified === 1;
    is_approved.value = data.business_info.is_approved === 1;
    profile.value = data.media_info.profile_picture || null;
    cover.value = data.media_info.cover_picture || null;
  } catch (error) {
    console.error('Error fetching business details:', error.message);
  }
};

// Update business details
const updateBusinessDetails = async () => {
  try {
    const response = await $adminService.business_update({
      business_id: business_id.value,
      name: name.value,
      bio: bio.value,
      is_verified: is_verified.value ? 1 : 0,
      is_approved: is_approved.value ? 1 : 0,
    });
    
    //await updateBusinessCover()
    if (response.status === 200) {

        triggerNotification(response.display_message, 'success');
    } else {
        triggerNotification(response.display_message, 'failure');
    }
    fetchBusinessDetails();

  } catch (error) {
    console.error('Error updating business:', error.message);
  }
};


const triggerNotification = (message, type) => {
  notificationMessage.value = message;
  notification_type.value = type;
  showNotification.value = true;

  notificationKey.value += 1; // Force re-render

  // Auto-hide after 3 seconds
  setTimeout(() => {
    showNotification.value = false;
  }, 3000);
};


// Fetch details on component mount
onMounted(() => {
    action.value = route.query.action || 'view';
    business_id.value = route.query.business_id || '';

  fetchBusinessDetails();
});

const handleFileChange = async(event) => {
  const file = event.target.files[0];
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  const maxSize = 30 * 1024 * 1024; // 30MB

  // Check if a file is selected
  if (file) {
    // Validate the file type
    if (!allowedTypes.includes(file.type)) {
      fileError.value = 'Only jpg, jpeg, and png files are allowed';
      event.target.value = ''; // Clear the file input
      return;
    }

    // Validate the file size
    if (file.size > maxSize) {
      fileError.value = 'File size must be less than 30MB';
      event.target.value = ''; // Clear the file input
      return;
    }

    // If all validations pass, set the file to the reactive variable
    fileError.value = ''; // Clear any previous errors
    profile_image.value = file; // Store the selected file

    await updateBusinessProfile()
    fetchBusinessDetails();

  }
};

const handleFileCoverChange = async(event) => {
  const file = event.target.files[0];
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  const maxSize = 30 * 1024 * 1024; // 30MB

  // Check if a file is selected
  if (file) {
    // Validate the file type
    if (!allowedTypes.includes(file.type)) {
      fileError.value = 'Only jpg, jpeg, and png files are allowed';
      event.target.value = ''; // Clear the file input
      return;
    }

    // Validate the file size
    if (file.size > maxSize) {
      fileError.value = 'File size must be less than 30MB';
      event.target.value = ''; // Clear the file input
      return;
    }

    // If all validations pass, set the file to the reactive variable
    fileError.value = ''; // Clear any previous errors
    cover_image.value = file; // Store the selected file

  await updateBusinessCover();
  fetchBusinessDetails();

  }
};

const updateBusinessProfile = async () => {
    if (!profile_image.value) {
        // Handle case where no file is selected
        console.log('no profile picture found');
        return;
    }
    try {
        const response = await $adminService.business_profile(business_id.value,profile_image.value);
   
    } catch (error) {
        console.log(error) 
    }
};

const updateBusinessCover = async () => {
    if (!cover_image.value) {
        // Handle case where no file is selected
        console.log('no profile picture found');
        return;
    }
    try {
        const response = await $adminService.business_cover(business_id.value,cover_image.value);

    } catch (error) {
        console.log(error) 
    }
};
</script>


<style scoped>
.container {
    max-width: 600px;
}
</style>