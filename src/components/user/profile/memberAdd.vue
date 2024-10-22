<template>
    <div v-if="isVisible" id="crud-modal" tabindex="-1"
        class="fixed inset-0 z-index-400 flex items-center justify-center bg-black bg-opacity-50">


        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true">

            </div>
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        class="bg-white w-full max-w-5xl h-[80vh] md:h-[60vh] p-6 rounded-lg shadow-lg relative overflow-auto">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:items-start">
                                <div class="mt-3 text-center  sm:mt-0 sm:text-left">
                                    <div class="grid grid-cols-8">
                                        <div class="col-span-7">
                                            <h1 class="text-base font-semibold leading-6 text-gray-900"
                                                id="modal-title">Create
                                                Team
                                            </h1>
                                        </div>
                                        <div class="col-span-1 flex justify-end">
                                            <button @click="$emit('close')">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6 18 18 6M6 6l12 12" />
                                                </svg>

                                            </button>
                                        </div>
                                    </div>


                                    <div class="mt-2">

                                        <div class="flex bp-1">
                                            <div class="flex-1 p-1">
                                                <div class="">
                                                    <label class="block mb-1 text-gray-700 font-sans">Team name
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span></label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                                        <input v-model="teamName" autocomplete="given-name" class="block px-5 py-3 w-full border-0 focus:border-lightAzure
                                                         focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50
                                                         disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-1 p-1">
                                                <div class="">
                                                    <label class="block mb-1 text-gray-700 font-sans">Select members
                                                        <span aria-hidden="true" class="text-red-600"
                                                            title="This field is required">*</span>
                                                    </label>
                                                    <div class="flex rounded-lg border border-gray-300 shadow-sm w-full">
                                                        <input v-model="searchKey" autocomplete="given-name" class="block px-5 py-3 w-full border-0 focus:border-lightAzure
                                                         focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50
                                                         disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                                            placeholder="" required>
                                                        <button @click="search" type="button"
                                                            class="inline-flex w-full justify-center rounded-full text-steelBlue px-3 py-2 active:bg-blue-100 transition-all text-sm font-normal text-white shadow-sm  sm:ml-3 sm:w-auto">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor"
                                                                class="size-6 mx-auto text-steelBlue">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="w-[full] grid grid-cols-2">

                                                <!-- <div v-for="result in selectValue" class="col-span-1 p-2 w-[450px]">
                                                <div class="bg-white p-4 border rounded-2xl">
                                                    <div class=" grid grid-cols-12 gap-4 w-[400px]">
                                                        <div class="col-span-3">
                                                            <img class=" rounded-2xl w-[85px] h-[85px]"
                                                                src="@/assets/user/images/Rectangle 193.png"
                                                                alt="Neil image">
                                                        </div>
                                                        <div class="col-span-6">
                                                            <h4 class="text-black font-normal">{{  result }}</h4>
                                                            <div class="flex items-center space-x-2 mb-2">
                                                                <div class="bg-blue-200 p-1 rounded">
                                                                    <img src="@/assets/images/player-blue.png" alt=""
                                                                        class=" w-4 h-4">
                                                                </div>
                                                                <div class="text-sm ml-2 text-blue-500">Tennis {{ result.user_role }}
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>


                                                    <div class="flex mt-2">
                                                        

                                                        <div class="flex-1 text-right">
                                                            <div class="flex">
                                                                <div class="flex-1 text-right">

                                                                </div>

                                                                <div>
                                                                    <button  @click="selectOruUnselect(result)"
                                                                    :class=" result.select?'bg-blue-500 rounded-full text-white  p-2 m-1 text-xs h-[35px] w-[85px]':'bg-blue-100 rounded-full text-blue-500 p-2 m-1 text-xs h-[35px] w-[85px]'"
                                                                        >
                                                                         {{ result.select ? 'Selected':'select' }}
                                                                    </button>
                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>
                                                </div>

                                            </div> -->


                                            </div>
                                            <div class="mx-auto text-center">
                                                <div v-if="result.length == 0">
                                                    <h4 class="text-black font-normal"> No Select User </h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="w-[full] grid grid-cols-2">

                                                <div v-for="result in result" class="col-span-1 p-2 w-[450px]">
                                                    <div class="bg-white p-4 border rounded-2xl">
                                                        <div class=" grid grid-cols-12 gap-4 w-[400px]">
                                                            <div class="col-span-3">
                                                                <img class=" rounded-2xl w-[85px] h-[85px]"
                                                                    src="@/assets/user/images/Rectangle 193.png"
                                                                    alt="Neil image">
                                                            </div>
                                                            <div class="col-span-6">
                                                                <h4 class="text-black font-normal">{{
                                                                    result.display_name }}</h4>
                                                                <div class="flex items-center space-x-2 mb-2">
                                                                    <div class="bg-blue-200 p-1 rounded">
                                                                        <img src="@/assets/images/player-blue.png"
                                                                            alt="" class=" w-4 h-4">
                                                                    </div>
                                                                    <div class="text-sm ml-2 text-blue-500">Tennis {{
                                                                        result.user_role }}
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>


                                                        <div class="flex mt-2">


                                                            <div class="flex-1 text-right">
                                                                <div class="flex">
                                                                    <div class="flex-1 text-right">

                                                                    </div>

                                                                    <div>
                                                                        <button @click="selectOruUnselect(result)"
                                                                            :class="result.select ? 'bg-blue-500 rounded-full text-white  p-2 m-1 text-xs h-[35px] w-[85px]' : 'bg-blue-100 rounded-full text-blue-500 p-2 m-1 text-xs h-[35px] w-[85px]'">
                                                                            {{ result.select ? 'Selected' : 'select' }}
                                                                        </button>
                                                                    </div>
                                                                </div>


                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>


                                            </div>
                                            <div class="mx-auto text-center">
                                                <div v-if="result.length == 0">
                                                    <h4 class="text-black font-normal"> No Match Result</h4>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button @click="teamAdd" type="button"
                                class="inline-flex w-full justify-center rounded-full bg-steelBlue px-3 py-2 text-sm font-normal text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">
                                Create Team</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Create team modal -->
    </div>

</template>

<script setup>
import { defineProps, defineEmits, defineExpose, ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
const nuxtApp = useNuxtApp();
const $publicService = nuxtApp.$publicService;
const emit = defineEmits(['close', 'getTeam']);

const props = defineProps({

    isVisible: Boolean,
    members: Array,
    schoolId: String

});
const members = ref([])
onMounted(() => {
    result.value = [];
    members.value = props.members.map(member => {
        return { ...member, select: false };
    });
})
const searchKey = ref('')
const teamName = ref('')
const result = ref([])
const selectValue = ref([])

const search = () => {
    result.value = members.value.filter(member => member.display_name == searchKey.value);
}

const selectOruUnselect = (data) => {
    console.log(data)
    result.value = result.value.map(result => {
        if (result.id === data.id) {
            return {
                ...result,
                select: !data.select
            }
        }
        return result
    });

    members.value = members.value.map(result => {
        if (result.user_id === data.user_id) {
            return {
                ...result,
                select: !data.select
            }
        }
        return result
    });


    if (data.select) {
        selectValue.value = selectValue.value.filter(data => !data.user_id);

    } else {
        selectValue.value.push({
            user_id: data.user_id,
            status: data.user_role == 'Coach' ? 'coache' : 'player',
            player_id: data.user_role == 'Player' ? data.player_id : null,
            coache_id: data.user_role == 'Coach' ? data.coach_id : null
        });
    }
}

const teamAdd = async () => {
    try {

        const response = await $publicService.add_school_team({
            name: teamName.value,
            school_id: props.schoolId,
            team_user: selectValue.value
        });
        emit('getTeam')

        emit('close')
    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}


</script>