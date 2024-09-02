<template>
  <select 
    v-model="selected" 
    @change="updateValue" 
    placeholder="Code" 
    class="block text-black w-full bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-5 py-3 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-gray light:focus:ring-blue-500 light:focus:border-blue-500" 
    id="mobileCode" 
    required
  >
    <option v-for="code in country_codes" :key="code.phone_code" :value="code.value">
      {{ '(' + code.phone_code + ') ' + code.label }}
    </option>
  </select>
</template>
<script setup>
import { defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  country_codes: {
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
  emits('update:modelValue', Number(selected.value));
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
