<template>
  <el-card>
    <div class="flex justify-between items-center mb-4">
    <!-- Search Input for Filtering -->
    <el-input v-model="search" class="h-[40px] mr-2 focus:border-none" placeholder="Search" clearable></el-input>

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
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 hidden p-3 table-filter-dropDown">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

          <div class="mb-3">
            <label for="text-sm">Status </label>
            <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
              <select name="filter-role" v-model="status" @change="fetchData"
                class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                <option value=""> - </option>
                <option value="open"> Open </option>
                <option value="close"> Close </option>
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

    <el-table :data="filteredItems" style="width: 100%" stripe v-loading="loading" @row-click="handleRowClick"
      class="cursor-pointer min-h-[350px]" :default-sort="{ prop: 'created_at', order: 'descending' }">
      <el-table-column prop="priority" label="PRIORITY" sortable></el-table-column>
      <!-- <el-table-column style="display: none;" prop="display_name" label="Display Name" sortable></el-table-column> -->

      <el-table-column prop="joined_at" label="DETAILS" sortable>
        <template v-slot="scope">
          <span>User Creation - Needs Approval</span>
        </template>
      </el-table-column>
      <el-table-column prop="created_at" label="STATUS" sortable>
        <template v-slot="scope">
          <button dusk="splade-confirm-confirm" type="button"
            class=" w-[100px] inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2  sm:text-sm"
            :class="scope.row.is_closed ? 'bg-gray-300' : 'bg-steelBlue'">

            {{ scope.row.is_closed ? "Closed" : "Open" }}
          </button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination v-model:current-page="options.page" :page-size="options.itemsPerPage" :total="totalItems"
      layout="prev, pager, next" @current-change="handlePageChange"></el-pagination>
  </el-card>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { useFetch } from '#app';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import { useModerationStore } from '~/stores/moderation';
import { useFlowbite } from '~/composables/useFlowbite';

const moderationStore = useModerationStore();
const status = ref('')
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
const handleRowClick = (row) => {
  viewDetails(row);
};
// Function to fetch data from the server
const fetchData = async () => {
  loading.value = true;
  try {
    const per_page_items = options.value.itemsPerPage;
    const current_page = options.value.page;
    const search_term = search.value; // Get the search term
    
    // Fetch data from the server with pagination and search parameters
    const dataSets = await $adminService.morderation_all(status.value);
    // Update the table data
    items.value = dataSets; // Data for the current page
    totalItems.value = dataSets.length
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
  useFlowbite(() => {
      initFlowbite();
  })
});



// Handle page change
const handlePageChange = (newPage) => {
  options.value.page = newPage;
  // fetchData();
};

// Format date function
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const filteredItems = computed(() => {
  // let filtered = items.value;

  if (!search.value) return items.value;

return items.value.filter(item =>
  item.priority.toLowerCase().includes(search.value.toLowerCase()) ||
  (item.display_name && item.display_name.toLowerCase().includes(search.value.toLowerCase())) ||
  (item.email && item.email.toLowerCase().includes(search.value.toLowerCase()))
);

  // Paginate items
  const start = (options.value.page - 1) * options.value.itemsPerPage;
  const end = start + options.value.itemsPerPage;
  return filtered.slice(start, end);
});


// Function to navigate to view details
const viewDetails = (row) => {
  moderationStore.setModeration(row);

  router.push({
    path: '/admin/moderationRequest',
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
.active-filter{
  color: #0085FF !important;
}
</style>