<template>
    <div class="m-2">
        <div class="flex">
            <!-- <div class=""> -->
                <!-- <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-500 m-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </button> -->
            <!-- </div> -->
            <!-- <div class="">
                <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5 text-blue-500 m-auto">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>

                </button>
            </div> -->

            <!-- <div v-if="buttonHide == false">
                <button @click="connectAcceptOrConnect"
                    class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                    {{ connectionButtonName }}
                </button>
            </div> -->
            <!-- <div>
                <button class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                    Accept
                </button>
            </div> -->
            <!-- <div>
                                <button  
                                    class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                    Regect
                                </button>
                            </div> -->
            <!-- <div class="">
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
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
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
            </div> -->



        </div>
    </div>
    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-blue-500 p-3 mt-2 text-white">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4 w-48 grid grid-cols-10">
                <h1 class="text-lg font-semibold mb-4 text-black col-span-8"></h1>
                <h1 class="text-lg font-semibold mb-4 text-black col-span-2">
                    <div class="cursor-pointer mr-[20px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 bg-white rounded-sm m-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </h1>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            <div class="">
                <h2 class="text-lg font-semibold mb-4">UTR score</h2>
            </div>
            <div class="">
                <h2 class="text-lg font-semibold mb-4">{{ props.data.utr }}</h2>
            </div>
            <div class="">
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">GPA</p>
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">SAT Score</p>
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">TOEFL Score</p>
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">GPA</p>
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">SAT Score</p>
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">TOEFL Score</p>
                <p class="text-lg font-semibold mb-4 text-sm text-normal">ATP Ranking</p>
                <p class="text-lg font-semibold mb-4 text-sm text-normal">ITF Ranking</p>
                                <!-- <<p  v-if="userRole !='coach'|| userRole!='admin'" class="text-lg font-semibold mb-4 text-sm text-normal">WTN</p> -->
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">ACT</p>
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">ACT</p>
                <p class="text-lg font-semibold mb-4 text-sm text-normal">National Ranking</p>
            </div>
            <div class="">
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">{{  props.data.gpa }}</p>
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">{{  props.data.sat }}</p>
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">{{  props.data.toefl }}</p>
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">{{  props.data.gpa }}</p>
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">{{  props.data.sat }}</p>
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">{{  props.data.toefl }}</p>
                <p class="text-lg font-semibold mb-4 text-sm text-normal">{{  props.data.atp }}</p>
                <p class="text-lg font-semibold mb-4 text-sm text-normal">{{  props.data.itf }}</p>
                                <!-- <<p  v-if="userRole !='coach'|| userRole!='admin'" class="text-lg font-semibold mb-4 text-sm text-normal">{{ wtn }}</p> -->
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">{{  props.data.act }}</p>
                <p v-if="userRole == 'coach' || userRole == 'admin'"
                    class="text-lg font-semibold mb-4 text-sm text-normal">{{  props.data.act }}</p>
                <p class="text-lg font-semibold mb-4 text-sm text-normal">{{  props.data.nationalRanking }}</p>

            </div>
        </div>




    </div>
</template>

<script setup>
import { ref ,onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import SocialHubNavbar from '~/components/user/navbar.vue';
import Filter from '~/components/user/feed/filter.vue';
import FooterBar from '~/components/user/user-footer.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';
import checkSession from '~/middleware/checkSession';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue';
import { useUserStore } from '~/stores/userStore';

const userStore = useUserStore();

defineNuxtRouteMiddleware(checkSession);
const nuxtApp = useNuxtApp();
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const feet = ref(0)
const pounds = ref(0)
const showFilterLeft = ref(false);

router.beforeEach((to, from, next) => {
    loading.value = true;
    next();
});

router.afterEach(() => {
    loading.value = false;
});


const showNotification = ref(false);
const notificationMessage = ref('');
const notificationType = ref('');
const notificationKey = ref(0);

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

const userRole = ref(null)

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});

onMounted(() => {
    
    userRole.value = userStore.user?.role || null;
   
});
</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>