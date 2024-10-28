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

      <!-- NAME Column -->
      <el-table-column class="tealGaray" prop="user.display_name" label="NAME" sortable>
        <template v-slot="scope">
          {{ scope.row.user?.display_name ?? 'N/A' }}
        </template>
      </el-table-column>

      <!-- STATUS Column -->
      <el-table-column class="tealGaray" prop="status" label="STATUS" sortable>
        <template v-slot="scope">
          <span :class="{
        'bg-green-100 text-green-800': scope.row.status === 'active',
        'bg-red-100 text-red-800': scope.row.status === 'inactive',
        'bg-gray-100 text-gray-800': scope.row.status !== 'active' && scope.row.status !== 'inactive'
      }" class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded capitalize">
            {{ scope.row.status ?? 'inactive' }}
          </span>
        </template>
      </el-table-column>

      <!-- Email Column -->
      <el-table-column class="tealGaray" prop="user.email" label="Email" sortable>
        <template v-slot="scope">
          {{ scope.row.user?.email ?? 'N/A' }}
        </template>
      </el-table-column>

      <!-- SUBSCRIPTION START DATE Column -->
      <el-table-column class="text-tealGray" prop="start_date" label="START DATE" sortable>
        <template v-slot="scope">
          <span>{{ scope.row.start_date ? formatDate(scope.row.start_date) : 'N/A' }}</span>
        </template>
      </el-table-column>

      <!-- SUBSCRIPTION END DATE Column -->
      <el-table-column class="text-tealGray" prop="end_date" label="END DATE" sortable>
        <template v-slot="scope">
          <span>{{ scope.row.end_date ? formatDate(scope.row.end_date) : 'N/A' }}</span>
        </template>
      </el-table-column>

      <!-- SUBSCRIPTION Column -->
      <el-table-column class="tealGaray" prop="subscription_type" label="SUBSCRIPTION" sortable>
        <template v-slot="scope">
          <span :class="{
        'bg-black bg-opacity-50 text-amber-800': scope.row.subscription_type === 'monthly',
        'bg-red-100 text-red-800': scope.row.subscription_type === 'annual',
        'bg-gray-100 text-gray-800': scope.row.subscription_type !== 'trial'
      }" class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded capitalize">
            {{ scope.row.subscription_type ?? 'N/A' }}
          </span>
        </template>
      </el-table-column>

    </el-table>

    <!-- Pagination -->
    <el-pagination v-model:current-page="options.page" :page-size="options.itemsPerPage" :total="totalItems"
      layout="prev, pager, next" @current-change="handlePageChange"></el-pagination>

  </el-card>

  <!-- Flowbite Modal -->
  <div id="subscriptionModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full hidden">
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Subscription Details
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click="closeModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd">
              </path>
            </svg>
            
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p v-if="selectedSubscription?.user?.display_name">
            <strong>Name:</strong> {{ selectedSubscription.user.display_name }}
          </p>
          <p v-if="selectedSubscription?.user?.email">
            <strong>Email:</strong> {{ selectedSubscription.user.email }}
          </p>
          <p v-if="selectedSubscription?.status">
            <strong>Status:</strong> {{ selectedSubscription.status }}
          </p>
          <p v-if="selectedSubscription?.subscription_type">
            <strong>Subscription Type:</strong> {{ selectedSubscription.subscription_type }}
          </p>
          <p v-if="selectedSubscription?.start_date">
            <strong>Start Date:</strong> {{ formatDate(selectedSubscription.start_date) }}
          </p>
          <p v-if="selectedSubscription?.end_date">
            <strong>End Date:</strong> {{ formatDate(selectedSubscription.end_date) }}
          </p>
          <p v-if="selectedSubscription?.is_auto_renewal !== undefined">
            <strong>Auto Renewal:</strong> {{ selectedSubscription.is_auto_renewal ? 'Yes' : 'No' }}
          </p>
          <p v-if="selectedSubscription?.next_billing_date">
            <strong>Next Billing Date:</strong> {{ formatDate(selectedSubscription.next_billing_date) }}
          </p>
        </div>

        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button @click="closeModal" type="button"
            class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

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
  itemsPerPage: 10,
});
const loading = ref(false);
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;
const hasAdmin = ref("");
const filterApply = ref(false);
const sort = ref({ prop: 'joined_at', order: 'descending' });

// Fetch data from the API
const fetchData = async () => {
  loading.value = true;
  try {
    const per_page_items = options.value.itemsPerPage;
    const current_page = options.value.page;

    // Fetch business data
    const subscriptions = await $adminService.list_subscriptions(current_page, per_page_items);
    items.value = subscriptions;  // Current page data
    totalItems.value = subscriptions.total;  // Set total items for pagination
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

      // Handle nested fields (like user names and emails)
      if (sort.value.prop.includes('.')) {
        const props = sort.value.prop.split('.');
        aVal = a;
        bVal = b;
        props.forEach(prop => {
          aVal = aVal ? aVal[prop] : null;
          bVal = bVal ? bVal[prop] : null;
        });
      }

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

  // Apply search filtering based on multiple fields
  if (search.value) {
    sorted = sorted.filter(item => {
      const searchTerm = search.value.toLowerCase();
      return (
        item.status?.toLowerCase().includes(searchTerm) ||
        item.user?.display_name?.toLowerCase().includes(searchTerm) || // Search by name
        item.user?.email?.toLowerCase().includes(searchTerm) || // Search by email
        item.subscription_type?.toLowerCase().includes(searchTerm) || // Search by subscription type
        item.price?.toString().includes(searchTerm) // Search by price
      );
    });
  }


  // Update total items after filtering
  totalItems.value = sorted.length;

  // Apply pagination
  const start = (options.value.page - 1) * options.value.itemsPerPage;
  const end = start + options.value.itemsPerPage;
  return sorted.slice(start, end);
});



const filterView = () => {
  filterApply.value = false;

  if (hasAdmin.value != '') {
    filterApply.value = true;
  }
  if (hasAdmin.value == '') {
    filterApply.value = false;
  }
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


const editRecord = (row) => {
  router.push({
    path: '/subscription/subscriptionEdit',
    query: {
      action: 'edit',
      business_id: row.id
    }
  });
};

const selectedSubscription = ref(null); // This will hold the details of the clicked row

// Function to open the modal and set the selected row data
const handleRowClick = (row) => {
  selectedSubscription.value = row;
  const modal = document.getElementById('subscriptionModal');
  modal.classList.remove('hidden');
};

// Function to close the modal
const closeModal = () => {
  const modal = document.getElementById('subscriptionModal');
  modal.classList.add('hidden');
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