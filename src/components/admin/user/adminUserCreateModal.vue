<template>
    <!-- Modal Backdrop -->
    <div v-if="isVisible" id="crud-modal" tabindex="-1" aria-hidden="true"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">

        <!-- Modal Content Wrapper -->
        <div class="relative w-full max-w-lg p-3 mx-auto">
            <!-- Modal Box -->
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
                    <div class="flex">
                        <div class="w-1/2">
                            <div class="pr-1">
                                <label for="first_name"
                                    class="block text-sm font-normal text-gray-900 light:text-gray mb-1">First
                                    Name</label>
                                <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                                    <input type="text" id="first_name" v-model="first_name"
                                        class="lock text-black px-5 py-2 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                        placeholder="Enter Name" />
                                </div>
                                <InputError :error="true ? 'Error' : 'asdadsdasda'" />
                            </div>

                        </div>
                        <div class="w-1/2">
                            <div class="pl-1">
                                <label for="last_name"
                                    class="block text-sm font-normal text-gray-900 light:text-gray mb-1">Last
                                    Name</label>
                                <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                                    <input type="text" id="last_name" v-model="last_name"
                                        class="lock text-black px-5 py-2 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                        placeholder="Enter Name" />
                                </div>

                                <InputError :error="true ? 'Error' : 'asdadsdasda'" />
                            </div>
                        </div>
                    </div>

                    <div class="mt-0 pt-0">
                        <label for="email"
                            class="block text-sm font-normal text-gray-900 light:text-gray mb-1">Email</label>
                        <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                            <input type="email" id="email" v-model="email"
                                class="lock text-black px-5 py-2 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                placeholder="Enter Email" />
                        </div>
                        <InputError :error="true ? 'Error' : 'asdadsdasda'" />

                        <div class="flex items-end text-right mt-2 mb-2">
                            <input checked id="checked-checkbox" type="checkbox" value=""
                                v-model="is_set_email_verified"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600">
                            <label for="checked-checkbox"
                                class="ms-2 text-sm font-normal text-gray-600 light:text-gray-300">Set email
                                verified</label>
                        </div>
                    </div>

                    <!-- Password Fields -->
                    <div class="flex" v-if="props.action !== 'view'">
                        <div class="w-1/2">
                            <div class="pr-1">
                                <label for="password"
                                    class=" bg-transparent block text-sm font-normal text-gray-900 light:text-gray mb-1">Password</label>
                                <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                                    <input type="password" id="password" v-model="password"
                                        class="lock text-black px-5 py-2 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                        placeholder="Enter password" />
                                </div>
                                <InputError :error="true ? 'Error' : 'asdadsdasda'" />
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="pl-1">
                                <label for="password_confirmation"
                                    class=" bg-transparent block text-sm font-normal text-gray-900 light:text-gray mb-1">Confirm
                                    Password</label>
                                <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                                    <input type="password" id="password_confirmation" v-model="password_confirmation"
                                        class="lock text-black px-5 py-2 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                        placeholder="Confirm password" />
                                </div>
                                <InputError :error="true ? 'Error' : 'asdadsdasda'" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label for="countries"
                            class="block mb-2 text-sm font-normal text-gray-900 light:text-white">Role</label>
                        <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                            <select id="countries" v-model="user_role"
                                class="lock text-black px-5 py-2 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
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
                        </div>
                        <InputError :error="true ? 'Error' : 'asdadsdasda'" />
                    </div>


                    <div>
                        <div class="grid grid-cols-5 gap-3 items-center">
                            <div class="col-span-1">
                                <!-- Label for Phone Number -->
                                <label for="phone_code_country"
                                    class="block mb-2 text-sm font-normal text-gray-900 light:text-gray">
                                    Code
                                </label>
                                <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                                    <ModalCountryCodeDropdown :country_codes="country_codes" v-model="phone_code_country"
                                    name="phone_code_country" data-validation-key="player_phone_code"
                                    class="lock text-black px-5 h-[40px] py-2 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                    :disabled="props.action === 'view'" />
                                </div>
                                <InputError :error="true ? 'Error' : 'asdadsdasda'" />
                            </div>
                            <div class="col-span-4">
                                <label for="phone_code_country"
                                    class="block mb-2 text-sm font-normal text-gray-900 light:text-gray">
                                     Number
                                </label>
                                <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                                    <input type="text" id="phone_number" v-model="phone_number"
                                    class="lock text-black px-5 py-2 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                    placeholder="Number" required :disabled="props.action === 'view'" />
                                </div>
                                <InputError :error="true ? 'Error' : 'asdadsdasda'" />
                            </div>
                        </div>
                    </div>

                </div>
                <!-- Modal Footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-300"
                    v-if="props.action !== 'view'">
                    <button @click="submitRegistration"
                        class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {{ action === 'edit' ? 'Update' : 'Create' }}
                    </button>
                    <button @click="$emit('close')"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 light:bg-gray-700 light:text-gray-300 light:border-gray-500 light:hover:text-white light:hover:bg-gray-600">Cancel</button>
                </div>
            </div>
        </div>

        <div v-if="successMessage" class="mt-4">
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <span class="block sm:inline">{{ successMessage }}</span>
            </div>
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
import InputError from '~/components/common/input/InputError.vue';

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
const successMessage = ref('');
const errors = ref([]);
const country_codes = ref([]);

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


// Computed property to split error messages by comma
const splitErrors = computed(() => errors.value.flatMap((error) => error.split(',')));

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


function handleSubmit() {
    // Handle form submission logic here
    emit('close');
}

const submitRegistration = async () => {
    console.log('submitting');
    errors.value = [];
    if (password.value !== password_confirmation.value) {
        errors.value.push('Passwords do not match');
        console.log(error.value);
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
            successMessage.value = response.display_message;
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
            console.error('Failed to load user details:', error.message);
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
    user_role.value = '';
    phone_code_country.value = '';
    phone_number.value = '';
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