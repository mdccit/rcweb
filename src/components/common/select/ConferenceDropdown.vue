<template>
  <div class="w-full">
    <div class="flex rounded-lg border border-gray-300 shadow-sm rounded-[10px]">
      <select v-model="selected" @change="updateValue" placeholder="Conference"
        class="h-12 lock text-black px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-lg"
        id="conference" required>
        <option v-for="conference in conferences" :key="conference.value" :value="conference.value">
          {{ conference.label }}
        </option>
      </select>
    </div>
  </div>

</template>

<script setup>
import { defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  conferences: {
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
