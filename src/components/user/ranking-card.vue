<template>
     <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-black">Rankings & Ratings</h2>
            <button @click="clear" class="flex text-ceil text-sm">
                <svg class="w-3 h-3 mt-1 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <span> Clear</span>
            </button>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">UTR</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text"  v-model="utrMin" @change="utrMinChange"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text"  v-model="utrMax" @change="utrMaxChange"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">WTN</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text"  v-model="wtnMin" @change="wtnMinChange"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text"  v-model="wtnMax" @change="wtnMaxChange"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Minimum Rankings</label>
            <input type="number" v-model="apt" @change="aptChange"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="ATP Ranking">
            <input type="number"  v-model="itf" @change="itfChange"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="ITF Ranking">
            <input type="number"  v-model="nationalRanking" @change="nationalRankingChange"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="National Ranking">
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

import { useSearchStore } from '~/stores/searchStore';

const searchStore = useSearchStore();
const utrMin = ref('')
const utrMax = ref('')
const wtnMin = ref('')
const wtnMax = ref('')
const apt = ref('')
const itf = ref('')
const nationalRanking = ref('')

const utrMinChange = () =>{
    searchStore.setUtrMin(utrMax.value)
}

const utrMaxChange = () =>{
    searchStore.setUtrMax(utrMin.value)
}

const wtnMinChange = () =>{
    searchStore.setWtnMin(wtnMin.value)
}

const wtnMaxChange = () =>{
    searchStore.setWtnMax(wtnMax.value)
}

const aptChange = () =>{
    searchStore.setAtpRanking(apt.value)
}

const itfChange = () =>{
    searchStore.setItfRanking(itf.value)
}

const nationalRankingChange = () =>{
    searchStore.setNationalRanking(nationalRanking.value)
}







const clear = ()=>{
    utrMin.value = '';
    utrMax.value = '';
    wtnMin.value = '';
    wtnMax.value = '';
    apt.value = '';
    itf.value = '';
    nationalRanking.value = '';
   
    searchStore.setNationalRanking('')
    searchStore.setItfRanking('')
    searchStore.setAtpRanking('')
    searchStore.setWtnMax('')
    searchStore.setWtnMin('')
    searchStore.setUtrMax('')
    searchStore.setUtrMin('')
}

</script>