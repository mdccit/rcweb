<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8">
            <div class="flex items-center gap-4">
                <<NuxtLink to="/admin/schools"><svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg></NuxtLink>
                    <h2 class="font-bold text-lg self-center text-black"> Editing: SchoolAdm1 </h2>
            </div>
            <div class=""><button type="submit"
                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                    View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M17 7l-10 10"></path>
                        <path d="M8 7l9 0l0 9"></path>
                    </svg></button></div>
        </div>
    </div>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="flex gap-x-4"><a
                href="https://qa1.recruited.qualitapps.com/admin/schools/9c2845cc-7676-45e1-b498-13f930b22e9b"><button
                    class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50"> General
                    Details </button></a><a
                href="https://qa1.recruited.qualitapps.com/admin/schools/9c2845cc-7676-45e1-b498-13f930b22e9b/teams"><button
                    class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200"> Staff
                    &amp; Teams </button></a><a
                href="https://qa1.recruited.qualitapps.com/admin/schools/9c2845cc-7676-45e1-b498-13f930b22e9b/sync"><button
                    class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                    Synchronization </button></a><a
                href="https://qa1.recruited.qualitapps.com/admin/schools/9c2845cc-7676-45e1-b498-13f930b22e9b/danger-zone"><button
                    class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50"> Danger
                    Zone </button></a></div>
        <div class="my-8"></div>
        <div class="">
            <div class="my-8"></div>
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <div class="flex justify-between">
                    <div class="flex-1 text-2xl font-bold mb-4 text-black"> All Staff Members </div>
                    <div class="">
                        <NuxtLink to="/school/schoolAddUser">
                            <button type="submit"
                                class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                                Add User
                            </button>
                        </NuxtLink>

                    </div>
                </div>
                <div class="grid gap-4">

                            <!-- Staff Members List -->
                            <div v-for="member in staff" :key="member.id" class="flex flex-col lg:flex-row gap-6 py-2">
                                <a :href="`/app/u/${member.id}`" class="flex flex-row gap-4 flex-1">
                                <img :src="`https://ui-avatars.com/api/?name=${member.first_name}&color=7F9CF5&background=EBF4FF`"
                                    alt="User profile picture" class="h-12 w-12 rounded-full" />

                                <div class="self-center flex-1 text-black">
                                    <strong class="capitalize">{{ member.first_name + ' ' + member.last_name }}</strong>
                                    <p class="opacity-75 line-clamp-1 text-gray">Role title: {{ member.user_role }}</p>
                                </div>
                                </a>

                                <div class="self-center flex flex-wrap gap-2">
                                <a :href="`/admin/schools/${school_id}/users/${member.id}/edit`">
                                    <button type="submit"
                                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                    Manage
                                    </button>
                                </a>
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
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                            Create Team
                        </button>

                    </div>
                </div>
                <div class="grid gap-4">
                    <div class="flex flex-col lg:flex-row gap-6 py-2">
                        <a href="https://qa1.recruited.qualitapps.com/app/u/9c28453b-5cc0-4c0a-b9bf-9c6b95b44a70"
                            class="flex flex-row gap-4 flex-1"><img
                                src="https://ui-avatars.com/api/?name=P&amp;color=7F9CF5&amp;background=EBF4FF"
                                alt="User profile picture" class="h-12 w-12 rounded-full">

                            <div class="self-center flex-1 text-black"><strong class="capitalize">PlayerAdm1</strong>
                                <p class="opacity-75 line-clamp-1 text-gray">Role title: Coach</p>
                            </div>
                        </a>

                        <div class="self-center flex flex-wrap gap-2">
                            <a
                                href="https://qa1.recruited.qualitapps.com/admin/schools/9c2845cc-7676-45e1-b498-13f930b22e9b/users/189/edit">
                                <button type="submit"
                                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                    Manage
                                </button>
                            </a>
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-6 py-2">
                        <a href="https://qa1.recruited.qualitapps.com/app/u/9c28453b-5cc0-4c0a-b9bf-9c6b95b44a70"
                            class="flex flex-row gap-4 flex-1"><img
                                src="https://ui-avatars.com/api/?name=P&amp;color=7F9CF5&amp;background=EBF4FF"
                                alt="User profile picture" class="h-12 w-12 rounded-full">

                            <div class="self-center flex-1 text-black"><strong class="capitalize">PlayerAdm1</strong>
                                <p class="opacity-75 line-clamp-1 text-gray">Role title: Coach</p>
                            </div>
                        </a>

                        <div class="self-center flex flex-wrap gap-2">
                            <a
                                href="https://qa1.recruited.qualitapps.com/admin/schools/9c2845cc-7676-45e1-b498-13f930b22e9b/users/189/edit">
                                <button type="submit"
                                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                    Manage
                                </button>
                            </a>
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-6 py-2">
                        <a href="https://qa1.recruited.qualitapps.com/app/u/9c28453b-5cc0-4c0a-b9bf-9c6b95b44a70"
                            class="flex flex-row gap-4 flex-1"><img
                                src="https://ui-avatars.com/api/?name=P&amp;color=7F9CF5&amp;background=EBF4FF"
                                alt="User profile picture" class="h-12 w-12 rounded-full">

                            <div class="self-center flex-1 text-black"><strong class="capitalize">PlayerAdm1</strong>
                                <p class="opacity-75 line-clamp-1 text-gray">Role title: Coach</p>
                            </div>
                        </a>

                        <div class="self-center flex flex-wrap gap-2">
                            <a
                                href="https://qa1.recruited.qualitapps.com/admin/schools/9c2845cc-7676-45e1-b498-13f930b22e9b/users/189/edit">
                                <button type="submit"
                                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                    Manage
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-8"></div>


        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import { useNuxtApp } from '#app';
import { useRoute } from 'vue-router';
import Notification from '~/components/common/Notification.vue';

const route = useRoute(); // Use useRoute to access query parameters

// Access $adminService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const errors = ref([]);  // Array to hold error messages
const userStore = useUserStore();  // User store
const router = useRouter();  // Vue Router instance
const showNotification = ref(false);  // Boolean to show/hide notification
const notificationMessage = ref('');  // Message for the notification

// Define action, school_id, and staff as reactive refs
const action = ref('');  // Action type (e.g., manage, view)
const school_id = ref('');  // School ID
const staff = ref([]);  // Array to hold staff data

onMounted(() => {
  // Set initial values for action and school_id from route query parameters
  action.value = route.query.action || 'manage';
  school_id.value = route.query.school_id || '';

  // Fetch school staff data if action is 'manage'
  if (action.value === 'manage') {
    fetchSchoolStaff(school_id.value);
  }
});

// Fetch School Staff
const fetchSchoolStaff = async (schoolId) => {
  console.log('loading');
  errors.value = [];  // Clear any existing errors
  try {
    // Fetch staff data from the API using $adminService
    const staffData = await $adminService.list_school_staff(schoolId);
    console.log(staffData);
    staff.value = staffData || [];  // Set the fetched data to the staff ref
  } catch (error) {
    console.error('Failed to load school staff details:', error.message);
    errors.value.push('Failed to load school staff details.');
  }
};

</script>


<style scoped>
.container {
    max-width: 600px;
}
</style>