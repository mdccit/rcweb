<template>
    <div>
        <div class="grid gap-4 grid-cols-4">
            <!-- conversation list start -->
                <ConversationList :listChat="listChat" :loginUserId="loginUserId" @chat="chatViewList"/>
            <!-- conversation list end -->
            <!-- chat View start -->
                <ChatView v-if="chat !=null" :chat="chat" :loginUserId="loginUserId"  />
            <!-- chat view end -->
         
        </div>
    </div>
</template>

<script setup>
import ConversationList from '~/components/chat/conversationList.vue';
import ChatView from '~/components/chat/chatView.vue';
import { useNuxtApp } from '#app';
import { ref, computed, watch, onMounted ,inject  } from 'vue';
import { useUserStore } from '~/stores/userStore';

definePageMeta({
  layout: 'chat',
});

const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const listChat = ref([])
const userStore = useUserStore();
const loginUserId = ref('')
const contentHeight = ref(0);
const leftListHeight = ref(0);
const leftHeaderSection = ref(null);
const chat = ref(null)
const updateHeight = () => {
  const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
  const leftHeaderHeight = leftHeaderSection.value?.offsetHeight || 0;

  contentHeight.value = window.innerHeight - navbarHeight - 48; // minus 48 to represent the space taken for my-6
  leftListHeight.value = contentHeight.value - leftHeaderHeight;
};

onMounted(() => {
  updateHeight();
  window.addEventListener('resize', updateHeight);
  loginUserId.value =userStore.user.user_id

  conversation()

});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeight);
});

const conversation = async () =>{
    try {
        const response = await $userService.get_all_conversiontion();
        listChat.value = response.dataSets

        console.log(response)
    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

const chatViewList = (data) =>{
    chat.value = data
    console.log("Chat")

    console.log(chat.value)
}
</script>