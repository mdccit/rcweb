<template>
  <div class="profile-actions">
    <!-- Connect Button -->
    <button v-if="status === 'connect'" :class="['action-btn', sizeClass]" class="connect-btn">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-500 mr-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
      Connect +
    </button>

    <!-- Pending Button -->
    <button v-if="status === 'pending'" :class="['action-btn', sizeClass]" class="pending-btn">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-gray-500 mr-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
      Pending
    </button>

    <!-- Chat Button -->
    <button v-if="status === 'accepted'" :class="['action-btn', sizeClass]" class="chat-btn">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-green-500 mr-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
      Chat
    </button>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  status: String,
  size: {
    type: String,
    default: 'medium'
  }
})

const sizeClass = computed(() => {
  return {
    'btn-small': props.size === 'small',
    'btn-medium': props.size === 'medium',
    'btn-large': props.size === 'large'
  }
})
</script>

<style scoped>
/* Button styles */
.action-btn {
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}

/* Button sizes */
.btn-small {
  width: 70px;
  height: 35px;
}

.btn-medium {
  width: 85px;
  height: 35px;
}

.btn-large {
  width: 100px;
  height: 40px;
}

/* Button colors */
.connect-btn {
  background-color: #1e90ff;
  color: #fff;
}

.pending-btn {
  background-color: #808080; /* Grey */
  color: #fff;
}

.chat-btn {
  background-color: #28a745; /* Green */
  color: #fff;
}
</style>
