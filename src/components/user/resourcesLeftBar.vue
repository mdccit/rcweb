<template>
   
    <!-- start call card -->
    <div class=" card rounded-2xl overflow-hidden border border-lightSteelBlue p-3 mt-3 bg-steelBlue text-white">
        <div class="flex items-center justify-between">

            <div class="flex items-center space-x-4 w-48">

                <h1 class="text-lg font-semibold mb-4">Call with an experienced pro</h1>
            </div>
            <div class="justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
            </div>
        </div>
        <p class="text-xs text-white">Call our experts – past coaches, players, and more – for
            just  $100 per call. After you book a call, we will send you an email so an appropriate time
            for the call can be arranged.</p>

        <div class="flex justify-center mt-3">
            <button class="bg-white text-darkSlateBlue px-8 py-2 rounded-lg text-sm font-semibold">Book a call</button>
        </div>
    </div>
    <!-- end call card -->

    <div class="rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 p-3 mt-3 bg-white">

<div class="max-w-xs bg-white p-2 rounded-lg">
    <h2 class="text-xl font-bold mb-2 text-black">Resources</h2>
    <p class="text-darkSlateBlue mb-4 text-sm">Manage all your account settings here</p>

    <div class="space-y-2">
        <!-- Eligibility Dropdown -->
         <div v-for="category in category">
            <div class="bg-culturedBlue rounded-lg">
                <button @click="resourceAddDelete(category.id)"
                    class="text-darkSlateBlue bg-culturedBlue rounded text-sm px-2 py-2.5 flex justify-between items-center w-full">
                    <span class="tex-xs mr-2">{{ category.title }}</span>
                    <div v-if="category.resources.length >0">
                        <svg class="h-4 w-4 text-darkSlateBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                       </path>
                    </svg>
                    </div>
                    
                </button>
            </div>
            <div v-if="resourceView.includes(category.id)" v-for="resource in category.resources" class="bg-culturedBlue rounded-lg mt-2">
                <div @click="redirectResource(resource)">
                    <span class="cursor-pointer tex-xs mr-2 text-white bg-steelBlue rounded text-sm px-2 py-2.5 flex justify-between items-center w-full">{{ resource.title }}</span>
                </div>
               
            </div>
        </div>
        

        <!-- Immigration/Visa -->
        <!-- <div class="bg-culturedBlue rounded-lg">
            <button
                class="text-darkSlateBlue bg-culturedBlue rounded text-sm px-2 py-2.5 flex justify-between items-center w-full">
                <span class="tex-xs mr-2">Immigration/Visas</span>
                <svg class="h-4 w-4 text-darkSlateBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                    </path>
                </svg>
            </button>
        </div> -->

        <!-- Transfer Information -->
        <!-- <div class="bg-culturedBlue rounded-lg">
            <button
                class="text-darkSlateBlue bg-culturedBlue rounded text-sm px-2 py-2.5 flex justify-between items-center w-full">
                <span class="tex-xs mr-2">Transfer Information</span>
                <svg class="h-4 w-4 text-darkSlateBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                    </path>
                </svg>
            </button>
        </div> -->

        <!-- Life in the USA -->
        <!-- <div class="bg-culturedBlue rounded-lg">
            <button
                class="text-darkSlateBlue bg-culturedBlue rounded text-sm px-2 py-2.5 flex justify-between items-center w-full">
                <span class="tex-xs mr-2">Life in the USA</span>
                <svg class="h-4 w-4 text-darkSlateBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                    </path>
                </svg>
            </button>
        </div> -->

        <!-- NIL Information -->
        <!-- <div class="bg-culturedBlue rounded-lg">
            <button
                class="text-darkSlateBlue bg-culturedBlue rounded text-sm px-2 py-2.5 flex justify-between items-center w-full">
                <span class="tex-xs mr-2">NIL Information</span>
                <svg class="h-4 w-4 text-darkSlateBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                    </path>
                </svg>
            </button>
        </div> -->

        <!-- Navigating Recruited -->
        <!-- <div class="bg-culturedBlue rounded-lg">
            <button
                class="w-full flex justify-between items-center p-3 rounded-lg text-left text-darkSlateBlue bg-culturedBlue">
                <span  class="tex-xs mr-2">Navigating Recruited</span>
                <svg class="h-5 w-5 text-darkSlateBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                    </path>
                </svg>
            </button>
        </div> -->

        <!-- College Tennis Format -->
        <!-- <div class="bg-culturedBlue rounded-lg">
            <button
                class="w-full flex justify-between items-center p-3 rounded-lg text-left text-darkSlateBlue bg-culturedBlue">
                <span class="tex-xs mr-2">College Tennis Format</span>
                <svg class="h-5 w-5 text-darkSlateBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                    </path>
                </svg>
            </button>
        </div> -->
    </div>
</div>

</div>
</template>

<script setup>
// export default {
//     name: 'network-left'
// }

import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { useUserStore } from '@/stores/userStore';

import { useRouter } from 'vue-router';

const router = useRouter();

const userStore = useUserStore();

const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const category = ref([])
const resourceView = ref([])
onMounted(() => {
    fetchResourcresCategory()

});

const fetchResourcresCategory = async () => {
  try {
     const response = await $userService.get_resource_category();
     category.value = response.dataSets
    console.log(response)
    //const filteredData = response.filter(item => item.user_id === coachId.value);
    // posts.value = response
   
  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
}

const resourceAddDelete = (data) =>{
    let array = resourceView.value
    if (array.includes(data)) {
        console.log("The array contains 6.");
        let index = array.indexOf(data);
        if (index !== -1) {
            array.splice(index, 1); // Removes 1 element at the position of index
        }

        resourceView.value =array
    } else {
        console.log("The array does not contain 6.");
        array.push(data);
        resourceView.value = array
    }

    console.log(resourceView.value)
}

const redirectResource = (resource) =>{
    userStore.setResourceData(resource)
    router.push({
    path: '/user/resources'
  });
}
</script>