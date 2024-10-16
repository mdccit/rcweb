<template>
    <!-- Modal Backdrop -->
    <div v-if="isVisible" id="crud-modal" tabindex="-1" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div id="headlessui-dialog-panel-17" data-headlessui-state="open" unmount="true"
           class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-sm transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
           <div class="sm:flex sm:items-start">
               <!-- <div class="text-center sm:mt-0 sm:text-left w-full">
                   <h3 class="text-lg leading-6 font-medium text-center text-gray-900">Are you sure you want to continue?</h3>
               </div> -->
               <video v-if="props.videoNumber ==1" width="400" controls  class="bg-culturedBlue h-[270px] rounded-lg">
                    <source src="@/assets/tutorial/search-filters.mp4" type="video/mp4">
                    <source src="@/assets/tutorial/search-filters.mp4" type="video/ogg">
                    Your browser does not support HTML video.
                </video>
                <p v-if="props.videoNumber ==1" class="text-black mt-1">How to use the search filters</p>
                <video v-if="props.videoNumber ==2" width="400" controls  class="bg-culturedBlue h-[270px] rounded-lg">
                    <source src="@/assets/tutorial/connect.mp4" type="video/mp4">
                    <source src="@/assets/tutorial/connect.mp4" type="video/ogg">
                    Your browser does not support HTML video.
                </video>
                <p v-if="props.videoNumber ==2" class="text-black mt-1">Connect to other users on the platform</p>
                <video v-if="props.videoNumber ==3" width="400" controls  class="bg-culturedBlue h-[270px] rounded-lg">
                    <source src="@/assets/tutorial/edit-profile.mp4" type="video/mp4">
                    <source src="@/assets/tutorial/edit-profile.mp4" type="video/ogg">
                    Your browser does not support HTML video.
                </video>
                <p v-if="props.videoNumber ==3" class="text-black mt-1">How to edit your profile</p>
                <video v-if="props.videoNumber ==4" width="400" controls  class="bg-culturedBlue h-[270px] rounded-lg">
                     <source src="@/assets/tutorial/media.mp4" type="video/mp4">
                    <source src="@/assets/tutorial/media.mp4" type="video/ogg">
                    Your browser does not support HTML video.
                </video>
                <p v-if="props.videoNumber ==4" class="text-black mt-1">How to add media</p>
               
           </div>
           <div class="mt-4 text-center"><button dusk="splade-confirm-cancel" type="button" @click="$emit('close')"
                   class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
           </div>
       </div>
    </div>
</template>

<script setup>
import { ref, computed, watch , onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { defineProps, defineEmits, defineExpose} from 'vue';
import { useModerationStore } from '~/stores/moderation';
const moderationStore = useModerationStore();

const error = ref('');
const successMessage = ref('');
const errors = ref([]);

// Access authService from the context

// Reference to the modal component
const modalRef = ref(null);
const emit = defineEmits(['close','deleted']);


// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
};





const props = defineProps({
    isVisible: Boolean,
    videoNumber:Number
});

watch(() => props.isVisible, (newValue) => {});

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