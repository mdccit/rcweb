<template>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <!-- User Edit Section Component -->
        <userEditSection />


        <!-- Display error messages -->
        <div v-if="errors.length" class="error-messages">
            <p class="error-title">Validation Errors:</p>
            <ul class="error-list">
                <li v-for="(error, index) in splitErrors" :key="index" class="error-item">
                    {{ error }}
                </li>
            </ul>
        </div>
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
            <!-- Photo Upload Section -->
            <div class="col-span-6 sm:col-span-4">
                <span class="block mb-1 text-gray-700 font-sans">Photo</span>
                <div class="mt-2">
                    <img src="https://ui-avatars.com/api/?name=e+e&amp;color=7F9CF5&amp;background=EBF4FF"
                        alt="User Photo" class="rounded-full h-20 w-20 object-cover" />
                </div>
                <div class="flex mt-2 space-x-2">
                    <!-- Select a New Photo -->
                    <div>
                        <label class="block">
                            <a
                                class="font-semibold border border-border rounded py-4 px-4 w-full block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center">
                                <svg class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                    <path d="M7 9l5 -5l5 5"></path>
                                    <path d="M12 4l0 12"></path>
                                </svg>
                                Select A New Photo
                                <input name="photo" type="file" data-validation-key="photo"
                                    class="invisible absolute inset-0 w-full h-full disabled:opacity-50" />
                            </a>
                        </label>
                    </div>

                    <!-- Remove Photo -->
                    <a href="https://qa1.recruited.qualitapps.com/user/profile-photo"
                        class="font-semibold border border-border rounded py-4 px-4 inline-block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center">
                        <svg class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 7l16 0"></path>
                            <path d="M10 11l0 6"></path>
                            <path d="M14 11l0 6"></path>
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                        </svg>
                        Remove Photo
                    </a>
                </div>
            </div>

            <div class="my-8"></div>

            <!-- First Name Input -->
            <div class="w-full">
                <label class="block">
                    <span class="block mb-1 text-gray-700 font-sans">First Name {{ first_name }}</span>
                    <input v-model="first_name" type="text"  :disabled="action === 'view'"
                        class="block text-black w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300" />
                </label>
            </div>

            <div class="my-8"></div>

            <!-- Last Name Input -->
            <div class="w-full">
                <label class="block">
                    <span class="block mb-1 text-gray-700 font-sans">Last Name</span>
                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                        <input
                            class="block text-black px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                            v-model="last_name" name="name" type="text" data-validation-key="name"  :disabled="action === 'view'" />
                    </div>
                </label>
            </div>

            <div class="my-8"></div>

            <!-- Other Names Input -->
            <div class="w-full">
                <label class="block">
                    <span class="block mb-1 text-gray-700 font-sans">Other Names</span>
                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                        <input
                            class="block text-black px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                            v-model="other_names" name="name" type="text" data-validation-key="other-names"  :disabled="action === 'view'" />
                    </div>
                </label>
            </div>

            <div class="my-8"></div>


            <!-- Email Address Input -->
            <div class="">
                <div class="w-full">
                    <label class="block">
                        <span class="block mb-1 text-gray-700 font-sans">Email address</span>
                        <div class="flex rounded-lg border border-gray-300 shadow-sm">
                            <input v-model="email"
                                class="block text-black px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                name="email" type="text" data-validation-key="email"  :disabled="action === 'view'" />
                        </div>
                    </label>
                </div>

                <!-- Email Verification Checkbox -->
                <div class="flex justify-end mt-4">
                    <label class="flex items-center">
                        <input name="set_email_verified" v-model="is_set_email_verified" type="checkbox"
                            data-validation-key="set_email_verified"
                            class="rounded-full text-black p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"  :disabled="action === 'view'" />
                        <span class="ml-4 text-black">Set email verified {{ action }}</span>
                    </label>
                </div>

                <!-- Resend Verification Email Link -->
                <div class="mt-4 flex text-black justify-end gap-2">
                    Or
                    <a href="https://qa1.recruited.qualitapps.com/admin/users/9caacfe4-214f-40eb-9289-038c8819bcc7/send-verification-email"
                        class="bg-gray-200 opacity-60 hover:opacity-100 p-2 rounded"  :disabled="action === 'view'">
                        send again
                    </a>
                </div>
            </div>

            <div class="my-8"></div>

            <!-- Password Input -->
            <div class="w-full">
                <label class="block">
                    <span class="block mb-1 text-gray-700 font-sans">Password</span>
                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                        <input
                            class="block text-black px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                            name="password" v-model="password" type="text" data-validation-key="password"  :disabled="action === 'view'" />
                    </div>
                </label>
            </div>

            <div class="my-8"></div>

            <!-- Approval Dropdown -->
            <div class="w-full">
                <label class="block">
                    <span class="block mb-1 text-gray-700 font-sans">Approved</span>
                    <div class="relative">
                        <select v-model="is_approved" name="is_approved" data-validation-key="is_approved"  :disabled="action === 'view'"
                            class="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                </label>
            </div>

            <div class="my-8"></div>

            <!-- Phone Number Input -->
            <div class="relative">
                <div class="absolute right-0 top-0">
                    <svg id="phoneInputButton" onclick="showPhoneEditTooltip(event,'phoneInputtooltip')"
                        class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round" style="cursor: pointer;">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 9h.01"></path>
                        <path d="M11 12h1v4h1"></path>
                    </svg>
                    <span id="phoneInputtooltip"
                        class="fixed text-black hidden z-10 w-72 px-2 py-4 bg-black rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-10 before:right-[-16px] before:-translate-y-1/2 before:border-8 before:border-r-transparent before:border-l-gray-700"
                        hidden="true" style="display: none;">
                        If you are a player or a parent, your phone number will be visible to coaches.
                    </span>
                </div>

                <div class="grid grid-cols-10 gap-4 items-center mt-4 mb-3">
                    <!-- Country Code Dropdown -->
                    <div class="col-span-4">
                        <label class="block">
                            <span class="block mb-1 text-gray-700 font-sans">
                                Phone
                                <span aria-hidden="true" class="text-red-600" title="This field is required">*</span>
                            </span>
                            <div class="relative">
                                <CountryCodeDropdown :country_codes="country_codes" v-model="phone_code_country"
                                    name="phone_code" data-validation-key="phone_code"  :disabled="action === 'view'" />
                            </div>
                        </label>
                    </div>

                    <!-- Phone Number Input -->
                    <div class="col-span-6">
                        <div class="w-full no-asterisk">
                            <label class="block">
                                <span class="block mb-1 text-gray-700 font-sans"><span aria-hidden="true"
                                        class="text-red-600" title="This field is required">*</span></span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                    <input
                                        class="block text-black px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        name="phone_number" type="text" data-validation-key="phone_number"
                                        v-model="phone_number" id="phone_number" step="0.01" required=""
                                        placeholder="123456789"  :disabled="action === 'view'" />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-8"></div>

            <!-- Role Dropdown -->
            <div class="w-full">
                <label class="block">
                    <span class="block mb-1 text-gray-700 font-sans">Role</span>
                    <div class="relative">

                        <select v-model="user_role" name="role" data-validation-key="role"
                            class="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50"  :disabled="action === 'view'">
                            <option value="2">Admin</option>
                            <option value="3">Operator</option>
                            <option value="4">Player</option>
                            <option value="5">Coach</option>
                            <option value="6">Business Manager</option>
                            <option value="7">Parent</option>
                        </select>
                    </div>
                </label>
            </div>

            <div class="my-8"></div>

            <!-- Submit Button -->
            <button type="submit" @click="updateUserDetails" v-if="action !== 'view'"
                class="border bg-blue-500 rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                <div class="flex flex-row items-center justify-center">
                    <span>Save changes </span>
                </div>
            </button>
        </div>

        <div class="my-16"></div>

        <!-- Notification Component -->
        <Notification v-if="showNotification" :message="notificationMessage" :duration="3000" />
    </div>
</template>

<script setup>

import { ref, computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import { useNuxtApp } from '#app';
import { defineProps, defineEmits, defineExpose } from 'vue';
import { useRoute } from 'vue-router';
import userEditSection from '~/components/admin/user/userEditSections.vue';
import { loadCountryList } from '~/services/commonService';
import CountryCodeDropdown from '~/components/common/select/CountryCodeDropdown.vue';
import Notification from '~/components/common/Notification.vue';

const route = useRoute(); // Use useRoute to access query parameters

const first_name = ref('');
const last_name = ref('');
const other_names = ref('');
const id = ref('');
const email = ref('');
const user_role = ref('');
const is_approved = ref('');
const is_set_email_verified = ref(false);
const password = ref('');
const password_confirmation = ref('');
const phone_code_country = ref('');
const phone_number = ref('');
const error = ref('');
const successMessage = ref('');
const errors = ref([]);
const country_codes = ref([]);
const userStore = useUserStore()
const router = useRouter();
const showNotification = ref(false);
const notificationMessage = ref('');

// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

// Reference to the modal component
const modalRef = ref(null);
const emit = defineEmits(['close']);
defineExpose({ clearForm });

// Computed property to split error messages by comma
const splitErrors = computed(() => errors.value.flatMap((error) => error.split(',')));

const action = ref(route.params.action || 'view'); // default to 'view' if action not provided
const userId = ref(route.params.userId || '');

onMounted(() => {
    loadCountryCodes();

    // Update the refs directly
    action.value = route.query.action || 'view';
    userId.value = route.query.userId || '';

    if (action.value === 'view' || action.value === 'edit') {
        fetchUserDetails(userId.value);
    }
});

// Watch for changes in the route query parameters
watch([() => route.query.action, () => route.query.userId], ([newAction, newUserId]) => {
    action.value = newAction || 'view';
    userId.value = newUserId || '';

    if (action.value === 'create') {
        clearForm();  // Clear form for "create"
    } else if (action.value === 'edit' || action.value === 'view') {
        errors.value = [];  // Clear errors for "edit" & "view"
        fetchUserDetails(userId.value);  // Fetch user details for "edit" & "view"
    }
});


//Update User
const updateUserDetails = async () => {
    errors.value = [];
    try {
        const response = await $adminService.user_update({
            user_id: id.value,
            first_name: first_name.value,
            last_name: last_name.value,
            other_names: other_names.value,
            email: email.value,
            user_role: user_role.value,
            is_set_email_verified: is_set_email_verified.value,
            is_approved: is_approved.value,
            password: password.value,
            password_confirmation: password_confirmation.value,
            phone_code_country: phone_code_country.value,
            phone_number: phone_number.value,
        });

        if (response.status === 200) {
            notificationMessage.value = response.display_message;
            showNotification.value = true;
        } else {
            errors.value.push(response.display_message);
            notificationMessage.value = response.display_message;
            showNotification.value = true;
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
const fetchUserDetails = async (userId) => {
    try {
        const data = await $adminService.get_user_details(userId);
        id.value = data.id,
            first_name.value = data.first_name || '';
        last_name.value = data.last_name || '';
        other_names.value = data.other_names || '';
        email.value = data.email || '';
        is_approved.value = data.is_approved,
            user_role.value = data.user_role_id || '';
        phone_code_country.value = data.phone_code_country || ''; // Adjust if needed
        phone_number.value = data.phone_number || '';             // Adjust if needed
        is_set_email_verified.value = data.is_approved === 1;
    } catch (error) {
        console.error('Failed to load user details:', error.message);
        errors.value.push('Failed to load user details.');
    }
};


const loadCountryCodes = async () => {
    try {
        country_codes.value = await loadCountryList();
    } catch (err) {
        console.error('Error loading country codes:', err);
    }
};

function clearForm() {
    id.value = '';
    first_name.value = '';
    last_name.value = '';
    other_names.value = '';
    email.value = '';
    password.value = '';
    password_confirmation.value = '';
    user_role.value = '';
    is_approved.value = '';
    phone_code_country.value = '';
    phone_number.value = '';
    is_set_email_verified.value = false;
    errors.value = [];
}


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