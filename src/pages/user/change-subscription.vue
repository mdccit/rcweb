<template>
  <div>
    <ChangeSubscription />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'socialhub-three-column',
  middleware: ['role'],
  requiredRole: ['coach', 'player', 'default'],
});


import ChangeSubscription from '~/components/subscription/ChangeSubscription.vue';

import { ref } from 'vue';

</script>
