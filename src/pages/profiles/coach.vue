<template>
    <!-- Conditionally render the appropriate profile component -->
    <coachProfile/>
</template>

<script setup>
import { ref, onMounted, computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useNuxtApp } from '#app';
import coachProfile from '~/components/profiles/coachProfile.vue';

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

    
        return defineAsyncComponent(() => import('~/components/profiles/coachProfile.vue'));

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

</script>

<style scoped>
/* Your styles here */
</style>