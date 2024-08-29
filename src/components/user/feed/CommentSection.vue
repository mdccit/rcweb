<template>
  <div>
    <hr class="mt-3 mb-3 text-pigeonBlue">
    <div v-for="comment in comments" :key="comment.id" class="flex space-x-4 mt-3">
      <img src="../../assets/user/images/Rectangle 117.png" alt="User Image" class="rounded-lg w-12 h-12 mr-4">
      <div>
        <!-- Display the user's display name -->
        <div class="text-lg font-semibold text-black">{{ comment.user.display_name }}</div>
        <div class="flex items-center space-x-2">
          <!-- Use getTimeAgo function to show human-readable time -->
          <div class="text-darkSlateBlue text-sm">{{ getTimeAgo(comment.created_at) }}</div>
        </div>
        <p class="text-darkSlateBlue text-base mt-2">{{ comment.content }}</p>
      </div>
    </div>
    <a href="#" class="text-steelBlue hover:underline mt-2 block text-sm">Show all comments...</a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  comments: {
    type: Array,
    required: true,
  }
});

const getTimeAgo = (date) => {
  const secondsAgo = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = Math.floor(secondsAgo / 31536000);
  if (interval >= 1) return interval === 1 ? '1 year ago' : `${interval} years ago`;

  interval = Math.floor(secondsAgo / 2592000);
  if (interval >= 1) return interval === 1 ? '1 month ago' : `${interval} months ago`;

  interval = Math.floor(secondsAgo / 604800);
  if (interval >= 1) return interval === 1 ? '1 week ago' : `${interval} weeks ago`;

  interval = Math.floor(secondsAgo / 86400);
  if (interval >= 1) return interval === 1 ? '1 day ago' : `${interval} days ago`;

  interval = Math.floor(secondsAgo / 3600);
  if (interval >= 1) return interval === 1 ? '1 hour ago' : `${interval} hours ago`;

  interval = Math.floor(secondsAgo / 60);
  if (interval >= 1) return interval === 1 ? '1 minute ago' : `${interval} minutes ago`;

  return secondsAgo === 1 ? '1 second ago' : `${secondsAgo} seconds ago`;
};
</script>

<style scoped>
/* Add any specific styles for the comment section here */
</style>
