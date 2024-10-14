<template>
    <header class="bg-gray-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <div class="flex items-center gap-4"><NuxtLink to="/admin/users?role=1"><svg
                            class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg></NuxtLink>
                    <h2 class="font-bold text-lg self-center"> Editing:{{ display_name }} </h2>
                </div>
                <div class="">
                    <a href="#"><button type="submit"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                            View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
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


    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-7">
        <userEditSection :user_id="user_id" />

            <div class="my-8"></div>
            <div class="">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="border-2 p-4 rounded">
                            <!-- <form data-splade-id="lG7kPED3SwnY6Kgk" 
                                > -->
                            <fieldset> Delete user <div class=""><button type="submit" @click="deleteShowModal = true"
                                        class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-red-500 hover:bg-red-700 text-white border-transparent focus:border-red-700 focus:ring-red-200">
                                        <div class="flex flex-row items-center justify-center"><!----><span class="">
                                                Delete account </span></div>
                                    </button></div>
                            </fieldset>
                            <!-- </form> -->
                        </div>
                        <!-- <div class="border-2 p-4 rounded">
                            <form data-splade-id="Hpo3ObWiUibl9vmk" method="POST"
                                action="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/danger-zone/disable-2fa">
                                <fieldset> Disable 2FA <div class=""><button type="submit"
                                            class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                            <div class="flex flex-row items-center justify-center"><span
                                                    class=""> Disable 2FA </span></div>
                                        </button></div>
                                </fieldset>
                            </form>
                        </div> -->
                        <div class="border-2 p-4 rounded">
                            <!-- <form data-splade-id="0wHwJIPukhfUwTOg"> -->
                            <fieldset> Log out sessions <div class=""><button type="button" @click="showModal = true"
                                        class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                        <div class="flex flex-row items-center justify-center"><!----><span class="">
                                                Log out sessions </span></div>
                                    </button></div>
                            </fieldset>
                            <!-- </form> -->
                        </div>
                        <!-- <div class="border-2 p-4 rounded">
                            <div class=""> Send notification to user manually </div><a
                                href="https://qa1.recruited.qualitapps.com/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/danger-zone/create-notification"><button
                                    type="submit"
                                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                    <div class="flex flex-row items-center justify-center"><span class=""> Send
                                            notification </span></div>
                                </button></a>
                        </div> -->
                    </div>
                </div>
        </div>
        
        <!-- Admin User Session delete Modal Component -->
        <AdminUserLogoutSession :isVisible="showModal" @close="showModal = false" :userId="user_id"
            @emitMessage="notification" />

        <!-- Admin User  delete Modal Component -->
        <AdminUserDelete :isVisible="deleteShowModal" @close="deleteShowModal = false" :userId="user_id"
            @emitMessage="notification" />

        <!-- Notification Component -->
        <Notification v-if="showNotification" :message="notificationMessage" :duration="8000" />
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '~/stores/userStore'
import AdminUserCreateModal from '~/components/admin/user/adminUserCreateModal.vue';
import AdminUserLogoutSession from '~/components/admin/user/adminUserLogoutSession.vue';
import AdminUserDelete from '~/components/admin/user/adminUserDelete.vue';
import Notification from '~/components/common/Notification.vue';
import userEditSection from '~/components/admin/user/userEditSections.vue';
import { useNuxtApp } from '#app';

import { useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter();
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;
const user_id = ref(route.params.user_id || '');
const action = ref(route.params.action || 'view'); // default to 'view' if action not provided

const notificationMessage = ref('');
const showNotification = ref(false);

const showModal = ref(false);
const deleteShowModal = ref(false);

const userStore = useUserStore()

const email = userStore.user?.email;
const token = userStore.user?.token;

// Reference to the modal component
const modalRef = ref(null);
const display_name =ref('')

// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
};


const notification = (message) => {

    notificationMessage.value = message;
    showNotification.value = true
}

const goBack = () =>{
    router.back();
}
onMounted(() => {
    action.value = route.query.action || 'view';
    user_id.value = route.query.user_id || '';

    if (action.value === 'view' || action.value === 'edit') {
        fetchUserDetails();
    }
});

watch([() => route.query.action, () => route.query.user_id], ([newAction, newUserId]) => {
    action.value = newAction || 'view';
    user_id.value = newUserId || '';

    if (action.value === 'create') {
        clearForm();  // Clear form for "create"
    } else if (action.value === 'edit' || action.value === 'view') {
        fetchUserDetails();  
    }
});

const fetchUserDetails = async () => {
    try {
        const response = await $adminService.get_user_details(user_id.value);
        const user = response.user_basic_info;
        display_name.value = response.user_basic_info.display_name

        console.log(response.media_info)
        if( response.media_info){
            setGalleryItems(response.media_info)
        }

    } catch (error) {
        console.log(error)
        nuxtApp.$notification.triggerNotification(error.message, 'failure');
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
