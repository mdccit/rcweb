<template>

  <el-card>
    <!-- Search Input and Buttons -->
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
              <label for="">Role </label>
              <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                <select @change="fetchData" name="role"  v-model="role" 
                  class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                  <option value=""> - </option>
                  <option value="verified"> Verified </option>
                  <option value="not_verified"> Pending Verified </option>
                </select>
              </div>
            </div>
            <div class="mb-3">
              <label for="">Has Admin </label>
              <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                <select name="filter-role" v-model="hasAdmin"  @change="fetchData"
                  class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                  <option value=""> - </option>
                  <option value="has_admins"> Has Admin </option>
                  <option value="no_admins"> No Admin </option>
                </select>
              </div>
            </div>
            <div class="mb-3">
              <label for="">GOV ID </label>
              <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                <select name="filter-role" v-model="govId"  @change="fetchData"
                  class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                  <option value=""> - </option>
                  <option value="connected_to_school"> Connected to school </option>
                  <option value="not_connected_to_school"> Not Connected to school </option>
                </select>
              </div>
            </div>
            <div class="mb-3">
              <label for="">Coords Lat </label>
              <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                <select name="filter-role"  v-model="coordLat"  @change="fetchData"
                  class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                  <option value=""> - </option>
                  <option value="has_coordinates">  Has Coordinates -- synced  </option>
                  <option value="no_coordinates">  No Coordinates -- not synced  </option>
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

    <!-- Data Table -->
    <el-table :data="filteredItems" style="width: 100%" stripe  v-loading="loading" class="cursor-pointer min-h-[350px]"  @row-click="handleRowClick" :default-sort="{ prop: 'joined_at', order: 'descending' }">
      <!-- Display Name Column -->
      <el-table-column class="tealGaray" prop="name" label="DISPLAY NAME" sortable></el-table-column>


      <!-- Teams Column -->
      <el-table-column class="tealGaray" prop="teams_count" label="Teams" sortable>
        <template v-slot="scope">
          {{ scope.row.teams_count !== null ? scope.row.teams_count : 0 }}
        </template>
      </el-table-column>

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
      <el-table-column prop="joined_at" label="JOINED DATE" sortable>
        <template v-slot="scope">
          <span class="tealGaray">{{ formatDate(scope.row.joined_at) }}</span>
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
const role =ref("");
const hasAdmin =ref("");
const govId =ref("");
const coordLat =ref("");
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
    console.log(role.value)
    const data ={
      role:role.value,
      admin:hasAdmin.value,
      govId:govId.value,
      coordLat:coordLat.value
    }
    console.log(11)
    console.log(data)
    // Fetch data from the server with pagination and search parameters
    const dataSets = await $adminService.list_schools(current_page, per_page_items, search_term,data);
    // Update the table data
    items.value = dataSets; // Data for the current page
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
      school_id: row.id
    }
  });
};

// Function to navigate to edit record
const editRecord = (row) => {
  router.push({
    path: '/school/schoolGeneralDetails',
    query: {
      action: 'edit',
      school_id: row.id
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
