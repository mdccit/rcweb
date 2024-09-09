<template>
  <nav class="bg-white text-black">
    <div class="container py-10 md:p-8 flex flex-row gap-4">
      <NuxtLink to="/" class="self-center flex-1 lg:flex-none ml-20 lg:ml-0 lg:mr-4">
        <img src="@/assets/images/logo.svg" alt="Logo" class="h-8">
      </NuxtLink>
      <div class="hidden lg:flex flex-row flex-1 self-center gap-8">
        <NuxtLink to="/pricing" class="font-bold self-center"> Pricing </NuxtLink>
        <NuxtLink to="/about" class="font-bold self-center"> About </NuxtLink>
        <NuxtLink @click="resourceRedirect" class="font-bold self-center"> Resources </NuxtLink>
        <!-- <NuxtLink to="/calls" class="font-bold self-center"> Calls </NuxtLink>
    <nav class="bg-white text-black">
        <div class="container-compact py-10 md:p-8 flex flex-row gap-4">
            <NuxtLink to="/" class="self-center flex-1 lg:flex-none ml-20 lg:ml-0 lg:mr-4">
                <img src="@/assets/images/logo.svg" alt="Logo" class="h-8">
            </NuxtLink>
            <div class="hidden lg:flex flex-row flex-1 self-center gap-8">
                <NuxtLink to="/pricing" class="font-bold self-center"> Pricing </NuxtLink>
                <NuxtLink to="/about" class="font-bold self-center"> About </NuxtLink>
                <NuxtLink to="/resources" class="font-bold self-center"> Resources </NuxtLink>
                <NuxtLink to="/calls" class="font-bold self-center"> Calls </NuxtLink>
                <NuxtLink to="/events" class="font-bold self-center"> Events </NuxtLink>
                <NuxtLink to="/blog" class="font-bold self-center"> Blog </NuxtLink> -->

        <div class="inline-flex self-center items-center" style="position: relative;">
          <div>
            <!-- <button type="button" aria-haspopup="true" class="inline-flex self-center items-center">
                            <button class="font-bold flex items-center -mt-[20px]"> More
                                <svg class="fill-current h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </button> -->
          </div>
          <div>
            <div data-splade-dropdown-id="OsLsg8zS0ckX7J68" class="absolute z-40" data-popper-placement="bottom-start"
              style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 24px);">
              <!---->
            </div>
          </div>
        </div>
      </div>
      <div class="self-center" v-if="!isLoggedIn && (userRole != 'default')">
        <NuxtLink to="/login"
          class="inline-block bg-black bg-opacity-10 text-center hover:opacity-80 active:opacity-60 text-black font-bold py-2.5 px-8 rounded-full">
          Login </NuxtLink>
      </div>
      <div class="self-center" v-else-if=isLoggedIn>
        <NuxtLink @click="logout"
          class="inline-block bg-black bg-opacity-10 text-center hover:opacity-80 active:opacity-60 text-black font-bold py-2.5 px-8 rounded-full">
          Logout </NuxtLink>
      </div>
    </div>
    <div class="flex flex-row gap-4 lg:hidden absolute top-9 left-7"><button
        class="flex w-10 h-10 bg-black/5 hover:bg-black/10 active:bg-black/15 transition flex-row text-center rounded-full flex items-center justify-center"><span><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg></span><span style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg></span></button></div>
    <div class="lg:hidden px-8" style="display: none;">
      <div class="flex flex-col gap-4 text-xl">

        <NuxtLink to="/pricing" class="font-bold self-center w-full"> Pricing </NuxtLink>
        <NuxtLink to="/about" class="font-bold self-center full"> About </NuxtLink>
        <NuxtLink to="/resources" class="font-bold self-center full"> Resources </NuxtLink>
        <NuxtLink to="/calls" class="font-bold self-center full"> Calls </NuxtLink>
        <NuxtLink to="/events" class="font-bold self-center full"> Events </NuxtLink>
        <NuxtLink to="/blog" class="font-bold self-center full"> Blog </NuxtLink>

      </div>
      <div class="pb-8"></div>
    </div>
  </nav>
  <!-- Notification Component -->
  <Notification v-if="showNotification" :message="notificationMessage" :type="notification_type" :duration="3000" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import Notification from '~/components/common/Notification.vue';

definePageMeta({ colorMode: 'light', });
const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;
const router = useRouter();

const userStore = useUserStore();
const showNotification = ref(false);
const notificationMessage = ref('');
const error = ref('');
const notification_type = ref('');

onMounted(() => {
  userStore.initializeUser();
});

const isLoggedIn = computed(() => userStore.isLoggedIn);
const isAuthenticated = computed(() => userStore.isAuthenticated);
const userRole = computed(() => userStore.role);

const logout = async () => {
  try {

    const token = localStorage.getItem('token');  // Retrieve the token from local storage

    if (!token) {
      userStore.clearUser();  // Clear user data if no token is found
      notificationMessage.value = 'You have been logged out.';
      notification_type.value = 'success';
      showNotification.value = true;

      // Use a timeout to display the notification before redirecting to login
      setTimeout(() => {
        router.push('/login');  // Redirect to login
      }, 2000);  // 2-second delay

      return;
    }

    // Call the logout API if the token exists
    const response = await $authService.logout({
      bearer_token: token
    });

    if (response.status === 200) {
      userStore.clearUser();  // Clear user data from Pinia store
      notificationMessage.value = response.display_message;
      notification_type.value = 'success';
      showNotification.value = true;

      setTimeout(() => {
        router.push('/login');  // Redirect to login after 2 seconds
      }, 2000);  // 2-second delay
    } else {
      notificationMessage.value = response.display_message;
      notification_type.value = 'failure';
      showNotification.value = true;
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
  } catch (err) {
    // Handle logout errors
    error.value = err.response?.data?.message || err.message;
    notification_type.value = 'failure';
    notificationMessage.value = err.message;
    showNotification.value = true;

    setTimeout(() => {
      router.push('/login');  // Ensure redirection to login even on error
    }, 2000);  // 2-second delay
  }
};

const resourceRedirect = async () => {

  if(!isLoggedIn){
    router.push('/login'); 
  }else{
    router.push('/resources'); 
  }
}

</script>

<style scoped></style>