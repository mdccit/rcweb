<template>
  <div class="container mx-auto mt-10">
    <GoogleAuth />
  </div>
</template>

<script setup>

import GoogleAuth  from '~/components/GoogleAuth.vue';
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
}
</style>
