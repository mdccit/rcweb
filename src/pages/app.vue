<template>
  <div>

    <section>
        <!--start card 01 -->
        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white w-full p-3">
          <div class="flex">
            <img src="@/assets/user/images/Rectangle_117.png" alt="" class="rounded-lg w-14 h-14 mr-4">
            <div class="basis-full flex flex-col">
              <textarea  type="text" placeholder="Write your thoughts..." v-model="newPost.description"
              class="text-darkSlateBlue bg-culturedBlue placeholder-ceil rounded-xl border-0 focus:ring focus:ring-offset-2 focus:ring-steelBlue focus:ring-opacity-50 transition py-2 px-4 "> </textarea>
              
              <div class="flex justify-between items-center mt-2">
                <div class="flex space-x-2">
                  <!-- <button class="flex items-center space-x-1 text-lightred px-3 py-1 rounded-md text-sm bg-culturedBlue hover:bg-palePink transition">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor"
                      class="size-4">
                      <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                      <path fill-rule="evenodd"
                        d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="pl-1.5">Photo</span>
                  </button>
                  <button class="flex items-center space-x-1 text-steelBlue px-3 py-1 rounded-md text-sm bg-culturedBlue hover:bg-powderBlue transition">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor"
                      class="size-4">
                      <path
                        d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                    </svg>

                    <span class="pl-1.5">Video</span>
                  </button> -->
                </div>
                <button @click="writePost" class="bg-steelBlue hover:bg-darkAzureBlue transition text-white px-8 py-2 rounded-lg text-sm">Post</button>
              </div>
            </div>
          </div>
        </div>
        <!--end card 01 -->
    </section>


    <section>
        <!-- Iterate over posts and display them -->
        <div v-for="post in posts" :key="post.id"
          class="card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white w-full p-5 mt-3">
          <div class="flex items-start space-x-4">
            <div class="flex-1">
              <div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <img src="@/assets/user/images/Rectangle_117.png" alt="" class="rounded-lg w-12 h-12">
                    <div>
                      <div class="text-md font-bold text-black">{{ post.user.display_name }}</div>
                      <div class="flex space-x-2 items-center">
                        <!-- Display only for the coach - start -->
                        <!-- <div class="bg-mintGreen p-1 rounded-md flex items-center justify-center">
                          <img src="@/assets/images/coach-icon-green.png" alt="" class="w-4">
                        </div> -->
                        <!-- Display only for the coach - end -->

                        <!-- Display only for the school - start -->
                        <div class="bg-lightPink p-1 rounded-md flex items-center justify-center">
                          <img src="@/assets/images/college-icon-red.png" alt="" class="w-4">
                        </div>
                        <!-- Display only for the school - end -->

                        <div class="text-darkSlateBlue text-xs">{{ formatDate(post.updated_at) }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Display only for the school - start -->
                <hr class="mt-5 mb-3 text-pigeonBlue">

                <div class="flex space-x-3 items-center">
                  <img src="@/assets/user/images/Rectangle_117.png" alt="" class="rounded-lg w-10 h-10">
                  <div>
                    <div class="font-bold text-sm text-black">Coach Name</div>
                    <div class="text-darkSlateBlue text-xs">Coach at Whittier College</div>
                  </div>
                </div>
                <!-- Display only for the school - end -->

                <h3 v-if="post.type === 'blog' || post.type === 'event'" class="mt-4 text-darkSlateBlue text-base">
                  {{ post.title }}
                </h3>
                <p class="mt-4 text-darkSlateBlue text-base">{{ post.description }}</p>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between mt-3">
            <div class="flex items-center space-x-4">
              <button class="flex items-center space-x-1" @click="likePost(post.id)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5" :class="post.likes_count ? 'fill-orangeRed stroke-orangeRed' : 'fill-none'">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <span class="text-darkSlateBlue" v-if="post.likes_count">{{ post.likes_count }}</span>
              </button>
              <div>
                <h2>
                  <button type="button"
                    class="flex items-center space-x-1 text-darkSlateBlue dark:bg-white dark:text-darkSlateBlue"
                    data-accordion-target="#accordion-collapse-comment-2-body" aria-expanded="false"
                    aria-controls="accordion-collapse-comment-2-body">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-5" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>
                    <span class="text-darkSlateBlue" v-if="post.comments.length">{{ post.comments.length }}</span>
                  </button>
                </h2>
              </div>
            </div>
          </div>

          <!-- Comment Section Component -->
          <CommentSection :comments="post.comments" :postId="post.id"  @refreshComments="refreshComments"/>

          <div class="mt-4">
            <div class="flex space-x-3">
              <img src="@/assets/user/images/Rectangle_117.png" alt="" class="rounded-lg w-10 h-10">
              <div class="grow">
                <textarea v-model="newComment" type="text" placeholder="Write your comment..." class="w-full text-darkSlateBlue bg-culturedBlue placeholder-ceil rounded-xl border-0 focus:ring focus:ring-offset-2 focus:ring-steelBlue focus:ring-opacity-50 transition py-2 px-4"></textarea>
                <div class="flex justify-end mt-2">
                  <button @click="addComment(post.id)" class="bg-steelBlue hover:bg-darkAzureBlue transition text-white px-4 py-2 rounded-lg text-sm">Post Comment</button>
                </div>
              </div>
            </div>
          </div>
        

        </div>
    </section>


    <section>
        <!-- Content or Placeholder -->
    </section>

    <LoadingSpinner v-if="loading" />
    <!-- Notification Component -->
    <Notification v-if="showNotification" :message="notificationMessage" :type="notification_type" :duration="3000" />

  </div>

</template>

<script setup>
definePageMeta({
  layout: 'socialhub-three-column',
});

import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';


import LoadingSpinner from '~/components/LoadingSpinner.vue';
import Notification from '~/components/common/Notification.vue';
import CommentSection from '~/components/user/feed/CommentSection.vue';

// State variables
const posts = ref([]);
const newComment = ref('');

// State to hold new post data
const newPost = ref({
  description: '',
  type: 'post', // default type
  publisher_type: 'user', // default publisher type
  title: '',
});

const showNotification = ref(false); // To control the visibility of the notification
const notificationMessage = ref('');
const loading = ref(false);
const notification_type = ref('');


// Access feedService from the context
const nuxtApp = useNuxtApp();
const $feedService = nuxtApp.$feedService;

onMounted(async () => {
  try {
    const response = await $feedService.list_posts({});
    posts.value = response || [];
  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
});

// Function to create a new post
const writePost = async () => {
  try {
    const response = await $feedService.create_post(newPost.value);
    loadPosts();
    // Optionally, reload posts or redirect the user
  } catch (error) {
    console.error('Failed to create post:', error.message);
  }
};

const likePost = async (post_id) => {
  try {
    const response = await $feedService.like_post(post_id);
    console.log('Post liked successfully:', response);
    loadPosts(); // Optionally, reload posts to update the like count
  } catch (error) {
    console.error('Failed to like post:', error.message);
  }
};

const loadPosts = async () => {
  try {
    const response = await $feedService.list_posts({});
    posts.value = response;
  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
};

const addComment = async (postId) => {
  if (newComment.value.trim() === '') {
    return;
  }

  try {
    await $feedService.create_comment(postId, { content: newComment.value });
    newComment.value = ''; // Clear the comment input after submission
    loadPosts(); // Reload posts to update the comments section
  } catch (error) {
    console.error('Failed to add comment:', error.message);
  }
};


const fetchComments = async () => {
  try {
    comments.value = await nuxtApp.$feedService.get_all_post_comment(postId);
  } catch (error) {
    console.error('Failed to fetch comments:', error.message);
  }
};

const refreshComments = async () => {
  // await fetchComments();
  const response = await $feedService.list_posts({});
    posts.value = response;
  console.log('refreshed comments');
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};


</script>