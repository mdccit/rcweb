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
                <NuxtLink :to="`/app/profile/business/${slug}`">
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
                </NuxtLink>
            </div>
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
                                <strong class="capitalize">{{ member.name }}</strong>
                                <p class="opacity-75 line-clamp-1 text-black">Role title: {{ member.user_role }}</p>
                            </div>
                            <div class="self-center flex flex-wrap gap-2">
                                <NuxtLink :to="`/admin/userAccountDetails?action=edit&user_id=${member.user_id}`">
                                    <button type="submit"
                                        class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-blue-300 focus:ring-blue-200">
                                        Manage
                                    </button>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-16"></div>
            </div>
        </div>
    </div>


    <!-- Member Modal -->
    <div class="w-full sm:max-w-md md:max-w-xl lg:max-w-2xl">
        <div id="headlessui-dialog-panel-17" data-headlessui-state="open" unmount="true" dusk="modal-dialog">
            <div class="bg-white p-8 md:p-12 rounded-xl relative">
                <div class="absolute top-0 right-0 pt-8 pr-8 md:pt-12 md:pr-12"><button dusk="close-modal-button"
                        type="button" class="text-gray-400 hover:text-gray-500"><span class="sr-only">Close</span><svg
                            class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6l-12 12"></path>
                            <path d="M6 6l12 12"></path>
                        </svg></button></div>
                <h1 class="font-bold text-2xl mb-3">Updating QATest_Player01</h1>
                <form data-splade-id="26t16Mg38oWsOaQI" method="PUT"
                    action="https://qa1.recruited.qualitapps.com/admin/businesses/9c7d0c22-c388-4383-8da0-4d83319cf4ba/users/9c08427b-b28b-41ed-8f60-ce7bc26f201c">
                    <fieldset>
                        <div class=""><label class="block"><span class="block mb-1 text-gray-700 font-sans"> Role name
                                </span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                        class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        name="role" type="text" data-validation-key="role"></div>
                            </label><!----></div>
                        <div class="my-8"></div>
                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans">
                                    Account type </span>
                                <div class="relative">
                                    <div class=""><select name="is_admin" data-validation-key="is_admin"
                                            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                                            <option value="1"> Admin (can manage users and posts) </option>
                                            <option value="0"> Member (can post) </option>
                                        </select></div><!---->
                                </div>
                            </label><!----></div>
                        <div class="my-8"></div>
                        <div class="self-center">
                            <button type="submit"
                                class="border mr-2 rounded-full text-white shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-steelBlue hover:bg-blue-600">
                                <div class="flex flex-row items-center justify-center"><!----><span class=""> Save
                                    </span></div>
                            </button>
                            <button type="submit"
                                class="border rounded-full shadow-sm text-white font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-red-500 hover:bg-blue-600">
                                <div class="flex flex-row items-center justify-center"><!----><span class=""> Remove Member
                                    </span></div>
                            </button>
                        </div>
                    </fieldset>
                </form>

            </div>
        </div>
    </div>


</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

import Notification from '~/components/common/Notification.vue';
import BusinessNavigation from '~/components/admin/business/BusinessNavigation.vue';

const route = useRoute();
const router = useRouter();
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const business_id = ref('');
const members = ref([]); // Array to store members
const errors = ref([]);  // Array to handle error messages
const name = ref('')
const slug = ref('')
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
</script>


<style scoped>
.container {
    max-width: 600px;
}
</style>
