<template>
  <div>
    <select v-model="selected" @change="updateValue" placeholder="Countries" class="bg-gray-50  text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 px-5 py-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50" id="country" required>
      <option v-for="country in countries" :key="country.value" :value="country.value">
        {{ country.label }}
      </option>
    </select>
  </div>

</template>

<script setup>
import { defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  countries: {
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
