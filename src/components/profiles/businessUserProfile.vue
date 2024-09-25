<template>
    <main class="flex-1 bg-graySnowDrift overflow-y-auto mt-14">

        <div>
            <!-- start cover photo section -->
            <section class="w-full mb-5">

                <div class="w-full h-[400px] rounded-xl">
                    <img class="w-full h-[400px] rounded-xl" src="@/assets/images/covrss.jpg" alt="">
                </div>

                <span>
                    <div class="-mt-[144px]">
                        <div class="grid grid-cols-5 gap-4 flex">
                            <div class="col-span-2">
                                <div class="grid grid-cols-10">
                                    <div class="col-span-3">
                                        <img class="mx-auto w-[150px] h-[150px] rounded-xl mt-[45px]"
                                            src="@/assets/images/avtar.png" alt="">
                                    </div>
                                    <div class="col-span-7">
                                        <div class="text-left mt-[80px] w-full">
                                            <h2 class="text-lg font-semibold  text-white text-3xl">{{ name }}</h2>
                                            <h5 class=" text-md  text-white font-normal text-black text-primaryblue">
                                                Business user
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center flex"></div>
                            </div>
                            <div class="col-span-2">

                            </div>
                            <div class="col-span-1 mt-[70px]">
                                <div>
                                    <div class="flex">
                                        <div class="">
                                            <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="size-5 text-blue-500 m-auto">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="">
                                            <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="size-5 text-blue-500 m-auto">
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
                        </div>
                        <div class="grid grid-cols-10 gap-4 -mt-[50px]">
                            <div class="col-span-2">
                                <div></div>
                            </div>
                            <div class="col-span-6 ">


                                <!-- Tab Navigation Component -->
                                <ProfileTabNavigation :tabs="tabs" :initialTab="tab" @tabChanged="handleTab" />

                            </div>
                            <div class="col-span-1">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </span>

            </section>
            <section class="grid gap-4 grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
                <!-- Start Profile pic section  -->
                <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">


                    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3">
                        <div class="flex items-center justify-between">

                            <div class="flex items-center space-x-4 w-48">

                                <h1 class="text-lg font-semibold mb-4 text-black">Bio</h1>
                            </div>
                        </div>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4">
                            {{ bio }}
                        </p>
                    </div>
                </div>
                <!-- End Profile pic section  -->

                <!-- Start post Section -->
                <div class="col-span-5 sm:col-span-3 md:col-span-5 lg:col-span-2 xl:col-span-3">
                    <!-- <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6">
                        <div class="flex items-center">
                            <img src="@/assets/user/images/businessuser.png" alt=""
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
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
                        <div class="flex items-start space-x-4">
                            <div class="flex-1">
                                <div class="flex items-center justify-between">

                                    <div class="flex items-center space-x-4">
                                        <img src="@/assets/user/images/businessuser.png" alt=""
                                            class="rounded-lg w-12 h-12 mr-4">
                                        <div class="text-darkSlateBlue">
                                            <div class="text-lg font-semibold text-black">Jerome Bell</div>
                                            <div class="flex items-center space-x-2 ">
                                                <div class="bg-mintGreen p-1 rounded">
                                                    <img src="@/assets/user/images/man-medal.png" alt=""
                                                        class=" w-4 h-4">
                                                </div>
                                                <div class="text-sm ml-2 text-gray">
                                                    <p>1 hour ago</p>
                                                </div>
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
                            <img src="@/assets/user/images/businessuser.png" alt="User Image"
                                class="w-12 h-12 rounded-lg">
                            <div class="relative  w-full ">
                                <input type="text" placeholder="Write your comment..."
                                    class="text-ceil bg-culturedBlue w-full rounded-xl py-2 px-4 focus:outline-none focus:border-blue-500">
                                <span class="absolute inset-y-0 right-0 flex items-center pl-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6 text-ceil pr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0WE 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
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

                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
                        <div class="flex items-start space-x-4">
                            <div class="flex-1">
                                <div class="flex items-center justify-between">

                                    <div class="flex items-center space-x-4 text-black">
                                        <img src="@/assets/user/images/businessuser.png" alt=""
                                            class="rounded-lg w-12 h-12 mr-4">
                                        <div class="text-darkSlateBlue">
                                            <div class="text-lg font-semibold text-black">Jerome Bell</div>
                                            <div class="flex items-center space-x-2 ">
                                                <div class="bg-mintGreen p-1 rounded">
                                                    <img src="@/assets/user/images/man-medal.png" alt=""
                                                        class=" w-4 h-4">
                                                </div>
                                                <div class="text-sm ml-2">
                                                    <p>4 hour ago</p>
                                                </div>
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
                                    <img src="@/assets/user/images/Rectangle 128.png" alt=""
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
                                    <img style="margin-bottom: 42px;" src="@/assets/user/images/Rectangle_117.png"
                                        alt="" class="rounded-lg w-12 h-12 mr-4">
                                    <div>
                                        <div class="text-lg font-semibold text-black">Kristin Watson</div>
                                        <div class="flex items-center space-x-2">
                                            <div class="text-darkSlateBlue text-sm">15 min ago</div>
                                        </div>
                                        <p class="text-darkSlateBlue text-base mt-2">Lorem ipsum is a placeholder text
                                            commonly used to demonstrate the visual form of a document or a typeface
                                            without relying on meaningful content.</p>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-4 mt-4">
                                    <img style="margin-bottom: 42px;" src="@/assets/user/images/businessuser.png"
                                        alt="" class="rounded-lg w-12 h-12 mr-4">
                                    <div>
                                        <div class="text-lg font-semibold text-black">Kristin Watson</div>
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
                            <img src="@/assets/user/images/businessuser.png" alt="User Image"
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
                    </div>-->
                    <!-- Posts section -->
                    <UserFeed v-if="tab == 'feed'" :posts="posts" />
                    <!-- Posts section End -->
                    <!-- Members section -->
                    <Connection v-if="tab == 'connection'" :members="members" />
                    <!-- Member section End -->
                                        
                     <!-- Media Gallery Section -->
                     <mediaGalleryComponent v-if="tab === 'media'" :galleryItems="galleryItems" />        

                </div>
                <!-- End post Section -->

                <!-- Start UTR Section -->
                <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">
                    <div
                        class="h-[80px] card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 h-auto">
                        <div class="">

                            <div class="">

                                <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto text-center mb-3">{{
                                    position }} with </p>
                                <div class="... text-center">
                                    <img class="mx-auto w-[85px] h-[85px] rounded-[20px] mb-3"
                                        src="@/assets/user/images/whitter collage.png" alt="">
                                    <p class="text-black text-sm text-center font-normal mb-3 w-[200px] mx-auto">
                                        <b>ICSA (Intercollegiate Soccer Association)</b></p>
                                    <p class="text-steelBlue text-sm text-center  mb-3">Business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <!-- End Pending Req. Section -->
            </section>
        </div>
    </main>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import Connection from '~/components/user/profile/connection.vue';
import UserFeed from '~/components/user/profile/userFeed.vue';

import ProfileTabNavigation from '~/components/profiles/navigation/ProfileTabNavigation.vue';
import mediaGalleryComponent from '~/components/profiles/media/mediaGalleryComponent.vue';

// Access authService from the context
const nuxtApp = useNuxtApp();
const $publicService = nuxtApp.$publicService;
const $userService = nuxtApp.$userService;
const $feedService = nuxtApp.$feedService;

const bio = ref('');
const country = ref('');
const position = ref('');
const name = ref('');
const role = ref('');
const business = ref('');
const connections = ref([]);
const posts = ref([]);

// Tabs data
const tabs = ref([
    { name: 'feed', label: 'Post' },
    { name: 'connection', label: 'Connections' },
    { name: 'media', label: 'Media' }
]);

// The default active tab
const tab = ref('feed');

// Function to handle tab change
const handleTab = (selectedTab) => {
    tab.value = selectedTab;
};

// Array of gallery items (images and video)
const galleryItems = ref([
    {
        type: 'image',
        href: 'https://lipsum.app/id/46/1600x1200',
        src: 'https://lipsum.app/id/46/200x150',
    },
    {
        type: 'image',
        href: 'https://lipsum.app/id/47/1600x1200',
        src: 'https://lipsum.app/id/47/200x150',
    },
    {
        type: 'image',
        href: 'https://lipsum.app/id/51/1600x1200',
        src: 'https://lipsum.app/id/51/200x150',
    },
    {
        type: 'video',
        href: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
]);

onMounted(() => {
    fetchCoacheDatils();
    fetchConnections();
    fetchPost();

});

const fetchCoacheDatils = async () => {
    try {
        const dataSets = await $publicService.get_business_user('ra');
        bio.value = dataSets.user_basic_info.bio
        //  country.value =dataSets.user_address_info.country
        position.value = dataSets.business_manager_info.position
        name.value = dataSets.user_basic_info.display_name
        role.value = dataSets.user_basic_info.user_role
        business.value = dataSets.business_manager_info.business_name

    } catch (error) {
        console.log(error)
        console.error('Error fetching data:', error.message);
    }
}

const fetchConnections = async () => {
    try {
        const dataSets = await $userService.get_connection('9cf182dd-aff5-43b7-a3ed-4c693b9530c3');
        connections.value = dataSets.connection
    } catch (error) {
        console.log(error)
        c
        onsole.error('Error fetching data:', error.message);
    }
}

const fetchPost = async () => {
    try {
        const response = await $feedService.list_posts({});
        posts.value = response || [];

    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

</script>