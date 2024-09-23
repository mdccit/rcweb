<template>
    <div class="mt-16">
        <!-- Start Content Section -->
        <div class="col-span-5 sm:col-span-4 md:col-span-5 lg:col-span-3 xl:col-span-4">
            <h2 class="text-lg font-semibold text-black">Search Result</h2>
            <label class="text-sm mb-2  text-black">Lorem ipsum is a placeholder text commonly used to</label>

            <div class="flex flex-wrap gap-2 my-4">
                <div class="flex-1">
                    <div class="flex">
                        <div class="flex items-center bg-steelBlue text-white px-3 py-1 rounded-md mr-2">
                            <span class="text-sm">Location</span>
                            <button class="ml-2 focus:outline-none hover:bg-brightSkyBlue" aria-label="Remove tag">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="flex items-center bg-steelBlue text-white px-3 py-1 rounded-md">
                            <span class="text-sm">In-state tuition | $100-$500</span>
                            <button class="ml-2 focus:outline-none" aria-label="Remove tag">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex-3">
                    <div class="flex items-center border-lightSteelBlue bg-white rounded-full overflow-hidden px-3 py-4 divide-x h-10">
                        <button @click="showPopupView = true" class="bg-blue-500 p-2 text-white rounded-full mr-2 text-xs" >Saved
                            Search</button>
                        <button @click="showPopup = true"class="text-blue-500 p-2 text-xs" >New +</button>
                    </div>
                </div>
            </div>
            <div class="flex">

                <!-- card 01 -->
                 <div v-for="user in search" class="flex-1 p-2"> 
                    <NuxtLink :to="`/app/profile/${user.slug}`">
                    <button  class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
                        <div class=" grid grid-cols-12 gap-4">
                            <div class="col-span-4">
                                <img class=" rounded-2xl w-[160px] h-[160px]"
                                    src="@/assets/user/images/Rectangle 193.png" alt="Neil image">
                            </div>
                            <div class="col-span-8">
                                <div class="flex justify-between items-center">
                                    <div class="flex-1">
                                        <h4 class="text-black font-bold">{{ user.display_name }}</h4>
                                    </div>
                                    <div class="flex-3">

                                        <span
                                            class="text-steelBlue text-xs p-1 bg-muteGray text-sm rounded-md text-right"><span>$5000</span>
                                            -
                                            <span> $8000</span> </span>
                                    </div>
                                </div>
                                <div class="flex mt-2">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-lightPale p-1 rounded">
                                                <img src="@/assets/user/images/playerIcon.png" alt="" class=" w-4 h-4">
                                            </div>
                                            <div class="text-xs ml-2 text-steelBlue">Tennis {{ user.user_role }}</div>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-lightCreamOrange p-1 rounded">
                                                <img src="@/assets/user/images/manage-parent.png" alt=""
                                                    class=" w-4 h-4">
                                            </div>
                                            <div class="text-xs ml-2 text-vividOrange">Manage by parent</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center mt-2 text-sm text-black bg-muteGray rounded-md p-2">
                                    <div class="mr-4">
                                        <p class="text-xs">UTR Score</p>
                                        <p class="text-base font-bold">50.00</p>
                                    </div>
                                    <p class="text-xs mr-3">ATP Score : <span>538</span></p>
                                    <p class="text-xs mr-3">GPA :<span>{{  user.gpa }}</span></p>
                                    <p class="text-xs">SAT Score : <span>145</span></p>
                                </div>
                                <div class="flex items-center mt-2 text-sm text-gray-500">
                                    <p class="flex text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>

                                        <span class="text-xs ml-2"> New Pura, Belgium</span>
                                    </p>
                                    <p class="ml-4 flex text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                        </svg>

                                        <span class="text-xs ml-2"> Coach at Whittier College</span>
                                    </p>
                                    <p class="ml-4 flex text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                                        </svg>

                                        <span class="text-xs ml-2"> 24 Years Old</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p class="mt-2 text-xs text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure
                                dolor in.
                            </p>
                        </div>
                        <div class="flex mt-2">
                            <div class="flex-1">
                                <div class="flex items-center space-x-2 mb-2">
                                    <div class="bg-blue-100 p-1 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4 text-blue-700">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                        </svg>

                                    </div>
                                    <div class="text-xs ml-2 text-gray-500"><span
                                            class="text-blue-700">Ralph,Cameron</span> 3 more mutual connections
                                    </div>
                                </div>
                            </div>

                            <div class="flex-1 text-right">
                                <div class="flex">
                                    <div class="flex-1 text-right">
                                        <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor"
                                                class="size-5 text-blue-500 m-auto">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div>
                                        <button class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                            Connect +
                                        </button>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </button>
                </NuxtLink>
                </div> 
                <!--/ card 01 -->
                <!-- card 02 -->
                <!-- <div class="flex-1 p-2">
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
                        <div class=" grid grid-cols-12 gap-4">
                            <div class="col-span-4">
                                <img class=" rounded-2xl w-[160px] h-[160px]"
                                    src="@/assets/user/images/coachProPic.png" alt="Neil image">
                            </div>
                            <div class="col-span-8">
                                <div class="flex justify-between items-center">
                                    <div class="flex-1">
                                        <h4 class="text-black font-bold">Jane Cooper</h4>
                                    </div>
                                </div>
                                <div class="flex mt-2">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-mintGreen p-1 rounded">
                                                <img src="@/assets/user/images/man-medal.png" alt="" class=" w-4 h-4">
                                            </div>
                                            <div class="text-sm ml-2 text-green-500">Tennis Coach</div>
                                        </div>
                                    </div>
                                </div>
                                <p class="flex text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    <span class="text-xs ml-2"> New Pura, Belgium</span>
                                </p>
                                <p class="mt-2 flex text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                    </svg>

                                    <span class="text-xs ml-2"> Coach at Whittier College</span>
                                </p>
                            </div>
                        </div>

                        <div>
                            <p class="mt-2 text-xs text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure
                                dolor in.
                            </p>
                        </div>
                        <div class="flex mt-2">
                            <div class="flex-1">
                                <div class="flex items-center space-x-2 mb-2">
                                    <div class="bg-blue-100 p-1 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4 text-blue-700">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                        </svg>

                                    </div>
                                    <div class="text-xs ml-2 text-gray-500"><span
                                            class="text-blue-700">Ralph,Cameron</span> 3 more mutual connections
                                    </div>
                                </div>
                            </div>

                            <div class="flex-1 text-right">
                                <div class="flex">
                                    <div class="flex-1 text-right">
                                        <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor"
                                                class="size-5 text-blue-500 m-auto">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div>
                                        <button class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                            Connect +
                                        </button>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div> -->
                <!-- / card 02 -->
            </div>
            <div class="flex">
                <!-- card 03 -->
                <!-- <div class="flex-1 p-2">
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
                        <div class=" grid grid-cols-12 gap-4">
                            <div class="col-span-4">
                                <img class=" rounded-2xl w-[160px] h-[160px]"
                                    src="@/assets/user/images/south florida.png" alt="Neil image">
                            </div>
                            <div class="col-span-8">
                                <div class="flex justify-between items-center">
                                    <div class="flex-1">
                                        <h4 class="text-black font-bold">University of South Florida</h4>
                                    </div>
                                </div>
                                <div class="flex mt-2">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-lightred p-1 rounded">
                                                <img src="@/assets/user/images/college-icon-red.png" alt=""
                                                    class=" w-4 h-4">
                                            </div>
                                            <div class="text-xs ml-2 text-orangeRed">University</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p class="flex text-black">
                                        <img src="@/assets/user/images/shield.png" alt="" class="w-3 h-3">
                                        <span class="text-xs ml-2">Division: Division iii</span>
                                    </p>
                                    <p class="mt-2 flex text-black">
                                        <img src="@/assets/user/images/conference.png" alt="" class="w-3 h-3">
                                        <span class="text-xs ml-2"> Conference: Ivy League</span>
                                    </p>
                                    <p class="mt-2 flex text-black">
                                        <img src="@/assets/user/images/win.png" alt="" class=" w-3 h-3">

                                        <span class="text-xs ml-2">Average UTR: Unknown</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p class="mt-2 text-xs text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure
                                dolor in.
                            </p>
                        </div>
                        <div class="flex mt-2">

                            <div class="flex-1 text-right">
                                <div class="flex">
                                    <div class="flex-1 text-right">
                                        <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor"
                                                class="size-5 text-blue-500 m-auto">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div>
                                        <button class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                            Connect +
                                        </button>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div> -->
                <!--/ card 03 -->
                <!-- card 04 -->
                <!-- <div class="flex-1 p-2">
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
                        <div class=" grid grid-cols-12 gap-4">
                            <div class="col-span-4">
                                <img class=" rounded-2xl w-[160px] h-[160px]"
                                    src="@/assets/user/images/player 2.png" alt="Neil image">
                            </div>
                            <div class="col-span-8">
                                <div class="flex justify-between items-center">
                                    <div class="flex-1">
                                        <h4 class="text-black font-bold">Ronald Richards</h4>
                                    </div>
                                </div>
                                <div class="flex mt-2">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="flex items-center space-x-2 mb-2">
                                                <div class="bg-lightPale p-1 rounded">
                                                    <img src="@/assets/user/images/playerIcon.png" alt=""
                                                        class=" w-4 h-4">
                                                </div>
                                                <div class="text-xs ml-2 text-steelBlue">Tennis Player</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center mt-2 text-sm text-black bg-muteGray rounded-md p-2">
                                    <div class="mr-4">
                                        <p class="text-xs">UTR Score</p>
                                        <p class="text-base font-bold">50.00</p>
                                    </div>
                                    <p class="text-xs mr-3">ATP Score : <span>538</span></p>
                                    <p class="text-xs mr-3">GPA :<span>538</span></p>
                                    <p class="text-xs">SAT Score : <span>145</span></p>
                                </div>
                                <div class="flex items-center mt-2 text-sm text-gray-500">
                                    <p class="flex text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>

                                        <span class="text-xs ml-2"> New Pura, Belgium</span>
                                    </p>
                                    <p class="ml-4 flex text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                        </svg>

                                        <span class="text-xs ml-2"> Coach at Whittier College</span>
                                    </p>
                                    <p class="ml-4 flex text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                                        </svg>

                                        <span class="text-xs ml-2"> 24 Years Old</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p class="mt-2 text-xs text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure
                                dolor in.
                            </p>
                        </div>
                        <div class="flex mt-2">

                            <div class="flex-1 text-right">
                                <div class="flex">
                                    <div class="flex-1 text-right">
                                        <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor"
                                                class="size-5 text-blue-500 m-auto">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div>
                                        <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor"
                                                class="size-5 text-blue-500 m-auto">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div> -->
                <!--/ card 04 -->
            </div>
        </div>
        <!-- End Content Section -->
    </div>

<!-- Popup Modal -->
<!-- <PopupModal
      :isOpen="showPopup"
      @close="showPopup = false"
    /> -->
    <SaveSearch  :isOpen="showPopup"
        @close="showPopup = false"/>

    <ViewSaveSearch  :isOpen="showPopupView"
        @close="showPopupView = false"/>
</template>

<!-- <script setup>
definePageMeta({
    layout: 'user',
    middleware: ['role'],
    requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
});
</script> -->
<script setup>
definePageMeta({
    layout: 'user',
    middleware: ['role'],
    requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
})
import PopupModal from '~/pages/user/search/saveSearchModal.vue';
import { ref, computed, watch, onMounted ,inject  } from 'vue';
import { useNuxtApp } from '#app';
import { useUserStore } from '~/stores/userStore';
import { useSearchStore } from '~/stores/searchStore';

import { useRouter } from 'vue-router';
import SaveSearch from '~/components/user/search/saveSearch.vue';
import ViewSaveSearch from '~/components/user/search/viewSaveSearch.vue';
const nuxtApp = useNuxtApp();
const userStore = useUserStore();
const router = useRouter();
const searchStore = useSearchStore();

const $userService = nuxtApp.$userService;
const search = ref([])
const showPopup =ref(false)
const showPopupView =ref(false)

onMounted(() => {
    fetchData();
  

  });
 
  
watch(
  () => searchStore.searchButton,
  () => {
    fetchData() 
  }
);
  const fetchData = async () =>{
    console.log(1)
    if(searchStore.searchButton){
        console.log(searchStore.searchKey)
    const data ={
        user_role:5,

        // search_key:searchStore.searchKey??null,
        // state:searchStore.state??null,
        // city:searchStore.city??null,
        // tuition_in_state_min:searchStore.tuitionInStateMin??null,
        // tuition_in_state_max:searchStore.tuitionInStateMax??null,
        // tuition_out_state_min:searchStore.tuitionOutStateMin??null,
        // tuition_out_state_max:searchStore.tuitionOutStateMax??null,
        // gender:searchStore.gender??null,
        // graduation_month:searchStore.graduationMonth??null,
        // graduation_year:searchStore.graduationYear??null,
        // country_id:searchStore.countryId??null,
        // handedness:searchStore.handedness??null,
        // utr_min:searchStore.utrMin??null,
        // utr_max:searchStore.utrMax??null,
        // wtn_min:searchStore.wtnMin??null,
        // wtn_max:searchStore.wtnMax??null,
        // atp_ranking:searchStore.atpRanking??null,
        // itf_ranking:searchStore.itfRanking??null,
        // national_ranking:searchStore.nationalRanking??null
    }
    const raw = JSON.stringify({
  "user_role": 5,
  "search_key": null,
  "state": null,
  "city": null,
  "tuition_in_state_min": null,
  "tuition_in_state_max": null,
  "tuition_out_state_min": null,
  "tuition_out_state_max": null,
  "gender": null,
  "graduation_month": null,
  "graduation_year": null,
  "country_id": null,
  "handedness": null,
  "utr_min": null,
  "utr_max": null,
  "wtn_min": null,
  "wtn_max": null,
  "atp_ranking": null,
  "itf_ranking": null,
  "national_ranking": null
});
    try {
    const response = await $userService.search_user(raw);
    console.log(response)

     search.value = response.data.dataSets.users || [];
     searchStore.setSearchButton(false)

  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
}
  }


</script>
