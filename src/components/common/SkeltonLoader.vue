<template>
  <div>
    <!-- Skeleton Loader -->
    <div v-for="n in repeatCount" :key="n" class="skeleton-post">
      <div class="skeleton-avatar"></div>
      <div class="skeleton-content">
        <div class="skeleton-line skeleton-line-short"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  repeatCount: {
    type: Number,
    default: 15, // Default number of skeleton items to show
  },
});
</script>

<style scoped>
.skeleton-post {
  display: flex;
  margin-bottom: 20px;
}

.skeleton-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(90deg, #e0e0e0 25%, rgba(0, 122, 234, 0.5) 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: gradient-shimmer 1.5s ease-in-out infinite;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 15px;
}

.skeleton-content {
  flex-grow: 1;
}

.skeleton-line {
  height: 12px;
  background: linear-gradient(90deg, #e0e0e0 25%, rgba(0, 122, 234, 0.5) 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: gradient-shimmer 1.5s ease-in-out infinite;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
}

.skeleton-line-short {
  width: 60%;
}

/* Animation for the blue gradient shimmer effect */
@keyframes gradient-shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
