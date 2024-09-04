<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-2xl text-black mb-4">Transcripts - TODO</h1>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore();

// definePageMeta({
//   middleware: [
//     'auth', 
//     'nuxt-permissions'
//   ],
//   roles: ['player'],
// })

</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
