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
          <svg xmlns="http://www.w3.org/2000/svg"
            :class="filterApply == true ? 'active-filter h-5 w-5 text-gray-400 mx-auto' : 'h-5 w-5 text-gray-400 mx-auto'"
            viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <!-- Dropdown Menu -->
        <!-- <div id="dropdowntable"
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
          </div> -->
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
      :default-sort="{ prop: 'joined_at', order: 'descending' }">

      <el-table-column class="tealGaray" prop="title" label="TITLE" sortable>
        <template v-slot="scope">

        </template>
      </el-table-column>


      <el-table-column class="tealGaray" prop="created_at" label="CREATE DATE" sortable>
        <template v-slot="scope">
          {{ getTimeAgo(scope.row.created_at) }}
        </template>
      </el-table-column>


      <!-- <el-table-column class="tealGaray" prop="viewers" label="ACTION" sortable>
          <template v-slot="scope">
           
          </template>
        </el-table-column> -->

      <!-- Actions Column -->
      <el-table-column label="Actions">
        <template v-slot="scope">

          <button class="mr-[10px]" @click.native="editRecord(scope.row)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue"
              class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </button>

          <button  @click.native="deleteRecord(scope.row)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red"
              class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination v-model:current-page="options.page" :page-size="options.itemsPerPage" :total="totalItems"
      layout="prev, pager, next" @current-change="handlePageChange"></el-pagination>
  </el-card>
  <adminResourceDelete :isVisible="showModal" @close="showModal = false" :resourceId="resourceId"
    @setData="fetchData" />
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { useFetch } from '#app';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import { useFlowbite } from '~/composables/useFlowbite';
import adminResourceDelete from '~/components/admin/user/adminResourceDelete.vue';

const router = useRouter();
const search = ref('');
const items = ref([]);
const totalItems = ref(0);
const showModal = ref(false)
const resourceId = ref('')

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
    const dataSets = await $adminService.get_resource();

    // Update the table data
    items.value = dataSets.dataSets; // Data for the current page
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

const filterView = () => {


  filterApply.value = false;

  if (hasAdmin.value != '') {
    filterApply.value = true;
  }


  if (hasAdmin.value == '') {
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


;

// Function to navigate to edit record
const editRecord = (row) => {
  router.push({
    path: '/admin/resourcesEdit',
    query: {
      action: 'edit',
      resource_id: row.id
    }
  });
};

const deleteRecord = (row) => {

  resourceId.value = row.id
  showModal.value = true
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


const getTimeAgo = (date) => {
  const secondsAgo = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(secondsAgo / 31536000);
  if (interval >= 1) return interval === 1 ? '1 year ago' : `${interval} years ago`;
  interval = Math.floor(secondsAgo / 2592000);
  if (interval >= 1) return interval === 1 ? '1 month ago' : `${interval} months ago`;
  interval = Math.floor(secondsAgo / 604800);
  if (interval >= 1) return interval === 1 ? '1 week ago' : `${interval} weeks ago`;
  interval = Math.floor(secondsAgo / 86400);
  if (interval >= 1) return interval === 1 ? '1 day ago' : `${interval} days ago`;
  interval = Math.floor(secondsAgo / 3600);
  if (interval >= 1) return interval === 1 ? '1 hour ago' : `${interval} hours ago`;
  interval = Math.floor(secondsAgo / 60);
  if (interval >= 1) return interval === 1 ? '1 minute ago' : `${interval} minutes ago`;
  return secondsAgo === 1 ? '1 second ago' : `${secondsAgo} seconds ago`;
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

.active-filter {
  color: #0085FF !important;
}
</style>