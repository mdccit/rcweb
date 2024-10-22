<template>
    <div>
          <!-- Start Connections Section -->
          <div class="flex flex-wrap gap-2 mt-4 mb-2">
            <div class="flex-1 pl-2">

                <h2 class="text-lg font-semibold text-black">Connecions</h2>
            </div>
            <div class="flex-3">
                <div class="flex items-center px-3 divide-x">
                    <!-- <a class="text-steelBlue text-sm hover:underline">Show all</a> -->
                </div>
            </div>
        </div>
        <div class="flex">
            <!-- Accepted Connection Start -->
                <Accepted :data="connection.acccept_list" @updatedData="fetConnection" :userId="userId"/>
            <!-- Accepted Connection End -->
           
        </div>
        <!-- End Connections Section -->
         
        <!-- Start Invites Section -->
        <div class="flex flex-wrap gap-2 mt-4 mb-2">
            <div class="flex-1 pl-2">

                <h2 class="text-lg font-semibold text-black">Invites</h2>
            </div>
            <div class="flex-3">
                <div class="flex items-center px-3 divide-x">
                    <!-- <a class="text-steelBlue text-sm hover:underline">Show all</a> -->
                </div>
            </div>
        </div>
        <div class="flex">
            <!-- invite Send -->
                <InviteSend :data="connection.invite_list" @updatedData="fetConnection" />
            <!-- invite Send End-->
           
        </div>
        <!-- End Invites Section -->

      
         <!-- Start Invitation Section -->
        <div class="flex flex-wrap gap-2 mt-4 mb-2">
            <div class="flex-1 pl-2">

                <h2 class="text-lg font-semibold text-black">Invitations</h2>
            </div>
            <div class="flex-3">
                <div class="flex items-center px-3 divide-x">
                    <!-- <a class="text-steelBlue text-sm hover:underline">Show all</a> -->
                </div>
            </div>
        </div>
        <div class="flex">
            <!-- Invitation  Start -->
              <Invitation :data="connection.invitation_list" @updatedData="fetConnection"/>
            <!-- Invitation  End -->
           
        </div>
        <!-- End Invitation Section -->
    </div>
</template>


<script setup>
definePageMeta({
    layout: 'socialhub-three-column',
    middleware: ['role'],
    requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
});

import { ref, watchEffect ,onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { useUserStore } from '@/stores/userStore';
import Accepted from '~/components/network/accepted.vue';
import Invitation from '~/components/network/invitation.vue';
import InviteSend from '~/components/network/inviteSend.vue';
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
    console.log(response.dataSets)
    connection.value = response.dataSets
    console.log( connection.value.invite_list)
  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
}

</script>