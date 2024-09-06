<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-2xl text-black mb-4">Admin Dashboard</h1>
  
  </div>
  <!-- <div>
    <DataTable />
  </div> -->

  <!-- <div>
    <h1>Image Upload with Crop and Resize</h1>
    <ImageUpload />
  </div> -->
</template>

<script setup>
import { useUserStore } from '~/stores/userStore';
// import DataTable from '~/components/EPDataTable.vue';
// import ImageUpload from '~/components/common/ImageUpload.vue'

const userStore = useUserStore()

definePageMeta({
    ssr: true,
    layout: 'admin',
    middleware: ['permissions'],
    roles: ['admin'],
});

</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
