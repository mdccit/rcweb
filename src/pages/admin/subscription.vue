<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8 mb-3">
            <h2 class="font-bold text-lg self-center text-black"> Subscription</h2>

            <div class=""></div>
        </div>
        <el-card>

<!-- Search Input and Buttons -->
<div class="flex justify-between items-center mb-4">
    <!-- Search Input for Filtering -->
    <el-input v-model="search" class="h-[40px] mr-2" placeholder="Search..." clearable></el-input>

    <!--  Search Button -->
    <button id="searchButton" @click="applySearch"
        class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 p-2 border rounded h-[40px] mr-1 mx-auto"
        type="button">
        <span class=" mx-auto">Search</span>
    </button>

    <button
        class="text-white bg-gray-200 hover:bg-gray-300 focus:ring-4 p-2 border rounded h-[40px] w-[50px] mr-1 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mx-auto" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clip-rule="evenodd"></path>
        </svg>
    </button>
    <button
        class="text-white bg-gray-200 hover:bg-gray-300 focus:ring-4 p-2 border rounded h-[40px] w-[50px] mr-1 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mx-auto" viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"></path>
        </svg>
    </button>

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
    <el-table-column prop="last_seen_at" label="LAST PAYMENT" sortable>
        <template v-slot="scope">
            <span>date</span>
        </template>
    </el-table-column>

    <!-- END TABLE  -->
</el-table>


<!-- Pagination -->
<el-pagination
    layout="prev, pager, next">
</el-pagination>
</el-card>
    </div>
    
</template>

<style scoped>
.container {
    max-width: 600px;
}
</style>


<script setup>
import { ref } from 'vue';
import AdminUserTable from '~/components/tables/AdminUserTable.vue';
import AdminUserCreateModal from '~/components/admin/user/adminUserCreateModal.vue';
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore();

definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});

</script>