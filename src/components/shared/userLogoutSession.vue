<template>

    <div class="">
        <div id="headlessui-dialog-panel-17" data-headlessui-state="open" unmount="true"
            class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-sm transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
            <div class="sm:flex sm:items-start">
                <div class="text-center sm:mt-0 sm:text-left">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Log Out Sessions
                    </h3>
                    <div class="mt-2">
                        <p class="text-sm text-gray-500">Are you sure you want to log out all sessions for this user?
                            This will log the user out of all devices and require them to log in again.</p>
                    </div><!----><!---->
                </div>
            </div>
            <div class="mt-4 text-center"><button dusk="splade-confirm-confirm" type="button"
                    class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm bg-blue-500 hover:bg-blue-700 focus:ring-primary-500">Proceed
                    and continue</button><button dusk="splade-confirm-cancel" type="button"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    isVisible: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['close']);

function handleSubmit() {
    // Handle form submission logic here
    emit('close');
}
</script>