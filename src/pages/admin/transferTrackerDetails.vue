<template>
    <header class="bg-gray-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <div class="flex items-center gap-4">
                    <NuxtLink to="/admin/users"><svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg></NuxtLink>
                    <h2 class="font-bold text-lg self-center"> Editing Transfer Tracker </h2>
                </div>
                <div class="">
                    <a href="#"><button type="submit"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                            View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 7l-10 10"></path>
                                <path d="M8 7l9 0l0 9"></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </header>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-7">
        <!-- User Edit Section Component -->


        <form >
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <!-- Photo Upload Section -->
                <div class="col-span-6 sm:col-span-4">
                    <span class="block mb-1 text-gray-700 font-sans">Photo</span>
                    <div class="mt-2">
                        <img v-if="profile == null"
                            src="https://ui-avatars.com/api/?name=e+e&amp;color=7F9CF5&amp;background=EBF4FF"
                            alt="User Photo" class="rounded-full h-20 w-20 object-cover" />

                    </div>
                    <div class="flex mt-2 space-x-2">
                        <!-- Select a New Photo -->
                        <div>
                            <label class="block">
                                <a
                                    class="font-semibold border border-border rounded py-4 px-4 w-full block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center">
                                    <svg class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                        <path d="M7 9l5 -5l5 5"></path>
                                        <path d="M12 4l0 12"></path>
                                    </svg>
                                    Select A New Photo
                                    <input name="photo" type="file"
                                        class="invisible absolute inset-0 w-full h-full disabled:opacity-50" />
                                </a>
                            </label>
                        </div>

                        <!-- Remove Photo -->
                        <button
                            class="font-semibold border border-border rounded py-4 px-4 inline-block relative cursor-pointer text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:border-primary-300 focus:ring-primary-200 text-center">
                            <svg class="w-6 h-6 inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                            Remove Photo
                        </button>
                    </div>
                </div>

                <div class="my-8"></div>

                <!-- First Name Input -->
                <div class="w-full">
                    <label class="block">
                        <span class="block mb-1 text-gray-700 font-sans">First Name <span
                                class="text-red-500">*</span></span>
                        <div class="flex rounded-lg border border-gray-300 shadow-sm rounded-[10px]">
                            <input type="text"
                                class="lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg border border-gray-300" />
                        </div>
                    </label>
                </div>

                <div class="my-8"></div>

                <!-- Last Name Input -->
                <div class="w-full">
                    <label class="block">
                        <span class="block mb-1 text-gray-700 font-sans">Last Name <span
                                class="text-red-500">*</span></span>
                        <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                            <input
                                class="lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
                                type="text" />
                        </div>
                    </label>
                </div>

                <div class="my-8"></div>

                <!-- Role Dropdown -->
                <div class="w-full">
                    <label class="block">
                        <span class="block mb-1 text-gray-700 font-sans">Role </span>
                        <div class="relative">

                            <select name="role"
                                class="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 px-5 py-3 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50">
                                <option value="2">Admin</option>
                                <option value="3">Operator</option>
                                <option value="4">Player</option>
                                <option value="5">Coach</option>
                                <option value="6">Business Manager</option>
                                <option value="7">Parent</option>
                            </select>
                        </div>
                    </label>
                </div>

                <div class="my-8"></div>


                <!-- Email Address Input -->
                <div class="">
                    <div class="w-full">
                        <label class="block">
                            <span class="block mb-1 text-gray-700 font-sans">Email address <span
                                    class="text-red-500">*</span></span>
                            <div class="flex rounded-lg border border-gray-300 shadow-sm ">
                                <input
                                    class="block text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                    name="email" type="text">
                            </div>
                        </label>
                    </div>

                </div>

                <div class="my-8"></div>

                <!-- Height Input -->
                <div class="w-full">
                    <label class="block">
                        <span class="block mb-1 text-gray-700 font-sans">Height<span
                                class="text-red-500">*</span></span>
                        <div class="flex rounded-lg border border-gray-300 shadow-sm">
                            <input
                                class="block text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                name="" type="text" />
                        </div>
                    </label>
                </div>

                <div class="my-8"></div>


                <div class="grid grid-cols-10 gap-4 items-center mt-4 mb-3">
                    <!-- Country Code Dropdown -->
                    <div class="col-span-2">
                        <label class="block">
                            <span class="block mb-1 text-gray-700 font-sans">
                                Phone
                                <span aria-hidden="true" class="text-red-600" title="This field is required">*</span>
                            </span>
                            <div class="relative">
                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                    <!-- <CountryCodeDropdown :country_codes="country_codes" v-model="phone_code_country"
                                        name="phone_code" data-validation-key="phone_code" :disabled="action === 'view'"
                                        required /> -->
                                </div>
                            </div>
                        </label>
                    </div>

                    <!-- Phone Number Input -->
                    <div class="col-span-8">
                        <div class="w-full no-asterisk">
                            <label class="block">
                                <span class="block mb-1 text-gray-700 font-sans">
                                    <span aria-hidden="true" class="text-red-600" title="This field is required">*
                                    </span>
                                </span>

                                <div class="flex rounded-lg border border-gray-300 shadow-sm">

                                    <!-- <input
                                        class="block text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        name="phone_number" type="text" data-validation-key="phone_number"
                                        v-model="phone_number" id="phone_number" step="0.01" required
                                        placeholder="123456789" :disabled="action === 'view'" /> -->
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
        

            <div class="my-8"></div>

            <!-- Submit Button -->
            <button type="submit"
                class="border bg-blue-500 hover:bg-blue-700 rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50  text-white border-transparent ">
                <div class="flex flex-row items-center justify-center">
                    <span>Save changes </span>
                </div>
            </button>
    </div>
    </form>
</div>
</template>