<template>
    <main class="flex-1 bg-graySnowDrift overflow-y-auto mt-14">
        <div>
            <section class="grid gap-4 grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
                <!-- Start Profile pic section  -->
                <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">

                    <div>
                        <div class="text-center">
                            <img class="mx-auto w-[200px] h-[200px] rounded-xl"
                                src="../../assets/user/images/Rectangle 193.png" alt="">
                            <h3 class="text-lg font-semibold text-center text-black">Jane Cooper</h3>
                            <h5 class="text-normal text-md text-center text-black text-primaryblue">Tennis player</h5>
                        </div>
                    </div>



                    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3">
                        <div class="flex items-center justify-between">

                            <div class="flex items-center space-x-4 w-48">

                                <h1 class="text-lg font-semibold mb-4 text-black">Bio</h1>
                            </div>
                        </div>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4">Lorem ipsum dolor sit amet,
                            consectetur
                            adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>

                    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3">
                        <div class="flex items-center justify-between">

                            <div class="flex items-center space-x-4 w-48">

                                <h1 class="text-lg font-semibold mb-4 text-black">Info</h1>
                            </div>
                        </div>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b>New pura , Belgium</b> </p>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b>5'8" (172.72 cm)</b> </p>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b>75lb (34 kg)</b> </p>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b>Graduation December
                                2024</b> </p>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b>24 Years Old</b> </p>
                    </div>

                    <div style="height: 70px;"
                        class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3 h-auto">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="...">
                                <img class="mx-auto w-[45px] h-[45px] rounded-xl "
                                    src="../../assets/user/images/Group 179.png" alt="">
                            </div>
                            <div class="col-span-2 ...">
                                <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3">Has $5,000 - $10,000
                                </p>

                            </div>
                        </div>

                    </div>

                    <div style="height: 70px;"
                        class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3 h-auto">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="...">
                                <img class="mx-auto w-[45px] h-[45px] rounded-xl"
                                    src="../../assets/user/images/Group 79.png" alt="">
                            </div>
                            <div class="col-span-2 ...">
                                <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3">Signed up 2023 May 4
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
                <!-- End Profile pic section  -->

                <!-- Start post Section -->

                <div class="col-span-5 sm:col-span-3 md:col-span-5 lg:col-span-2 xl:col-span-3 mb-5">

                    <div
                        class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 text-gray-400 border-gray-400">
                        <ul class="flex flex-wrap -mb-px">
                            <li class="me-2">
                                <a href="#"
                                    class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:text-blue-500 dark:border-blue-500">Post</a>
                            </li>
                            <li class="me-2">
                                <a href="#"
                                    class="inline-block p-4 border-b-2 border-transparent rounded-t-lg active  hover:border-gray-300 dark:hover:text-gray-300"
                                    aria-current="page">Connections</a>
                            </li>
                            <li class="me-2">
                                <a href="#"
                                    class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Media</a>
                            </li>


                        </ul>
                    </div>

                    <!--start card 01 -->
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-5">
                        <div class="flex items-center">
                            <img src="../../assets/user/images/Rectangle 193.png" alt=""
                                class="rounded-lg w-12 h-12 mr-4">
                            <input type="text" placeholder="Write your thoughts..."
                                class="flex-grow text-ceil bg-culturedBlue  rounded-xl py-2 px-4 focus:outline-none focus:border-blue-500">
                        </div>
                        <div class="flex justify-between items-center mt-4">
                            <div class="flex space-x-2">
                                <button
                                    class="flex items-center space-x-1 text-lightred px-3 py-1 rounded-md text-sm bg-culturedBlue">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor"
                                        class="size-4 text-lightred">
                                        <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                                        <path fill-rule="evenodd"
                                            d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="text-lightred pl-1.5">Photo</span>
                                </button>
                                <button
                                    class="flex items-center space-x-1 text-lightred px-3 py-1 rounded-md text-sm bg-culturedBlue">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor"
                                        class="size-4 text-amber">
                                        <path
                                            d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                                    </svg>

                                    <span class="text-amber pl-1.5">Video</span>
                                </button>
                                <button
                                    class="flex items-center space-x-1 text-lightred px-3 py-1 rounded-md text-sm bg-culturedBlue">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green-500"
                                        class="size-4">
                                        <path
                                            d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                        <path fill-rule="evenodd"
                                            d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="text-green-500 pl-1.5">Event</span>
                                </button>
                            </div>
                            <button class="bg-steelBlue text-white px-8 py-2 rounded-lg text-sm">Post</button>
                        </div>
                    </div>
                    <!--end card 01 -->

                    <!--start card 02 -->
                    <div class="flex">
                        <div class="flex-1 p-2">

                            <div class="bg-white p-4 border rounded-2xl">
                                <div class=" grid grid-cols-12 gap-4">
                                    <div class="col-span-3">
                                        <img class=" rounded-2xl w-[85px] h-[85px]"
                                            src="../../assets/user/images/Rectangle 193.png" alt="Neil image">
                                    </div>
                                    <div class="col-span-6">
                                        <h4 class="text-black font-normal">Ronald Richards</h4>
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-mintGreen p-1 rounded">
                                                <img src="../../assets/user/images/man-medal.png" alt=""
                                                    class=" w-4 h-4">
                                            </div>
                                            <div class="text-sm ml-2 text-green-500">Tennis Coach</div>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <div class=" rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="size-5 text-black mr-1">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                </svg>

                                            </div>
                                            <div class="text-sm ml-2 text-black">New Pura, Belgium</div>
                                        </div>
                                    </div>
                                    <div class="col-span-3">
                                        <h4 class="text-black">UTR <span class="text-blue-500">30.01</span></h4>
                                    </div>
                                </div>


                                <div class="flex mt-2">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-blue-100 p-1 rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="size-4 text-blue-700">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                                </svg>

                                            </div>
                                            <div class="text-xs ml-2 text-black"><span
                                                    class="text-blue-700">Ralph,Cameron</span> 3 more mutual connections
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-1 text-right">
                                        <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor"
                                                class="size-5 text-blue-500 m-auto">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </button>
                                        <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor"
                                                class="size-5 text-blue-500 m-auto">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                                            </svg>

                                        </button>
                                        <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor"
                                                class="size-5 text-blue-500 m-auto">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>

                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="flex-1 p-2">

                            <div class="bg-white p-4 border rounded-2xl">
                                <div class=" grid grid-cols-12 gap-4">
                                    <div class="col-span-3">
                                        <img class=" rounded-2xl w-[85px] h-[85px]"
                                            src="../../assets/user/images/Rectangle 193.png" alt="Neil image">
                                    </div>
                                    <div class="col-span-6">
                                        <h4 class="text-black font-normal">Ronald Richards</h4>
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-blue-200 p-1 rounded">
                                                <img src="../../assets/images/player-blue.png" alt="" class=" w-4 h-4">
                                            </div>
                                            <div class="text-sm ml-2 text-blue-500">Tennis Player</div>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <div class=" rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="size-5 text-black mr-1">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                </svg>

                                            </div>
                                            <div class="text-sm ml-2 text-black">New Pura, Belgium</div>
                                        </div>
                                    </div>
                                    <div class="col-span-3">
                                        <h4 class="text-black">UTR <span class="text-blue-500">30.01</span></h4>
                                    </div>
                                </div>


                                <div class="flex mt-2">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-blue-100 p-1 rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="size-4 text-blue-700">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                                </svg>

                                            </div>
                                            <div class="text-xs ml-2 text-black"><span
                                                    class="text-blue-700">Ralph,Cameron</span> 3 more mutual connections
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex-1 text-right">
                                        <div class="flex">
                                            <div class="flex-1 text-right">
                                                <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="size-5 text-blue-500 m-auto">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div>
                                                <button
                                                    class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                                    Connect +
                                                </button>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>



                    </div>






                    <!-- <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 bg-gray-800 border-gray-300">
                        <div class="flex items-center justify-between mb-4">
                            <h5 class="text-xl font-bold leading-none text-gray-900 text-white">Latest Customers
                            </h5>
                        
                        </div>
                        <div class="flow-root">
                            <ul role="list" class="divide-y divide-gray-200 divide-gray-700">
                                <li class="py-3 sm:py-4">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <img class="w-8 h-8 rounded-full"
                                                src="../../assets/user/images/Rectangle 193.png" alt="Neil image">
                                        </div>
                                        <div class="flex-1 min-w-0 ms-4">
                                            <p class="text-sm font-medium text-black truncate ">
                                                Neil Sims
                                            </p>
                                            <p class="text-sm text-gray-500 truncate text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            class="inline-flex items-center text-base font-semibold text-gray-900 text-white">
                                            $320
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> -->

                    <!--end card 02 -->

                    <!--start card 03 -->

                    <!--end card 03 -->


                    <!--end card 04 -->
                </div>
                <!-- End post Section -->

                <!-- Start UTR Section -->
                <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1 mt-4">
                    <div>
                        <div class="flex">
                            <div class="">
                                <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-500 m-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="">
                                <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-500 m-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                                    </svg>

                                </button>
                            </div>

                            <div>
                                <button class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                    Connect +
                                </button>
                            </div>
                            <div class="">
                                <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-500 m-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-blue-500 p-3 mt-2">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="">
                                <h2 class="text-lg font-semibold mb-4">UTR score</h2>
                            </div>
                            <div class="">
                                <h2 class="text-lg font-semibold mb-4">50.00</h2>
                            </div>
                            <div class="">
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">GPA</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">SAT Score</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">TOEFL Score</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">ATP Ranking</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">ITF Ranking</p>
                            </div>
                            <div class="">
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">Unknown</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">Unknown</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">Unknown</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">Unknown</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">Unknown</p>
                            </div>
                        </div>




                    </div>

                </div>
                <!-- End Pending Req. Section -->
            </section>
        </div>
    </main>
</template>

<script>

</script>