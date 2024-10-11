<template>
  <div>
    <!-- Security Card -->
    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
      <h2 class="text-2xl font-bold mb-6 text-black">Security</h2>
      <hr class="mt-5 mb-3 text-pigeonBlue">
      <!-- Change Password Section -->
      <ChangePassword />

      <!-- Two Factor Authentication Section -->
      <TwoFactorAuthenticate />

      <!-- Browser sessions -->
      <!-- Delete sessions -->
      <BrowserSessions />

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
import ChangePassword from '~/components/profiles/settings/ChangePassword.vue';
import TwoFactorAuthenticate from '~/components/profiles/settings/TwoFactorAuthenticate.vue';
import BrowserSessions from '~/components/profiles/settings/BrowserSessions.vue';
import SubscriptionBilling from '~/components/profiles/subscription/SubscriptionBilling.vue';
import PaymentHistory from '~/components/profiles/subscription/PaymentHistory.vue';
import { usePackageStore } from '@/stores/packageStore';
import { useNuxtApp, useRuntimeConfig } from '#app';
// Access authService from the context
const nuxtApp = useNuxtApp();
const RuntimeConfig = useRuntimeConfig().public;

const $subscriptionService = nuxtApp.$subscriptionService;




</script>