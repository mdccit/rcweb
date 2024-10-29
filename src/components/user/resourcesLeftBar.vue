<template>
    <div v-if="userStore.resourceId != null" class="rounded-2xl overflow-hidden border border-lightSteelBlue border-opacity-40 p-3 mt-3 bg-white">
        <div class="max-w-xs bg-white p-2 rounded-lg">
            <h2 class="text-xl font-bold mb-2 text-black">Resources</h2>
            <p class="text-darkSlateBlue mb-4 text-sm">Access a wealth of information to enhance your experience.</p>
            <div class="space-y-2">
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
                    <div v-if="category.id == userStore.resourceId" v-for="resource in category.resources" class="bg-culturedBlue rounded-lg mt-2">
                        <div @click="redirectResource(resource)">
                            <span class="cursor-pointer tex-xs mr-2 text-white bg-steelBlue rounded text-sm px-2 py-2.5 flex justify-between items-center w-full">{{ resource.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


import { ref, onMounted, watch } from 'vue';
import { useNuxtApp } from '#app';
import { useUserStore } from '@/stores/userStore';


const userStore = useUserStore();
const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const category = ref([])


onMounted(() => {
    fetchResourcresCategory()

});


const fetchResourcresCategory = async () => {
  try {
     const response = await $userService.get_resource_category();
     category.value = response.dataSets
    console.log(response)
   
   
  } catch (error) {
    console.error('Failed to load posts:', error.message);
  }
}

const resourceAddDelete = (data) =>{
   
    userStore.setResourceId(data)
}

const redirectResource = (resource) =>{
     userStore.setResourceId(resource.category_id)

    userStore.setResourceData(resource)
}
</script>