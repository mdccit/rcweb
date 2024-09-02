<template>
  <div class="min-h-screen w-full bg-cover bg-no-repeat flex flex-col sm:justify-center items-center py-12 px-4"
    style="background-image: url(https://qa1.recruited.qualitapps.com/static/bg-generic.svg);">
    <div class="w-full mt-6 mx-4 p-12 bg-white rounded-lg overflow-hidden sm:max-w-4xl">
      <div class="flex items-center space-x-4">
        <div class="flex self-center items-center">
          <NuxtLink to="/register" class="bg-black/10 p-2 hover:bg-black/15 active:bg-black/20 rounded-full">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
            <span class="sr-only">Go back</span>
          </NuxtLink>
        </div>
        <div class="self-center">
          <h1 class="text-2xl font-bold text-primary">{{ $t('register.title') }}</h1>
        </div>
      </div>
      <div class="w-full"></div>
      <div>
        <label for="role" class="block mb-2 text-sm font-normal text-gray-900 dark:text-primary">I am</label>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-4">

        <!-- Radio option for Player role -->
        <div class="radio relative" @click="role = 'player'">
          <input class="radio-input absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="player" type="radio"
            value="player" v-model="role" name="role">
          <div
            :class="['radio-tile', 'rounded-md', 'flex', 'flex-col', 'items-center', 'justify-center', 'border', 'h-full', 'transition-all', 'duration-300', 'ease-in', role === 'player' ? 'border-blue-500 bg-blue-50' : 'border-gray-300']">
            <div class="tile-icon"></div>
            <label for="player" class="text-sm text-black mb-2">Player</label>
          </div>
        </div>

        <!-- Radio option for Coach role -->
        <div class="radio relative" @click="role = 'coach'">
          <input class="radio-input  absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="coach" type="radio"
            value="coach" v-model="role" name="role">
          <div
            :class="['radio-tile', 'rounded-md', 'flex', 'flex-col', 'items-center', 'justify-center', 'border', 'h-full', 'transition-all', 'duration-300', 'ease-in', role === 'coach' ? 'border-blue-500 bg-blue-50' : 'border-gray-300']">
            <img class="mt-1" src="@/assets/images/coach_icon.png">
            <label for="coach" class="text-sm text-black mb-2">Coach</label>
          </div>
        </div>

        <!-- Radio option for Parent role -->
        <div class="radio relative" @click="role = 'parent'">
          <input class="radio-input absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="parent" type="radio"
            value="parent" v-model="role" name="role">
          <div
            :class="['radio-tile', 'rounded-md', 'flex', 'flex-col', 'items-center', 'justify-center', 'border', 'h-full', 'transition-all', 'duration-300', 'ease-in', role === 'parent' ? 'border-blue-500 bg-blue-50' : 'border-gray-300']">
            <img class="mt-1" src="@/assets/images/coach_icon.png">
            <label for="parent" class="text-sm text-black  mb-2">Parent</label>
          </div>
        </div>

        <!-- Radio option for Business role -->
        <div class="radio relative" @click="role = 'business'">
          <input class="radio-input text-black absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="business"
            type="radio" value="business" v-model="role" name="role">
          <div
            :class="['radio-tile', 'rounded-md', 'flex', 'flex-col', 'items-center', 'justify-center', 'border', 'h-full', 'transition-all', 'duration-300', 'ease-in', role === 'business' ? 'border-blue-500 bg-blue-50' : 'border-gray-300']">
            <img class="mt-1" src="@/assets/images/coach_icon.png">
            <label for="business" class="text-sm text-black  mb-2">Business</label>
          </div>
        </div>

      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
        <div class="space-y-4">
          <div>
            <label for="country" class="font-normal text-black block mb-2 text-sm text-gray-900 dark:text-gray">Country
              *</label>
            <CountryDropdown :countries="countries" v-model="country" id="country" label="Country *" />
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <label for="nationality" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Nationality
              *</label>
            <NationalityDropdown :nationalities="nationalities" v-model="nationality" id="nationality"
              label="Nationality *" />
          </div>
        </div>

        <div>
          <label for="phone_code_country" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">Mobile
            No</label>
          <div class="grid grid-cols-5 gap-3 items-center">
            <!-- Set Country Code dropdown to span 2/5 of the grid -->
            <CountryCodeDropdown :country_codes="country_codes" v-model="phone_code_country" name="phone_code"
              data-validation-key="phone_code" :disabled="action === 'view'" class="col-span-2" />

            <!-- Set Phone Number input to span 3/5 of the grid -->
            <input type="text" id="phone_number" v-model="phone_number"
              class="col-span-3 bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-gray light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="Number" required />
          </div>
        </div>


        <div class="space-y-4">
          <div>
            <label for="gender" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Gender
              *</label>
            <GenderDropDown :genders="genders" v-model="gender" id="gender" label="Gender *" />
          </div>
        </div>

        <div>
          <!-- Height Label with Toggle -->
          <!-- Height Label with Toggle -->
          <div class="grid grid-cols-10 items-center mb-2">
            <label for="height_ft"
              class="block col-span-5 text-sm font-normal text-gray-900 dark:text-gray">Height</label>
            <div class="col-span-5 text-right">
              <!-- Toggle Switch for Height Mode using Flowbite -->
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="height_in_cm" class="sr-only peer" />
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {{ height_in_cm ? 'Centimeters' : 'Feet & Inches' }}
                </span>
              </label>
            </div>
          </div>

          <!-- Height Input Fields for Feet & Inches -->
          <div v-if="!height_in_cm" class="grid grid-cols-10 gap-3 items-center">
            <input type="text" id="height_ft" v-model="height_ft"
              class="col-span-5 bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="Ft" required />
            <input type="text" id="height_in" v-model="height_in"
              class="col-span-5 bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="In" required />
          </div>

          <!-- Height Input Field for Centimeters -->
          <div v-if="height_in_cm" class="grid grid-cols-10 gap-3 items-center">
            <input type="text" id="heightCm" v-model="height_cm"
              class="col-span-10 bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="Cm" required />
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <label for="handedness" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Handedness
              *</label>
            <HandednessDropdown :handedness="handednesses" v-model="handedness" id="handedness" label="Handness *" />
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <label for="budget" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Budget</label>
            <BudgetDropdown :player_budgets="budgets" v-model="selectedBudget" id="budgets" label="Budgets *" />
          </div>
        </div>

        <div>
          <div class="grid grid-cols-10 gap-3 items-center">
            <div class="col-span-5">
              <label for="utr" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">UTR</label>
              <input type="text" id="utr" v-model="utr"
                class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                placeholder="UTR" required />
            </div>
            <div class="col-span-5">
              <label for="gpa" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">GPA</label>
              <input type="text" id="gpa" v-model="gpa"
                class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                placeholder="GPA" required />
            </div>
          </div>
        </div>

        <div>
          <label for="graduation" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">Graduation
            Month/Year</label>
          <div class="relative max-w-sm">
            <!-- <div class="absolute inset-y-0 left-0 flex items-center ps-3.5 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div> -->

            <client-only>
              <input type="month" v-model="graduation"
                class="bg-gray-50 h-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select Month/Year" />
            </client-only>
          </div>
          <!-- <input datepicker id="graduation" v-model="graduation" type="text"
            class="bg-gray-50 h-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            placeholder="Select date"> -->
        </div>
      </div>


      <div class="space-y-4 mt-5">
        <div class="flex items-center">
          <input id="notEnrolled" type="checkbox" v-model="notEnrolled"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 light:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600">
          <label for="notEnrolled" class="ms-2 text-sm font-normal text-gray-900 light:text-gray-600">
            I certify I am currently not enrolled in a U.S. school or have already informed the school of my choice
            to transfer, registering in the Transfer Portal.
          </label>
        </div>
      </div>

      <div class="space-y-4 mt-5">
        <p class="text-sm text-black text-warning-600">
          <svg class="mb-2 text-orange-400 w-4 h-4 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
            <path d="M12 9h.01"></path>
            <path d="M11 12h1v4h1"></path>
          </svg>
          If you are currently enrolled, you need inform your school that you are looking to be recruited. If you
          have questions, email hello@recruited.pro and we will help!
        </p>
      </div>

      <div class="space-y-4 mt-5">
        <div class="flex items-center">
          <input id="termsAccepted" type="checkbox" v-model="termsAccepted"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600">
          <label for="termsAccepted" class="ms-2 text-sm font-medium text-gray-900 light:text-gray-300">
            I agree with the <a href="#" class="text-blue-600 light:text-blue-500 hover:underline">terms and
              conditions</a>.
          </label>
        </div>
      </div>

      <div class="flex items-center justify-end mt-6">
        <button @click="handleSubmitStep2"
          class="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800">
          Sign up now for free
        </button>
      </div>


      <!-- Display error messages -->
      <div v-if="errors.length" class="error-messages">
        <p class="error-title">Validation Errors:</p>
        <ul class="error-list">
          <li v-for="(error, index) in splitErrors" :key="index" class="error-item">
            {{ error }}
          </li>
        </ul>
      </div>

    </div>


    <!-- Notification Component -->
    <Notification v-if="showNotification" :message="notificationMessage" :type="notification_type" :duration="3000" />
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { loadCountryList, loadNationalityList, loadBudgetList, loadGenderList, loadHandnessList } from '~/services/commonService';
import CountryCodeDropdown from '~/components/common/select/CountryCodeDropdown.vue';
import CountryDropdown from '~/components/common/select/CountryDropdown.vue';
import NationalityDropdown from '~/components/common/select/NationalityDropdown.vue';
import GenderDropDown from '~/components/common/select/GenderDropDown.vue';
import BudgetDropdown from '~/components/common/select/BudgetDropdown.vue';
import HandednessDropdown from '~/components/common/select/HandednessDropdown.vue';
import Notification from '~/components/common/Notification.vue';
import { useNuxtApp } from '#app';

// Access authService from the context
const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;


const token = ref('');
const role = ref('');
const country = ref('');
const nationality = ref('');
const phone_code_country = ref('');
const phone_number = ref('');
const gender = ref('');

const height_in_cm = ref(false);
const height_ft = ref('');
const height_in = ref('');
const height_cm = ref('');
const handedness = ref('');
const budget = ref('');
const selectedBudget = ref('');
const utr = ref('');
const gpa = ref('');
const graduation = ref('');
const notEnrolled = ref(false);
const termsAccepted = ref(false);
const error = ref('');
const route = useRoute();
const errors = ref([]);

const selectedCountry = ref(null);
const countries = ref([]);
const nationalities = ref([]);
const budgets = ref([]);
const country_codes = ref([]);
const genders = ref([]);
const handednesses = ref([]);
const router = useRouter();
const userId = route.params.userId;
const monthInput = ref(null);

const showNotification = ref(false);
const notificationMessage = ref('');

defineProps({
  token: {
    type: String,
    required: true
  }
});


const action = () => {
  // Define what the action should do
  console.log('Action performed');
};

// Computed property to split error messages by comma
const splitErrors = computed(() => errors.value.flatMap((error) => error.split(',')));

function showPicker() {
  if (monthInput.value) {
    monthInput.value.showPicker(); // This method is available in some browsers for date inputs
  }
}
const roles = [
  { value: 'player', label: 'Player', icon: '@/assets/images/player_icon.png' },
  { value: 'coach', label: 'Coach', icon: '@/assets/images/coach_icon.png' },
  { value: 'parent', label: 'Parent', icon: '@/assets/images/parent_icon.png' },
  { value: 'business', label: 'Business', icon: '@/assets/images/business_icon.png' }
];

const commonFields = [
  { id: 'country', label: 'Country', type: 'select', model: country, options: [{ value: 'country1', label: 'Country 1' }, { value: 'country2', label: 'Country 2' }, { value: 'country3', label: 'Country 3' }] },
  { id: 'nationality', label: 'Nationality', type: 'select', model: nationality, options: [{ value: 'nationality1', label: 'Nationality 1' }, { value: 'nationality2', label: 'Nationality 2' }, { value: 'nationality3', label: 'Nationality 3' }] },
  { id: 'phone_code_country', label: 'Mobile Code', type: 'input', inputType: 'text', model: phone_code_country, placeholder: 'Code' },
  { id: 'phone_number', label: 'Mobile Number', type: 'input', inputType: 'text', model: phone_number, placeholder: 'Number' },
  { id: 'gender', label: 'Gender', type: 'select', model: gender, options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] }
];

const playerFields = [
  { id: 'height_ft', label: 'Height (Ft)', type: 'input', inputType: 'text', model: height_ft, placeholder: 'Ft' },
  { id: 'height_in', label: 'Height (In)', type: 'input', inputType: 'text', model: height_in, placeholder: 'In' },
  { id: 'handedness', label: 'Handedness', type: 'select', model: handedness, options: [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }] },
  { id: 'budget', label: 'Budget', type: 'input', inputType: 'text', model: budget, placeholder: 'Budget' },
  { id: 'utr', label: 'UTR', type: 'input', inputType: 'text', model: utr, placeholder: 'UTR' },
  { id: 'gpa', label: 'GPA', type: 'input', inputType: 'text', model: gpa, placeholder: 'GPA' },
  { id: 'graduation', label: 'Graduation Month/Year', type: 'input', inputType: 'text', model: graduation, placeholder: 'Select date' }
];

const coachFields = [
  { id: 'phone_number', label: 'Mobile Number', type: 'input', inputType: 'text', model: phone_number, placeholder: 'Number' }
];

const parentFields = [
  { id: 'height_ft', label: 'Height (Ft)', type: 'input', inputType: 'text', model: height_ft, placeholder: 'Ft' },
  { id: 'height_in', label: 'Height (In)', type: 'input', inputType: 'text', model: height_in, placeholder: 'In' },
  { id: 'handedness', label: 'Handedness', type: 'select', model: handedness, options: [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }] },
  { id: 'budget', label: 'Budget', type: 'input', inputType: 'text', model: budget, placeholder: 'Budget' },
  { id: 'utr', label: 'UTR', type: 'input', inputType: 'text', model: utr, placeholder: 'UTR' },
  { id: 'gpa', label: 'GPA', type: 'input', inputType: 'text', model: gpa, placeholder: 'GPA' },
  { id: 'graduation', label: 'Graduation Month/Year', type: 'input', inputType: 'text', model: graduation, placeholder: 'Select date' }
];

const businessFields = [
  { id: 'phone_number', label: 'Mobile Number', type: 'input', inputType: 'text', model: phone_number, placeholder: 'Number' }
];

const roleFields = computed(() => {
  switch (role.value) {
    case 'player':
      return playerFields;
    case 'coach':
      return coachFields;
    case 'parent':
      return parentFields;
    case 'business':
      return businessFields;
    default:
      return [];
  }
});

onMounted(() => {
  loadCountryCodes();
  loadCountries();
  loadNationalities();
  loadGenders();
  loadBudgets();
  loadHandness();
});
const toggleHeightMode = () => {
  // Toggle the height mode between 'feet' and 'cm'
  height_in_cm.value  = !height_in_cm.value;
};
const handleSubmitStep2 = async () => {
  console.log('handleSubmitStep2 called');
  try {
    error.value = '';
    errors.value = [];
    console.log('Preparing data...');


    // Trigger validation
    if (!validateForm()) {
      return; // Exit if validation fails
    }
    // Continue only if there are no validation errors
    if (errors.value.length > 0) {
      return; // Exit the function if there are validation errors
    }

    let endpoint;
    const data = {
      role: role.value,
      country: country.value,
      nationality: nationality.value,
      phone_code_country: phone_code_country.value,
      phone_number: phone_number.value,
      gender: gender.value
    };

    console.log('Role:', role.value);
    console.log('Data:', data);

    if (role.value === 'player' || role.value === 'parent') {
      endpoint = `/auth/${role.value}-register`;
      Object.assign(data, {
        height_ft: height_ft.value,
        height_in: height_in.value,
        height_in_cm: height_in_cm.value,
        height_cm: height_cm.value,
        height_ft: height_ft.value,
        height_in: height_in.value,
        handedness: handedness.value,
        player_budget: selectedBudget.value,
        utr: utr.value,
        gpa: gpa.value,
        graduation_month_year: graduation.value
      });
    } else if (role.value === 'coach' || role.value === 'business') {
      endpoint = `/auth/${role.value}-register`;
    }

    console.log('Endpoint:', endpoint);
    const response = await $authService.registerStepTwo(endpoint, data);

    if (response.status === 200) {
      notificationMessage.value = response.display_message;
      showNotification.value = true;
      router.push('/dashboard');
    } else {
      error.value = response.data.message;
      errors.value.push(response.message);
      notificationMessage.value = response.display_message;
      showNotification.value = true;
      console.log('Registration failed:', response.data.message);
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


const validateForm = () => {
  errors.value = []; // Clear previous errors

  // Validation: Ensure required fields are filled
  if (!role.value) {
    errors.value.push('Role selection is required.');
  }
  if (!country.value) {
    errors.value.push('Country selection is required.');
  }
  if (!nationality.value) {
    errors.value.push('Nationality selection is required.');
  }
  if (!phone_code_country.value) {
    errors.value.push('Mobile code is required.');
  }
  if (!phone_number.value) {
    errors.value.push('Mobile number is required.');
  }
  if (!gender.value) {
    errors.value.push('Gender selection is required.');
  }

  // Return true if there are no errors, false otherwise
  return errors.value.length === 0;
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


// Watcher to debug the role selection
watch(role, (newRole) => {
  console.log('Selected role:', newRole);
});
</script>

<style scoped>
.radio-input {
  display: none;
}

.radio-tile {
  text-align: center;
  padding: 1rem;
}

.radio-input:checked+.radio-tile {
  border-color: #2563EB;
  background-color: #EFF6FF;
}

label input {
  @apply text-black;
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
