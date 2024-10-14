<template>
  <el-card>
    <div class="flex justify-between items-center mb-4">
      <!-- Search Input for Filtering -->
      <el-input v-model="search" class="h-[40px] mr-2 focus:border-none" placeholder="Search..." clearable></el-input>

      <!--  Search Button -->
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
    </div>


    <el-table :data="filteredItems" style="width: 100%" stripe v-loading="loading" class="cursor-pointer min-h-[350px]"
      @row-click="handleRowClick" :default-sort="{ prop: 'joined_at', order: 'descending' }">
      <el-table-column class="text-tealGray" prop="name" label="NAME" sortable></el-table-column>
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
    </el-table>

    <!-- Pagination -->
    <el-pagination v-model:current-page="options.page" :page-size="options.itemsPerPage" :total="totalItems"
      layout="prev, pager, next" @current-change="handlePageChange"></el-pagination>

  </el-card>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import { useFlowbite } from '~/composables/useFlowbite';

const router = useRouter();
const search = ref('');
const items = ref([]);
const totalItems = ref(0);
const options = ref({
  page: 1,
  itemsPerPage: 5,
});
const loading = ref(false);
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;
const hasAdmin = ref("");
const filterApply = ref(false);
const sort = ref({ prop: 'joined_at', order: 'descending' });


// Function to fetch data from the server
// Fetch data from the API
const fetchData = async () => {
  loading.value = true;
  try {
    const per_page_items = options.value.itemsPerPage;
    const current_page = options.value.page;

    // Fetch business data
    const businesses = await $adminService.list_business(current_page, per_page_items);
    items.value = businesses;  // Current page data
    totalItems.value = businesses.total;  // Set total items for pagination
  } catch (error) {
    console.error('Error fetching data:', error.message);
  } finally {
    loading.value = false;
  }
  filterView()
};


const filteredItems = computed(() => {
  let sorted = [...items.value];

  // Apply sorting
  if (sort.value.prop) {
    sorted.sort((a, b) => {
      let aVal = a[sort.value.prop];
      let bVal = b[sort.value.prop];

      // Handle date fields
      if (sort.value.prop.includes('date') || sort.value.prop.includes('at')) {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }

      if (aVal < bVal) return sort.value.order === 'ascending' ? -1 : 1;
      if (aVal > bVal) return sort.value.order === 'ascending' ? 1 : -1;
      return 0;
    });
  }

  // Apply search filtering
  if (search.value) {
    sorted = sorted.filter(item =>
      item.name.toLowerCase().includes(search.value.toLowerCase()));
  }

  // Update total items after filtering
  totalItems.value = sorted.length;

  // Apply pagination
  const start = (options.value.page - 1) * options.value.itemsPerPage;
  const end = start + options.value.itemsPerPage;
  return sorted.slice(start, end);
});
// const filteredItems = computed(() => {
//   let filtered = Array.isArray(items.value) ? [...items.value] : []; // Ensure items.value is an array
//   console.log('Items value:', items.value);
//   // Apply search filtering
//   if (search.value) {
//     filtered = filtered.filter(item =>
//       item.name.toLowerCase().includes(search.value.toLowerCase())
//     );
//   }

//   // Update total items after filtering
//   totalItems.value = filtered.length;

//   // Apply pagination
//   const start = (options.value.page - 1) * options.value.itemsPerPage;
//   const end = start + options.value.itemsPerPage;
//   return filtered.slice(start, end);
// });




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

// Handle sort change event
const handleSortChange = (newSort) => {
  sort.value = newSort;
};

// Format date function
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
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

.active-filter {
  color: #0085FF !important;
}
</style>