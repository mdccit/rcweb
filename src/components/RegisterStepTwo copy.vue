<template>
  <div class="min-h-screen w-full bg-cover bg-no-repeat flex flex-col sm:justify-center items-center py-12 px-4"
    style="background-image: url(https://qa1.recruited.qualitapps.com/static/bg-generic.svg);">
    <div class="w-full mt-6 mx-4 p-12 bg-white rounded-lg overflow-hidden sm:max-w-4xl">
      <div class="flex items-center space-x-4">
        <div class="flex self-center items-center">
          <a href="/register-step-1" class="bg-black/10 p-2 hover:bg-black/15 active:bg-black/20 rounded-full">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
            <span class="sr-only">Go back</span>
          </a>
        </div>
        <div class="self-center">
          <h1 class="text-2xl font-bold text-primary">Let’s get started!</h1>
        </div>
      </div>
      <div class="w-full"></div>
      <form @submit.prevent="handleSubmitStep2" class="pt-4">
        <fieldset>
          <div>
            <label for="role" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">I am</label>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-4">
            <div class="radio">
              <input class="radio-input absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="player" type="radio" value="player" v-model="role" name="default-radio">
              <div class="radio-tile rounded-md flex flex-col items-center justify-center border border-gray-300 h-full transition-all duration-300 ease-in">
                <div class="tile-icon"></div>
                <label for="player" class="text-sm mb-2">Player</label>
              </div>
            </div>
            <div class="radio">
              <input class="radio-input absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="coach" type="radio" value="coach" v-model="role" name="default-radio">
              <div class="radio-tile rounded-md flex flex-col items-center justify-center border border-gray-300 h-full transition-all duration-300 ease-in">
                <img class="mt-1" src="@/assets/images/coach_icon.png">
                <label for="coach" class="text-sm mb-2">Coach</label>
              </div>
            </div>
            <div class="radio">
              <input class="radio-input absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="parent" type="radio" value="parent" v-model="role" name="default-radio">
              <div class="radio-tile rounded-md flex flex-col items-center justify-center border border-gray-300 h-full transition-all duration-300 ease-in">
                <img class="mt-1" src="@/assets/images/coach_icon.png">
                <label for="parent" class="text-sm mb-2">Parent</label>
              </div>
            </div>
            <div class="radio">
              <input class="radio-input absolute h-24 m-0 cursor-pointer z-2 opacity-0" id="business" type="radio" value="business" v-model="role" name="default-radio">
              <div class="radio-tile rounded-md flex flex-col items-center justify-center border border-gray-300 h-full transition-all duration-300 ease-in">
                <img class="mt-1" src="@/assets/images/coach_icon.png">
                <label for="business" class="text-sm mb-2">Business</label>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
            <div class="space-y-4">
              <div>
                <label for="country" class="font-normal block mb-2 text-sm text-gray-900 dark:text-white">Country *</label>
                <select v-model="country" class="bg-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50" id="country" required>
                  <option value="country1">Country 1</option>
                  <option value="country2">Country 2</option>
                  <option value="country3">Country 3</option>
                </select>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <label for="nationality" class="font-normal block mb-2 text-sm text-gray-900 dark:text-white">Nationality *</label>
                <select v-model="nationality" class="bg-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50" id="nationality" required>
                  <option value="nationality1">Nationality 1</option>
                  <option value="nationality2">Nationality 2</option>
                  <option value="nationality3">Nationality 3</option>
                </select>
              </div>
            </div>

            <div>
              <label for="mobileCode" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Mobile No</label>
              <div class="grid grid-cols-10 gap-3 items-center">
                <input type="text" id="mobileCode" v-model="mobileCode" class="col-span-2 bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Code" required />
                <input type="text" id="mobileNumber" v-model="mobileNumber" class="col-span-8 bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number" required />
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <label for="gender" class="font-normal block mb-2 text-sm text-gray-900 dark:text-white">Gender *</label>
                <select v-model="gender" class="block bg-gray-50 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50" id="gender" required>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div>
              <div class="grid grid-cols-10 items-center mb-2">
                <label for="heightFt" class="block col-span-5 text-sm font-normal text-gray-900 dark:text-white">Height</label>
                <label for="heightFt" class="block col-span-5 text-sm font-normal dark:text-white text-right text-blue-600">Aligned to End</label>
              </div>
              <div class="grid grid-cols-10 gap-3 items-center">
                <input type="text" id="heightFt" v-model="heightFt" class="col-span-5 bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ft" required />
                <input type="text" id="heightIn" v-model="heightIn" class="col-span-5 bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="In" required />
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <label for="handedness" class="font-normal block mb-2 text-sm text-gray-900 dark:text-white">Handedness *</label>
                <select v-model="handedness" class="block bg-gray-50 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50" id="handedness" required>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <label for="budget" class="font-normal block mb-2 text-sm text-gray-900 dark:text-white">Budget</label>
                <input type="text" id="budget" v-model="budget" class="border bg-gray-50 h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Budget" required />
              </div>
            </div>

            <div>
              <div class="grid grid-cols-10 gap-3 items-center">
                <div class="col-span-5">
                  <label for="utr" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">UTR</label>
                  <input type="text" id="utr" v-model="utr" class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="UTR" required />
                </div>
                <div class="col-span-5">
                  <label for="gpa" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">GPA</label>
                  <input type="text" id="gpa" v-model="gpa" class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="GPA" required />
                </div>
              </div>
            </div>

            <div>
              <label for="graduation" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Graduation Month/Year</label>
              <div class="relative max-w-sm">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input datepicker id="graduation" v-model="graduation" type="text" class="bg-gray-50 h-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
              </div>
            </div>
          </div>

          <div class="space-y-4 mt-5">
            <div class="flex items-center">
              <input id="notEnrolled" type="checkbox" v-model="notEnrolled" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="notEnrolled" class="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">
                I certify I am currently not enrolled in a U.S. school or have already informed the school of my choice to transfer, registering in the Transfer Portal.
              </label>
            </div>
          </div>

          <div class="space-y-4 mt-5">
            <p class="text-sm text-warning-600">
              <svg class="mb-2 text-orange-400 w-4 h-4 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
              If you are currently enrolled, you need inform your school that you are looking to be recruited. If you have questions, email hello@recruited.pro and we will help!
            </p>
          </div>

          <div class="space-y-4 mt-5">
            <div class="flex items-center">
              <input id="termsAccepted" type="checkbox" v-model="termsAccepted" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="termsAccepted" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.
              </label>
            </div>
          </div>

          <div class="flex items-center justify-end mt-6">
            <button type="submit" class="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Sign up now for free
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import authService from '~/services/authService';

const role = ref('');
const country = ref('');
const nationality = ref('');
const mobileCode = ref('');
const mobileNumber = ref('');
const gender = ref('');
const heightFt = ref('');
const heightIn = ref('');
const handedness = ref('');
const budget = ref('');
const utr = ref('');
const gpa = ref('');
const graduation = ref('');
const notEnrolled = ref(false);
const termsAccepted = ref(false);
const error = ref('');
const route = useRoute();
const router = useRouter();
const userId = route.params.userId;

const commonFields = [
  { id: 'country', label: 'Country', type: 'select', model: country, options: [{ value: 'country1', label: 'Country 1' }, { value: 'country2', label: 'Country 2' }, { value: 'country3', label: 'Country 3' }] },
  { id: 'nationality', label: 'Nationality', type: 'select', model: nationality, options: [{ value: 'nationality1', label: 'Nationality 1' }, { value: 'nationality2', label: 'Nationality 2' }, { value: 'nationality3', label: 'Nationality 3' }] },
  { id: 'mobileCode', label: 'Mobile Code', type: 'input', inputType: 'text', model: mobileCode, placeholder: 'Code' },
  { id: 'mobileNumber', label: 'Mobile Number', type: 'input', inputType: 'text', model: mobileNumber, placeholder: 'Number' },
  { id: 'gender', label: 'Gender', type: 'select', model: gender, options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] }
];

const playerFields = [
  { id: 'heightFt', label: 'Height (Ft)', type: 'input', inputType: 'text', model: heightFt, placeholder: 'Ft' },
  { id: 'heightIn', label: 'Height (In)', type: 'input', inputType: 'text', model: heightIn, placeholder: 'In' },
  { id: 'handedness', label: 'Handedness', type: 'select', model: handedness, options: [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }] },
  { id: 'budget', label: 'Budget', type: 'input', inputType: 'text', model: budget, placeholder: 'Budget' },
  { id: 'utr', label: 'UTR', type: 'input', inputType: 'text', model: utr, placeholder: 'UTR' },
  { id: 'gpa', label: 'GPA', type: 'input', inputType: 'text', model: gpa, placeholder: 'GPA' },
  { id: 'graduation', label: 'Graduation Month/Year', type: 'input', inputType: 'text', model: graduation, placeholder: 'Select date' }
];

const coachFields = [
  { id: 'mobileNumber', label: 'Mobile Number', type: 'input', inputType: 'text', model: mobileNumber, placeholder: 'Number' }
];

const parentFields = [
  { id: 'heightFt', label: 'Height (Ft)', type: 'input', inputType: 'text', model: heightFt, placeholder: 'Ft' },
  { id: 'heightIn', label: 'Height (In)', type: 'input', inputType: 'text', model: heightIn, placeholder: 'In' },
  { id: 'handedness', label: 'Handedness', type: 'select', model: handedness, options: [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }] },
  { id: 'budget', label: 'Budget', type: 'input', inputType: 'text', model: budget, placeholder: 'Budget' },
  { id: 'utr', label: 'UTR', type: 'input', inputType: 'text', model: utr, placeholder: 'UTR' },
  { id: 'gpa', label: 'GPA', type: 'input', inputType: 'text', model: gpa, placeholder: 'GPA' },
  { id: 'graduation', label: 'Graduation Month/Year', type: 'input', inputType: 'text', model: graduation, placeholder: 'Select date' }
];

const businessFields = [
  { id: 'mobileNumber', label: 'Mobile Number', type: 'input', inputType: 'text', model: mobileNumber, placeholder: 'Number' }
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



const handleSubmitStep2 = async () => {
  try {
    error.value = '';
    let endpoint;
    const data = {
      user_id: userId,
      role: role.value,
      country: country.value,
      nationality: nationality.value,
      mobile_code: mobileCode.value,
      mobile_number: mobileNumber.value,
      gender: gender.value
    };

    if (role.value === 'player' || role.value === 'parent') {
      endpoint = `auth/${role.value}-register`;
      Object.assign(data, {
        height_ft: heightFt.value,
        height_in: heightIn.value,
        handedness: handedness.value,
        budget: budget.value,
        utr: utr.value,
        gpa: gpa.value,
        graduation: graduation.value
      });
    } else if (role.value === 'coach' || role.value === 'business') {
      endpoint = `auth/${role.value}-register`;
    }

    const response = await authService.registerStep2(endpoint, data);

    if (response.status === 200) {
      router.push('/dashboard');
    } else {
      error.value = response.data.message;
    }
  } catch (err) {
    error.value = err.response?.data?.message || err.message;
  }
};
</script>

<style scoped>
.radio-input {
  display: none;
}

.radio-tile {
  text-align: center;
  padding: 1rem;
}

.radio-input:checked + .radio-tile {
  border-color: #2563EB;
  background-color: #EFF6FF;
}
</style>
