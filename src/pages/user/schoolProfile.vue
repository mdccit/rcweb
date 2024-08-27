<template>
    <main class="flex-1 bg-graySnowDrift overflow-y-auto mt-5">
        <div>
            <!-- start cover photo section -->
            <section class="w-full mb-5">
                
                <div class="w-full h-[400px] rounded-xl">
                    <img class="w-full h-[400px] rounded-xl"
                    src="../../assets/user/images/porter-raab-gnj9vj--FRY-unsplash.jpg " alt="">   
                </div> 
                
                <span>
                    <div class="-mt-[144px]">
                        <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">

                            <div
                                class="grid gap-4 grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
                                <div class="text-center">
                                    <img class="mx-auto w-[200px] h-[200px] rounded-xl"
                                        src="../../assets/user/images/whittier.png" alt="">
                                </div>
                                <div class="">
                                    <div class="text-left mt-[70px] ">
                                        <h2 class="text-lg font-semibold  text-white text-3xl">Whittier Collage</h2>
                                        <h5 class=" text-md  text-white font-normal text-black text-primaryblue">School
                                        </h5>
                                    </div>
                                </div>
                                <div class="">
                                </div>
                                <div class="">
                                </div>
                                <div class="mt-[70px]">
                                    <div class="text-right mr-5">

                                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300
                             font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600
                              dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-normal">Follow
                                        </button>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </span>

            </section>
            <section class="grid gap-4 grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
                <!-- Start Profile pic section  -->
                <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">
                    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mb-4">
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

                    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3">
                        <div class="flex items-center justify-between">

                            <div class="flex items-center space-x-4 w-48">

                                <h1 class="text-lg font-semibold mb-4 text-black">Acedemics</h1>
                            </div>
                        </div>
                        <p class="text-xs text-darkSlateBlue leading-loose mb-4 ">
                            <span
                                class="bg-blue-100 font-light text-blue-800 text-xs  me-2 px-2.5 py-0.5 rounded rounded-full bg-blue-500 text-white ">
                                Health
                            </span>
                            <span
                                class="bg-blue-100 font-light text-blue-800 text-xs  me-2 px-2.5 py-0.5 rounded rounded-full bg-blue-500 text-white ">
                                Business Marketing
                            </span>
                            <br>
                            <span
                                class="bg-blue-100 font-light text-blue-800 text-xs  me-2 px-2.5 py-0.5 rounded rounded-full bg-blue-500 text-white ">
                                Computer engineering
                            </span>
                        </p>
                    </div>
                </div>
                <!-- End Profile pic section  -->

                <!-- Start post Section -->
                <div class="col-span-5 sm:col-span-3 md:col-span-5 lg:col-span-2 xl:col-span-3">
                    <!--start card 01 -->
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green"
                                        class="size-4">
                                        <path
                                            d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                        <path fill-rule="evenodd"
                                            d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <span class="text-green pl-1.5">Event</span>
                                </button>
                            </div>
                            <button class="bg-steelBlue text-white px-8 py-2 rounded-lg text-sm">Post</button>
                        </div>
                    </div>
                    <!--end card 01 -->

                    <!--start card 02 -->
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
                        <div class="flex items-start space-x-4">
                            <div class="flex-1">
                                <div class="flex items-center justify-between">

                                    <div class="flex items-center space-x-4">
                                        <img src="../../assets/user/images/Rectangle 193.png" alt=""
                                            class="rounded-lg w-12 h-12 mr-4">
                                        <div>
                                            <div class="text-lg font-semibold text-black">Jane Cooper</div>
                                            <div class="flex items-center space-x-2">

                                                <img class="" src="../../assets/user/images/Group 89.png" alt="">


                                                <div class="text-gray-500 text-sm">1 hour ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="justify-end">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="steelBlue" class="size-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                            </svg>
                                        </button>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor"
                                                class="size-5 text-periwinkleBlue">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                                <p class="mt-4 text-darkSlateBlue text-base">
                                    Whittier College is actively searching for players for the 2024-2025 season!
                                    Whittier College is located in sunny Southern California, 25 minutes from Downtown
                                    Los Angeles, 25 minutes from Orange County/Disneyland, and 30 minutes from the
                                    beach. We are a nationally ranked liberal arts school for academics, value, and for
                                    a transformative experience.
                                </p>
                                <a href="#" class="text-steelBlue hover:underline mt-2 block">Show more...</a>
                                <div class="flex items-center justify-between mt-4">
                                    <div class="flex items-center space-x-4">
                                        <button
                                            class="flex items-center space-x-1 transition duration-0 hover:duration-150">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>

                                            <span class="text-darkSlateBlue">100</span>
                                        </button>
                                        <button class="flex items-center space-x-1 text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                            </svg>

                                            <span class="text-darkSlateBlue">0</span>
                                        </button>
                                        <button class="flex items-center space-x-1 text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                            </svg>

                                            <span class="text-darkSlateBlue">7</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-3 mb-3 text-pigeonBlue">
                        <div class="mt-4 flex items-start space-x-4">
                            <img src="../../assets/user/images/Rectangle 193.png" alt="User Image"
                                class="w-12 h-12 rounded-lg">
                            <div class="relative  w-full ">
                                <input type="text" placeholder="Write your comment..."
                                    class="text-ceil bg-culturedBlue w-full rounded-xl py-2 px-4 focus:outline-none focus:border-blue-500">
                                <span class="absolute inset-y-0 right-0 flex items-center pl-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6 text-ceil pr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="size-6 text-ceil pr-2">
                                        <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                                        <path fill-rule="evenodd"
                                            d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                            clip-rule="evenodd" />
                                    </svg>

                                </span>
                            </div>
                        </div>
                    </div>
                    <!--end card 02 -->

                    <!--start card 03 -->
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
                        <div class="flex items-start space-x-4">
                            <div class="flex-1">
                                <div class="flex items-center justify-between">

                                    <div class="flex items-center space-x-4">
                                        <img src="../../assets/user/images/Rectangle 193.png" alt=""
                                            class="rounded-lg w-12 h-12 mr-4">
                                        <div>
                                            <div class="text-lg font-semibold">Jane Cooper</div>
                                            <div class="flex items-center space-x-2">
                                                <div class="bg-mintGreen p-1 rounded">
                                                    <img src="../../assets/user/images/man-medal.png" alt=""
                                                        class=" w-4 h-4">
                                                </div>
                                                <div class="text-sm ml-2">4 hour ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="justify-end">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="size-5 text-periwinkleBlue">
                                                <path fill-rule="evenodd"
                                                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                                                    clip-rule="evenodd" />
                                            </svg>

                                        </button>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor"
                                                class="size-5 text-periwinkleBlue">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                                <p class="mt-4 text-darkSlateBlue text-base">
                                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                                    document or a typeface without relying on meaningful content.
                                </p>
                                <div class="relative w-82 h-82 pt-4">
                                    <img src="../../assets/user/images/Rectangle 128.png" alt=""
                                        class="rounded-lg mr-4 w-full h-full object-cover">
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-20 text-ceil pr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                        </svg>
                                    </div>
                                </div>

                                <div class="flex items-center justify-between mt-4">
                                    <div class="flex items-center space-x-4">
                                        <button class="flex items-center space-x-1 text-red-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>

                                            <span class="text-darkSlateBlue">100</span>
                                        </button>
                                        <button class="flex items-center space-x-1 text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                            </svg>

                                            <span class="text-darkSlateBlue">0</span>
                                        </button>
                                        <button class="flex items-center space-x-1 text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                            </svg>

                                            <span class="text-darkSlateBlue">7</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-4 mt-3">
                                    <img style="margin-bottom: 42px;" src="../../assets/user/images/Rectangle 117.png"
                                        alt="" class="rounded-lg w-12 h-12 mr-4">
                                    <div>
                                        <div class="text-lg font-semibold">Kristin Watson</div>
                                        <div class="flex items-center space-x-2">
                                            <div class="text-darkSlateBlue text-sm">15 min ago</div>
                                        </div>
                                        <p class="text-darkSlateBlue text-base mt-2">Lorem ipsum is a placeholder text
                                            commonly used to demonstrate the visual form of a document or a typeface
                                            without relying on meaningful content.</p>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-4 mt-4">
                                    <img style="margin-bottom: 42px;" src="../../assets/user/images/Rectangle 117.png"
                                        alt="" class="rounded-lg w-12 h-12 mr-4">
                                    <div>
                                        <div class="text-lg font-semibold">Kristin Watson</div>
                                        <div class="flex items-center space-x-2">
                                            <div class="text-darkSlateBlue text-sm">2 min ago</div>
                                        </div>
                                        <p class="text-darkSlateBlue text-base mt-2">Lorem ipsum is a placeholder text
                                            commonly used to demonstrate the visual form of a document or a typeface
                                            without relying on meaningful content.</p>
                                    </div>
                                </div>


                                <a href="#" class="text-steelBlue hover:underline mt-2 block">Show all comments...</a>
                            </div>
                        </div>
                        <hr class="mt-3 mb-3 text-pigeonBlue">
                        <div class="mt-4 flex items-start space-x-4">
                            <img src="../../assets/user/images/Rectangle 117.pn" alt="User Image"
                                class="w-12 h-12 rounded-lg">
                            <div class="relative  w-full ">
                                <input type="text" placeholder="Write your comment..."
                                    class="text-ceil bg-culturedBlue w-full rounded-xl py-2 px-4 focus:outline-none focus:border-blue-500">
                                <span class="absolute inset-y-0 right-0 flex items-center pl-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6 text-ceil pr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="size-6 text-ceil pr-2">
                                        <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                                        <path fill-rule="evenodd"
                                            d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                            clip-rule="evenodd" />
                                    </svg>

                                </span>
                            </div>
                        </div>
                    </div>
                    <!--end card 03 -->


                    <!--end card 04 -->
                </div>
                <!-- End post Section -->

                <!-- Start UTR Section -->
                <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-blue-500 p-3">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="">
                                <h2 class="text-lg font-semibold mb-4 pl-3">Tennis info</h2>
                            </div>
                            <div class="">
                                <h2 class="text-lg font-semibold mb-4"></h2>
                            </div>
                            <div class="pl-3">
                                <p class="text-lg font-semibold mb-4 text-sm font-thin">Division</p>
                                <p class="text-lg font-semibold mb-4 text-sm font-thin">Conference</p>
                                <p class="text-lg font-semibold mb-4 text-sm font-thin">Average UTR</p>

                            </div>
                            <div class="">
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">Unknown</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">Unknown</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">Unknown</p>
                            </div>
                        </div>
                        <p class=" pl-3 text-lg font-semibold mb-4 text-xs font-thin">Score information is provided by
                            the school.</p>
                    </div>

                    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3">
                        <div class="flex items-center justify-between">

                            <div class="flex items-center space-x-4 w-48">

                                <h1 class="text-lg font-semibold mb-4 text-black">Info</h1>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6 text-black ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                            </div>

                            <p class="text-xs text-black leading-relaxed mb-4  ml-2 ">
                                Location
                                <br><span class="text-sm text-darkSlateBlue"> New pura , Belgium</span>

                            </p>
                        </div>
                        <div class="flex">
                            <div class="text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>


                            </div>

                            <p class="text-xs text-black leading-relaxed mb-4  ml-2 ">
                                Tuition (In-of-State)
                                <br><span class="text-sm text-darkSlateBlue"> $45,000 per year</span>

                            </p>
                        </div>
                        <div class="flex">
                            <div class="text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>


                            </div>

                            <p class="text-xs text-black leading-relaxed mb-4  ml-2 ">
                                Tuition (Out-of-State)
                                <br><span class="text-sm text-darkSlateBlue"> $55,000 per year</span>

                            </p>
                        </div>
                        <div class="flex">
                            <div class="text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <p class="text-xs text-black leading-relaxed mb-4  ml-2 ">
                                Cost of Attendance
                                <br><span class="text-sm text-darkSlateBlue"> $25,000 per year</span>

                            </p>
                        </div>
                        <div class="flex">
                            <div class="text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>

                            </div>
                            <p class="text-xs text-black leading-relaxed mb-4  ml-2 ">
                                Graduation Rate
                                <br><span class="text-sm text-darkSlateBlue">65%</span>

                            </p>
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