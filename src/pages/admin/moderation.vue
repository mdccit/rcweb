<template>
    <div class="p-5 card">
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
  
