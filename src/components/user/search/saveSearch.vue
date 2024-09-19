<template>
        <div v-if="props.isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold text-black">Saved Search</h2>
                <button class="flex text-ceil text-sm" @click="closePopup">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div>
                <label class="text-black text-sm">Name</label>
                <div class="flex">
                    <input type="text" v-model="name"
                        class="w-full py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift text-black text-sm"
                        placeholder="Type here">
                    <button @click="save" class="bg-primaryblue p-3 text-white rounded-md ml-2 text-xs">Save</button>
                </div>
            </div>
            <div class="mt-2">
                <label class="text-black text-sm font-bold">Filters</label>
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
                </div>
            </div>
            <div class="mt-2">
                <label class="text-black text-sm font-bold">Search Result</label>
                <div class="flex h-8 mt-2">
                    <span class="bg-pigeonBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Athletics</span>
                    </span>
                    <span class="bg-pigeonBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Location</span>
                    </span>
                    <span class="bg-pigeonBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Turionand Cost</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,defineProps, defineEmits, defineExpose} from 'vue';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';

const nuxtApp = useNuxtApp();
const router = useRouter();
const name =ref('')
const $userService = nuxtApp.$userService;
const props = defineProps({
    isOpen: Boolean,
    // action: String,
    // userId: String,
});
const emit = defineEmits(['close']);

const closePopup = ()=>{
    emit('close');
}

const save = async() =>{
    if (name.value.trim() === '') {
        return;
    }
    const response = await $userService.save_search({
        name:name.value,
        search_data:{
            // user_role:4,
            search_key:'',
            state:null,
            city:null,
            tuition_in_state_min:null,
            tuition_in_state_max:null,
            tuition_out_state_min:null,
            tuition_out_state_max:null,
            gender:null,
            graduation_month:null,
            graduation_year:null,
            country_id:null,
            handedness:null,
            utr_min:null,
            utr_max:null,
            wtn_min:null,
            wtn_max:null,
            atp_ranking:null,
            itf_ranking:null,
            national_ranking:null,
            type:null
        }
    })
     name.value ='';
     emit('close');
    
   
}
</script>