<template>
  <el-card>
    <!-- <el-input v-model="search" placeholder="Search" class="input-with-select" clearable></el-input> -->
    <div class="p-1 text-right">
      <!-- <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
          class="text-white mr-2 bg-blue-100 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
              d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
          </svg>
  
        </button> -->
      <button class="text-white bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 border rounded h-[40px] w-[50px] mr-1 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mx-auto" viewBox="0 0 20 20"
          fill="currentColor">
          <path fill-rule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <button id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle"
        class="text-white bg-gray-200 hover:bg-gray-300  border rounded h-[40px] w-[50px] mr-1 mx-auto focus:bg-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mx-auto" viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
          <path fill-rule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clip-rule="evenodd"></path>
        </svg>
      </button>

      <!-- <button id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle"
          class="text-white bg-blue-100 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2"
              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
  
        </button> -->

      <!-- Dropdown menu -->
      <div id="dropdownToggle" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-72">
        <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownToggleButton">
          <li>
            <div class="flex p-2 rounded hover:bg-blue-300">
              <label class="inline-flex items-center w-full cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                  class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 p rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600">
                </div>
                <span class="ms-3 text-sm font-medium text-gray-900">Priority</span>
              </label>
            </div>
          </li>
          <li>
            <div class="flex p-2 rounded hover:bg-gray-100 hover:bg-blue-300">
              <label class="inline-flex items-center w-full cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                  class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 p rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600">
                </div>
                <span class="ms-3 text-sm font-medium text-gray-900">Details</span>
              </label>
            </div>
          </li>
          <li>
            <div class="flex p-2 rounded hover:bg-gray-100 hover:bg-blue-300">
              <label class="inline-flex items-center w-full cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                  class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 p rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600">
                </div>
                <span class="ms-3 text-sm font-medium text-gray-900">Status</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>


    <el-table :data="filteredItems" style="width: 100%" stripe v-loading="loading" @row-click="handleRowClick">
      <el-table-column prop="priority" label="PRIORITY" sortable></el-table-column>
      <el-table-column prop="joined_at" label="DETAILS" sortable>
        <template v-slot="scope">
          <span>User Creation - Needs Approval</span>
        </template>
      </el-table-column>
      <el-table-column prop="joined_at" label="STATUS" sortable>
        <template v-slot="scope">
          <button dusk="splade-confirm-confirm" type="button"
            class=" w-[100px] inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2  sm:text-sm"
            :class="scope.row.is_closed ? 'bg-gray-300 hover:bg-gray-500' : 'bg-red-500 hover:bg-red-700'">

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

const moderationStore = useModerationStore();
definePageMeta({
  colorMode: 'light',
})
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
    const dataSets = await $adminService.morderation_all();
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
  let filtered = items.value;

  

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
</style>