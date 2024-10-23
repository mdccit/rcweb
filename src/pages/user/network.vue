<template>
    <div>
        <!-- Start Connections Section -->
            <Accepted :data="acceptConnection" @updatedData="fetConnection" :userId="userId"/>
        <!-- End Connections Section -->

        <!-- Start Invites Section -->
            <InviteSend :data="inviteSend" @updatedData="fetConnection" />
        <!-- End Invites Section -->

      
        <!-- Start Invitation Section -->
            <Invitation :data="connection" @updatedData="fetConnection"/>
        <!-- End Invitation Section -->
    </div>
</template>


<script setup>
definePageMeta({
    layout: 'socialhub-three-column',
    middleware: ['role'],
    requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
});

useHead({
  title: 'Recruited Network',
})

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
const acceptConnection = ref([])
const inviteSend = ref([])

const fetConnection  = async () => {
  try {
     const response = await $userService.get_connection_list();
     console.log(5022)

    console.log(response.dataSets)
    connection.value = response.dataSets.invitation_list
    acceptConnection.value = response.dataSets.acccept_list
    inviteSend.value = response.dataSets.invite_list
    console.log( connection.value.invite_list)
  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
}

</script>