<template>
  <span v-if="message" class="text-red-500 text-sm">
    {{ message }}
  </span>
</template>

<script setup>
import { computed } from 'vue';

// Use defineProps to declare props in <script setup>
const props = defineProps({
  field: {
    type: String,
    required: true
  },
  errors: {
    type: Object,
    default: () => ({}) // Set default value as an empty object
  }
});

// Computed property to get the error message for the given field
const message = computed(() => {
  // Ensure errors[field] is safely accessed and exists
  if (props.errors[props.field] && props.errors[props.field].length) {
    return props.errors[props.field].join(', ');
  }
  return null;
});
</script>
