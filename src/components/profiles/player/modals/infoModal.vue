<template>

      <!-- Info change modal -->
      <div v-if="false" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Change your
                                    Info</h3>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500 mb-3">Are you sure you want to
                                        deactivate
                                        your account? All of your data will be permanently removed.
                                    </p>

                                    <div>
                                        <div class="">
                                            <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Height
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="first_name" v-model="first_name"
                                                            autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                </div>
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Weight
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="first_name" v-model="first_name"
                                                            autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Handness
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <Select id="first_name" v-model="first_name"
                                                            autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                            <option value="">gg</option>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div class="mb-2 sm:col-span-2 col-span-1 lg:col-span-1">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Gender
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <Select id="first_name" v-model="first_name"
                                                            autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                            <option value="">gg</option>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </div>



                                            <div class="mb-2">
                                                <label class="block mb-1 text-gray-700 font-sans text-sm">Graduation
                                                    month
                                                    <span aria-hidden="true" class="text-red-600"
                                                        title="This field is required">*</span></label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <input id="first_name" v-model="first_name"
                                                        autocomplete="given-name"
                                                        class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                        placeholder="" required>
                                                </div>
                                            </div>

                                            <div class="mb-2">
                                                <label class="block mb-1 text-gray-700 font-sans text-sm">Email
                                                    <span aria-hidden="true" class="text-red-600"
                                                        title="This field is required">*</span></label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <input id="first_name" v-model="first_name"
                                                        autocomplete="given-name"
                                                        class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                        placeholder="" required>
                                                </div>
                                            </div>

                                            <div class="mb-2 grid grid-cols-10 gap-4">
                                                <div class="col-span-3">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Code
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="first_name" v-model="first_name"
                                                            autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                </div>
                                                <div class="col-span-7">
                                                    <label class="block mb-1 text-gray-700 font-sans text-sm">Number
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span>
                                                    </label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input id="first_name" v-model="first_name"
                                                            autocomplete="given-name"
                                                            class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mb-2">
                                                <label class="block mb-1 text-gray-700 font-sans text-sm">Age
                                                    <span aria-hidden="true" class="text-red-600"
                                                        title="This field is required">*</span></label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <input id="first_name" v-model="first_name"
                                                        autocomplete="given-name"
                                                        class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                        placeholder="" required>
                                                </div>
                                            </div>

                                            <div class="mb-2">
                                                <label class="block mb-1 text-gray-700 font-sans text-sm">Budget
                                                    <span aria-hidden="true" class="text-red-600"
                                                        title="This field is required">*</span></label>
                                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                    <select id="first_name" v-model="first_name"
                                                        autocomplete="given-name"
                                                        class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                        placeholder="" required>
                                                        <option value="">ggg</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button"
                            class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Save
                            changes</button>
                        <button type="button"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>