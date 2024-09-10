<template>

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

      <button class="text-white bg-gray-200 hover:bg-gray-300 focus:ring-4 p-2 border rounded h-[40px] w-[50px] mr-1 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mx-auto" viewBox="0 0 20 20" fill="currentColor">
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
    <el-table :data="filteredItems" style="width: 100%" v-loading="loading"  @row-click="handleRowClick"  :default-sort="{ prop: 'joined_at', order: 'descending' }">
      <!-- Display Name Column -->
      <el-table-column prop="display_name" label="Display Name" sortable></el-table-column>

      <!-- Email Column -->
      <el-table-column prop="email" label="Email" sortable></el-table-column>

      <!-- User Role Column -->
      <el-table-column prop="user_role" label="User Role" sortable>
        <template v-slot="scope">
          <span class="" :class="scope.row.user_role == 'Coach' ? 'text-black' : 'text-blue-500'">


            <svg v-if="scope.row.user_role == 'Coach'" class="w-5 h-5 inline mr-1" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0"></path>
              <path d="M10.5 11h2.5l-1.5 5"></path>
            </svg>
            <svg v-if="scope.row.user_role == 'Business Manager'" class="w-5 h-5 inline mr-1"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21l18 0"></path>
              <path d="M9 8l1 0"></path>
              <path d="M9 12l1 0"></path>
              <path d="M9 16l1 0"></path>
              <path d="M14 8l1 0"></path>
              <path d="M14 12l1 0"></path>
              <path d="M14 16l1 0"></path>
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
            </svg>

            <svg v-if="scope.row.user_role == 'Player'" class="w-5 h-5 inline mr-1" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
              <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
            </svg>

            <svg v-if="scope.row.user_role == 'Parent'" class="w-5 h-5 inline mr-1" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg>

            {{ scope.row.user_role }}</span>
        </template>
      </el-table-column>

      <!-- Joined At Column -->
      <el-table-column prop="joined_at" label="Joined Date" sortable>
        <template v-slot="scope">
          <span>{{ formatDate(scope.row.joined_at) }}</span>
        </template>
      </el-table-column>

      <!-- Last Seen At Column -->
      <el-table-column prop="last_seen_at" label="Last Seen At" sortable>
        <template v-slot="scope">
          <span>{{ scope.row.last_seen_at ? formatDate(scope.row.last_seen_at) : 'Never' }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Actions">
        <template v-slot="scope">
          <!-- Select Record Button -->
          <!-- <button @click="viewDetails(scope.row)"
            class="text-white bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
              <path stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button> -->

          <!-- Dropdown Menu -->
          <el-dropdown>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click.native="viewDetails(scope.row)">View Details</el-dropdown-item>
                <el-dropdown-item @click.native="editRecord(scope.row)">Edit Record</el-dropdown-item>
              </el-dropdown-menu>
            </template>

            <!-- Dropdown Button with Left Margin and Dropdown Icon -->
            <el-button size="small" class="inline-flex items-center text-sm ml-2 border-b-0 bg-blue-500">
              <svg class="w-5 h-5 ml-[12px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 4h2m2 0h.01m1.415 2.585a2 2 0 0 1 0 2.828l-9 9a2 2 0 0 1-1.414.586H4v-3a2 2 0 0 1 .586-1.414l9-9a2 2 0 0 1 2.828 0z" />
              </svg>
              <el-icon>
                <i class="el-icon-arrow-down"></i>
              </el-icon>
            </el-button>
          </el-dropdown>



        </template>
      </el-table-column>


      <!-- END TABLE  -->
    </el-table>


    <!-- Pagination -->
    <el-pagination v-model:current-page="options.page" :page-size="options.itemsPerPage" :total="totalItems"
      layout="prev, pager, next" @current-change="handlePageChange">
    </el-pagination>
  </el-card>
</template>

<script setup>
import { ref, watch, computed, onMounted, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

const emit = defineEmits(['open-modal']);
const router = useRouter();
const search = ref('');
const items = ref([]);
const totalItems = ref(0);
const options = ref({
  page: 1,
  itemsPerPage: 10,  // 10 items per page
});
const loading = ref(false);
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

// Fetch data from the API
const fetchData = async () => {
  loading.value = true
  try {
    const users = await $adminService.list_users();
    items.value = users;
    totalItems.value = users.length
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

// Watch options and search to update filtered items
watch([options, search], fetchData, { immediate: true })

onMounted(fetchData)

const filteredItems = computed(() => {
  let filtered = items.value;

  if (search.value) {
    filtered = filtered.filter(item =>
      item.display_name.toLowerCase().includes(search.value.toLowerCase()) ||
      item.email.toLowerCase().includes(search.value.toLowerCase()) ||
      item.user_role.toLowerCase().includes(search.value.toLowerCase())
    );
  }

  // Paginate items
  const start = (options.value.page - 1) * options.value.itemsPerPage;
  const end = start + options.value.itemsPerPage;
  return filtered.slice(start, end);
});


const viewDetails = (row) => {
  router.push({
    path: '/admin/userAccountDetails',
    query: {
      action: 'view',
      userId: row.id
    }
  });
};

const editRecord = (row) => {
  router.push({
    path: '/admin/userAccountDetails',
    query: {
      action: 'edit',
      userId: row.id
    }
  });
};

const handleRowClick = (row) => {
  editRecord(row);
};

const handlePageChange = (newPage) => {
  options.value.page = newPage
}
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>

<script>
export default {
  name: 'EPDataTable'
}
</script>

<style scoped>
.el-card {
  padding: 20px;
}

.input-with-select {
  width: 300px;
  margin-bottom: 20px;
}
</style>
