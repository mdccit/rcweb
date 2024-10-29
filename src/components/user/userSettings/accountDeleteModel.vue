<template>
    <!-- Modal Backdrop -->
    <div v-if="isVisible" id="crud-modal" tabindex="-1" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div id="headlessui-dialog-panel-17" data-headlessui-state="open" unmount="true"
           class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-sm transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
           <div class="sm:flex sm:items-start">
               <div class="text-center sm:mt-0 sm:text-left">
                   <h3 class="text-lg leading-6 font-medium text-gray-900">Delete Account</h3>
                   <div class="mt-2">
                       <p class="text-sm text-gray-500">Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.</p>
                   </div><!----><!---->
                   <input v-model="currentPassword" type="password" placeholder="Current Password" class="w-full mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" required autocomplete="off"/>

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
import { useUserStore } from '@/stores/userStore';

const route = useRoute();
const router = useRouter();

const error = ref('');
const successMessage = ref('');
const errors = ref([]);
const currentPassword = ref('')
// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;
const $authService = nuxtApp.$authService;
// Reference to the modal component
const modalRef = ref(null);
const emit = defineEmits(['close','emitMessage']);

const userStore = useUserStore();


// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
};





const props = defineProps({
    isVisible: Boolean,
});

watch(() => props.isVisible, (newValue) => {});

function handleSubmit() {
    // Handle form submission logic here
    emit('close');
}

const submit = async () => {
    
    try {

        const response = await $authService.accountDelete({current_password:currentPassword.value});

        console.log(response)
        if (response.status === 200) {
            
            nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            emit('close');
            userStore.clearUser();  // Clear user data if no token is found

            router.push('/');
        }
    } catch (error) {
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');

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