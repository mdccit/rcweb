<template>
  <div :class="['profile-image', imageSizeClass]">
    <img :src="imageSrc" alt="Profile Image" class="rounded-2xl" />
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  imageSrc: String,
  size: {
    type: String,
    default: 'medium'
  }
})

const imageSizeClass = computed(() => {
  return {
    'image-small': props.size === 'small',
    'image-medium': props.size === 'medium',
    'image-large': props.size === 'large'
  }
})
</script>

<style scoped>
/* Image size classes */
.image-small img {
  width: 50px;
  height: 50px;
}

.image-medium img {
  width: 85px;
  height: 85px;
}

.image-large img {
  width: 120px;
  height: 120px;
}
</style>
