<template>
  <!-- Modal Backdrop -->
  <div tabindex="-1" aria-hidden="true"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
    <!-- Modal Content Wrapper -->
    <div class="relative w-full max-w-lg p-3 mx-auto overflow-auto z-index-400 mt-[50px]">
      <!-- Modal Box -->

      <form @submit.prevent="handleSubmit">
        <div class="relative bg-white rounded-lg shadow light:bg-gray-700">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray">Create New Transfer Player</h3>
            <button @click="handleClose"
              class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center light:hover:bg-gray-600 light:hover:text-white">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <!-- Modal Body -->
          <div class="p-6">
            <!-- Form Fields -->
            <div class="grid grid-cols-6 gap-2">
              <!-- First Name -->
              <div class="col-span-3">
                <label for="first_name" class="block text-sm font-normal text-gray-900 mb-1">First Name <span
                    class="text-red-500">*</span></label>
                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                  <input type="text" :required="true" v-model="firstName"
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    placeholder="Enter Name" required />
                </div>
                <InputError :error="errors.first_name ? errors.first_name.join(', ') : ''" />
              </div>

              <!-- Last Name -->
              <div class="col-span-3">
                <label for="last_name" class="block text-sm font-normal text-gray-900 mb-1">Last Name <span
                    class="text-red-500">*</span></label>
                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                  <input type="text" :required="true" v-model="lastName"
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    placeholder="Enter Name" required />
                </div>
                <InputError :error="errors.last_name ? errors.last_name.join(', ') : ''" />
              </div>

              <!-- School -->
              <div class="col-span-3">
                <label class="block text-sm font-normal text-gray-900 mb-1">School <span
                    class="text-red-500">*</span></label>
                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                  <input type="text" :required="true" v-model="school"
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    placeholder="Enter School" required />
                </div>
                <InputError :error="errors.school ? errors.school.join(', ') : ''" />
              </div>

              <div class="col-span-3">
                <label class="block text-sm font-normal text-gray-900 mb-1">Gender <span
                    class="text-red-500">*</span></label>
                <div class="flex  rounded-lg shadow-sm">
                  <GenderDropDown :required="true" :genders="genders" v-model="gender" id="player_gender"
                    label="Player Gender" />
                </div>
                <InputError :error="errors.gender ? errors.gender.join(', ') : ''" />
              </div>

              <!-- Email -->
              <div class="col-span-6">
                <label class="block text-sm font-normal text-gray-900 mb-1">Email <span
                    class="text-red-500">*</span></label>
                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                  <input type="email" :required="true" v-model="email"
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    placeholder="Enter Email" required />
                </div>
                <InputError :error="errors.email ? errors.email.join(', ') : ''" />
              </div>

              <!-- Year -->
              <div class="col-span-3">
                <label class="block text-sm font-normal text-gray-900 mb-1">Year <span
                    class="text-red-500">*</span></label>
                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                  <select :required="true" v-model="year"
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg">
                    <option selected>Choose a gender</option>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                  </select>
                </div>
                <InputError :error="errors.year ? errors.year.join(', ') : ''" />
              </div>

              <!-- Handed Fields -->
              <div class="col-span-3">
                <label class="block text-sm font-normal text-gray-900 mb-1">Handed <span
                    class="text-red-500">*</span></label>
                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                  <HandednessDropdown :required="true" :handedness="handednesses" v-model="handed"
                    id="player_handedness" label="Player Handedness" />
                </div>
                <InputError :error="errors.handedness ? errors.handedness.join(', ') : ''" />
              </div>

            </div>



            <div class="grid grid-cols-6 gap-4 mt-4">
             
              <div class="col-span-2">
                <label for="phone_code_country" class="block text-sm font-normal text-gray-900">Mobile No <span
                    class="text-red-500">*</span></label>
                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                  <CountryCodeDropdown :required="true" :country_codes="countryCodes" v-model="code" name="phone_code"
                    data-validation-key="phone_code" class="col-span-2 h-12" />
                </div>
                <InputError :error="errors.phone_code_country ? errors.phone_code_country.join(', ') : ''" />
              </div>
              
              <div class="col-span-4">
                <label class="block text-sm font-normal text-gray-900"><span
                    class="text-red-500">*</span></label>
                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                  <input type="text" :required="true" v-model="number"
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    placeholder="" required />
                </div>
                <InputError :error="errors.phone_number ? errors.phone_number.join(', ') : ''" />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-4 mt-4">
              <!-- UTR Fields -->
              <div class="col-span-2">
                <label class="block text-sm font-normal text-gray-900">Win <span class="text-red-500">*</span></label>
                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                  <input :required="true" v-model="win" type="number"
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    placeholder="UTR" required />
                </div>
                <InputError :error="errors.win ? errors.win.join(', ') : ''" />
              </div>
              <!-- UTR Fields -->
              <div class="col-span-2">
                <label class="block text-sm font-normal text-gray-900">Loss <span class="text-red-500">*</span></label>
                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                  <input :required="true" v-model="loss" type="number"
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    placeholder="UTR" required />
                </div>
                <InputError :error="errors.loss ? errors.loss.join(', ') : ''" />
              </div>

              <div class="col-span-2">
                <label class="block text-sm font-normal text-gray-900">UTR <span class="text-red-500">*</span></label>
                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                  <input :required="true" v-model="utr" type="number"
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    placeholder="UTR" required />
                </div>
                <InputError :error="errors.utr_score_manual ? errors.utr_score_manual.join(', ') : ''" />
              </div> 
            </div>

            <!-- Height Selection with Feet/Inches and Centimeters Toggle -->
            <div>
              <div class="flex mb-1 mt-3">
                <!-- Toggle between Feet/Inches and Centimeters -->
                <div class="flex-1">
                  <label for="height" class="font-normal block text-sm text-gray-900 dark:text-gray mr-[20px]">Height
                    <span class="text-red-600">*</span> </label>
                </div>

                <div class="flex-1">
                  <div class="flex text-last">
                    <div class="flex items-center">
                      <input type="radio" id="heightInCm" v-model="heightInCm" :value="true" />
                      <label for="heightInCm" class="ml-2 text-sm text-gray-900">Centimeters</label>
                    </div>
                    <div class="flex items-center ml-3">
                      <input type="radio" id="heightFt_in" v-model="heightInCm" :value="false" />
                      <label for="heightFt_in" class="ml-2 text-sm text-gray-900">Feet/Inches</label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Height in Centimeters -->
              <div v-if="heightInCm" class="flex rounded-lg border border-gray-300 shadow-sm w-full">
                <div class="w-full">
                  <input type="number" step="0.01" id="heightCm" :required="true" v-model="heightCm"
                    class="h-12 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    placeholder="Height in cm" />
                </div>
                <InputError :error="errors.height_cm ? errors.height_cm.join(', ') : ''" />
              </div>
              <!-- Height in Feet/Inches -->
              <div v-else class="grid grid-cols-10 gap-3 items-center">
                <div class="col-span-5 rounded-lg border border-gray-300 shadow-sm">
                  <input type="number" id="heightFt" :required="true" v-model="heightFt"
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    placeholder="Ft" />
                </div>
                <InputError :error="errors.height_ft ? errors.height_ft.join(', ') : ''" />

                <div class="col-span-5 flex rounded-lg border border-gray-300 shadow-sm">
                  <input type="number" id="heightIn" :required="true" v-model="heightIn"
                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                    placeholder="In" />
                </div>
                <InputError :error="errors.height_in ? errors.height_in.join(', ') : ''" />
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="flex items-center justify-end pt-4 space-x-2 border-t border-gray-200 rounded-b">
              <button type="submit"
                class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
              <button @click="handleClose"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 light:bg-gray-700 light:text-gray-300 light:border-gray-500 light:hover:text-white light:hover:bg-gray-600">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useNuxtApp } from "#app";
import { defineProps, defineEmits } from "vue";
import Notification from "~/components/common/Notification.vue";
import { handleError } from "@/utils/handleError";
import InputError from "@/components/common/input/InputError.vue";
import { loadCountryList, loadGenderList, loadHandnessList } from "~/services/commonService";
import CountryCodeDropdown from "~/components/common/select/CountryCodeDropdown.vue";
import HandednessDropdown from "~/components/common/select/HandednessDropdown.vue";
import GenderDropDown from "~/components/common/select/GenderDropDown.vue";

const firstName = ref("");
const lastName = ref("");
const school = ref("");
const email = ref("");
const year = ref("");
const code = ref("");
const number = ref("");
const win = ref(0);
const loss = ref(0);
const utr = ref(0);
const gender = ref("");
const handed = ref("");
const heightCm = ref("");
const heightFt = ref("");
const heightIn = ref("");
const heightInCm = ref(true);

const errors = ref({});
const error = ref("");
const authType = ref("");
const notification_type = ref("");
const successMessage = ref("");
const showNotification = ref(false);
const notificationMessage = ref("");
const loading = ref(false);

const countryCodes = ref([]);
const genders = ref([]);
const handednesses = ref([]);

// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const nprogress = nuxtApp.$nprogress;

// Reference to the modal component
const emit = defineEmits(["close"]);

onMounted(() => {
  loadCountryCodes();
  loadGenders();
  loadHandness();
});

const loadGenders = async () => {
  try {
    genders.value = await loadGenderList();
  } catch (err) {
    console.error("Error loading genders:", err);
  }
};

const loadHandness = async () => {
  try {
    handednesses.value = await loadHandnessList();
  } catch (err) {
    console.error("Error loading handess:", err);
  }
};

const loadCountryCodes = async () => {
  try {
    countryCodes.value = await loadCountryList();
  } catch (err) {
    console.error("Error loading country codes:", err);
  }
};

const clearForm = () => {
  firstName.value = "";
  lastName.value = "";
  school.value = "";
  email.value = "";
  year.value = "";
  code.value = "";
  number.value = "";
  win.value = 0;
  loss.value = 0;
  utr.value = 0;
  gender.value = "";
  handed.value = "";
  heightCm.value = "";
  heightFt.value = "";
  heightIn.value = "";
  heightInCm.value = true;
  errors.value = {};
  error.value = "";
  authType.value = "";
  notification_type.value = "";
  successMessage.value = "";
  showNotification.value = false;
  notificationMessage.value = "";
  loading.value = false;
};

const handleClose = () => {
  clearForm();
  emit("close");
};

const handleSubmit = async () => {
  try {
    nprogress.start();
    error.value = "";
    errors.value = {}; // Reset errors before submitting
    loading.value = true; // Set loading state
    notification_type.value = "";
    notificationMessage.value = "";
    showNotification.value = false; // Reset the notification state

    const data = {
      first_name: firstName.value,
      last_name: lastName.value,
      school: school.value,
      email: email.value,
      utr_score_manual: utr.value,
      year: year.value,
      win: win.value,
      loss: loss.value,
      handedness: handed.value,
      phone_code_country: code.value,
      phone_number: number.value,
      height_in_cm: heightInCm.value,
      height_cm: heightCm.value,
      height_ft: heightFt.value,
      height_in: heightIn.value,
      gender: gender.value,
    };

    const response = await $adminService.create_transfer_player(data);

    if (response.status === 200) {
      nuxtApp.$notification.triggerNotification(response.display_message, "success");
      handleClose();
    } else if (response.status === 401) {
      nuxtApp.$notification.triggerNotification(response.display_message, "failure");
      await router.push("/login");
    } else {
      nuxtApp.$notification.triggerNotification(response.display_message, "failure");
    }
  } catch (error) {
    console.log(error);

    handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
  } finally {
    loading.value = false;
    nprogress.done();
  }
};
</script>
