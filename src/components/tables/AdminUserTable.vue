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
    <el-table :data="filteredItems" style="width: 100%" v-loading="loading">
      <!-- Display Name Column -->
      <el-table-column prop="display_name" label="Display Name" sortable></el-table-column>

      <!-- Email Column -->
      <el-table-column prop="email" label="Email" sortable></el-table-column>

      <!-- User Role Column -->
      <el-table-column prop="user_role" label="User Role" sortable></el-table-column>

      <!-- Joined At Column -->
      <el-table-column prop="joined_at" label="Joined Date" sortable>
        <template v-slot="scope">
          <span>{{ formatDate(scope.row.joined_at) }}</span>
        </template>
      </el-table-column>

      <!-- Last Seen At Column -->
      <el-table-column prop="last_seen_at" label="Last Seen At" sortable>
        <template v-slot="scope">
          <span>{{ scope.row.last_seen_at ? formatDate(scope.row.last_seen_at) : 'Never' }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Actions">
        <template v-slot="scope">
          <!-- Select Record Button -->
          <button @click="selectRecord(scope.row)"
            class="text-white bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
              <path stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <el-dropdown>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click.native="viewDetails(scope.row)">View Details</el-dropdown-item>
                <el-dropdown-item @click.native="editRecord(scope.row)">Edit Record</el-dropdown-item>
                <el-dropdown-item divided @click.native="deleteRecord(scope.row)">Delete Record</el-dropdown-item>
              </el-dropdown-menu>
            </template>

            <!-- Dropdown Button with Left Margin and Dropdown Icon -->
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
import { ref, watch, computed, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const search = ref('');
const items = ref([]);
const totalItems = ref(0);
const options = ref({
  page: 1,
  itemsPerPage: 2,  // 10 items per page
});
const loading = ref(false);
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

// Fetch data from the API
const fetchData = async () => {
  loading.value = true
  try {
    const users = await $adminService.list_users();
    console.log('data');
    console.log(users);
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

onMounted(fetchData)

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
  console.log('Viewing details for:', row);
  // Implement view details logic here
};

const editRecord = (row) => {
  console.log('Editing record for:', row);
  // Implement edit record logic here
};

const deleteRecord = (row) => {
  console.log('Deleting record for:', row);
  // Implement delete record logic here
};


const handlePageChange = (newPage) => {
  options.value.page = newPage
}
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
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
