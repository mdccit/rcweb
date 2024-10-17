<template>
    <!-- Address change modal -->
    <div v-if="visible" class="relative z-index-320" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <form @submit.prevent="updatePlayerAddress">
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Change
                                        Your Contact Information</h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500 mb-3">Please update your contact information
                                            below:
                                        </p>

                                        <div>
                                            <div class="grid grid-cols-6 gap-2 mb-2">
                                                <!-- Address Line 1 -->
                                                <div class="mb-2 sm:col-span-3 col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Address
                                                        Line 1
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="address_line_1" v-model="address_line_1"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter Address Line 1" required>
                                                    </div>
                                                </div>
                                                <!-- Address Line 2 -->
                                                <div class="mb-2 sm:col-span-3 col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Address
                                                        Line
                                                        2</label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="address_line_2" v-model="address_line_2"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter Address Line 2">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="grid grid-cols-6 gap-2 mb-2">
                                                <!-- City -->
                                                <div class="mb-2 s col-span-3">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">City
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="city" v-model="city"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter City" required>
                                                    </div>
                                                </div>
                                                <!-- State/Province -->
                                                <div class="mb-2 col-span-3">
                                                    <label
                                                        class="block mb-1 text-gray-700 font-sans text-sm">State/Province
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="state_province" v-model="state_province"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter State/Province" required>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="grid  grid-cols-6 gap-2 mb-2">
                                                <!-- Postal Code -->
                                                <div class="mb-2 col-span-3">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Postal
                                                        Code
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="postal_code" v-model="postal_code"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter Postal Code" required>
                                                    </div>
                                                </div>
                                                <!-- Country -->
                                                <div class="mb-2 col-span-3">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Country
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <CountryDropdown :countries="countries" v-model="country"
                                                            id="country" class="mt-0" label="Country *" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="grid grid-cols-6 gap-2 mb-2">
                                                <!-- Phone Code and Phone Number on Separate Lines -->
                                                <div class="mb-2 col-span-2 ">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Phone
                                                        Code <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <CountryCodeDropdown :country_codes="country_codes"
                                                            v-model="phone_code_country"
                                                            class="block w-full h-12 rounded-lg" />
                                                    </div>
                                                </div>
                                                <div class="mb-2 col-span-4">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Phone
                                                        Number <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input type="text" id="phone_number" v-model="phone_number"
                                                            class="block w-full h-12 border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="Enter Phone Number" required />
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
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="submit" @click="saveAddress"
                                class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">Save
                                changes</button>
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

const countries = ref([]);  // Reactive array to hold country data
const country_codes = ref([]);  // Reactive array to hold phone country codes

const props = defineProps({
    visible: Boolean,
    slug: String,
    data: Object
});


// Define emits to handle custom events like close
const emit = defineEmits(['close', 'dataUpdate']);

onMounted(async () => {
    const results = await Promise.allSettled([loadCountryCodes(), loadCountries()]);
    // if (props.slug) {
    //     // Use Promise.all to wait for all async operations to complete
    //     await fetchCoachContact();

    // } else {
    //     console.log('no slug');
    // }


});

watch(() => props.visible, () => {
    console.log("Email " + email.value)

    country.value = props.data.country;
    city.value = props.data.city;
    address_line_1.value = props.data.address_line_1;
    address_line_2.value = props.data.address_line_2;
    state_province.value = props.data.state_province;
    postal_code.value = props.data.postal_code;
    phone_number.value = props.data.phone_number;
    phone_code_country.value = props.data.postal_code;
    email.value = props.data.email;
});


const updateParentAddress = async () => {
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
        console.log(request_body)
        const response = await $publicService.update_parent_info(request_body);
        if (response.status == '200') {
            // Trigger success notification
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            // clearForm();
            // Emit close event to parent to close the modal
            emit('dataUpdate');
            emit('close', 'address');
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
        }

    } catch (error) {
        // Handle error
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
};

const saveAddress = () => {
    console.log(1)
    updateParentAddress();
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

const clearForm = () => {
    country.value = '';
    city.value = '';
    address_line_1.value = '';
    address_line_2.value = '';
    state_province.value = '';
    postal_code.value = '';
    phone_number.value = '';
    phone_code_country.value = '';
    email.value = '';
};

</script>