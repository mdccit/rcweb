<template>
  <!-- Conditionally render the appropriate profile component -->
  <component :is="profileComponent" :user="user" />
</template>

<script setup>
import { ref, onMounted, computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useNuxtApp  } from '#app';

const user = ref(null); // Initialize the user as null, will be an object later
const loading = ref(true); // To show loading state
const error = ref(null); // To handle any potential errors

const route = useRoute(); // Access route params and query
const slug = route.params.slug;

// Fetch user data using the slug
const fetchUserData = async () => {
  const nuxtApp = useNuxtApp();
  const $userService = nuxtApp.$publicService; // Assuming $userService is your service

  try {
    loading.value = true; // Start loading
    if (slug) {
      const response = await $userService.get_user_profile(slug);
      user.value = response;
    }

    if (!user.value) {
      throw new Error("User not found");
    }

    // Define layout dynamically based on user role ID after fetching user data
    const roleId = user.value.user_basic_info?.user_role_id;
    switch (roleId) {
      case 4:
        // Player layout
        definePageMeta({ layout: 'profile-without-cover' });
        break;
      case 5:
        // Coach layout
        definePageMeta({ layout: 'profile-with-cover' });
        break;
      case 6:
        // Business User layout
        definePageMeta({ layout: 'profile-without-cover' });
        break;
      default:
        // Fallback layout
        definePageMeta({ layout: 'profile-without-cover' });
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
  console.log(roleId);
  switch (roleId) {
    case 4:
      // Load PlayerProfile component lazily
      return defineAsyncComponent(() => import('~/components/profiles/playerProfile.vue'));

    case 5:
      // Load CoachProfile component lazily
      return defineAsyncComponent(() => import('~/components/profiles/coachProfile.vue'));

    case 6:
      // Load Business User component lazily
      return defineAsyncComponent(() => import('~/components/profiles/businessUserProfile.vue'));

    default:
      // You can return a default component for roles that don't match
      return defineAsyncComponent(() => import('~/components/profiles/coachProfile.vue'));
  }
});
</script>

<style scoped>
/* Your styles here */
</style>
