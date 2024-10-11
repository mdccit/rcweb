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
                                <h1 class="text-base font-semibold leading-6 text-gray-900 mb-3" id="modal-title">Edit User Profile</h1>
                              
                                <div class="mt-2 w-full">
                                    <!-- First Name Input -->
                                    <div class="w-full">
                                        <label class="block mb-1 text-gray-700 font-sans">Business Name
                                            <span aria-hidden="true" class="text-red-600"
                                                title="This field is required">*</span>
                                        </label>
                                        <div class="flex rounded-lg border border-gray-300 shadow-sm w-full">
                                            <input id="first_name" v-model="name" type="text"
                                                autocomplete="first_name"
                                                class="w-full block px-5 py-3 border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                placeholder="Update Business Name" required>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" @click="saveName"
                            class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">Save
                            changes</button>
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
    slug: String,
    data:Object
});

const emit = defineEmits(['close']); // Emit close event with the modal name

const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const $publicService = nuxtApp.$publicService;

// Local state for the user's name details
const name = ref('');

watch(() => props.visible, () => {
    name.value =props.data.name
});



const error = ref('');
const errors = ref('');
const loading = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('');
const notification_type = ref(0);

// On mounted, fetch the current user names using the slug





// Save names when the user clicks "Save changes"
const saveName = async () => {
   
    loading.value = true;
    notification_type.value = '';
    notificationMessage.value = '';
    showNotification.value = false;

    try {
        const request_body = {
            name: name.value,
            business_slug:props.slug
        }; // Construct request body with all names

        const response = await $publicService.update_business_basic_info(request_body); // Call the API to update the names

        if (response.status == '200') {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            emit('close', 'name');
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

const removeProfile =async() =>{
    try {
        const dataSets = await $publicService.delete_media_coache(profile_picture_exit.value.media_id);
        fetchCoachNames(props.slug);
    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
}
</script>