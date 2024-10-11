<template>
  <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white w-full p-5 mt-3">
    <div class="flex items-start space-x-4">
      <div class="flex-1">
        <div>
          <div class="flex items-center justify-between">
            <div v-if="post.school_id != null" class="flex items-center space-x-3">
              <!-- <img src="@/assets/images/school.png" alt="" class="rounded-lg w-12 h-12"> -->
              <img v-if="post.school_profile_picture ==null" src="@/assets/images/user.png" alt="" class="rounded-lg w-12 h-12">
              <img v-if="post.school_profile_picture !=null" :src="post.school_profile_picture.url" alt="" class="rounded-lg w-12 h-12">
              <div>
                <div class="text-md font-bold text-black">{{ post.school.name }}</div>
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

                  <div class="text-darkSlateBlue text-xs">{{ getTimeAgo(post.updated_at) }}</div>
                </div>
              </div>
            </div>


          </div>
          <hr v-if="post.school" class="mt-5 mb-3 text-pigeonBlue">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <!-- Safely access user profile image and display default image if not available -->
              <!-- <img :src="post?.user?.profile_image || defaultImage" alt="User image" class="rounded-lg w-12 h-12"> -->
              <!-- <img src="@/assets/user/images/Rectangle_117.png" alt="User image" class="rounded-lg w-12 h-12"> -->
              <img v-if="post.user_profile_picture ==null" src="@/assets/images/user.png" alt="" class="rounded-lg w-10 h-10">
              <img v-if="post.user_profile_picture !=null" src="@/assets/user/images/Rectangle_117.png" alt="" class="rounded-lg w-10 h-10">
              <div>
                <!-- Safely access user display name -->
                <div class="text-md font-bold text-black">{{ post?.user?.display_name || 'Unknown User' }}</div>
                <div class="flex space-x-2 items-center">
                  <div v-if="post.school_id != null" class="text-darkSlateBlue text-xs">Coach at {{ post.school_id !=
                    null ? post.school.name : '' }}</div>

                  <!-- <div class="bg-lightPink p-1 rounded-md flex items-center justify-center">
                    <img src="@/assets/images/college-icon-red.png" alt="College icon" class="w-4">
                  </div> -->
                  <div v-if="post.school_id == null" class="text-darkSlateBlue text-xs">{{ getTimeAgo(post.updated_at)
                    }}</div>
                </div>
              </div>
            </div>
            <div>
              <button v-if="post.user_id == userId" :id="'post-button-' + post.id"
                :aria-labelledby="'post-dropdown-' + post.id" data-dropdown-toggle="'post-dropdown-' + post.id"
                data-dropdown-delay="500" data-dropdown-trigger="hover"
                class="text-white bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button" @click="modelShow()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5 text-periwinkleBlue">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
              </button>

              <div v-if="model" id="post-dropdown" class="z-10  bg-white rounded-lg shadow w-30 absolute">
                <ul class="py-2 text-sm">
                  <li class="text-black">
                    <button type="buttton" @click="postEditingShow(post.id, post.description)"
                      class="block px-4 py-2 hover:bg-lightGray flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                      Edit post
                    </button>
                  </li>
                  <li class="text-red">
                    <button type="buttton" @click="postDelete(post.id)"
                      class="block px-4 py-2 hover:bg-lightGray flex text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                      Delete</button>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <!-- Show title only if available -->
          <h3 v-if="post.type === 'blog' || post.type === 'event'" class="mt-4 text-darkSlateBlue text-base">
            {{ post.title }}
          </h3>


          <!-- Media Section -->
          <PostMedia :media="post.media" :hasMedia="post.has_media" />


          <!-- Post description -->
          <!-- <p class="mt-4 text-darkSlateBlue text-base" v-html=" post?.description"></p> -->
          <p v-if="meesge != ''" class="mt-4 text-sm text-red-600 dark:text-red-500">{{ meesge }}</p>
          <p v-if="!editingPostId || editingPostId !== post.id" class="mt-4 text-darkSlateBlue text-base"
            v-html="post.description"></p>





          <textarea v-else type="text" placeholder="Write your thoughts..." v-model="editPost"
            class="mt-4 w-full text-darkSlateBlue bg-culturedBlue placeholder-ceil rounded-xl border-0 focus:ring focus:ring-offset-2 focus:ring-steelBlue focus:ring-opacity-50 transition py-2 px-4 ">

            </textarea>

        </div>
        <button v-if="editingPostId == post.id" @click="startEditPost(post.id)"
          class="mt-2 bg-steelBlue hover:bg-darkAzureBlue transition text-white px-8 py-2 rounded-lg text-sm">
          Edit
        </button>
      </div>
    </div>

    <div class="flex items-center justify-between mt-3">
      <div class="flex items-center space-x-4">
        <!-- Like button -->
        <button :class="likeButton ? 'cursor-default opacity-50 ' : 'flex items-center space-x-1'" :disabled="likeButton"
          @click="likePost(post.id, post), post.user_has_liked == true ? post.user_has_liked = false : post.user_has_liked = true">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-5"
            :class="post?.user_has_liked ? 'fill-orangeRed stroke-orangeRed transform transition duration-500 ease-in-out' : 'fill-none transform transition duration-500 ease-in-out'">
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
    <CommentSection v-if="post?.comments?.length" :comments="post.comments" :postId="post.id"
      @refreshComments="refreshComments" />
    <div class="mt-4">
      <div class="flex space-x-3">
        <img src="@/assets/user/images/Rectangle_117.png" alt="" class="rounded-lg w-10 h-10">
        <div class="grow">
          <textarea v-model="newComment" type="text" placeholder="Write your comment..."
            class="w-full text-darkSlateBlue bg-culturedBlue placeholder-ceil rounded-xl border-0 focus:ring focus:ring-offset-2 focus:ring-steelBlue focus:ring-opacity-50 transition py-2 px-4"></textarea>
          <div class="flex justify-end mt-2">
            <button @click="addComment(post.id)"
              class="bg-steelBlue hover:bg-darkAzureBlue transition text-white px-8 py-2 rounded-lg text-sm min-w-40"
              :disabled="commentAdd">
              <span v-if="!commentAdd"> Post Comment</span>
              <!-- <LoadingSpinner v-else /> -->
              <svg v-else aria-hidden="true" role="status" class="inline w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB" />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CommentSection from '@/components/user/feed/CommentSection.vue';
import { useNuxtApp } from '#app';
import { ref, onMounted } from 'vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';
import PostMedia from '~/components/user/feed/PostMedia.vue';
import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore()
const emit = defineEmits(['getPost', 'deletedPost']);

const userId = ref('')

const nuxtApp = useNuxtApp();
const $feedService = nuxtApp.$feedService;
const likeButton = ref(false)
const model = ref(false)
const editingPostId = ref(null)
const editPost = ref('')
const meesge = ref('')
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

const commentAdd = ref(false)
const newComment = ref('');

onMounted(() => {

  userId.value = userStore.user.user_id


});


const likePost = async (post_id, post) => {
  try {
    likeButton.value = true
    if (post.user_has_liked) {
      const response = await $feedService.unlike_post(post_id);

    } else {
      const response = await $feedService.like_post(post_id);
    }
    emit('getPost')
    likeButton.value = false

  } catch (error) {
    console.error('Failed to like post:', error.message);
  }
};
// Refresh comments (optional event handler)
const refreshComments = () => {
  emit('getPost')
};

const addComment = async (postId) => {

  if (newComment.value.trim() === '') {
    return;
  }
  commentAdd.value = true;
  try {
    await $feedService.create_comment(postId, { content: newComment.value });
    newComment.value = '';
    emit('getPost')
    // Clear the comment input after submission
    // loadPosts(); // Reload posts to update the comments section
  } catch (error) {
    console.error('Failed to add comment:', error.message);
  }
  commentAdd.value = false;
};

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

const modelShow = () => {
  model.value = true

}

const postEditingShow = (post_id, description) => {
  model.value = ""
  editingPostId.value = post_id

  editPost.value = description.replace(/<br>/g, '\n');

}

const startEditPost = async (post_id) => {
  if (editPost.value.trim() === '') {
    meesge.value = 'The description field is required'
    return;
  }
  meesge.value = ''
  editingPostId.value = null
  try {
    model.value = ""
    let htmlText = editPost.value.replace(/\n/g, '<br>');
    let newValue = {
      description: htmlText,
      type: 'post',
      publisher_type: 'user',
      title: 'Post',
    }
    const response = await nuxtApp.$feedService.update_post(post_id, newValue);
    emit('getPost')

  } catch (error) {
    console.error('Failed to fetch comments:', error.message);
  }
}
const postDelete = async (post_id) => {
  try {
    model.value = false
    const response = await $feedService.delete_post(post_id);
    emit('deletedPost')
  } catch (error) {
    console.error('Failed to fetch comments:', error.message);
  }
}
</script>

<style scoped>
/* Add any custom styles */
</style>
