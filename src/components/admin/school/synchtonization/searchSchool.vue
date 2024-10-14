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
                            </label><!---->
                            
                       </div>
                        <div class=""><button type="button" @click="submit" :disabled="buttonDisable"
                            class="border rounded-full ml-5 shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-500 hover:bg-blue-700 text-white border-transparent focus:border-primary-300 focus:ring-primary-200">
                                <div class="flex flex-row items-center justify-center"><!----><span
                                    class=""> Search </span></div>
                        </button></div>
                    </div>
                </fieldset>
        </div>
        <p v-if="loading">Loading..........</p>
        <p v-if="textError" class="text-red-600">The search field must be at least 3 characters.</p>
    </div>
   
    <div class="my-8"></div>

    <div v-if="afterSearch"  class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8 mbb-5">
        <p >{{ resultCount }} results found for "{{ search }}"</p>
        <div class="flex gap-4 flex-wrap">
            <div v-for="result in results" :key="results.value" class="border-2 p-4 rounded w-[500px]">
                <div>
                    <p>{{ result.id }}</p>
                    <h3 class="font-bold text-lg">{{ result.name }}</h3>
                    <p>{{result.city  }}, {{result.state }}</p>
                </div>
                <div>
                    <div v-if="result.connect == null" class="flex items-center mt-4">
                        <fieldset class="">
                            <div class=""><button type="type" @click="connect(result)"
                                 class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                <div class="flex flex-row items-center justify-center"><!----><span
                                    class=""> Connect </span></div>
                            </button></div>
                        </fieldset>
                    </div>
                    <div v-if="result.connect != null" class="flex items-center mt-4">
                        <fieldset class="">
                            <p>This school is already connected to <button class="text-primary" @click="schoolRedirect(result.connect.id)"><a>{{ result.name }}</a></button></p>
                            <div class=""><button type="type" disabled
                                 class="border rounded-full shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                                <div class="flex flex-row items-center justify-center"><span
                                    class=""> Connect </span></div>
                            </button></div>
                        </fieldset>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
   
</template>

<script setup>
import { ref, computed, watch , onMounted ,defineEmits } from 'vue';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';

// Access authService from the context
const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

const route = useRoute(); // Use useRoute to access query parameters
const router = useRouter();

const afterSearch = ref(false)
const search = ref('')
const buttonDisable = ref(false)
const results = ref([])
const resultCount = ref("No")
const error = ref({})
const loading = ref(false)
const emit = defineEmits(['close']);
const textError = ref(false)
const props = defineProps({
  schoolId:String,
 schoolName:String
});
const submit = async () =>{
    try{
        if (search.value.length < 3) {
           textError.value =true
           return;
        } 
        textError.value =false
        console.log(14)
        buttonDisable.value = true
        loading.value = true
        afterSearch.value = false
        results.value =[];
        const response = await $adminService.search_school_sysnchronic_result({
            search: search.value
       });
       console.log(response)
        buttonDisable.value = false
        afterSearch.value = true
        results.value = response.data.dataSets.result
        resultCount.value = response.data.dataSets.result_count != 0 ? response.data.dataSets.result_count :"No"
        loading.value = false
    }catch (err) {
         error.value = err.response?.data?.message || err.message;
    }
}

const connect = async (result) =>{
    try{
        console.log(result)
        const response = await $adminService.school_connect_gov(props.schoolId,{
            gov_id: result.id,
        });
        console.log(response)

    if (response.status === 200) {
        emit('connectedSchool',response.display_message)
    } else {
        errors.value.push(response.display_message);
        
    }
    }catch (err) {
        console.log(err)
         error.value = err.response?.data?.message || err.message;
    }
}
 
const schoolRedirect = (id) => {
  router.push({
    path: '/school/schoolGeneralDetails',
    query: {
      action: 'edit',
      school_id: id
    }
  });
};

onMounted(()=>{
    search.value = props.schoolName
})
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