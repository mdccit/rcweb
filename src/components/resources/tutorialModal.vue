<template>
    <!-- Modal Backdrop -->
    <div v-if="isVisible" id="crud-modal" tabindex="-1" class="fixed inset-0 z-50  bg-black bg-opacity-90">
        <div class="flex items-end justify-end">
            <div class="mt-[70px] text-center"><button dusk="splade-confirm-cancel" type="button"
                    @click="$emit('close')"
                    class="mt-3 mr-7">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-6">
                        <path fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>

                </button>
            </div>
        </div>

        <div class="flex items-center justify-center">
            <div id="headlessui-dialog-panel-17" data-headlessui-state="open" unmount="true"
                class="relative  rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-sm transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                <div class="sm:flex sm:items-start">
                    <!-- <div class="text-center sm:mt-0 sm:text-left w-full">
                   <h3 class="text-lg leading-6 font-medium text-center text-gray-900">Are you sure you want to continue?</h3>
               </div> -->
                    <div class="m-auto">
                        <video v-if="props.videoNumber == 1" width="800px" controls
                            class="bg-culturedBlue w-[800px] h-[400px] rounded-lg">
                            <source src="@/assets/tutorial/search-filters.mp4" type="video/mp4">
                            <source src="@/assets/tutorial/search-filters.mp4" type="video/ogg">
                            Your browser does not support HTML video.
                        </video>
                        <div>
                            <p v-if="props.videoNumber == 1" class="text-white mt-1">How to use the search filters</p>
                        </div>
                    </div>

                    <div class="m-auto">
                        <video v-if="props.videoNumber == 2" width="400" controls
                            class="bg-culturedBlue h-[400px] rounded-lg">
                            <source src="@/assets/tutorial/connect.mp4" type="video/mp4">
                            <source src="@/assets/tutorial/connect.mp4" type="video/ogg">
                            Your browser does not support HTML video.
                        </video>
                        <div>
                            <p v-if="props.videoNumber == 2" class="text-white mt-1">Connect to other users on the
                                platform
                            </p>
                        </div>
                    </div>

                    <div class="m-auto">
                        <video v-if="props.videoNumber == 3" width="400" controls
                            class="bg-culturedBlue h-[400px] rounded-lg">
                            <source src="@/assets/tutorial/edit-profile.mp4" type="video/mp4">
                            <source src="@/assets/tutorial/edit-profile.mp4" type="video/ogg">
                            Your browser does not support HTML video.
                        </video>
                        <div>
                            <p v-if="props.videoNumber == 3" class="text-white mt-1">How to edit your profile</p>
                        </div>
                    </div>

                    <div class="m-auto">
                        <video v-if="props.videoNumber == 4" width="400" controls
                            class="bg-culturedBlue h-[400px] rounded-lg">
                            <source src="@/assets/tutorial/media.mp4" type="video/mp4">
                            <source src="@/assets/tutorial/media.mp4" type="video/ogg">
                            Your browser does not support HTML video.
                        </video>
                        <div>
                            <p v-if="props.videoNumber == 4" class="text-white mt-1">How to add media</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { defineProps, defineEmits, defineExpose } from 'vue';
import { useModerationStore } from '~/stores/moderation';
const moderationStore = useModerationStore();

const error = ref('');
const successMessage = ref('');
const errors = ref([]);

// Access authService from the context

// Reference to the modal component
const modalRef = ref(null);
const emit = defineEmits(['close', 'deleted']);


// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
};





const props = defineProps({
    isVisible: Boolean,
    videoNumber: Number
});

watch(() => props.isVisible, (newValue) => { });

function handleSubmit() {
    // Handle form submission logic here
    emit('close');
}





</script>

<style scoped>
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