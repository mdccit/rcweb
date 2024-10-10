<template>
    <!-- <div class="flex"> -->
    <div class="">
        <div v-for="connection in connections" class="flex-1 p-2">
            <button @click="redirect(`/app/profile/${connection.slug}`)">
                <div class="bg-white p-4 border rounded-2xl">
                    <div class=" grid grid-cols-12 gap-4">
                        <div class="col-span-3">
                            <img v-if="connection.profile_picture == null" class=" rounded-2xl w-[85px] h-[85px]" src="@/assets/images/user.png"
                                alt="Neil image">
                            <img v-if="connection.profile_picture != null" class=" rounded-2xl w-[85px] h-[85px]" :src="connection.profile_picture.url"
                                alt="Neil image">
                        </div>
                        <div class="col-span-6">
                            <h4 class="text-black font-normal"> {{ connection.name }}</h4>
                            <div class="flex items-center space-x-2 mb-2">
                                <div class="bg-mintGreen p-1 rounded">
                                    <img  src="@/assets/user/images/man-medal.png" alt="" class=" w-4 h-4">
                                </div>
                                <div class="text-sm ml-2 text-green-500">{{ connection.sport_name ?? '' }} {{
                                    connection.role }}</div>
                            </div>
                            <div v-if="connection.city|| connection.country " class="flex items-center space-x-2">
                                <div class=" rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-5 text-black mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                </div>
                                <div class="text-sm ml-2 text-black">{{ connection.city }} {{ connection.city?',':'' }} {{ connection.country }}
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3">
                            <!-- <h4 class="text-black">UTR <span class="text-blue-500">30.01</span></h4> -->
                        </div>
                    </div>
                    <div class="flex mt-2">
                        <div class="flex-1">
                            <div class="flex items-center space-x-2 mb-2">
                                <div class="bg-blue-100 p-1 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-4 text-blue-700">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                </div>
                                <!-- <div class="text-xs ml-2 text-black"><span
                                    class="text-blue-700">Ralph,Cameron</span> 3 more mutual connections
                                </div> -->
                            </div>
                        </div>
                        <div class="flex-1 text-right">
                            <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-500 m-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                            <div v-if="user_id !=connection.id ">
                            <button @click="connectRequestSend(connection.id)"
                                v-if="connection.connection_status == 'connect'"
                                class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                Connect +
                            </button>
                            <button v-if="connection.connection_status == 'pending'"
                                class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                Invite sent
                            </button>
                            <button v-if="connection.connection_status == 'pending'" @click="connectCancelle(connection.connection_id)"
                                class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                canncel Request
                            </button>
                            <button v-if="connection.connection_status == 'accepted'"
                                class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-500 m-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                                </svg>
                            </button>
                            <button v-if="connection.connection_status == 'accepted'"
                                class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-500 m-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                            <button v-if="connection.connection_status == 'accepted'" @click="connectRemove(connection.connection_id)"
                                class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                 Remove Connection
                            </button>
                            </div>
                        </div>

                    </div>
                </div>
            </button>

        </div>
        <div class="mx-auto text-center">
            <div v-if="connections.length == 0">
                <h4 class="text-black font-normal"> No connections</h4>
                <p>This user has not added anyone to their network.</p>
            </div>
        </div>




    </div>
</template>

<script setup>
import { defineProps, ref, onMounted, defineEmits } from 'vue';
import { useNuxtApp } from '#app';
import { useUserStore } from '~/stores/userStore';

const emit = defineEmits(['profileView']);

const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const userStore = useUserStore();

const props = defineProps({
    playerId: String
});

const connections = ref([])
const user_id = ref('')
onMounted(() => {
    fetchConnections();


});

const fetchConnections = async () => {
    try {

        const dataSets = await $userService.get_connection(props.playerId);
        connections.value = dataSets.connection
        user_id.value = userStore.user.user_id
    } catch (error) {
        console.log(error)
        console.error('Error fetching data:', error.message);
    }
}

const connectAccept = async () => {
    try {
        await $userService.connection_accept(connectionType.value.id, {
            connection_status: "accepted"
        });
    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

const connectRequestSend = async (id) => {
    try {
        await $userService.connection_request({
            receiver_id: id
        });

        fetchConnections();
    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

const connectReject = async (id) => {
    try {
        const response = await $userService.connection_reject(id, {
            connection_status: "rejected"
        });
        fetchConnections();
    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

const connectRemove = async (id) => {
    try {
        const response = await $userService.connection_remove(id, {
            connection_status: "removed"
        });
        fetchConnections();

    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

const connectCancelle = async (id) => {
    try {
        const response = await $userService.connection_cancelle(id, {
            connection_status: "cancelled"
        });

        fetchConnections();

    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

const redirect = (url) => {
    emit('profileView', url)

}



</script>