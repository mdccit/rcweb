<template>
    <!-- Name change modal -->
    <div v-if="visible" class="relative z-index-320" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                <h1 class="text-base font-semibold leading-6 text-gray-900 mb-3" id="modal-title">Edit
                                    User Profile</h1>

                                <div class="mt-2 w-full">
                                    <!-- First Name Input -->
                                    <div class="w-full">
                                        <label class="block mb-1 text-gray-700 font-sans">First Name
                                            <span aria-hidden="true" class="text-red-600"
                                                title="This field is required">*</span>
                                        </label>
                                        <div class="flex rounded-lg border border-gray-300 shadow-sm w-full">
                                            <input id="first_name" v-model="first_name" type="text"
                                                autocomplete="first_name"
                                                class="w-full block px-5 py-3 border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                placeholder="Enter your first name" required>
                                        </div>
                                        <InputError :error="errors.first_name ? errors.first_name.join(', ') : ''" />
                                    </div>

                                    <!-- Last Name Input -->
                                    <div class="w-full mt-3">
                                        <label class="block mb-1 text-gray-700 font-sans">Last Name
                                            <span aria-hidden="true" class="text-red-600"
                                                title="This field is required">*</span>
                                        </label>
                                        <div class="flex rounded-lg border border-gray-300 shadow-sm w-full">
                                            <input id="last_name" v-model="last_name" type="text"
                                                autocomplete="last_name"
                                                class="w-full block px-5 py-3 border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                placeholder="Enter your last name" required>
                                        </div>
                                        <InputError :error="errors.last_name ? errors.last_name.join(', ') : ''" />
                                    </div>

                                    <!-- Other Names Input -->
                                    <div class="w-full mt-3">
                                        <label class="block mb-1 text-gray-700 font-sans">Other Names
                                            <span aria-hidden="true" class="text-red-600"
                                                title="This field is optional"></span>
                                        </label>
                                        <div class="flex rounded-lg border border-gray-300 shadow-sm w-full">
                                            <input id="other_names" v-model="other_names" type="text"
                                                autocomplete="other_names"
                                                class="w-full block px-5 py-3 border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                placeholder="Enter other names (optional)">
                                        </div>
                                        <InputError :error="errors.other_names ? errors.other_names.join(', ') : ''" />
                                    </div>

                                    <!-- Profile Picture Upload -->
                                    <div class="w-full mt-3">
                                        <label class="block mb-1 text-gray-700 font-sans">Profile Picture
                                            <span aria-hidden="true" class="text-red-600"
                                                title="This field is optional"></span>
                                        </label>
                                        <div v-if="profile_picture_exit != null">
                                            <img class="mx-auto w-44 h-44 rounded-[30px] mt-3"
                                                :src="profile_picture_exit.url" alt="">
                                            <!-- <button @click="removeProfile">Remove</button> -->
                                        </div>
                                        <div v-if="profile_picture_exit != null" class="w-full flex justify-center">
                                            <button class="p-2 rounded-lg bg-red-600 mx-auto m-2 text-white"
                                                @click="removeProfile"> Remove
                                            </button>
                                        </div>
                                        <div class="flex rounded-lg border border-gray-300 shadow-sm w-full">
                                            <label for="profile_picture"
                                                class="absolute pt-[13px] h-[49px] img-inputblock w-[110px] px-4 py-2 text-sm font-medium text-black bg-gray-50 border border-gray-300 rounded-lg cursor-pointer focus:outline-none img-input">
                                                Choose file
                                            </label>
                                            <input id="profile_picture" type="file" @change="handleFileChange"
                                                accept="image/jpeg, image/png"
                                                class="lock pt-1 text-black h-12 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                                        </div>
                                        <span v-if="fileError" class="text-red-500">{{ fileError }}</span>
                                        <!-- Show validation error -->
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" @click="saveName"
                            class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">Save
                            changes</button>
                        <button type="button" @click="close"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';
import { useUserStore } from '~/stores/userStore';

const userStore = useUserStore();
const props = defineProps({
    visible: Boolean,
    slug: String
});

const emit = defineEmits(['close','updateData']); // Emit close event with the modal name

const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const $publicService = nuxtApp.$publicService;

// Local state for the user's name details
const first_name = ref('');
const last_name = ref('');
const other_names = ref('');


const error = ref('');
const errors = ref('');
const loading = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('');
const notification_type = ref(0);
const fileError = ref('');
const profile_picture = ref('');
const profile_picture_exit = ref(null)

// On mounted, fetch the current user names using the slug
onMounted(() => {
    if (props.slug) {
        fetchCoachNames(props.slug);
    }
});

watch(() => props.visible, (newVal) => {
    if (newVal && props.slug) {
        fetchCoachNames(props.slug);
    }
});



const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 2 * 1024 * 1024; // 2MB

    // Check if a file is selected
    if (file) {
        // Validate the file type
        if (!allowedTypes.includes(file.type)) {
            fileError.value = 'Only jpg, jpeg, and png files are allowed';
            event.target.value = ''; // Clear the file input
            return;
        }

        // Validate the file size
        if (file.size > maxSize) {
            fileError.value = 'File size must be less than 2MB';
            event.target.value = ''; // Clear the file input
            return;
        }

        // If all validations pass, set the file to the reactive variable
        fileError.value = ''; // Clear any previous errors
        profile_picture.value = file; // Store the selected file
    }
};



// Function to handle the profile picture upload
const saveProfilePicture = async () => {

    if (!profile_picture.value) {
        // Handle case where no file is selected
        console.log('no profile picture found');
        return;
    }
    try {
        const user_slug = props.slug; // Assuming you have user_slug available in props
        const response = await $userService.upload_coach_profile_picture(profile_picture.value, user_slug); // Call the upload function
        const data = {
            url: response.data.url,
            media_type: response.data.media_type,
            media_id: response.data.media_id
        }
        userStore.setProfilePicture(data)

        if (response.status == '200') {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
        }
    } catch (error) {
        console.error('Error uploading profile picture', error);
    }
};

// Function to fetch the player names based on the slug
const fetchCoachNames = async (slug) => {
    try {
        const dataSets = await $publicService.get_user_profile(slug);
        if (dataSets.user_basic_info) {
            first_name.value = dataSets.user_basic_info.first_name ?? "";
            last_name.value = dataSets.user_basic_info.last_name ?? "";
            other_names.value = dataSets.user_basic_info.other_names ?? "";
        }

        if (dataSets.media_info) {
            profile_picture_exit.value = dataSets.media_info.profile_picture ?? null
            userStore.setProfilePicture(dataSets.media_info.profile_picture)
        }
    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
};

// // Function to update player names
const updatePlayerNames = async (firstName, lastName, otherNames) => {
    error.value = '';
    errors.value = {};
    loading.value = true;
    notification_type.value = '';
    notificationMessage.value = '';
    showNotification.value = false;

    try {
        const request_body = {
            user_slug: props.slug,
            first_name: firstName,
            last_name: lastName,
            other_names: otherNames,
        }; // Construct request body with all names

        const response = await $userService.update_coach_name(request_body); // Call the API to update the names

        if (response.status == '200') {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            return true; // Return success status
        } else {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
            return false; // Return failure status
        }
    } catch (error) {
        loading.value = false;
        handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
        return false; // Return failure status
    }
};


// Save names when the user clicks "Save changes"
const saveName = async () => {
    // First, call updatePlayerNames and store the result
    await updatePlayerNames(first_name.value, last_name.value, other_names.value);

    await saveProfilePicture(); // Save profile picture if available

    // Emit close event regardless of whether profile picture save was successful
    emit('close', 'name');

};

const removeProfile = async () => {
    try {
        const dataSets = await $publicService.delete_media_coache(profile_picture_exit.value.media_id);
        fetchCoachNames(props.slug);
        // const data = {
        //     url: response.data.url,
        //     media_type: response.data.media_type,
        //     media_id: response.data.media_id
        // }

        userStore.setProfilePicture(null)
        emit('updateData')
    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
}
const close = () =>{
    emit('close', 'name');
}
</script>