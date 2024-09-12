<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-2xl text-black mb-4">Dashboard</h1>
  
  </div>
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
    ssr: false,
    layout: 'admin',
    middleware: ['auth'],
    requiredRole: ['admin'],
});

</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
