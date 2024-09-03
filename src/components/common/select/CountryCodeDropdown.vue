<template>
    <select v-model="selected" @change="updateValue" placeholder="Code" class="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50" id="mobileCode" required>
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
