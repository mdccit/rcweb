<template>
    <div class="grid grid-cols-5 mt-8">
        <div class="col-span-4">
            <div class="col-span-5 sm:col-span-3 md:col-span-5 lg:col-span-2 xl:col-span-3 mb-5">

                <div
                    class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 text-gray-400 border-gray-400">
                  
                    <PlayerTabNavigation :tabs="tabs" :initialTab="tab" @tabChanged="handleTab" />

                </div>
            </div>
        </div>
        <div class="ml-2">
            <div class="flex">
                <div class="">
                    <!-- <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-500 m-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </button> -->
                </div>
                <div class="">
                    <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-5 text-blue-500 m-auto">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                        </svg>

                    </button>
                </div>

                <div v-if="buttonHide == false">
                    <button @click="connectAcceptOrConnect"
                        class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                        {{ connectionButtonName }}
                    </button>
                    <div v-if="connectionButtonName =='Accept connection'" class="text-white">
                        <button @click="connectReject" class="bg-red-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                            Reject
                       </button>
                    </div> 
                </div>
                <!-- <div>
                    <button class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px] text-white">
                        Accept
                    </button>
                </div>
                <div class="text-white">
                    <button class="bg-red-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                        Reject
                    </button>
                </div> -->
                <div class="">
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                        class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-5 text-blue-500 m-auto">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <div id="dropdown"
                        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">More</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref ,defineEmits ,onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import SocialHubNavbar from '~/components/user/navbar.vue';
import Filter from '~/components/user/feed/filter.vue';
import FooterBar from '~/components/user/user-footer.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';
import checkSession from '~/middleware/checkSession';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue';
import PlayerTabNavigation from '~/components/profiles/navigation/PlayerTabNavigation.vue';
import { useUserStore } from '~/stores/userStore';





defineNuxtRouteMiddleware(checkSession);
const nuxtApp = useNuxtApp();
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const feet = ref(0)
const pounds = ref(0)
const showFilterLeft = ref(false);
const $userService = nuxtApp.$userService;
const $feedService = nuxtApp.$feedService;
const $publicService = nuxtApp.$publicService;

const connectionStatus = ref(false)
const connectionType = ref(null)
const connectionButtonName = ref('Connect')
const buttonHide = ref(true);

router.beforeEach((to, from, next) => {
    loading.value = true;
    next();
});

router.afterEach(() => {
    loading.value = false;
});

const emit = defineEmits(['changeTab']);

const showNotification = ref(false);
const notificationMessage = ref('');
const notificationType = ref('');
const notificationKey = ref(0);
const userId = ref(null)
const playerId = ref(null)
// Sync the state from the notification plugin to the layout
watchEffect(() => {
    showNotification.value = nuxtApp.$notification.showNotification.value;
    notificationMessage.value = nuxtApp.$notification.notificationMessage.value;
    notificationType.value = nuxtApp.$notification.notification_type.value;
    notificationKey.value = nuxtApp.$notification.notificationKey.value;
});

const closeNotification = () => {
    showNotification.value = false; // Hide the notification
};

const tabs = ref([
    { name: 'feed', label: 'Post' },
    { name: 'connection', label: 'Connections' },
    { name: 'media', label: 'Media' }
]);

const tab = ref('feed');

const props = defineProps({
    
    userSlug: {
        type: String,
        required: true,
    },
}); 

const userStore = useUserStore();


onMounted(() => {
    userId.value = userStore.user?.user_id || null;
    fetchUserDetails()
    fetchCheckConnection()
});

const fetchUserDetails = async (slug) => {
  try {
    const dataSets = await $publicService.get_user_profile(props.userSlug);
    playerId.value = dataSets.user_basic_info.id || null;
  }catch(error){
    console.error('Error fetching data:', error.message);
  }
}
// Function to handle tab change
const handleTab = (selectedTab) => {
    tab.value = selectedTab;
    emit('changeTab',selectedTab)
};

const fetchCheckConnection = async () => {
    try {
     
       connectionButtonName.value = "Connect"
        if (props.userSlug != null) {
            const dataSets = await $userService.get_check_connection_type(props.userSlug);
           
            connectionStatus.value = dataSets.connection
            if (connectionStatus.value == true) {
                connectionType.value = dataSets.type
                if ((dataSets.type.connection_status == 'pending') && (dataSets.type.sender_id == userId.value)) {
                    buttonHide.value = false

                    connectionButtonName.value = "Invite sent"
                }

                if ((dataSets.type.connection_status == 'pending') && (dataSets.type.receiver_id == userId.value)) {
                    buttonHide.value = false
                    connectionButtonName.value = "Accept connection"
                }

                if (dataSets.type.connection_status == 'accepted') {
                    buttonHide.value = true

                    connectionButtonName.value = "Connected"
                }
            } else {
                buttonHide.value = false
                connectionButtonName.value = "Connect"
            }

        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

const connectAcceptOrConnect = async () => {

try {
    if (connectionButtonName.value == "Accept connection") {
        await $userService.connection_accept(connectionType.value.id, {
            connection_status: "accepted"
        });
    }

    if (connectionButtonName.value == "Connect") {
        if (playerId.value != null) {
            const response = await $userService.connection_request({
                receiver_id: playerId.value
            });

            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        }

    }

     fetchCheckConnection();

} catch (error) {
    console.error('Failed to Connect :', error.message);
}
}

const connectReject = async () => {
try {
    await $userService.connection_reject(connectionType.value.id, {
        connection_status: "rejected"
    });
    
    fetchCheckConnection();

} catch (error) {
    console.error('Failed to Connect :', error.message);
}
}
</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>