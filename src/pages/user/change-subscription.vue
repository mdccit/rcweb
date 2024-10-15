<template>
  <div>

  </div>
</template>

<script setup>
definePageMeta({
  layout: 'socialhub-three-column',
  middleware: ['role'],
  requiredRole: [ 'coach', 'player',  'default'],
});

import { ref } from 'vue';

</script>
