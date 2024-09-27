<template>
    <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-6 mt-3">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-black">Location</h2>
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
            <input type="text" v-model="address" @change="addressChange"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="State">
            <input type="text" v-model="city" @change="cityChange"
                class="w-full px-3 py-2 border border-timberwolf rounded focus:outline-none focus:ring focus:border-graySnowDrift"
                placeholder="City">
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

import { useSearchStore } from '~/stores/searchStore';

const searchStore = useSearchStore();
const city = ref('')
const address = ref('')
const filter = ref([])

const cityChange = () =>{
    searchStore.setCity(city.value)
    searchStore.setSearchButton(true)
    filter.value =searchStore.searchFilter
    const display_value ="City | "+city.value

    const exists = filter.value.some(item => item.name == 'city');
    if (exists) {
        filter.value = filter.value.map(item => item.name === 'city' ? {...item, value: city.value,display_value:display_value} : item);
    }else{
        filter.value.push({name: 'city', value: city.value,display_value:display_value});
    }

    searchStore.setSearchFilter(filter.value)
    searchStore.setSearchButton(true)

}

const addressChange = () =>{
    searchStore.setState(address.value)
    searchStore.setSearchButton(true)
    filter.value =searchStore.searchFilter

    const exists = filter.value.some(item => item.name == 'state');
    const display_value =" State | "+address.value

    if (exists) {
        filter.value = filter.value.map(item => item.name === 'state' ? {...item, value: address.value,display_value:display_value} : item);
    }else{
        filter.value.push({name: 'state', value: address.value,display_value:display_value});
    }

    searchStore.setSearchFilter(filter.value)
    searchStore.setSearchButton(true)

}
 
const clear = ()=>{
    city.value = '';
    address.value = '';
   
    searchStore.setCity('')
    searchStore.setState('')
    searchStore.setSearchButton(true)
    filter.value =searchStore.searchFilter
    filter.value = filter.value.filter(item => item.name !== 'state');
    filter.value = filter.value.filter(item => item.name !== 'city');
    searchStore.setSearchFilter(filter.value)
    searchStore.setSearchButton(true)

  
}

</script>