<template>
  <div class="w-full">
    <span class="text-black absolute ml-[10px] mt-[12px]">$</span>
    <select 
      v-model="selectedValue" 
      @change="updateValue" 
      placeholder="Player Budget" 
      class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg" 
      id="budget" 
      required
    >
      <option v-for="budget in budgets" :key="budget.value" :value="budget.value">
        {{ budget.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

// Define the props to receive budgets and modelValue
const props = defineProps({
  budgets: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Number, Object, null],  // Allow null as a valid prop type
    default: null  // Default to null if not provided
  }
});

const emits = defineEmits(['update:modelValue']);

// Initialize `selectedValue` with a valid default, fall back to null if modelValue is not provided
const selectedValue = ref(props.modelValue?.value || null);

// Function to emit value when dropdown changes and log the selected value
const updateValue = () => {
  const selectedBudget = props.budgets.find(budget => budget.value === selectedValue.value);
  if (selectedBudget) {
    console.log('Selected Budget on Change:', selectedBudget);  // Log the selected budget object on change
    emits('update:modelValue', selectedBudget);  // Emit the full selected budget object
  } else {
    console.log('No matching budget found for selected value:', selectedValue.value);
  }
};

// Watch for changes in modelValue and log when it updates (this happens when the modal opens)
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue && typeof newValue === 'object' && 'value' in newValue) {
      // When modelValue has a value, set it as selected
      selectedValue.value = newValue.value;
      console.log('Selected Budget on Load:', newValue);  // Log the selected budget when loading
    } else {
      // If no modelValue or invalid value, set to null
      selectedValue.value = null;
      console.log('No pre-selected budget found on load');
    }
  },
  { immediate: true }  // Ensure this runs immediately when component is mounted
);
</script>
