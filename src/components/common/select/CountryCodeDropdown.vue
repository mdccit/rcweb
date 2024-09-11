<template>
  <select 
    v-model="selected" 
    @change="updateValue" 
    placeholder="Code" 
    class="h-12 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg" 
    id="mobileCode" 
    required
  >
    <option v-for="code in country_codes" :key="code.phone_code" :value="code.value">
      {{ '(' + code.phone_code + ') '  }}
      {{ code.label }}
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
option span.truncate {
  display: inline-block;
  max-width: 100px; /* Adjust the width as needed */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
