<template>
  <!-- Name change modal -->
  <div v-if="visible" class="relative z-index-320" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Change Cover Photo</h3>
                <div class="mt-2 w-full">

                  <!-- Cover Picture Upload -->
                  <div class="w-full flex justify-center">
                    <div v-if="cover_picture != null">
                      <img class="mx-auto w-44 h-44 rounded-[30px] mt-3" :src="cover_picture.url" alt="">
                      <!-- <button @click="removeProfile">Remove</button> -->
                      <div class="w-full flex justify-center">

                      </div>
                      <div class="w-full flex justify-center">
                        <button class="p-2 rounded-lg bg-red-600 mx-auto m-2 text-white" @click="removeCover"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>
                      </div>

                    </div>


                  </div>
                  <div class="w-full mt-3">
                    <label class="block mb-1 text-gray-700 font-sans"> Select Cover Picture
                      <span aria-hidden="true" class="text-red-600" title="This field is optional"></span>
                    </label>
                    <div class="flex rounded-lg border border-gray-300 shadow-sm w-full">

                      <label for="profile_picture"
                        class="absolute pt-[13px] img-inputblock h-[49px] w-[110px] px-4 py-2 text-sm font-medium text-black bg-gray-50 border border-gray-300 rounded-lg cursor-pointer focus:outline-none img-input">
                        Choose file
                      </label>
                      <input id="cover_picture" type="file" @change="handleFileChange" accept="image/jpeg, image/png"
                        class="lock pt-1 text-black h-12 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                    </div>
                    <span v-if="fileError" class="text-red-500">{{ fileError }}</span>
                    <!-- Show validation error -->
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="button" @click="saveName"
              class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 sm:ml-3 sm:w-auto"
              :disabled="loading">Save
              changes
              <svg v-if="loading" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin ml-1 mt-1"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB" />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor" />
              </svg></button>
            <button type="button" @click="close"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';

const props = defineProps({
  visible: Boolean,
  slug: String
});

const emit = defineEmits(['close']); // Emit close event with the modal name

const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;

const error = ref('');
const errors = ref('');
const loading = ref(false);
const fileError = ref('');
const cover_picture = ref(null);
const cover_picture1 = ref(null)
const $publicService = nuxtApp.$publicService;

// On mounted, fetch the current user names using the slug
onMounted(() => {
  // if (props.slug) {
  //       fetchCoachNames(props.slug);
  //   }
});

watch(() => props.visible, (newVal) => {
  if (newVal && props.slug) {
    fetchCoachNames(props.slug);
    console.log(455)
  }
});

const fetchCoachNames = async (slug) => {
  try {
    console.log(855)
    console.log(slug)
    const dataSets = await $publicService.get_user_profile(props.slug);
    console.log(dataSets)
    // if (dataSets.user_basic_info) {
    //     first_name.value = dataSets.user_basic_info.first_name ?? "";
    //     last_name.value = dataSets.user_basic_info.last_name ?? "";
    //     other_names.value = dataSets.user_basic_info.other_names ?? "";
    // }
    console.log('media');
    console.log(dataSets.media_info.cover_picture)
    if (dataSets.media_info) {
      cover_picture.value = dataSets.media_info.cover_picture ?? null

    }
  } catch (error) {
    nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  const maxSize = 20 * 1024 * 1024; // 2MB

  // Check if a file is selected
  if (file) {
    // Validate the file type
    if (!allowedTypes.includes(file.type)) {
      fileError.value = 'Only jpg, jpeg, and png files are allowed';
      event.target.value = ''; // Clear the file input
      return;
    }

    // Validate the file size
    if (file.size > maxSize) {
      fileError.value = 'File size must be less than 20MB';
      event.target.value = ''; // Clear the file input
      return;
    }

    // If all validations pass, set the file to the reactive variable
    fileError.value = ''; // Clear any previous errors
    cover_picture1.value = file; // Store the selected file
  }
};



// Function to handle the profile picture upload
const saveProfilePicture = async () => {

  if (!cover_picture1.value) {
    // Handle case where no file is selected
    console.log('no profile picture found');
    return;
  }
  try {
    loading.value = true;
    const user_slug = props.slug; // Assuming you have user_slug available in props
    const response = await $userService.upload_coach_cover_photo(cover_picture1.value, user_slug); // Call the upload function

    if (response.status == '200') {
      loading.value = false;
      nuxtApp.$notification.triggerNotification(response.display_message, 'success');
    } else {
      loading.value = false;
      nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
    }
  } catch (error) {
    loading.value = false;
    console.error('Error uploading profile picture', error);
  }
};


// Save names when the user clicks "Save changes"
const saveName = async () => {
  await saveProfilePicture(); // Save profile picture if available

  // Emit close event regardless of whether profile picture save was successful
  emit('close', 'cover');

};

const removeCover = async () => {
  try {
    const dataSets = await $publicService.delete_media_coache(cover_picture.value.media_id);
    fetchCoachNames(props.slug);
  } catch (error) {
    nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
  }
}

const close = () =>{
  emit('close', 'cover');
}

</script>