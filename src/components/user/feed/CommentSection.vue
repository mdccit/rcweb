<template>
  <div>
    <hr class="my-3 text-pigeonBlue">
    <div v-for="comment in comments" :key="comment.id" class="flex space-x-3 my-5">
      <img src="@/assets/user/images/Rectangle_117.png" alt="" class="rounded-lg w-10 h-10">

      <div class="flex-grow">
        <!-- Display the user's display name -->
        <div class="text-black">{{ comment.user.display_name }}</div>
        <div class="flex items-center space-x-2">
          <!-- Use getTimeAgo function to show human-readable time -->
          <div class="text-darkSlateBlue text-xs">{{ getTimeAgo(comment.created_at) }}</div>
        </div>

        <!-- Display Comment -->
        <div v-if="!editingCommentId || editingCommentId !== comment.id">
          <p class="text-darkSlateBlue text-sm mt-2">{{ comment.content }}</p>
          <div v-if="comment.user_id == userId" class="flex space-x-2 mt-2">
            <!-- Edit and Delete Buttons -->
            <button class="text-sm text-blue-500" @click="startEditComment(comment.id)">Edit</button>
            <button class="text-sm text-red-500" @click="deleteComment(comment.id)">Delete</button>
          </div>
        </div>

        <!-- Edit Comment Form -->
        <div v-else class="mt-2">
          <textarea v-model="editingCommentContent" type="text" class="w-full text-darkSlateBlue bg-culturedBlue placeholder-ceil rounded-xl border-0 focus:ring focus:ring-offset-2 focus:ring-steelBlue focus:ring-opacity-50 transition py-2 px-4"></textarea>
          <div class="flex justify-end space-x-2 mt-2">
              <button @click="cancelEditComment"
                class="bg-darkSlateBlue hover:bg-darkSlateBlue transition text-white px-8 py-2 rounded-lg text-sm min-w-24"
                :disabled="false">
                <svg v-if="false" aria-hidden="true" role="status" class="inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
                <span v-if="!false">Cancel</span>
              </button>

              <button @click="updateComment(comment.id)"
                class="bg-steelBlue hover:bg-darkAzureBlue transition text-white px-8 py-2 rounded-lg text-sm min-w-24"
                :disabled="false">
                <svg v-if="false" aria-hidden="true" role="status" class="inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
                <span v-if="!false">Update</span>
              </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Optional: Show more comments link -->
    <!-- <a href="#" class="text-steelBlue hover:underline mt-2 block text-sm">Show all comments...</a> -->
  </div>
</template>


<script setup>
import { ref , onMounted} from 'vue';
import { useNuxtApp, useRouter } from '#app';
import { defineProps , defineEmits} from 'vue';
import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore()

const nuxtApp = useNuxtApp();
const userId = ref('')

const props = defineProps({
  comments: {
    type: Array,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  }
});


const emit = defineEmits(['refreshComments']);


// State for editing a comment
const editingCommentId = ref(null); // ID of the comment being edited
const editingCommentContent = ref(''); // Content of the comment being edited

// Start editing a comment (fetch the comment before displaying it for editing)
const startEditComment = async (commentId) => {
  try {
    // Fetch the comment data using get_comment
    const comment = await nuxtApp.$feedService.get_comment(commentId);
    // Set the editing state with the fetched comment data
    editingCommentId.value = commentId;
    editingCommentContent.value = comment.content;
    
  } catch (error) {
    console.error('Failed to fetch comment:', error.message);
  }
};
// Cancel editing a comment
const cancelEditComment = () => {
  editingCommentId.value = null;
  editingCommentContent.value = '';
};

// Update a comment
const updateComment = async (commentId) => {
  if (editingCommentContent.value.trim() === '') {
    return;
  }

  try {
    // Update the comment on the backend
    await nuxtApp.$feedService.update_comment(commentId, { content: editingCommentContent.value });

    // Emit an event to notify the parent to refresh comments
    emit('refreshComments');

    // Clear the editing state to hide the edit section and show the normal comment thread
    editingCommentId.value = null;
    editingCommentContent.value = '';
  } catch (error) {
    console.error('Failed to update comment:', error.message);
  }
};

// Delete a comment
const deleteComment = async (commentId) => {
  try {
    await nuxtApp.$feedService.delete_comment(commentId);
     // Emit an event to notify the parent to refresh comments
     emit('refreshComments');
    // loadPosts(); // Reload posts to update the comments section
  } catch (error) {
    console.error('Failed to delete comment:', error.message);
  }
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

onMounted(() => {
  userId.value = userStore.user.user_id

});
</script>

<style scoped>
/* Add any specific styles for the comment section here */
</style>
