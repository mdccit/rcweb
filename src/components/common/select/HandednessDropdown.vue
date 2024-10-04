<template>
  <div class="w-full">
    <select v-model="selected" @change="updateValue" placeholder="Handness" 
    class="lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg" id="handedness" required>
      <option v-for="handed in handedness" :key="handed.value" :value="handed.value">
        {{ handed.label }}
      </option>
    </select>
  </div>

</template>

<script setup>
import { defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  handedness: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Number],
    required: true
  }
});

console.log(props.handedness);
const emits = defineEmits(['update:modelValue']);

const selected = ref(props.modelValue);

const updateValue = () => {
  emits('update:modelValue', selected.value);
};

watch(
  () => props.modelValue,
  (newValue) => {
    selected.value = newValue;
  }
);
</script>

<style scoped>

</style>
