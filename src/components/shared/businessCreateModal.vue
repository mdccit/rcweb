<template>
    <!-- Modal Backdrop -->
    <div v-if="isVisible" id="crud-modal" tabindex="-1" aria-hidden="true"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <!-- Modal Content Wrapper -->
        <div class="relative w-full max-w-md p-4 mx-auto">
            <!-- Modal Box -->
            <div class="relative bg-white rounded-lg shadow light:bg-gray-700">
                <!-- Modal Header -->
                <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-200">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray">Create Business</h3>
                    <button @click="$emit('close')"
                        class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center light:hover:bg-gray-600 light:hover:text-white">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <!-- Modal Body -->
                <div class="p-6 space-y-6">
                    <!-- Form Fields -->
                    <div>
                        <label for="name" class="block text-sm font-normal text-gray-900 light:text-gray">Business
                            Name</label>
                        <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                            <input type="text" id="name" v-model="name"
                                class="lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg "
                                placeholder="Enter Business Name" />
                        </div>
                        <InputError :error="errors.name ? errors.name.join(', ') : ''" />

                    </div>



                </div>
                <!-- Modal Footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-300">
                    <button @click="submitRegistration"  :disabled="loading"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:border-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Create
                        <svg v-if="loading" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                          </svg>
                    </button>
                    <button @click="$emit('close')"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 light:bg-gray-700 light:text-gray-300 light:border-gray-500 light:hover:text-white light:hover:bg-gray-600">Cancel</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Notification Component -->
    <Notification v-if="showNotification" :message="notificationMessage" :duration="5000" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useNuxtApp } from '#app';
import { defineProps, defineEmits } from 'vue';
import Notification from '~/components/common/Notification.vue';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';

const name = ref('');

const errors = ref({});
const authType = ref('');
const notification_type = ref('');
const successMessage = ref('');
const showNotification = ref(false);
const notificationMessage = ref('');
const loading = ref(false);


// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

// Reference to the modal component
const emit = defineEmits(['close']);

// Computed property to split error messages by comma
const splitErrors = computed(() => errors.value.flatMap((error) => error.split(',')));
const props = defineProps({
    isVisible: {
        type: Boolean,
        required: true,
    },
});

const submitRegistration = async () => {
    errors.value = [];
    try {
        loading.value = true;
        const response = await $adminService.business_register({
            name: name.value
        });

        if (response.status === 200) {
            notificationMessage.value = response.display_message;
            showNotification.value = true;
            name.value = '';
            emit('close');
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message || 'An error occurred', 'failure');
        }
    } catch (error) {
        handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
    }finally{
        loading.value = false;
    }
};
</script>


<style scoped>
.container {
    max-width: 600px;
}

.error-messages {
    margin-top: 20px;
    color: red;
}

.error-title {
    font-weight: bold;
}

.error-list {
    list-style-type: disc;
    /* Ensure bullet points are shown */
    margin-left: 20px;
    /* Indent the list */
}

.error-item {
    margin-bottom: 5px;
}
</style>