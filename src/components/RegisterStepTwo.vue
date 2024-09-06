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
        <label for="role" class="block mb-2 text-sm font-normal text-gray-900 mt-3">I am</label>
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
            <img class="mt-1" src="@/assets/images/parent.png">
            <label for="parent" class="text-sm text-black  mb-2">Parent</label>
          </div>
        </div>

        <!-- Radio option for Business role -->
        <div class="radio relative" @click="role = 'business'">
          <input class="radio-input text-black absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="business"
            type="radio" value="business" v-model="role" name="role">
          <div
            :class="['radio-tile', 'rounded-md', 'flex', 'flex-col', 'items-center', 'justify-center', 'border', 'h-full', 'transition-all', 'duration-300', 'ease-in', role === 'business' ? 'border-blue-500 bg-blue-50' : 'border-gray-300']">
            <img class="mt-1" src="@/assets/images/bussiness.png">
            <label for="business" class="text-sm text-black  mb-2">Business</label>
          </div>
        </div>

      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">

        <div v-if="roleFields.includes('nationality')">
          <label for="nationality"
            class="block  text-sm font-normal text-gray-900 dark:text-gray mb-[20px]">Nationality</label>
          <NationalityDropdown :nationalities="nationalities" v-model="nationality" id="nationality"
            label="Nationality" />
        </div>


        <div class="space-y-4" v-if="roleFields.includes('country')">
          <label for="country"
            class="font-normal text-black block text-sm text-gray-900 dark:text-gray mb-[20px]">Country
            *</label>
          <CountryDropdown :countries="countries" v-model="country" id="country" class="mt-0" label="Country *" />
        </div>

        <div class="space-y-4" v-if="roleFields.includes('phone_code_country')">
          <label for="phone_code_country" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">Mobile
            No</label>
          <div class="grid grid-cols-5 gap-3 items-center -mt-[9px]">
            <CountryCodeDropdown :country_codes="country_codes" v-model="phone_code_country" name="phone_code"
              data-validation-key="phone_code" :disabled="action === 'view'" class="col-span-2 h-12" />
            <input type="text" id="phone_number" v-model="phone_number"
              class=" mt-[4px] h-12 col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-gray light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="Number" required />
          </div>
        </div>

        <div class="space-y-4" v-if="roleFields.includes('gender')">
          <label for="gender" class="font-normal block mb-3 text-sm text-gray-900 dark:text-gray">Gender *</label>
          <GenderDropDown :genders="genders" v-model="gender" id="gender" label="Gender *" />
        </div>

        <div class="space-y-4" v-if="roleFields.includes('handedness')">
          <label for="handedness" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Handedness
            *</label>
          <HandednessDropdown :handedness="handednesses" v-model="handedness" id="handedness" label="Handedness *" />
        </div>

        <!-- Height Selection with Feet/Inches and Centimeters Toggle -->
        <div v-if="roleFields.includes('height')" class="space-y-4 ">

          <div class="flex">
            <!-- Toggle between Feet/Inches and Centimeters -->
            <div class="flex-1">
              <label for="height"
                class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray mr-[20px]">Height</label>
            </div>

            <div class="flex-1">
              <div class="flex text-last">
                <div class="flex text-black items-center">
                  <input type="radio" id="height_in_cm" v-model="height_in_cm" :value="true" />
                  <label for="height_in_cm" class="ml-2">Centimeters</label>
                </div>
                <div class="flex text-black items-center ml-3">
                  <input type="radio" id="height_ft_in" v-model="height_in_cm" :value="false" />
                  <label for="height_ft_in" class="ml-2">Feet/Inches</label>
                </div>
              </div>
            </div>
          </div>
          <!-- Height in Centimeters -->
          <div v-if="height_in_cm" class="-mt-[8px]">
            <input type="number" id="height_cm" v-model="height_cm"
              class="bg-gray-50 border h-12 -mt-[8px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Height in cm" />
          </div>
          <!-- Height in Feet/Inches -->
          <div v-else class="grid grid-cols-10 gap-3 items-center -mt-[8px]">
            <input type="number" id="height_ft" v-model="height_ft"
              class="col-span-5 bg-gray-50 border -mt-[8px] h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ft" />
            <input type="number" id="height_in" v-model="height_in"
              class="col-span-5 bg-gray-50 border -mt-[8px] h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="In" />
          </div>
        </div>

        <div class="grid grid-cols-10 gap-3 items-center">
          <div class="col-span-5" v-if="roleFields.includes('utr')">
            <label for="utr" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">UTR</label>
            <input type="text" id="utr" v-model="utr"
              class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="UTR" required />
          </div>
          <div class="col-span-5" v-if="roleFields.includes('gpa')">
            <label for="gpa" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">GPA</label>
            <input type="text" id="gpa" v-model="gpa"
              class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="GPA" required />
          </div>
        </div>

        <div v-if="roleFields.includes('graduation')">
          <label for="graduation" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">Graduation
            Month/Year</label>
          <input type="month" v-model="graduation"
            class="bg-gray-50 h-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-primary light:focus:ring-blue-500 light:focus:border-blue-500"
            placeholder="Select Month/Year" />
        </div>

        <div class="space-y-4" v-if="roleFields.includes('budget')">
          <label for="budget" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Budget</label>
          <BudgetDropdown :player_budgets="budgets" v-model="selectedBudget" id="budgets" label="Budgets *" />
        </div>


        <!-- Fields for Parent Role -->
        <div class="space-y-4" v-if="roleFields.includes('player_first_name')">
          <label for="player_first_name" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Player
            First Name</label>
          <input type="text" id="player_first_name" v-model="player_first_name"
            class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="First Name" required />
        </div>

        <div class="space-y-4" v-if="roleFields.includes('player_last_name')">
          <label for="player_last_name" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Player Last
            Name</label>
          <input type="text" id="player_last_name" v-model="player_last_name"
            class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Last Name" required />
        </div>

        <div class="space-y-4" v-if="roleFields.includes('email')">
          <label for="email" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Email</label>
          <input type="email" id="email" v-model="email"
            class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email" required />
        </div>

        <div class="space-y-4" v-if="roleFields.includes('player_country')">
          <label for="player_country"
            class="font-normal text-black block mb-2 text-sm text-gray-900 dark:text-gray">Player Country</label>
          <CountryDropdown :countries="countries" v-model="player_country" id="player_country" label="Player Country" />
        </div>

        <div class="space-y-4" v-if="roleFields.includes('player_phone_code_country')">
          <label for="player_phone_code_country"
            class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">Player Mobile No</label>
          <div class="grid grid-cols-5 gap-3 items-center">
            <CountryCodeDropdown :country_codes="country_codes" v-model="player_phone_code_country"
              name="player_phone_code" data-validation-key="player_phone_code" :disabled="action === 'view'"
              class="col-span-2" />
            <input type="text" id="player_phone_number" v-model="player_phone_number"
              class="col-span-3 bg-gray-50 border mt-[4px] h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-gray light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="Player Number" required />
          </div>
        </div>

        <div class="space-y-4" v-if="roleFields.includes('player_gender')">
          <label for="player_gender" class="font-normal block mb-3 text-sm text-gray-900 dark:text-gray">Player
            Gender</label>
          <GenderDropDown :genders="genders" v-model="player_gender" id="player_gender" label="Player Gender" />
        </div>

        <div class="space-y-4" v-if="roleFields.includes('player_handedness')">
          <label for="player_handedness" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Player
            Handedness</label>
          <HandednessDropdown :handedness="handednesses" v-model="player_handedness" id="player_handedness"
            label="Player Handedness" />
        </div>

        <div v-if="roleFields.includes('player_height_ft')" class="grid grid-cols-10 gap-3 items-center">
          <label  class="col-span-10 font-normal block  text-sm text-gray-900 dark:text-gray">Player
            Height</label>
          <input type="text" id="player_height_ft" v-model="player_height_ft"
            class="col-span-5 bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            placeholder="Ft" required />
          <input type="text" id="player_height_in" v-model="player_height_in"
            class="col-span-5 bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            placeholder="In" required />
        </div>

        <div v-if="roleFields.includes('player_budget')">
          <label for="player_budget" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Player
            Budget</label>
          <BudgetDropdown :player_budgets="budgets" v-model="player_budget" id="player_budget" label="Player Budget" />
        </div>

        <div v-if="roleFields.includes('player_utr')">
          <label for="player_utr" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">Player UTR</label>
          <input type="text" id="player_utr" v-model="player_utr"
            class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            placeholder="Player UTR" required />
        </div>

        <div v-if="roleFields.includes('player_gpa')">
          <label for="player_gpa" class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">Player GPA</label>
          <input type="text" id="player_gpa" v-model="player_gpa"
            class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            placeholder="Player GPA" required />
        </div>

        <div v-if="roleFields.includes('player_graduation_month_year')">
          <label for="player_graduation_month_year"
            class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray">Player Graduation Month/Year</label>
          <input type="month" v-model="player_graduation_month_year"
            class="bg-gray-50 h-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-primary light:focus:ring-blue-500 light:focus:border-blue-500"
            placeholder="Player Graduation Month/Year" />
        </div>

        <div class="space-y-4" v-if="roleFields.includes('player_nationality')">
          <label for="player_nationality" class="font-normal block mb-2 text-sm text-gray-900 dark:text-gray">Player
            Nationality</label>
          <NationalityDropdown :nationalities="nationalities" v-model="player_nationality" id="player_nationality"
            label="Player Nationality" />
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
            I agree to the 
            <NuxtLink to="/terms" class="text-blue-600 light:text-blue-500 hover:underline">Terms of Service</NuxtLink>
            and 
            <NuxtLink to="/Privacy" class="text-blue-600 light:text-blue-500 hover:underline">Privacy Policy </NuxtLink>.
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
const notification_type = ref('');

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

// Player-specific fields
const player_first_name = ref('');
const player_last_name = ref('');
const email = ref('');
const player_country = ref('');
const player_phone_code_country = ref('');
const player_phone_number = ref('');
const player_gender = ref('');
const player_handedness = ref('');
const player_height_ft = ref('');
const player_height_in = ref('');
const player_budget = ref('');
const player_utr = ref('');
const player_gpa = ref('');
const player_graduation_month_year = ref('');
const player_nationality = ref('');


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
  height_in_cm.value = !height_in_cm.value;
};



const handleSubmitStep2 = async () => {
  console.log('handleSubmitStep2 called');
  try {
    error.value = '';
    errors.value = [];
    notification_type.value = '';
    notificationMessage.value = '';
    showNotification.value = false; // Reset the notification state
    console.log('Preparing data...');

    // Trigger validation
    if (!validateForm()) {
      console.log('validation errors exist');
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
      phone_code_country: phone_code_country.value,
      phone_number: phone_number.value
    };

    console.log('Role:', role.value);
    console.log('Data:', data);

    if (role.value === 'player') {
      endpoint = `/auth/player-register`;
      Object.assign(data, {
        height_ft: height_ft.value,
        height_in: height_in.value,
        nationality: nationality.value,
        height_in_cm: height_in_cm.value,
        height_cm: height_cm.value,
        handedness: handedness.value,
        player_budget: selectedBudget.value,
        utr: utr.value,
        gpa: gpa.value,
        graduation_month_year: graduation.value,
        gender: gender.value
      });
    } else if (role.value === 'parent') {
      endpoint = `/auth/parent-register`;
      Object.assign(data, {
        player_first_name: player_first_name.value,
        player_last_name: player_last_name.value,
        email: email.value,
        player_country: player_country.value,
        player_phone_code_country: player_phone_code_country.value,
        player_phone_number: player_phone_number.value,
        player_gender: player_gender.value,
        player_handedness: player_handedness.value,
        player_height_ft: player_height_ft.value,
        player_height_in: player_height_in.value,
        player_height_in_cm: height_in_cm.value,
        player_height_cm: height_cm.value,
        player_budget: player_budget.value,
        player_utr: player_utr.value,
        player_gpa: player_gpa.value,
        player_graduation_month_year: player_graduation_month_year.value,
        player_nationality: player_nationality.value
      });
    } else if (role.value === 'coach') {
      endpoint = `/auth/${role.value}-register`;
    } else if (role.value === 'business') {
      endpoint = `/auth/${role.value}-manager-register`;
    }


    console.log('Endpoint:', endpoint);
    const response = await $authService.registerStepTwo(endpoint, data);

    if (response.status === 200) {
      notification_type.value = 'success';
      notificationMessage.value = response.display_message || 'Registration successful!';
      showNotification.value = true;
      router.push('/dashboard');
    } else {
      error.value = response.data.message;
      errors.value.push(response.message);
      notification_type.value = 'failure';
      notificationMessage.value = response.display_message || 'Registration failed. Please try again.';
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

    // Handle the error notification
    notification_type.value = 'failure';
    notificationMessage.value = 'An error occurred. Please try again later.';
    showNotification.value = true;
  }
};


const validateForm = () => {
  errors.value = []; // Clear previous errors

  // Basic Validation: Common for all roles
  if (!role.value) {
    errors.value.push('Role selection is required.');
  }
  if (!country.value) {
    errors.value.push('Country selection is required.');
  }

  if (!phone_code_country.value) {
    errors.value.push('Mobile code is required.');
  }
  if (!phone_number.value) {
    errors.value.push('Mobile number is required.');
  }


  // Additional Validation: Role-specific fields
  if (role.value === 'player') {
    if (!nationality.value) {
      errors.value.push('Nationality selection is required.');
    }
    if (!height_ft.value && !height_in_cm.value) {
      errors.value.push('Height selection is required.');
    }
    if (!handedness.value) {
      errors.value.push('Handedness selection is required.');
    }
    if (!selectedBudget.value) {
      errors.value.push('Player budget is required.');
    }
    if (!utr.value) {
      errors.value.push('UTR is required.');
    }
    if (!gpa.value) {
      errors.value.push('GPA is required.');
    }
    if (!graduation.value) {
      errors.value.push('Graduation month/year is required.');
    }
    if (!gender.value) {
      errors.value.push('Gender selection is required.');
    }
  }

  if (role.value === 'parent') {
    if (!player_first_name.value) {
      errors.value.push('Player first name is required.');
    }
    if (!player_last_name.value) {
      errors.value.push('Player last name is required.');
    }
    if (!email.value) {
      errors.value.push('Email is required.');
    }
    if (!player_country.value) {
      errors.value.push('Player country selection is required.');
    }
    if (!player_phone_code_country.value) {
      errors.value.push('Player mobile code is required.');
    }
    if (!player_phone_number.value) {
      errors.value.push('Player mobile number is required.');
    }
    if (!player_gender.value) {
      errors.value.push('Player gender selection is required.');
    }
    if (!player_handedness.value) {
      errors.value.push('Player handedness selection is required.');
    }
    if (!player_height_ft.value && !height_in_cm.value) {
      errors.value.push('Player height selection is required.');
    }
    if (!player_budget.value) {
      errors.value.push('Player budget is required.');
    }
    if (!player_utr.value) {
      errors.value.push('Player UTR is required.');
    }
    if (!player_gpa.value) {
      errors.value.push('Player GPA is required.');
    }
    if (!player_graduation_month_year.value) {
      errors.value.push('Player graduation month/year is required.');
    }
    if (!player_nationality.value) {
      errors.value.push('Player nationality is required.');
    }
  }

  if (role.value === 'coach' || role.value === 'business') {
    // Add any specific validation for coach or business if needed
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


const roleFields = computed(() => {
  switch (role.value) {
    case 'player':
      return [
        'country',
        'phone_code_country',
        'phone_number',
        'gender',
        'handedness',
        'height_ft',
        'height_in',
        'utr',
        'gpa',
        'graduation',
        'nationality',
        'budget',
        'height'
      ];

    case 'parent':
      return [
        'country',
        'phone_code_country',
        'phone_number',
        'player_first_name',
        'player_last_name',
        'email',
        'player_country',
        'player_phone_code_country',
        'player_phone_number',
        'player_gender',
        'player_handedness',
        'player_height_ft',
        'player_height_in',
        'player_budget',
        'player_utr',
        'player_gpa',
        'player_graduation_month_year',
        'player_nationality',
        'height'
      ];

    case 'coach':
    case 'business':
      return [
        'country',
        'phone_code_country',
        'phone_number'
      ];

    default:
      return [];
  }
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
