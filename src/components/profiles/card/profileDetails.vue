<template>
  <div class="profile-details">
    <h4 class="profile-name">{{ profile.name }}</h4>
    <div class="flex items-center space-x-2 mb-2">
      <div class="bg-mintGreen p-1 rounded">
        <img :src="getRoleIcon()" alt="Role Icon" class="w-4 h-4" />
      </div>
      <div class="text-sm ml-2 text-blue-500">{{ profile.role }}</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-black mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </div>
      <div class="text-sm ml-2 text-black">{{ profile.city }}, {{ profile.country }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  profile: Object
})

// Helper function to get the appropriate role icon based on the profile's role
const getRoleIcon = () => {
  if (profile.role === 'Tennis Player') {
    return '@/assets/user/images/player-icon.png'; // Use the correct icon path for tennis player
  }
  // Add more conditions for different roles
  return '@/assets/user/images/default-icon.png'; // Fallback icon
}
</script>

<style scoped>
.profile-details {
  text-align: left;
}

.profile-name {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
