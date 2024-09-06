<template>
    <el-card>
      <!-- <el-input v-model="search" placeholder="Search" class="input-with-select" clearable></el-input> -->
      <div class="p-1 text-right">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
          class="text-white mr-2 bg-blue-100 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
              d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
          </svg>
  
        </button>
  
        <button id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle"
          class="text-white bg-blue-100 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2"
              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
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
                  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Priority</span>
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
                  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Details</span>
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
                  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Status</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
  
  
      <el-table :data="items" style="width: 100%" v-loading="loading" @row-click="handleRowClick">
        <el-table-column  prop="priority" label="Priority" sortable></el-table-column>
        <el-table-column  prop="joined_at" label="Details" sortable>
            <template v-slot="scope">
                <span>User Creation - Needs Approval</span>
           </template>
        </el-table-column>
        <el-table-column  prop="joined_at" label="Status" sortable>
            <template v-slot="scope">
                <button  dusk="splade-confirm-confirm" type="button"
                   class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm bg-blue-500 hover:bg-blue-700 focus:ring-primary-500">
                   {{ scope.row.is_closed ? "Closed":"Open" }}
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
      const dataSets = await $adminService.morderation_all(current_page, per_page_items);
      // Update the table data
      items.value = dataSets.data; // Data for the current page
    
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