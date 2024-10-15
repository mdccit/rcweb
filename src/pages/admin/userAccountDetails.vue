<template>
    <header class="bg-gray-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <div class="flex items-center gap-4">
                    <NuxtLink to="/admin/users?role=1"><svg class="w-6 h-6 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg></NuxtLink>
                    <h2 class="font-bold text-lg self-center"> Editing: {{ ' ' + first_name + ' ' + last_name }} </h2>
                </div>
                <div class="">
                    <NuxtLink :to="`/app/profile/${slug}`"><button type="submit"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                            View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 7l-10 10"></path>
                                <path d="M8 7l9 0l0 9"></path>
                            </svg>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-7">
        <!-- User Edit Section Component -->
        <userEditSection :user_id="user_id" />

        <form @submit.prevent="updateUserDetails">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <!-- Photo Upload Section -->
                <div class="col-span-6 sm:col-span-4">
                    <span class="block mb-1 text-gray-700 font-sans">Photo</span>
                    <div class="mt-2">
                        <img v-if="profile == null"
                            src="https://ui-avatars.com/api/?name=e+e&amp;color=7F9CF5&amp;background=EBF4FF"
                            alt="User Photo" class="rounded-full h-20 w-20 object-cover" />
                        <img v-if="profile != null" :src="profile.url" alt="SchoolAdm1"
                            class="rounded-full h-20 w-20 object-cover">
                    </div>
                    <div class="flex mt-2 space-x-2">
                        <!-- Select a New Photo -->
                        <div>
                            <label class="block">
                                <a
                                    class="font-semibold border border-border rounded py-4 px-4 w-full block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center">
                                    <svg class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                        <path d="M7 9l5 -5l5 5"></path>
                                        <path d="M12 4l0 12"></path>
                                    </svg>
                                    Select A New Photo
                                    <input name="photo" type="file" data-validation-key="photo"
                                        @change="handleFileChange"
                                        class="invisible absolute inset-0 w-full h-full disabled:opacity-50" />
                                </a>
                            </label>
                        </div>

                        <!-- Remove Photo -->
                        <button @click="deleyeUserProfilePicture"
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
                        </button>
                    </div>
                </div>

                <div class="my-8"></div>

                <!-- First Name Input -->
                <div class="w-full">
                    <label class="block">
                        <span class="block mb-1 text-gray-700 font-sans">First Name <span
                                class="text-red-500">*</span></span>
                        <div class="flex rounded-lg border border-gray-300 shadow-sm rounded-[10px]">
                            <input v-model="first_name" type="text" :disabled="action === 'view'"
                                class="lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg border border-gray-300" />
                        </div>
                    </label>
                    <InputError :error="errors.first_name ? errors.first_name.join(', ') : ''" />
                </div>

                <div class="my-8"></div>

                <!-- Last Name Input -->
                <div class="w-full">
                    <label class="block">
                        <span class="block mb-1 text-gray-700 font-sans">Last Name <span
                                class="text-red-500">*</span></span>
                        <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                            <input
                                class="lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                v-model="last_name" name="name" type="text" data-validation-key="name"
                                :disabled="action === 'view'" />
                        </div>
                        <InputError :error="errors.last_name ? errors.last_name.join(', ') : ''" />
                    </label>
                </div>

                <div class="my-8"></div>

                <!-- Other Names Input -->
                <div class="w-full">
                    <label class="block">
                        <span class="block mb-1 text-gray-700 font-sans">Other Names</span>
                        <div class="flex border border-gray-300 shadow-sm rounded-[10px]">
                            <input
                                class="block text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg "
                                v-model="other_names" name="name" type="text" data-validation-key="other-names"
                                :disabled="action === 'view'" />
                        </div>
               
                        <InputError :error="errors.other_names ? errors.other_names.join(', ') : ''" />
                    </label>
                </div>

                <div class="my-8"></div>


                <!-- Email Address Input -->
                <div class="">
                    <div class="w-full">
                        <label class="block">
                            <span class="block mb-1 text-gray-700 font-sans">Email address <span
                                    class="text-red-500">*</span></span>
                            <div class="flex rounded-lg border border-gray-300 shadow-sm ">
                                <input v-model="email"
                                    class="block text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                    name="email" type="text" data-validation-key="email"
                                    :disabled="action === 'view'" />
                            </div>
                            <InputError :error="errors.email ? errors.email.join(', ') : ''" />
                        </label>
                    </div>

                    <!-- Email Verification Checkbox -->
                    <div class="flex justify-end items-center mt-4">
                        <label class="flex items-center">
                            <input name="set_email_verified" v-model="is_set_email_verified" type="checkbox"
                                data-validation-key="set_email_verified"
                                class="rounded-full text-black p-3 border-border-alt text-blue-500 shadow-sm focus:border-blue-200 focus:ring focus:ring-blue-300 focus:ring-opacity-50 disabled:opacity-50"
                                :disabled="is_set_email_verified != null" />

                            <!-- Conditionally hide this span based on is_set_email_verified -->
                            <span v-if="!is_set_email_verified" class="ml-4 text-black">
                                Set email verified
                            </span>
                            <span v-if="is_set_email_verified" class="ml-4 text-black">
                                Email verified
                            </span>
                        </label>
                        <InputError :error="errors.is_set_email_verified ? errors.is_set_email_verified.join(', ') : ''" />

                        <!-- Resend Verification Email Link aligned on the same row to the right -->
                        <div v-if="!is_set_email_verified" class="flex items-center text-black gap-2 ml-4">
                            <span>Or</span>
                            <button type="submit" @click.prevent="resendVerificationEmail"
                                class="bg-gray-200 p-2 rounded text-black hover:bg-gray-300">
                                send again
                            </button>
                        </div>
                    </div>


                </div>

                <div class="my-8"></div>

                <!-- Password Input -->
                <div class="w-full">
                    <label class="block">
                        <span class="block mb-1 text-gray-700 font-sans">Password <span
                                class="text-red-500">*</span></span>
                        <div class="flex rounded-lg border border-gray-300 shadow-sm">
                            <input
                                class="block text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                name="password" v-model="password" type="text" data-validation-key="password"
                                :disabled="action === 'view'" />
                        </div>
                        <InputError :error="errors.password ? errors.password.join(', ') : ''" />
                    </label>
                </div>

                <div class="my-8"></div>

                <!-- Approval Dropdown -->
                <div class="w-full">
                    <label class="block">
                        <span class="block mb-1 text-gray-700 font-sans">Approved <span
                                class="text-red-500">*</span></span>
                        <div class="relative">
                            <select v-model="is_approved" name="is_approved" data-validation-key="is_approved"
                                :disabled="action === 'view'"
                                class="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 px-5 py-3 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50">
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                            <InputError :error="errors.is_approved ? errors.is_approved.join(', ') : ''" />
                        </div>
                    </label>
                </div>

                <div class="my-8"></div>

                <!-- Phone Number Input -->
                <div class="relative">

                    <div class="absolute right-0 top-0">

                        <div ata-tooltip-target="tooltip-default" class="col-span-1 text-right tooltip"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4 ml-[20px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>
                            <div class="tooltipDiv">
                                <span class="tooltiptext">If you are a player or a parent, your phone number
                                    will be visible to
                                    coaches.</span>
                            </div>
                        </div>
                    </div>


                    <div class="grid grid-cols-10 gap-4 items-center mt-4 mb-3">
                        <!-- Country Code Dropdown -->
                        <div class="col-span-2">
                            <label class="block">
                                <span class="block mb-1 text-gray-700 font-sans">
                                    Phone
                                    <span aria-hidden="true" class="text-red-600"
                                        title="This field is required">*</span>
                                </span>
                                <div class="relative">
                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                        <CountryCodeDropdown :country_codes="country_codes" v-model="phone_code_country"
                                            name="phone_code" data-validation-key="phone_code"
                                            :disabled="action === 'view'" required />
                                    </div>
                                    <InputError :error="errors.phone_code_country ? errors.phone_code_country.join(', ') : ''" />
                                </div>
                            </label>
                        </div>

                        <!-- Phone Number Input -->
                        <div class="col-span-8">
                            <div class="w-full no-asterisk">
                                <label class="block">
                                    <span class="block mb-1 text-gray-700 font-sans">
                                        <span aria-hidden="true" class="text-red-600" title="This field is required">*
                                        </span>
                                    </span>

                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">

                                        <input
                                            class="block text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                            name="phone_number" type="text" data-validation-key="phone_number"
                                            v-model="phone_number" id="phone_number" step="0.01" required
                                            placeholder="123456789" :disabled="action === 'view'" />
                                    </div>
                                    <InputError :error="errors.phone_number ? errors.phone_number.join(', ') : ''" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="my-8"></div>

                <!-- Role Dropdown -->
                <div class="w-full">
                    <label class="block">
                        <span class="block mb-1 text-gray-700 font-sans">Role </span>
                        <div class="relative">

                            <select v-model="user_role" name="role" data-validation-key="role"
                                class="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 px-5 py-3 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50"
                                :disabled="action === 'view'">
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
                <button type="submit" v-if="action !== 'view'"
                    class="border bg-blue-500 hover:bg-blue-700 rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50  text-white border-transparent ">
                    <div class="flex flex-row items-center justify-center">
                        <span>Save changes </span>
                    </div>
                </button>
            </div>
        </form>
        <div class="my-16"></div>

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
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';

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
const country_codes = ref([]);
const userStore = useUserStore()
const router = useRouter();
const loading = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('');
const notification_type = ref('');
const errors = ref([]);
const profile = ref(null)
const profile_image = ref('')
const fileError = ref('');
const storedUserName = ref('');
const display_name =ref('');
const slug = ref('')

// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;
const $authService = nuxtApp.$authService;

// Reference to the modal component
const modalRef = ref(null);
const emit = defineEmits(['close']);
defineExpose({ clearForm });

const action = ref(route.params.action || 'view'); // default to 'view' if action not provided
const user_id = ref(route.params.user_id || '');

onMounted(() => {
    loadCountryCodes();
    // Update the refs directly
    action.value = route.query.action || 'view';
    user_id.value = route.query.user_id || '';
    storedUserName.value = localStorage.getItem('user_name');

    if (action.value === 'view' || action.value === 'edit') {
        fetchUserDetails(user_id.value);
    }
});

const resendVerificationEmail = async () => {
    loading.value = true;
    try {
        const response = await $authService.resendVerificationEmail(user_id.value);
        console.log('sending failed');
        if (response.status === 200) {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        } else {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
        }
    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    } finally {
        loading.value = false;
    }
}

const showLogoutNotification = async () => {
    nuxtApp.$notification.triggerNotification('You have been logged out successfully!', 'success');
}

// Watch for changes in the route query parameters
watch([() => route.query.action, () => route.query.user_id], ([newAction, newUserId]) => {
    action.value = newAction || 'view';
    user_id.value = newUserId || '';

    if (action.value === 'create') {
        clearForm();  // Clear form for "create"
    } else if (action.value === 'edit' || action.value === 'view') {
        fetchUserDetails(user_id.value);  // Fetch user details for "edit" & "view"
    }
});


//Update User
const updateUserDetails = async () => {
    loading.value = true;
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
            is_approved: is_approved.value == 1 ? true : false,
            password: password.value,
            password_confirmation: password_confirmation.value,
            phone_code_country: phone_code_country.value,
            phone_number: phone_number.value,
        });
        if (response.status === 200) {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        } else {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
        }
        fetchUserDetails(user_id.value)
    } catch (error) {
        loading.value = false;
        handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
        // handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
    }
};


// Fetch user details function
const fetchUserDetails = async (userId) => {
    try {
        const response = await $adminService.get_user_details(userId);
        const user = response.user_basic_info;
        const contact_info = response.user_phone_info;
        id.value = user.id,
            first_name.value = user.first_name || '';
        last_name.value = user.last_name || '';
        other_names.value = user.other_names || '';
        email.value = user.email || '';
        is_approved.value = user.is_approved,
            user_role.value = user.user_role_id || '';
        phone_code_country.value = contact_info.country_id || ''; // Adjust if needed
        phone_number.value = contact_info.phone_number || '';             // Adjust if needed
        is_set_email_verified.value = !!user.email_verified_at;
        profile.value = response.media_info.profile_picture || null;
        display_name.value = response.user_basic_info.display_name
        slug.value = response.user_basic_info.slug
    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.message, 'failure');
    }
};


const loadCountryCodes = async () => {
    try {
        country_codes.value = await loadCountryList();
    } catch (err) {
        nuxtApp.$notification.triggerNotification('Error loading country codes:', 'failure');
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
}


definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});

const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 30 * 1024 * 1024; // 30MB

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
            fileError.value = 'File size must be less than 30MB';
            event.target.value = ''; // Clear the file input
            return;
        }

        // If all validations pass, set the file to the reactive variable
        fileError.value = ''; // Clear any previous errors
        profile_image.value = file; // Store the selected file
        updateUserProfile()
    }
};

const updateUserProfile = async () => {
    if (!profile_image.value) {
        // Handle case where no file is selected
        console.log('no profile picture found');
        return;
    }
    try {
        const response = await $adminService.user_profile(id.value, profile_image.value);
        if (response.status === 200) {
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
        }
        fetchUserDetails(user_id.value)
    } catch (error) {
        console.log(error)
    }
};

const deleyeUserProfilePicture = async () => {
    if (profile.value == null) {
        // Handle case where no file is selected
        console.log('no profile picture found');
        return;
    }
    try {
        const response = await $adminService.user_profile_delete(profile.value.media_id);
        if (response.status === 200) {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        } else {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
        }
        fetchUserDetails(user_id.value)
    } catch (error) {
        console.log(error)
    }
};

const goBack = () =>{
    router.back();
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


/* Tooltip container */
.tooltip {
    position: relative;
    display: inline-block;
}

.tooltipDiv {
    right: 260px;
    position: absolute;
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 250px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 10px;
    border-radius: 6px;
    font-size: 13px;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 40;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
}
</style>