<template>



    <!-- common full screen loader -->
    <ScreenLoader v-if="loading" />
    <!-- Bio change modal -->
    <div v-if="visible"  class="relative z-index-320" aria-labelledby="modal-title"
        role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full"> <!-- Ensure full width -->
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                <!-- Added w-full to parent div -->
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Change Your
                                    Bio</h3>
                                <div class="mt-2 w-full">
                                    <div class="w-full">
                                        <div class="w-full">
                                            <label class="block mb-1 text-gray-700 font-sans">Bio
                                                <span aria-hidden="true" class="text-red-600"
                                                    title="This field is required">*</span>
                                            </label>
                                            <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                <textarea id="user_bio" v-model="user_bio" autocomplete="user_bio"
                                                    class="w-full block px-5 py-3 border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                    placeholder="N/A" required>
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" @click="saveBio"
                            class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">Save
                            changes
                            <svg v-if="loading" aria-hidden="true" role="status"
                                class="inline w-4 h-4 me-3 text-white animate-spin ml-1 mt-1" viewBox="0 0 100 101"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg></button>
                        <button type="button" @click="$emit('close', 'bio')"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, watch } from 'vue';
import { useNuxtApp } from '#app';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';
import ScreenLoader from '@/layouts/screen_loader.vue';
import { useLoadingStore } from '@/stores/loadingStore';


const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const $publicService = nuxtApp.$publicService;

const user_bio = ref('');
const user_slug = ref('');
const loading = ref(false);

const props = defineProps({
    visible: Boolean,
    slug: String
});


// Define emits to handle custom events like close
const emit = defineEmits(['close']);

onMounted(() => {
    if (props.slug) {
        user_slug.value = props.slug;
        fetchPlayerBio(props.slug);
    }
});

watch(() => props.visible, (newVal) => {
    if (newVal && props.slug) {
        fetchPlayerBio(props.slug);
    }
});

const fetchPlayerBio = async (slug) => {
    try {
        loading.value = true;
        const dataSets = await $publicService.get_user_profile(props.slug);

        if (dataSets.user_basic_info) {
            user_bio.value = dataSets.user_basic_info.bio ?? "";

        }
    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    } finally {
        loading.value = false;
    }
}

// Function to update player bio
const updatePlayerBio = async (bio) => {
    try {
        loading.value = true;
        const request_body = { user_slug: props.slug, bio: bio };  // Construct request body with bio
        const response = await $userService.update_player_bio(request_body);  // Pass slug and request body
        if (response.status == '200') {
            clearUserBio();
            // Trigger success notification
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            // Emit close event to parent to close the modal
            emit('close', 'bio');  // Close the modal after successfully updating the bio
        } else {
            nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
        }

    } catch (error) {
        // Handle error
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    } finally {
        loading.value = false;
    }
};

// Save bio when the user clicks "Save changes"
const saveBio = () => {
    updatePlayerBio(user_bio.value);
}

const clearUserBio = () => {
    user_bio.value = '';
};

</script>