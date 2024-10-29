<template>
  <header class="bg-gray-200">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="flex w-full justify-between gap-8">
        <div class="flex items-center gap-4">
          <NuxtLink to="/admin/transferTracker"><svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 6l-6 6l6 6"></path>
            </svg></NuxtLink>
          <h2 class="font-bold text-lg self-center">Editing Transfer Tracker</h2>
        </div>
        <div class="">
          <a href="#"><button @click.prevent="goto_transfer_tracker" type="button"
              class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
              View
              <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M17 7l-10 10"></path>
                <path d="M8 7l9 0l0 9"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  </header>

  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-7">
    <!-- User Edit Section Component -->

    <form @submit.prevent="handleSubmit">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
        <!-- Photo Upload Section -->
        <div class="col-span-6 sm:col-span-4">
          <span class="block mb-1 text-gray-700 font-sans">Photo</span>
          <div class="mt-2">
            <img v-if="!(media && media.url)"
              src="https://ui-avatars.com/api/?name=e+e&amp;color=7F9CF5&amp;background=EBF4FF" alt="User Photo"
              class="rounded-full h-20 w-20 object-cover" />
            <img v-if="media && media.url" :src="media.url" alt="User Photo"
              class="rounded-full h-20 w-20 object-cover" />
          </div>
          <div class="flex mt-2 space-x-2">
            <!-- Select a New Photo -->
            <div>
              <label class="block" v-if="!(media && media.url)">
                <a
                  class="font-semibold border border-border rounded py-4 px-4 w-full block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center">
                  <svg class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                    <path d="M7 9l5 -5l5 5"></path>
                    <path d="M12 4l0 12"></path>
                  </svg>
                  Select A New Photo
                  <input name="photo" type="file" @change="handleFileChange"
                    class="invisible absolute inset-0 w-full h-full disabled:opacity-50" />
                </a>
              </label>
            </div>

            <!-- Remove Photo -->
            <button @click.prevent="deleyeUserProfilePicture" v-if="media && media.url"
              class="font-semibold border border-border rounded py-4 px-4 inline-block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center">
              <svg class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
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

        <div class="grid grid-cols-6 gap-4">
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
          <div class="mt-4 col-span-3">
            <label class="block text-sm font-normal text-gray-900 mb-1">School <span
                class="text-red-500">*</span></label>
            <div class="flex border border-gray-300 rounded-lg shadow-sm">
              <input type="text" :required="true" v-model="school"
                class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                placeholder="Enter School" required />
            </div>
            <InputError :error="errors.school ? errors.school.join(', ') : ''" />
          </div>

          <!-- Handed Fields -->
          <div class="mt-4 col-span-3">
            <label class="block text-sm font-normal text-gray-900 mb-1">Handedness <span class="text-red-500">*</span></label>
            <div class="flex border border-gray-300 rounded-lg shadow-sm">
              <HandednessDropdown :required="true" :handedness="handednesses" v-model="handed" id="player_handedness"
                label="Player Handedness" />
            </div>
            <InputError :error="errors.handedness ? errors.handedness.join(', ') : ''" />
          </div>

        </div>



        <!-- Email -->
        <div class="mt-4">
          <label class="block text-sm font-normal text-gray-900 mb-1">Email <span class="text-red-500">*</span></label>
          <div class="flex border border-gray-300 rounded-lg shadow-sm">
            <input type="email" :required="true" v-model="email"
              class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
              placeholder="Enter Email" required />
          </div>
          <InputError :error="errors.email ? errors.email.join(', ') : ''" />
        </div>

        <!-- Year -->
        <div class="mt-4">
          <label class="block text-sm font-normal text-gray-900 mb-1">Year <span class="text-red-500">*</span></label>
          <div class="flex border border-gray-300 rounded-lg shadow-sm">
            <select :required="true" v-model="year"
              class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg">
              <!-- <option selected>Choose a gender</option> -->
              <option value="freshman">Freshman</option>
              <option value="sophomore">Sophomore</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
            </select>
          </div>
          <InputError :error="errors.year ? errors.year.join(', ') : ''" />
        </div>

        <div class="grid grid-cols-6  gap-2 mt-4">
          <!-- UTR Fields -->
          <div class="col-span-2">
            <label for="phone_code_country" class="block text-sm font-normal text-gray-900">Phone No <span
                class="text-red-500">*</span></label>
            <div class="flex border border-gray-300 rounded-lg shadow-sm">
              <CountryCodeDropdown :required="true" :country_codes="countryCodes" v-model="code" name="phone_code"
                data-validation-key="phone_code" class="col-span-2 h-12" />
            </div>
            <InputError :error="errors.phone_code_country ? errors.phone_code_country.join(', ') : ''" />
          </div>
          <!-- UTR Fields -->
          <div class="col-span-4">
            <label class="block text-sm font-normal text-gray-900 mt-5"></label>
            <div class="flex border border-gray-300 rounded-lg shadow-sm">
              <input type="text" :required="true" v-model="number"
                class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                placeholder="Enter Email" required />
            </div>
            <InputError :error="errors.phone_number ? errors.phone_number.join(', ') : ''" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <!-- UTR Fields -->
          <div>
            <label class="block text-sm font-normal text-gray-900">Win <span class="text-red-500">*</span></label>
            <div class="flex border border-gray-300 rounded-lg shadow-sm">
              <input :required="true" v-model="win" type="number"
                class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                placeholder="UTR" required />
            </div>
            <InputError :error="errors.win ? errors.win.join(', ') : ''" />
          </div>
          <!-- UTR Fields -->
          <div>
            <label class="block text-sm font-normal text-gray-900">Loss <span class="text-red-500">*</span></label>
            <div class="flex border border-gray-300 rounded-lg shadow-sm">
              <input :required="true" v-model="loss" type="number"
                class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                placeholder="UTR" required />
            </div>
            <InputError :error="errors.loss ? errors.loss.join(', ') : ''" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <!-- UTR Fields -->
          <div>
            <label class="block text-sm font-normal text-gray-900">UTR <span class="text-red-500">*</span></label>
            <div class="flex border border-gray-300 rounded-lg shadow-sm">
              <input :required="true" v-model="utr" type="number"
                class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                placeholder="UTR" required />
            </div>
            <InputError :error="errors.utr_score_manual ? errors.utr_score_manual.join(', ') : ''" />
          </div>
          <!-- UTR Fields -->
          <div>
            <label class="block text-sm font-normal text-gray-900">Gender <span class="text-red-500">*</span></label>
            <div class="flex rounded-lg shadow-sm">
              <GenderDropDown :required="true" :genders="genders" v-model="gender" id="player_gender"
                label="Player Gender" />
            </div>
            <InputError :error="errors.gender ? errors.gender.join(', ') : ''" />
          </div>
        </div>



        <!-- Height Selection with Feet/Inches and Centimeters Toggle -->
        <div>
          <div class="flex mb-1 mt-6">
            <!-- Toggle between Feet/Inches and Centimeters -->
            <div class="flex-1">
              <label for="height" class="font-normal block text-sm text-gray-900 dark:text-gray mr-[20px]">Height <span
                  class="text-red-600">*</span> </label>
            </div>

            <div class="flex-1">
              <div class="flex justify-end mb-2">
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

        <div class="my-8"></div>

        <!-- Submit Button -->
        <button type="submit"
          class="border bg-blue-500 hover:bg-blue-700 rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 text-white border-transparent">
          <div class="flex flex-row items-center justify-center">
            <span>Save changes </span>
          </div>
        </button>
      </div>
    </form>
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

const route = useRoute(); // Use useRoute to access query parameters
const router = useRouter();

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
const fileError = ref("");
const profile_image = ref("");
const media = ref({});

// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const nprogress = nuxtApp.$nprogress;

const id = ref(route.query.id);

onMounted(() => {
  loadCountryCodes();
  loadGenders();
  loadHandness();
  if (!!id.value) {
    fetchDetails(id.value);
  }
});

// Watch for changes in the route query parameters
watch([route.query.id], ([newId]) => {
  id.value = newId || "";

  if (!!id.value) {
    clearForm();
    fetchDetails(id.value);
  }
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
  fetchDetails(id.value);
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

    const response = await $adminService.update_transfer_player(id.value, data);
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

const fetchDetails = async (userId) => {
  try {
    const response = await $adminService.get_transfer_player(userId);
    if (response.status === 200) {
      const player = response.data;

      firstName.value = player.first_name;
      lastName.value = player.last_name;
      school.value = player.school;
      email.value = player.email;
      year.value = player.year;
      code.value = player.country_id;
      number.value = player.phone_number;
      win.value = player.win;
      loss.value = player.loss;
      utr.value = player.other_data.utr_score_manual;
      gender.value = player.gender;
      handed.value = player.other_data.handedness;
      heightCm.value = player.height;
      heightInCm.value = true;
      media.value = player.media;
      // heightCm.value = parseFloat(dataSets.player_info.height); // Convert height to cm if available
          if (heightCm.value) {
              let totalFeet = (heightCm.value / 30.48).toFixed(2);
              heightFt.value = Math.floor(totalFeet);
              heightIn.value = Math.floor((totalFeet - heightFt.value) * 12)
          }
    } else {
      nuxtApp.$notification.triggerNotification(response.display_message, "failure");
    }
  } catch (error) {
    nuxtApp.$notification.triggerNotification(error.message, "failure");
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  const maxSize = 30 * 1024 * 1024; // 30MB

  // Check if a file is selected
  if (file) {
    // Validate the file type
    if (!allowedTypes.includes(file.type)) {
      fileError.value = "Only jpg, jpeg, and png files are allowed";
      event.target.value = ""; // Clear the file input
      return;
    }

    // Validate the file size
    if (file.size > maxSize) {
      fileError.value = "File size must be less than 30MB";
      event.target.value = ""; // Clear the file input
      return;
    }

    // If all validations pass, set the file to the reactive variable
    fileError.value = ""; // Clear any previous errors
    profile_image.value = file; // Store the selected file
    updateUserProfile();
  }
};

const updateUserProfile = async () => {
  if (!profile_image.value) {
    // Handle case where no file is selected
    console.log("no profile picture found");
    return;
  }
  try {
    const response = await $adminService.transfer_player_profile(id.value, profile_image.value);
    if (response.status === 200) {
      nuxtApp.$notification.triggerNotification(response.display_message, "success");
    } else {
      nuxtApp.$notification.triggerNotification(response.display_message, "failure");
    }
    fetchDetails(id.value);
  } catch (error) {
    console.log(error);
  }
};

const deleyeUserProfilePicture = async () => {
  try {
    const response = await $adminService.transfer_player_profile_delete(media.value.media_id);
    if (response.status === 200) {
      loading.value = false;
      nuxtApp.$notification.triggerNotification(response.display_message, "success");
    } else {
      loading.value = false;
      nuxtApp.$notification.triggerNotification(response.display_message, "failure");
    }
    fetchDetails(id.value);
  } catch (error) {
    console.log(error);
  }
};

const goto_transfer_tracker = () => {
  router.push('/admin/transferTracker');
};

definePageMeta({
  ssr: false,
  layout: 'admin',
  middleware: ['role'],
  requiredRole: ['admin'],
});
</script>
