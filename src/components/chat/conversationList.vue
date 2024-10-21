<template>
    <div class="my-6 border-r-4 custom-min-h-185" :style="{ height: contentHeight + 'px' }">
                <div class="pe-4 pb-4" ref="leftHeaderSection">
                    <h2 class="text-2xl font-semibold text-black">Chat</h2>
                    <p class="text-sm text-darkSlateBlue">Lorem ipsum is a placeholder text commonly used to</p>
                </div>

                <div :style="{ height: leftListHeight + 'px' }" class="overflow-y-auto -me-1">
                    <div class="pe-5 flex flex-col space-y-3">

                        <div v-for="chat in props.listChat">
                            <button @click="chatShow(chat)" :class="active == chat.id ?'bg-white flex items-center px-3 py-2 rounded-xl  space-x-4  cursor-pointer w-full':'flex items-center px-3 py-2 rounded-xl  space-x-4  cursor-pointer w-full'">
                                <!-- active : bg-white -->
                                <div class="basis-[56px] shrink-0 grow-0 ">
                                    <!-- <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg"> -->
                                    <img v-if="(chat.first_message_user.id != props.loginUserId) && chat.user_1_profile_picture==null" class="w-14 h-14 rounded-lg"
                                    src="@/assets/images/user.png" alt="">
                                    <img v-if="(chat.first_message_user.id != props.loginUserId) && chat.user_1_profile_picture !=null" class="w-14 h-14 rounded-lg"
                                    :src="chat.user_1_profile_picture.url" alt="">
                                    <img v-if="(chat.received_user.id != props.loginUserId) && chat.user_2_profile_picture==null" class="w-14 h-14 rounded-lg"
                                    src="@/assets/images/user.png" alt="">
                                    <img v-if="(chat.received_user.id != props.loginUserId) && chat.user_2_profile_picture !=null" class="w-14 h-14 rounded-lg"
                                    :src="chat.user_2_profile_picture.url" alt="">
                                </div>
                                <div>
                                    <h3 class="text-base mb-1 text-black font-bold text-left" v-if="chat.first_message_user.id != props.loginUserId">{{ chat.first_message_user.display_name }}</h3>
                                    <h3 class="text-base mb-1 text-black font-bold text-left" v-if="chat.received_user.id != props.loginUserId">{{ chat.received_user.display_name }}</h3>

                                        <p class="text-xs text-darkSlateBlue line-clamp-2 text-left">{{ lastMessage(chat.messages) }}
                                        </p>
                                </div>
                                <!-- <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                    <div class="flex flex-col items-center">
                                        <p class="text-xs text-black font-semibold">1 min ago</p>
                                         <div
                                            class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                            <span>02</span>
                                         </div>
                                    </div>
                                </div> -->
                            </button>
                            <hr class="mt-3 mb-3 text-pigeonBlue">
                        </div>
                        <div v-if="props.listChat.length ==0">
                            <p class="text-xs text-darkSlateBlue line-clamp-2 text-left"> No chat
                        </p>
                        </div>
                       
<!-- 
                     

                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div> -->
<!-- 
                        <hr class="mt-3 mb-3 text-pigeonBlue">
                        
                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        <!-- <hr class="mt-3 mb-3 text-pigeonBlue">

                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        
                        <!-- <hr class="mt-3 mb-3 text-pigeonBlue">

                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        <!-- <hr class="mt-3 mb-3 text-pigeonBlue">

                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        
                        <!-- <hr class="mt-3 mb-3 text-pigeonBlue"> -->
<!-- 
                        <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        
                        <!-- <hr class="mt-3 mb-3 text-pigeonBlue"> -->

                        <!-- <div class="flex items-center px-3 py-2 rounded-xl space-x-4 hover:bg-white transition cursor-pointer">
                            <div class="basis-[56px] shrink-0 grow-0">
                                <img src="@/assets/user/images/Rectangle_117.png" alt="" class="w-14 h-14 rounded-lg">
                            </div>

                            <div>
                                <h3 class="text-base mb-1 text-black font-bold">Kristin Watson</h3>
                                <p class="text-xs text-darkSlateBlue line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit, sed do
                                    eiusmod</p>
                            </div>
                            
                            <div class="text-center basis-[55px] shrink-0 grow-0 self-stretch">
                                <div class="flex flex-col items-center">
                                    <p class="text-xs text-black font-semibold">1 min ago</p>
                                    <div
                                        class="bg-orangeRed text-white text-xs rounded-lg p-1 mt-3 w-7 h-7 flex items-center justify-center">
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                    </div>
                </div>
            </div>
</template>

<script setup>
import { ref, computed, watch, onMounted ,inject  } from 'vue';

const emit = defineEmits(['chat']);
const active = ref('')

const props = defineProps({
    listChat: {
        type: Array,
        required: true,
    },
    loginUserId: {
        type: String,
        required: true,
    }
});

const chatShow = (data) =>{
  emit('chat', data)
  active.value = data.id
  console.log( active.value)
}

const lastMessage = (messages) =>{
    // let lastMessage = messages[messages.length - 1];
    // console.log(lastMessage.content)
    // return lastMessage.content
    if (messages.length > 0) {
    let lastMessage = messages[messages.length - 1];
    console.log(lastMessage.content);
    return lastMessage.content;
} else {
    console.log("No messages found");
    return null;
}

}
</script>