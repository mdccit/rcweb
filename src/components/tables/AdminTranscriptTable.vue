<template>
  <el-card>
    <!-- Search Input and Buttons -->
    <div class="flex justify-between items-center mb-4">
      <!-- Search Input for Filtering -->
      <el-input v-model="search" class="h-[40px] mr-2" placeholder="Search..." clearable></el-input>

      <button type="button" aria-haspopup="true" id="dropdownButton" data-dropdown-toggle="dropdowntable"
        class="text-white bg-gray-200 hover:bg-gray-300 focus:ring-4 p-2 border rounded h-[40px] w-[50px] mr-1">
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
            <label for="">Status </label>
            <div class="flex border border-gray-300 shadow-sm rounded-[10px]">
              <select name="filter-role" v-model="status" @change="fetchData"
                class="lock text-black px-5 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg">
                <option value="">-</option>
                <option value="ai_approved">A.I.Ferified</option>
                <option value="failed">A.I.Faild</option>
                <option value="pending">Pending</option>
                <option value="manual_approved">Manual</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <el-table :default-sort="{ prop: 'display_name', order: 'descending' }" :data="filteredItems"
      @row-click="handleRowClick">
      <!-- Display Name Column -->
      <el-table-column prop="display_name" label="DISPLAY NAME" sortable></el-table-column>

      <!-- Email Column -->
      <el-table-column prop="email" label="EMAIL" sortable class="truncate-text" show-overflow-tooltip>
        <template v-slot="scope">
          <span class="truncate-text show-overflow-tooltip">{{ scope.row.email }}</span>
        </template>
      </el-table-column>

      <!-- File Name Column -->
      <el-table-column prop="file_name" label="FILE NAME" sortable>
        <template v-slot="scope">
          <span class=""> {{ scope.row.file_name }}</span>
        </template>
      </el-table-column>

      <!-- Status Column -->
      <el-table-column prop="status" label="STATE" sortable>
        <template v-slot="scope">
          <span class="text-xs">{{ scope.row.processed_at ? formatDate(scope.row.processed_at) : '' }}</span>
          <p class="text-sm text-darkSlateBlue mb-4 flex" v-if="scope.row.status == 'ai_approved'">
            <span class="text-green-500 mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            A.I. Verified
          </p>
          <p class="text-sm text-red-500 mb-4 flex" v-if="scope.row.status == 'failed'">
            <span class="text-green-500 mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="size-5">
                <path fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            A.I. Faild
          </p>
          <p class="text-sm text-steelBlue mb-4 flex" v-if="scope.row.status == 'pending'">
            <span class="text-green-500 mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0085FF" class="size-5">
                <path fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            Pending
          </p>
          <p class="text-sm text-darkSlateBlue mb-4 flex" v-if="scope.row.status == 'manual_approved'">
            <span class="text-green-500 mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            Manual
          </p>
        </template>
      </el-table-column>

      <!-- GPA Column -->
      <el-table-column prop="gpa" label="GPA" sortable>
        <template v-slot="scope">
          <span class=""> {{ scope.row.american_gpa }}</span>
        </template>
      </el-table-column>

      <!-- Action Column -->
      <el-table-column prop="id" label="ACTIONS" sortable>
        <template v-slot="scope">

          <button class="mr-[10px]" @click.stop="handleEdit(scope.row)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue"
              class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </button>

          <button @click.stop="handleDelete(scope.row)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red"
              class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>

        </template>
      </el-table-column>

      <!-- END TABLE  -->
    </el-table>

    <!-- Pagination -->
    <el-pagination v-model:current-page="options.page" :page-size="options.itemsPerPage" :total="totalItems"
      layout="prev, pager, next" @current-change="handlePageChange">
    </el-pagination>
  </el-card>
  <AdminTranscriptEditModal :isVisible="showModal" @close="handleClose" :gpa="editGPA"
    :transcriptId="editTranscriptId" />
</template>

<script setup>
import { ref, watch, computed, onMounted, defineEmits } from "vue";
import { useRouter } from "vue-router";
import { useNuxtApp } from "#app";
import AdminTranscriptEditModal from '~/components/admin/transcript/AdminTranscriptEditModal.vue';

const emit = defineEmits(["open-modal"]);
const router = useRouter();
const search = ref("");
const items = ref([]);
const totalItems = ref(0);
const options = ref({
  page: 1,
  itemsPerPage: 10, // 10 items per page
});
const loading = ref(false);
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;
const status = ref("");
const showModal = ref(false);
const editGPA = ref(null);
const editTranscriptId = ref(null);

// Fetch data from the API
const fetchData = async () => {
  loading.value = true;
  try {
    const transcripts = await $adminService.list_transcripts(search.value, status.value);
    items.value = transcripts;
    totalItems.value = transcripts.length;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const handleRowClick = (row) => {
  window.open(row.path, '_blank');
};

// Watch options and search to update filtered items
watch([options, search], fetchData, { immediate: true });

onMounted(fetchData);

const filteredItems = computed(() => {
  let filtered = items.value;

  if (search.value) {
    filtered = filtered.filter(
      (item) =>
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

const handleDelete = async (row) => {
  loading.value = true;
  try {
    const response = await $adminService.transcript_delete(row.id);
    if (response.status === 200) {
      nuxtApp.$notification.triggerNotification(response.display_message, 'success');
    } else {
      nuxtApp.$notification.triggerNotification(response.display_message || 'An error occurred', 'failure');
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
    fetchData();
  }
};

const handleEdit = async (row) => {
  editGPA.value = row.american_gpa;
  editTranscriptId.value = row.id;
  showModal.value = true;
};

const handleClose = () => {
  showModal.value = false;
  editGPA.value = null;
  editTranscriptId.value = null;
  fetchData();
}

const handlePageChange = (newPage) => {
  options.value.page = newPage;
};
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>

<script>
export default {
  name: "EPDataTable",
};
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
