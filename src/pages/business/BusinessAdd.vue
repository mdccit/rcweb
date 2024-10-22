<template>
  <header class="bg-gray-200">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="flex w-full justify-between gap-8">
        <div class="flex items-center gap-4">
          <NuxtLink :to="{ path: '/business/businessMembers', query: { business_id: business_id } }">
            <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
          </NuxtLink>
          <h2 class="font-bold text-black text-lg self-center"> Editing: {{ name }} </h2>
        </div>
        <div>
          <NuxtLink  :to="`/app/profile/business/${slug}`">
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

  <div class="py-12">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="container">
        <h1 class="font-bold text-2xl mb-3">Search for a user to add</h1>
        <form @submit.prevent="searchBusinessUsers">
          <div class="flex items-center">
            <div class="w-full">
              <label class="block">
                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                  <input
                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    v-model="search_key" type="text" />
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
              <form @submit.prevent="addBusinessUser(user)">
                <div>
                  <button type="submit"
                    class="border rounded-full text-black shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                    Add to Business
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
import Notification from '~/components/common/Notification.vue';

const route = useRoute();
const router = useRouter();
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;
const nprogress = nuxtApp.$nprogress;

const business_id = ref('');
const users = ref([]);
const search_key = ref('');
const showNotification = ref(false);
const notificationMessage = ref('');
const notification_type = ref('');
const notificationKey = ref(0);
const slug = ref('')
onMounted(() => {
  business_id.value = route.query.business_id || '';
  console.log('Business ID:', business_id.value);  // Log business_id to check its value
  fetchBusinessDetails()
});

const name = ref('')

const fetchBusinessDetails = async () => {
  try {
    const data = await $adminService.get_business_details(business_id.value);
    name.value = data.business_info.name;
    slug.value =data.business_info.slug;
  } catch (error) {
    console.error('Error fetching business details:', error.message);
  }
};

// Pagination options
const options = ref({
  page: 1,  // Default page number
  per_page_items: 10  // Default number of items per page
});


// Function to search users by query for adding to business
const searchBusinessUsers = async () => {
  console.log('Starting search');
  try {
    nprogress.start();

    let searchKeyToSend = search_key.value.trim() ? search_key.value : '';
    console.log('Search Key:', searchKeyToSend);

    const response = await $adminService.search_business_users(
      business_id.value,
      options.value.page,
      options.value.per_page_items,
      searchKeyToSend
    );

    console.log('API Response:', response);

    if (response && response.dataSets && response.dataSets.data) {
      users.value = response.dataSets.data || [];
    } else {
      users.value = [];
    }
  } catch (error) {
    console.error('Failed to search users:', error.message);
    nuxtApp.$notification.triggerNotification(error.message || 'Failed to search users.', 'failure');
  } finally {
    nprogress.done();
  }
};


// Function to add a user to the business
const addBusinessUser = async (user) => {
  try {
    const requestBody = {
      user: user.id,
      business: business_id.value
    };
    const response = await $adminService.add_business_user(requestBody);

    if (response && response.status === 200) {
      nuxtApp.$notification.triggerNotification(response.display_message || 'User added successfully', 'success');
      await searchBusinessUsers();
    } else {
      nuxtApp.$notification.triggerNotification('Failed to add user to business', 'failure');
    }
  } catch (error) {
    nuxtApp.$notification.triggerNotification('Failed to add user to business', 'failure');
  }
};

definePageMeta({
  ssr: false,
  layout: 'admin',
  middleware: ['role'],
  requiredRole: ['admin'],
});
</script>

<style scoped></style>
