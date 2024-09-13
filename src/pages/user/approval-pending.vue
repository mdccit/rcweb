<template>
  <PendingApproval />
</template>

<script setup>
import PendingApproval from '~/components/user/pending-approval.vue';
definePageMeta({ colorMode: 'light',layout:'Outer' });
</script>

<style scoped>
h1 {
  color: #333;
}

p {
  font-size: 16px;
}
</style>