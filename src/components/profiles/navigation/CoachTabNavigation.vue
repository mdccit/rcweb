<template>
  <div class="text-sm font-medium text-center border-b border-grayishSilver text-black">
    <ul class="flex flex-wrap -mb-px">
      <li v-for="(tab, index) in tabs" :key="index" class="me-2">
        <button
          @click="selectTab(tab.name)"
          :class="[
            'inline-block p-4 rounded-t-lg',
            tab.name === activeTab ? 'text-steelBlue border-b-4 border-steelBlue' : 'border-transparent hover:text-gray-600 hover:border-gray-300'
          ]"
        >
          {{ tab.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

// Props: Tabs to be passed from the parent component
const props = defineProps({
  tabs: {
    type: Array,
    required: true
  },
  initialTab: {
    type: String,
    default: ''
  },
  userSlug: {
    type: String,
    required: true,
  }
});

watch(
    () => props.userSlug,
    () => {
      activeTab.value = 'feed'
    }
);
// Emits event to parent component when tab is changed
const emit = defineEmits(['tabChanged']);

// State to track the active tab
const activeTab = ref(props.initialTab);

// Function to handle tab selection
const selectTab = (tabName) => {
  activeTab.value = tabName;
  emit('tabChanged', tabName);
};
</script>

<style scoped>
/* Optional: Add specific styling for the tab component here */
</style>
