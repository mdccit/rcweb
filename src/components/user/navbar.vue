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
    <header class="fixed top-0 left-0 right-0 bg-white border-b border-b-poloBlue border-opacity-23 py-3">
        <div class="container-compressed">
            <div class="grid grid-cols-6 gap-4">
                <div class="flex items-center">
                    <NuxtLink to="/app"><img class="w-96 md:w-32" src="@/assets/images/logo-recruited.png" alt="">
                    </NuxtLink>
                </div>

                <div class="col-span-4">
                    <div class="flex justify-between items-center space-x-3">

                        <div class="relative hidden sm:hidden md:block basis-1/2">
                            <input type="text"
                                class="w-full text-darkSlateBlue bg-culturedBlue placeholder-ceil rounded-full border-0 focus:ring focus:ring-offset-2 focus:ring-steelBlue focus:ring-opacity-50 transition py-2 ps-4 pe-12"
                                placeholder="Search...">
                            <div class="absolute right-0 top-0 bottom-0 flex items-center pe-4 space-x-2">
                                <!-- <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="steelBlue" class="size-4">
                                        <path
                                            d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
                                    </svg></span> -->
                                <span><svg
                                        class="w-4 h-4 stroke-periwinkleBlue cursor-pointer hover:stroke-steelBlue transition-all"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 20 20">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg></span>
                            </div>
                        </div>


                        <ul
                            class="font-medium hidden p-4 md:p-0 mt-4 border sm:hidden  md:hidden lg:flex items-center md:space-x-8  md:mt-0 md:border-0 border-poloBlue">
                            <li>
                                <NuxtLink to="/"
                                    class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white group"
                                    aria-current="page">
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            class="size-5 stroke-periwinkleBlue fill-none group-hover:fill-steelBlue group-hover:stroke-steelBlue transition stroke-1.25">
                                            <path
                                                d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                            <path
                                                d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                        </svg>

                                    </div>
                                    <span
                                        class="text-xs font-normal text-periwinkleBlue group-hover:text-steelBlue transition uppercase">Home</span>
                                </NuxtLink>
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
                                <NuxtLink to="/"
                                    class="block py-2 px-3 text-periwinkleBluerounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent group">
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            class="size-5 fill-none stroke-periwinkleBlue group-hover:fill-steelBlue group-hover:stroke-steelBlue transition stroke-1.25">
                                            <path fill-rule="evenodd"
                                                d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                                                clip-rule="evenodd" />
                                            <path
                                                d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                        </svg>

                                    </div>
                                    <span
                                        class="text-xs font-normal text-periwinkleBlue group-hover:text-steelBlue transition uppercase">Network</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/"
                                    class="block py-2 px-3 text-periwinkleBlue rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent group">
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            class="size-5 fill-none stroke-periwinkleBlue group-hover:fill-steelBlue group-hover:stroke-steelBlue transition stroke-1.75">
                                            <path fill-rule="evenodd"
                                                d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <span
                                        class="text-xs font-normal text-periwinkleBlue group-hover:text-steelBlue transition uppercase">Chat</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/"
                                    class="block py-2 px-3 text-periwinkleBlue md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent group">
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            class="size-5 fill-none stroke-periwinkleBlue group-hover:fill-steelBlue group-hover:stroke-steelBlue transition stroke-1.75">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                        </svg>
                                    </div>
                                    <span
                                        class="text-xs font-normal text-periwinkleBlue group-hover:text-steelBlue transition uppercase">Notices</span>
                                </NuxtLink>
                            </li>
                        </ul>

                    </div>
                </div>

                <div class="flex justify-end">

                    <div class="flex space-x-3">
                        <div class="flex space-x-2 items-center">
                            <div class="hidden sm:hidden md:hidden lg:block">
                                <img class="w-10 h-10 rounded-lg border border-white shadow-lg"
                                    src="@/assets/user/images/Rectangle_117.png" alt="">
                            </div>
                            <div class="hidden sm:hidden md:hidden lg:block">
                                <h6 class="text-sm text-black max-w-24 truncate">{{ loggedUserMail }}</h6>
                                <p class="text-xs text-limegreen">Online</p>
                            </div>
                        </div>

                        <button data-dropdown-toggle="dropdownUser" data-dropdown-placement="bottom-end" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="size-5 text-black stroke-1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>

                        <!-- Dropdown menu -->
                        <div id="dropdownUser"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul v-if="userRole === 'admin'" class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownUserAvatarButton">
                                <li>
                                    <NuxtLink @click="gotoAdminDashboard"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Admin Dashboard</NuxtLink>
                                </li>
                            </ul>
                            <div class="py-2">
                                <NuxtLink  @click="logout"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Sign out</NuxtLink>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    <!-- end header -->
</template>

<script setup>
import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore();
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;

const router = useRouter();
// Get the user's role from the store
const userRole = userStore.getRole();

const loggedUserMail = computed(() => userStore.loggedUserEmail);

const logout = async (event) => {
    event.preventDefault();

    try {

        const token = localStorage.getItem('token');  // Retrieve the token from local storage

        if (!token) {
            // userStore.clearUser();  // Clear user data if no token is found
            //nuxtApp.$notification.triggerNotification('You have been logged out.', 'success');
            // Use a timeout to display the notification before redirecting to login
            setTimeout(() => {
                router.push('/login');  // Redirect to login
            }, 2000);  // 2-second delay

            return;
        } else {
            // Call the logout API if the token exists
            const response = await $authService.logout({
                bearer_token: token
            });

            console.log(response);
            if (response.status === 200) {
                //nuxtApp.$notification.triggerNotification(response.display_message, 'success');
                userStore.clearUser(); 
                setTimeout(() => {
                    router.push('/login');
                }, 2000);
            } else {
              
                // nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
                setTimeout(() => {
                    router.push('/login');
                }, 2000);
            }
        }
        } catch (err) {
        if (err.response && err.response.status === 401) {
            // Handle 401 error and redirect to login
            nuxtApp.$notification.triggerNotification('Session expired. Please log in again.', 'failure');
            userStore.clearUser();  // Clear user data
            setTimeout(() => {
                router.push('/login');  // Redirect to login on 401 error
            }, 2000);  // 2-second delay
        } else {
            // For other errors
            nuxtApp.$notification.triggerNotification(err.display_message || 'An error occurred.', 'failure');
            setTimeout(() => {
                router.push('/login');  // Ensure redirection to login even on other errors
            }, 2000);  // 2-second delay
        }
        nuxtApp.$notification.triggerNotification(err.display_message, 'failure');
        setTimeout(() => {
            router.push('/login');  // Ensure redirection to login even on error
        }, 2000);  // 2-second delay
    }
};

const gotoAdminDashboard = async (event) => {
    event.preventDefault();
    router.push('/admin/dashboard');
}


// initialize components based on data attribute selectors
onMounted(() => {

    useFlowbite(() => {
        initFlowbite();
    })
})
</script>