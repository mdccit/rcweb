<template>
    <!-- Modal Backdrop -->
    <div v-if="isVisible" id="crud-modal" tabindex="-1" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div id="headlessui-dialog-panel-17" data-headlessui-state="open" unmount="true"
           class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-sm transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
           <div class="sm:flex sm:items-start">
               <div class="text-center sm:mt-0 sm:text-left">
                   <h3 class="text-lg leading-6 font-medium text-gray-900">Delete School</h3>
                   <div class="mt-2">
                       <p class="text-sm text-gray-500">Are you sure you want to delete this school? This action is
                           irreversible and will delete all user data and associated records.</p>
                   </div><!----><!---->
               </div>
           </div>
           <div class="mt-4 text-center"><button dusk="splade-confirm-confirm" type="button" @click="submit"
                   class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm bg-blue-500 hover:bg-blue-700 focus:ring-primary-500">Proceed
                   and continue</button><button dusk="splade-confirm-cancel" type="button" @click="$emit('close')"
                   class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
           </div>
       </div>
    </div>
</template>

<script setup>
import { ref, computed, watch , onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { defineProps, defineEmits, defineExpose} from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const error = ref('');
const successMessage = ref('');
const errors = ref([]);

// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

// Reference to the modal component
const modalRef = ref(null);
const emit = defineEmits(['close','emitMessage']);


// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
};





const props = defineProps({
    isVisible: Boolean,
    action: String,
    schoolId: String,
});

watch(() => props.isVisible, (newValue) => {});

function handleSubmit() {
    // Handle form submission logic here
    emit('close');
}

const submit = async () => {
    
    try {

        const response = await $adminService.school_delete(props.schoolId);
        if (response.status === 200) {
            
            successMessage.value = response.display_message;
            emit('emitMessage',response.display_message)
            emit('close');
            router.push('/admin/schools');
        } else {
            
            emit('emitMessage',response.display_message)
            emit('close');
            errors.value.push(response.display_message);
        }
    } catch (err) {
        if (err.response?.data?.message) {
            if (Array.isArray(err.response.data.message)) {
                errors.value = err.response.data.message;
            } else {
                errors.value = [err.response.data.message];
            }
        } else {
            errors.value = [err.response?.data?.message || err.message];
        }
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