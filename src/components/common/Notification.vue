<template>
  <div v-if="visible" :class="notificationClasses" class="fixed top-4 right-4 w-96 border rounded-lg shadow-lg p-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <span class="text-sm text-white">{{ message }}</span>
      </div>
      <button @click="closeNotification" class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  message: String,
  type: {
    type: String,
    default: 'success',
  },
  visible: Boolean, // Bound to the parent-provided visibility
  duration: {
    type: Number,
    default: 3000,
  },
});

const emit = defineEmits(['close']);

// Log the props to check if they are being passed correctly
console.log('Notification component - visible:', props.visible);
console.log('Notification component - message:', props.message);
console.log('Notification component - type:', props.type);

// Automatically hide the notification after the specified duration
setTimeout(() => {
  emit('close');
}, props.duration);

// Computed classes for notification based on type
const notificationClasses = computed(() => ({
  'bg-green-500 border-green-500': props.type === 'success',
  'bg-red-500 border-red-500': props.type === 'failure',
  'bg-yellow-400 border-yellow-500': props.type === 'warning',
}));
</script>
