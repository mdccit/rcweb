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
        <div v-else>
          <input v-model="editingCommentContent" type="text" class="border text-black rounded-lg p-2 w-full mb-2">
          <div class="flex space-x-2 mt-2">
            <button class="bg-steelBlue text-white px-4 py-2 rounded-lg"
              @click="updateComment(comment.id)">Update</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded-lg" @click="cancelEditComment">Cancel</button>
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
