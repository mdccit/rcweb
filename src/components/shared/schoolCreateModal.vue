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
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray">Create School</h3>
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
                <div class="p-6 space-y-4 text-sm">

                    <!-- Display error messages -->
                    <div v-if="errors.length" class="error-messages">
                        <p class="error-title">Validation Errors:</p>
                        <ul class="error-list">
                            <li v-for="(error, index) in splitErrors" :key="index" class="error-item">
                                {{ error }}
                            </li>
                        </ul>
                    </div>

                    <!-- Form Fields -->
                    <div>
                        <label for="name" class="block text-sm font-normal text-gray-900 light:text-gray">School
                            Name</label>
                        <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                            <input type="text" id="first_name" v-model="name"
                                class="lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg "
                                placeholder="Enter Name" />
                        </div>
                    </div>



                </div>
                <!-- Modal Footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-300">
                    <button @click="submitRegistration"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Create
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

const name = ref('');
const bio = ref('');
const showNotification = ref(false);
const notificationMessage = ref('');
const errors = ref([]);

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
        const response = await $adminService.school_register({
            name: name.value,
            bio: bio.value
        });

        if (response.status === 200) {
            notificationMessage.value = response.display_message;
            showNotification.value = true;
            name.value = '';
            bio.value = '';
            emit('close');
        } else {
            errors.value.push(response.data.display_message);
        }
    } catch (err) {
        if (err.response?.data?.message) {
            if (Array.isArray(err.response.data.message)) {
                errors.value = err.response.data.message;
            } else {
                errors.value = [err.response.data.message];
            }
        } else {
            errors.value = [err.response?.data?.message || err.message];
        }
    }
};
</script>


<style scoped>
.container {
    max-width: 600px;
}

.error-messages {
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