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
                <button @click="writePost" class="bg-steelBlue hover:bg-darkAzureBlue transition text-white px-8 py-2 rounded-lg text-sm">
                  <span v-if="!postAdd"> Post</span>
                  <LoadingSpinner v-else />
                </button>
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
                  <div v-if="post.school_id != null" class="flex items-center space-x-3">
                    <img src="@/assets/user/images/Rectangle_117.png" alt="" class="rounded-lg w-12 h-12">
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

                        <div class="text-darkSlateBlue text-xs">{{ formatDate(post.updated_at) }}</div>
                      </div>
                    </div>
                  </div>
              
                
                </div>

                <!-- Display only for the school - start -->
                <hr  v-if="post.school" class="mt-5 mb-3 text-pigeonBlue">
                 <div class="flex items-center justify-between">
                <div class="flex space-x-3 items-center">
                  <img src="@/assets/user/images/Rectangle_117.png" alt="" class="rounded-lg w-10 h-10">
                  <div>
                    <div class="font-bold text-sm text-black">{{ post.user.display_name }}</div>
                    <div class="text-darkSlateBlue text-xs">{{ post.school_id != null ? post.school.name : '' }}</div>
                    <!-- <div class="text-darkSlateBlue text-xs">{{ formatDate(post.updated_at) }}</div> -->

                  </div>
                  
                </div>
                <button
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
                <!-- Action Dropdown menu -->
                <div  v-if="model_id ==post.id" id="post-dropdown" class="z-10  bg-white rounded-lg shadow w-30">
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
                      <button type="buttton" @click="postDelete(post.id)" class="block px-4 py-2 hover:bg-lightGray flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke-width="1.5" stroke="currentColor" class="size-4 mr-2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      Delete</button>
                    </li>
                  </ul>
                </div> 
              </div>
                
                <!-- Display only for the school - end -->
                
                <h3 v-if="post.type === 'blog' || post.type === 'event'" class="mt-4 text-darkSlateBlue text-base">
                  {{ post.title }}
                </h3>
                <div class="basis-full flex flex-col  ">
                <p @click="viewPost(post.id)" v-if="!editingPostId || editingPostId !== post.id"class="cursor-pointer mt-4 text-darkSlateBlue text-base"  v-html="post.description"></p>
                <textarea v-else  type="text" placeholder="Write your thoughts..." v-model="editPost"
                   class="mt-4 text-darkSlateBlue bg-culturedBlue placeholder-ceil rounded-xl border-0 focus:ring focus:ring-offset-2 focus:ring-steelBlue focus:ring-opacity-50 transition py-2 px-4 ">
                    
                   </textarea>
                  </div>
                  <button v-if="editingPostId == post.id" @click="startEditPost(post.id)" class="mt-2 bg-steelBlue hover:bg-darkAzureBlue transition text-white px-8 py-2 rounded-lg text-sm">
                     Edit     
                  </button>

              </div>
            </div>
          </div>

          <div class="flex items-center justify-between mt-3">
            <div class="flex items-center space-x-4">
              <button class="flex items-center space-x-1" :disabled="likeButton" @click="likePost(post.id,post), post.user_has_liked== true? post.likes_count=0 : post.likes_count = post.likes_count+1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5" :class="post.likes_count ? 'fill-orangeRed stroke-orangeRed' : 'fill-none'">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <span class="text-darkSlateBlue" v-if="post.likes_count">{{ post.likes_count }}</span>
              </button>
              <div>
                <h2>
                  <button type="button" @click="toggleCommentSection(post.id)"
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
import { useRouter } from 'vue-router';

const router = useRouter();

// State variables
const posts = ref([]);
const newComment = ref('');
const visibleCommentSections= ref({}) 
// State to hold new post data
const newPost = ref({
  description: '',
  type: 'post', // default type
  publisher_type: 'user', // default publisher type
  title: '',
});

const editPost =ref('')

const showNotification = ref(false); // To control the visibility of the notification
const notificationMessage = ref('');
const loading = ref(false);
const notification_type = ref('');
const commentAdd = ref(false)
const isHidddenComment =ref([])
// Access feedService from the context
const nuxtApp = useNuxtApp();
const $feedService = nuxtApp.$feedService;
const likeButton =ref(false)
const postAdd = ref(false)
const model_id = ref('');
const editingPostId = ref(null)

onMounted(async () => {
  window.addEventListener('scroll', handleScroll);

  try {
    const response = await $feedService.list_posts({});
    posts.value = response || [];
    const idsArray = [];
    for (const post of posts.value) {
      idsArray[post.id] = false
    }
    isHidddenComment.value =idsArray
  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
});
const handleScroll = () =>{
   model_id.value = ""
}
// Function to create a new post
const writePost =  async() => {
  try {

    postAdd.value =true
    let htmlText = newPost.value.description.replace(/\n/g, '<br>');
    let newValue ={
      description: htmlText,
      type: 'post', 
      publisher_type: 'user', 
      title: '',
    }
    const response = await $feedService.create_post(newValue);

    newPost.value = {
            description: '',
            type: 'post', 
            publisher_type: 'user', 
            title: '',
          }
    postAdd.value =false
    loadPosts();
   
 } catch (error) {
  showNotification.value =true;
  notificationMessage.value = error.message
  newPost.value = {
    description: '',
    type: 'post', 
    publisher_type: 'user', 
    title: '',
  }
  postAdd.value =false
     console.error('Failed to create post:', error.message);
 }
};

const likePost = async (post_id,post) => {
  try {
    likeButton.value =true
    if(post.user_has_liked){
      const response = await $feedService.unlike_post(post_id);
      
    }else{
      const response = await $feedService.like_post(post_id);
    }
    likeButton.value =false
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
  commentAdd.value =true;
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
  commentAdd.value =false;
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

const modelShow = (post_id) =>{
   model_id.value = post_id
}

const toggleCommentSection= (postId) => {
  isHidddenComment.value[postId] = !isHidddenComment.value[postId]
    
}

const isHiddden = (id) =>{
  return isHidddenComment.value[id] == false
}

const postDelete = async(post_id) =>{
  try {
    model_id.value = ""
    const response =  await nuxtApp.$feedService.delete_post(post_id);
    loadPosts(); 
  } catch (error) {
    console.error('Failed to fetch comments:', error.message);
  }
}

const postEditingShow = (post_id,description) =>{
  model_id.value = ""
   editingPostId.value = post_id

   editPost.value = description.replace(/<br>/g, '\n');
  
}

const startEditPost = async(post_id) =>{
  editingPostId.value = null
  try {
    model_id.value = ""
    let htmlText = editPost.value.replace(/\n/g, '<br>');
    let newValue ={
      description: htmlText,
      type: 'post', 
      publisher_type: 'user', 
      title: 'Post',
    }
    const response =  await nuxtApp.$feedService.update_post(post_id,newValue);
    loadPosts(); 
  } catch (error) {
    console.error('Failed to fetch comments:', error.message);
  }
}

const viewPost = (post_id) =>{
  router.push({
      path: '/user/post/'+post_id,
    });
}
</script>

<style scoped>
.hide {
  display: none;
}
</style>