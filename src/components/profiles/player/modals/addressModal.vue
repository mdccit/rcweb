<template>

    <!-- common full screen loader -->
    <ScreenLoader v-if="loading" />
    <!-- Address change modal -->
    <div v-if="visible" class="relative z-index-320" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <form @submit.prevent="saveAddress">
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mt-3 text-center sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Change
                                        Your Contact Information</h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500 mb-3">Please update your contact information
                                            below:
                                        </p>

                                        <div>
                                            <div class="grid sm:grid-cols-1 grid-cols-1 gap-2 mb-2">
                                                <!-- Address Line 1 -->
                                                <div class="mb-2 sm:col-span-2 col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Address
                                                        Line 1
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="address_line_1" v-model="address_line_1"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter Address Line 1" required>
                                                        <InputError
                                                            :error="errors.address_line_1 ? errors.address_line_1.join(', ') : ''" />
                                                    </div>
                                                </div>
                                                <!-- Address Line 2 -->
                                                <div class="mb-2 sm:col-span-2 col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Address
                                                        Line
                                                        2</label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="address_line_2" v-model="address_line_2"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter Address Line 2">
                                                        <InputError
                                                            :error="errors.address_line_2 ? errors.address_line_2.join(', ') : ''" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                                <!-- City -->
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">City
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="city" v-model="city"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter City" required>
                                                        <InputError
                                                            :error="errors.city ? errors.city.join(', ') : ''" />
                                                    </div>
                                                </div>
                                                <!-- State/Province -->
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label
                                                        class="block mb-1 text-gray-700 font-sans text-sm">State/Province
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="state_province" v-model="state_province"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter State/Province" required>
                                                        <InputError
                                                            :error="errors.state_province ? errors.state_province.join(', ') : ''" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                                <!-- Postal Code -->
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Postal
                                                        Code
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="postal_code" v-model="postal_code"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter Postal Code" required>
                                                        <InputError
                                                            :error="errors.postal_code ? errors.postal_code.join(', ') : ''" />
                                                    </div>
                                                </div>
                                                <!-- Country -->
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Country
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <CountryDropdown :countries="countries" v-model="country"
                                                            id="country" class="mt-0" label="Country *" />
                                                        <InputError
                                                            :error="errors.country ? errors.country.join(', ') : ''" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="grid  grid-cols-6 lg:grid-cols-6 gap-2 mb-2">
                                                <!-- Phone Code and Phone Number on Separate Lines -->
                                                <div class="mb-2  col-span-2">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Mobile No
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span>
                                                    </label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <CountryCodeDropdown :country_codes="country_codes"
                                                            v-model="phone_code_country"
                                                            class="block w-full h-12 rounded-lg" />
                                                        <InputError
                                                            :error="errors.phone_code_country ? errors.phone_code_country.join(', ') : ''" />
                                                    </div>
                                                </div>
                                                <div class="mb-2  col-span-4">
                                                    <!-- <label class="block mb-1 text-gray-700 font-sans text-sm">Phone
                                                        Number</label> -->
                                                    <div
                                                        class="flex rounded-lg border border-gray-300 shadow-sm mt-[24px]">
                                                        <input type="text" id="phone_number" v-model="phone_number"
                                                            class="block w-full h-12 border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter Phone Number" required />
                                                        <InputError
                                                            :error="errors.phone_number ? errors.phone_number.join(', ') : ''" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                                <!-- Email Address -->
                                                <div class="mb-2 sm:col-span-2 col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Email
                                                        Address
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="email" v-model="email"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter Email Address" required>
                                                        <InputError
                                                            :error="errors.email ? errors.email.join(', ') : ''" />
                                                    </div>
                                                </div>
                                            </div>

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
                                    class="inline w-4 h-4 me-3 text-white animate-spin mt-[3px] ml-[5px]"
                                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                            <button type="button" @click="$emit('close', 'address')"
                                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>



<script setup>

import { ref, defineProps } from 'vue';
import { useNuxtApp } from '#app';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';
import { loadCountryList } from '~/services/commonService';
import CountryCodeDropdown from '~/components/common/select/CountryCodeDropdown.vue';
import CountryDropdown from '~/components/common/select/CountryDropdown.vue';
import ScreenLoader from '@/layouts/screen_loader.vue';

const nuxtApp = useNuxtApp();
const nprogress = nuxtApp.$nprogress;
const $publicService = nuxtApp.$publicService;
const $userService = nuxtApp.$userService;

const address_line_1 = ref('');
const address_line_2 = ref('');
const city = ref('');
const state_province = ref('');
const postal_code = ref('');
const country = ref('');
const phone_number = ref('');
const phone_code_country = ref('');
const email = ref('');

const error = ref('');
const errors = ref({});
const loading = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('');
const notification_type = ref(0);

const countries = ref([]);  // Reactive array to hold country data
const country_codes = ref([]);  // Reactive array to hold phone country codes

const props = defineProps({
    visible: Boolean,
    slug: String
});


// Define emits to handle custom events like close
const emit = defineEmits(['close']);

onMounted(async () => {
    loading.value = true;
    const results = await Promise.allSettled([loadCountryCodes(), loadCountries()]);
    if (results) {
        loading.value = false;
    }

    if (props.slug) {
        // Use Promise.all to wait for all async operations to complete
        await fetchPlayerContact();

    } else {
        console.log('no slug');
    }

});

watch(() => props.visible, (newVal) => {
    if (newVal && props.slug) {
        fetchPlayerContact();
    }
});

watch(countries, (newVal) => {
    if (newVal.length > 0 && country.value === null && dataSets.user_address_info) {
        country.value = dataSets.user_address_info.country_id ?? null;
    }
});

watch(country_codes, (newVal) => {
    console.log('Watcher triggered for country codes:', newVal.length);  // Log length of country codes
    if (newVal.length > 0 && phone_code_country.value === null && dataSets.user_phone_info) {
        phone_code_country.value = dataSets.user_phone_info.id ?? null;
    }
});


const fetchPlayerContact = async () => {
    try {
        loading.value = true;
        const dataSets = await $publicService.get_user_profile(props.slug);
        if (dataSets.user_address_info) {
            city.value = dataSets.user_address_info.city ?? 'User has not entered city';
            address_line_1.value = dataSets.user_address_info.address_line_1 ?? 'User has not entered address line 01';
            address_line_2.value = dataSets.user_address_info.address_line_2 ?? '';
            state_province.value = dataSets.user_address_info.state_province ?? 'User has not entered state provice';
            postal_code.value = dataSets.user_address_info.postal_code ?? 'User has not entered postal code';
        }

        if (dataSets.user_phone_info) {
            phone_number.value = dataSets.user_phone_info.phone_number ?? 'User has not entered phone number';
            phone_code_country.value = dataSets.user_phone_info.country_id ?? null;
        }

        if (dataSets.user_basic_info) {
            country.value = dataSets.user_basic_info.country_id;
            email.value = dataSets.user_basic_info.email ?? 'User has not entered email';
        }
    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    } finally {
        loading.value = false;
    }
}

const updatePlayerAddress = async () => {
    error.value = '';
    errors.value = {};
    loading.value = true;
    notification_type.value = '';
    notificationMessage.value = '';
    showNotification.value = false;

    try {
        const request_body = {
            user_slug: props.slug,
            country: country.value,
            city: city.value,
            address_line_1: address_line_1.value,
            address_line_2: address_line_2.value,
            state_province: state_province.value,
            postal_code: postal_code.value,
            phone_number: phone_number.value,
            phone_code_country: phone_code_country.value,
            email: email.value
        };
        const response = await $userService.update_player_contact_info(request_body);  // Pass slug and request body
        if (response.status == '200') {
            // Trigger success notification
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            // Emit close event to parent to close the modal
            emit('close', 'address');
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
        }

    } catch (error) {
        //   nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
        handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
    } finally {
        loading.value = false;
    }
};

const saveAddress = () => {
    updatePlayerAddress();
}

const loadCountryCodes = async () => {
    try {
        country_codes.value = await loadCountryList();
    } catch (err) {
        console.error('Error loading country codes:', err);
    }
};

const loadCountries = async () => {
    try {
        countries.value = await loadCountryList();
    } catch (err) {
        console.error('Error loading countries:', err);
    }
};

</script>