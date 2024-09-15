<template>
   <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-5">
                        <div class="grid grid-cols-4 mb-4">
                            <div class=" col-span-3">
                                <h1 class="text-lg font-semibold mb-1 text-black">Members</h1>
                                <p class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <div class="col-span-1 text-right">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-500">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="flex">
                            <div v-for="member in props.members"class="flex-1 p-1">
                                <!-- member card start-->
                                <div class="bg-white p-4 border rounded-2xl">
                                    <div class=" grid grid-cols-12 gap-4">
                                        <div class="col-span-3">
                                            <img class=" rounded-2xl w-[85px] h-[85px]"
                                                src="@assets/user/images/avtar.png" alt="Neil image">
                                        </div>
                                        <div class="col-span-6">
                                            <h4 class="text-black font-normal">{{ member.first_name }} {{ member.last_name }}</h4>
                                            <div class="flex items-center space-x-2 mb-2">
                                                <div class="bg-mintGreen p-1 rounded">
                                                    <img src="@assets/user/images/man-medal.png" alt=""
                                                        class=" w-4 h-4">
                                                </div>
                                                <div class="text-sm ml-2 text-green">Tennis Coach</div>
                                            </div>
                                            <div class="flex items-center space-x-2">
                                                <div class=" rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="size-5 text-black mr-1">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                    </svg>

                                                </div>
                                                <div class="text-sm ml-2 text-black">New Pura, Belgium</div>
                                            </div>
                                        </div>
                                        <div class="col-span-3">
                                            <h4 class="text-black">UTR <span class="text-blue-500">30.01</span></h4>
                                        </div>
                                    </div>


                                    <div class="flex mt-2">
                                        <div class="flex-1">
                                            <div class="flex items-center space-x-2 mb-2">
                                                <div class="bg-blue-100 p-1 rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="size-4 text-blue-700">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                                    </svg>

                                                </div>
                                                <div class="text-xs ml-2 text-black"><span
                                                        class="text-blue-700">Ralph,Cameron</span> 3 more mutual
                                                    connections
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-1 text-right">
                                            <div>
                                                <button class="bg-red rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- member card End-->
                            </div>

                            <!-- <div class="flex-1 p-1">
                                <div class="bg-white p-4 border rounded-2xl">
                                    <div class=" grid grid-cols-12 gap-4">
                                        <div class="col-span-3">
                                            <img class=" rounded-2xl w-[85px] h-[85px]"
                                                src="@assets/user/images/avtar.png" alt="Neil image">
                                        </div>
                                        <div class="col-span-6">
                                            <h4 class="text-black font-normal">Ronald Richards</h4>
                                            <div class="flex items-center space-x-2 mb-2">
                                                <div class="bg-blue-200 p-1 rounded">
                                                    <img src="@assets/user/images/playerIcon.png" alt=""
                                                        class=" w-4 h-4">
                                                </div>
                                                <div class="text-sm ml-2 text-blue-500">Tennis Player</div>
                                            </div>
                                            <div class="flex items-center space-x-2">
                                                <div class=" rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="size-5 text-black mr-1">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                    </svg>

                                                </div>
                                                <div class="text-sm ml-2 text-black">New Pura, Belgium</div>
                                            </div>
                                        </div>
                                        <div class="col-span-3">
                                            <h4 class="text-black">UTR <span class="text-blue-500">30.01</span></h4>
                                        </div>
                                    </div>


                                    <div class="flex mt-2">
                                        <div class="flex-1">
                                            <div class="flex items-center space-x-2 mb-2">
                                                <div class="bg-blue-100 p-1 rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="size-4 text-blue-700">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                                    </svg>

                                                </div>
                                                <div class="text-xs ml-2 text-black"><span
                                                        class="text-blue-700">Ralph,Cameron</span> 3 more mutual
                                                    connections
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-1 text-right">
                                            <div>
                                                <button class="bg-red rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div> -->
                        </div>
                    </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose,ref, onMounted} from 'vue';

const props = defineProps({
    members: Array
});

</script>