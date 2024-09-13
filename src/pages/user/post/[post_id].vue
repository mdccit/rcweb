<template>
  <section>
    <div v-if="loading">Loading post...</div>
    <div v-if="error">{{ error }}</div>

    <!-- Show the post using PostCard once it's loaded -->
    <PostCard v-if="post" :post="post"  @getPost="getPost"/>
  </section>
</template>

<script setup>
// Import necessary composables and components
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PostCard from '@/components/user/feed/PostCard.vue'; // Assuming PostCard.vue is used for displaying posts
import { useNuxtApp } from '#app';  // To access global services

definePageMeta({
  layout: 'socialhub-three-column',
});
// State variables
const post = ref(null);  // To store the post data
const loading = ref(true);  // To show loading state
const error = ref(null);  // To handle errors

// Access the route and extract the post_id from the URL
const route = useRoute();
const postId = route.params.post_id;

// Access Nuxt's injected services (e.g., your feedService)
const nuxtApp = useNuxtApp();
const $feedService = nuxtApp.$feedService;  // Assuming feedService is injected

// Fetch the post when the component is mounted
onMounted(async () => {
     getPost()
});

const getPost =async () =>{
  try {
    // Call the backend to fetch the post data
    const response = await $feedService.get_single_post_with_like_boolean(postId);
    post.value = response.message;  // Assuming the response contains the post in `message`
  } catch (err) {
    error.value = 'Failed to load the post.';
    console.error('Error fetching post:', err.message);
  } finally {
    loading.value = false;
  }
}




</script>

<style scoped>
/* Add any custom styles if necessary */
</style>
