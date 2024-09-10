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
    <el-table :data="filteredItems" style="width: 100%" v-loading="loading"  @row-click="handleRowClick" :default-sort="{ prop: 'joined_at', order: 'descending' }">
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
