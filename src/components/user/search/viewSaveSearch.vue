<template>
     <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold text-black">Select Saved Search</h2>
                <button class="flex text-ceil text-sm" @click="closePopup">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div v-for="save in saveSearch"class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-sm font-bold text-black">{{ save.name }}</h4>
                    <button @click="deleteSearch(save.id)" class="flex text-orangeRed text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-3">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                    </button>
                </div>
                <div class="flex h-8 mt-2">
                    <span class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">School</span>
                    </span>
                    <span class="items-center bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Player</span>
                    </span>
                    <span class="items-center bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Coach</span>
                    </span>
                    <span class="bg-pigeonBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Athletics</span>
                    </span>
                    <span class="bg-pigeonBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Location</span>
                    </span>
                </div>
            </div>
            <!-- <div class="card rounded-2xl overflow-hidden border border-timberwolf bg-white w-full p-4 mt-3">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-sm font-bold text-black">Search name</h4>
                    <button class="flex text-orangeRed text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-3">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                    </button>
                </div>
                <div class="flex h-8 mt-2">
                    <span class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">School</span>
                    </span>
                    <span class="items-center bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Player</span>
                    </span>
                    <span class="items-center bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Coach</span>
                    </span>
                    <span class="bg-pigeonBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Athletics</span>
                    </span>
                    <span class="bg-pigeonBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Location</span>
                    </span>
                </div>
            </div> -->
            <!-- <div class="card rounded-2xl overflow-hidden border border-timberwolf bg-white w-full p-4 mt-3">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-sm font-bold text-black">Search name</h4>
                    <button class="flex text-orangeRed text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-3">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                    </button>
                </div>
                <div class="flex h-8 mt-2">
                    <span class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">School</span>
                    </span>
                    <span class="items-center bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Player</span>
                    </span>
                    <span class="items-center bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Coach</span>
                    </span>
                    <span class="bg-pigeonBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Athletics</span>
                    </span>
                    <span class="bg-pigeonBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Location</span>
                    </span>
                </div>
            </div> -->
        </div>
    </div> 
</template>

<script setup>
import { ref,defineProps, defineEmits, defineExpose,onMounted} from 'vue';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';

const nuxtApp = useNuxtApp();
const router = useRouter();
const saveSearch =ref([])
const $userService = nuxtApp.$userService;
const props = defineProps({
    isOpen: Boolean,
    // action: String,
    // userId: String,
});
const emit = defineEmits(['close']);
onMounted(() => {
    getData();
  

  });
const closePopup = ()=>{
    emit('close');
}

const getData = async() =>{
    const response = await $userService.get_save_search()
    saveSearch.value =response.dataSets
}

const deleteSearch = async(id) =>{
    const response = await $userService.delete_save(id)
    console.log(response)
    getData();

}
</script>