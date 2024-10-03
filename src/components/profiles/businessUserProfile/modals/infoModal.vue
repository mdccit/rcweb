<template>
    <!-- Info change modal -->
    <div v-if="visible" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <form @submit.prevent="saveInfo">
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                                        Update Business User Info
                                    </h3>
                                    <div class="mt-2 grid grid-cols-2 gap-4">
                                        <!-- Nationality -->
                                        <div>
                                            <label for="nationality"
                                                class="block mb-1 text-sm font-normal text-gray-900">Nationality<span
                                                    class="text-red-600">*</span></label>
                                            <NationalityDropdown :nationalities="nationalities" v-model="nationality"
                                                id="nationality" required />
                                            <InputError
                                                :error="errors.nationality ? errors.nationality.join(', ') : ''" />

                                        </div>


                                        <!-- Date of Birth -->
                                        <div>
                                            <label for="date_of_birth" class="block mb-1 text-sm font-normal text-gray-900">
                                              Date of Birth <span class="text-red-600">*</span>
                                            </label>
                                            <input
                                              type="date"
                                              v-model="date_of_birth"
                                              required
                                              class="w-full border border-gray-300 rounded-lg shadow-sm h-12"
                                            />
                                            <InputError :error="errors.date_of_birth ? errors.date_of_birth.join(', ') : ''" />
                                          </div>

                                        <!-- Gender -->
                                        <div>
                                            <label for="gender"
                                                class="block mb-1 text-sm font-normal text-gray-900">Gender <span
                                                    class="text-red-600">*</span></label>
                                            <GenderDropDown :genders="genders" v-model="gender" id="gender" />
                                            <InputError :error="errors.gender ? errors.gender.join(', ') : ''" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="submit" :disabled="loading"
                                class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">Save
                                changes
                                <svg v-if="loading" aria-hidden="true" role="status"
                                    class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                            <button type="button" @click="$emit('close', 'info')"
                                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { loadCountryList, loadNationalityList, loadGenderList, loadHandnessList } from '~/services/commonService';
import NationalityDropdown from '@/components/common/select/NationalityDropdown.vue';
import GenderDropDown from '@/components/common/select/GenderDropDown.vue';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';

const nuxtApp = useNuxtApp();
const nprogress = nuxtApp.$nprogress;
const $publicService = nuxtApp.$publicService;
const $userService = nuxtApp.$userService;

const error = ref('');
const errors = ref({});
const loading = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('');
const notification_type = ref(0);

// Form state
const date_of_birth = ref('');
const nationality = ref('');
const gender = ref('');
const position = ref('none');



// Load dropdown data
const nationalities = ref([]);
const genders = ref([]);

// Props and Emit definition
const props = defineProps({
    visible: Boolean,
    slug: String
});

const emit = defineEmits(['close']);

// Fetch business user data
onMounted(async () => {
    // Use Promise.all to wait for all async operations to complete
    await Promise.all([
        loadNationalities(),
        loadGenders(),
        fetchBusinessUserInfo(),

    ]);
});

watch(() => props.visible, (newVal) => {
    if (newVal && props.slug) {
        fetchBusinessUserInfo();
    }
});

const fetchBusinessUserInfo = async () => {
    try {
        const dataSets = await $publicService.get_business_user(props.slug);

        if (dataSets.user_basic_info) {
            // Set Nationality, Gender, and Date of Birth
            nationality.value = dataSets.user_basic_info.nationality_id ?? null;
            gender.value = dataSets.user_basic_info.gender ?? null;

            // Set Date of Birth
            if (dataSets.user_basic_info.date_of_birth) {
                const birthDate = new Date(dataSets.user_basic_info.date_of_birth);
                date_of_birth.value = birthDate.toISOString().split('T')[0];  // Format as 'YYYY-MM-DD'
            }
        }
    } catch (error) {
        console.error('Error fetching business user info:', error);  // Debug: log the error
    }
};


// Save business user info
const saveInfo = async () => {

    error.value = '';
    errors.value = {};
    loading.value = true;
    notification_type.value = '';
    notificationMessage.value = '';
    showNotification.value = false;
    try {
        const request_body = {
            user_slug: props.slug,
            nationality: nationality.value,
            gender: gender.value,
            date_of_birth: date_of_birth.value,
            position: position.value
        };

        const response = await $userService.update_business_user_other_info(request_body);

        if (response.status == '200') {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            clearUserInfo();
            emit('close', 'info'); // Emit close event after successfully updating the names
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

const clearUserInfo = () => {
    nationality.value = '';
    gender.value = '';
    date_of_birth.value = '';
    error.value = '';
    errors.value = {};
    notification_type.value = '';
    notificationMessage.value = '';
    showNotification.value = false;
    loading.value = false;
};


const loadCountries = async () => {
    try {
        countries.value = await loadCountryList();
    } catch (err) {
        console.error('Error loading countries:', err);
    }
};

const loadNationalities = async () => {
    try {
        nationalities.value = await loadNationalityList();
    } catch (err) {
        console.error('Error loading nationalities:', err);
    }
};

const loadGenders = async () => {
    try {
        genders.value = await loadGenderList();
    } catch (err) {
        console.error('Error loading genders:', err);
    }
};

const loadHandness = async () => {
    try {
        handednesses.value = await loadHandnessList();
    } catch (err) {
        console.error('Error loading handess:', err);
    }
};


</script>
