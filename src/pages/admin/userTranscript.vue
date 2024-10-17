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
                    <h2 class="font-bold text-lg self-center text-black"> Editing: f d </h2>
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

    <div class="py-6">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 text-black">
            <div class="flex gap-x-4">
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
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 opacity-50">
                        Danger Zone </button></NuxtLink>
                <NuxtLink to="/admin/users/9c9ad039-6106-40d6-92de-b5c7556b05a7/danger-zone"><button
                        class="text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-200 bg-gray-200">
                        Transcript </button></NuxtLink>
            </div>
        </div>
    </div>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <el-card>

            <!-- Search Input and Buttons -->
            <div class="flex justify-between items-center mb-4">
                <!-- Search Input for Filtering -->
                <el-input v-model="search" class="h-[40px] mr-2" placeholder="Search..." clearable></el-input>

                <button
                    class="text-white bg-gray-200 hover:bg-gray-300 focus:ring-4 p-2 border rounded h-[40px] w-[50px] mr-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mx-auto" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>

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
                <el-table-column prop="user_role" label="USER ROLE" sortable>
                    <template v-slot="scope">
                        <span class="">
                            role</span>
                    </template>
                </el-table-column>

                <!-- Joined At Column -->
                <el-table-column prop="joined_at" label="JOINED DATE" sortable>
                    <template v-slot="scope">
                        <span>date</span>
                    </template>
                </el-table-column>

                <!-- Last Seen At Column -->
                <el-table-column prop="last_seen_at" label="TRANSCRIPT NAME" sortable>
                    <template v-slot="scope">
                        <span>date</span>
                    </template>
                </el-table-column>

                <!-- END TABLE  -->
            </el-table>


            <!-- Pagination -->
            <el-pagination layout="prev, pager, next">
            </el-pagination>
        </el-card>
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
