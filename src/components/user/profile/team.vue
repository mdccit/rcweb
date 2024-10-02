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
                        <button @click="memberAdd" class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[100px]">
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
                <div class="col-span-1 text-right">
                    <button @click="deleteTeam(team)">
                         Delete
                    </button>
                </div>
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
                                <!-- <div class="col-span-3">
                                    <button> Delete</button>
                                </div> -->
                            </div>
                            
                        </div>
                    </div>
                  
                </div>
            </div>
        <!--  Team section End-->
        <MemberAdd :isVisible="showModal" @close="showModal = false" :members="props.members"  :schoolId="props.schoolId" @getTeam="getTeam" />
        <TeamDeleteModel :isVisible="showDeleteModal" @close="showDeleteModal = false" @getTeam="getTeam" :teamId="teamId"/>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, defineExpose,ref, onMounted} from 'vue';
  import MemberAdd from '~/components/user/profile/memberAdd.vue';
  import TeamDeleteModel from '~/components/user/profile/teamDeleteModel.vue';

  import { useNuxtApp } from '#app';
  const nuxtApp = useNuxtApp();
  const $publicService = nuxtApp.$publicService;

  const emit = defineEmits(['getSchoolTeam']);

  const props = defineProps({
    team: Array,
    members:Array,
    schoolId:String
  });
  const showModal = ref(false)
const showDeleteModal= ref(false)
const teamId= ref('')

   const memberAdd = () =>{
    showModal.value =true;
   }

   const getTeam = () =>{
    teamId.value=''
    emit('getSchoolTeam')
  }

  const deleteTeam = async(team) =>{
    teamId.value=team.team_id
    showDeleteModal.value =true
   

  }
  </script>