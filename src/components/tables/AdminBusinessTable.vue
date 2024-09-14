<template>
  <el-card>
    <!-- <el-input v-model="search" placeholder="Search" class="input-with-select" clearable></el-input> -->
    <div class="flex justify-between items-center mb-4">
      <!-- Search Input for Filtering -->
      <el-input v-model="search" class="h-[40px] mr-2" placeholder="Search..." clearable></el-input>

      <!--  Search Button -->
      <button id="searchButton"
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

      <!-- Dropdown menu -->
      <div id="dropdownToggle"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700 dark:divide-gray-600">
        <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownToggleButton">
          <li>
            <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label class="inline-flex items-center w-full cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                  class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600">
                </div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Enable notifications</span>
              </label>
            </div>
          </li>
          <li>
            <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label class="inline-flex items-center w-full cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                  class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600">
                </div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Enable 2FA authentication</span>
              </label>
            </div>
          </li>
          <li>
            <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label class="inline-flex items-center w-full cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                  class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600">
                </div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Subscribe to newsletter</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>


    <el-table :data="filteredItems" style="width: 100%" stripe v-loading="loading" @row-click="handleRowClick" :default-sort="{ prop: 'joined_at', order: 'descending' }">
      <el-table-column class="text-tealGray" prop="name" label="NAME" sortable></el-table-column>
      <el-table-column class="text-tealGray" prop="total_staff" label="TITAL STAFF" sortable></el-table-column>
      <el-table-column class="text-tealGray" prop="admin_staff" label="ADMIN STAFF" sortable></el-table-column>
      <el-table-column class="text-tealGray" prop="non_admin_staff" label="NON ADMIN STAFF" sortable></el-table-column>
      <el-table-column class="text-tealGray" prop="admin_staff" label="ADMIN STAFF" sortable></el-table-column>
      <!-- Joined At Column -->
      <el-table-column class="text-tealGray" prop="joined_at" label="JOINED DATE" sortable>
        <template v-slot="scope">
          <span>{{ formatDate(scope.row.joined_at) }}</span>
        </template>
      </el-table-column>
        <!-- Actions Column -->
        <!-- <el-table-column label="Actions">
          <template v-slot="scope">
            <el-dropdown>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click.native="viewDetails(scope.row)">View Details</el-dropdown-item>
                  <el-dropdown-item @click.native="editRecord(scope.row)">Edit Record</el-dropdown-item>
                  <el-dropdown-item @click.native="manageMembers(scope.row)">Manage Members</el-dropdown-item>
                </el-dropdown-menu>
              </template>
              <el-button size="small" class="inline-flex items-center text-sm ml-2">
                <svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
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
        </el-table-column> -->
    </el-table>

    <el-pagination v-model:current-page="options.page" :page-size="options.itemsPerPage" :total="totalItems"
      layout="prev, pager, next" @current-change="handlePageChange"></el-pagination>
  </el-card>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { useFetch } from '#app';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

const router = useRouter();
const search = ref('');
const items = ref([]);
const totalItems = ref(0);
const options = ref({
  page: 1,
  itemsPerPage: 10,
});
const loading = ref(false);
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

// Function to fetch data from the server
const fetchData = async () => {
  loading.value = true;
  try {
    const per_page_items = options.value.itemsPerPage;
    const current_page = options.value.page;
    const search_term = search.value; // Get the search term

    // Fetch data from the server with pagination and search parameters
    const dataSets = await $adminService.list_business(current_page, per_page_items);

    // Update the table data
    items.value = dataSets.data; // Data for the current page
    totalItems.value = dataSets.total; // Total number of items across all pages
    options.value.page = dataSets.current_page; // Current page
    options.value.itemsPerPage = dataSets.per_page; // Items per page
  } catch (error) {
    console.error('Error fetching data:', error.message);
  } finally {
    loading.value = false;
  }
};

// Watch pagination options and search term to refetch data
watch([options, search], () => {
  fetchData();
}, { immediate: true });

// On mount, fetch the initial data
onMounted(() => {
  fetchData();
});

// Handle search submission
const applySearch = () => {
  options.value.page = 1; // Reset to first page on new search
  fetchData();
};

// Handle page change
const handlePageChange = (newPage) => {
  options.value.page = newPage;
  fetchData();
};

// Format date function
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const filteredItems = computed(() => {
  if (!search.value) return items.value;

  return items.value.filter(item =>
    item.name.toLowerCase().includes(search.value.toLowerCase()) ||
    (item.bio && item.bio.toLowerCase().includes(search.value.toLowerCase()))
  );

  // Paginate items
  const start = (options.value.page - 1) * options.value.itemsPerPage
  const end = start + options.value.itemsPerPage
  return filtered.slice(start, end)
});


// Function to navigate to view details
const viewDetails = (row) => {
  router.push({
    path: '/business/businessGeneral',
    query: {
      action: 'view',
     business_id: row.id
    }
  });
};

// Function to navigate to edit record
const editRecord = (row) => {
  router.push({
    path: '/business/businessGeneral',
    query: {
      action: 'edit',
      business_id: row.id
    }
  });
};

const manageMembers = (row) => {
  router.push({
    path: '/business/businessMembers',
    query: {
      action: 'manage',
      business_id: row.id
    }
  });
};

const handleRowClick = (row) => {
  editRecord(row);
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