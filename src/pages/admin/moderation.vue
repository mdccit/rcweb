<template>
  <div class="p-5 card">
    <div class="mb-3">
      <h1> <b>Moderation</b> </h1>
    </div>
    <div class="p-8">
      <EPDataTable />
    </div>

  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore';
import EPDataTable from '~/components/EPDataTable.vue';

const userStore = useUserStore()
definePageMeta({
  middleware: [
    'auth',
    'nuxt-permissions'
  ],
  roles: ['admin'],
})
</script>

<style scoped>
h1 {
  color: #333;
}

p {
  font-size: 16px;
}
</style>