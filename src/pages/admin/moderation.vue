<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="mb-3">
            <h1> <b>Moderation</b> </h1>
        </div>
        <div class="p-8">
          <AdminMorderationTable />
        </div>
     
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from '~/stores/userStore';
  import  AdminMorderationTable from '~/components/tables/AdminMorderationTable.vue';
  
  definePageMeta({
    ssr: 'true',
    layout: 'admin',
    // middleware: ['permissions'],
    roles: ['admin'],
});
  const userStore = useUserStore()
  
  const email = userStore.user?.email
  const token = userStore.user?.token
  </script>
  
  <style scoped>
  h1 {
    color: #333;
  }
  
  p {
    font-size: 16px;
  }
  </style>
  
