<template>
    <!-- common full screen loader -->
    <ScreenLoader v-if="loading" />

  <div>
    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
      <h2 class="text-2xl font-bold mb-6 text-black">Security</h2>
      <hr class="mt-5 mb-3 text-pigeonBlue" />
      <!-- Change Password Section -->
      <div class="mb-8">
        <h3 class="font-semibold text-xl mb-4 text-black">Change password</h3>
        <p class="text-sm text-darkSlateBlue mb-4">Ensure your account is using a long, random password to stay secure.</p>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-black">Current Password</label>
            <input v-model="currentPassword" type="password" placeholder="Current Password" class="w-full mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            <InputError :error="errors.current_password ? errors.current_password.join(', ') : ''" />
          </div>
          <div>
            <label class="block text-sm font-medium text-black">New Password</label>
            <input v-model="password" type="password" placeholder="New Password" class="w-full h-12 mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            <InputError :error="errors.password ? errors.password.join(', ') : ''" />
          </div>
          <div>
            <label class="block text-sm font-medium text-black">Confirm Password</label>
            <input v-model="passwordConfirmation" type="password" placeholder="Confirm Password" class="w-full h-12 mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            <InputError :error="errors.password_confirmation ? errors.password_confirmation.join(', ') : ''" />
          </div>
        </div>
        <div class="mt-6">
          <button @click.prevent="handlePasswordChange" class="w-60 py-3 px-4 bg-steelBlue text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Save changes</button>
        </div>
      </div>

      <!-- Two Factor Authentication Section -->
      <!-- <div class="border-t pt-8 mb-8">
        <h3 class="font-semibold text-xl mb-4 text-black">Two Factor Authentication</h3>
        <p class="text-sm text-darkSlateBlue mb-4">Add additional security to your account using two factor authentication.</p>

        <div class="space-y-4">
          <div class="mb-4 bg-veryPaleRed text-red px-4 py-3 rounded w-fit">
            <p>You have not enabled two factor authentication.</p>
          </div>

          <p class="text-sm text-black mb-6">When two-factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.</p>
        </div>
        <div class="mt-6">
          <button class="w-60 py-3 px-4 bg-steelBlue text-white text-sm font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Enable</button>
        </div>
      </div> -->

      <!-- Browser sessions -->
      <div class="border-t pt-8 mb-8">
        <h3 class="font-semibold text-xl mb-4 text-black">Browser Sessions</h3>
        <p class="text-sm text-darkSlateBlue mb-4">Manage and log out your active sessions on other browsers and devices.</p>

        <div class="space-y-4">
          <p class="text-sm text-black mb-6">You can easily manage and log out of your active sessions across other browsers and devices. This helps maintain security and control over where your account is being accessed.</p>
        </div>
        <div class="mt-6">
          <button @click.prevent="handleBrowserOtherTokensLogout" class="w-60 py-3 px-4 bg-steelBlue text-white text-sm font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Log Out Other Browser</button>
        </div>
      </div>

      <!-- Delete sessions -->
      <div class="border-t pt-8 mb-8">
        <h3 class="font-semibold text-xl mb-4 text-black">Delete Account</h3>
        <p class="text-sm text-darkSlateBlue mb-4">Permanently delete your account.</p>

        <div class="space-y-4">
          <p class="text-sm text-black mb-6">Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</p>
        </div>
        <div class="mt-6">
          <button @click="openModal" class="w-60 py-3 px-4 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-orangeRed focus:outline-none focus:ring-2 focus:ring-blue-500">Delete Account</button>
        </div>
       
      </div>
    </div>
  </div>
  <AccountDeleteModel :isVisible="showModal" @close="showModal = false" />
</template>

<script setup>
import { ref, watch, computed, onMounted, defineEmits } from "vue";
import { useNuxtApp } from "#app";
import { handleError } from "@/utils/handleError";
import InputError from "@/components/common/input/InputError.vue";
import AccountDeleteModel from '~/components/user/userSettings/accountDeleteModel.vue';

import ScreenLoader from '@/layouts/screen_loader.vue';
const loading = ref(false);
const nuxtApp = useNuxtApp();
const $authService = nuxtApp.$authService;
const currentPassword = ref("");
const password = ref("");
const passwordConfirmation = ref("");

const errors = ref({});
const notification_type = ref("");
const showNotification = ref(false);
const notificationMessage = ref("");
const showModal = ref(false)
// Fetch data from the API
const fetchData = async () => {
  try {
    nuxtApp.$nprogress.start();
    loading.value = true;
    transcript.value = await $authService.get_transcript();
  } catch (error) {
    transcript.value = null;
    console.error(error);
  } finally {
    loading.value = false;
    nuxtApp.$nprogress.done();
  }
};

const openModal = () =>{
  loading.value = true;
  showModal.value = true;
  loading.value = false;
}

const handlePasswordChange = async () => {
  try {
    errors.value = {};
    nuxtApp.$nprogress.start();
    loading.value = true;

    const data = {
      current_password: currentPassword.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    }

    const response = await $authService.updatePassword(data);
    if (response.status == 200) {
      nuxtApp.$notification.triggerNotification(response.display_message, "success");
      clearPasswordForm();
    } else {
      nuxtApp.$notification.triggerNotification(response.display_message, "warning");
    }
  } catch (error) {
    console.log(error);
    
    if (error.status == "401") {
      // Redirect to the login page if the error status is 401
      nuxtApp.$notification.triggerNotification(error.display_message || "An error occurred", "failure");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      // Trigger notification for other errors
      nuxtApp.$notification.triggerNotification(error.display_message || "An error occurred", "failure");
      handleError(error, errors, notificationMessage, notification_type, showNotification, loading);
    }
  } finally {
    loading.value = false;
    nuxtApp.$nprogress.done();
  }
};

const handleBrowserOtherTokensLogout = async (row) => {
  try {
    nuxtApp.$nprogress.start();
    loading.value = true;
    const response = await $authService.browserOtherTokensLogout();
    if (response.status === 200) {
      nuxtApp.$notification.triggerNotification(response.display_message, "success");
    } else {
      nuxtApp.$notification.triggerNotification(response.display_message || "An error occurred", "failure");
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
    nuxtApp.$nprogress.done();
  }
};

const clearPasswordForm = () => {
  currentPassword.value = "";
  password.value = "";
  passwordConfirmation.value = "";
};
</script>
