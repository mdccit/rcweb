<!-- <template>
    <div>
        <nav class="bg-clearwhite drop-shadow-md border-b border-b-poloBlue">
            <div class="grid grid-cols-12 px-4 h-14">
                <div class="col-span-2 ">
                    <img class="w-32" src="@/assets/css/images/logo-recruited.png" alt="logo-recruited">
                </div>
                <div class="col-span-3">
                    <div
                        class="border border-b-poloBlue border-poloBlue rounded-3xl bg-graySnowDrift w-75 h-8 mt-2.5">
                        <div class="flex">
                            <div class="flex-auto w-96">
                                <span class="pl-3.5 text-ceil">Search</span>
                            </div>
                            <div class="flex-auto w-8 pt-1.5">
                                <span class="flex"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="steelBlue" class="size-4">
                                        <path
                                            d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
                                    </svg></span>
                            </div>
                            <div class="flex-auto w-8 pt-1.5">
                                <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="steelBlue"
                                        class="size-4">
                                        <path fill-rule="evenodd"
                                            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                            clip-rule="evenodd" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-5">
                    <div class="flex justify-end">
                        <div class="py-1 px-7">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="steelBlue"
                                    class="size-5 justify-end">
                                    <path
                                        d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                    <path
                                        d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                </svg>
                            </div>
                            <span class="text-xs  text-steelBlue">HOME</span>
                        </div>
                        <div class="py-1 px-7">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="steelBlue" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                            </div>
                            <span class="text-xs  text-steelBlue">RESOURCES</span>
                        </div>
                        <div class="py-1 px-7">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="steelBlue" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                            </div>
                            <span class="text-xs  text-steelBlue">NETWORK</span>
                        </div>
                        <div class="py-1 px-7">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="steelBlue" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                            </div>
                            <span class="text-xs  text-steelBlue">CHAT</span>
                        </div>
                        <div class="py-1 px-7">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="steelBlue" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </div>
                            <span class="text-xs text-steelBlue">NOTICES</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 flex">
                    <div class="p-2">
                        <img class="w-10 h-10 rounded-lg border border-white shadow-lg"
                            src="https://via.placeholder.com/150" alt="Profile Picture">
                    </div>
                    <div class="p-2">
                        <h6 class="text-sm">Jacob Johnes</h6>
                        <p class="text-xs text-limegreen">Online</p>
                    </div>
                    <button class="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </button>
                </div>
            </div>
        </nav>
    </div>
</template> -->

<template>
    <!-- start header -->
    <header class="fixed top-0 left-0 right-0">
        <!-- start navbar -->
        <nav class="bg-white border-b border-b-poloBlue">
            <section class=" grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 px-4 h-14">
                <!-- start logo section -->
                <div class="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
                    <a href="https://flowbite.com/" class="flex items-center mt-4">
                        <img class="w-96 md:w-32" src="@/assets/user/images/logo-recruited.png" alt="">
                    </a>
                </div>
                <!-- end logo section -->

                <!-- start search & menu section -->
                <div class="col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-3">
                    <div class="flex justify-around pt-2 md:space-x-8">
                        <div class="relative hidden sm:hidden md:block">

                            <input @change="searchkey" v-model="key" type="text" id="search-navbar"
                                class="block w-96 p-2 ps-10 text-sm rounded-full border bg-ceil"
                                style="background-color:#F4F6F9; color:#8CA4CE; border-color: aliceblue;" placeholder="Search...">
                                
                        <button  type="button" class=" absolute inset-y-2.5 end-5 flex ps-3 pointer-events-none cursor-pointer">
                                <span class="mr-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="steelBlue" class="size-4">
                                        <path
                                            d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
                                    </svg></span>
                                <span ><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="steelBlue" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg></span>
                            </button>
                            
                        </div>
                            
                        <ul
                            class="font-medium hidden p-4 md:p-0 mt-4 border sm:hidden  md:hidden lg:flex md:space-x-8  md:mt-0 md:border-0 border-poloBlue">
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white"
                                    aria-current="page">
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="steelBlue"
                                            class="size-5 justify-end  text-steelBlue">
                                            <path
                                                d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                            <path
                                                d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                        </svg>
                                    </div>
                                    <span class="text-xs font-normal text-steelBlue">HOME</span>
                                </a>
                            </li>
                            <!-- <li>
                                <a href="#"
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="steelBlue" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                        </svg>
                                    </div>
                                    <span class="text-xs font-normal text-steelBlue">RESOURCES</span>
                                </a>
                            </li> -->
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 text-periwinkleBluerounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="steelBlue" class="size-5 text-periwinkleBlue">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                        </svg>
                                    </div>
                                    <span class="text-xs font-normal text-periwinkleBlue">NETWORK</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 text-periwinkleBlue rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="steelBlue" class="size-5 text-periwinkleBlue">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>
                                    </div>
                                    <span class="text-xs font-normal text-periwinkleBlue">CHAT</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 text-periwinkleBlue md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="steelBlue" class="size-5 text-periwinkleBlue">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                        </svg>
                                    </div>
                                    <span class="text-xs font-normal text-periwinkleBlue">NOTICES</span>
                                </a>
                            </li>
                        </ul>
                        <!-- <div class="py-1 px-7">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="steelBlue"
                                    class="size-5 justify-end">
                                    <path
                                        d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                    <path
                                        d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                </svg>
                            </div>
                            <span class="text-xs  text-steelBlue">HOME</span>
                        </div>
                        <div class="py-1 px-7">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="steelBlue" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                            </div>
                            <span class="text-xs  text-steelBlue">RESOURCES</span>
                        </div>
                        <div class="py-1 px-7">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="steelBlue" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                            </div>
                            <span class="text-xs  text-steelBlue">NETWORK</span>
                        </div>
                        <div class="py-1 px-7">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="steelBlue" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                            </div>
                            <span class="text-xs  text-steelBlue">CHAT</span>
                        </div>
                        <div class="py-1 px-7">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="steelBlue" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </div>
                            <span class="text-xs text-steelBlue">NOTICES</span>
                        </div> -->
                    </div>
                </div>
                <!-- end search & menu section -->

                <!-- start profile section -->
                <div class="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-1 flex justify-end">
                    <div class="p-2 hidden sm:hidden md:hidden lg:block">
                        <img class="w-10 md:w-10 h-10 rounded-lg border border-white shadow-lg"
                            src="@/assets/user/images/Rectangle_117.png" alt="">
                    </div>
                    <div class="p-2 hidden sm:hidden md:hidden lg:block">
                        <h6 class="text-sm text-black">Jacob Johnes</h6>
                        <p class="text-xs text-limegreen">Online</p>
                    </div>
                    <!-- start mobile view arrow -->
                    <button class="pl-2" d="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-5 text-black">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </button>
                    <div id="dropdownDots"
                        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownMenuIconButton">
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">sample 01</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">sample 2</a>
                            </li>
                        </ul>
                        </div>
                      <!-- end mobile view arrow -->
                </div>
                <!-- end profile section -->
            </section>
        </nav>
        <!-- end navbar -->
    </header>
    <!-- end header -->
</template>

<script setup>
import {ref, defineProps, defineEmits, defineExpose, onMounted,watch} from 'vue';
import { useSearchStore } from '~/stores/searchStore';

const searchStore = useSearchStore();
const key = ref('')
const emit = defineEmits(['search']);

onMounted (()=>{
    key.value =searchStore.searchKey
})

watch(
  () => searchStore.searchKey,
  () => {
    setKey() 
  }
)

  const searchkey= () =>{
    searchStore.setSearchKey(key.value)
    searchStore.setSearchButton(true)

  }

  const setKey = () =>{
    key.value =searchStore.searchKey
  }
</script>
