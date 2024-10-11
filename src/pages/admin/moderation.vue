<template>
  <header class="bg-gray-200">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="flex w-full justify-between gap-8">
        <div class="flex items-center gap-4">
          <NuxtLink :to="{ path: '/business/businessGeneral', query: { action: 'edit', business_id: business_id } }">
            <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
          </NuxtLink>
          <h2 class="font-bold text-lg self-center text-black"> Moderation </h2>
        </div>
      </div>
    </div>
  </header>
  
  <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <div class="p-8">
      <AdminMorderationTable />
    </div>

  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore';
import AdminMorderationTable from '~/components/tables/AdminMorderationTable.vue';

definePageMeta({
  ssr: false,
  layout: 'admin',
  middleware: ['role'],
  requiredRole: ['admin'],
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
