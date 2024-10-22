<template>
     <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue p-3 mt-3 bg-white">

 <div class="flex flex-col items-center space-y-2">
    <!-- Circle with number -->
    <div class="bg-lightPale rounded-full w-20 h-20 flex items-center justify-center">
      <p class="text-steelBlue text-4xl font-bold">{{  connection.length }}</p>
    </div>
    <!-- Connections text -->
    <p class="text-lg font-medium text-black">Connections</p>
    <!-- Profile Avatars -->
    <div class="flex space-x-2">
        <!-- <div v-for="data in connection">
            <div v-if="props.userId == data.sender_id ">
                <img v-if="data.receiver_profile_picture == null" class="w-10 h-10 rounded-full"
                    src="@/assets/images/user.png" alt="Profile 1">
                <img v-if="data.receiver_profile_picture != null" class="w-10 h-10 rounded-full"
                    :src="data.receiver_profile_picture.url" alt="Profile 1">
            </div>
            <div v-if="props.userId == data.receiver_id ">
                <img v-if="data.sender_profile_picture == null" class="w-10 h-10 rounded-full"
                    src="@/assets/images/user.png" alt="Profile 1">
                <img v-if="data.sender_profile_picture != null" class="w-10 h-10 rounded-full"
                    :src="data.sender_profile_picture.url" alt="Profile 1">

            </div>
        </div> -->
      <!-- <img class="w-10 h-10 rounded-full" src="../../assets/user/images/avtar.png" alt="Profile 1">
      <img class="w-10 h-10 rounded-full" src="../../assets/user/images/Rectangle_117.png" alt="Profile 2">
      <img class="w-10 h-10 rounded-full" src="../../assets/user/images/Rectangle 193.png" alt="Profile 3">
      <img class="w-10 h-10 rounded-full" src="../../assets/user/images/Rectangle 126.png" alt="Profile 4"> -->
    </div>
    <!-- See all connections link -->
    <!-- <a href="#" class="text-steelBlue hover:underline">See All Connections</a> -->
  </div>
     </div>
    <!-- start call card -->
    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue p-3 mt-3 bg-steelBlue text-white">
        <div class="flex items-center justify-between">

            <div class="flex items-center space-x-4 w-48">

                <h1 class="text-lg font-semibold mb-4">Call with an experienced pro</h1>
            </div>
            <div class="justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
            </div>
        </div>
        <p class="text-xs text-white">Call our experts – past coaches, players, and more – for
            just  $100 per call. After you book a call, we will send you an email so an appropriate time
            for the call can be arranged.</p>

        <div class="flex justify-center mt-3">
            <button class="bg-white text-darkSlateBlue px-8 py-2 rounded-lg text-sm font-semibold">Book a call</button>
        </div>
    </div>
    <!-- end call card -->
</template>

<script setup>


import { ref, watchEffect ,onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { useUserStore } from '@/stores/userStore';

const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;

const userStore = useUserStore();

const userId = ref('')
onMounted(() => {
    fetConnection()
    userId.value = userStore.user?.user_id || null;

    
});

const connection = ref('')

const fetConnection  = async () => {
  try {
     const response = await $userService.get_connection_list();
    connection.value = response.dataSets.acccept_list
    
  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
}
</script>