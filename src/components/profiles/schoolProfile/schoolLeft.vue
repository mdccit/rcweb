<template>
    <div class="p-2">
        <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3">
            <div class="flex items-center justify-between w-full">
                <h1 class="text-lg font-semibold text-black">Bio</h1>
                <div class="cursor-pointer"  @click="toggleModal('bio')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
            <p class="text-xs text-darkSlateBlue leading-relaxed mb-4">
                {{ bio }}
            </p>
            <div v-if="seeMoreBtnHide">
                <button id="seeMoreBtn" @click="toggleText">{{ expandBtnName }}</button>

            </div>
        </div>
        <!-- 
        <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-4 w-48 ">
                                <h1 class="text-lg font-semibold mb-4 text-black ">Acedemics</h1>
                            </div>
                        </div>
                        <p class="text-xs text-darkSlateBlue leading-loose mb-4 ">
                            <span
                                class="bg-blue-100 pb-1 font-light text-blue-800 text-xs  me-2 px-2.5 py-0.5 rounded rounded-full bg-blue-500 text-white ">
                                Health
                            </span>
                            <span
                                class="bg-blue-100 pb-1 font-light text-blue-800 text-xs  me-2 px-2.5 py-0.5 rounded rounded-full bg-blue-500 text-white ">
                                Business Marketing
                            </span>
                            <br>
                            <span
                                class="bg-blue-100 pb-1 font-light text-blue-800 text-xs  me-2 px-2.5 py-0.5 rounded rounded-full bg-blue-500 text-white ">
                                Computer engineering
                            </span>
                        </p>
                    </div> -->

        <div style="height: 60px;"
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
                <div class="col-span-1"  @click="toggleModal('info')">
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
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl" src="@/assets/images/pin.png" alt="">
                </div>
                <div class="col-span-6 ml-2">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3">location
                        {{ props.data.address }}
                    </p>

                </div>
                <div class="col-span-1"  @click="toggleModal('cover')" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>

        </div>

    </div>

    <!-- Modal Components with Standardized Props -->
    <BioModal :visible="modals.bio" @close="handleModalClose" :slug="slug" />
    <InfoModal :visible="modals.info" @close="handleModalClose" :slug="slug" />
    <AcademicModal :visible="modals.academic" @close="handleModalClose" :slug="slug" />
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useNuxtApp } from '#app';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '~/stores/userStore';

import BioModal from '~/components/profiles/schoolProfile/modals/bioModal.vue';
import InfoModal from '~/components/profiles/schoolProfile/modals/infoModal.vue';
import AcademicModal from '~/components/profiles/schoolProfile/modals/academicModal.vue';

const isBioExpanded = ref(false);
const seeMoreBtnHide = ref(false);
const bio = ref('');
const expandBtnName = ref('See More');
const nuxtApp = useNuxtApp();
const router = useRouter();
const userStore = useUserStore();

const loggedUserSlug = ref(null);
const slug = ref('');

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    schoolSlug: {
        type: String,
        required: true,
    }
});
onMounted(() => {

    // const fullBio =  props.data.bio || ''; // This ensures fullBio is at least an empty string
    // console.log(fullBio)
    // bio.value = fullBio.length > 100 ? fullBio.substring(0, 100) + '...' : fullBio;
    // seeMoreBtnHide.value = fullBio.length > 100 ? true + '...' : false;
    // isBioExpanded.value = false

});

watch(
    () => props.data,
    () => {
        setBio()
    }
);

// Define reactive state for all modals
const modals = reactive({
    bio: false,
    info: false,
    academic: false,
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
        fetchSchoolDetails();         // Fetch updated user details after closing
    } else {
        console.error(`Invalid modal name: ${modalName}`);
    }
};

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

const fetchSchoolDetails = async () => {
    try {
        const dataSets = await $publicService.get_school(route.params.slug);

        if (dataSets.media_info) {
            profilePicture.value = dataSets.media_info.profile_picture
            coverPicture.value = dataSets.media_info.cover_picture
            setGalleryItems(dataSets.media_info);
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

onMounted(() => {
    slug.value = props.schoolSlug;

    if (process.client) {
        loggedUserSlug.value = localStorage.getItem('user_slug')
    }
})

</script>

<style scoped>
main {
    padding: 20px;
}

/* Adjust padding or other styles as needed */
</style>