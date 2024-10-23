<template>
    <header class="bg-gray-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex w-full justify-between gap-8">
                <div class="flex items-center gap-4">
                    <NuxtLink to="/admin/resoucesCategory">
                        <svg class="w-6 text-black h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg>
                    </NuxtLink>
                    <h2 class="font-bold text-black text-lg self-center">Create Category </h2>
                </div>
                <div>

                </div>
            </div>
        </div>
    </header>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <form   >
                    <fieldset>
                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans"> Title
                                </span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm"><input required v-model="name"
                                        class="block px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        name="title" type="text" data-validation-key="title"></div>
                            </label><!----></div>
                        <div class="my-8"></div>
                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans"> Emoji url
                                </span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm"><input required v-model="icon"
                                        class="block px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        name="emoji" type="text" data-validation-key="emoji"></div>
                            </label><!----></div>
                        <div class="my-8"></div>
                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans">
                                    Description </span><textarea name="description" data-validation-key="description" required v-model="description"
                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50"></textarea></label><!---->
                        </div>
                        <div class="my-8"></div><button @click="handleRequest" type="button"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-steelBlue hover:bg-blue-600 active:bg-blue-600 text-white border-transparent focus:border-blue-300 focus:ring-blue-200">
                            <div class="flex flex-row items-center justify-center"><!----><span class=""> Save changes
                                </span></div>
                        </button>
                        <div class="my-8"></div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';

const router = useRouter();

const nuxtApp = useNuxtApp();
const $adminService = nuxtApp.$adminService;

definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});

const  name = ref('');
const icon = ref('');
const  description = ref('');

const handleRequest = async () =>{
    try {
        console.log("Submit")
        const response = await $adminService.new_resource_category_create({
            title:name.value,
            description:description.value,
            icon:icon.value
        });
        console.log(response)
        nuxtApp.$notification.triggerNotification("Category Created", 'success');
        clear()
        // router.push({
        //     path: '/admin/resoucesCategory'
        // });
       
    } catch (error) {
        console.log(error)
        nuxtApp.$notification.triggerNotification(error.display_message, 'failure');
    } 
}

const clear= () =>{
    name.value = "";
    description.value="";
    icon.value =""
}

</script>


<style scoped></style>
