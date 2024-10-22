<template>
  <header class="bg-gray-200">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="flex w-full justify-between gap-8">
        <div class="flex items-center gap-4">
          <NuxtLink :to="{ path: '/school/schoolStaff', query: { school_id: school_id } }">
            <svg class="w-6 text-black h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
          </NuxtLink>
          <h2 class="font-bold text-black text-lg self-center"> Editing: {{ name }}</h2>
        </div>
        <div>
          <NuxtLink :to="`/app/profile/school/${slug}`">
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
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>


  <div class="">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

      <!-- Include SchoolNavigation component -->
      <!-- <SchoolNavigation :schoolId="school_id" /> -->
      <div class="my-8"></div>
      <div class="container">
        <h1 class="font-bold text-2xl mb-3">Search for a user to add</h1>
        <form @submit.prevent="searchUsers">
          <div class="flex items-center">
            <div class="w-full">
              <label class="block">
                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                  <input
                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    v-model="searchQuery" type="text" />
                </div>
              </label>
            </div>
            <div class="mx-4"></div>
            <div>
              <button type="submit"
                class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                <div class="flex flex-row items-center justify-center">
                  <span>Search</span>
                </div>
              </button>
            </div>
          </div>
        </form>

        <!-- Search Results -->
        <div v-if="users.length > 0">
          <div v-for="user in users" :key="user.id" class="flex flex-row gap-6 py-6">
            <a class="flex flex-row gap-4 flex-1">
              <img
                :src="user.profile_image || `https://ui-avatars.com/api/?name=${user.display_name}&color=7F9CF5&background=EBF4FF`"
                alt="User profile picture" class="h-12 w-12 rounded-full" />
              <div class="self-center flex-1">
                <strong class="capitalize text-black">{{ user.display_name }}</strong>
                <p class="opacity-75 line-clamp-1">{{ user.email || '' }}</p>
              </div>
            </a>
            <div class="self-center">
              <form @submit.prevent="addSchoolUser(user)">
                <div>
                  <button type="submit"
                    class="border rounded-full text-black shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                    Add to school
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
    </div>

    <!-- Notification Component -->
    <Notification v-if="showNotification" :message="notificationMessage" :type="notification_type" :duration="3000" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import SchoolNavigation from '~/components/admin/school/SchoolNavigation.vue';

import Notification from '~/components/common/Notification.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';

const route = useRoute();
const router = useRouter();
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const school_id = ref('');
const users = ref([]);
const searchQuery = ref('');

const showNotification = ref(false);
const notificationMessage = ref('');
const loading = ref(false);
const notification_type = ref('');
const notificationKey = ref(0);
const slug = ref('')



onMounted(() => {
  school_id.value = route.query.school_id || '';
  fetchSchoolDetails()

});

const name = ref('')
const fetchSchoolDetails = async () => {
    try {
        const data = await $adminService.get_school_details(school_id.value);
        name.value = data.school_info.name || '';
        slug.value = data.school_info.slug || '';
    } catch (error) {
      console.log(error)
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
};


const options = {
  page: 1,  // Default page number
  per_page_items: 10  // Default number of items per page
};

// Function to fetch users based on search query and school_id
const searchUsers = async () => {
  try {
    const search_key = searchQuery.value || '';  // If searchQuery is empty, use an empty string
    console.log(search_key)

    const response = await $adminService.search_school_users(school_id.value, options.page, options.per_page_items, search_key);
    console.log(555)
    console.log(response)

    if (response && response.dataSets && response.dataSets.data) {
      users.value = response.dataSets.data || [];  // Set users from the response
    } else {
      users.value = [];  // If no users are returned, reset to empty
    }
  } catch (error) {
    console.error('Failed to load users:', error.message);
    users.value = [];  // Reset to empty if there is an error
  }
};

// Function to add the selected user to the school
const addSchoolUser = async (user) => {
  try {
    const requestBody = {
      user: user.id,
      school: school_id.value
    };

    // Make the API request to add the user
    const response = await $adminService.add_school_user(requestBody);

    // Check if the response is successful (status 200)
    if (response && response.status === 200) {
      triggerNotification(response.display_message, 'success');
      // Trigger searchUsers again to refresh the list
      await searchUsers();
    } else {
      triggerNotification(response.display_message, 'failure');
    }
  } catch (error) {
    console.error('Failed to add user:', error.message);
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

definePageMeta({
  ssr: false,
  layout: 'admin',
  middleware: ['role'],
  requiredRole: ['admin'],
});

</script>

<style scoped></style>
