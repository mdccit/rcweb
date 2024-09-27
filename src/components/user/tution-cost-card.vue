<template>
     <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-black">Tution and Cost</h2>
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
            <label class="text-black text-sm">In-state tuition</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text" v-model="tutionInCostMin" @change="tutionInCostMinChange"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text" v-model="tutionInCostMax" @change="tutionInCostMaxChange"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Out-of-state tuition</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text"  v-model="tutionOutCostMin" @change="tutionOutCostMinChange"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text" v-model="tutionOutCostMax" @change="tutionOutCostMaxChange"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div>
        <!-- <div class="space-y-2">
            <label class="text-black text-sm">Cost of attendence</label>
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                        placeholder="Min">
                </div>
                <div class="flex-1">
                    <input type="text"
                        class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift ml-2"
                        placeholder="Max">
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import {ref} from 'vue';

import { useSearchStore } from '~/stores/searchStore';

const searchStore = useSearchStore();
const tutionInCostMin = ref('')
const tutionInCostMax = ref('')
const tutionOutCostMin = ref('')
const tutionOutCostMax = ref('')
// const costOfAttendenceMin = ref('')
// const costOfAttendenceMax = ref('')
const filter = ref([])

const tutionInCostMinChange = () =>{
    searchStore.setTuitionInStateMin(tutionInCostMin.value)
    filter.value =searchStore.searchFilter

    const exists = filter.value.some(item => item.name == 'In-state tuition');
    if (exists) {
        const data = filter.value.find(item => item.name === 'In-state tuition');
        const maxValue =data.max??''
        const value = "In-state tuition | "+tutionInCostMin.value+" "+maxValue
        filter.value = filter.value.map(item => item.name === 'In-state tuition' ? {...item, value:value, min:tutionInCostMin.value,max:maxValue} : item);
    }else{
        const value = "In-state tuition | "+tutionInCostMin.value

        filter.value.push({name: 'In-state tuition', value:value, min:tutionInCostMin.value});
    }

    searchStore.setSearchFilter(filter.value)
    searchStore.setSearchButton(true)

}

const tutionInCostMaxChange = () =>{
    searchStore.setTuitionInStateMax(tutionInCostMax.value)
    filter.value =searchStore.searchFilter

    const exists = filter.value.some(item => item.name == 'In-state tuition-max');
    if (exists) {
        filter.value = filter.value.map(item => item.name === 'In-state tuition-max' ? {...item, value: tutionInCostMax.value} : item);
    }else{
        filter.value.push({name: 'In-state tuition-max', value: tutionInCostMax.value});
    }

    searchStore.setSearchFilter(filter.value)
    searchStore.setSearchButton(true)
}

const tutionOutCostMinChange = () =>{
    searchStore.setTuitionOutStateMin(tutionOutCostMin.value)
    filter.value =searchStore.searchFilter

    const exists = filter.value.some(item => item.name == 'Out-of-state tuition');

    if (exists) {
        const data = filter.value.find(item => item.name === 'Out-of-state tuition');
        const maxValue =data.max??''
        const value = "Out-of-state tuition | "+tutionOutCostMin.value+" "+maxValue
    
        filter.value = filter.value.map(item => item.name === 'Out-of-state tuition' ? {...item, value: value, min: tutionOutCostMin.value, max:maxValue} : item,);
    }else{
        const value = "Out-of-state tuition | "+tutionOutCostMin.value

        filter.value.push({name: 'Out-of-state tuition', value: value,min:tutionOutCostMin.value});
    }

    searchStore.setSearchFilter(filter.value)
    searchStore.setSearchButton(true)
}

const tutionOutCostMaxChange = () =>{
    searchStore.setTuitionOutStateMax(tutionOutCostMax.value)
    filter.value =searchStore.searchFilter

    const exists = filter.value.some(item => item.name == 'Out-of-state tuition');
    if (exists) {
        const data = filter.value.find(item => item.name === 'Out-of-state tuition');
        const minValue =data.min??''
        const value = "Out-of-state tuition | "+tutionOutCostMax.value+" "+maxValue
        filter.value = filter.value.map(item => item.name === 'Out-of-state tuition' ? {...item, value:value,min:minValue, max:tutionOutCostMax.value} : item);
    }else{
        const value = "Out-of-state tuition | "+tutionOutCostMax.value
        filter.value.push({name: 'Out-of-state tuition', value: tutionOutCostMax.value});
    }

    searchStore.setSearchFilter(filter.value)
    searchStore.setSearchButton(true)
}

// const costOfAttendenceMinChange = () =>{
//     searchStore.setUserRole(costOfAttendenceMin.value)
// }

// const costOfAttendenceMaxChange = () =>{
//     searchStore.setUserRole(costOfAttendenceMax.value)
// }


const clear = ()=>{
    tutionInCostMin.value = '';
    tutionInCostMin.value = '';
    tutionInCostMax.value = '';
    tutionOutCostMin.value = '';
    tutionOutCostMax.value = '';
    searchStore.setTuitionInStateMin('')
    searchStore.setTuitionInStateMax('')
    searchStore.setTuitionOutStateMin('')
    searchStore.setTuitionOutStateMax('')
    filter.value =searchStore.searchFilter
    filter.value = filter.value.filter(item => item.name !== 'Out-of-state tuition-max');
    filter.value = filter.value.filter(item => item.name !== 'Out-of-state tuition-min');
    filter.value = filter.value.filter(item => item.name !== 'In-state tuition-max');
    filter.value = filter.value.filter(item => item.name !== 'In-state tuition-min');
    searchStore.setSearchFilter(filter.value)
    searchStore.setSearchButton(true)

}

</script>