<template>

    <!-- Bio change modal -->
    <div v-if="visible" class="relative z-index-400" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full"> <!-- Ensure full width -->
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                <!-- Added w-full to parent div -->
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Add to
                                    Adacemic</h3>
                                <div class="mt-2 w-full">
                                    <div class="w-full">
                                        <div class="w-full">
                                            <label class="block mb-1 text-gray-700 font-sans">Academic
                                                <span aria-hidden="true" class="text-red-600"
                                                    title="This field is required">*</span>
                                            </label>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                <input type="text" id="" v-model="academic" autocomplete=""
                                                    class="w-full block px-5 py-3 border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    placeholder="" required />
                                            </div>
                                            <InputError :error="errors.academic ? errors.academic.join(', ') : ''" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" @click="saveAcademic"
                            class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">Save
                            changes</button>
                        <button type="button" @click="$emit('close', 'academic')"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, watch } from 'vue';
import { useNuxtApp } from '#app';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';

const nuxtApp = useNuxtApp();
const $publicService = nuxtApp.$publicService;

const academic = ref('');
const loading = ref(false);

const error = ref('');
const errors = ref({});
const showNotification = ref(false);
const notificationMessage = ref('');
const notification_type = ref(0);

const props = defineProps({
    visible: Boolean,
    slug: String,
    schoolData: {
        type: Object,
        required: true,
    },

});


// Define emits to handle custom events like close
const emit = defineEmits(['close']);

// Function to update school academics

const updateAcademic = async () => {
    error.value = '';
    errors.value = {};
    loading.value = true;
    notification_type.value = '';
    notificationMessage.value = '';
    showNotification.value = false;
    try {
        const request_body = { school_slug: props.slug, academic: academic.value };  // Construct request body with bio
        const response = await $publicService.school_add_new_academic(request_body);  // Pass slug and request body
        if (response.status == '200') {
            clearAcademic();
            // Trigger success notification
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            // Emit close event to parent to close the modal
            emit('close', 'academic');  // Close the modal after successfully updating the bio
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
        }

    } catch (error) {
        // Handle error
        handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
    } finally {
        loading.value = false;
    }
};

// Save bio when the user clicks "Save changes"
const saveAcademic = () => {
    updateAcademic();
}

const clearAcademic = () => {
    academic.value = '';
};

</script>