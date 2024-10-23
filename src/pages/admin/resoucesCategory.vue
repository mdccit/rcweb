<template>
    <header class="bg-gray-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <div class="flex items-center gap-4">
                    <NuxtLink to="/admin/resources">
                        <svg class="w-6 text-black h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg>
                    </NuxtLink>
                    <h2 class="font-bold text-black text-lg self-center">Resource Categories </h2>
                </div>
                <div>
                    <!-- <button @click="viewCategory"
                        class="border rounded-full mr-2 shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-gray-300 focus:border-primary-300 focus:ring-primary-200">
                        Categories
                    </button> -->

                    <button @click="createCategory"  class=" border rounded-full shadow-sm font-bold py-2.5 px-8 
                        focus:outline-none
                        bg-blue-500 hover:bg-blue-700 
                        active:bg-blue-600 text-white 
                        border-transparent focus:border-primary-300 
                        focus:ring-blue-700">
                        Create new
                        <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 5l0 14"></path>
                            <path d="M5 12l14 0"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <AdminResourcesCategory />
    </div>
</template>

<script setup>
import AdminResourcesCategory from '~/components/tables/AdminResourcesCategory.vue';
import { useRouter } from 'vue-router';

const router = useRouter();


definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});


const createCategory = () =>{
    router.push({
       path: '/admin/resourcesCreateCategory'
    });
}
</script>
<style scoped></style>
