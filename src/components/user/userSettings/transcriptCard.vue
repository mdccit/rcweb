<template>
  <div>
    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
      <h2 class="text-2xl font-bold mb-6 text-black">Transcript</h2>
      <hr class="mt-5 mb-3 text-pigeonBlue" />

      <h3 class="font-semibold text-xl mb-2 text-black" v-if="!!transcript">Your transcription files</h3>
      <p class="text-sm text-darkSlateBlue mb-4" v-if="!!transcript">Manage your transcription files effortlessly.
        Whether you want to view, remove, or download, everything is just a click away.</p>

      <div class="flex" v-if="!!transcript">
        <div class="flex-1">
          <div class="card rounded-lg bg-lightGray1 h-[300px] m-2">
            <div class="flex">
              <div class="flex-1 p-3">
                <div class="card rounded-lg bg-blue-400 h-[270px]" @click="handlePreviewClick(transcript)">
                  <img :src="'data:image/jpeg;base64,' + transcript.preview" alt="" srcset="" />
                </div>
              </div>
              <div class="flex-1 pt-4">
                <div class="h-[225px]">
                  <h3 class="font-semibold text-xl mb-2 text-steelBlue">Transcript</h3>
                  <p class="text-sm text-darkSlateBlue mb-4">{{ transcript.file_name }}</p>
                  <p class="text-sm text-darkSlateBlue mb-4 flex" v-if="transcript.status == 'ai_approved'">
                    <span class="text-green-500 mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    A.I. Verified
                  </p>
                  <p class="text-sm text-darkSlateBlue mb-4 flex"
                    v-if="transcript.status == 'pending' || transcript.status == 'failed'">
                    <span class="text-green-500 mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0085FF" class="size-5">
                        <path fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    Pending
                  </p>
                  <p class="text-sm text-darkSlateBlue mb-4 flex" v-if="transcript.status == 'manual_approved'">
                    <span class="text-green-500 mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    Manual
                  </p>
                </div>
                <div class="">
                  <div class="w-full pr-4">
                    <button type="button"
                      class="focus:outline-none text-white bg-redOrange hover:bg-red-700 focus:ring-4 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
                      @click="handleDelete(transcript)">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="card rounded-lg h-[300px] m-2">
            <div class="bg-steelBlue h-[50px] w-full rounded-lg">
              <div class="flex h-[50px]">
                <div class="flex-1 mx-auto p-3">
                  <h3 class="text-white font-light">GPA</h3>
                </div>
                <div class="flex-1 mx-auto p-3">
                  <div class="mx-auto">
                    <h3 class="text-white bg-steelBlueLight79 text-center rounded-lg h-[25px]">{{ transcript.gpa }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="font-semibold text-xl mb-2 text-black mt-3" v-if="!transcript">Add new transcrption file</h3>
      <p class="text-sm text-darkSlateBlue mb-4" v-if="!transcript">Easily upload your new transcription files here.
        Simply select your file, and we’ll process it for you to review, edit, and manage.</p>

      <div class="flex" v-if="!transcript">

        <div class="flex-1">

          <!-- Show preview if file is selected -->
          <div v-if="previewUrl" class="relative border-2 border-blue-500 rounded-lg bg-blue-50 h-[320px] m-2 p-4">
            <embed :src="previewUrl" type="application/pdf" width="100%" height="100%" class="rounded-lg" />
            <button @click.stop="clearPreview" class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1">
              <!-- Trash Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M6.5 5a1 1 0 00-.7.3l-.8.7H3a1 1 0 000 2h1v8a2 2 0 002 2h8a2 2 0 002-2V8h1a1 1 0 100-2h-2l-.8-.7a1 1 0 00-.7-.3H6.5zm1 3a1 1 0 012 0v7a1 1 0 11-2 0V8zm5 0a1 1 0 012 0v7a1 1 0 11-2 0V8z"
                  clip-rule="evenodd" />
              </svg>
            </button>

            <!-- Button to open modal for full-screen preview -->
            <button @click="openModal"
              class="mt-8 bg-blue-600 text-white rounded-full px-4 py-2 w-full hover:bg-blue-700">
              Preview
            </button>
          </div>


          <!-- Show upload section if no preview available -->
          <div v-else
            class="upload-section mb-4 border-2 border-dashed border-blue-500 rounded-lg p-4 bg-blue-50 hover:bg-blue-100 card rounded-lg bg-lightGray1 h-[320px] m-2">
            <label for="media-upload" class="cursor-pointer flex flex-col items-center justify-center">
              <!-- Icon for upload -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-2 text-blue-700" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 16l4-4m0 0l4 4m-4-4v12M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m4-6h12M5 10h14" />
              </svg>
              <span class="text-blue-700 font-semibold text-lg mb-2">Click to Upload File</span>
            </label>
            <!-- Input for file selection -->
            <input id="media-upload" type="file" accept="application/pdf" multiple @change="handleFileUpload"
              class="hidden" />
          </div>
        </div>

        <div class="flex-1">
          <div class="p-2">
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="w-full mb-1">
                <label class="block">
                  <span class="block mb-1 text-gray-700 font-sans">File Name <span aria-hidden="true"
                      class="text-red-600" title="This field is required">*</span></span>
                  <div class="flex rounded-lg border border-gray-300 shadow-sm">
                    <input v-model="fileName"
                      class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                      type="text" required />
                  </div>

                  <InputError :error="fileName.email ? errors.fileName.join(', ') : ''" />
                  <!-- File name Validation Error -->
                </label>
              </div>

              <div class="w-full mb-1">
                <label class="block">
                  <span class="block mb-1 text-gray-700 font-sans">Country<span aria-hidden="true" class="text-red-600"
                      title="This field is required">*</span></span>
                  <div class="flex rounded-lg border border-gray-300 shadow-sm">
                    <CountryDropdown :countries="countries" id="player_country" label="Country" required
                      v-model="country" />
                  </div>

                  <InputError :error="errors.country ? errors.country.join(', ') : ''" />
                  <!-- Country Validation Error -->
                </label>
              </div>

              <div class="w-full mb-8">
                <label class="block">
                  <span class="block mb-1 text-gray-700 font-sans">Language <span aria-hidden="true"
                      class="text-red-600" title="This field is required">*</span></span>
                  <div class="flex rounded-lg border border-gray-300 shadow-sm">
                    <LanguageDropdown :languages="languages" id="player_language" label="Language" required
                      v-model="language" />
                  </div>

                  <InputError :error="errors.language ? errors.language.join(', ') : ''" />
                  <!-- Language Validation Error -->
                </label>
              </div>

              <div class="w-full mb-1 mt-1">
                <div class="w-full mt-1">
                  <button type="submit"
                    class="focus:outline-none text-white bg-steelBlue hover:bg-blue-700 focus:ring-4 h-12 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
                    :disabled="loading">Upload</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal for enlarged view with zoom controls -->
  <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div class="relative bg-white rounded-lg p-4 w-4/5 h-4/5 flex flex-col items-center">
      <embed :src="previewUrl" type="application/pdf" :style="{ transform: `scale(${zoomLevel})` }"
        class="w-full h-full" />

      <!-- Zoom Controls -->
      <div class="absolute top-4 right-4 flex space-x-2">
        <!-- <button @click="zoomIn" class="bg-blue-500 text-white p-2 rounded">+</button>
        <button @click="zoomOut" class="bg-blue-500 text-white p-2 rounded">-</button> -->
        <button @click="closeModal" class="bg-red-500 text-white p-2 rounded">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, defineEmits } from "vue";
import { useNuxtApp } from "#app";
import { loadCountryList, loadLanguagesList } from "~/services/commonService";
import CountryDropdown from "~/components/common/select/CountryDropdown.vue";
import LanguageDropdown from "~/components/common/select/LanguageDropdown.vue";
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';

const loading = ref(false);
const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const transcript = ref("");
const countries = ref([]);
const languages = ref([]);
const file = ref({}); // To hold the uploaded files
const fileName = ref("");
const country = ref("");
const language = ref("");
const previewUrl = ref(null);
const isModalOpen = ref(false);
const zoomLevel = ref(1);


const errors = ref({});
const notification_type = ref('');
const showNotification = ref(false);
const notificationMessage = ref('');

// Fetch data from the API
const fetchData = async () => {
  try {
    nuxtApp.$nprogress.start();
    loading.value = true;
    transcript.value = await $userService.get_transcript();
  } catch (error) {
    transcript.value = null;
    console.error(error);
  } finally {
    loading.value = false;
    nuxtApp.$nprogress.done();
  }
};

// Watch options and search to update filtered items
watch(fetchData, { immediate: true });

onMounted(() => {
  loadCountries();
  loadLanguages();
});

const loadCountries = async () => {
  try {
    countries.value = await loadCountryList();
  } catch (err) {
    console.error("Error loading countries:", err);
  }
};

const loadLanguages = async () => {
  try {
    languages.value = await loadLanguagesList();
  } catch (err) {
    console.error("Error loading languages:", err);
  }
};

const handleFileUpload = (event) => {
  const selected = Array.from(event.target.files);
  file.value = selected[0];
  fileName.value = selected[0].name;

  if (selected[0]) {
    previewUrl.value = URL.createObjectURL(selected[0]); // Generate preview URL
  }
};

const clearPreview = () => {
  previewUrl.value = null;
  file.value = null;
  clearForm();
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  zoomLevel.value = 1; // Reset zoom on close
};

const zoomIn = () => {
  zoomLevel.value += 0.2;
};

const zoomOut = () => {
  if (zoomLevel.value > 0.4) zoomLevel.value -= 0.2; // Minimum zoom level
};

const handleSubmit = async () => {
  try {
    nuxtApp.$nprogress.start();
    errors.value = {};
    loading.value = true;
    const formData = new FormData();
    formData.append("country", country.value);
    formData.append("language", language.value);
    formData.append("file_name", fileName.value);
    formData.append("file", file.value);

    const response = await $userService.create_transcript(formData);
    if (response.status == 200) {
      file.value = {};
      nuxtApp.$notification.triggerNotification(response.display_message, "success");
      clearForm();
      clearPreview();
      fetchData();
    } else {
      nuxtApp.$notification.triggerNotification(response.display_message, "warning");
    }
  } catch (error) {
    if (error.status == "401") {
      // Redirect to the login page if the error status is 401
      nuxtApp.$notification.triggerNotification(error.display_message || "An error occurred", "failure");
      userStore.clearUser();
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      // Trigger notification for other errors
      nuxtApp.$notification.triggerNotification(error.display_message || "An error occurred", "failure");
      handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
    }
  } finally {
    loading.value = false;
    nuxtApp.$nprogress.done();
  }
};

const handleDelete = async (row) => {
  try {
    nuxtApp.$nprogress.start();
    loading.value = true;
    const response = await $userService.transcript_delete(row.id);
    if (response.status === 200) {
      nuxtApp.$notification.triggerNotification(response.display_message, "success");
    } else {
      nuxtApp.$notification.triggerNotification(response.display_message || "An error occurred", "failure");
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
    nuxtApp.$nprogress.done();
    fetchData();
  }
};

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const clearForm = () => {
  country.value = "";
  language.value = "";
  fileName.value = "";
  file.value = {};
};

const handlePreviewClick = (transcript) => {
  window.open(transcript.path, '_blank');
};
</script>
