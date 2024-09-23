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
                                        Update Player Info
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
                                            <label for="date_of_birth"
                                                class="block mb-1 text-sm font-normal text-gray-900">Date of Birth <span
                                                    class="text-red-600">*</span></label>
                                            <input type="date" v-model="date_of_birth" required
                                                class="w-full border border-gray-300 rounded-lg shadow-sm" />
                                            <InputError
                                                :error="errors.date_of_birth ? errors.date_of_birth.join(', ') : ''" />

                                        </div>

                                        <!-- Weight -->
                                        <div class="col-span-2">
                                            <div class="mb-1 flex items-center justify-between">
                                                <label for="weight"
                                                    class="block text-sm font-normal text-gray-900">Weight <span
                                                        class="text-red-600">*</span></label>
                                                <div class="flex items-center space-x-3">
                                                    <label class="flex items-center">
                                                        <input type="radio" v-model="weight_in_kg" :value="true"
                                                            class="mr-1" />
                                                        <span class="text-sm text-gray-900">Kilograms</span>
                                                    </label>
                                                    <label class="flex items-center">
                                                        <input type="radio" v-model="weight_in_kg" :value="false"
                                                            class="mr-1" />
                                                        <span class="text-sm text-gray-900">Pounds</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <!-- Weight in Kilograms -->
                                            <div v-if="weight_in_kg">
                                                <input type="number" required v-model="weight_kg"
                                                    class="block w-full rounded-lg border-gray-300 shadow-sm"
                                                    placeholder="Weight in kg" />
                                            </div>
                                            <!-- Weight in Pounds -->
                                            <div v-else>
                                                <input type="number" required v-model="weight_lb"
                                                    class="block w-full rounded-lg border-gray-300 shadow-sm"
                                                    placeholder="Weight in lb" />
                                            </div>
                                        </div>


                                        <!-- Handedness -->
                                        <div>

                                            <label for="handedness"
                                                class="block mb-1 text-sm font-normal text-gray-900">Handedness <span
                                                    class="text-red-600">*</span></label>
                                            <HandednessDropdown :handedness="handednesses" v-model="handedness"
                                                id="handedness" />
                                            <InputError
                                                :error="errors.handedness ? errors.handedness.join(', ') : ''" />
                                        </div>

                                        <!-- Gender -->
                                        <div>
                                            <label for="gender"
                                                class="block mb-1 text-sm font-normal text-gray-900">Gender <span
                                                    class="text-red-600">*</span></label>
                                            <GenderDropDown :genders="genders" v-model="gender" id="gender" />
                                            <InputError :error="errors.gender ? errors.gender.join(', ') : ''" />
                                        </div>

                                        <!-- Height Section -->
                                        <div class="col-span-2">
                                            <div class="mb-1 flex items-center justify-between">
                                                <label for="height"
                                                    class="block text-sm font-normal text-gray-900">Height
                                                    <span class="text-red-600">*</span></label>

                                                <!-- Toggle between Feet/Inches and Centimeters -->
                                                <div class="flex items-center space-x-3">
                                                    <label class="flex items-center">
                                                        <input type="radio" id="player_height_in_cm"
                                                            v-model="height_in_cm" :value="true" class="mr-1" />
                                                        <span class="text-sm text-gray-900">Centimeters</span>
                                                    </label>
                                                    <label class="flex items-center">
                                                        <input type="radio" id="height_ft_in" v-model="height_in_cm"
                                                            :value="false" class="mr-1" />
                                                        <span class="text-sm text-gray-900">Feet/Inches</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <!-- Height in Centimeters -->
                                            <div v-if="height_in_cm">
                                                <div class="relative">
                                                    <input type="text" id="player_height_cm" v-model="height_cm"
                                                        class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="Height in cm" />
                                                    <span v-if="errors.height_cm" class="text-red-500 text-sm">{{
        errors.player_height_cm.join(', ') }}</span>
                                                </div>
                                            </div>

                                            <!-- Height in Feet/Inches -->
                                            <div v-else class="grid grid-cols-2 gap-3">
                                                <div class="relative">
                                                    <input type="number" id="player_height_ft" v-model="height_ft"
                                                        class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="Feet" />
                                                    <span v-if="errors.player_height_ft" class="text-red-500 text-sm">{{
        errors.player_height_ft.join(',') }}</span>
                                                </div>
                                                <div class="relative">
                                                    <input type="number" id="player_height_in" v-model="height_in"
                                                        class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="Inches" />
                                                    <span v-if="errors.player_height_in" class="text-red-500 text-sm">{{
        errors.height_in.join(',') }}</span>
                                                </div>
                                            </div>
                                        </div>


                                        <!-- Preferred Surface -->
                                        <div>
                                            <label for="preferred_surface"
                                                class="block mb-1 text-sm font-normal text-gray-900">Preferred
                                                Surface</label>
                                            <select v-model="preferred_surface" required
                                                class="w-full border border-gray-300 rounded-lg shadow-sm">
                                                <option value="hard">Hard</option>
                                                <option value="clay">Clay</option>
                                                <option value="grass">Grass</option>
                                                <option value="artificial">Artificial</option>
                                            </select>
                                        </div>

                                        <!-- Graduation Month/Year -->
                                        <div>
                                            <label for="graduation_month_year"
                                                class="block mb-1 text-sm font-normal text-gray-900">Graduation
                                                Month/Year</label>
                                            <input type="month" v-model="graduation_month_year" required
                                                class="w-full border border-gray-300 rounded-lg shadow-sm" />
                                            <InputError
                                                :error="errors.graduation_month_year ? errors.graduation_month_year.join(', ') : ''" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="submit"
                                class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Save
                                changes</button>
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
import CountryCodeDropdown from '~/components/common/select/CountryCodeDropdown.vue';
import NationalityDropdown from '@/components/common/select/NationalityDropdown.vue';
import HandednessDropdown from '@/components/common/select/HandednessDropdown.vue';
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
const handedness = ref('');
const gender = ref('');
const weight_in_kg = ref(true);  // true = kilograms, false = pounds
const weight_kg = ref('');
const weight_lb = ref('');
const preferred_surface = ref('');
const graduation_month_year = ref('');
const height_in_cm = ref(false);  // true = centimeters, false = feet/inches
const height_ft = ref('');
const height_in = ref('');
const height_cm = ref('');

// Load dropdown data
const nationalities = ref([]);
const handednesses = ref([]);
const genders = ref([]);

// Props and Emit definition
const props = defineProps({
    visible: Boolean,
    slug: String
});

const emit = defineEmits(['close']);

// Fetch player data
onMounted(async () => {
    if (props.slug) {
        try {
            nprogress.start();  // Start progress bar
            // Use Promise.all to wait for all async operations to complete
            await Promise.all([
                fetchPlayerInfo(props.slug),
                loadNationalities(),
                loadGenders(),
                loadHandness()
            ]);
        } catch (error) {
            console.error('Error loading player data:', error);
        } finally {
            nprogress.done();  // Ensure progress bar stops when all tasks are done
        }
    }
});


const fetchPlayerInfo = async (slug) => {
    try {

        const dataSets = await $publicService.get_player(slug);

        if (dataSets.user_basic_info) {
            // Set Nationality, Gender, and Date of Birth
            nationality.value = dataSets.user_basic_info.nationality_id ?? null;
            gender.value = dataSets.user_basic_info.gender ?? null;

            // Set Date of Birth
            if (dataSets.user_basic_info.date_of_birth) {
                const birthDate = new Date(dataSets.user_basic_info.date_of_birth);
                date_of_birth.value = birthDate.toISOString().split('T')[0];  // Format as 'YYYY-MM-DD'
            }

            // Set Graduation Month/Year
            if (dataSets.player_info?.graduation_month_year) {
                graduation_month_year.value = dataSets.player_info.graduation_month_year;
            }
        }

        if (dataSets.player_info) {
            // Set Height
            if (dataSets.player_info.height) {
                height_in_cm.value = true; // Assuming height is stored in cm
                height_cm.value = parseFloat(dataSets.player_info.height); // Convert height to cm if available
            }

            // Set Weight
            if (dataSets.player_info.weight) {
                weight_in_kg.value = true; // Assuming weight is in kg
                weight_kg.value = parseFloat(dataSets.player_info.weight); // Convert weight to kg if available
            }

            // Set Handedness
            handedness.value = dataSets.player_info.other_data.handedness ?? null;

            // Set Preferred Surface
            preferred_surface.value = dataSets.player_info.other_data.preferred_surface ?? null;
        }

    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
};


// Save player info
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
            handedness: handedness.value,
            gender: gender.value,
            date_of_birth: date_of_birth.value,
            height_in_cm: height_in_cm.value,
            height_cm: height_cm.value,
            height_ft: height_ft.value,
            height_in: height_in.value,
            weight_in_kg: weight_in_kg.value,
            weight_kg: weight_kg.value,
            weight_lb: weight_lb.value,
            preferred_surface: preferred_surface.value,
            graduation_month_year: graduation_month_year.value
        };

        const response = await $userService.update_player_info(request_body);

        if (response.status == '200') {
            loading.value = false;
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
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
