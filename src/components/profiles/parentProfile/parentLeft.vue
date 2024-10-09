<template>
    <div class="p-2">
        <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3">
            <div class="flex items-center justify-between w-full">
                <h1 class="text-lg font-semibold text-black">Bio</h1>
                <div  class="cursor-pointer" @click="toggleModal('bio')">
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

        <div style="height: 60px;"
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3 h-auto">
            <div class="grid grid-cols-10 gap-2">
                <div class="col-span-3">
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl" src="@/assets/user/images/Group 79.png" alt="">
                </div>
                <div class="col-span-6 ml-2">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3">Signed up
                        {{ props.data.joinDate }}
                    </p>

                </div>
                <!-- <div class="col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div> -->
            </div>

        </div>
        <div style="height: 60px;"
            class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3 h-auto">
            <div class="grid grid-cols-10 gap-2">
                <div class="col-span-3">
                    <img class="mx-auto w-[35px] h-[35px] rounded-xl" src="@/assets/images/pin.png" alt="">
                </div>
                <div class="col-span-6 ml-2">
                    <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3">{{  props.data.city }} {{  props.data.country }}
                    </p>

                </div>
                <div  class="col-span-1" @click="toggleModal('address')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>

        </div>
        <BioModal :visible="modals.bio" @close="handleModalClose" :slug="props.userSlug" :data="props.data" @dataUpdate="dataUpdate" />
        <AddressModal :visible="modals.address" @close="handleModalClose" :slug="props.userSlug" :data="props.data" @dataUpdate="dataUpdate" />

    </div>
</template>

<script setup>
import { ref, onMounted, reactive, watch } from 'vue';
import BioModal from '~/components/profiles/parentProfile/modals/bioModal.vue';
import AddressModal from '~/components/profiles/parentProfile/modals/addressModal.vue';

const emit = defineEmits(['updateData']); // Emit close event with the modal name

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

const isBioExpanded = ref(false);
const seeMoreBtnHide = ref(false);
const bio = ref('')
const expandBtnName = ref('See More')

watch(
    () => props.data,
    () => {
        setBio()
    }
);

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

const modals = reactive({
    bio: false,
    address: false
});

// Generic toggle function
const toggleModal = (modalName) => {
    console.log(modalName)
    if (modals.hasOwnProperty(modalName)) {
        console.log(456)
        modals[modalName] = !modals[modalName];
        console.log(modals)
    } else {
        console.warn(`Modal "${modalName}" does not exist.`);
    }
};

// Generic function to close the modal and fetch user details
const handleModalClose = (modalName) => {
    // Defensive check to make sure modalName exists
    if (modals[modalName] !== undefined) {
        modals[modalName] = false;  // Close the modal
        // Fetch updated user details after closing
    } else {
        console.error(`Invalid modal name: ${modalName}`);
    }
};

const dataUpdate = () =>{
    emit('updateData')
    handleModalClose()
}
const loggedUserSlug = ref('');

onMounted(()=>{
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