<template>
    <div v-if="isVisible" id="crud-modal" tabindex="-1" 
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
     <!-- Create team modal -->

    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="bg-white w-full max-w-5xl h-[80vh] md:h-[60vh] p-6 rounded-lg shadow-lg relative overflow-auto">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:items-start">
                            <div class="mt-3 text-center  sm:mt-0 sm:text-left">
                                <h1 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Create Team
                                </h1>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500 mb-3">Here you can manage the requests that have
                                        been made to your school.</p>
                                    <div class="flex bp-1">
                                        <div class="flex-1 p-1">
                                            <div class="">
                                                <label class="block mb-1 text-gray-700 font-sans">Team name
                                                    <span aria-hidden="true" class="text-red-600"
                                                        title="This field is required">*</span></label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <input id="first_name" 
                                                        autocomplete="given-name" class="block px-5 py-3 w-full border-0 focus:border-lightAzure
                                                         focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50
                                                         disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                        placeholder="" required>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-1 p-1">
                                            <div class="">
                                                <label class="block mb-1 text-gray-700 font-sans">Select members
                                                    <span aria-hidden="true" class="text-red-600"
                                                        title="This field is required">*</span></label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <input id="first_name" 
                                                        autocomplete="given-name" class="block px-5 py-3 w-full border-0 focus:border-lightAzure
                                                         focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50
                                                         disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                        placeholder="" required>
                                                    <button type="button"
                                                        class="inline-flex w-full justify-center rounded-full text-steelBlue px-3 py-2 active:bg-blue-100 transition-all text-sm font-normal text-white shadow-sm  sm:ml-3 sm:w-auto">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="size-6 mx-auto text-steelBlue">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                                        </svg>

                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button"
                            class="inline-flex w-full justify-center rounded-full bg-steelBlue px-3 py-2 text-sm font-normal text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">
                            Create Team</button>

                    </div>
                </div>
            </div>
        </div>
    </div>

     <!-- Create team modal -->
    </div>
       
</template>

<script setup>

const props = defineProps({
    isVisible: Boolean,
    action: String,
    moderationId: String,
});
</script>