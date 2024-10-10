<template>
    <!-- Start Profile pic section  -->
    <div>

        <div class="group">
            <div class="text-center">
                <div class="relative">
                    <!-- <img class="mx-auto w-44 h-44 rounded-[30px] mt-3" :src="profilePictureUrl" alt=""> -->
                    <img v-if="profile_picture != null"class="mx-auto w-44 h-44 rounded-[30px] mt-3" :src="profile_picture" alt="">
                    <img v-else class="mx-auto w-44 h-44 rounded-[30px] mt-3" src="@/assets/images/user.png" alt="">

                    <div v-if="loggedUserSlug == props.userSlug" @click="toggleModal('name')"
                        class="absolute bottom-4 right-8 w-6 h-6 bg-timberwolf rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer text-steelBlue">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
                <div class="absolute">

                </div>
                <h3 class="text-xl font-medium text-center text-black mt-2">{{ props.data.name }}
                </h3>
                <h5 class="text-sm text-center text-black">{{ props.data.sportName }} player </h5>
            </div>
        </div>


        <div
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white py-6 px-4 mt-3">
            <div class="flex items-center justify-between">
                <div class="grid grid-cols-10 gap-2">
                    <h1 class="text-lg font-semibold mb-4 text-black col-span-9">Bio</h1>
                    <h1 class="2mb-2col-span-1" v-if="loggedUserSlug == props.userSlug"
                        @click="toggleModal('bio')">
                        <div class="w-5 h-5 bg-timberwolf rounded-full flex justify-center items-center cursor-pointer text-steelBlue">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </div>
                    </h1>
                </div>
            </div>
            <p class="text-sm text-darkSlateBlue leading-relaxed">
                {{ bio }}
            </p>
            <div v-if="seeMoreBtnHide">
                <button id="seeMoreBtn" @click="toggleText">{{ expandBtnName }}</button>

            </div>
        </div>


        <!-- INFO SECTION  -->
        <div
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white py-6 px-4 mt-3">
            <div class="flex items-center justify-between">
                <div class="grid grid-cols-10 gap-2">
                    <h1 class="text-lg font-semibold mb-4 text-black col-span-9"></h1>
                    <h1 class="mb-2col-span-1">
                        <div class="w-5 h-5 bg-timberwolf rounded-full flex justify-center items-center cursor-pointer text-steelBlue" v-if="loggedUserSlug == props.userSlug"
                            @click="toggleModal('info')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </div>
                    </h1>
                </div>
            </div>


            <!-- <div v-if="userRole == 'coach' || userRole == 'admin'" class="grid grid-cols-10">
                <div class="col-span-2 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                </div>
                <div class="col-span-8">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b>{{ props.data.email }}</b> </p>
                </div>
            </div>
            <div v-if="userRole == 'coach' || userRole == 'admin'" class="grid grid-cols-10">
            </div>
             <div v-if="loggedUserSlug == props.userSlug" class="grid grid-cols-10">
                <div class="col-span-2 mx-auto" @click="toggleModal('info')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                </div>
                <div class="col-span-8">
                    <p class="text-sm text-black leading-relaxed mb-4"> <b>{{ props.data.phoneCode }} {{
                        phone }}</b> </p>
                </div>
            </div>
           
            <div v-if="userRole == 'coach' || loggedUserSlug == props.userSlug"  class="grid grid-cols-10">
            </div> -->
            
           

            <div class="grid grid-cols-10">
                <div class="col-span-2 mx-auto">
                    <img class="mx-auto  rounded-xl w-[27px]" src="@/assets/images/ruler.png" alt="">
                </div>
                <div class="col-span-8">
                    <p class="text-sm text-black leading-relaxed mb-4 ">
                        {{ Number(props.data.ft_value)   }} {{Number(props.data.in_value)}} ( {{ props.data.heigth }}
                        <span v-if="props.data.heigth != 'User has not entered height'">cm)</span>
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-10">
                <div class="col-span-2 mx-auto">
                    <img class="mx-auto  rounded-xl w-[22px]" src="@/assets/images/weight.png" alt="">
                </div>
                <div class="col-span-8">
                    <p class="text-sm text-black leading-relaxed mb-4 ">
                        
                        <span v-if="props.data.weight != 'User has not entered weight'">
                            {{ Number(props.data.pounds)
                            }}
                            lb(</span> {{ props.data.weight }} <span
                            v-if="props.data.weight != 'User has not entered weight'">kg )</span>
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-10">
                <div class="col-span-2 mx-auto">
                    <img class="mx-auto  rounded-xl w-[20px]" src="@/assets/images/graduation.png" alt="">
                </div>
                <div class="col-span-8">
                    <p class="text-sm text-black leading-relaxed mb-4">
                        Graduation {{ props.data.graduationDate }}
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
                    <p class="text-sm text-black leading-relaxed mb-4 "> {{ props.data.birthday }}
                        <span v-if="props.data.birthday != 'User has not entered birthday'">Years Old</span>
                    </p>
                </div>
            </div>
        </div>

        <!-- CONTACT INFO SECTION  -->
       


        <div style="height: auto;"
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white p-3 mt-3 h-auto">
            <div class="grid grid-cols-10 gap-2">
                <div class="col-span-3 mx-auto">
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl " src="@/assets/user/images/Group 179.png" alt="">
                </div>
                <div class="col-span-6 ml-2 mx-auto">
                    <p class="text-xs">Budget
                    </p>
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto">${{ props.data.budgetMin }} -
                        ${{ props.data.budgetMax }}
                    </p>
                </div>
                <div class="col-span-1">
                    <div class="w-5 h-5 bg-timberwolf rounded-full flex justify-center items-center cursor-pointer text-steelBlue"  v-if="loggedUserSlug == props.userSlug" @click="toggleModal('budget')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    </div>
                </div>
            </div>

        </div>


        <div
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white py-4 px-4 mt-3">
            <div class="flex items-center justify-between">
                <div class="grid grid-cols-10 gap-2">
                    <h1 class="text-lg font-semibold mb-4 text-black col-span-9"></h1>
                    <h1 class=" mb-2 text-black col-span-1">
                        <div class="col-span-1">
                            <div class="w-5 h-5 bg-timberwolf rounded-full flex justify-center items-center cursor-pointer text-steelBlue"  v-if="loggedUserSlug == props.userSlug" @click="toggleModal('address')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </div>
                        </div>
                    </h1>
                </div>
            </div>


            <div class="grid grid-cols-10">
                <div class="col-span-2 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                </div>
                <div class="col-span-8">
                    <p class="text-sm text-black leading-relaxed mb-4 break-all"> {{ props.data.email }} </p>
                </div>
            </div>
           
            <div v-if="userRole == 'coach' || userRole == 'admin' || loggedUserSlug == props.userSlug" class="grid grid-cols-10">
                <div class="col-span-2 mx-auto" @click="toggleModal('info')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                </div>
                <div class="col-span-8">
                    <p class="text-sm text-black leading-relaxed mb-4"> <b>{{ props.data.phoneCode }} {{
                        props.data.phone }}</b> </p>
                </div>
            </div>
        </div>

        <!-- <div style="height: auto;"
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white p-3 mt-3 h-auto">
            <div class="grid grid-cols-10 gap-2">
                <div class="col-span-3 mx-auto">
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl " src="@/assets/images/pin.png" alt="">
                </div>
                <div class="col-span-6 ml-2 mx-auto">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3">
                        <span v-if="userRole == 'coach' || userRole == 'admin'">
                            {{ props.data.addressLine01 }} {{ props.data.addressLine02 }} {{ props.data.stateProvince }}
                        </span>
                        {{ props.data.city }}
                        <span v-if="props.data.country">, </span>{{ props.data.country }}
                    </p>


                </div>
                <div class="col-span-1" v-if="loggedUserSlug == props.userSlug" @click="toggleModal('address')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>

        </div> -->

        <div style="height: auto;"
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white p-3 mt-3 h-auto">
            <div class="grid grid-cols-10 gap-2 mx-auto">
                <div class="col-span-3 m-auto">
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl" src="@/assets/user/images/Group 79.png" alt="">
                </div>
                <div class="col-span-6 ml-2">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3">Signed up
                        {{ props.data.joinDate
                        }}
                    </p>

                </div>
                <div class="col-span-1">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg> -->
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
    <AddressModal :visible="modals.address" @close="handleModalClose" :slug="slug" />

</template>

<script setup>
import { ref, onMounted ,watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import checkSession from '~/middleware/checkSession';
import { useNuxtApp } from '#app';
import { useUserStore } from '~/stores/userStore';

import NameModal from '~/components/profiles/player/modals/nameModal.vue';
import BioModal from '~/components/profiles/player/modals/bioModal.vue';
import InfoModal from '~/components/profiles/player/modals/infoModal.vue';
import BudgetModal from '~/components/profiles/player/modals/budgetModal.vue';
import AddressModal from '~/components/profiles/player/modals/addressModal.vue';
import { loadCountryList } from '~/services/commonService';
// Import the default profile picture
import defaultProfilePicture from '@/assets/images/user.png';

const userStore = useUserStore();

defineNuxtRouteMiddleware(checkSession);
const nuxtApp = useNuxtApp();
const $publicService = nuxtApp.$publicService;
const $userService = nuxtApp.$userService;

// const loggedUserSlug = userStore.getSlug();
const loggedUserSlug = ref('');
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const feet = ref(0);
const pounds = ref(0);
const showFilterLeft = ref(false);
const slug = ref('');
const profile_picture = ref(null);

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



const userRole = ref(null)

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    userSlug: {
        type: String,
        required: true,
    },
    loadedSlug: {
        type: String,
        required: true,
    },
});


const heigth = ref('');
const weight = ref('');
const graduationDate = ref('');
const joinDate = ref('')
const utr = ref(0)
const gpa = ref("Unknown")
const sat = ref("Unknown")
const toefl = ref("Unknown")
const atp = ref("Unknown")
const itf = ref("Unknown")
const connections = ref([])
const posts = ref([])
const connectionStatus = ref(false)
const connectionType = ref(null)
const connectionButtonName = ref('Connect')
const userId = ref('')
const playerID = ref('')
const sportName = ref('')
const phone = ref('')
const wtn = ref('')
const act = ref('')
const nationalRanking = ref('')
const handness = ref('')
const preferredSurface = ref('');
const loadedSlug = ref('')
const isEdit = ref('');
const isBioExpanded = ref(false);
const seeMoreBtnHide = ref(false);
const bio = ref('')
const expandBtnName = ref('See More');

const triggerProfilePictureUpdate = (url) => {
    //profile_picture.value = url || defaultProfilePicture;
};
const country_codes = ref([]);


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

// Generic function to close the modal and fetch user details
const handleModalClose = (modalName) => {
    // Defensive check to make sure modalName exists
    if (modals[modalName] !== undefined) {
        modals[modalName] = false;  // Close the modal
        fetchUserDetails();         // Fetch updated user details after closing
    } else {
        console.error(`Invalid modal name: ${modalName}`);
    }
};

const fetchUserDetails = async (slug) => {
    try {

        const dataSets = await $publicService.get_user_profile(route.params.slug);
        if (dataSets.user_basic_info) {

            props.data.bio = dataSets.user_basic_info.bio ?? "User has not entered bio"
            props.data.name = dataSets.user_basic_info.display_name ?? "User has not entered name";

            const birthDate = new Date(dataSets.user_basic_info.date_of_birth);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            props.data.birthday = age ?? 'User has not entered birthday'

            const date = new Date(dataSets.user_basic_info.joined_at);
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            const year = date.getFullYear();
            const month = monthNames[date.getMonth()];
            const day = date.getDate();
            joinDate.value = `${year} ${month} ${day}`

            props.data.nationality = dataSets.user_basic_info.nationality ?? "User has not entered nationality"
            props.data.email = dataSets.user_basic_info.email ?? "User has not entered email"
            props.data.gender = dataSets.user_basic_info.gender ?? "User has not entered gender"


        }

        if (dataSets.user_address_info) {
            props.data.city = dataSets.user_address_info.city ?? 'User has not entered city'
            props.data.addressLine01 = dataSets.user_address_info.address_line_1 ?? 'User has not entered address line 01'
            props.data.addressLine02 = dataSets.user_address_info.address_line_2 ?? ''
            props.data.stateProvince = dataSets.user_address_info.state_province ?? 'User has not entered stare provice'
        }

        // if (dataSets.user_basic_info) {
        //         props.data.country = dataSets.user_basic_info.country_id
        // }

        if (dataSets.user_basic_info) {
            const country = country_codes.value.find(c => c.value === dataSets.user_basic_info.country_id);
            if (country) {
                props.data.country = country.label;
            }
        }

        if (dataSets.user_phone_info) {
            props.data.phone = dataSets.user_phone_info.phone_number ?? 'User has not entered phone number'
            props.data.phoneCode = dataSets.user_phone_info.phone_code ?? ''
        }

        if (dataSets.player_info) {
            heigth.value = dataSets.player_info.height ?? 'User has not entered height'
            weight.value = dataSets.player_info.weight ?? 'User has not entered weight'
            utr.value = dataSets.player_info.other_data.utr ?? 0
            gpa.value = dataSets.player_info.gpa ?? "Unknown"
            sportName.value = dataSets.player_info.sport_name ?? 'User has not entered sport'

            if (dataSets.player_info.other_data) {
                props.data.budgetMin = dataSets.player_info.other_data.budget_min ?? null
                props.data.budgetMax = dataSets.player_info.other_data.budget_max ?? null
                sat.value = dataSets.player_info ? dataSets.player_info.other_data.sat_score : "Unknown"
                toefl.value = dataSets.player_info ? dataSets.player_info.other_data.toefl_score : "Unknown"
                atp.value = dataSets.player_info.other_data.atp_ranking ?? "Unknown"
                itf.value = dataSets.player_info.other_data.itf_ranking ?? "Unknown"
                act.value = dataSets.player_info.other_data.act_score ?? "Unknown"
                wtn.value = dataSets.player_info.other_data.wtn_score_manual ?? "Unknown"
                nationalRanking.value = dataSets.player_info.other_data.national_ranking ?? "Unknown"
                handness.value = dataSets.player_info.other_data.handedness ?? "User has not entered handness"
                preferredSurface.value = dataSets.player_info.other_data.preferred_surface ?? "User has not entered preferred surface"

            }

            const parsedDate = new Date(dataSets.player_info.graduation_month_year);
            const options = { year: 'numeric', month: 'long' };
            graduationDate.value = parsedDate.toLocaleDateString('en-US', options) ?? 'User has not entered graduation date'

            feet.value = dataSets.player_info.height / 30.48;
            pounds.value = 2.20462 * dataSets.player_info.weight
        }

        if (dataSets.media_info.profile_picture != null) {
            //triggerProfilePictureUpdate(dataSets.media_info.profile_picture.url);
            profile_picture.value = dataSets.media_info.profile_picture.url;
        } else {
            // Fallback to default
            //triggerProfilePictureUpdate(defaultProfilePicture);
            profile_picture.value = null
            // profile_picture.value = dataSets.media_info.profile_picture.url || defaultProfilePicture;
        }

    } catch (error) {
        console.log(error)
        console.error('Error fetching data:', error.message);
    }
}


// Computed profile picture URL
const profilePictureUrl = computed(() => profile_picture.value);
// Watch for changes in props.data
watch(
    () => props.data,
  () => {
    setprofile() 
  },
    () => props.data,
  () => {
    setBio() 
  },
    () => props.data,
    (newVal) => {
        // if (newVal && newVal.media_info) {
        //     if(newVal.media_info.profile_picture !=null){
        //         profile_picture.value = newVal.media_info.profile_picture?.url
        //     }else{
        //         profile_picture.value =  defaultProfilePicture;
        //     }
            
        // } else {
        //     profile_picture.value = defaultProfilePicture; // Fallback to default if media_info is undefined
        // }
        
    },
    { immediate: true } ,
    
    

    // Execute immediately when component is mounted
);

const setprofile = () =>{
    if(props.data.media_info.profile_picture !=null){
       profile_picture.value = props.data.media_info.profile_picture?.url
    }else{
       profile_picture.value =  null
    }
    console.log(7514)

    console.log(profile_picture.value)
}

const setBio = () =>{
    let fullBio =  props.data.bio || ''; // This ensures fullBio is at least an empty string
    console.log(fullBio)
    bio.value = fullBio.length > 100 ? fullBio.substring(0, 100) + '...' : fullBio;
    seeMoreBtnHide.value = fullBio.length > 100 ? true + '...' : false;
    isBioExpanded.value = false
}
// watch(profile_picture, (newVal) => {
//     // profilePictureUrl.value = newVal;
//     console.log('Profile picture updated:', newVal);
// });

onMounted(() => {
    userRole.value = userStore.user?.role || null;
    slug.value = props.userSlug;


    loadCountries();

    if (process.client) {
        loggedUserSlug.value = localStorage.getItem('user_slug')
    }

    // Set profile picture when props.data becomes available
    // if (userStore.userProfilePicture !=null) {
    //     console.log('media available');
    //     profile_picture.value = userStore.userProfilePicture?.url || defaultProfilePicture;
    // } else {
    //     console.log('media not available');
    //     profile_picture.value = defaultProfilePicture;
    // }

});




const toggleText = () => {
    isBioExpanded.value = !isBioExpanded.value;
    if (isBioExpanded.value) {
        bio.value = props.data.bio;
        expandBtnName.value = 'See Less'
    } else {
        bio.value = props.data.bio.substring(0, 100) + '...';
        expandBtnName.value = 'See More'
    }

}

const loadCountries = async () => {
    try {
        country_codes.value = await loadCountryList();
    } catch (err) {
        console.error('Error loading country codes:', err);
    }
};
</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>