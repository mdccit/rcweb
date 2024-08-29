<template>
    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
        <div class="flex gap-4">
            
                <fieldset>
                    <div class="flex gap-x-8 items-center">
                        <div class="w-[400px]"><label class="block">
                                <div class="flex rounded-lg border border-gray-300 shadow-sm"><input
                                    class="block px-5 py-3 w-full border-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                    name="search" type="text" data-validation-key="search" v-model="search"
                                    placeholder="Search for a school" required></div>
                        </label><!----></div>
                        <div class=""><button type="button" @click="submit" :disabled="buttonDisable"
                            class="border rounded-full ml-5 shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                                <div class="flex flex-row items-center justify-center"><!----><span
                                    class=""> Search </span></div>
                        </button></div>
                    </div>
                </fieldset>
        </div>
    </div>
    <div class="my-8"></div>
    <div v-if="afterSearch"  class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8 mbb-5">
        <p>{{ resultCount }} results found for "{{ search }}"</p>
        <div class="flex gap-4 flex-wrap">
            <div v-for="result in results" :key="results.value" class="border-2 p-4 rounded w-[500px]">
                <div>
                    <p>{{ result.id }}</p>
                    <h3 class="font-bold text-lg">{{ result.name }}</h3>
                    <p>{{result.city  }}, {{result.state }}</p>
                </div>
                <div>
                    <div class="flex items-center mt-4">
                        <fieldset class="">
                            <div class=""><button type="type" @click="connect(result)"
                                 class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                <div class="flex flex-row items-center justify-center"><!----><span
                                    class=""> Connect </span></div>
                            </button></div>
                        </fieldset>
                    </div>
                </div>
            </div>
             <!-- <div  class="border-2 p-4 rounded w-[500px]">
                <div>
                    <p>#146612</p>
                    <h3 class="font-bold text-lg">Lewis University</h3>
                    <p>Romeoville, IL</p>
                </div>
                <div>
                    <div class="flex items-center mt-4">
                        <div class="flex mr-4 mt-2 bg-gray-200 p-2 rounded items-center"><svg
                            class="w-6 h-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                            </svg>
                            <p class="max-w-[300px]">This school is already connected to <a
                                href="https://qa1.recruited.qualitapps.com/admin/schools/9bc8ab9b-ec4b-47a1-bfb2-c992335e2540"
                                class="text-blue-500 underline">Lewis University</a></p>
                        </div>
                        <fieldset class="opacity-30">
                            <div class=""><button type="submit" 
                                class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                <div class="flex flex-row items-center justify-center"><span
                                class=""> Connect </span></div>
                            </button></div>
                        </fieldset>
                    </div>
                </div>
            </div>  -->

        </div>
    </div>
   
</template>

<script setup>
import { ref, computed, watch , onMounted } from 'vue';
import { useNuxtApp } from '#app';

// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const route = useRoute(); // Use useRoute to access query parameters

const afterSearch = ref(false)
const search = ref('')
const buttonDisable = ref(false)
const results = ref([])
const resultCount = ref("No")

const props = defineProps({
  schoolId,
 
});
const submit = async () =>{
    try{
        buttonDisable.value = true
        const response = await $adminService.search_school_sysnchronic_result({
            search: search.value
       });
        buttonDisable.value = false
        afterSearch.value = true
        results.value = response.data.dataSets.result
        resultCount.value = response.data.dataSets.result_count != 0 ? response.data.dataSets.result_count :"No"
    }catch (err) {
         error.value = err.response?.data?.message || err.message;
    }
}

const connect = async (result) =>{
    try{
        console.log(result)
    //     buttonDisable.value = true
    //     const response = await $adminService.search_school_sysnchronic_result({
    //         search: search.value
    //    });
    //     buttonDisable.value = false
    //     afterSearch.value = true
    //     results.value = response.data.dataSets.result
    //     resultCount.value = response.data.dataSets.result_count != 0 ? response.data.dataSets.result_count :"No"
    }catch (err) {
         error.value = err.response?.data?.message || err.message;
    }
}

</script>

<style scoped>
.error-messages {
    margin-top: 20px;
    color: red;
}

.error-title {
    font-weight: bold;
}

.error-list {
    list-style-type: disc;
    /* Ensure bullet points are shown */
    margin-left: 20px;
    /* Indent the list */
}

.error-item {
    margin-bottom: 5px;
}
</style>