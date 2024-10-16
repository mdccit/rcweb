<template>
    <header class="bg-gray-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <div class="flex items-center gap-4">
                    <NuxtLink to="/admin/schools">
                        <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg>
                    </NuxtLink>
                    <h2 class="font-bold text-black text-lg self-center"> Editing: {{ name }} </h2>
                </div>

                <div class="">
                    <NuxtLink :to="`/app/profile/school/${slug}`"><button type="submit"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-blue-300 focus:ring-blue-200">
                            View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 7l-10 10"></path>
                                <path d="M8 7l9 0l0 9"></path>
                            </svg>
                        </button>
                    </NuxtLink>
                </div>

            </div>
        </div>
    </header>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-7 mb-5 ">
        <!-- Use the SchoolNavigation component -->
        <SchoolNavigation :schoolId="school_id" />

        <div class="my-8"></div>
        <div class="mb-6">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">

                <div class="flex flex-row gap-16">
                    <div><span class="block mb-1 text-gray-700 font-sans">Icon</span>
                        <div class="mt-2"><img v-if="profile == null" src="@assets/images/business.png" alt="SchoolAdm1"
                                class="rounded-full h-20 w-20 object-cover">
                            <img v-if="profile != null" :src="profile.url" alt="SchoolAdm1"
                                class="rounded-full h-20 w-20 object-cover">
                        </div>
                        <div class="mt-2" style="display: none;"><span
                                class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                                style="background-image: url(&quot;&quot;);"></span></div>

                        <div class="flex mt-2 space-x-2">
                            <div><label class="block"><a
                                        class="font-semibold border border-border rounded py-4 px-4 w-full block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center">
                                        <svg class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                            <path d="M7 9l5 -5l5 5"></path>
                                            <path d="M12 4l0 12"></path>
                                        </svg>
                                        Select A New Photo <input name="icon" type="file" @change="handleFileChange"
                                            data-validation-key="icon"
                                            class="invisible absolute inset-0 w-full h-full disabled:opacity-50"></a></label><!---->
                            </div>
                        </div>
                    </div>
                    <div><span class="block mb-1 text-gray-700 font-sans">Cover</span>
                        <div class="mt-2"><img v-if="cover == null" src="@assets/images/image.svg"
                                alt="School page background" class="rounded-full h-20 w-20 object-cover">
                            <img v-if="cover != null" :src="cover.url" alt="School page background"
                                class="rounded-full h-20 w-20 object-cover">
                        </div>
                        <div class="mt-2" style="display: none;"><span
                                class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                                style="background-image: url(&quot;&quot;);"></span></div>
                        <div class="flex mt-2 space-x-2">
                            <div><label class="block"><a
                                        class="font-semibold border border-border rounded py-4 px-4 w-full block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-blue-300 focus:ring-blue-200 text-center"><svg
                                            class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                            <path d="M7 9l5 -5l5 5"></path>
                                            <path d="M12 4l0 12"></path>
                                        </svg> Select A New Photo <input name="cover" type="file"
                                            @change="handleFileCoverChange" data-validation-key="cover"
                                            class="invisible absolute  w-full h-full disabled:opacity-50"></a></label><!---->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-8"></div>
                <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans"> Name
                        </span>
                        <div class="flex rounded-lg border border-gray-300 shadow-sm">
                            <input v-model="name"
                                class="block text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                name="name" type="text" data-validation-key="name">
                                <InputError :error="errors.name ? errors.name.join(', ') : ''" />
                        </div>
                    </label></div>
                <div class="my-8"></div>
                <div class="w-full">
                    <label class="block"><span class="block mb-1 text-gray-700 font-sans"> Bio
                        </span>
                        <textarea name="bio" data-validation-key="bio" v-model="bio"
                            class="block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50"></textarea>
                    </label>
                    <InputError :error="errors.bio ? errors.bio.join(', ') : ''" />
                </div>
                <div class="my-8"></div>
                <!-- <div><label class="block"><span class="block mb-1 text-gray-700 font-sans"> Media </span>

                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file"
                                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 light:hover:bg-gray-800 light:bg-gray-700 hover:bg-gray-100 light:border-gray-600 light:hover:border-gray-500 light:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                            class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF
                                        (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>

                    </label></div>
                <div class="my-8"></div> -->

                <div class="flex justify-between gap-x-2 mb-2">
                    <div class="w-full">
                        <label class="block">
                            <span class="block mb-1 text-gray-700 font-sans">
                                Approved </span>
                            <div class="relative">
                                <div class="mr-1">
                                    <select name="is_approved" data-validation-key="is_approved" v-model="is_approved"
                                        class="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 px-5 py-3 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50">
                                        <option :value="true"> Yes </option>
                                        <option :value="false"> No </option>
                                    </select>
                                    <InputError :error="errors.is_approved ? errors.is_approved.join(', ') : ''" />
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans">
                                Verified </span>
                            <div class="relative">
                                <div class="mr-1"><select name="is_verified" data-validation-key="is_verified"
                                        v-model="is_verified"
                                        class="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 px-5 py-3 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50">
                                        <option :value="true"> Yes </option>
                                        <option :value="false"> No </option>
                                    </select></div>
                                <InputError :error="errors.is_verified ? errors.is_verified.join(', ') : ''" />
                            </div>
                        </label>
                    </div>
                </div>
                <div class="flex justify-between gap-x-2 my-8">
                    <div class="w-1/2"><label class="block"><span class="block mb-1 text-gray-700 font-sans">
                                Conference </span>
                            <div class="relative">
                                <div class="mr-1"><select name="conference" data-validation-key="conference"
                                        v-model="conference"
                                        class="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 px-5 py-3 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50">
                                        <option value="1"> Other </option>
                                        <option value="2"> ACC </option>
                                        <option value="3"> American Athletic </option>
                                        <option value="4"> Atlantic 10 </option>
                                        <option value="5"> Atlantic Sun </option>
                                        <option value="6"> Northern Sun </option>
                                    </select>
                                </div>
                                <InputError :error="errors.conference ? errors.conference.join(', ') : ''" />
                            </div>
                        </label>
                    </div>
                    <div class="w-1/2"><label class="block"><span class="block mb-1 text-gray-700 font-sans">
                                Division </span>
                            <div class="relative">
                                <div class="mr-1"><select name="division" data-validation-key="division"
                                        v-model="division"
                                        class="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 px-5 py-3 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50">
                                        <option value="1"> Division I </option>
                                        <option value="2"> Division II </option>
                                        <option value="3"> Division III </option>
                                        <option value="4"> NAIA </option>
                                        <option value="5"> NJCAA </option>
                                    </select></div>
                            </div>
                            <InputError :error="errors.division ? errors.division.join(', ') : ''" />
                        </label>
                    </div>
                </div>

                <div class="my-4"></div>

                <button @click="updateSchoolDetails"
                    class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white border-transparent focus:border-blue-300 focus:ring-blue-200">
                    <div class="flex flex-row items-center justify-center">
                        <span class=""> Save changes</span>
                    </div>
                </button>

            </div>

            <div class="my-16"></div>


        </div>
    </div>

</template>

<script setup>

import { ref, computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import { useNuxtApp } from '#app';
import { useRoute } from 'vue-router';
import Notification from '~/components/common/Notification.vue';
import SchoolNavigation from '~/components/admin/school/SchoolNavigation.vue';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';

const route = useRoute(); // Use useRoute to access query parameters

// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const errors = ref([]);
const userStore = useUserStore();
const router = useRouter();
const showNotification = ref(false);
const notificationMessage = ref('');
const notification_type = ref('');
const loading = ref(false);


const name = ref('');
const bio = ref('');
const conference = ref('');
const division = ref('');
const is_verified = ref(false);
const is_approved = ref(false);
const profile = ref(null)
const cover = ref(null)
const profile_image = ref('')
const cover_image = ref('')
const slug = ref('')

const action = ref(route.params.action || 'view'); // default to 'view' if action not provided
const school_id = ref(route.params.school_id || '');
const fileError = ref('')
onMounted(() => {

    // Update the refs directly
    action.value = route.query.action || 'view';
    school_id.value = route.query.school_id || '';

    if (action.value === 'view' || action.value === 'edit') {
        fetchSchoolDetails(school_id.value);
    }
});

//Update School
const updateSchoolDetails = async () => {
    errors.value = [];
    try {
        // Convert boolean values to integers (1 or 0)
        const isVerifiedValue = is_verified.value ? 1 : 0;
        const isApprovedValue = is_approved.value ? 1 : 0;

        const response = await $adminService.school_update({
            school_id: school_id.value,
            name: name.value,
            bio: bio.value,
            is_verified: isVerifiedValue,
            is_approved: isApprovedValue,
            conference: conference.value,
            division: division.value,
        });
         
       
        if (response.status === 200) {
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
        }
        fetchSchoolDetails(school_id.value);
    } catch (error) {
        // nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
        handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
    }
};

const updateSchoolProfile = async () => {
    if (!profile_image.value) {
        // Handle case where no file is selected
        console.log('no profile picture found');
        return;
    }
    try {
        const response = await $adminService.school_profile(school_id.value,profile_image.value);
        if (response.status === 200) {
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
        }
        fetchSchoolDetails(school_id.value);

    } catch (error) {
        console.log(error)
    }
};

const updateSchoolCover = async () => {
    if (!cover_image.value) {
        // Handle case where no file is selected
        console.log('no cover picture found');
        return;
    }
    try {
        const response = await $adminService.school_cover(school_id.value,cover_image.value);
        if (response.status === 200) {
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message, 'failure');
        }
        fetchSchoolDetails(school_id.value);

    } catch (error) {
        console.log(error)
    }
};

// Fetch School Details
const fetchSchoolDetails = async (school_id) => {
    errors.value = [];
    try {
        const data = await $adminService.get_school_details(school_id);
        console.log(data)
        name.value = data.school_info.name || '';
        bio.value = data.school_info.bio || '';
        conference.value = data.school_info.conference_id || '';
        division.value = data.school_info.division_id || '';
        slug.value = data.school_info.slug || '';
        // Convert 0/1 to boolean for form fields
        is_verified.value = data.school_info.is_verified === 1;
        is_approved.value = data.school_info.is_approved === 1;
        profile.value = data.media_info.profile_picture || null;
        cover.value = data.media_info.cover_picture || null;

    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }
};

definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});

const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 30 * 1024 * 1024; // 30MB

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
            fileError.value = 'File size must be less than 30MB';
            event.target.value = ''; // Clear the file input
            return;
        }

        // If all validations pass, set the file to the reactive variable
        fileError.value = ''; // Clear any previous errors
        profile_image.value = file; // Store the selected file
    }

    // Validate the file size
    if (file.size > maxSize) {
      fileError.value = 'File size must be less than 30MB';
      event.target.value = ''; // Clear the file input
      return;
    }

    // If all validations pass, set the file to the reactive variable
    fileError.value = ''; // Clear any previous errors
    profile_image.value = file; // Store the selected file
    updateSchoolProfile();  
};

const handleFileCoverChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 30 * 1024 * 1024; // 30MB

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
            fileError.value = 'File size must be less than 30MB';
            event.target.value = ''; // Clear the file input
            return;
        }

        // If all validations pass, set the file to the reactive variable
        fileError.value = ''; // Clear any previous errors
        cover_image.value = file; // Store the selected file
    }

    // Validate the file size
    if (file.size > maxSize) {
      fileError.value = 'File size must be less than 30MB';
      event.target.value = ''; // Clear the file input
      return;
    }

    // If all validations pass, set the file to the reactive variable
    fileError.value = ''; // Clear any previous errors
    cover_image.value = file; // Store the selected file
    updateSchoolCover()
  };
</script>


<style scoped>
.container {
    max-width: 600px;
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