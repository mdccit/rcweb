<template>
  <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white w-full p-5 mt-3">
    <div class="flex items-start space-x-4">
      <div class="flex-1">
        <div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <!-- Safely access user profile image and display default image if not available -->
              <!-- <img :src="post?.user?.profile_image || defaultImage" alt="User image" class="rounded-lg w-12 h-12"> -->
              <img src="@/assets/user/images/Rectangle_117.png" alt="User image" class="rounded-lg w-12 h-12">

              <div>
                <!-- Safely access user display name -->
                <div class="text-md font-bold text-black">{{ post?.user?.display_name || 'Unknown User' }}</div>
                <div class="flex space-x-2 items-center">
                  <div class="bg-lightPink p-1 rounded-md flex items-center justify-center">
                    <img src="@/assets/images/college-icon-red.png" alt="College icon" class="w-4">
                  </div>
                  <div class="text-darkSlateBlue text-xs">{{ formatDate(post?.updated_at) }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Show title only if available -->
          <h3 v-if="post?.title" class="mt-4 text-darkSlateBlue text-base">
            {{ post.title }}
          </h3>

          <!-- Post description -->
          <p class="mt-4 text-darkSlateBlue text-base" v-html=" post?.description"></p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between mt-3">
      <div class="flex items-center space-x-4">
        <!-- Like button -->
        <button class="flex items-center space-x-1" @click="likePost(post.id,post)">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-5" :class="post?.likes_count ? 'fill-orangeRed stroke-orangeRed' : 'fill-none'">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <span class="text-darkSlateBlue" v-if="post?.likes_count">{{ post.likes_count }}</span>
        </button>

        <!-- Comments button -->
        <button type="button" class="flex items-center space-x-1 text-darkSlateBlue">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
          </svg>
          <span class="text-darkSlateBlue" v-if="post?.comments?.length">{{ post.comments.length }}</span>
        </button>
      </div>
    </div>

    <!-- Comment Section (Optional) -->
    <CommentSection v-if="post?.comments?.length" :comments="post.comments" :postId="post.id" @refreshComments="refreshComments" />
  </div>
</template>

<script setup>
import CommentSection from '@/components/user/feed/CommentSection.vue';
import { useNuxtApp } from '#app';
import { ref, onMounted } from 'vue';


const nuxtApp = useNuxtApp();
const $feedService = nuxtApp.$feedService;
// Props
const props = defineProps({
  post: Object,  // Post object passed as a prop
});

// Default image to be used when profile image is not available
const defaultImage = "@/assets/user/images/Rectangle_117.png";

// Format date function
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

onMounted(() => {
    
    

  });

  
// Function to handle post like (for demonstration)
const likePost = async(postId,post) => {
  if(post.user_has_liked){
      const response = await $feedService.unlike_post(postId);
      
    }else{
      const response = await $feedService.like_post(postId);
    }
};

// Refresh comments (optional event handler)
const refreshComments = () => {
  console.log('Comments refreshed');
};
</script>

<style scoped>
/* Add any custom styles */
</style>
