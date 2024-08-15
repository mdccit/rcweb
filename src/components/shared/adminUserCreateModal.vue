<template>
    <!-- Modal Backdrop -->
    <div v-if="isVisible" id="crud-modal" tabindex="-1" aria-hidden="true"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <!-- Modal Content Wrapper -->
        <div class="relative w-full max-w-md p-4 mx-auto">
            <!-- Modal Box -->
            <div class="relative bg-white rounded-lg shadow light:bg-gray-700">
                <!-- Modal Header -->
                <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-200">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray">Create New User</h3>
                    <button @click="$emit('close')"
                        class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center light:hover:bg-gray-600 light:hover:text-white">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <!-- Modal Body -->
                <div class="p-6 space-y-6">
                    <!-- Form Fields -->
                    <div>
                        <label for="name" class="block text-sm font-normal text-gray-900 light:text-gray">Name</label>
                        <input type="text" id="name"
                            class="bg-transparent block w-full mt-1 p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 light:bg-gray-600 light:border-gray-500 dark:text-white"
                            placeholder="Enter Name" />
                    </div>
                    <div>
                        <label for="price" class="block text-sm font-normal text-gray-900 light:text-gray">Email</label>
                        <input type="email" id="price"
                            class=" bg-transparent block w-full mt-1 p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 light:bg-gray-600 light:border-gray-500 dark:text-white"
                            placeholder="Enter Email" />

                        <div class="flex items-end text-right mt-2">
                            <input checked id="checked-checkbox" type="checkbox" value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600">
                            <label for="checked-checkbox"
                                class="ms-2 text-sm font-normal text-gray-600 light:text-gray-300 ">Set email verified</label>
                        </div>
                    </div>
                    <div>
                        <label for="price"
                            class=" bg-transparent block text-sm font-normal text-gray-900 light:text-gray">Password</label>
                        <input type="password" id="price"
                            class="block w-full mt-1 p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 light:bg-gray-600 light:border-gray-500 light:text-gray"
                            placeholder="Enter password" />
                    </div>
                    <div>
                        <label for="countries"
                            class="block mb-2 text-sm font-normal text-gray-900 light:text-white">Role</label>
                        <select id="countries"
                            class="bg-light-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-600 dark:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500">
                            <option selected>Choose a Role</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <label for="mobileCode"
                            class="block mb-2 text-sm font-normal text-gray-900 light:text-gray">Mobile No</label>
                        <div class="grid grid-cols-10 gap-3 items-center">
                            <input type="text" id="mobileCode" v-model="mobileCode"
                                class="col-span-2 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-600 
                                dark:placeholder-gray-600 light:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Code" required />
                            <input type="text" id="mobileNumber" v-model="mobileNumber"
                                class="font-normal col-span-8 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-600 dark:placeholder-gray-600 
                               light:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Number" required />
                        </div>
                    </div>

                </div>
                <!-- Modal Footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-300">
                    <button @click="handleSubmit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Create
                        </button>
                    <button @click="$emit('close')"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 light:bg-gray-700 light:text-gray-300 light:border-gray-500 light:hover:text-white light:hover:bg-gray-600">Cancel</button>
                </div>
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