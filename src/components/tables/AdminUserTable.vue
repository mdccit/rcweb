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

        <button type="button" aria-haspopup="true" id="dropdownButtonUserTable" data-dropdown-toggle="dropdowntable"
          class="text-white bg-gray-200 hover:bg-gray-300 focus:ring-4 p-2 border rounded h-[40px] w-[50px] mr-1 ">
          <svg xmlns="http://www.w3.org/2000/svg" :class=" role !=1?'active-filter h-5 w-5 text-gray-400 mx-auto':'h-5 w-5 text-gray-400 mx-auto' " viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <!-- Dropdown Menu -->
        <div id="dropdowntable"
          class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none  hidden p-3 z-10">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

            <div class="mb-3">
              <label for="text-sm">Role </label>
              <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                <select name="filter-role" v-model="role" @change="fetchData"
                  class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                  <option value=""> - </option>
                  <option value="2"> Admin </option>
                  <option value="5"> Coach </option>
                  <option value="4"> Player </option>
                  <option value="6"> Business </option>
                  <option value="7"> Parent </option>
                </select>
              </div>
            </div>
            <div class="mb-3">
              <label for="text-sm">Last Seen At </label>
              <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                <select name="filter-role" v-model="lastSeenAt" @change="fetchData"
                  class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                  <option value=""> - </option>
                  <option value="1"> Last 24 hours </option>
                  <option value="7"> Last 7 days </option>
                  <option value="30"> Last 30 days </option>
                  <option value="90"> Last 90 days </option>
                  <option value="365"> Last 365 days </option>
                </select>
              </div>
            </div>
            <div class="mb-3">
              <label for="text-sm">Email verified </label>
              <div class="flex  border border-gray-300 shadow-sm rounded-[10px]">
                <select name="filter-role" v-model="emailVerified" @change="fetchData"
                  class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                  <option value=""> - </option>
                  <option value="verified"> Verified </option>
                  <option value="not_verified"> Not Verified </option>
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
    <el-table :data="filteredItems" stripe style="width: 100%" v-loading="loading" class="cursor-pointer min-h-[350px]"  @row-click="handleRowClick"  :default-sort="{ prop: 'joined_at', order: 'descending' }">
      <!-- Display Name Column -->
      <el-table-column prop="display_name" label="DISPLAY NAME" sortable></el-table-column>

      <!-- Email Column -->
      <el-table-column prop="email" label="EMAIL" sortable class="truncate-text" show-overflow-tooltip>
        <template v-slot="scope">
          <span class="truncate-text show-overflow-tooltip">{{ scope.row.email }}</span>
        </template>

      </el-table-column>

      <!-- User Role Column -->
      <el-table-column prop="user_role" label="USER ROLE" sortable>
        <template v-slot="scope">
          <span class="" :class="scope.row.user_role == 'Coach' ? 'text-black' : 'text-blue-500'">


            <svg v-if="scope.row.user_role == 'Coach'" class="w-5 h-5 inline mr-1" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0"></path>
              <path d="M10.5 11h2.5l-1.5 5"></path>
            </svg>
            <svg v-if="scope.row.user_role == 'Business Manager'" class="w-5 h-5 inline mr-1"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21l18 0"></path>
              <path d="M9 8l1 0"></path>
              <path d="M9 12l1 0"></path>
              <path d="M9 16l1 0"></path>
              <path d="M14 8l1 0"></path>
              <path d="M14 12l1 0"></path>
              <path d="M14 16l1 0"></path>
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
            </svg>

            <svg v-if="scope.row.user_role == 'Player'" class="w-5 h-5 inline mr-1" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
              <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
            </svg>

            <svg v-if="scope.row.user_role == 'Parent'" class="w-5 h-5 inline mr-1" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg>

            {{ scope.row.user_role }}</span>
        </template>
      </el-table-column>

      <!-- Joined At Column -->
      <el-table-column prop="joined_at" label="JOINED DATE" sortable>
        <template v-slot="scope">
          <span>{{ formatDate(scope.row.joined_at) }}</span>
        </template>
      </el-table-column>

      <!-- Last Seen At Column -->
      <el-table-column prop="last_seen_at" label="LAST SEEN AT" sortable>
        <template v-slot="scope">
          <span>{{ scope.row.last_seen_at ? formatDate(scope.row.last_seen_at) : 'Never' }}</span>
        </template>
      </el-table-column>

      <!-- END TABLE  -->
    </el-table>


    <!-- Pagination -->
    <el-pagination v-model:current-page="options.page" :page-size="options.itemsPerPage" :total="totalItems"
      layout="prev, pager, next" @current-change="handlePageChange">
    </el-pagination>
  </el-card>
</template>

<script setup>
import { ref, watch, computed, onMounted, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import { useRoute } from 'vue-router';
import { useFlowbite } from '~/composables/useFlowbite';


const route = useRoute(); // Use useRoute to access query parameters

const emit = defineEmits(['open-modal']);
const router = useRouter();
const search = ref('');
const items = ref([]);
const totalItems = ref(0);
const options = ref({
  page: 1,
  itemsPerPage: 10,  // 10 items per page
});
const loading = ref(false);
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;
const role = ref('')
const lastSeenAt = ref('')
const emailVerified = ref('')

// Fetch data from the API
const fetchData = async () => {
  console.log(4587)
  loading.value = true
  try {
    const users = await $adminService.list_users(role.value, lastSeenAt.value, emailVerified.value);
    console.log(users)
    items.value = users;
    totalItems.value = users.length
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}



// Watch options and search to update filtered items
watch([options, search], fetchData, { immediate: true })

onMounted(()=>{
  console.log(route.query.role)
  if(route.query.role =='1'){
    role.value =null
  }{
    role.value =route.query.role
  }
  fetchData()

  useFlowbite(() => {
      initFlowbite();
  })
})

const filteredItems = computed(() => {
  let filtered = items.value;

  if (search.value) {
    filtered = filtered.filter(item =>
      item.display_name.toLowerCase().includes(search.value.toLowerCase()) ||
      item.email.toLowerCase().includes(search.value.toLowerCase()) ||
      item.user_role.toLowerCase().includes(search.value.toLowerCase())
    );
  }

  // Paginate items
  const start = (options.value.page - 1) * options.value.itemsPerPage;
  const end = start + options.value.itemsPerPage;
  return filtered.slice(start, end);
});


const viewDetails = (row) => {
  router.push({
    path: '/admin/userAccountDetails',
    query: {
      action: 'view',
      user_id: row.id
    }
  });
};

const editRecord = (row) => {
  router.push({
    path: '/admin/userAccountDetails',
    query: {
      action: 'edit',
      user_id: row.id
    }
  });
};

const handleRowClick = (row) => {
  editRecord(row);
};

const handlePageChange = (newPage) => {
  options.value.page = newPage
}
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

watch(
    () => route.query.role,
    () => {
      console.log(route.query.role)

      if(route.query.role =='1'){
        console.log(123)
            role.value =''
      }{
        role.value =route.query.role
      }

        
        fetchData()
    }
);
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
