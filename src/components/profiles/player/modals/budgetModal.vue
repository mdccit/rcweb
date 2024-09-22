<template>
    <!-- Budget change modal -->
    <div  v-if="visible" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                  class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div class="sm:items-start">
                          <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Budget
                                  change</h3>
                              <div class="mt-2">
                                  <p class="text-sm text-gray-500 mb-3">Are you sure you want todeactivate</p>
                                  <div class="">
                                      <label class="block mb-1 text-gray-700 font-sans">Budget
                                          <span aria-hidden="true" class="text-red-600"
                                              title="This field is required">*</span></label>
                                      <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                          <select id="first_name" v-model="first_name" autocomplete="given-name"
                                              class="block px-5 py-3 w-full border-0 focus:border-lightAzure
                                                       focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50
                                                       disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                              placeholder="" required>
                                              <option>dsd</option>
                                          </select>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button type="button"
                          class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">Save
                          changes</button>
                      <button type="button" @click="$emit('close')"
                          class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                  </div>
              </div>
          </div>
      </div>
  </div> 
</template>


<script setup>

import { ref } from 'vue';

const props = defineProps({
    visible: Boolean
});


</script>