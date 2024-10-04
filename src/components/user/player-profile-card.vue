<template>
        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-black">Player Profile </h2>
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
            <label class="text-black text-sm">Gender</label>
            <div class="flex flex-wrap mt-2">

                <!-- <button
                    class="pl-2 text-black bg-white border border-timberwolf rounded text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                    d="dropdownGenderButton" data-dropdown-toggle="dropdownGender">
                    Select <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4 text-black ms-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </button> -->
                <!-- <div id="dropdownGender" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <select class="py-2 text-sm text-black z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44" >
                        <li>
                            <option class="block px-4 py-2 hover:bg-gray-100">Male</option>
                        </li>
                        <li>
                            <option class="block px-4 py-2 hover:bg-gray-100">Female</option>
                        </li>
                        <li>
                            <option class="block px-4 py-2 hover:bg-gray-100">Other</option>
                        </li>
                    </select>
                </div> -->
                <GenderDropDown @change="changeGender" :genders="genders" v-model="gender" id="gender" label="Gender *"/>

            </div>
        </div>
        <div class="space-y-2">
            <div class="flex flex-wrap mt-2">
                <div class="flex-1">
                    <label class="text-black text-sm">Grad Month</label>
                    <div class="flex flex-wrap mt-2">
                        <input type="month" @change="changeGraduationMonth" v-model="graduation_month"
                class="pl-2 text-black bg-white border rounded-lg border-timberwolf rounded text-sm px-5 py-2.5 text-center inline-flex items-center w-full focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed"
                placeholder="Player Graduation Month/Year"
                 />
                        <!-- <button
                            class="pl-2 text-black bg-white border border-timberwolf rounded text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                            d="dropdownGradMonthButton" data-dropdown-toggle="dropdownGradMonth">
                            Select <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4 text-black ms-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </button>
                        <div id="dropdownGradMonth"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-black" aria-labelledby="dropdownMenuIconButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 01</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 2</a>
                                </li>
                            </ul>
                        </div> -->

                    </div>
                </div>
                <div class="flex-1">
                    <label class="text-black text-sm">Grad Year</label>
                    <div class="flex flex-wrap mt-2">
                        <input type="month" @change="changeGraduationYear" v-model="graduation_year"
                class="pl-2 text-black bg-white border rounded-lg border-timberwolf rounded text-sm px-5 py-2.5 text-center inline-flex items-center w-full  focus:border-lightAzure focus:ring focus:ring-lightPastalBlue focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed"
                placeholder="Player Graduation Month/Year"
                 />


                        <!-- <button
                            class="pl-2 text-black bg-white border border-timberwolf rounded text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                            d="dropdownGradYearButton" data-dropdown-toggle="dropdownGradYear">
                            Select <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4 text-black ms-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </button>
                        <div id="dropdownGradYear"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-black" aria-labelledby="dropdownMenuIconButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 01</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 2</a>
                                </li>
                            </ul>
                        </div> -->


                    </div>
                </div>
            </div>
        </div>
        <div class="space-y-2">
            <label class="text-black text-sm">Handedness</label>
            <HandednessDropdown @change="changeHandness" :handedness="handednesses" v-model="handedness" id="handedness" 
                label="Handedness *" />
            <!-- <div class="flex flex-wrap mt-2">

                <button
                            class="pl-2 text-black bg-white border border-timberwolf rounded text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                            d="dropdownHendednessButton" data-dropdown-toggle="dropdownHendedness">
                            Select <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4 text-black ms-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </button>
                        <div id="dropdownHendedness"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-black" aria-labelledby="dropdownMenuIconButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 01</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 2</a>
                                </li>
                            </ul>
                        </div>

            </div> -->
        </div>
        <div class="space-y-2">
            <!-- <label class="text-black text-sm">Country</label>
            <CountryDropdown @change="changeCountry(data)"  :countries="countries" v-model="country" id="player_country"
                label="Player Country"  /> -->
            <!-- <div class="flex flex-wrap mt-2">

                <button
                            class="pl-2 text-black bg-white border border-timberwolf rounded text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                            d="dropdownGradYearButton" data-dropdown-toggle="dropdownGradYear">
                            Select <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4 text-black ms-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </button>
                        <div id="dropdownGradYear"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-black" aria-labelledby="dropdownMenuIconButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 01</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">sample 2</a>
                                </li>
                            </ul>
                        </div>

            </div> -->
        </div>
    </div>
</template>

<script setup>
import GenderDropDown from '~/components/common/select/GenderDropDown.vue';
import { loadCountryList, loadNationalityList, loadBudgetList, loadGenderList, loadHandnessList } from '~/services/commonService';
import HandednessDropdown from '~/components/common/select/HandednessDropdown.vue';
import CountryDropdown from '~/components/common/select/CountryDropdown.vue';

import { useSearchStore } from '~/stores/searchStore';

import { ref } from 'vue';

const searchStore = useSearchStore();


const genders = ref([]);
const handednesses = ref([]);
const countries = ref([]);
const country = ref('');
const gender = ref('');
const graduation_month = ref('');
const graduation_year = ref('');
const handedness = ref('')
const filter = ref([])
const data  = ref({})

onMounted(() => {
//   loadCountryCodes();
  loadCountries();
//   loadNationalities();
  loadGenders();
//   loadBudgets();
   loadHandness();
});

const loadGenders = async () => {
  try {
    genders.value = await loadGenderList();
  } catch (err) {
    console.error('Error loading genders:', err);
  }
};

const loadHandness = async () => {
  try {
    handednesses.value = await loadHandnessList();
  } catch (err) {
    console.error('Error loading handess:', err);
  }
};

const loadCountries = async () => {
  try {
    countries.value = await loadCountryList();
  } catch (err) {
    console.error('Error loading countries:', err);
  }
};

const changeCountry = (changedata) =>{
    searchStore.setCountryId(country.value)
    data.value = {
        name:'country',
        value:country.value,
        display_value:"Country | "+country.value
    }
    dataFilter(data.value)
}

const changeGender = () =>{
    searchStore.setGenders(gender.value)
    data.value = {
        name:'gender',
        value:gender.value,
        display_value:"Gender | "+gender.value
    }
    dataFilter(data.value)

}

const changeHandness = () =>{
    searchStore.setHandednesses(handedness.value)
    data.value = {
        name:'handness',
        value:handedness.value,
        display_value:"Handness | "+handedness.value
    }
    dataFilter(data.value)

}

const changeGraduationMonth = () =>{
    searchStore.setGraduationMonth(graduation_month.value)
    data.value = {
        name:'month',
        value:graduation_month.value,
        display_value:"Month | "+graduation_month.value
    }
    dataFilter(data.value)

}

const changeGraduationYear = () =>{
    searchStore.setGraduationYear(graduation_year.value)
    data.value = {
        name:'year',
        value:graduation_year.value,
        display_value:"Year | "+graduation_month.value

    }
   // dataFilter(data.value)
}

const dataFilter = (data) =>{
    filter.value =searchStore.searchFilter
    const exists = filter.value.some(item => item.name == data.name);
    if (exists) {
       filter.value = filter.value.map(item => item.name === data.name ? {...item, value:data.value ,display_value:data.display_value} : item);
    }else{
        filter.value.push({name: data.name, value:data.value,display_value:data.display_value});
    }
    searchStore.setSearchFilter(filter.value)
    searchStore.setSearchButton(true)
}

const clear = ()=>{
    country.value = '';
    gender.value = '';
    handedness.value = '';
    graduation_month.value = '';
    graduation_year.value = '';
   
    searchStore.setCountryId('')
    searchStore.setGenders('')
    searchStore.setHandednesses('')
    searchStore.setGraduationMonth('')
    searchStore.setGraduationYear('')
    filter.value =searchStore.searchFilter
    filter.value = filter.value.filter(item => item.name !== 'year');
    filter.value = filter.value.filter(item => item.name !== 'month');
    filter.value = filter.value.filter(item => item.name !== 'gender');
    filter.value = filter.value.filter(item => item.name !== 'handness');
    filter.value = filter.value.filter(item => item.name !== 'country');

    searchStore.setSearchFilter(filter.value)
    searchStore.setSearchButton(true)

}

</script>