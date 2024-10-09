<template>
    <header class="bg-gray-200">
        <div class="bg-white rounded-lg"></div>
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <div class="flex items-center gap-4">
                    <NuxtLink to="/admin/users"><svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg></NuxtLink>
                    <h2 class="font-bold text-lg self-center text-black"> Transcript Details</h2>
                </div>
                <div class="">
                    <NuxtLink to="/app/u/9c9ad039-6106-40d6-92de-b5c7556b05a7"><button type="submit"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                            View <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 7l-10 10"></path>
                                <path d="M8 7l9 0l0 9"></path>
                            </svg></button></NuxtLink>
                </div>
            </div>
        </div>
    </header>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 text-black">
            <div class="flex gap-x-4 mb-6">
                <NuxtLink to="/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Account Details </button></NuxtLink>
                <NuxtLink to="/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/player/profile"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Profile </button></NuxtLink>
                <NuxtLink to="/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/player/media"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50"> Media
                    </button></NuxtLink>
                <NuxtLink to="/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/connections"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Connections </button></NuxtLink>
                <NuxtLink to="/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/lists"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50"> Lists
                    </button></NuxtLink>
                <NuxtLink to="/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/danger-zone"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200">
                       Transcript </button></NuxtLink>
                <NuxtLink to="/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/danger-zone"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Danger Zone </button></NuxtLink>
            </div>
            <div class="bg-white p-10 rounded-lg">
                <h3 class="font-semibold text-xl mb-2 text-black">Your transcription files</h3>
                <p class="text-sm text-darkSlateBlue mb-4"> Manage your transcription files effortlessly. Whether you
                    want
                    to
                    view, remove, or download, everything is just a click away.</p>

                <div class="flex">
                    <div class="flex-1 ">
                        <div class="card rounded-lg bg-lightGray1 h-[300px] m-2">
                            <div class="flex">
                                <div class="flex-1 p-3">
                                    <div class="card rounded-lg bg-blue-400  h-[270px]"></div>
                                </div>
                                <div class="flex-1 pt-4">
                                    <div class="h-[225px]">
                                        <h3 class="font-semibold text-xl mb-2 text-steelBlue">Transcript</h3>
                                        <p class="text-sm text-darkSlateBlue mb-4">transcript_file_143.pdf</p>
                                        <p class="text-sm text-darkSlateBlue mb-4 flex">
                                            <span class="text-green-500 mr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" class="size-5">
                                                    <path fill-rule="evenodd"
                                                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                            A.I. Verified
                                        </p>
                                    </div>
                                    <div class="">
                                        <div class="w-full pr-4">
                                            <button type="button"
                                                class="focus:outline-none text-white bg-redOrange hover:bg-red-700 focus:ring-4  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full">
                                                Remove</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 ">
                        <div class="card rounded-lg h-[300px] m-2">
                            <div class="bg-steelBlue h-[50px] w-full rounded-lg">
                                <div class="flex h-[50px]">
                                    <div class="flex-1 mx-auto p-3">
                                        <h3 class="text-white font-light">GPA</h3>
                                    </div>
                                    <div class="flex-1 mx-auto p-3">
                                        <div class="mx-auto">
                                            <h3 class="text-white bg-steelBlueLight79 text-center rounded-lg h-[25px]">
                                                4.0021
                                            </h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>


</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/stores/userStore'
import AdminUserCreateModal from '~/components/admin/user/adminUserCreateModal.vue';
import AdminUserLogoutSession from '~/components/admin/user/adminUserLogoutSession.vue';
import AdminUserDelete from '~/components/admin/user/adminUserDelete.vue';
import Notification from '~/components/common/Notification.vue';
import { useRouter } from 'vue-router';

definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>