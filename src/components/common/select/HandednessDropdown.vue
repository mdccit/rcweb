<template>
  <div>
    <select v-model="selected" @change="updateValue" placeholder="Handness" class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" id="handedness" required>
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
select {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
}
</style>
