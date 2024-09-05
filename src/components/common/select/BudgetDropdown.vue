<template>
  <div>
    <select 
      v-model="selected" 
      @change="updateValue" 
      placeholder="Player Budget" 
      class="bg-gray-50 text-black block w-full h-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-5 py-3 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-gray light:focus:ring-blue-500 light:focus:border-blue-500" 
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
select {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
}
</style>
