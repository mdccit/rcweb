<template>
    <div>

        <!-- Resources -->

        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
            <!-- Section Header -->
            <div class="mb-6">
                <div class="flex">
                    <div class="flex-1">
                        <h2 class="text-2xl text-black font-bold">Transfer Tracker</h2>
                    </div>
                    <div class="flex-3">
                        <div class="bg-lightGray p-1 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4 text-steelBlue">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                            </svg>
                        </div>
                    </div>
                </div>

                <p class="text-darkSlateBlue mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>

            <div class="grid grid-cols-6">
                <!-- card 01 -->
                <div class="col-span-3 p-2" v-for="(item, index) in items" :key="index">
                    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
                        <div class=" grid grid-cols-12 gap-4">
                            <div class="col-span-4">
                                <img class=" rounded-2xl w-[80px] h-[80px]" src="@/assets/user/images/Rectangle 193.png"
                                    alt="Neil image">
                            </div>
                            <div class="col-span-8">
                                <div class="flex justify-between items-center">
                                    <div class="flex-1">
                                        <h4 class="text-black font-bold">{{ item.first_name}} {{ item.last_name}}</h4>
                                    </div>
                                    <div class="flex-3">
                                        <span
                                            class="text-black text-xs p-1 bg-muteGray text-sm rounded-md text-right"><span>UTR</span>
                                            <span class="text-steelBlue ml-2">{{ item.utr_score_manual}}</span> </span>
                                    </div>
                                </div>
                                <div class="flex mt-2">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-lightPale p-1 rounded">
                                                <img src="@/assets/user/images/playerIcon.png" alt="" class=" w-4 h-4">
                                            </div>
                                            <div class="text-xs ml-2 text-steelBlue">{{ item.sport_name}} Player</div>
                                        </div>
                                    </div>
                                    <div class="flex-3">
                                        <span class="text-black text-xs p-1 text-sm text-right">L
                                            - {{ item.loss}}</span>
                                        <span
                                            class="text-steelBlue ml-2text-xs text-sm rounded-md text-right">W-{{ item.win}}</span>
                                    </div>
                                </div>
                                <div class="flex mt-2">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-lightGray p-1 rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="size-4 text-black">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                                </svg>

                                            </div>
                                            <div class="text-xs ml-2 text-darkSlateBlue">{{ item.school}}</div>
                                        </div>
                                    </div>
                                    <div class="flex-3">
                                        <span class="text-darkSlateBlue text-xs p-1 text-sm text-right">({{ item.phone_code}})
                                            {{ item.phone_number}}</span>
                                    </div>
                                </div>
                                <div class="flex mt-2">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-lightGray p-1 rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="size-4 text-black">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
                                                </svg>

                                            </div>
                                            <div class="text-xs ml-2 text-darkSlateBlue">{{ item.handedness}} handed</div>
                                        </div>
                                    </div>
                                    <div class="flex-3">
                                        <span
                                            class="text-darkSlateBlue text-xs p-1 text-sm text-right">{{ item.email}}</span>
                                    </div>
                                </div>
                                <div class="flex mt-2">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="bg-lightGray p-1 rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="size-4 text-black">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                                </svg>

                                            </div>
                                            <div class="text-xs ml-2 text-darkSlateBlue">{{ item.height}} cm</div>
                                        </div>
                                    </div>
                                    <div class="flex-3">
                                        <span class="text-darkSlateBlue text-xs p-1 text-sm text-right">{{ item.gender}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!--/ card 01 -->
            </div>


        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, defineEmits } from "vue";
import { useNuxtApp } from "#app";


const items = ref([]);
const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const loading = ref(false);



// Fetch data from the API
const fetchData = async () => {
    loading.value = true;
  try {
      const transferPlayers = await $userService.get_transfer_players();
      items.value = transferPlayers.data.dataSets;
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

onMounted(fetchData);

definePageMeta({
    layout: 'socialhub-three-column',
    middleware: ['role'],
    requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
});
</script>