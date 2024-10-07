<template>

    <select 
      v-model="phone_code_country" 
      @change="updatePhoneCode" 
      placeholder="Code" 
      class="border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
        focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-600 dark:placeholder-gray-600 
        light:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500  text-black" 
      id="phone_code_country" 
      required 
      :disabled="props.action === 'view'"
    >
      <option v-for="code in country_codes" :key="code.value" :value="code.value">
        {{ '(' + code.phone_code + ') ' }} {{ code.label }}
      </option>
    </select>

</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  country_codes: {
    type: Array,
    required: true
  },
  phone_code_country: {
    type: [String, Number],
    required: true
  },
  action: {
    type: String,
    required: true
  }
});

const emits = defineEmits(['update:phone_code_country']);
const phone_code_country = ref(props.phone_code_country);

const updatePhoneCode = () => {
  emits('update:phone_code_country', phone_code_country.value);
};

// Watcher to update the local value when props change
watch(
  () => props.phone_code_country,
  (newVal) => {
    phone_code_country.value = newVal;
  }
);
</script>

<style scoped>
/* Style to ensure dropdown fits well in the grid */
</style>
