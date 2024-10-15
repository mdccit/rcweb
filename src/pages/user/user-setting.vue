<template>
  <div>
    <!-- Flowbite Tabs -->
    <div class="mb-4 border-b border-gray-200">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2"
            :class="activeTab === 'security' ? 'text-blue-600 border-blue-600' : 'border-transparent'"
            @click="activeTab = 'security'"
          >
            Security
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2"
            :class="activeTab === 'subscription' ? 'text-blue-600 border-blue-600' : 'border-transparent'"
            @click="activeTab = 'subscription'"
          >
            Subscription & Billing
          </button>
        </li>
      </ul>
    </div>

    <!-- Tab Content -->
    <div v-if="activeTab === 'security'" class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
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

    <div v-if="activeTab === 'subscription'" class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
      <!-- Subscription & Billing Card -->
      <SubscriptionBilling />

      <!-- Payment History -->
      <PaymentHistory />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'socialhub-three-column',
  middleware: ['role'],
  requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
});

import { ref } from 'vue';
import ChangePassword from '~/components/profiles/settings/ChangePassword.vue';
import TwoFactorAuthenticate from '~/components/profiles/settings/TwoFactorAuthenticate.vue';
import BrowserSessions from '~/components/profiles/settings/BrowserSessions.vue';
import SubscriptionBilling from '~/components/profiles/subscription/SubscriptionBilling.vue';
import PaymentHistory from '~/components/profiles/subscription/PaymentHistory.vue';

// Control the active tab
const activeTab = ref('security');
</script>
