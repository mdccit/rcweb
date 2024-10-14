<template>
    <!-- Modal Backdrop -->
    <div tabindex="-1" aria-hidden="true"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">

        <!-- Modal Content Wrapper -->
        <div class="relative w-full max-w-lg p-3 mx-auto">
            <!-- Modal Box -->

            <form>
                <div class="relative bg-white rounded-lg shadow light:bg-gray-700">
                    <!-- Modal Header -->
                    <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray">Create New User</h3>
                        <button
                            class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center light:hover:bg-gray-600 light:hover:text-white">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Modal Body -->
                    <div class="p-6 ">

                        <!-- Form Fields -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- First Name -->
                            <div>
                                <label for="first_name" class="block text-sm font-normal text-gray-900 mb-1">First
                                    Name <span class="text-red-500">*</span></label>
                                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                    <input type="text"
                                        class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        placeholder="Enter Name" required />
                                </div>
                            </div>


                            <!-- Last Name -->
                            <div>
                                <label for="last_name" class="block text-sm font-normal text-gray-900 mb-1">Last
                                    Name <span class="text-red-500">*</span></label>
                                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                    <input type="text"
                                        class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        placeholder="Enter Name" required />
                                </div>
                            </div>
                        </div>



                        <!-- Role Selection -->
                        <div class="mt-4">
                            <label class="block text-sm font-normal text-gray-900 mb-1">Role <span
                                    class="text-red-500">*</span></label>
                            <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                <select
                                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg">
                                    <option selected>Choose a Role</option>
                                    <option value="1">Default</option>
                                    <option value="2">Admin</option>
                                    <option value="3">Operator</option>
                                    <option value="4">Player</option>
                                    <option value="5">Coach</option>
                                    <option value="6">Business Manager</option>
                                    <option value="7">Parent</option>
                                </select>
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="mt-4">
                            <label class="block text-sm font-normal text-gray-900 mb-1">Email <span
                                    class="text-red-500">*</span></label>
                            <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                <input type="email"
                                    class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                    placeholder="Enter Email" required />
                            </div>
                        </div>

                        <!-- Phone Fields -->
                        <div class="grid grid-cols-5 gap-4 mt-4 mb-4">
                            <div class="col-span-2">
                                <label for="phone_code_country" class="block text-sm font-normal text-gray-900">Code
                                    <span class="text-red-500">*</span></label>

                            </div>

                            <div class="col-span-3">
                                <label class="block text-sm font-normal text-gray-900">Number <span
                                        class="text-red-500">*</span></label>

                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <!-- UTR Fields -->
                            <div>
                                <label class="block text-sm font-normal text-gray-900">UTR <span
                                        class="text-red-500">*</span></label>
                                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                    <input type="text"
                                        class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        placeholder="UTR" required />
                                </div>
                            </div>
                            <!-- UTR Fields -->
                            <div>
                                <label class="block text-sm font-normal text-gray-900">Gender <span
                                        class="text-red-500">*</span></label>
                                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                    <select
                                        class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg">
                                        <option selected>Choose a gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                            <!-- Handed Fields -->
                            <div>
                                <label class="block text-sm font-normal text-gray-900">Handed <span
                                        class="text-red-500">*</span></label>

                                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                    <select
                                        class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg">
                                        <option selected>Right</option>
                                        <option value="1">Left</option>
                                    </select>
                                </div>
                            </div>
                            <!-- Height Fields -->
                            <div>
                                <label class="block text-sm font-normal text-gray-900">Height <span
                                        class="text-red-500">*</span></label>
                                <div class="flex border border-gray-300 rounded-lg shadow-sm">
                                    <input type="text"
                                        class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        placeholder="Height" required />
                                </div>
                            </div>
                        </div>

                        <!-- Modal Footer -->
                        <div class="flex items-center justify-end pt-4 space-x-2 border-t border-gray-200 rounded-b">
                            <button type="submit"
                                class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Create
                            </button>
                            <button
                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 light:bg-gray-700 light:text-gray-300 light:border-gray-500 light:hover:text-white light:hover:bg-gray-600">
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    </div>
</template>