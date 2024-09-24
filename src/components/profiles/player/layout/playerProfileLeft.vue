<template>
    <!-- Start Profile pic section  -->
    <div class="m-5">

        <div class="group">
            <div class="text-center">
                <div class="w-[200px] h-[200px] relative">
                    <img class="mx-auto w-[200px] h-[200px] rounded-xl mt-3" src="@/assets/images/Rectangle 193.png"
                        alt="">
                    <div
                        class="absolute top-0 right-0 m-2 rounded-lg flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 bg-white p-[3px] rounded-md">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
                <div class="absolute">

                </div>
                <h3 class="text-lg font-semibold text-center text-black mt-2">{{ props.data.name }}
                </h3>
                <h5 class="text-normal text-md text-center text-black">{{ props.data.sportName }} player</h5>
            </div>
        </div>


        <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4 w-48 grid grid-cols-10">
                    <h1 class="text-lg font-semibold mb-4 text-black col-span-8">Bio</h1>
                    <h1 class="text-lg font-semibold mb-4 text-black col-span-2">
                        <div class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </div>
                    </h1>
                </div>
            </div>
            <p class="text-xs text-darkSlateBlue leading-relaxed mb-4">
                {{ props.data.bio }}
            </p>
        </div>

        <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4 w-48 grid grid-cols-10">
                    <h1 class="text-lg font-semibold mb-4 text-black col-span-8"></h1>
                    <h1 class="text-lg font-semibold mb-4 text-black col-span-2">
                        <div class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </div>
                    </h1>
                </div>
            </div>


            <!-- <div class="grid grid-cols-10">
                <div class="col-span-2 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                </div>
                <div class="col-span-8">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b>gmail</b> </p>
                </div>
            </div> -->
            <div v-if="userRole == 'coach' || userRole == 'admin'" class="grid grid-cols-10">
                            <div class="col-span-2 mx-auto" @click="toggleModal('info')">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                </svg>
                            </div>
                            <div class="col-span-8">
                                <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b>{{ props.data.phoneCode }} {{
                                phone }}</b> </p>
                            </div>
             </div>

            <div class="grid grid-cols-10">
                <div class="col-span-2 mx-auto">
                    <img class="mx-auto  rounded-xl w-[27px]" src="@/assets/images/ruler.png" alt="">
                </div>
                <div class="col-span-8">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b> 
                        {{ Number(props.data.feet) }} ( {{ props.data.heigth }} 
                        <span
                         v-if="props.data.heigth != 'User has not entered height'">cm)</span> </b> </p>
                </div>
            </div>

            <div class="grid grid-cols-10">
                <div class="col-span-2 mx-auto">
                    <img class="mx-auto  rounded-xl w-[22px]" src="@/assets/images/weight.png" alt="">
                </div>
                <div class="col-span-8">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2">
                        <b><span v-if="props.data.weight != 'User has not entered weight'">
                            {{ Number(props.data.pounds)
                            }} 
                            lb(</span> {{ props.data.weight }} <span
                             v-if="props.data.weight != 'User has not entered weight'">kg )</span></b>
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-10">
                <div class="col-span-2 mx-auto">
                    <img class="mx-auto  rounded-xl w-[20px]" src="@/assets/images/graduation.png" alt="">
                </div>
                <div class="col-span-8">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2">
                        <b>Graduation {{ props.data.graduationDate }}</b>
                    </p>
                </div>
            </div>

            <!-- <div class="grid grid-cols-10">
                <div class="col-span-2 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
                    </svg>

                </div>
                <div class="col-span-8">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2">
                        <b>Handness</b>
                    </p>
                </div>
            </div> -->

            <!-- <div class="grid grid-cols-10">
                <div class="col-span-2 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                    </svg>


                </div>
                <div class="col-span-8">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2">
                        <b>Nation</b>
                    </p>
                </div>
            </div> -->

            <div class="grid grid-cols-10">
                <div class="col-span-2 mx-auto">
                    <img class="mx-auto  rounded-xl w-[20px]" src="@/assets/images/bday.png" alt="">
                </div>
                <div class="col-span-8">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b>{{ props.data.birthday }}
                        <span v-if=" props.data.birthday != 'User has not entered birthday'">Years Old</span> </b></p>
                </div>
            </div>
        </div>


        <div style="height: 60px;"
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3 h-auto">
            <div class="grid grid-cols-10 gap-2">
                <div class="col-span-3">
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl " src="@/assets/user/images/Group 179.png" alt="">
                </div>
                <div class="col-span-6 ml-2">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3">Has {{ props.data.budgetMin }} -
                                    {{ props.data.budgetMax }}
                                </p>
                </div>
                <div class="col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>

        </div>

        <div style="height: 60px;"
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3 h-auto">
            <div class="grid grid-cols-10 gap-2">
                <div class="col-span-3">
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl " src="@/assets/images/pin.png" alt="">
                </div>
                <div class="col-span-6 ml-2">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3"><span
                                        v-if="userRole == 'coach' || userRole == 'admin'"> {{ props.data.addressLine01 }} {{
                                 props.data.addressLine02 }} {{  props.data.stateProvince }}</span> 
                                 {{  props.data.city }} , {{
                                    props.data.country }}
                                </p>

                </div>
                <div class="col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>

        </div>

        <div style="height: 60px;"
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3 h-auto">
            <div class="grid grid-cols-10 gap-2">
                <div class="col-span-3">
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl" src="@/assets/user/images/Group 79.png" alt="">
                </div>
                <div class="col-span-6 ml-2">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3">Signed up
                         {{ props.data.joinDate
                                    }}
                    </p>

                </div>
                <div class="col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>

        </div>
    </div>
    <!-- End Profile pic section  -->

        <!-- Modal Components with Standardized Props -->
        <NameModal :visible="modals.name" @close="handleModalClose" :slug="slug" />
        <BioModal :visible="modals.bio" @close="handleModalClose" :slug="slug" />
        <InfoModal :visible="modals.info" @close="handleModalClose" :slug="slug" />
        <BudgetModal :visible="modals.budget" @close="handleModalClose" :slug="slug" />
        <UTRModal :visible="modals.utr" @close="handleModalClose" :slug="slug" />
        <AddressModal :visible="modals.address" @close="handleModalClose" :slug="slug" />

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
import { useUserStore } from '~/stores/userStore';

import NameModal from '~/components/profiles/player/modals/nameModal.vue';
import BioModal from '~/components/profiles/player/modals/bioModal.vue';
import InfoModal from '~/components/profiles/player/modals/infoModal.vue';
import BudgetModal from '~/components/profiles/player/modals/budgetModal.vue';
import UTRModal from '~/components/profiles/player/modals/utrModal.vue';
import AddressModal from '~/components/profiles/player/modals/addressModal.vue';

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


// Define reactive state for all modals
const modals = reactive({
    name: false,
    bio: false,
    info: false,
    budget: false,
    utr: false,
    address: false,
});

// Generic toggle function
const toggleModal = (modalName) => {
    if (modals.hasOwnProperty(modalName)) {
        modals[modalName] = !modals[modalName];
    } else {
        console.warn(`Modal "${modalName}" does not exist.`);
    }
};



onMounted(() => {
    
    userRole.value = userStore.user?.role || null;
    console.log(props.data)
});
</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>