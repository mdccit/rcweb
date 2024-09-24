<template>
  <div class="profile-card flex items-center justify-between p-4 bg-white border rounded-lg shadow-md">
    <!-- Profile Image Section -->
    <div class="flex items-center">
      <img :src="profile.profileImage" alt="Profile Image" class="w-16 h-16 rounded-full object-cover" />
    </div>

    <!-- Profile Details Section -->
    <div class="flex-1 px-4">
      <h4 class="font-bold text-lg text-black">{{ profile.name }}</h4>
      <p class="text-gray-500">{{ profile.role }}</p>
      <div class="text-gray-400 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mr-1 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9m0-4.243L17.657 12.9m0 4.243L13.414 16.9m0-4.243l4.243-4.243m0 4.243l-4.243-4.243" />
        </svg>
        <span>{{ profile.city }}, {{ profile.country }}</span>
      </div>
    </div>

    <!-- Action Section -->
    <div class="flex space-x-4">
      <!-- Example for Connect Button -->
      <button v-if="profile.connection_status === 'connect'" class="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Connect +
      </button>
      <!-- Example for Manage Button -->
      <button v-if="profile.connection_status === 'manage'" class="bg-gray-200 text-blue-500 px-4 py-2 rounded-lg">
        Manage
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  profile: Object
})
</script>

<style scoped>
/* You can add card-specific styling here if needed */
.profile-card {
  max-width: 600px;
  margin: 0 auto;
}
</style>
