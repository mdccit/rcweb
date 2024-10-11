<template>
  <div>
    <!-- Security Card -->
    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
      <h2 class="text-2xl font-bold mb-6 text-black">Security</h2>
      <hr class="mt-5 mb-3 text-pigeonBlue">
      <!-- Change Password Section -->
      <div class="mb-8">
        <h3 class="font-semibold text-xl mb-4  text-black">Change password</h3>
        <p class="text-sm text-darkSlateBlue mb-4">Ensure your account is using a long, random password to stay
          secure.</p>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium  text-black">Current Password</label>
            <input type="password" placeholder="Password"
              class="w-full mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label class="block text-sm font-medium  text-black">New Password</label>
            <input type="password" placeholder="Password"
              class="w-full h-12 mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label class="block text-sm font-medium  text-black">Confirm Password</label>
            <input type="password" placeholder="Password"
              class="w-full h-12 mt-1 p-3 border border-secondary rounded-lg focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
        <div class="mt-6">
          <button
            class="w-60 py-3 px-4 bg-steelBlue text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Save
            changes</button>
        </div>
      </div>

      <!-- Two Factor Authentication Section -->
      <div class="border-t pt-8 mb-8">
        <h3 class="font-semibold text-xl mb-4 text-black">Two Factor Authentication</h3>
        <p class="text-sm text-darkSlateBlue mb-4">Add additional security to your account using two factor
          authentication.
        </p>

        <div class="space-y-4">
          <div class="mb-4 bg-veryPaleRed text-red px-4 py-3 rounded w-fit">
            <p>You have not enabled two factor authentication.</p>
          </div>

          <p class="text-sm text-black mb-6">When two-factor authentication is enabled, you will be prompted for a
            secure, random token during authentication. You may retrieve this token from your phone's Google
            Authenticator application.</p>
        </div>
        <div class="mt-6">
          <button
            class="w-60 py-3 px-4 bg-steelBlue text-white text-sm font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Enable</button>
        </div>
      </div>

      <!-- Browser sessions -->
      <div class="border-t pt-8 mb-8">
        <h3 class="font-semibold text-xl mb-4 text-black">Browser Sessions</h3>
        <p class="text-sm text-darkSlateBlue mb-4">Manage and log out your active sessions on other browsers and
          devices.
        </p>

        <div class="space-y-4">
          <p class="text-sm text-black mb-6">When two-factor authentication is enabled, you will be prompted for a
            secure, random token during authentication. You may retrieve this token from your phone's Google
            Authenticator application.</p>
        </div>
        <div class="mt-6">
          <button
            class="w-60 py-3 px-4 bg-steelBlue text-white text-sm  font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Log
            Out Other Browser</button>
        </div>
      </div>

      <!-- Delete sessions -->
      <div class="border-t pt-8 mb-8">
        <h3 class="font-semibold text-xl mb-4 text-black">Delete Account</h3>
        <p class="text-sm text-darkSlateBlue mb-4">Permanently delete your account.
        </p>

        <div class="space-y-4">
          <p class="text-sm text-black mb-6">Once your account is deleted, all of its resources and data will be
            permanently deleted. Before deleting your account, please download any data or information that you wish
            to retain.</p>
        </div>
        <div class="mt-6">
          <button
            class="w-60 py-3 px-4 bg-red text-white text-sm font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Delet
            Account</button>
        </div>
      </div>
    </div>
    <!-- / Security Card -->

    <!-- Subscription & Billing Card -->

    <SubscriptionBilling />

    <!-- / Subscription & Billing Card -->

    <!-- Payment History -->
    <PaymentHistory />
    <!-- / Payment History -->
  </div>
</template>


<script setup>
definePageMeta({
  layout: 'socialhub-three-column',
  middleware: ['role'],
  requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
});

import { ref, onMounted } from 'vue';
import SubscriptionBilling from '~/components/profiles/subscription/SubscriptionBilling.vue';
import PaymentHistory from '~/components/profiles/subscription/PaymentHistory.vue';
import { usePackageStore } from '@/stores/packageStore';
import { useNuxtApp, useRuntimeConfig } from '#app';
// Access authService from the context
const nuxtApp = useNuxtApp();
const RuntimeConfig = useRuntimeConfig().public;

const $subscriptionService = nuxtApp.$subscriptionService;




</script>