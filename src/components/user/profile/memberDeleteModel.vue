<template>
    <!-- Modal Backdrop -->
    <div v-if="isVisible" id="crud-modal" tabindex="-1" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div id="headlessui-dialog-panel-17" data-headlessui-state="open" unmount="true"
           class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-sm transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
           <div class="sm:flex sm:items-start">
               <div class="text-center sm:mt-0 sm:text-left w-full">
                   <h3 class="text-lg leading-6 font-medium text-center text-gray-900">Are you sure you want to continue?</h3>
               </div>
           </div>
           <div class="mt-4 text-center"><button dusk="splade-confirm-confirm" type="button" @click="submit"
                   class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm bg-blue-500 hover:bg-blue-700 ">Confirm</button><button dusk="splade-confirm-cancel" type="button" @click="$emit('close')"
                   class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
           </div>
       </div>
    </div>
</template>

<script setup>
import { ref, computed, watch , onMounted } from 'vue';
import { defineProps, defineEmits, defineExpose} from 'vue';
import { useNuxtApp } from '#app';
  const nuxtApp = useNuxtApp();
  const $publicService = nuxtApp.$publicService;


// Access authService from the context

// Reference to the modal component
const emit = defineEmits(['close','getMember']);

const props = defineProps({
    isVisible: Boolean,
    schooUserId: String,
});

watch(() => props.isVisible, (newValue) => {});



const submit = async () => {
    try {
         await $publicService.delete_school_user(props.schooUserId);
        emit('getMember');

        emit('close');
    } catch (error) {
        console.log(error)
       console.error('Error fetching data:', error.message);
    }
};



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