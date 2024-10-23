<template>
  <div class="container mx-auto mt-10">
    <LoadingSpinner v-if="loading" />
    <!-- Notification Component for showing messages -->
    <Notification v-if="showNotification" :message="notificationMessage" :type="notification_type" :duration="3000" />
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue'; // Import Notification component
import LoadingSpinner from '~/components/LoadingSpinner.vue';

const error = ref('');
const successMessage = ref('');
const router = useRouter();
const userStore = useUserStore();
const authType = ref('');

// Notification related states
const showNotification = ref(false);
const notificationMessage = ref('');
const loading = ref(false);
const notification_type = ref('');
const notificationKey = ref(0);

// Access authService from the context
const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;
const nprogress = nuxtApp.$nprogress;



// Function to handle the callback and get the code parameter
const handleGoogleAuthCallback = async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const type = localStorage.getItem('authType');

  if (!type) {
    nprogress.start();
    // If authType is not set in localStorage
    nuxtApp.$notification.triggerNotification('User not found. Redirecting to login.', 'failure');
    // Wait for the notification to be displayed and then redirect to the login page
    setTimeout(() => {
      router.push('/login');
    }, 2000); // Adjust delay as necessary to ensure the user sees the notification
    nprogress.done();
    return;
  }

  if (code) {
    try {
      nprogress.start();
      let response;
      if (type === 'login') {
        response = await $authService.googleLogin(code);
      } else {
        response = await $authService.googleRegister(code);
      }

      const token = response.data.token;
      if (process.client) {
        localStorage.setItem('token', token);
      }

      const userRole = localStorage.getItem('user_role');
      userStore.setUser({
        email: '',
        role: response.data.user_role,
        token: token,
        user_permission_type: response.data.user_permission_type,
        user_id: response.data.user_id,
        user_name:response.data.user_name,
        user_slug:response.data.user_slug,
        user_type_id:response.data.user_type_id
      });
      const newMedia = response.data.media_info.profile_picture??null

      userStore.setProfilePicture(newMedia)


      if(type === 'login'){
        if(userRole === 'default' || userRole === 'undefined' || userRole === undefined){
          nuxtApp.$notification.triggerNotification(response.display_message, 'success');
          router.push({ name: 'register-step-two-token', params: { token: response.data.token } });
        }else if(['player', 'admin', 'coach','parent', 'business_user'].includes(userRole)){
          nuxtApp.$notification.triggerNotification(response.display_message, 'success');
            router.push('/app');
        }else{
          nuxtApp.$notification.triggerNotification(response.display_message, 'success');
          router.push('/login');
        }
      }else{
        router.push({ name: 'register-step-two-token', params: { token: response.data.token } });
      }
   
    } catch (error) {
      nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    }finally{
      nprogress.done();
    }
  }else if (!code) {
  nuxtApp.$notification.triggerNotification('Authorization code not found. Redirecting to login.', 'failure');
  router.push('/login');  // Redirect to login if no authorization code is found
  loading.value = false;  // Stop loading in case of error
}
};

// Ensure the callback is handled when the component is mounted
onMounted(handleGoogleAuthCallback);
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
}
</style>
