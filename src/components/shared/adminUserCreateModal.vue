<template>
    <!-- Modal Backdrop -->
    <div
      v-if="isVisible"
      id="crud-modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <!-- Modal Content Wrapper -->
      <div class="relative w-full max-w-md p-4 mx-auto">
        <!-- Modal Box -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Create New Product</h3>
            <button @click="$emit('close')" class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <!-- Modal Body -->
          <div class="p-6 space-y-6">
            <!-- Form Fields -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
              <input type="text" id="name" class="block w-full mt-1 p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white" placeholder="Enter product name" />
            </div>
            <div>
              <label for="price" class="block text-sm font-medium text-gray-900 dark:text-white">Price</label>
              <input type="number" id="price" class="block w-full mt-1 p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white" placeholder="Enter product price" />
            </div>
            <div>
              <label for="description" class="block text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea id="description" rows="4" class="block w-full mt-1 p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white" placeholder="Enter product description"></textarea>
            </div>
          </div>
          <!-- Modal Footer -->
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button @click="handleSubmit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Product</button>
            <button @click="$emit('close')" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Cancel</button>
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
  