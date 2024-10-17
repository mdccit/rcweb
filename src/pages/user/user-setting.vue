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
            :class="activeTab === 'transcript' ? 'text-blue-600 border-blue-600' : 'border-transparent'"
            @click="activeTab = 'transcript'"
          >
            Transcripts
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
      <SecurityCard v-if="activeTab == 'security'"></SecurityCard>
  
      <div v-if="activeTab === 'subscription'" class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
        <!-- Subscription & Billing Card -->
        <SubscriptionBilling />
  
        <!-- Payment History -->
        <PaymentHistory />
      </div>

      <TranscriptCard v-if="activeTab === 'transcript'" />
 


  </div>
</template>

<script setup>
import TranscriptCard from '~/components/user/userSettings/transcriptCard.vue';
import SecurityCard from '~/components/user/userSettings/securityCard.vue';


definePageMeta({
  layout: 'socialhub-three-column',
  middleware: ['role'],
  requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
  showUserSettingLeftBar: true,
});

import { ref } from 'vue';
import SubscriptionBilling from '~/components/profiles/subscription/SubscriptionBilling.vue';
import PaymentHistory from '~/components/profiles/subscription/PaymentHistory.vue';

// Control the active tab
const activeTab = ref('security');
</script>
