<template>
  <div class="w-full">
    <div class="flex rounded-lg border border-gray-300 shadow-sm rounded-[10px]">
      <select v-model="selected" @change="updateValue" placeholder="Gender"
        class="lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
        id="gender" required>
        <option v-for="gender in genders" :key="gender.value" :value="gender.value">
          {{ gender.label }}
        </option>
      </select>
    </div>
  </div>

</template>

<script setup>
import { defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  genders: {
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

<style scoped></style>
