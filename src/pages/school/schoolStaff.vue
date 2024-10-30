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
                    <h2 class="font-bold text-lg self-center text-black"> Editing: {{ name }}</h2>
                </div>
                <NuxtLink :to="`/app/profile/school/${slug}`"><button type="submit"
                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-blue-300 focus:ring-blue-200">
                        View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 7l-10 10"></path>
                            <path d="M8 7l9 0l0 9"></path>
                        </svg></button></NuxtLink>
            </div>
        </div>
    </header>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-7">

        <!-- Use the SchoolNavigation component -->
        <SchoolNavigation :schoolId="school_id" />

        <div class="my-8"></div>
        <div class="">
            <div class="my-8"></div>
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <div class="flex justify-between">
                    <div class="flex-1 text-2xl font-bold mb-4 text-black"> All Staff Members </div>
                    <div class="">
                        <NuxtLink :to="{ path: '/school/schoolAddUser', query: { school_id: school_id } }">
                            <button type="submit"
                                class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white border-transparent focus:border-blue-300 focus:ring-blue-200">
                                Add User
                            </button>
                        </NuxtLink>

                    </div>
                </div>
                <div class="grid gap-4">

                    <!-- Staff Members List -->
                    <div v-for="member in staff_members" :key="member.id" class="flex flex-col lg:flex-row gap-6 py-2">
                        <NuxtLink to="/app/u/${member.id}`" class="flex flex-row gap-4 flex-1">
                            <img :src="`https://ui-avatars.com/api/?name=${member.first_name}&color=7F9CF5&background=EBF4FF`"
                                alt="User profile picture" class="h-12 w-12 rounded-full" />

                            <div class="self-center flex-1 text-black">
                                <strong class="capitalize">{{ member.first_name + ' ' + member.last_name }}</strong>
                                <p class="opacity-75 line-clamp-1 text-gray">Role title: {{ member.user_role }}</p>
                            </div>
                        </NuxtLink>
                        <div class="self-center flex flex-wrap gap-2">
                            <button @click="openModal(member)" type="button"
                                class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-blue-300 focus:ring-blue-200">
                                Manage
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-8"></div>

        </div>

        <div class="">
            <div class="my-8"></div>
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <div class="flex justify-between">
                    <div class="flex-1 text-2xl font-bold mb-4"> Team name </div>
                    <div class="">
                        <button type="submit"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white border-transparent focus:border-blue-300 focus:ring-blue-200">
                            Create Team
                        </button>

                    </div>
                </div>
                <div class="grid gap-4">
                    <div v-for="member in staff_members" :key="member.id" class="flex flex-col lg:flex-row gap-6 py-2">
                        <img :src="`https://ui-avatars.com/api/?name=${member.name}&color=7F9CF5&background=EBF4FF`"
                            alt="User profile picture" class="h-12 w-12 rounded-full" />
                        <div class="self-center flex-1 text-black">
                            <strong class="capitalize">{{ member.name }}</strong>
                            <p class="opacity-75 line-clamp-1 text-black">Role title: {{ member.user_role }}</p>
                        </div>
                        <div class="self-center flex flex-wrap gap-2">
                            <a :href="`/admin/userAccountDetails?action=edit&user_id=${member.id}`">
                                <button type="submit"
                                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-blue-300 focus:ring-blue-200">
                                    Manage
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-8"></div>


        </div>



        <div v-if="isModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 class="text-2xl font-bold mb-6 text-gray-800">Manage School User</h2>


                <div class="mb-6">
                    <label for="userType" class="block text-sm font-medium text-gray-700 mb-2">User Name : {{
                        firstName + ' ' + lastName }}</label>
                    </div>

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
                    <InputError :error="errors.user_permission_type ? errors.user_permission_type.join(', ') : ''" />
                </div>

                <!-- Action Buttons -->
                <div class="flex justify-between items-center">
                    <!-- Change User Type Button -->
                    <button @click="changeSchoolUserType()"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-8 rounded-full shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-200">
                        Change User Type
                    </button>

                    <!-- Remove User Button -->
                    <button @click="removeSchoolUser()"
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
import { ref, computed, watch, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { useRoute } from 'vue-router';
import SchoolNavigation from '~/components/admin/school/SchoolNavigation.vue';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';

const route = useRoute(); // Use useRoute to access query parameters

// Access $adminService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const school_id = ref('');  // School ID
const staff_members = ref([]);  // Array to hold staff data
const name = ref('');
const slug = ref('');

const error = ref('');
const errors = ref([]);
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


onMounted(() => {
    // Set initial values for action and school_id from route query parameters
    // action.value = route.query.action || 'manage';
    school_id.value = route.query.school_id || '';

    // Fetch school staff data if action is 'manage'
    // if (action.value === 'manage') {
    fetchSchoolStaff(school_id.value);
    fetchSchoolDetails(school_id.value)
    // }
});


// Function to open the modal
const openModal = async (userData) => {
    console.log(userData);
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
    fetchSchoolStaff(school_id.value);
};

const clearModalValues = () => {
    userRole.value = '';
    userType.value = '';
    userID.value = '';
    firstName.value = '';
    lastName.value = '';
};



const changeSchoolUserType = async () => {
    try {
        loading.value = true;

        if (userType.value == '') {
            nuxtApp.$notification.triggerNotification("Please Select User Type", 'warning');
        }
        let request_body = {
            user_id: userID.value,
            school: school_id.value,
            user_permission_type: userType.value
        }
        const response = await $adminService.change_school_user_type(request_body);
        if (response && response.status === 200) {
            // Success case
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        } else {
            // Handle non-success status codes
            nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
        }
    } catch (error) {
        handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
        console.error('Error change user type:', error);
    } finally {
        closeModal();
        loading.value = false;
    }
};

const removeSchoolUser = async () => {
    try {
        loading.value = true;
        let request_body ={
            user_id: userID.value,
            school: school_id.value
        }
        const response = await $adminService.remove_school_user(request_body);
        if (response && response.status === 200) {
            closeModal();
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        } else {
            // Handle non-success status codes
            nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
        }
    } catch (error) {
        console.error('Error remove user from school:', error);
    } finally {
        loading.value = false;
    }
};


// Fetch School Staff
const fetchSchoolStaff = async (schoolId) => {
    errors.value = [];  // Clear any existing errors
    try {
        // Fetch staff data from the API using $adminService
        const staffData = await $adminService.list_school_staff(schoolId);
        staff_members.value = staffData || [];  // Set the fetched data to the staff ref
    } catch (error) {
        console.error('Failed to load school staff details:', error.message);
        errors.value.push('Failed to load school staff details.');
    }
};

const fetchSchoolDetails = async (school_id) => {
    errors.value = [];
    try {
        const data = await $adminService.get_school_details(school_id);

        name.value = data.school_info.name || '';
        slug.value = data.school_info.slug || '';


    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
};
definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});

</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>