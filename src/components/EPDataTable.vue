<template>
  <el-card>
    <el-input
      v-model="search"
      placeholder="Search"
      class="input-with-select"
      clearable
    ></el-input>
    
    <el-table
      :data="filteredItems"
      style="width: 100%"
      v-loading="loading"
    >
      <el-table-column
        prop="flags.svg"
        label="Flag"
        width="100"
      >
        <template v-slot="scope">
          <el-image
            :src="scope.row.flags.svg"
            :alt="scope.row.name.common"
            style="width: 50px; height: 30px;"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column
        prop="name.common"
        label="Name"
        sortable
      ></el-table-column>
      <el-table-column
        prop="population"
        label="Population"
        sortable
      ></el-table-column>
      <el-table-column
        prop="region"
        label="Region"
        sortable
      ></el-table-column>
      <el-table-column
        prop="capital"
        label="Capital"
        sortable
      >
        <template v-slot="scope">
          <span>{{ scope.row.capital ? scope.row.capital[0] : 'N/A' }}</span>
        </template>
      </el-table-column>
    </el-table>
    
    <el-pagination
      v-model:current-page="options.page"
      :page-size="options.itemsPerPage"
      :total="totalItems"
      layout="prev, pager, next"
      @current-change="handlePageChange"
    ></el-pagination>
  </el-card>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { useFetch } from '#app'


const search = ref('')
const items = ref([])
const totalItems = ref(0)
const options = ref({
  page: 1,
  itemsPerPage: 10,  // 10 items per page
})
const loading = ref(false)

// Fetch data from the API
const fetchData = async () => {
  loading.value = true
  try {
    const { data } = await useFetch('https://restcountries.com/v3.1/all')
    items.value = data.value
    totalItems.value = data.value.length
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
  let filtered = items.value

  if (search.value) {
    filtered = filtered.filter(item => 
      item.name.common.toLowerCase().includes(search.value.toLowerCase()) ||
      item.region.toLowerCase().includes(search.value.toLowerCase()) ||
      (item.capital && item.capital[0] && item.capital[0].toLowerCase().includes(search.value.toLowerCase()))
    )
  }

  // Paginate items
  const start = (options.value.page - 1) * options.value.itemsPerPage
  const end = start + options.value.itemsPerPage
  return filtered.slice(start, end)
})

const handlePageChange = (newPage) => {
  options.value.page = newPage
}
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
