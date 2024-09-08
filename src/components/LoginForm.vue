<template>
  <div class="w-full mt-6 mx-4 p-12 bg-white rounded-lg overflow-hidden sm:max-w-lg">
    <div class="flex mt-2 mb-12 gap-4">
      <h2 class="self-center text-2xl font-bold flex-1 text-gray-900">Login</h2>
      <div class="self-center">
        <NuxtLink to="/forgot-password" class=" text-blue-500 text-right block font-bold">Can't sign in?</NuxtLink>
      </div>
    </div>

    <div class="w-full">
      <label class="block">
        <span class="block mb-1 text-gray-700 font-sans">Email <span aria-hidden="true" class="text-red-600"
            title="This field is required">*</span></span>
        <div class="flex rounded-lg border border-gray-300 shadow-sm">
          <input v-model="email"
            class="block px-5 py-3 text-black w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
            name="email" type="email" data-validation-key="email" id="email" required autofocus>
        </div>
      </label>
    </div>
    <div class="w-full">
      <label class="block">
        <span class="block mb-1 text-gray-700 font-sans">Password <span aria-hidden="true" class="text-red-600"
            title="This field is required">*</span></span>
        <div class="flex rounded-lg border border-gray-300 shadow-sm">
          <input v-model="password"
            class="block px-5 py-3 text-black w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
            name="password" type="password" data-validation-key="password" id="password" required
            autocomplete="current-password">
        </div>
      </label>
    </div>
    <div class="flex items-center mb-4 mt-5">
      <div class="mr-3">
        <label class="flex items-center">
          <input name="remember" type="checkbox" data-validation-key="remember" v-model="rememberMe"
            class="rounded-full p-3 border-border-alt text-black shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
          <span class="ml-4 text-gray-500">Remember me</span>
        </label>
      </div>
    </div>
    <div>
      <button @click="userLogin"
        class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 text-white border-transparent focus:border-blue-300 focus:ring-blue-200 block w-full"
        :disabled="loading">
        <div class="flex flex-row items-center justify-center">
          <span v-if="!loading">Login</span>
          <LoadingSpinner v-else />
        </div>
      </button>
    </div>
    <div class="w-full mt-5">
      <button type="button" @click="initiateGoogleAuth('login')"
        class="py-2.5 w-full px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700">
        <span><img class="absolute -mt-13" src="@/assets/images/google_icon.png"></span>Sign In with Google
      </button>
    </div>
    <div class="text-center mt-8 pt-4 text-sm">
      <NuxtLink to="/register"><span class="text-black">Don't have an account yet? </span><br><strong
          class="text-black">Create new account</strong></NuxtLink>
    </div>

    <!-- Display error messages -->
    <div v-if="errors.length" class="error-messages">
      <!-- <p class="error-title">Validation Errors:</p> -->
      <ul class="error-list">
        <li v-for="(error, index) in splitErrors" :key="index" class="error-item">
          {{ error }}
        </li>
      </ul>
    </div>

    <!-- Notification Component -->
    <Notification v-if="showNotification" :message="notificationMessage" :type="notification_type" :duration="3000" />
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import { useNuxtApp } from '#app';
import Cookies from 'js-cookie';

import Notification from '~/components/common/Notification.vue';
import LoadingSpinner from '~/components/LoadingSpinner.vue';


const email = ref('');
const rememberMe = ref(false);
const password = ref('');
const error = ref('');
const notification_type = ref('');
const successMessage = ref('');
const router = useRouter();
const userStore = useUserStore();

const errors = ref([]);;
const authType = ref('');
const showNotification = ref(false);
const notificationMessage = ref('');
const loading = ref(false);
const notificationType = ref('');

definePageMeta({ colorMode: 'light', })

// Access authService from the context
const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;

// Computed property to split error messages by comma
const splitErrors = computed(() => errors.value.flatMap((error) => error.split(',')));


// Function to handle authentication
const userLogin = async () => {
  try {
    console.log('submitting');
    error.value = '';  // Clear previous error messages
    successMessage.value = '';  // Clear previous success messages
    notification_type.value = '';  // Reset notification type

    // Send login request to auth service
    const response = await $authService.login(email.value, password.value);

    if (response.status === 200) {
      // Successful login
      successMessage.value = response.display_message;

      // Set the user in the Pinia store
      userStore.setUser({
        email: email.value,
        role: response.data.user_role,  // Corrected role property
        token: response.data.token,
        user_permission_type: response.data.user_permission_type
      });

      // Set success notification
      notification_type.value = 'success';
      notificationMessage.value = response.display_message;
      showNotification.value = true;

      // Set session cookie (conditionally for remember me)
      if (rememberMe.value) {
        Cookies.set('session', response.data.token, { expires: 1 });  // 24-hour session
      } else {
        Cookies.set('session', response.data.token);  // No expiration for session cookie
      }

      // Delay routing to show notification for 3 seconds
      setTimeout(() => {
        // Conditionally redirect based on user role and permissions
        if (response.data.user_permission_type === 'none' && (response.data.user_role === 'coach' || response.data.user_role === 'business')) {
          router.push('/user/approval-pending');  // Redirect to pending approval page
        } else {
          router.push('/admin/dashboard');  // Redirect to dashboard
        }
      }, 1000);  // 1-second delay to show notification
    } else {
      // Handle non-200 response (e.g., wrong credentials)
      error.value = response.display_message;
      errors.value.push(response.display_message);
    }
  } catch (err) {
    // Handle errors in the login process
    error.value = err.message;
    notification_type.value = 'failure';
    notificationMessage.value = err.message;
    showNotification.value = true;

    // Handle error messages from the API response
    if (err.response?.data?.message) {
      if (Array.isArray(err.response.data.message)) {
        errors.value = err.response.data.message;
      } else {
        errors.value = [err.response.data.message];
      }
    } else {
      errors.value = [err.response?.data?.message || err.message];
    }
  }
};

// Function to handle Google authentication
const initiateGoogleAuth = async (type) => {
  try {
    authType.value = type;
    localStorage.setItem('authType', type);
    const authUrl = await $authService.getGoogleAuthUrl();
    window.location.href = authUrl; // Redirect to Google authentication URL
  } catch (err) {
    notificationType.value = 'failure';
    notificationMessage.value = err.message;
    showNotification.value = true;
  }
};

onMounted(() => {
  const sessionToken = Cookies.get('session');  // Check if session token exists
  if (sessionToken) {
    rememberMe.value = true;
    const user = userStore.getUser();  // Get user from userStore

    setTimeout(() => {
      // Redirect user based on role or permission
      if (user && user.user_permission_type === 'none' && user.user_role === 'coach') {
        router.push('/user/approval-pending');
      } else {
        router.push('/admin/dashboard');
      }
    }, 1000);
  }
});

</script>


<style scoped>
form {
  max-width: 400px;
  margin: auto;
}

.container {
  max-width: 400px;
}

.error-messages {
  margin-top: 20px;
  color: red;
}

.error-title {
  font-weight: bold;
}

.error-list {
  list-style-type: disc;
  /* Ensure bullet points are shown */
  margin-left: 20px;
  /* Indent the list */
}

.error-item {
  margin-bottom: 5px;
}
</style>
