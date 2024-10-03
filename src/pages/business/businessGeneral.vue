<template>
    <header class="bg-gray-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <div class="flex items-center gap-4">
                    <NuxtLink to="/admin/business">
                        <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg>
                    </NuxtLink>
                    <h2 class="font-bold text-lg self-center text-black"> Editing </h2>
                </div>
                <div>
                    <a href="https://qa1.recruited.qualitapps.com/app/business/9c7d0c22-c388-4383-8da0-4d83319cf4ba">
                        <button type="submit"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                            View
                            <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
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

            <div class="my-8"></div>

            <!-- Start of Business Update Form -->
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <form @submit.prevent="updateBusinessDetails">
                    <div class="flex flex-row gap-16">
                        <!-- Icon Section -->
                        <div>
                            <span class="block mb-1 text-gray-700 font-sans">Icon</span>
                            <div class="mt-2"><img src="/assets/images/business.png" alt="Business profile picture"
                                    class="h-20 w-20 rounded-xl"></div>
                            <div class="flex mt-2 space-x-2">
                                <div>
                                    <label class="block">
                                        <a
                                            class="font-semibold border border-border rounded py-4 px-4 w-full block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center">
                                            <svg class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" fill="none" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                                <path d="M7 9l5 -5l5 5"></path>
                                                <path d="M12 4l0 12"></path>
                                            </svg>
                                            Select A New Photo
                                            <input name="icon" type="file"
                                                class="invisible absolute inset-0 w-full h-full disabled:opacity-50">
                                        </a>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- Cover Section -->
                        <div>
                            <span class="block mb-1 text-gray-700 font-sans">Cover</span>
                            <div class="mt-2"><img src="/assets/images/image.svg" alt="placeholder page background"
                                    class="h-20 w-20 rounded-xl"></div>
                            <div class="flex mt-2 space-x-2">
                                <div>
                                    <label class="block">
                                        <a
                                            class="font-semibold border border-border rounded py-4 px-4 w-full block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center">
                                            <svg class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" fill="none" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                                <path d="M7 9l5 -5l5 5"></path>
                                                <path d="M12 4l0 12"></path>
                                            </svg>
                                            Select A New Photo
                                            <input name="cover" type="file"
                                                class="invisible absolute inset-0 w-full h-full disabled:opacity-50">
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
                            <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">              
                                <input v-model="name" class="lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg "
                                    name="name" type="text" placeholder="Enter business name" required>
                            </div>
                        </label>
                    </div>

                    <!-- Bio Field -->
                    <div class="my-8">
                        <label class="block">
                            <span class="block mb-1 text-gray-700 font-sans">Bio</span>
                            <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                                <textarea v-model="bio" name="bio"
                                class="lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                placeholder="Enter business bio"></textarea>
                            </div>
                            
                        </label>
                    </div>

                    <!-- Approved and Verified Fields -->
                    <div class="flex justify-between gap-x-2 mb-2">
                        <div class="w-full">
                            <label class="block">
                                <span class="block mb-1 text-gray-700 font-sans">Approved</span>
                                <div class="relative">
                                    <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                                        <select v-model="is_approved" name="is_approved"
                                        class="lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                        required>
                                        <option :value="true">Yes</option>
                                        <option :value="false">No</option>
                                    </select>
                                    </div>
                                   
                                </div>
                            </label>
                        </div>

                        <div class="w-full">
                            <label class="block">
                                <span class="block mb-1 text-gray-700 font-sans">Verified</span>
                                <div class="relative">
                                    <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                                        <select v-model="is_verified" name="is_verified"
                                        class="lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                        required>
                                        <option :value="true">Yes</option>
                                        <option :value="false">No</option>
                                    </select>
                                    </div>    
                                </div>
                            </label>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="my-4">
                        <button type="submit"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 bg-blue-500 hover:bg-blue-700 text-white">
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

// Fetch business details
const fetchBusinessDetails = async () => {
  try {
    const data = await $adminService.get_business_details(business_id.value);
    business_id.value = data.id;
    name.value = data.name;
    bio.value = data.bio;
    is_verified.value = data.is_verified === 1;
    is_approved.value = data.is_approved === 1;
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
    if (response.status === 200) {

        triggerNotification(response.display_message, 'success');
    } else {
        triggerNotification(response.display_message, 'failure');
    }
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
</script>


<style scoped>
.container {
    max-width: 600px;
}
</style>