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
                    <span v-if="searchStore.searchKey !=''" class="items-center bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">{{searchStore.searchKey}}</span>
                    </span>
                    <span v-for="filter in searchStore.searchFilter" class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">{{ filter.display_value }}</span>
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
import { useSearchStore } from '~/stores/searchStore';
const searchStore = useSearchStore();

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
            user_role:searchStore.userRole??'',
            search_key:searchStore.searchKey??'',
            state:searchStore.stateName??'',
            city:searchStore.cityName??'',
            tuition_in_state_min:searchStore.tuitionInStateMin??'',
            tuition_in_state_max:searchStore.tuitionInStateMax??'',
            tuition_out_state_min:searchStore.tuitionOutStateMin??'',
            tuition_out_state_max:searchStore.tuitionOutStateMax??'',
            gender:searchStore.genderType??'',
            graduation_month:searchStore.graduationMonth??'',
            graduation_year:searchStore.graduationYear??'',
            country_id:searchStore.countryId??'',
            handedness:searchStore.handednessType??'',
            utr_min:searchStore.utrMin??'',
            utr_max:searchStore.utrMax??'',
            wtn_min:searchStore.wtnMin??'',
            wtn_max:searchStore.wtnMax??'',
            atp_ranking:searchStore.atpRanking??'',
            itf_ranking:searchStore.itfRanking??'',
            national_ranking:searchStore.nationalRanking??'',
            type:null
        }
    })
     name.value ='';
     emit('close');
    
   
}
</script>