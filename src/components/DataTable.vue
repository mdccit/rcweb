<template>
  <v-card class="p-8">
    <v-toolbar flat>
      <v-toolbar-title>Data Table</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
      <div>
        
      </div>
    </v-toolbar>

    <v-data-table :headers="headers" :items="filteredItems" :options.sync="options" :server-items-length="totalItems"
      :loading="loading" :items-per-page="options.itemsPerPage" item-value="name" class="elevation-1">
      <template v-slot:item.flag="{ item }">
        <v-img :src="item.flags.svg" max-width="50" max-height="30" alt="Flag"></v-img>
      </template>
      <template v-slot:item.name="{ item }">
        <div>{{ item.name.common }}</div>
      </template>
      <template v-slot:item.population="{ item }">
        <div>{{ item.population }}</div>
      </template>
      <template v-slot:item.region="{ item }">
        <div>{{ item.region }}</div>
      </template>
      <template v-slot:item.capital="{ item }">
        <div>{{ item.capital ? item.capital[0] : 'N/A' }}</div>
      </template>
    </v-data-table>

    <v-pagination v-model:page="options.page" :length="totalPages"></v-pagination>
  </v-card>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { useFetch } from '#app'

const search = ref('')
const headers = [
  { text: 'Flag', value: 'flag', sortable: false },
  { text: 'Name', value: 'name.common', sortable: true },
  { text: 'Population', value: 'population', sortable: true },
]
const items = ref([])
const totalItems = ref(0)
const options = ref({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  sortDesc: [],
})
const loading = ref(false)

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

  if (options.value.sortBy.length > 0) {
    filtered = filtered.sort((a, b) => {
      const sortKey = options.value.sortBy[0]
      const sortOrder = options.value.sortDesc[0] ? -1 : 1

      if (a[sortKey] < b[sortKey]) return -1 * sortOrder
      if (a[sortKey] > b[sortKey]) return 1 * sortOrder
      return 0
    })
  }

  const start = (options.value.page - 1) * options.value.itemsPerPage
  return filtered.slice(start, start + options.value.itemsPerPage)
})

const totalPages = computed(() => Math.ceil(totalItems.value / options.value.itemsPerPage))
</script>

<style scoped>
.v-data-table {
  overflow-x: auto;
}
</style>
