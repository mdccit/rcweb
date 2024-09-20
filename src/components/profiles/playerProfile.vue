<template>
    <main class="flex-1 bg-graySnowDrift overflow-y-auto mt-14">
        <div>
            <section class="grid gap-4 grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
                <!-- Start Profile pic section  -->
                <div class="col-span-5 sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">

                    <div class="group">
                        <div class="text-center">
                            <div class="w-[200px] h-[200px] relative">
                                <img class="mx-auto w-[200px] h-[200px] rounded-xl"
                                    src="../../assets/user/images/Rectangle 193.png" alt="">
                                <div
                                    class="absolute top-0 right-0 m-2 rounded-lg flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6 bg-white p-[3px] rounded-md">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </div>
                            </div>

                            <h3 class="text-lg font-semibold text-center text-black">{{ name }}</h3>
                            <h5 class="text-normal text-md text-center text-black text-primaryblue">Tennis player</h5>
                        </div>
                    </div>



                    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-4 w-48 grid grid-cols-10">
                                <h1 class="text-lg font-semibold mb-4 text-black col-span-8">Bio</h1>
                                <h1 class="text-lg font-semibold mb-4 text-black col-span-2">
                                    <div class="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </div>
                                </h1>
                            </div>
                        </div>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4">
                            {{ bio }}
                        </p>
                    </div>

                    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-4 w-48 grid grid-cols-10">
                                <h1 class="text-lg font-semibold mb-4 text-black col-span-8"></h1>
                                <h1 class="text-lg font-semibold mb-4 text-black col-span-2">
                                    <div class="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </div>
                                </h1>
                            </div>
                        </div>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b>{{ city }} , {{ country
                                }}</b> </p>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2">
                            <b>{{ Number(feet.toFixed(2)) }} ( {{ heigth }} cm)</b>
                        </p>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2">
                            <b>{{ Number(pounds.toFixed(1)) }}lb ({{ weight }} kg)</b>
                        </p>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b>Graduation {{
                            graduationDate }}</b> </p>
                        <p class="text-xs text-darkSlateBlue leading-relaxed mb-4  ml-2"> <b>{{ birthday }} Years Old
                            </b> </p>
                    </div>

                    <div style="height: 70px;"
                        class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3 h-auto">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="...">
                                <img class="mx-auto w-[45px] h-[45px] rounded-xl "
                                    src="@/assets/user/images/Group 179.png" alt="">
                            </div>
                            <div class="col-span-2 ...">
                                <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3">Has {{ budgetMin }} -
                                    {{ budgetMax }}
                                </p>

                            </div>
                        </div>

                    </div>

                    <div style="height: 70px;"
                        class=" card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white p-3 mt-3 h-auto">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="...">
                                <img class="mx-auto w-[45px] h-[45px] rounded-xl"
                                    src="@/assets/user/images/Group 79.png" alt="">
                            </div>
                            <div class="col-span-2 ...">
                                <p class="text-xs text-darkSlateBlue leading-relaxed mx-auto mt-3">Signed up {{ joinDate
                                    }}
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
                <!-- End Profile pic section  -->

                <!-- Start post Section -->

                <div class="col-span-5 sm:col-span-3 md:col-span-5 lg:col-span-2 xl:col-span-3 mb-5">

                    <!-- Tab Navigation Component -->
                    <PlayerTabNavigation :tabs="tabs" :initialTab="tab" @tabChanged="handleTab" />

                    <!--start card 01 -->
                    <!-- <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-5">
                        <div class="flex items-center">
                            <img src="@/assets/user/images/Rectangle 193.png" alt=""
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
                    </div> -->
                    <!--end card 01 -->
                    <!-- Posts section -->
                    <UserFeed v-if="tab == 'feed'" :posts="posts" />
                    <!-- Posts section End -->

                    <!--start card 02 -->
                    <!-- <div class="flex">
                        <div class="flex-1 p-2">

                            <div class="bg-white p-4 border rounded-2xl">
                                <div class=" grid grid-cols-12 gap-4">
                                    <div class="col-span-3">
                                        <img class=" rounded-2xl w-[85px] h-[85px]"
                                            src="@/assets/user/images/Rectangle 193.png" alt="Neil image">
                                    </div>
                                    <div class="col-span-6">
                                        <h4 class="text-black font-normal">Ronald Richards</h4>
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-mintGreen p-1 rounded">
                                                <img src="@/assets/user/images/man-medal.png" alt=""
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
                                            src="@/assets/user/images/Rectangle 193.png" alt="Neil image">
                                    </div>
                                    <div class="col-span-6">
                                        <h4 class="text-black font-normal">Ronald Richards</h4>
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-blue-200 p-1 rounded">
                                                <img src="@/assets/images/player-blue.png" alt="" class=" w-4 h-4">
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



                    </div> -->






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
                                                src="@/assets/user/images/Rectangle 193.png" alt="Neil image">
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
                    <Connection v-if="tab == 'connection'" :connections="connections" />
                    <!--start card 03 -->

                    <!-- Media Gallery Section -->
                    <div v-if="tab === 'media'" class="media-gallery grid">
                        <a v-for="(item, index) in galleryItems" :key="index" data-fancybox="gallery" :href="item.href"
                            class="media-item">
                            <img v-if="item.type === 'image'" class="rounded w-full" :src="item.src" />
                            <video v-if="item.type === 'video'" class="rounded w-full" controls>
                                <source :src="item.src" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </a>
                    </div>


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
                                <button @click="connectAcceptOrConnect"
                                    class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                    {{ connectionButtonName }}
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
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-4 w-48 grid grid-cols-10">
                                <h1 class="text-lg font-semibold mb-4 text-black col-span-8"></h1>
                                <h1 class="text-lg font-semibold mb-4 text-black col-span-2">
                                    <div class="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </div>
                                </h1>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="">
                                <h2 class="text-lg font-semibold mb-4">UTR score</h2>
                            </div>
                            <div class="">
                                <h2 class="text-lg font-semibold mb-4">{{ utr }}</h2>
                            </div>
                            <div class="">
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">GPA</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">SAT Score</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">TOEFL Score</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">ATP Ranking</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">ITF Ranking</p>
                            </div>
                            <div class="">
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">{{ gpa }}</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">{{ sat }}</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">{{ toefl }}</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">{{ atp }}</p>
                                <p class="text-lg font-semibold mb-4 text-sm text-normal">{{ itf }}</p>
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
import { useUserStore } from '~/stores/userStore';
import PlayerTabNavigation from '~/components/profiles/navigation/PlayerTabNavigation.vue';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Access authService from the context
const nuxtApp = useNuxtApp();
const $publicService = nuxtApp.$publicService;
const $userService = nuxtApp.$userService;
const $feedService = nuxtApp.$feedService;
const userStore = useUserStore()

const bio = ref('');
const country = ref('');
const city = ref('');
const heigth = ref('');
const weight = ref('');
const graduationDate = ref('');
const birthday = ref('');
const budgetMin = ref('')
const budgetMax = ref('')
const name = ref('')
const joinDate = ref('')
const utr = ref(0)
const gpa = ref("Unknown")
const sat = ref("Unknown")
const toefl = ref("Unknown")
const atp = ref("Unknown")
const itf = ref("Unknown")
const feet = ref(0)
const pounds = ref(0)
const connections = ref([])
const posts = ref([])
const connectionStatus = ref(false)
const connectionType = ref(null)
const connectionButtonName = ref('Connect')
const userId = ref('')
const plyerSlug = ref('')
const plyerId = ref('')

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});

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


onMounted(() => {
     userId.value = userStore.user.user_id
     plyerSlug.value = props.user.user_basic_info.slug
     plyerId.value = props.user.user_basic_info.id
     
    fetchUserDatils();
    fetchConnections();
    fetchPost();
    fetchCheckConnection();
    fetchMediaGallery();


});

const fetchUserDatils = async () => {
    try {
       const dataSets = await $publicService.get_player(plyerSlug.value);
       console.log(dataSets)
        bio.value =dataSets.user_basic_info.bio
        country.value =dataSets.user_address_info.country
        city.value =dataSets.user_address_info.city
        heigth.value =dataSets.player_info.height??0
        weight.value =dataSets.player_info.weight??0
        budgetMin.value =dataSets.player_info.other_data.budget_max??''
        budgetMax.value =dataSets.player_info.other_data.budget_min??''
        name.value =dataSets.user_basic_info.display_name
        utr.value =dataSets.player_info.other_data.utr??0
        gpa.value =dataSets.player_info.gpa??"Unknown"
        sat.value =dataSets.player_info.other_data.sat_score ?? "Unknown"
        toefl.value =dataSets.player_info.other_data.toefl_score ?? "Unknown"
        atp.value =dataSets.player_info.other_data.atp_ranking ?? "Unknown"
        itf.value =dataSets.player_info.other_data.itf_ranking ?? "Unknown"

        const parsedDate = new Date(dataSets.player_info.graduation_month_year);
        const options = { year: 'numeric', month: 'long' };
        graduationDate.value = parsedDate.toLocaleDateString('en-US', options);

        const birthDate = new Date(dataSets.user_basic_info.date_of_birth);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        birthday.value = age

        feet.value = dataSets.player_info.height / 30.48;

        pounds.value = 2.20462 * dataSets.player_info.weight

        const date = new Date(dataSets.user_basic_info.joined_at);
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const year = date.getFullYear();
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        joinDate.value = `${year} ${month} ${day}`


    } catch (error) {
        console.log(error)
        console.error('Error fetching data:', error.message);
    }
}

const fetchCheckConnection = async () => {
    try {
        const dataSets = await $userService.get_check_connection_type(plyerId.value);
        connectionStatus.value = dataSets.connection

        if (connectionStatus.value) {
            connectionType.value = dataSets.type

            if ((dataSets.type.connection_status == 'pending') && (dataSets.type.sender_id == userId.value)) {
                connectionButtonName.value = " Invite "
            }

            if ((dataSets.type.connection_status == 'pending') && (dataSets.type.receiver_id == userId.value)) {
                connectionButtonName.value = " Accepted "
            }

            if (dataSets.type.connection_status == 'accepted') {
                connectionButtonName.value = " Connected "
            }

        }

    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

const fetchConnections = async () => {
    try {
        const dataSets = await $userService.get_connection(plyerId.value);
        console.log(dataSets.connection)
        connections.value = dataSets.connection
    } catch (error) {
        console.log(error)
        console.error('Error fetching data:', error.message);
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

const connectAcceptOrConnect = async () => {
    try {
        if (connectionButtonName.value == "Accepted") {
            await $userService.connection_accept(connectionType.value.id, {
                connection_status: "accepted"
            });
        }

        if (connectionButtonName.value == "Connect") {
            await $userService.connection_request({
                receiver_id: plyerId.value
            });
        }

        fetchCheckConnection()

    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}


const fetchMediaGallery = async () => {
    try {
        Fancybox.bind('[data-fancybox="gallery"]', {
            dragToClose: false,

            Toolbar: {
                display: {
                    left: ['close'],
                    middle: [],
                    right: [],
                },
            },

            Images: {
                zoom: false,
            },

            Thumbs: {
                type: 'classic',
            },

            Carousel: {
                transition: false,
                friction: 0,
            },

            on: {
                'Carousel.ready Carousel.change': (fancybox) => {
                    fancybox.container.style.setProperty(
                        '--bg-image',
                        `url("${fancybox.getSlide().thumbSrc}")`
                    );
                },
            },
        });
    } catch (error) {
        console.error('Error fetching media:', error);
    }
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


</script>


<style scoped>
.fancybox__backdrop::after {
    content: '';
    position: absolute;
    width: 10%;
    height: 10%;
    filter: blur(2px);
    left: 50%;
    top: 50%;
    transform: scale(11);
    opacity: 0.3;
    background-image: var(--bg-image);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.fancybox__toolbar {
    padding: 16px;
}

.fancybox__toolbar,
.fancybox__nav {
    --f-button-border-radius: 50%;
    --f-button-bg: rgb(91 78 76 / 64%);
    --f-button-hover-bg: rgb(91 78 76 / 74%);
    --f-button-active-bg: rgb(91 78 76 / 84%);
}

.fancybox__nav {
    --f-button-svg-width: 22px;
    --f-button-svg-height: 22px;
}

.fancybox__thumbs.is-classic {
    --f-thumb-width: 48px;
    --f-thumb-height: 48px;
    --f-thumb-gap: 16px;

    --f-thumb-border-radius: 6px;
    --f-thumb-outline: 0;
}


.media-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 3 items per row */
    gap: 16px;
    /* Add some spacing between items */
    margin-top: 24px;
}

.media-item {
    position: relative;
}

.media-item img,
.media-item video {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>