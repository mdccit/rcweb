<template>
    <div class="flex flex-wrap gap-2 mt-4 mb-2">
        <div class="flex-1 pl-2">
            <h2 class="text-lg font-semibold text-black">Connections</h2>
            </div>
            <div class="flex-3">
                <div v-if="props.data.length > 4" class="flex items-center px-3 divide-x">
                    <div  @click="showAll = !showAll" class="text-steelBlue text-sm hover:underline"> {{ showAll ? "Show Less" : "Show All" }}</div>
                </div>
            </div>
    </div>
    <div class="flex">
    <div class="grid gap-4 grid-cols-6  w-full">
        <div v-for="data in limitedArray" class="col-span-3 p-2">
            <div
                class="card rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 bg-white w-full p-4 mt-3">
                <div class="flex-1 p-1">
                    <div v-if="props.userId == data.receiver_id" class="cursor-pointer grid grid-cols-12 gap-4"
                        @click="redirect(`/app/profile/${data.sender_slug}`)">
                        <div class="col-span-3">
                            <img v-if="data.sender_profile_picture == null" class=" rounded-2xl w-[85px] h-[85px]"
                                src="@/assets/images/user.png" alt="Neil image">
                            <img v-if="data.sender_profile_picture != null" class=" rounded-2xl w-[85px] h-[85px]"
                                :src="data.sender_profile_picture.url" alt="Neil image">

                        </div>
                        <div class="col-span-6">
                            <h4 class="text-black font-bold">{{ data.sender_name }}</h4>
                            <div v-if="data.sender_role_id == 4" class="flex items-center space-x-2 mb-2  mt-2">
                                <div class="bg-lightPale p-1 rounded">
                                    <img src="@/assets/user/images/playerIcon.png" alt="" class=" w-4 h-4">
                                </div>
                                <div class="text-xs ml-2 text-steelBlue">Tennis Player</div>
                            </div>
                            <div v-if="data.sender_role_id == 5" class="flex items-center space-x-2 mb-2">
                                <div class="bg-mintGreen p-1 rounded">
                                    <img src="@/assets/user/images/man-medal.png" alt="" class=" w-4 h-4">
                                </div>
                                <div class="text-xs ml-2 text-green-500">Tennis Coach</div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class=" rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5 text-black mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div class="text-xs ml-2 text-black">{{ data.sender_city }} {{ data.sender_city != null
                                    ?',':'' }} {{ data.sender_country }}</div>
                            </div>
                        </div>
                        <div v-if="data.sender_role_id == 4" class="col-span-3">
                            <h4 class="text-black text-sm">UTR <span v-if="data.sender_other_data != null" class="text-blue-500">{{
                                                JSON.parse(data.sender_other_data).utr ?? '' }}</span></h4>
                            <!-- <h4 class="text-black text-sm">UTR <span class="text-blue-500">{{JSON.parse(data.sender_other_data).utr  }}</span></h4> -->
                        </div>
                    </div>
                    <div v-if="props.userId == data.sender_id" class="cursor-pointer grid grid-cols-12 gap-4"
                        @click="redirect(`/app/profile/${data.receiver_slug}`)">
                        <div class="col-span-3">
                           
                            <img v-if="data.receiver_profile_picture == null" class=" rounded-2xl w-[85px] h-[85px]"
                                src="@/assets/images/user.png" alt="Neil image">
                            <img v-if="data.receiver_profile_picture != null" class=" rounded-2xl w-[85px] h-[85px]"
                                :src="data.receiver_profile_picture.url" alt="Neil image">
                        </div>
                        <div class="col-span-6">
                            <h4 class="text-black font-bold">{{ data.receiver_name }}</h4>
                            <div v-if="data.receiver_role_id == 4" class="flex items-center space-x-2 mb-2  mt-2">
                                <div class="bg-lightPale p-1 rounded">
                                    <img src="@/assets/user/images/playerIcon.png" alt="" class=" w-4 h-4">
                                </div>
                                <div class="text-xs ml-2 text-steelBlue">Tennis Player</div>
                            </div>
                            <div v-if="data.receiver_role_id == 5" class="flex items-center space-x-2 mb-2">
                                <div class="bg-mintGreen p-1 rounded">
                                    <img src="@/assets/user/images/man-medal.png" alt="" class=" w-4 h-4">
                                </div>
                                <div class="text-xs ml-2 text-green-500">Tennis Coach</div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class=" rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5 text-black mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div class="text-xs ml-2 text-black">{{ data.receiver_city }} {{ data.receiver_city
                                    !=null ?',':'' }} {{ data.receiver_country }}</div>
                            </div>
                        </div>
                        <div v-if="data.receiver_role_id == 4" class="col-span-3">
                            <h4 class="text-black text-sm">UTR <span v-if="data.receiver_other_data != null" class="text-blue-500">{{
                                                JSON.parse(data.receiver_other_data).utr ?? '' }}</span></h4>
                            <!-- <h4 class="text-black text-sm">UTR <span class="text-blue-500">30.01</span></h4> -->
                            <!-- <h4 class="text-black text-sm">UTR <span class="text-blue-500">{{JSON.parse(data.sender_other_data).utr  }}</span></h4> -->
                        </div>
                    </div>
                </div>

                <div class="flex mt-2">


                    <div class="flex-1 text-right">
                        <div class="flex">
                            <div class="flex-1 text-right">
                                <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-500 m-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </button>
                            </div>

                            <div class="flex">
                                <button @click="chatStart(data)"
                                    class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-500 m-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                                    </svg>
                                </button>
                                <button @click="connectRemove(data.id)"
                                    class="bg-red-600 rounded-full hover:bg-red-700 text-white p-2 m-1 text-xs h-[35px] w-[85px]">
                                    Remove
                                </button>

                            </div>
                            <div>
                                <!-- <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor"
                            class="size-5 text-blue-500 m-auto">
                            <path stroke-linecap="round" stroke-linejoin="round"
                               d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                        </svg>
                    </button> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, defineEmits, onMounted ,computed } from 'vue';
import { defineProps, defineExpose } from 'vue';
import { useNuxtApp } from '#app';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();

const route = useRoute();
const router = useRouter();
const emit = defineEmits(['updatedData']);
const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;

const props = defineProps({

    data: {
        type: Array,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    }
});
const showAll = ref(false)

const limitedArray = computed(() => {
    
     return showAll.value ? props.data : props.data.slice(0, 4);  
});
const connectRemove = async (id) => {
    try {
        const response = await $userService.connection_remove(id, {
            connection_status: "removed"
        });
        userStore.setConnection(true)
        emit('updatedData')

    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

const chatStart = async (data) => {
    try {
        let user_id = ''
        if (data.sender_id == props.userId) {
            user_id = data.receiver_id
        }

        if (data.receiver_id == props.userId) {
            user_id = data.sender_id
        }
        const response = await $userService.create_conversiontion({
            user2_id: user_id
        });
        console.log(1119)

        console.log(response)
        // router.push('/user/chat');
        router.push({
            path: '/user/chat',
            query: {
                conversation_id: response.data.dataSets.id
            }
        });

    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

const redirect = (url) => {
    router.push(url);

}
</script>