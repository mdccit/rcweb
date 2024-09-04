<template>
  <div v-if="visible" :class="notificationClasses" class="fixed top-4 right-4 w-96 border rounded-lg shadow-lg p-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <span :class="messageClasses">{{ message }}</span>
      </div>
      <button @click="closeNotification" class="text-gray-500 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  message: String,
  type: {
    type: String,
    default: 'success', // 'success', 'failure', 'warning'
  },
  duration: {
    type: Number,
    default: 3000
  }
});

const visible = ref(true);

const closeNotification = () => {
  visible.value = false;
};

// Set visibility timeout
if (props.duration > 0) {
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
}

// Computed classes for notification based on type
const notificationClasses = computed(() => {
  return {
    'bg-green-100 border-green-500': props.type === 'success',
    'bg-red-100 border-red-500': props.type === 'failure',
    'bg-yellow-100 border-yellow-500': props.type === 'warning',
  };
});

const messageClasses = computed(() => {
  return {
    'text-green-600': props.type === 'success',
    'text-red-600': props.type === 'failure',
    'text-yellow-600': props.type === 'warning',
  };
});
</script>


<style scoped>
/* Add your styles here */
</style>
