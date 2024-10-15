<template>
  <el-card>
    <div class="flex justify-between items-center mb-4">
      <!-- Search Input for Filtering -->
      <el-input v-model="search" class="h-[40px] mr-2 focus:border-none" placeholder="Search..." clearable></el-input>

      <!--  Search Button -->
      <!-- <button id="searchButton" @click="applySearch"
        class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 p-2 border rounded h-[40px] mr-1 mx-auto"
        type="button">
        <span class=" mx-auto">Search</span>
      </button> -->
      <div class="relative inline-block text-left">

        <button type="button" aria-haspopup="true" id="dropdownButton" data-dropdown-toggle="dropdowntable"
          class="text-white bg-gray-200 hover:bg-gray-300 focus:ring-4 p-2 border rounded h-[40px] w-[50px] mr-1 ">
          <svg xmlns="http://www.w3.org/2000/svg" :class="filterApply ==true ?'active-filter h-5 w-5 text-gray-400 mx-auto':'h-5 w-5 text-gray-400 mx-auto'" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <!-- Dropdown Menu -->
        <div id="dropdowntable"
          class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 hidden p-3 table-filter-dropDown">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

            <div class="mb-3">
              <label for="text-sm">Role </label>
              <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                <select name="filter-role" @change="fetchData" v-model="hasAdmin"
                  class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                  <option value=""> - </option>
                  <option value="has_admins"> Has Admin </option>
                  <option value="no_admins"> No Admin </option>
                </select>
              </div>
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


    <el-table :data="filteredItems" style="width: 100%" stripe v-loading="loading" class="cursor-pointer min-h-[350px]"
      @row-click="handleRowClick" :default-sort="{ prop: 'joined_at', order: 'descending' }">
      <el-table-column class="text-tealGray" prop="name" label="NAME" sortable></el-table-column>
      <!-- <el-table-column class="text-tealGray" prop="total_staff" label="TITAL STAFF" sortable></el-table-column>
      <el-table-column class="text-tealGray" prop="admin_staff" label="ADMIN STAFF" sortable></el-table-column>
      <el-table-column class="text-tealGray" prop="non_admin_staff" label="NON ADMIN STAFF" sortable></el-table-column>
      <el-table-column class="text-tealGray" prop="admin_staff" label="ADMIN STAFF" sortable></el-table-column> -->

      <!-- Total Members Column -->
      <el-table-column class="tealGaray" prop="total_members" label="Total Members" sortable>
        <template v-slot="scope">
          {{ scope.row.total_members !== null ? scope.row.total_members : 0 }}
        </template>
      </el-table-column>

      <!-- Editor Column -->
      <el-table-column class="tealGaray" prop="editors" label="Admin Members" sortable>
        <template v-slot="scope">
          {{ scope.row.editors !== null ? scope.row.editors : 0 }}
        </template>
      </el-table-column>

      <!-- Viewer Column -->
      <el-table-column class="tealGaray" prop="viewers" label="NON Admin Members" sortable>
        <template v-slot="scope">
          {{ scope.row.viewers !== null ? scope.row.viewers : 0 }}
        </template>
      </el-table-column>

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
import { useFlowbite } from '~/composables/useFlowbite';

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
const hasAdmin = ref("");
const filterApply = ref(false)
// Function to fetch data from the server
const fetchData = async () => {
  loading.value = true;
  try {
    const per_page_items = options.value.itemsPerPage;
    const current_page = options.value.page;
    const search_term = search.value; // Get the search term

    // Fetch data from the server with pagination and search parameters
    const dataSets = await $adminService.list_business(current_page, per_page_items, hasAdmin.value);

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
  filterView()
};

const filterView = () =>{


  filterApply.value = false;
   
   if(hasAdmin.value != ''){
    filterApply.value = true;
   }

  
   if( hasAdmin.value == '' ){
    filterApply.value = false;
   }

   console.log(filterApply.value)
}

// Watch pagination options and search term to refetch data
watch([options, search], () => {
  fetchData();
}, { immediate: true });

// On mount, fetch the initial data
onMounted(() => {
  fetchData();

  useFlowbite(() => {
      initFlowbite();
  })
});

// Expose the fetchData method
const refreshTable = () => {
    fetchData();
};

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
.active-filter{
  color: #0085FF !important;
}
</style>