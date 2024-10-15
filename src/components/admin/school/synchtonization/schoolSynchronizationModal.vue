<template>
    <!-- Modal Backdrop -->
    <div v-if="isVisible" id="crud-modal" tabindex="-1" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-scroll">
        <div class="bg-white p-8 md:p-12 rounded-xl relative" max-width="7xl">
        <div class="absolute top-0 right-0 pt-8 pr-8 md:pt-12 md:pr-12"><button dusk="close-modal-button" type="button" @click="$emit('close')"
                class="text-gray-400 hover:text-gray-500"><span class="sr-only">Close</span><svg class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </svg></button></div>
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8"> Viewing log ID:{{ data.id }} <br><br>
            Created at: {{ data.created_at }} <br> Updated at: {{ data.updated_at }} <br> Status: {{ data.status }} <br>
        </div>
        <div class="my-8"></div>
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
            <h2 class="text-2xl font-bold">Data</h2>
            <div class="my-8"></div>
              <pre class="bg-gray-50 border-2 border-gray-500 rounded p-6">
                {{ data.data }}
            </pre>
            
        </div>
    </div>
    </div>
</template>
<script setup>
import { defineProps, defineEmits ,ref } from 'vue';

const props = defineProps({
    isVisible: {
        type: Boolean,
        required: true,
    },

    data :{
        type:Object,
        required:true
    }
});

// Reference to the modal component
const modalRef = ref(null);
const emit = defineEmits(['close']);


// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
};
function handleSubmit() {
    // Handle form submission logic here
    emit('close');
}
</script>