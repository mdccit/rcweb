<template>
  <div class="flex flex-col items-center justify-center space-y-4">
    <label class="text-lg font-semibold text-gray-700">Select Date & Time:</label>
    <input
      type="datetime-local"
      v-model="localDateTime"
      @input="updateUTC"
      class="bg-gray-50 text-black block w-full h-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-5 py-3 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-gray light:focus:ring-blue-500 light:focus:border-blue-500"
    />

    <div class="mt-4">
      <p class="text-gray-600">
        <span class="font-medium">Local Time:</span> {{ localDateTime }}
      </p>
      <p class="text-gray-600">
        <span class="font-medium">UTC Time:</span> {{ utcDateTime }}
      </p>
    </div>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import moment from 'moment-timezone';
import { convertLocalToUTC, convertUTCToLocal } from '~/utils/timeUtils';

const timeZone = ref(moment.tz.guess()); // Detect the user's local timezone

// Reactive variables for local and UTC date-time
const localDateTime = ref(moment().format('YYYY-MM-DDTHH:mm'));
const utcDateTime = ref(convertLocalToUTC(localDateTime.value, timeZone.value));

// Function to update UTC time when local time changes
function updateUTC() {
  utcDateTime.value = convertLocalToUTC(localDateTime.value, timeZone.value);
}

// Watch for changes in localDateTime to automatically update UTC time
watch(localDateTime, (newVal) => {
  utcDateTime.value = convertLocalToUTC(newVal, timeZone.value);
});
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
