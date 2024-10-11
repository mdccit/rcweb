<template>
  <p v-if="error" class="mt-1 text-sm text-red-600 dark:text-red-500 error-messages">{{ error }}</p>
</template>

<script setup>
const props = defineProps({
  error: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
/* Add any additional styling here */
.error-messages {
  color: red;
}

</style>
