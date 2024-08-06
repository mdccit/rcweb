<template>
  <div v-if="visible" class="fixed top-4 right-4 w-96 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <span class="text-lg font-medium text-green-600">{{ message }}</span>
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
import { ref } from 'vue';

const props = defineProps({
  message: String,
  duration: {
    type: Number,
    default: 3000
  }
});

const visible = ref(true);

const closeNotification = () => {
  visible.value = false;
};

if (props.duration > 0) {
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
}
</script>

<style scoped>
/* Add your styles here */
</style>
