<template>
        <div class="p-3">
        <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white p-3 mt-3">
            <div class="flex items-center justify-between w-full">
                <h1 class="text-lg font-semibold text-black">Bio</h1>
                <div class="w-5 h-5 bg-timberwolf rounded-full flex justify-center items-center cursor-pointer text-steelBlue" v-if="loggedUserSlug == props.userSlug" @click="toggleModal('bio')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
            <p class="text-xs text-darkSlateBlue leading-relaxed mb-4 break-all">
                {{ props.data.bio }}
            </p>
            <div v-if="seeMoreBtnHide">
                <button id="seeMoreBtn" @click="toggleText">{{ expandBtnName }}</button>
            </div>
        </div>

        <!-- <div style="height: 60px;"
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3 h-auto">
            <div class="grid grid-cols-10 gap-2">
                <div class="col-span-3">
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl" src="@/assets/user/images/Group 79.png" alt="">
                </div>
                <div class="col-span-6 ml-2">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3">Signed up
                        {{ props.data.joinAt }}
                    </p>

                </div>
                <div class="col-span-1" v-if="loggedUserSlug == props.userSlug" @click="toggleModal('info')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>

        </div> -->


        
        <div style="height:auto"
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white p-3 mt-3 h-auto">
            <div class="grid grid-cols-10 gap-2">
                <div class="col-span-3 mx-auto">
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl" src="@/assets/user/images/Group 79.png" alt="">
                </div>
                <div class="col-span-6 ml-2">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto">Signed up
                        {{ props.data.joinAt }}
                    </p>

                </div>
                <!-- <div class="col-span-1" @click="toggleModal('info')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div> -->
            </div>

        </div>
		

        <!-- <div style="height: 60px;"
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3 h-auto">
            <div class="grid grid-cols-10 gap-2">
                <div class="col-span-3">
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl" src="@/assets/images/pin.png" alt="">
                </div>
                <div class="col-span-6 ml-2">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3"> {{ props.data.country }}
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

        <div style="height:auto"
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white border-opacity-40 p-3 mt-3 h-auto">
            <div class="grid grid-cols-12 gap-2">
                <div class="col-span-3 mx-auto">
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl" src="@/assets/images/pin.png" alt="">
                </div>
                <div class="col-span-7 ml-2 mx-auto">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-2">{{ props.data.city }}<span v-if="props.data.country && props.data.city">, </span> {{ props.data.country }}
                    </p>

                </div>
                <div class="col-span-2 ml-2">
                    <div class="w-5 h-5 bg-timberwolf rounded-full flex justify-center items-center cursor-pointer text-steelBlue" v-if="loggedUserSlug == props.userSlug" @click="toggleModal('address')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
                </div>
            </div>

        </div>

    </div>
    <NameModal :visible="modals.name" @close="handleModalClose" :slug="slug" />
    <BioModal :visible="modals.bio" @close="handleModalClose" :slug="slug" />
    <InfoModal :visible="modals.info" @close="handleModalClose" :slug="slug" />
    <AddressModal :visible="modals.address" @close="handleModalClose" :slug="slug" />
</template>

<script setup>
import { ref, onMounted, reactive, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import checkSession from '~/middleware/checkSession';
import { useNuxtApp } from '#app';
import { useUserStore } from '~/stores/userStore';
import BioModal from '~/components/profiles/businessUserProfile/modals/bioModal.vue';
import InfoModal from '~/components/profiles/businessUserProfile/modals/infoModal.vue';
import AddressModal from '~/components/profiles/businessUserProfile/modals/addressModal.vue';
import NameModal from '~/components/profiles/businessUserProfile/modals/nameModal.vue';

const userStore = useUserStore();
const isBioExpanded = ref(false);
const seeMoreBtnHide = ref(false);
const bio = ref('')
const expandBtnName = ref('See More')
const nuxtApp = useNuxtApp();
const $publicService = nuxtApp.$publicService;
const $userService = nuxtApp.$userService;

const router = useRouter();
const route = useRoute();
const slug = ref('');
const userRole = ref('');
const loggedUserSlug = ref('');
const joinDate = ref('');

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    userSlug: {
        type: String,
        required: true,
    },
});

onMounted(() => {
    userRole.value = userStore.user?.role || null;
    slug.value = props.userSlug;
    //loadedData.value = props.data;
    if (process.client) {
        loggedUserSlug.value = localStorage.getItem('user_slug')
    }
});


const setBio = () => {
    let fullBio = props.data.bio || ''; // This ensures fullBio is at least an empty string
    bio.value = fullBio.length > 100 ? fullBio.substring(0, 100) + '...' : fullBio;
    seeMoreBtnHide.value = fullBio.length > 100 ? true + '...' : false;
    isBioExpanded.value = false
}
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


// Define reactive state for all modals
const modals = reactive({
    name: false,
    bio: false,
    info: false,
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
    console.log('Modal Name received:', modalName);
    // Defensive check to make sure modalName exists
    if (modals[modalName] !== undefined) {
        modals[modalName] = false;  // Close the modal
        fetchUserDetails();         // Fetch updated user details after closing
    } else {
        console.error(`Invalid modal name: ${modalName}`);
    }
};


const fetchUserDetails = async () => {
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
            props.data.country = dataSets.user_address_info.country ?? 'User has not entered country'
            props.data.city = dataSets.user_address_info.city ?? 'User has not entered city'
            props.data.addressLine01 = dataSets.user_address_info.address_line_1 ?? 'User has not entered address line 01'
            props.data.addressLine02 = dataSets.user_address_info.address_line_2 ?? 'User has not entered address line 02'
            props.data.stateProvince = dataSets.user_address_info.state_province ?? 'User has not entered stare provice'
        }

        if (dataSets.user_phone_info) {
            props.data.phone = dataSets.user_phone_info.phone_number ?? 'User has not entered phone number'
            props.data.phoneCode = dataSets.user_phone_info.phone_code ?? ''
        }
        if (dataSets.media_info.profile_picture != null) {
            profile_picture.value = dataSets.media_info.profile_picture.url || defaultProfilePicture;
        }
    } catch (error) {
        console.log(error)
    }
}
</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>