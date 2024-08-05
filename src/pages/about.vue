<template>
    <div class="container mx-auto mt-10">
      <h1 class="text-2xl mb-4">Dashboadsdsssddsrd</h1>
      <p class="mb-2">Email: {{ email }}</p>
      <p>Token: {{ token }}</p>
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from '~/stores/userStore'
  
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
  