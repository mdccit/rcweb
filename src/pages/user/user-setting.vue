<template>
  <div>
    <SecurityCard v-if="userSettingActiveTab == 'security'"></SecurityCard>

    <div v-if="userSettingActiveTab === 'subscription'" class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
      <!-- Subscription & Billing Card -->
      <SubscriptionBilling />

      <!-- Payment History -->
      <PaymentHistory />
    </div>

    <TranscriptCard v-if="userSettingActiveTab === 'transcript'" />
  </div>
</template>

<script setup>
import TranscriptCard from "~/components/user/userSettings/transcriptCard.vue";
import SecurityCard from "~/components/user/userSettings/securityCard.vue";
import SubscriptionBilling from "~/components/profiles/subscription/SubscriptionBilling.vue";
import PaymentHistory from "~/components/profiles/subscription/PaymentHistory.vue";
import { useUserStore } from '~/stores/userStore';

definePageMeta({
  layout: "socialhub-three-column",
  middleware: ["role"],
  requiredRole: ["admin", "coach", "business_manager", "player", "parent", "default"],
  showUserSettingLeftBar: true,
});

const userStore = useUserStore();
const userSettingActiveTab = computed(() => userStore.userSettingActiveTab);
</script>
