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
            <div v-for="save in props.saveSearch"
                class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
                <div class="flex justify-between items-center mb-4">
                    <div class="flex-1">
                        <h4 class="text-sm font-bold text-black">{{ save.name }}</h4>
                    </div>
                    <div class="flex-2 flex">
                        <button @click="applySearch(save)" class="flex text-steelBlue text-sm mr-3">
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                            </svg>

                        </button>
                        <button @click="deleteSearch(save.id)" class="flex text-orangeRed text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>

                        </button>
                    </div>
                </div>
                <div class="flex h-8 mt-2">
                    <span v-if="save.search_data.user_role != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">{{ save.search_data.user_role == 5 ? 'Coaches' : 'Player' }}</span>
                    </span>
                    <span v-if="save.search_data.search_key != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">{{ save.search_data.search_key }}</span>
                    </span>
                    <span v-if="save.search_data.state != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">{{ save.search_data.state }}</span>
                    </span>
                    <span v-if="save.search_data.city != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">{{ save.search_data.city }}</span>
                    </span>
                    <span
                        v-if="save.search_data.tuition_in_state_min != null || save.search_data.tuition_in_state_max != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">In-state tuition |{{ save.search_data.tuition_in_state_min }} {{
                            save.search_data.tuition_in_state_max }}</span>
                    </span>
                    <span
                        v-if="save.search_data.tuition_out_state_min != null || save.search_data.tuition_out_state_max != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">Out-state tuition |{{ save.search_data.tuition_out_state_min }} {{
                            save.search_data.tuition_out_state_max }}</span>
                    </span>

                    <span v-if="save.search_data.gender != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">{{ save.search_data.gender }}</span>
                    </span>
                    <span v-if="save.search_data.graduation_month != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">{{ save.search_data.graduation_month }}</span>
                    </span>
                    <span v-if="save.search_data.graduation_year != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">{{ save.search_data.graduation_year }}</span>
                    </span>
                    <span v-if="save.search_data.country_id != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">{{ save.search_data.country_id }}</span>
                    </span>
                    <span v-if="save.search_data.handedness != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">{{ save.search_data.handedness }}</span>
                    </span>
                    <span v-if="save.search_data.utr_min != null || save.search_data.utr_max != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">UTR |{{ save.search_data.utr_min }} {{ save.search_data.utr_max
                            }}</span>
                    </span>
                    <span v-if="save.search_data.wtn_min != null || save.search_data.wtn_max != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">WTN |{{ save.search_data.wtn_min }} {{ save.search_data.wtn_max
                            }}</span>
                    </span>
                    <span v-if="save.search_data.atp_ranking != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">APT | {{ save.search_data.atp_ranking }}</span>
                    </span>
                    <span v-if="save.search_data.itf_ranking != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">ITF | {{ save.search_data.itf_ranking }}</span>
                    </span>
                    <span v-if="save.search_data.national_ranking != null"
                        class="bg-steelBlue text-white px-2.5 py-0.5 rounded-md mr-2">
                        <span class="text-xs">National Ranking | {{ save.search_data.national_ranking }}</span>
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
import { ref, defineProps, defineEmits, defineExpose, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';
import { useSearchStore } from '~/stores/searchStore';

const nuxtApp = useNuxtApp();
const router = useRouter();
const saveSearch = ref([])
const $userService = nuxtApp.$userService;
const searchStore = useSearchStore();
const filter = ref([])

const props = defineProps({
    isOpen: Boolean,
    saveSearch: Array
    // action: String,
    // userId: String,
});
const emit = defineEmits(['close', 'getSaveData']);
onMounted(() => {
    //getData();


});
const closePopup = () => {
    emit('close');
}


const deleteSearch = async (id) => {
    const response = await $userService.delete_save(id)
    emit('getSaveData');
}

const applySearch = (data) => {

    searchStore.setSearchFilter([])
    if (data.search_data.user_role != null) {
        searchStore.setUserRole(data.search_data.user_role)
        const value = data.search_data.user_role == 5 ? 'Coache' : 'Player'
        filter.value.push({ name: 'user filter', value: value, display_value: "User |" + value });
        searchStore.setSearchFilter(filter.value)

    }
    if (data.search_data.state != null) {
        searchStore.setState(data.search_data.state)
        filter.value.push({ name: 'state', value: data.search_data.state, display_value: "State |" + data.search_data.state });
        searchStore.setSearchFilter(filter.value)

    }
    if (data.search_data.city != null) {
        searchStore.setCity(data.search_data.city)
        filter.value.push({ name: 'city', value: data.search_data.city, display_value: "City |" + data.search_data.city });
        searchStore.setSearchFilter(filter.value)

    }
    if (data.search_data.tuition_in_state_min != null) {
        searchStore.setTuitionOutStateMax(data.search_data.tuition_in_state_min)
        filter.value.push({ name: 'Out-of-state tuition-max', value: data.search_data.tuition_in_state_min, });
        searchStore.setSearchFilter(filter.value)

    }
    if (data.search_data.tuition_in_state_max != null) {
        searchStore.setTuitionOutStateMin(data.search_data.tuition_in_state_max)
        filter.value.push({ name: 'Out-of-state tuition-min', value: data.search_data.tuition_in_state_max });
        searchStore.setSearchFilter(filter.value)
    }
    if (data.search_data.tuition_out_state_max != null) {
        searchStore.setTuitionInStateMax(data.search_data.tuition_out_state_max)
        filter.value.push({ name: 'In-state tuition-max', value: data.search_data.tuition_out_state_max });
        searchStore.setSearchFilter(filter.value)
    }
    if (data.search_data.tuition_out_state_min != null) {
        searchStore.setTuitionInStateMin(data.search_data.tuition_out_state_min)
        filter.value.push({ name: 'In-state tuition-min', value: data.search_data.tuition_out_state_min });
        searchStore.setSearchFilter(filter.value)

    }

    if (data.search_data.graduation_year == 'year') {
        searchStore.setGraduationYear(data.search_data.graduation_year)
        filter.value.push({ name: 'year', value: data.search_data.graduation_year, display_value: "Year |" + data.search_data.graduation_year });
        searchStore.setSearchFilter(filter.value)

    }
    if (data.search_data.graduation_month != null) {
        searchStore.setGraduationMonth(data.search_data.graduation_month)
        filter.value.push({ name: 'month', value: data.search_data.graduation_month, display_value: "Month |" + data.search_data.graduation_month });
        searchStore.setSearchFilter(filter.value)

    }
    if (data.search_data.gender != null) {
        searchStore.setGenders(data.search_data.gender)
        filter.value.push({ name: 'gender', value: data.search_data.gender, display_value: "Gender |" + data.search_data.gender });
        searchStore.setSearchFilter(filter.value)

    }
    if (data.search_data.handedness != null) {
        searchStore.setHandednesses(data.search_data.handedness)
        filter.value.push({ name: 'handness', value: data.search_data.handedness, display_value: "Handness |" + data.search_data.handedness });
        searchStore.setSearchFilter(filter.value)


    }
    if (data.search_data.country_id != null) {
        searchStore.setCountryId(data.search_data.country_id)
        filter.value.push({ name: 'country', value: data.search_data.country_id });
        searchStore.setSearchFilter(filter.value)


    }

    if (data.search_data.utr_min != null) {
        searchStore.setUtrMin(data.search_data.utr_min)
        filter.value.push({ name: 'utrMin', value: data.search_data.utr_min, display_value: "UTR Min |" + data.search_data.utr_min });
        searchStore.setSearchFilter(filter.value)


    }
    if (data.search_data.utr_max != null) {
        searchStore.setUtrMax(data.search_data.utr_max)
        filter.value.push({ name: 'utrMax', value: data.search_data.utr_max, display_value: "UTR Max |" + data.search_data.utr_max });
        searchStore.setSearchFilter(filter.value)


    }
    if (data.search_data.wtn_min != null) {
        searchStore.setWtnMin(data.search_data.wtn_min)
        filter.value.push({ name: 'wtnMin', value: data.search_data.wtn_min, display_value: "WTN Min |" + data.search_data.wtn_min });
        searchStore.setSearchFilter(filter.value)


    }
    if (data.search_data.wtn_max != null) {
        searchStore.setWtnMax(data.search_data.wtn_max)
        filter.value.push({ name: 'wtnMax', value: data.search_data.wtn_max, display_value: "WTN Max |" + data.search_data.wtn_max });
        searchStore.setSearchFilter(filter.value)

    }
    if (data.search_data.atp_ranking != null) {
        searchStore.setAtpRanking(data.search_data.atp_ranking)
        filter.value.push({ name: 'apt', value: data.search_data.atp_ranking, display_value: "APT |" + data.search_data.atp_ranking });
        searchStore.setSearchFilter(filter.value)

    }
    if (data.search_data.itf_ranking != null) {
        searchStore.setItfRanking(data.search_data.itf_ranking)
        filter.value.push({ name: 'itf', value: data.search_data.itf_ranking, display_value: "ITF |" + data.search_data.itf_ranking });
        searchStore.setSearchFilter(filter.value)

    }
    if (data.search_data.national_ranking != null) {
        searchStore.setNationalRanking(data.search_data.national_ranking)
        filter.value.push({ name: 'national ranking', value: data.search_data.national_ranking, display_value: "National Ranking |" + data.search_data.national_ranking });
        searchStore.setSearchFilter(filter.value)

    }
    searchStore.setSearchButton(true)
    filter.value = []
    emit('close');

}
</script>