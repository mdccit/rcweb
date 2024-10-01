<template>
    <div>
    <!-- Team section -->
        <div class="w-full flex mt-5">
            <div class="flex-1">
                <h1 class="text-lg font-semibold mb-1 text-black">Teams</h1>
            </div>
            <div class="flex-1  text-right">
                <div class=" text-right">
                    <div>
                        <button class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[100px]">
                            Create Team +
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="team in props.team" class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-2">
            <div class="grid grid-cols-4 mb-4">
                <div class=" col-span-3">
                    <h1 class="text-lg font-semibold mb-1 text-black">{{  team.team_name }}</h1>
                    <!-- <p class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> -->
                </div>
                <!-- <div class="col-span-1 text-right">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-500">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div> -->
            </div>
            <div class="flex">
                <div class="flex-1 p-1">
                    <!-- team card start -->
                       <div v-for="user in team.team_users" class="bg-white p-4 border rounded-2xl">
                            <div class=" grid grid-cols-12 gap-4">
                                <div class="col-span-3">
                                    <img class=" rounded-2xl w-[85px] h-[85px]"
                                        src="@assets/user/images/avtar.png" alt="Neil image">
                                </div>
                                <div class="col-span-6">
                                    <h4 class="text-black font-normal">{{ user.name }}</h4>
                                    <div class="flex items-center space-x-2 mb-2">
                                        <div class="bg-mintGreen p-1 rounded">
                                            <img src="@assets/user/images/man-medal.png" alt=""
                                                class=" w-4 h-4">
                                        </div>
                                        <div class="text-sm ml-2 text-green">Tennis {{ user.role_id==4?'Player':'Coache' }}</div>
                                    </div>
                                </div>
                                <div class="col-span-3">
                                    <!-- <h4 class="text-black">UTR <span class="text-blue-500">30.01</span></h4> -->
                                </div>
                            </div>
                            
                        </div>
                    </div>
                  
                </div>
            </div>
        <!--  Team section End-->
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, defineExpose,ref, onMounted} from 'vue';
  
  const props = defineProps({
    team: Array
});

console.log(props.team)
//   const props = defineProps({
//       academic: Object
//   });
  
  </script>