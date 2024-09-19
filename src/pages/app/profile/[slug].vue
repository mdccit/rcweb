<template>
    <!-- Conditionally render the appropriate profile component -->
    <component :is="profileComponent" :user="user" />
</template>

<script setup>
import { ref, onMounted, computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useNuxtApp } from '#app';

const user = ref(null); // Initialize the user as null, will be an object later
const loading = ref(true); // To show loading state
const error = ref(null); // To handle any potential errors

const route = useRoute(); // Access route params and query
const id = route.query.id; // Extract id from query parameters (e.g., ?id=123)

// Fetch user data using the id
const fetchUserData = async () => {
  const nuxtApp = useNuxtApp();
  const $userService = nuxtApp.$adminService; // Assuming $adminService is your service

  try {
    loading.value = true; // Start loading
    if (id) {
      const response = await $userService.get_user_details(id);
      console.log(response); // Debugging: log the response to see the fetched data

      // Assign the response to the user ref
      user.value = response;
    }

    if (!user.value) {
      throw new Error("User not found");
    }

  } catch (err) {
    console.error("Error fetching user data:", err);
    error.value = err.message;
    user.value = null; // Set user to null if there is an error
  } finally {
    loading.value = false; // Stop loading when done
  }
};

onMounted(() => {
  fetchUserData();
});

// Computed property to dynamically import and select the correct profile component
const profileComponent = computed(() => {
  if (!user.value) return null;

  const roleId = user.value.user_basic_info?.user_role_id;

  switch (roleId) {
    case 2:
      // Load PlayerProfile component lazily
      return defineAsyncComponent(() => import('~/components/profiles/playerProfile.vue'));

    case 5:
      // Load CoachProfile component lazily
      return defineAsyncComponent(() => import('~/components/profiles/coachProfile.vue'));

    default:
      // You can return a default component for roles that don't match
      return defineAsyncComponent(() => import('~/components/profiles/playerProfile.vue'));
  }
});
</script>

<style scoped>
/* Your styles here */
</style>
