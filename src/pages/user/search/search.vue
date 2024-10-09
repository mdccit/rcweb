<template>
    <div class="mt-16">
        <!-- Start Content Section -->
        <div class="col-span-5 sm:col-span-4 md:col-span-5 lg:col-span-3 xl:col-span-4">
            <h2 class="text-lg font-semibold text-black">Search Result</h2>
            <!-- <label class="text-sm mb-2  text-black">Lorem ipsum is a placeholder text commonly used to</label> -->

            <div class="flex flex-wrap gap-2 my-4">
                <div class="flex-1">
                    <div class="flex">
                        <div v-for="filter in searchStore.searchFilter" class="flex items-center bg-steelBlue text-white px-3 py-1 rounded-md mr-2">
                            <div >
                                <span class="text-sm">{{ filter.display_value }}</span>

                            </div>
                            
                            <button @click="filterRemove( filter.name)" class="ml-2 focus:outline-none hover:bg-brightSkyBlue" aria-label="Remove tag">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        
                        
                        <!-- <div class="flex items-center bg-steelBlue text-white px-3 py-1 rounded-md">
                            <span class="text-sm">In-state tuition | $100-$500</span>
                            <button class="ml-2 focus:outline-none" aria-label="Remove tag">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div> -->
                    </div>
                </div>
                <div class="flex-3">
                    <div class="flex items-center border-lightSteelBlue bg-white rounded-full overflow-hidden px-3 py-4 divide-x h-10">
                        <button @click="getSaveData" class="bg-blue-500 p-2 text-white rounded-full mr-2 text-xs" >Saved
                            Search</button>
                        <button @click="showPopup = true" class="text-blue-500 p-2 text-xs" >New +</button>
                    </div>
                </div>
            </div>
            <div class="grid gap-4 grid-cols-6">

                <!-- card 01 -->
                <div v-for="user in search" class="col-span-3 p-2"> 
                    <button  class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
                        <NuxtLink :to="`/app/profile/${user.slug}`">
                            <div class=" grid grid-cols-12 gap-4">
                                <div class="col-span-4">
                                    <img v-if="user.profile_picture == null" class=" rounded-2xl w-[160px] h-[160px]"
                                        src="@/assets/images/user.png" alt="Neil image"/>
                                    <img v-if="user.profile_picture != null" class=" rounded-2xl w-[160px] h-[160px]"
                                        :src="user.profile_picture.url" alt="Neil image"/>
                                </div>
                                <div class="col-span-8">
                                    <div class="flex justify-between items-center">
                                        <div class="flex-1">
                                            <h4 class="text-black text-left font-bold">{{ user.display_name }}</h4>
                                        </div>
                                        <div class="flex-3"></div>
                                    </div>
                                    <div class="flex mt-2">
                                        <div class="flex-1">
                                            <div class="flex items-center space-x-2 mb-2">
                                                <div class="bg-lightPale p-1 rounded">
                                                    <img src="@/assets/user/images/playerIcon.png" alt="" class=" w-4 h-4">
                                                </div>
                                                <div class="text-xs ml-2 text-steelBlue">Tennis {{ user.user_role }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="user.user_role=='Player'" class="flex items-center mt-2 text-sm text-black bg-muteGray rounded-md p-2">
                                        <div class="mr-4">
                                            <p class="text-xs">UTR Score</p>
                                            <p v-if="user.other_data !=null" class="text-base font-bold">{{ JSON.parse(user.other_data).utr??'' }}</p>
                                        </div>
                                        <p v-if="user.other_data !=null" class="text-xs mr-3">ATP Score : <span>{{ JSON.parse(user.other_data).atp_score??'' }}</span></p>
                                        <p v-if="user.other_data !=null" class="text-xs mr-3">GPA :<span>{{ user.gpa }}</span></p>
                                        <p v-if="user.other_data !=null" class="text-xs">SAT Score : <span>{{ JSON.parse(user.other_data).sat_score??'' }}</span></p> 
                                    </div>
                                    <div class="flex items-center mt-2 text-sm text-gray-500">
                                        <p v-if="user.city !=null || user.country!=null " class="flex text-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                            <span class="text-xs ml-2 text-black"> {{ user.city }}, {{  user.country }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                        <div>
                            <p class="mt-2 text-xs text-black text-left line-clamp-2 h-8">
                               {{  user.bio }}
                            </p>
                        </div>
                        <div class="flex mt-2">
                            <div class="flex-1">
                                <div v-if="user.has_parent" class="flex items-center space-x-2 mb-2">
                                    <div class="bg-blue-100 p-1 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4 text-blue-700">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                        </svg>

                                    </div>
                                    <!-- <div class="text-xs ml-2 text-gray-500"><span
                                            class="text-blue-700">Ralph,Cameron</span> 3 more mutual connections
                                    </div> -->
                                </div>
                            </div>

                            <div class="flex-1 text-right">
                                <div class="flex">
                                    <div class="flex-1 text-right">
                                        <button class="bg-lighterGray rounded-full w-[35px] h-[35px] p-0 m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor"
                                                class="size-5 text-blue-500 m-auto">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div v-if="user.connection != null">
                                        <div v-if="user.connection.connection_status =='pending'">
                                            <button v-if="user.connection.user_id ==user.connection.sender_id"   class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                                Invite Sent
                                            </button>
                                            <button @click="accept(user.connection.id)" v-if="user.connection.user_id ==user.connection.receiver_id"   class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                                Accept
                                            </button>
                                            <button @click="reject(user.connection.id)" v-if="user.connection.user_id ==user.connection.receiver_id"   class="bg-blue-500 rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                                Reject
                                            </button>
                                        </div>
                                        
                                    </div>
                                    <div v-if="user.connection == null">
                                        <button @click="connect(user.userId)"   class="bg-blue-500 text-white rounded-full  p-2 m-1 text-xs h-[35px] w-[85px]">
                                             Connect
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                
                </div> 
                <!--/ card 01 -->
                
            </div>
        </div>
        <!-- End Content Section -->
    </div>

<!-- Popup Modal -->
<!-- <PopupModal
      :isOpen="showPopup"
      @close="showPopup = false"
    /> -->
    <SaveSearch  :isOpen="showPopup" 
        @close="showPopup = false"/>

    <ViewSaveSearch  :isOpen="showPopupView" :saveSearch="saveSearch" @getSaveData="getSaveData"
        @close="showPopupView = false"/>
</template>

<!-- <script setup>
definePageMeta({
    layout: 'user',
    middleware: ['role'],
    requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
});
</script> -->
<script setup>
definePageMeta({
    layout: 'user',
    middleware: ['role'],
    requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
})
import PopupModal from '~/pages/user/search/saveSearchModal.vue';
import { ref, computed, watch, onMounted ,inject  } from 'vue';
import { useNuxtApp } from '#app';
import { useUserStore } from '~/stores/userStore';
import { useSearchStore } from '~/stores/searchStore';

import { useRouter,useRoute } from 'vue-router';
import SaveSearch from '~/components/user/search/saveSearch.vue';
import ViewSaveSearch from '~/components/user/search/viewSaveSearch.vue';
const nuxtApp = useNuxtApp();
const userStore = useUserStore();
const router = useRouter();
const searchStore = useSearchStore();

const $userService = nuxtApp.$userService;
const search = ref([])
const showPopup =ref(false)
const showPopupView =ref(false)
const filters = ref([])
const saveSearch =ref([])
const connections = ref([])
const outState =ref(false)
const outStateMin = ref('')
const outStateMxn = ref('')
const filterNewSet = ref([])
const route = useRoute();

onMounted(() => {
    fetchData();
  
    window.addEventListener('beforeunload', refresh());

  });
 
  
watch(
  () => searchStore.searchButton,
  () => {
    fetchData() 
  },
  () => searchStore.searchFilter,
  () => {
    applyFilter() 
  }
);

const fetchData = async () =>{

    if(searchStore.searchButton){
    searchStore.setSearchButton(false)
    const data ={
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
    }
    
    console.log(data)
    try {
    const response = await $userService.search_user(data);

     search.value = response.data.dataSets.users || [];
     connections.value = response.data.dataSets.connections || [];
   
    search.value = search.value.map(user => {
    const connection =  connections.value.find(conn => conn.user_id === user.userId);
    return { ...user, connection: connection || null }; // Add connection or null if not found
});
    console.log(search.value)

  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
}
  
}

const applyFilter = (data) =>{
   filters.value =searchStore.searchFilter
}

const filterRemove = (data) =>{
    filters.value =searchStore.searchFilter
    filters.value = filters.value.filter(item => item.name !== data);
    searchStore.setSearchFilter(filters.value)

    if(data =='user filter'){
        searchStore.setUserRole('')
    }
    if(data =='state'){
        searchStore.setState('')  
    }
    if(data =='city'){
        searchStore.setCity('')
    }
    if(data =='Out-of-state tuition-max'){
        searchStore.setTuitionOutStateMax('')
    }
    if(data =='Out-of-state tuition-min'){
        searchStore.setTuitionOutStateMin('')
    }
    if(data =='In-state tuition-max'){
        searchStore.setTuitionInStateMax('')
    }
    if(data =='In-state tuition-min'){
        searchStore.setTuitionInStateMin('')
    }
    if(data =='Out-of-state tuition-max'){
        searchStore.setTuitionOutStateMax('')
    }
    if(data =='Out-of-state tuition-min'){
        searchStore.setTuitionOutStateMin('')
    }

    if(data =='year'){
        searchStore.setGraduationYear('')
    }
    if(data =='month'){
        searchStore.setGraduationMonth('')
    }
    if(data =='gender'){
        searchStore.setGenders('')
    }
    if(data =='handness'){
        searchStore.setHandednesses('')
    }
    if(data =='country'){
        searchStore.setCountryId('')
    }

    if(data =='utrMin'){
        searchStore.setUtrMin('')
    }
    if(data =='utrMax'){
        searchStore.setUtrMax('')
    }
    if(data =='wtnMin'){
        searchStore.setWtnMin('')
    }
    if(data =='wtnMax'){
        searchStore.setWtnMax('')
    }
    if(data =='apt'){
        searchStore.setAtpRanking('')
    }
    if(data =='itf'){
        searchStore.setItfRanking('')
    }
    if(data =='national ranking'){
        searchStore.setNationalRanking('')
    }


    searchStore.setSearchButton(true)
}

const getSaveData = async() =>{
    const response = await $userService.get_save_search()
    saveSearch.value =response.dataSets
    showPopupView.value = true
}

const connect = async (id) =>{
    try {
        await $userService.connection_request({
            receiver_id: id
        });

        searchStore.setSearchButton(true)
    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

const accept = async (id) =>{
    try {
        await $userService.connection_accept(id, {
            connection_status: "accepted"
        });
        searchStore.setSearchButton(true)
    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}

const reject = async (id) =>{
    try {
        const response = await $userService.connection_reject(id, {
            connection_status: "rejected"
        });
        searchStore.setSearchButton(true)
    } catch (error) {
        console.error('Failed to load posts:', error.message);
    }
}


const refresh = () =>{
    searchStore.setSearchKey(route.query.searchKey)
    searchStore.setSearchButton(true)


}


</script>
