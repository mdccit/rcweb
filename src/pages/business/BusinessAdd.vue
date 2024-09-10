<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="">
                <h1 class="font-bold text-2xl mb-3 text-black">Search for a user to add</h1>

                <div class="flex items-center">
                    <div class="w-full">
                        <label class="block">
                            <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                <input v-model="search_key"
                                    class="block text-black px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                    type="text" ></div>
                        </label>
                    </div>
                    <div class="mx-4"></div>
                    <div class="">
                        <button @click="searchBusinessUsers"
                            class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                            <div class="flex flex-row items-center justify-center">
                                <span class=""> Search
                                </span>
                            </div>
                        </button>
                    </div>
                </div>

                <div v-if="users.length > 0">
                    <div v-for="user in users" :key="user.id" class="flex flex-row gap-6 py-6">
                      <a :href="`https://qa1.recruited.qualitapps.com/app/u/${user.id}`" class="flex flex-row gap-4 flex-1">
                        <img
                          :src="user.profile_image || `https://ui-avatars.com/api/?name=${user.display_name}&color=7F9CF5&background=EBF4FF`"
                          alt="User profile picture"
                          class="h-12 w-12 rounded-full">
                        <div class="self-center flex-1">
                          <strong class="capitalize text-black">{{ user.display_name }}</strong>
                          <p class="opacity-75 line-clamp-1">{{ user.email || '' }}</p>
                        </div>
                      </a>
                
                      <div class="self-center">
                        <form @submit.prevent="addBusinessUser(user)">
                          <div class="">
                            <button type="submit"
                              class="border rounded-full text-black shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                              Add to business
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div v-else>
                    <p>No users found for this search.</p>
                  </div>


            </div>
            <div class="p-20"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue';
const userStore = useUserStore();

// Initialize necessary instances
const route = useRoute(); // To access query parameters
const router = useRouter(); // Vue Router instance

// Access services from the Nuxt app context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

// Refs to hold state
const errors = ref([]);  // Array to hold error messages
const showNotification = ref(false);  // Boolean to show/hide notification
const notificationMessage = ref('');  // Message for the notification
const action = ref('');  // Holds action type from query parameter or default value
const business_id = ref(null);  // Holds business_id from query parameter or default value
const users = ref([]);  // This will hold the list of users
const user_id = ref(null)
const search_key = ref('');  // Search key for filtering business users
const business = ref([]);  // Array to store business members data
const options = {
  page: 1,  // Default page number
  per_page_items: 10  // Default number of items per page
};

// Set initial values based on route query parameters
onMounted(() => {
    action.value = route.query.action || 'add';  // Default action to 'add' if not specified
    business_id.value = route.query.business_id || '';  // Default business_id to an empty string if not specified
});

// Function to search business users
const searchBusinessUsers = async () => {
  console.log('Searching users...');
  errors.value = [];  // Clear any existing errors

  try {
    // Make sure all the values are properly passed
    const searchKeyToSend = search_key.value.trim() ? search_key.value : undefined;

    // Call the API service with the necessary parameters
    const response = await $adminService.search_business_users(
      business_id.value, 
      options.page, 
      options.per_page_items, 
      searchKeyToSend
    );

    // Process the response
    if (response && response.dataSets && response.dataSets.data) {
      users.value = response.dataSets.data;  // Store the fetched users
    } else {
      errors.value.push('Unexpected API response structure.');
    }

  } catch (error) {
    console.error('Failed to load business member details:', error.message);
    errors.value.push('Failed to load business member details.');
  }
};

// Function to add business user
const addBusinessUser = async () => {
  errors.value = [];  // Clear any existing errors

  // Build the request body with user_id and business_id
  const requestBody = {
    user: user_id.value,
    business: business_id.value
  };

  try {
    // Call the add_business_user function from adminService
    const response = await $adminService.add_business_user(requestBody);

    if (response && response.data) {
      console.log('User successfully added to business:', response.data);
      // Handle success, show a success message, or navigate elsewhere
    } else {
      errors.value.push('Unexpected API response structure.');
    }
  } catch (error) {
    console.error('Failed to add user to business:', error.message);
    errors.value.push('Failed to add user to business.');
  }
};

definePageMeta({
    ssr: true,
    layout: 'admin',
    // middleware: ['permissions'],
    roles: ['admin'],
});


</script>


<style scoped>
.container {
    max-width: 600px;
}
</style>