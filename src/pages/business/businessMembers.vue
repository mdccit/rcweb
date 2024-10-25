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
                    <h2 class="font-bold text-lg self-center text-black"> Editing: {{ name }} </h2>
                </div>
            </div>
            <NuxtLink :to="`/app/profile/business/${slug}`">
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
    </header>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <!-- Use the BusinessNavigation component -->
            <BusinessNavigation :businessId="business_id" />


            <div class="my-8"></div>
            <div class="">
                <div class="my-8"></div>
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                    <div class="flex justify-between">
                        <div class="flex-1 text-2xl font-bold mb-4 text-black"> All Members </div>
                        <div class="">
                            <NuxtLink>
                                <button @click="addMembers"
                                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white border-transparent focus:border-blue-300 focus:ring-blue-200">
                                    Add User
                                </button>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div v-for="member in members" :key="member.id" class="flex flex-col lg:flex-row gap-6 py-2">
                            <img :src="`https://ui-avatars.com/api/?name=${member.name}&color=7F9CF5&background=EBF4FF`"
                                alt="User profile picture" class="h-12 w-12 rounded-full" />
                            <div class="self-center flex-1 text-black">
                                <strong class="capitalize">{{ member.first_name + ' ' + member.last_name }}</strong>
                                <p class="opacity-75 line-clamp-1 text-black">Role title: {{ member.user_role }}</p>
                            </div>
                            <div class="self-center flex flex-wrap gap-2">
                                <button @click="openModal(member)" type="button"
                                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-blue-300 focus:ring-blue-200">
                                    Manage
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-16"></div>
            </div>
        </div>

        <div v-if="isModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 class="text-2xl font-bold mb-6 text-gray-800">Manage Business Member</h2>


                <div class="mb-6">
                    <label for="userType" class="block text-sm font-medium text-gray-700 mb-2">Member Name : {{
                        firstName + ' ' + lastName }}</label>
                </div 

                <!-- User Type Selection -->
                <div class="mb-6">
                <label for="userType" class="block text-sm font-medium text-gray-700 mb-2"> Role : {{ userRole
                    }}</label>
               </div>

            <!-- User Type Selection -->
            <div class="mb-6">
                <label for="userType" class="block text-sm font-medium text-gray-700 mb-2"> Type</label>
                <select id="userType" v-model="userType"
                    class="block w-full mt-1 border border-gray-300 rounded-full py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="viewer">Viewer</option>
                    <option value="editor">Editor</option>
                </select>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-between items-center">
                <!-- Change User Type Button -->
                <button @click="changeBusinessUserType()"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-8 rounded-full shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-200">
                    Change User Type
                </button>

                <!-- Remove User Button -->
                <button @click="removeBusinessUser()"
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2.5 px-8 rounded-full shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-red-200">
                    Remove User
                </button>
            </div>

            <!-- Cancel Button -->
            <button @click="closeModal" class="mt-6 text-gray-500 hover:text-gray-700 focus:outline-none">
                Cancel
            </button>
        </div>
    </div>



    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import BusinessNavigation from '~/components/admin/business/BusinessNavigation.vue';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';

const route = useRoute();
const router = useRouter();
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const business_id = ref('');
const members = ref([]); // Array to store members
const name = ref('');
const slug = ref('');


const error = ref('');
const errors = ref('');
const loading = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('');
const notification_type = ref(0);

// User role and type
const userID = ref('');
const firstName = ref('');
const lastName = ref('');
const userRole = ref('');
const userType = ref('');
const isModalVisible = ref(false);

// Fetch business members on component mount
onMounted(() => {
    business_id.value = route.query.business_id || '';
    fetchBusinessMembers(business_id.value); // Load members
    fetchBusinessDetails()
});

// Fetch business members from the service
const fetchBusinessMembers = async (businessId) => {
    errors.value = [];  // Reset errors
    try {
        const data = await $adminService.get_business_members(businessId);
        members.value = data.data || []; // Set the fetched members
        slug.value = data.business_info.slug;
    } catch (error) {
        console.error('Failed to load business members:', error.message);
        errors.value.push('Failed to load business members.');
    }
};

// Navigate to the add member page
const addMembers = () => {
    router.push({ path: '/business/businessAdd', query: { action: 'add', business_id: business_id.value } });
};

const fetchBusinessDetails = async () => {
    try {
        const data = await $adminService.get_business_details(business_id.value);
        name.value = data.business_info.name;
        slug.value = data.business_info.slug;

    } catch (error) {
        console.error('Error fetching business details:', error.message);
    }
};


definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});

// Function to open the modal
const openModal = async (userData) => {
    userRole.value = userData.user_role || '';
    userType.value = userData.user_permission_type?.toLowerCase() || '';
    userID.value = userData.user_id || '';
    firstName.value = userData.first_name || '';
    lastName.value = userData.last_name || '';
    isModalVisible.value = true;
};

// Function to close the modal
const closeModal = () => {
    isModalVisible.value = false;
    clearModalValues();
    fetchBusinessMembers(business_id.value);
};

const clearModalValues = () => {
    userRole.value = '';
    userType.value = '';
    userID.value = '';
    firstName.value = '';
    lastName.value = '';
};



const changeBusinessUserType = async () => {
    try {

        if (userType.value == '') {
            nuxtApp.$notification.triggerNotification("Please Select User Type", 'warning');
        }
        let request_body = {
            user_id: userID.value,
            business: business_id.value,
            user_permission_type: userType.value
        }
        loading.value = true;
        const response = await $adminService.change_business_member_type(request_body);
        if (response && response.status === 200) {
            // Success case
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            clearModalValues();
        } else {
            // Handle non-success status codes
            nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
        }
    } catch (error) {
        //   nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
        handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
        console.error('Error change user type:', error);
    } finally {
        closeModal();
        loading.value = false;
    }
};

const removeBusinessUser = async () => {
    try {
        let request_body = {
            user_id: userID.value,
            business: business_id.value,
            user_permission_type: userType.value
        }
        loading.value = true;
        const response = await $adminService.remove_business_member(request_body);
        if (response && response.status === 200) {
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        } else {
            // Handle non-success status codes
            nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
        }
    } catch (error) {
        console.error('Error remove user from school:', error);
    } finally {
        closeModal();
        loading.value = false;
    }
};

</script>


<style scoped>
.container {
    max-width: 600px;
}
</style>
