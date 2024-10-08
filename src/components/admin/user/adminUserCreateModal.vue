<template>
    <!-- Modal Backdrop -->
    <div v-if="isVisible" id="crud-modal" tabindex="-1" aria-hidden="true"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">

        <!-- Modal Content Wrapper -->
        <div class="relative w-full max-w-lg p-3 mx-auto">
            <!-- Modal Box -->

            <form @submit.prevent="submitRegistration">
                <div class="relative bg-white rounded-lg shadow light:bg-gray-700">
                    <!-- Modal Header -->
                    <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray">{{ modalTitle }}</h3>
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
                    <div class="p-6 ">

                        <!-- Form Fields -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- First Name -->
                            <div>
                                <label for="first_name" class="block text-sm font-normal text-gray-900 mb-1">First
                                    Name</label>
                                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                    <input type="text" id="first_name" v-model="first_name"
                                        class="bg-transparent text-black block w-full p-2.5 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                        placeholder="Enter Name" required />
                                </div>
                                <InputError :error="errors.first_name ? errors.first_name.join(', ') : ''" />
                            </div>

                            <!-- Last Name -->
                            <div>
                                <label for="last_name" class="block text-sm font-normal text-gray-900 mb-1">Last
                                    Name</label>
                                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                    <input type="text" id="last_name" v-model="last_name"
                                        class="bg-transparent text-black block w-full p-2.5 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                        placeholder="Enter Name" required />
                                </div>
                                <InputError :error="errors.last_name ? errors.last_name.join(', ') : ''" />
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="mt-4">
                            <label for="email" class="block text-sm font-normal text-gray-900 mb-1">Email</label>
                            <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                <input type="email" id="email" v-model="email"
                                    class="bg-transparent text-black block w-full p-2.5 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                    placeholder="Enter Email"  required />
                            </div>
                            <InputError :error="errors.email ? errors.email.join(', ') : ''" />
                        </div>

                        <!-- Checkbox for Email Verification -->
                        <div class="flex items-center mt-4">
                            <input type="checkbox" id="checked-checkbox" v-model="is_set_email_verified"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring focus:ring-blue-500">
                            <label for="checked-checkbox" class="ml-2 text-sm font-normal text-gray-600">Set email
                                verified</label>
                        </div>
                        <InputError
                            :error="errors.is_set_email_verified ? errors.is_set_email_verified.join(', ') : ''" />

                        <!-- Password Fields -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4" v-if="props.action !== 'view'">
                            <div>
                                <label for="password" class="block text-sm font-normal text-gray-900">Password</label>
                                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                    <input type="password" id="password" v-model="password"
                                        class="bg-transparent text-black block w-full p-2.5 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                        placeholder="Enter password" required />
                                </div>
                                <InputError :error="errors.password ? errors.password.join(', ') : ''" />
                            </div>

                            <div>
                                <label for="password_confirmation"
                                    class="block text-sm font-normal text-gray-900">Confirm
                                    Password</label>
                                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                    <input type="password" id="password_confirmation" v-model="password_confirmation"
                                        class="bg-transparent text-black block w-full p-2.5 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                        placeholder="Confirm password" required />
                                </div>
                                <InputError
                                    :error="errors.password_confirmation ? errors.password_confirmation.join(', ') : ''" />
                            </div>
                        </div>

                        <!-- Role Selection -->
                        <div class="mt-4">
                            <label for="role" class="block text-sm font-normal text-gray-900 mb-1">Role</label>
                            <select id="role" v-model="user_role"
                                class="bg-light-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                :disabled="props.action === 'view'">
                                <option selected>Choose a Role</option>
                                <option value="1">Default</option>
                                <option value="2">Admin</option>
                                <option value="3">Operator</option>
                                <option value="4">Player</option>
                                <option value="5">Coach</option>
                                <option value="6">Business Manager</option>
                                <option value="7">Parent</option>
                            </select>
                            <InputError :error="errors.user_role ? errors.user_role.join(', ') : ''" />
                        </div>

                        <!-- Phone Fields -->
                        <div class="grid grid-cols-5 gap-4 mt-4">
                            <div class="col-span-2">
                                <label for="phone_code_country"
                                    class="block text-sm font-normal text-gray-900">Code</label>
                                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                    <ModalCountryCodeDropdown :country_codes="country_codes"
                                        v-model="phone_code_country" name="phone_code_country"
                                        class="text-black px-5 h-[40px] py-2 w-full focus:ring focus:ring-blue-300 focus:ring-opacity-50 rounded-lg"
                                        :disabled="props.action === 'view'" />
                                </div>
                                <InputError
                                    :error="errors.phone_code_country ? errors.phone_code_country.join(', ') : ''" />
                            </div>

                            <div class="col-span-3">
                                <label for="phone_number" class="block text-sm font-normal text-gray-900">Number</label>
                                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                    <input type="text" id="phone_number" v-model="phone_number"
                                        class="text-black px-5 py-2 w-full focus:ring focus:ring-blue-300 focus:ring-opacity-50 rounded-lg"
                                        placeholder="Number" :disabled="props.action === 'view'" />
                                </div>
                                <InputError :error="errors.phone_number ? errors.phone_number.join(', ') : ''" />
                            </div>
                        </div>



                        <!-- Modal Footer -->
                        <div class="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-300"
                            v-if="props.action !== 'view'">
                            <button type="submit"
                                class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {{ action === 'edit' ? 'Update' : 'Create' }}
                            </button>
                            <button @click="$emit('close')"
                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 light:bg-gray-700 light:text-gray-300 light:border-gray-500 light:hover:text-white light:hover:bg-gray-600">
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { defineProps, defineEmits, defineExpose } from 'vue';
import { loadCountryList } from '~/services/commonService';
import CountryCodeDropdown from '~/components/common/select/CountryCodeDropdown.vue';
import ModalCountryCodeDropdown from '~/components/common/select/ModalCountryCodeDropdown.vue';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';

const first_name = ref('');
const last_name = ref('');
const email = ref('');
const user_role = ref('');
const is_set_email_verified = ref('');
const password = ref('');
const password_confirmation = ref('');
const phone_code_country = ref('');
const phone_number = ref('');
const error = ref('');
const country_codes = ref([]);

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
const modalRef = ref(null);
const emit = defineEmits(['close']);
defineExpose({ clearForm });

// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
};

onMounted(() => {
    loadCountryCodes();
});

const modalTitle = computed(() => {
    if (props.action === 'edit') return 'Edit User';
    if (props.action === 'view') return 'View User';
    return 'Create New User';
});


const props = defineProps({
    isVisible: Boolean,
    action: String,
    userId: String,
});


// function handleSubmit() {
//     // Handle form submission logic here
//     emit('close');
// }

const submitRegistration = async () => {
    error.value = '';
    errors.value = {};
    loading.value = true;
    notification_type.value = '';
    notificationMessage.value = '';
    showNotification.value = false;

    if (password.value !== password_confirmation.value) {
        nuxtApp.$notification.triggerNotification('Passwords do not match', 'warning');
        return;
    }
    try {
        const response = await $adminService.new_user_register({
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            user_role: user_role.value,
            is_set_email_verified: is_set_email_verified.value,
            password: password.value,
            password_confirmation: password_confirmation.value,
            phone_code_country: phone_code_country.value,
            phone_number: phone_number.value,
        });

        if (response.status === 200) {
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            emit('close');
        } else if (response.status === 422) {
            // This handles the validation errors
            nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message || 'An error occurred', 'failure');
        }
    } catch (error) {
        handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
    } finally {
        loading.value = false;
    }
};


// Fetch user details function
const fetchUserDetails = async () => {
    if (props.userId) {
        try {
            const data = await $adminService.get_user_details(props.userId);
            first_name.value = data.first_name || '';
            last_name.value = data.last_name || '';
            email.value = data.email || '';
            user_role.value = data.user_role || '';
            phone_code_country.value = data.phone_code_country || ''; // Adjust if needed
            phone_number.value = data.phone_number || '';             // Adjust if needed
            is_set_email_verified.value = data.is_approved === 1;
        } catch (error) {
            errors.value.push('Failed to load user details.');
        }
    }
};


function clearForm() {
    first_name.value = '';
    last_name.value = '';
    email.value = '';
    password.value = '';
    password_confirmation.value = '';
    user_role.value = null;
    phone_code_country.value = '';
    phone_number.value = null;
    is_set_email_verified.value = false;
    errors.value = [];
}

watch(() => props.isVisible, (newValue) => {
    if (newValue) {
        if (props.action === 'create') {
            clearForm();  // Clear form for "create"
        } else if (props.action === 'edit' || props.action === 'view') {
            errors.value = [];  // Clear only errors for "edit" & "view"
        }
    }
});

watch([() => props.action, () => props.userId], () => {
    if (props.action === 'view' || props.action === 'edit') {
        fetchUserDetails();
    }
});

const loadCountryCodes = async () => {
    try {
        country_codes.value = await loadCountryList();
        console.log(country_codes.value);
    } catch (err) {
        console.error('Error loading country codes:', err);
    }
};



onMounted(() => {
    if (props.action === 'view' || props.action === 'edit') {
        fetchUserDetails();
    }
});
</script>

<style scoped>
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