<template>
    <!-- Name change modal -->
    <div v-if="visible" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Change your
                                    Name</h3>
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

                                    <!-- Profile Picture Preview -->
                                    <div class="w-full mt-3" v-if="profile_picture_preview">
                                        <img :src="profile_picture_preview" alt="Profile Picture Preview"
                                            class="w-32 h-32 object-cover border border-gray-300" />
                                    </div>
                                    

                                    <!-- Profile Picture Upload -->
                                    <div class="w-full mt-3">
                                        <label class="block mb-1 text-gray-700 font-sans">Profile Picture
                                            <span aria-hidden="true" class="text-red-600"
                                                title="This field is optional"></span>
                                        </label>
                                        <div class="flex rounded-lg border border-gray-300 shadow-sm w-full">
                                            <input id="profile_picture" type="file" @change="handleFileChange"
                                                accept="image/jpeg, image/png"
                                                class="w-full block px-5 py-3 border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg">
                                        </div>
                                        <span v-if="fileError" class="text-sm text-red-600 dark:text-red-500">{{
        fileError }}</span>
                                        <!-- Show validation error -->
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" @click="saveName"  :disabled="loading"
                            class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">Save
                            changes
                            <svg v-if="loading" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                              </svg>
                        </button>
                        <button type="button" @click="$emit('close', 'name')"
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

const props = defineProps({
    visible: Boolean,
    slug: String
});

const emit = defineEmits(['close']); // Emit close event with the modal name

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
const profile_picture_preview = ref(null);

// On mounted, fetch the current user names using the slug
onMounted(() => {

    fileError.value = '';

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

        // Generate the image preview URL
        profile_picture_preview.value = URL.createObjectURL(file);
    }
};



// Function to handle the profile picture upload
const saveProfilePicture = async () => {

    loading.value = true;

    if (!profile_picture.value) {
        // Handle case where no file is selected
        console.log('no profile picture found');
        return;
    }
    try {
        const user_slug = props.slug; // Assuming you have user_slug available in props
        const response = await $userService.upload_business_user_profile_picture(profile_picture.value, user_slug); // Call the upload function

        if (response.status == '200') {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
        }
    } catch (error) {
        console.error('Error uploading profile picture', error);
    }finally{
        loading.value = false;
    }
};

// Function to fetch the business user names based on the slug
const fetchCoachNames = async (slug) => {
    try {
        const dataSets = await $publicService.get_user_profile(slug);
        if (dataSets.user_basic_info) {
            first_name.value = dataSets.user_basic_info.first_name ?? "";
            last_name.value = dataSets.user_basic_info.last_name ?? "";
            other_names.value = dataSets.user_basic_info.other_names ?? "";
        }
    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
};

// // Function to update business user names
const updateBusinessUserNames = async (firstName, lastName, otherNames) => {
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

        const response = await $userService.update_business_user_name(request_body); // Call the API to update the names

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
    // First, call updateBusinessUserNames and store the result
    await updateBusinessUserNames(first_name.value, last_name.value, other_names.value);

    await saveProfilePicture(); // Save profile picture if available

    // Emit close event regardless of whether profile picture save was successful
    emit('close', 'name');

};

</script>