<template>
  <div :class="['profile-card', themeClass, sizeClass]">
    <div class="flex items-center">
      <!-- Profile Image Section -->
      <ProfileImage :imageSrc="profile.profileImage" :size="size" />
      
      <!-- Profile Details Section -->
      <div class="flex-1 px-4">
        <ProfileDetails :profile="profile" />
      </div>
      
      <!-- UTR Section -->
      <div class="utr-section">
        <h4 class="text-black">UTR <span class="utr-value">{{ profile.utr }}</span></h4>
      </div>
    </div>

    <!-- Mutual Friends Section -->
    <div class="mt-2">
      <MutualFriends :mutualConnections="profile.mutualConnections" />
    </div>

    <!-- Actions Section (Heart Icon and Connect/Pending Buttons) -->
    <div class="flex justify-between items-center mt-4">
      <HeartIcon />
      <ProfileActions :status="profile.connection_status" :size="size" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import ProfileImage from './ProfileImage.vue'
import ProfileDetails from './ProfileDetails.vue'
import ProfileActions from './ProfileActions.vue'
import MutualFriends from './MutualFriends.vue'
import HeartIcon from './HeartIcon.vue'

// Props for profile data, size, and theme
const props = defineProps({
  profile: Object,
  size: {
    type: String,
    default: 'medium'
  },
  theme: {
    type: String,
    default: 'light'
  }
})

// Dynamic classes for size and theme
const sizeClass = computed(() => {
  return {
    'card-small': props.size === 'small',
    'card-medium': props.size === 'medium',
    'card-large': props.size === 'large'
  }
})

const themeClass = computed(() => {
  return {
    'theme-light': props.theme === 'light',
    'theme-dark': props.theme === 'dark'
  }
})
</script>

<style scoped>
/* General card styles */
.profile-card {
  padding: 1rem;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
}

/* UTR Section */
.utr-section h4 {
  font-size: 1rem;
}

.utr-value {
  color: #1e90ff;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
