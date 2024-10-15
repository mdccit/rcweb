<template>
  <div class="w-full">
    <span class="text-black absolute ml-[10px] mt-[12px]">$</span>
    <select 
      v-model="selected" 
      @change="updateValue" 
      placeholder="Player Budget" 
      class="h-12 block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg text-black" 
      id="budget" 
      required
    >
    
      <option v-for="budget in player_budgets" :key="budget.value" :value="budget.value">
        {{ budget.label }}
      </option>
    </select>
  </div>
</template>


<script setup>
import { defineProps, defineEmits, watch, ref } from 'vue';

const props = defineProps({
  player_budgets: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Number],
    required: true
  }
});

const emits = defineEmits(['update:modelValue']);

const selected = ref(props.modelValue);

const updateValue = () => {
  console.log('Emitting selected value:', selected.value);
  emits('update:modelValue', selected.value);
};

// Watch for changes in modelValue prop
watch(
  () => props.modelValue,
  (newValue) => {
    console.log('props.modelValue changed to:', newValue);
    selected.value = newValue;
  }
);

watch(
  () => selected.value,
  (newValue) => {
    console.log('Selected value changed to:', newValue);
  }
);
</script>


<style scoped>

</style>
