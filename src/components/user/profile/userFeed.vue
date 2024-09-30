<template>
    <div>
        <div v-for="post in props.posts" :key="post.id" 
          class="card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white w-full p-5 mt-3">
          <div class="flex items-start space-x-4">
            <div class="flex-1">
              <div>
                <div class="flex items-center justify-between">
                  <div v-if="post.school_id != null" class="flex items-center space-x-3">
                    
                      <img src="@/assets/images/school.png" alt="" class="rounded-lg w-12 h-12">
                  
                    
                    <div>
                      <button @click="schoolProfile(post.school.slug)">
                          <div class="text-md font-bold text-black">{{ post.school.name }}</div>
                      </button>
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

                        <div class="text-darkSlateBlue text-xs">{{  getTimeAgo(post.updated_at) }}</div>
                      </div>
                    </div>
                  </div>
              
                
                </div>

                <!-- Display only for the school - start -->
                <hr  v-if="post.school" class="mt-5 mb-3 text-pigeonBlue">
                 <div class="flex items-center justify-between">
                <div class="flex space-x-3 items-center">
                  
                    <img src="@/assets/user/images/Rectangle_117.png" alt="" class="rounded-lg w-[35px] h-[35px]">
                 
                 
                  <div>
                    <button @click="userProfile(post.user.slug)">
                       <div class="font-bold text-sm text-black">{{ post.user.display_name }}</div>
                    </button>
                    <div v-if="post.school_id != null" class="text-darkSlateBlue text-xs">Coach at {{ post.school_id != null ? post.school.name : '' }}</div>
                    <div v-if="post.school_id == null"  class="text-darkSlateBlue text-xs">{{  getTimeAgo(post.updated_at) }}</div>

                  </div>
                  
                </div>
                <!-- <div>
                  <button v-if="post.user_id == userId"
                  :id="'post-button-' + post.id"
                  :aria-labelledby="'post-dropdown-' + post.id"
                  data-dropdown-toggle="'post-dropdown-' + post.id"
                  data-dropdown-delay="500"
                  data-dropdown-trigger="hover"
                  class="text-white bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  type="button"
                  @click="modelShow(post.id)"

                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 text-periwinkleBlue"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </button>
                <div  v-if="model_id ==post.id" id="post-dropdown" class="z-10  bg-white rounded-lg shadow w-30 absolute">
                  <ul class="py-2 text-sm"    >
                    <li class="text-black">
                      <button type="buttton" @click="postEditingShow(post.id, post.description)" class="block px-4 py-2 hover:bg-lightGray flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke-width="1.5" stroke="currentColor" class="size-4 mr-2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        Edit post
                      </button>
                    </li>
                    <li class="text-red">
                      <button type="buttton" @click="postDelete(post.id)" class="block px-4 py-2 text-red-500 hover:bg-lightGray flex w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke-width="1.5" stroke="currentColor" class="size-4 mr-2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      Delete</button>
                    </li>
                  </ul>
                </div>  -->
                </div>
                
              </div>
                
                <!-- Display only for the school - end -->
                
                <h3 v-if="post.type === 'blog' || post.type === 'event'" class="mt-4 text-darkSlateBlue text-base">
                  {{ post.title }}
                </h3>
                <div class="basis-full flex flex-col  ">
                <p  class="mt-4 text-darkSlateBlue text-base"  v-html="post.description"></p>
                <!-- <textarea v-else  type="text" placeholder="Write your thoughts..." v-model="editPost"
                   class="mt-4 text-darkSlateBlue bg-culturedBlue placeholder-ceil rounded-xl border-0 focus:ring focus:ring-offset-2 focus:ring-steelBlue focus:ring-opacity-50 transition py-2 px-4 ">
                    
                   </textarea>
                  </div>
                  <button v-if="editingPostId == post.id" @click="startEditPost(post.id)" class="mt-2 bg-steelBlue hover:bg-darkAzureBlue transition text-white px-8 py-2 rounded-lg text-sm">
                     Edit     
                  </button> -->

              </div>
            </div>
          </div>

           <div class="flex items-center justify-between mt-3">
            <div class="flex items-center space-x-4">
              <button  :class="likeButtonDisable.includes(post.id)?'cursor-default opacity-50 ':'flex items-center space-x-1' "  :disabled="likeButtonDisable.includes(post.id)" @click="likePost(post.id,post), post.user_has_liked== true? post.user_has_liked=false : post.user_has_liked = true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5" :class="post.user_has_liked ? 'fill-orangeRed stroke-orangeRed' : 'fill-none'">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <span class="text-darkSlateBlue" v-if="post.likes_count">{{ post.likes_count }}</span>
              </button>
              <div>
                <h2>
                  <button type="button"  @click="toggleCommentSection(post.id)"
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
              <button @click="viewPost(post.id)" class="flex items-center space-x-1 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </button>
            </div>
          </div> 
          <div :id="post.id" :class="{hide:isHiddden(post.id)}" >
            <!-- Comment Section Component -->
            <CommentSection  :comments="post.comments" :postId="post.id"  @refreshComments="refreshComments"/>
              <div class="mt-4">
               <div class="flex space-x-3">
                 <img src="@/assets/user/images/Rectangle_117.png" alt="" class="rounded-lg w-10 h-10">
                  <div class="grow">
                    <textarea v-model="newComment" type="text" placeholder="Write your comment..." class="w-full text-darkSlateBlue bg-culturedBlue placeholder-ceil rounded-xl border-0 focus:ring focus:ring-offset-2 focus:ring-steelBlue focus:ring-opacity-50 transition py-2 px-4"></textarea>
                    <div class="flex justify-end mt-2">
                      <button @click="addComment(post.id)" :disabled="commentAdd" class="bg-steelBlue hover:bg-darkAzureBlue transition text-white px-4 py-2 rounded-lg text-sm">
                        <span v-if="!commentAdd"> Post Comment</span>
                        <LoadingSpinner v-else />
                      </button>
                   </div>
                  </div>
                </div>
              </div>
          </div>                
        </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, defineExpose,ref, onMounted} from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '~/stores/userStore'
  import { useNuxtApp } from '#app';
  import CommentSection from '~/components/user/feed/CommentSection.vue';

  const commentAdd = ref(false)
  const isHidddenComment = ref([])
  const nuxtApp = useNuxtApp();
  const $feedService = nuxtApp.$feedService;
  const userStore = useUserStore()
  const userId = ref('')
  const userRole = ref('')
  const router = useRouter();
  const likeButtonDisable = ref([])
  const likeButton = ref(false)
  const emit = defineEmits(['profileView','listpost']);
  const newComment = ref('');

  const props = defineProps({
      posts: Array
   });
onMounted(async () => {
  userId.value = userStore.user.user_id
  userRole.value = userStore.user.role
  const idsArray = [];

     for (const post of props.posts) {
        idsArray[post.id] = false
      }
      isHidddenComment.value = idsArray
      console.log(7458)
      console.log( isHidddenComment.value)

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

const schoolProfile = (data) =>{
 
  router.push(`/app/profile/school/${data}`);

}

const userProfile = (data) =>{
  router.push(`/app/profile/${data}`);
}

const likePost = async (post_id, post) => {
    try {
      likeButtonDisable.value.push(post_id)
      if (post.user_has_liked) {
        await $feedService.unlike_post(post_id);
  
      } else {
        await $feedService.like_post(post_id);
      }
      emit('listpost')
  
      likeButtonDisable.value = likeButtonDisable.value.filter(item => item !== post_id);
  
  
    } catch (error) {
      console.error('Failed to like post:', error.message);
    }
  };

  const isHiddden = (id) => {
    return isHidddenComment.value[id] == false
  }

  const toggleCommentSection = (postId) => {
    isHidddenComment.value[postId] = !isHidddenComment.value[postId]
    console.log( isHidddenComment.value[postId])
  }

  const addComment = async (postId) => {
  
  if (newComment.value.trim() === '') {
    return;
  }
  commentAdd.value = true;

  try {
    await $feedService.create_comment(postId, { content: newComment.value });
    newComment.value = ''; // Clear the comment input after submission
    emit('listpost')
  } catch (error) {
    console.error('Failed to add comment:', error.message);
  }
  commentAdd.value = false;
};

  const refreshComments = async () => {
    emit('listpost')

  };

  const viewPost = (post_id) => {
    router.push({
      path: '/user/post/' + post_id,
    });
  }

  </script>

<style scoped>
.hide {
  display: none;
}
</style>