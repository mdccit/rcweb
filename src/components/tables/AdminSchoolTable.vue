<template>

  <el-card>

    <!-- Search Input and Buttons -->
    <div class="flex justify-between items-center mb-4">
      <!-- Search Input for Filtering -->
      <el-input v-model="search" placeholder="Search..." clearable></el-input>

      <!--  Search Button -->
      <button id="searchButton" @click="applySearch"
        class="text-white bg-blue-100 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button">
        <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
            d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
        </svg>
        <span class="ml-1">Search</span>
      </button>


    </div>

    <!-- Data Table -->
    <el-table :data="filteredItems" style="width: 100%" v-loading="loading">
      <!-- Display Name Column -->
      <el-table-column prop="name" label="Display Name" sortable></el-table-column>

      <!-- Bio Column -->
      <el-table-column prop="bio" label="Bio" sortable></el-table-column>

      <!-- Is Verified Column -->
      <el-table-column prop="is_verified" label="Is Verified" sortable>
        <template v-slot="scope">
          <span>{{ scope.row.is_verified ? 'Yes' : 'No' }}</span>
        </template>
      </el-table-column>

      <!-- Approved Column -->
      <el-table-column prop="is_approved" label="Approved" sortable>
        <template v-slot="scope">
          <span>{{ scope.row.is_approved ? 'Yes' : 'No' }}</span>
        </template>
      </el-table-column>


      <!-- Joined At Column -->
      <el-table-column prop="joined_at" label="Joined Date" sortable>
        <template v-slot="scope">
          <span>{{ formatDate(scope.row.joined_at) }}</span>
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
                <el-dropdown-item @click.native="manageStaff(scope.row)">Manage Staff</el-dropdown-item>
                <!-- <el-dropdown-item divided @click.native="deleteRecord(scope.row)">Delete Record</el-dropdown-item> -->
              </el-dropdown-menu>
            </template>

            <!-- Dropdown Button with Left Margin and Dropdown Icon -->
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
      </el-table-column>


      <!-- END TABLE  -->
    </el-table>


    <!-- Pagination -->
    <el-pagination v-model:current-page="options.page" :page-size="options.itemsPerPage" :total="totalItems"
      layout="prev, pager, next" @current-change="handlePageChange" />

  </el-card>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
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
    const dataSets = await $adminService.list_schools(current_page, per_page_items, search_term);

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
});

// Function to navigate to view details
const viewDetails = (row) => {
  router.push({
    path: '/school/schoolGeneralDetails',
    query: {
      action: 'view',
      userId: row.id
    }
  });
};

// Function to navigate to edit record
const editRecord = (row) => {
  router.push({
    path: '/school/schoolGeneralDetails',
    query: {
      action: 'edit',
      userId: row.id
    }
  });
};

const manageStaff = (row) => {
  router.push({
    path: '/school/schoolStaff',
    query: {
      action: 'manage',
      school_id: row.id
    }
  });
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
