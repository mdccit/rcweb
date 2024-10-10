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
                    <h2 class="font-bold text-lg self-center text-black"> Transcript </h2>
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

    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <el-card>

            <!-- Search Input and Buttons -->
            <div class="flex justify-between items-center mb-4">
                <!-- Search Input for Filtering -->
                <el-input v-model="search" class="h-[40px] mr-2" placeholder="Search..." clearable></el-input>

                <button type="button" aria-haspopup="true" id="dropdownButton" data-dropdown-toggle="dropdowntable"
                    class="text-white bg-gray-200 hover:bg-gray-300 focus:ring-4 p-2 border rounded h-[40px] w-[50px] mr-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mx-auto" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <!-- Dropdown Menu -->
                <div id="dropdowntable"
                    class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 hidden p-3">
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

                        <div class="mb-3">
                            <label for="">Status </label>
                            <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                                <select name="filter-role" v-model="role" @change="fetchData"
                                    class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                                    <option value=""> - </option>
                                    <option value="2"> A.I.Ferified </option>
                                    <option value="5"> A.I.Faild </option>
                                    <option value="4"> Pending </option>
                                    <option value="6"> Manual </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <button
        class="text-white bg-gray-200 hover:bg-gray-300 focus:ring-4 p-2 border rounded h-[40px] w-[50px] mr-1 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mx-auto" viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"></path>
        </svg>
    </button> -->

            </div>

            <!-- Data Table -->
            <el-table :default-sort="{ prop: 'joined_at', order: 'descending' }">
                <!-- Display Name Column -->
                <el-table-column prop="display_name" label="DISPLAY NAME" sortable></el-table-column>

                <!-- Email Column -->
                <el-table-column prop="email" label="EMAIL" sortable class="truncate-text" show-overflow-tooltip>
                    <template v-slot="scope">
                        <span class="truncate-text show-overflow-tooltip">email</span>
                    </template>

                </el-table-column>

                <!-- User Role Column -->
                <el-table-column prop="user_role" label="FILE NAME" sortable>
                    <template v-slot="scope">
                        <span class="">
                            role</span>
                    </template>
                </el-table-column>

                <!-- Joined At Column -->
                <el-table-column prop="joined_at" label="STATE" sortable>
                    <template v-slot="scope">
                        <span>date</span>
                        <p class="text-sm text-darkSlateBlue mb-4 flex">
                            <span class="text-green-500 mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="size-5">
                                    <path fill-rule="evenodd"
                                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            A.I. Verified
                        </p>
                        <p class="text-sm text-darkSlateBlue mb-4 flex">
                            <span class="text-green-500 mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="size-5">
                                    <path fill-rule="evenodd"
                                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            A.I. Faild
                        </p>
                        <p class="text-sm text-darkSlateBlue mb-4 flex">
                            <span class="text-green-500 mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="size-5">
                                    <path fill-rule="evenodd"
                                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            Peniding
                        </p>
                        <p class="text-sm text-darkSlateBlue mb-4 flex">
                            <span class="text-green-500 mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="size-5">
                                    <path fill-rule="evenodd"
                                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            Manual
                        </p>


                    </template>
                </el-table-column>

                <!-- Last Seen At Column -->
                <el-table-column prop="last_seen_at" label="ACTIONS" sortable>
                    <template v-slot="scope">
                        <button dusk="splade-confirm-confirm" type="button"
                            class=" w-[100px] inline-flex justify-center rounded-md border bg-red-500 border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2  sm:text-sm">
                            Action
                        </button>
                        <button dusk="splade-confirm-confirm" type="button"
                            class=" w-[100px] inline-flex justify-center rounded-md border bg-red-500 border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2  sm:text-sm">
                            Action
                        </button>
                    </template>
                </el-table-column>

                <!-- END TABLE  -->
            </el-table>


            <!-- Pagination -->
            <el-pagination layout="prev, pager, next">
            </el-pagination>
        </el-card>
    </div>



    <!-- status change modal -->
<!-- 
    <div v-if="visible" class="relative z-index-220" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Change
                                   State</h3>
                                <div class="mt-2 w-full">   
                        
                                    <div class="w-full mt-3">
                                        <label class="block mb-1 text-gray-700 font-sans"> Select State
                                            <span aria-hidden="true" class="text-red-600"
                                                title="This field is optional"></span>
                                        </label>
                                        <select
                                            class="lock pt-1 text-black h-12 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                                            <option value="">Manual</option>
                                        </select>
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button"
                            class="inline-flex w-full justify-center rounded-md bg-steelBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            :disabled="loading">Save
                            changes
                            <svg v-if="loading" aria-hidden="true" role="status"
                                class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg></button>
                        <button type="button"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div> -->


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