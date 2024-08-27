<template>
  <div class="w-full mt-6 mx-4 p-12 bg-white rounded-lg overflow-hidden sm:max-w-lg">
    <div class="flex mt-2 mb-12 gap-4">
      <h2 class="self-center text-2xl font-bold flex-1 text-gray-900">Login</h2>
      <div class="self-center">
        <a href="https://qa1.recruited.qualitapps.com/forgot-password"
          class="text-primary text-right block font-bold">Can't sign in?</a>
      </div>
    </div>
    <div class="w-full">
      <label class="block">
        <span class="block mb-1 text-gray-700 font-sans">Email <span aria-hidden="true" class="text-red-600"
            title="This field is required">*</span></span>
        <div class="flex rounded-lg border border-gray-300 shadow-sm">
          <input v-model="email"
            class="block text-black  px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
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
            class="block text-black px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
            name="password" type="password" data-validation-key="password" id="password" required
            autocomplete="current-password">
        </div>
      </label>
    </div>
    <div class="flex items-center mb-4">
      <div class="mr-3">
        <label class="flex items-center">
          <input name="remember" type="checkbox" data-validation-key="remember"
            class="rounded-full p-3 border-border-alt text-primary shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50">
          <span class="ml-4">Remember me</span>
        </label>
      </div>
    </div>
    <div>
      <button @click="handleSubmit"
        class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 text-white border-transparent focus:border-blue-300 focus:ring-blue-200 block w-full">
        <div class="flex flex-row items-center justify-center">
          <span>Login</span>
        </div>
      </button>
    </div>
    <div class="w-full">
      <!-- <button type="button" @click="handleGoogleSignUp"
            class="py-2.5 w-full px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <span><img class="absolute -mt-13" src="@/assets/images/google_icon.png"></span>Sign up with Google
          </button> -->
    </div>
    <div class="text-center mt-8 pt-4 text-sm">
      <a href="/register">Don't have an account yet?<br><strong class="text-primary">Create new account</strong></a>
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

import Notification from '~/components/common/Notification.vue';

const email = ref('');
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

// Access authService from the context
const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;

// Computed property to split error messages by comma
const splitErrors = computed(() => errors.value.flatMap((error) => error.split(',')));


// Function to handle authentication
const handleSubmit = async () => {
  try {
    error.value = ''
    successMessage.value = ''
    const response = await $authService.login(email.value, password.value)
    if (response.status === 200) {
      successMessage.value = response.display_message
      userStore.setUser({
        email: email.value,
        role: response.data.role,
        token: response.data.token
      })
      localStorage.setItem('token', response.data.token)  // Set token in local storage
      if (response.data.user_permission_type === 'none') {
        router.push('/user/approval-pending');  // Redirect to pending approval page
      } else {
        router.push('/admin/dashboard');  // Redirect to dashboard
      }
      notificationMessage.value = response.display_message;
      showNotification.value = true;

    } else {
      error.value = response.display_message;

      errors.value.push(response.display_message);
    }
  } catch (err) {
    error.value = err.message;
    notificationMessage.value = err.message;
    showNotification.value = true;
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
}




// Function to handle Google sign up (assuming this is what you want to do)
const handleGoogleSignUp = () => {
  // Add your Google sign up logic here
}
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
