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
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" @click="saveName"
                            class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Save
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


// On mounted, fetch the current user names using the slug
onMounted(() => {
    if (props.slug) {
        fetchPlayerNames(props.slug);
    }
});

watch(() => props.visible, (newVal) => {
  if (newVal && props.slug) {
    fetchPlayerNames(props.slug);
  }
});

// Function to fetch the player names based on the slug
const fetchPlayerNames = async (slug) => {
    try {
        const dataSets = await $publicService.get_player(slug);
        if (dataSets.user_basic_info) {
            first_name.value = dataSets.user_basic_info.first_name ?? "";
            last_name.value = dataSets.user_basic_info.last_name ?? "";
            other_names.value = dataSets.user_basic_info.other_names ?? "";
        }
    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
};

// Function to update player names
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
        const response = await $userService.update_player_name(request_body); // Call the API to update the names

        if (response.status == '200') {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            emit('close', 'name'); // Emit close event after successfully updating the names
        } else {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
        }
    } catch (error) {
        loading.value = false;
        //   nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
        handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
    }
};

// Save names when the user clicks "Save changes"
const saveName = () => {
    updatePlayerNames(first_name.value, last_name.value, other_names.value); // Call the API to update the player's names
};
</script>