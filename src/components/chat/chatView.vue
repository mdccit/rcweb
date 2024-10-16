<template>
   <div class="col-span-3 my-6" :style="{ height: contentHeight + 'px' }">
                <div class="rounded-2xl bg-white vh-80">
                    <div class="grid grid-rows-[130px_auto_110px] h-full">
                        <div>
                            <div class="px-6 pt-6">
                                <div class="flex items-center space-x-4 border-b border-softGray pb-3">
                                    <div>
                                        <img class=" rounded-2xl w-[80px] h-[80px]" src="@/assets/user/images/Rectangle 193.png"
                                            alt="Neil image">
                                    </div>
                                    <div v-if="props.chat.first_message_user">

                                        <h4 class="text-black font-bold mb-1"  v-if="props.chat.first_message_user.id != props.loginUserId">{{ props.chat.first_message_user.display_name }}</h4>
                                        <h4 class="text-black font-bold mb-1"  v-if="props.chat.received_user.id != props.loginUserId">{{ props.chat.received_user.display_name }}</h4>

                                        <div v-if="props.chat.first_message_user.id != props.loginUserId" class="flex items-center space-x-2 mb-2">
                                            <!-- <div class="bg-lightCreamOrange p-1 rounded">
                                                <img src="@/assets/user/images/manage-parent.png" alt="" class=" w-4 h-4">
                                            </div>
                                            <div class="text-xs ml-2 text-vividOrange">Manage by parent</div> -->
                                            
                                            <!-- <div  > -->
                                                <div v-if="props.chat.first_message_user.user_role_id ==4" class="bg-blue-200 p-1 rounded">
                                                    <img src="@/assets/images/player-blue.png" alt="" class=" w-4 h-4">
                                                </div>
                                                 <div class="text-xs ml-2 text-steelBlue">Player</div>
                                            <!-- </div> -->
                                            <!-- <div > -->
                                                <div v-if="props.chat.first_message_user.user_role_id ==5" class="bg-green-200 p-1 rounded">
                                                    <img src="@/assets/images/coach-icon-green.png" alt="" class=" w-4 h-4">
                                                </div>
                                                  <div class="text-xs ml-2 text-green-500">Coach</div>
                                            <!-- </div> -->
                                           

                                        </div>
                                        <div v-if="props.chat.received_user.id != props.loginUserId" class="flex items-center space-x-2 mb-2">
                                            <!-- <div class="bg-lightCreamOrange p-1 rounded">
                                                <img src="@/assets/user/images/manage-parent.png" alt="" class=" w-4 h-4">
                                            </div>
                                            <div class="text-xs ml-2 text-vividOrange">Manage by parent</div> -->
                                            
                                            <!-- <div  > -->
                                                <div v-if="props.chat.received_user.user_role_id ==4"  class="bg-blue-200 p-1 rounded">
                                                    <img src="@/assets/images/player-blue.png" alt="" class=" w-4 h-4">
                                                </div>
                                                 <div v-if="props.chat.received_user.user_role_id ==4" class="text-xs ml-2 text-steelBlue">Player</div>
                                            <!-- </div> -->
                                            <!-- <div> -->
                                                <div  v-if="props.chat.received_user.user_role_id ==5" class="bg-green-200 p-1 rounded">
                                                    <img src="@/assets/images/coach-icon-green.png" alt="" class=" w-4 h-4">
                                                </div>
                                                  <div  v-if="props.chat.received_user.user_role_id ==5" class="text-xs ml-2 text-green-500">Coach</div>
                                            <!-- </div> -->
                                           

                                        </div>
                                        <div class="flex items-center space-x-2 mb-2">
                                            <!-- <p class="text-xs text-limegreen">Online</p> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="h-full overflow-auto">
                            <div class="px-6">
                                <div v-for="chat in chatList" class="">
                                    <!-- Left-aligned message -->
                                    <div v-if="chat.created_by != props.loginUserId" class="flex justify-start mb-3">
                                        <div class="bg-lighterGray p-3 lg rounded-b-lg rounded-tr-lg max-w-md">
                                            <p class="text-sm text-black">{{ chat.content }}</p>
                                        </div>
                                    </div>
                                    <div v-if="chat.created_by != props.loginUserId"  class="flex justify-start mb-3">
                                        <p class="text-xs text-ceil">{{  getTimeAgo(chat.created_at) }}</p>
                                    </div>

                                    <!-- Left-aligned message (Short) -->
                                    <!-- <div class="flex justify-start mb-2">
                                        <div class="bg-lighterGray p-3 rounded-b-lg rounded-tr-lg max-w-md">
                                            <p class="text-sm text-black">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p class="text-xs text-ceil">4 min ago</p>
                                    </div> -->

                                    <!-- Right-aligned message -->
                                    <div v-if="chat.created_by == props.loginUserId" class="flex justify-end mb-3">
                                        <div class="bg-steelBlue text-white p-3 rounded-b-lg rounded-tl-lg max-w-md">
                                            <p class="text-sm">{{ chat.content  }}</p>
                                        </div>
                                    </div>
                                    <div v-if="chat.created_by == props.loginUserId"  class=" flex justify-end mb-3">
                                        <p class="text-xs text-ceil">{{  getTimeAgo(chat.created_at) }}</p>
                                    </div>

                                    <!-- Right-aligned message (Short) -->
                                    <!-- <div class="flex justify-end mb-3">
                                        <div class="bg-steelBlue text-white p-3 rounded-b-lg rounded-tl-lg max-w-md">
                                            <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div> -->

                                    <!-- Right-aligned message (Repeated) -->
                                    <!-- <div class="flex justify-end mb-3">
                                        <div class="bg-steelBlue text-white p-3 rounded-b-lg rounded-tl-lg max-w-md">
                                            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div> -->

                                    <!-- Left-aligned message -->
                                    <!-- <div class="flex justify-start mb-3">
                                        <div class="bg-lighterGray p-3 lg rounded-b-lg rounded-tr-lg max-w-md">
                                            <p class="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div> -->

                                    <!-- Right-aligned message -->
                                    <!-- <div class="flex justify-end">
                                        <div class="bg-steelBlue text-white p-3 rounded-b-lg rounded-tl-lg max-w-md">
                                            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="px-6 pb-6 pt-4">
                                <div class="border-t border-softGray flex pt-6">
                                    <textarea id="message" rows="1" v-model="text"
                                        class="grow text-darkSlateBlue bg-culturedBlue placeholder-ceil rounded-xl border-0 focus:ring focus:ring-offset-2 focus:ring-steelBlue focus:ring-opacity-50 transition py-2 px-4"
                                        placeholder="Write your thoughts here..."></textarea>
                                    <button @click="newChat" class="bg-steelBlue hover:bg-darkAzureBlue transition text-white px-8 py-2 rounded-lg text-sm min-w-24 ml-2">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script setup>
import { ref, computed, watch, onMounted ,inject  } from 'vue';
import { useNuxtApp } from '#app';
import { useUserStore } from '~/stores/userStore';



const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const userStore = useUserStore();
const text = ref('')
const chatList = ref([])
const props = defineProps({
    chat: {
        type: Object,
        required: true,
    },
    loginUserId: {
        type: String,
        required: true,
    }
});

watch(
    () => props.chat,
    () => {
        getChat()
    }
);

onMounted(()=>{
    getChat()
    console.log(props.data)
})

const newChat = async () =>{
    try {
        const response = await $userService.send_to_message({
            content:text.value,
            conversation_id:props.chat.id
        });
        text.value =''
 
        console.log(response)
        getChat()
    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

const getChat = async() =>{
    try {
        const response = await $userService.get_conversation_chat(props.chat.id);
        console.log("new chat")
        console.log(response)
        chatList.value = response.dataSets
    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

const getTimeAgo = (date) => {
  const secondsAgo = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = Math.floor(secondsAgo / 31536000);
  if (interval >= 1) return interval === 1 ? '1 year ago' : `${interval} years ago`;

  interval = Math.floor(secondsAgo / 2592000);
  if (interval >= 1) return interval === 1 ? '1 month ago' : `${interval} months ago`;

  interval = Math.floor(secondsAgo / 604800);
  if (interval >= 1) return interval === 1 ? '1 week ago' : `${interval} weeks ago`;

  interval = Math.floor(secondsAgo / 86400);
  if (interval >= 1) return interval === 1 ? '1 day ago' : `${interval} days ago`;

  interval = Math.floor(secondsAgo / 3600);
  if (interval >= 1) return interval === 1 ? '1 hour ago' : `${interval} hours ago`;

  interval = Math.floor(secondsAgo / 60);
  if (interval >= 1) return interval === 1 ? '1 minute ago' : `${interval} minutes ago`;

  return secondsAgo === 1 ? '1 second ago' : `${secondsAgo} seconds ago`;
};
</script>

<style>
.vh-80{
    height: 80vh;
}
</style>