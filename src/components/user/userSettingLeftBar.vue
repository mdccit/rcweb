<template>
    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 px-3 pt-3 pb-8 mt-3 bg-white">
        <h2 class="font-bold text-lg mb-4 text-black">Settings</h2>
        <p class="text-darkSlateBlue text-sm mb-4">Manage all your account settings here</p>

        <!-- Security Option -->
        <button @click="userStore.setUserSettingActiveTab('security')" :class="`${userSettingActiveTab == 'security'? 'bg-steelBlue text-white my-3' : 'bg-lightGray text-darkSlateBlue'} px-4 py-2 mb-4 rounded-lg text-sm w-full text-left`">Security</button>

        <!-- Subscription & Billing Option -->
        <button v-if="role == 'coach' || role == 'player'" @click="userStore.setUserSettingActiveTab('subscription')" :class="`${userSettingActiveTab == 'subscription'? 'bg-steelBlue text-white my-3' : 'bg-lightGray text-darkSlateBlue'} px-4 py-2 rounded-lg text-sm w-full text-left`"> Subscription & Billing</button>

        <button v-if="role == 'player' && userTypeId == 3" @click="userStore.setUserSettingActiveTab('transcript')" :class="`${userSettingActiveTab == 'transcript'? 'bg-steelBlue text-white my-3' : 'bg-lightGray text-darkSlateBlue'} px-4 py-2 mt-4 rounded-lg text-sm w-full text-left`"> Transcript</button>
    </div>
</template>

<script setup>
import { watch } from 'vue';
import { useUserStore } from '~/stores/userStore';

const userStore = useUserStore();
const userSettingActiveTab = computed(() => userStore.userSettingActiveTab);
const userId = ref('');
const userTypeId = computed(() => userStore.userTypeId);
const role = computed(() => userStore.role);

onMounted(async () => {

});

watch(userId, (newUserId) => {
  if (newUserId) {
    console.debug('User ID updated:', newUserId)
  }
})

</script>

