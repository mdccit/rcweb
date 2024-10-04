<template>
  <div class="w-full mt-6 mx-4 p-12 bg-white rounded-lg overflow-hidden sm:max-w-lg">
    <div class="space-y-4">
      <div class="flex mt-2 mb-12 gap-4">
        <h2 class="self-center text-2xl font-bold flex-1 text-gray-900">Login</h2>
        <div class="self-center">
          <NuxtLink to="/forgot-password" class=" text-steelBlue text-right block font-bold">Can't sign in?</NuxtLink>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="w-full">
        <label class="block">
          <span class="block mb-1 text-gray-700 font-sans">Email <span aria-hidden="true" class="text-red-600"
              title="This field is required">*</span></span>
          <div class="flex rounded-lg border border-gray-300 shadow-sm">
            <input v-model="email"
              class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
              name="email" type="email" data-validation-key="email" id="email" required autofocus>
          </div>
          <InputError :error="errors.email ? errors.email.join(', ') : ''" />
          <!-- Email Validation Error -->

        </label>
      </div>
      <div class="w-full">
        <label class="block">
          <span class="block mb-1 text-gray-700 font-sans">Password <span aria-hidden="true" class="text-red-600"
              title="This field is required">*</span></span>
          <div class="flex rounded-lg border border-gray-300 shadow-sm">
            <input v-model="password"
              class="block px-5 py-3 w-full border-0 focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
              name="password" type="password" data-validation-key="password" id="password" required autofocus
              autocomplete="current-password">
          </div>
          <InputError :error="errors.password ? errors.password.join(', ') : ''" />
          <!-- Password Validation Error -->

        </label>
      </div>
      <div class="flex items-center mb-4 mt-5">
        <div class="mr-3">
          <label class="flex items-center">
            <input name="remember" type="checkbox" data-validation-key="remember" v-model="rememberMe"
              class="rounded-full p-3 border-border-alt text-steelBlue shadow-sm focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50">
            <span class="ml-4 text-gray-500">Remember me</span>
          </label>
        </div>
      </div>
      <div>
        <button type="submit"
          class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-steelBlue hover:bg-darkAzureBlue text-white border-transparent focus:border-lightAzure focus:ring-lightPastalBlue block w-full transition"
          :disabled="loading">
          <svg v-if="loading" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
          </svg>
          Login
        </button>
      </div>
    </form>

      <div class="w-full mt-5">
        <button type="button" @click="initiateGoogleAuth()"
          class="py-2.5 w-full px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-steelBlue focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 transition">
          <span><img class="absolute -mt-13" src="@/assets/images/google_icon.png"></span>Sign In with Google
        </button>
      </div>
      <div class="text-center mt-4 text-sm">
        <NuxtLink to="/register"><span class="text-black">Don't have an account yet? </span><br><strong
            class="text-steelBlue">Create new account</strong></NuxtLink>
      </div>
    </div>
    
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import { useNuxtApp } from '#app';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
import { handleError } from '@/utils/handleError';
import InputError from '@/components/common/input/InputError.vue';

const email = ref('');
const rememberMe = ref(false);
const password = ref('');
const error = ref('');

const router = useRouter();
const userStore = useUserStore();

const errors = ref({});
const authType = ref('');
const notification_type = ref('');
const successMessage = ref('');
const showNotification = ref(false);
const notificationMessage = ref('');
const loading = ref(false);


// Access authService from the context
const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;

const handleSubmit = () => {

  userLogin(false);  // Manually submitting, so autoLogin is false
};

// Function to handle user login
const userLogin = async (autoLogin = false) => {
  try {
    nuxtApp.$nprogress.start(); 
    errors.value = {};  // Reset errors before submitting
    loading.value = true;  // Set loading state

    // Make login request to backend
    const response = await $authService.login(email.value, password.value);
    if (response.status === 200) {
      nuxtApp.$nprogress.done(); 

      // Save credentials if rememberMe is checked and it's not autoLogin
      if (!autoLogin && rememberMe.value) {
        const credentials = {
          username: email.value,  // Corrected from 'username' to 'email'
          password: password.value,
        };     
        saveEncryptedCredentials(credentials);  // Save the credentials
      }
      //set user Slug
      userStore.setUserSlug(response.data.user_slug??null)
      // Set the user in the Pinia store
      userStore.setUser({
        email: email.value,
        role: response.data.user_role,
        token: response.data.token,
        user_permission_type: response.data.user_permission_type,
        user_id:response.data.user_id,
        user_name:response.data.user_name,
        user_slug:response.data.user_slug
      });
      userStore.setProfilePicture(response.data.media_info.profile_picture)

      // Set success notification
      // nuxtApp.$notification.triggerNotification(response.display_message, 'success');

      // Set session cookie (conditionally for remember me)
      if (rememberMe.value) {
        Cookies.set('session', response.data.token, { expires: 1 });  // 24-hour session
      } else {
        Cookies.set('session', response.data.token);  // No expiration for session cookie
      }

      // Delay routing to show notification for 1 second
      setTimeout(() => {
        if (response.data.user_permission_type === 'none' && (response.data.user_role === 'coach' || response.data.user_role === 'business_manager')) {
          router.push('/user/approval-pending');  // Redirect to pending approval page
        } else if (response.data.user_permission_type != 'none' && (response.data.user_role === 'coach' || response.data.user_role === 'business_manager')) {
          router.push('/app');  
        } else if(['player', 'admin', 'parent'].includes(response.data.user_role)){
          router.push('/app');  // Redirect to Feed
        } else if ((response.data.user_role === 'default')){
          router.push({ name: 'register-step-two-token', params: { token: response.data.token } });
        }else{
          nuxtApp.$notification.triggerNotification('No valid session found', 'warning');
          router.push('/login'); 
        }
      }, 1000);
    }else{
      nuxtApp.$nprogress.done(); 
      nuxtApp.$notification.triggerNotification(response.display_message, 'warning');
    }
  } catch (error) {
    nuxtApp.$nprogress.done(); 
    nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
  } finally {
    loading.value = false;  // Reset loading state
  }
};

// Function to handle Google authentication
const initiateGoogleAuth = async () => {
  try {
    localStorage.removeItem('authType');
    localStorage.setItem('authType', 'login');
    const authUrl = await $authService.getGoogleAuthUrl();
    window.location.href = authUrl; // Redirect to Google authentication URL
  } catch (err) {
    nuxtApp.$notification.triggerNotification(err.message,'failure');
  }
};

onMounted(() => {
  const savedCredentials = localStorage.getItem('encryptedCredentials');
  const sessionToken = Cookies.get('session');  // Check if session token exists
  const authType = localStorage.getItem('authType');
  const userToken = localStorage.getItem('token') || null;  // Set token to null if not found

  if (savedCredentials) {
    const decryptedData = decryptCredentials(savedCredentials);
    if (decryptedData) {
      email.value = decryptedData.username;  
      password.value = decryptedData.password;
      rememberMe.value = true;

      // Auto-login with the saved credentials
      // userLogin(true);  // Change 'handleLogin(true)' to 'userLogin(true)'
    }
  } else if (authType == 'login' && userToken ) {
    const userRole = localStorage.getItem('user_role');
    
    if (userRole === 'default') {
      userStore.setTempUser(userRole, userToken);
      router.push({ name: 'register-step-two-token', params: { token: userToken } });
    }else{
      router.push('/app');  
    }
  } else if (authType == 'register' && userToken) {
    const userRole = localStorage.getItem('user_role');
      userStore.setTempUser(userRole, userToken);
      router.push({ name: 'register-step-two-token', params: { token: userToken } });
  } else if (!userToken) {
    userStore.clearUser();
    // Handle the case where neither sessionToken nor userToken exists
   // triggerNotification('No valid session or token found, redirecting to login','failure');
    router.push('/login');
  }
});



// Function to encrypt and save credentials to localStorage
const saveEncryptedCredentials = (credentials) => {
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(credentials),
      'recruited-pro-v2'  // Replace this with a secure key
    ).toString();
    localStorage.setItem('encryptedCredentials', encryptedData);
};


// Function to decrypt credentials
const decryptCredentials = (encryptedData) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, 'recruited-pro-v2');  // Use the same key here
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (error) {
    console.error('Failed to decrypt credentials', error);
    return null;
  }
};




</script>


<style scoped>

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

.error-border {
  border-color: red;
}
</style>
