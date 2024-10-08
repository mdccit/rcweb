<template>
    <!-- Address change modal -->
    <div v-if="isVisible" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <form @submit.prevent="playerAdd">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Player Information</h3>
                                <div class="mt-2"><div>
                                    <div class="grid sm:grid-cols-1 grid-cols-1 gap-2 mb-2">
                                        <!-- First Name -->
                                        <div class="mb-2 sm:col-span-2 col-span-1">
                                            <label class="block mb-1 text-gray-700 font-sans text-sm">First Name
                                                <span aria-hidden="true" class="text-red-600"
                                                    title="This field is required">*</span></label>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                <input id="address_line_1" v-model="first_name"
                                                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    placeholder="Enter First Naame" required>
                                            </div>
                                        </div>
                                        <!--Last Name -->
                                        <div class="mb-2 sm:col-span-2 col-span-1">
                                            <label class="block mb-1 text-gray-700 font-sans text-sm">Last Name</label>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                <input id="address_line_2" v-model="last_name"
                                                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    placeholder="Enter Last Name">
                                            </div>
                                        </div>
                                        <!--Email -->
                                        <div class="mb-2 sm:col-span-2 col-span-1">
                                            <label class="block mb-1 text-gray-700 font-sans text-sm">Email Address</label>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                <input id="address_line_2" v-model="email"
                                                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    placeholder="Enter Email address">
                                            </div>
                                        </div>
                                         <!--Nationality -->
                                         <div class="mb-2 sm:col-span-2 col-span-1">
                                            <label class="block mb-1 text-gray-700 font-sans text-sm">Nationality</label>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                <NationalityDropdown :nationalities="nationalities" v-model="nationality" id="nationality"
                                                    label="Nationality" />
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
                                                </div>
                                            </div>
                                    </div>

                                        


                                        <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                            <!-- Phone Code and Phone Number on Separate Lines -->
                                            <div class="mb-2 sm:col-span-2 col-span-1">
                                                <label class="block mb-1 text-gray-700 font-sans text-sm">Phone
                                                    Code</label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <CountryCodeDropdown :country_codes="country_codes"
                                                        v-model="phone_code_country"
                                                        class="block w-full h-12 rounded-lg" />
                                                </div>
                                            </div>
                                            <div class="mb-2 sm:col-span-2 col-span-1">
                                                <label class="block mb-1 text-gray-700 font-sans text-sm">Phone
                                                    Number</label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <input type="text" id="phone_number" v-model="phone_number"
                                                        class="block w-full h-12 border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                        placeholder="Enter Phone Number" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                            <!-- Gender -->
                                             <div class="mb-2 sm:col-span-2 col-span-1">
                                                <label for="gender" class="font-normal block text-sm text-gray-900 dark:text-gray mb-1">Gender <span
                                                  class="text-red-600">*</span> </label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm w-full">
                                                    <GenderDropDown :genders="genders" v-model="gender" id="gender" label="Gender *" />
                                                </div>
                                            </div>
                                             <!-- Handness -->
                                             <div class="mb-2 sm:col-span-2 col-span-1">
                                                <label for="handedness" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Handedness
                                                    <span class="text-red-600">*</span> </label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm w-full">
                                                    <HandednessDropdown :handedness="handednesses" v-model="handedness" id="handedness"
                                                        label="Handedness *" />
                                                </div>
                                            </div>
                                             <!-- Budget -->
                                             <div class="mb-2 sm:col-span-2 col-span-1">
                                                <label class="block mb-1 text-gray-700 font-sans text-sm">Budget
                                                    <span aria-hidden="true" class="text-red-600"
                                                        title="This field is required">*</span></label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <BudgetDropdown :player_budgets="budgets" v-model="selectedBudget" id="budgets" label="Budgets *" />
                                                </div>
                                            </div>
                                             <!-- Graduation month -->
                                            <div class="mb-2 sm:col-span-2 col-span-1">
                                                <label class="block mb-1 text-gray-700 font-sans text-sm">Graduation
                                                    Month/Year
                                                    <span aria-hidden="true" class="text-red-600"
                                                        title="This field is required">*</span></label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <input type="month" v-model="graduation" 
                                                      class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                        placeholder="Select Month/Year" />
                                                </div>
                                            </div>
                                             <!-- Height -->
                                             <div class="mb-2 sm:col-span-2 col-span-1">
                                                <label class="block mb-1 text-gray-700 font-sans text-sm">Height
                                                    <span aria-hidden="true" class="text-red-600"
                                                        title="This field is required">*</span></label>
                                                <div class="flex text-last">
                                                    <div class="flex items-center">
                                                        <input type="radio" id="height_in_cm" v-model="height_in_cm" :value="true" />
                                                        <label for="height_in_cm" class="ml-2 text-sm text-gray-900">Centimeters</label>
                                                    </div>
                                                    <div class="flex items-center ml-3">
                                                        <input type="radio" id="height_ft_in" v-model="height_in_cm" :value="false" />
                                                        <label for="height_ft_in" class="ml-2 text-sm text-gray-900">Feet/Inches</label>
                                                    </div>
                                                </div>
                                                <div v-if="height_in_cm" class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <input type="number" id="height_cm" v-model="height_cm"
                                                      class="h-12 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                     placeholder="Height in cm"  />
                                                </div>
                                                <div v-else class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <input type="number" id="height_ft" v-model="height_ft"
                                                         class=" block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                       placeholder="Ft" />
                                                    <input type="number" id="height_in" v-model="height_in"
                                                       class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                        placeholder="In"  />
                                                </div>
                                            </div>
                                         
                                        </div>
                                        <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                            <!-- UTR -->
                                            <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                <label class="block mb-1 text-gray-700 font-sans text-sm">Utr
                                                    <span aria-hidden="true" class="text-red-600"
                                                        title="This field is required">*</span></label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <input id="city" v-model="utr" type="number"
                                                        class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                        placeholder="Enter Utr Value" required>
                                                </div>
                                            </div>
                                            <!-- GPA -->
                                            <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                <label class="block mb-1 text-gray-700 font-sans text-sm">GPA
                                                    <span aria-hidden="true" class="text-red-600"
                                                        title="This field is required">*</span></label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <input id="state_province" v-model="gpa" type="number"
                                                        class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                        placeholder="Enter Gpa Value" required>
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
import CountryCodeDropdown from '~/components/common/select/CountryCodeDropdown.vue';
import CountryDropdown from '~/components/common/select/CountryDropdown.vue';
import { loadCountryList, loadNationalityList, loadBudgetList, loadGenderList, loadHandnessList } from '~/services/commonService';
import NationalityDropdown from '~/components/common/select/NationalityDropdown.vue';
import GenderDropDown from '~/components/common/select/GenderDropDown.vue';
import BudgetDropdown from '~/components/common/select/BudgetDropdown.vue';
import HandednessDropdown from '~/components/common/select/HandednessDropdown.vue';
const nuxtApp = useNuxtApp();
const nprogress = nuxtApp.$nprogress;
const $publicService = nuxtApp.$publicService;
const $userService = nuxtApp.$userService;

const first_name = ref('');
const last_name = ref('');
const email = ref('');
const nationality = ref('')
const city = ref('');
const state_province = ref('');
const postal_code = ref('');
const country = ref('');
const phone_number = ref('');
const phone_code_country = ref('');
const gender =ref('');
const handedness =ref('');
const selectedBudget =ref('');
const graduation =ref('');
const height_ft = ref('');
const height_in = ref('');
const height_cm = ref('');
const gpa = ref('');
const utr = ref('')

const countries = ref([]);  // Reactive array to hold country data
const country_codes = ref([]);  // Reactive array to hold phone country codes
const handednesses = ref([])
const genders = ref([])
const budgets = ref([])
const height_in_cm = ref(false)
const nationalities = ref([])

const props = defineProps({
    isVisible: Boolean,
    parentSlug: String,
});


// Define emits to handle custom events like close
const emit = defineEmits(['close','dataUpdate']);

onMounted(async () => {
  loadCountryCodes();
  loadCountries();
  loadNationalities();
  loadGenders();
  loadBudgets();
  loadHandness();
  console.log("Slug")
  console.log(props.slug)
    
});



const clearForm = () => {
    first_name.value= ''
    last_name.value= ''
    email.value= ''
    nationality.value =''
    city.value= ''
    state_province.value= ''
    postal_code.value= ''
    country.value= ''
    phone_number.value= ''
    phone_code_country.value= ''
    gender.value =''
    handedness.value =''
    selectedBudget.value =''
    graduation.value =''
    height_ft.value= ''
    height_in.value= ''
    height_cm.value= ''
    gpa.value= ''
    utr.value = ''
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

const loadBudgets = async () => {
  try {
    budgets.value = await loadBudgetList();
  } catch (err) {
    console.error('Error loading budgets:', err);
  }
};

const loadHandness = async () => {
  try {
    handednesses.value = await loadHandnessList();
  } catch (err) {
    console.error('Error loading handess:', err);
  }
};

const loadCountryCodes = async () => {
  try {
    country_codes.value = await loadCountryList();
  } catch (err) {
    console.error('Error loading country codes:', err);
  }
};

const playerAdd = async() =>{
  try {
     const request_body ={
        user_slug:props.parentSlug,
        first_name:first_name.value,
        last_name:last_name.value,
        email:email.value,
        country: country.value,
        phone_code_country: phone_code_country.value,
        phone_number: phone_number.value,
        gender: gender.value,
        handedness:handedness.value,
        height_in_cm:height_in_cm.value,
        height_cm: height_cm.value,
        height_ft: height_ft.value,
        height_in: height_in.value,
        budget:selectedBudget.value,
        utr: utr.value,
        gpa: gpa.value,
        graduation_month_year: graduation.value,
        nationality: nationality.value
     }

     const response = await $publicService.add_parent_child(request_body); 
        if (response.status == '200') {
            // Trigger success notification
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            // clearForm();
            // Emit close event to parent to close the modal
            emit('dataUpdate');
            emit('close');
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
        }
  } catch (err) {
    console.error('Error loading country codes:', err);
  }
}
</script>