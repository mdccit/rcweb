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
                    <h2 class="font-bold text-black text-lg self-center">Create Resource </h2>
                </div>
                <div>

                </div>
            </div>
        </div>
    </header>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <!-- <form  @submit="submit"> -->
                    <fieldset>
                        <div class="w-full">
                            <label class="block">
                                <span class="block mb-1 text-gray-700 font-sans"> Title </span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm">
                                    <input class="block px-5 py-3 w-full border-0 focus:border-blue-300 
                                    focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 
                                    disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg" name="title" v-model="title" required
                                        type="text" data-validation-key="title">
                                </div>
                            </label>
                        </div>
                        <div class="my-8"></div>
                        <div class="w-full">
                            <label class="block">
                                <span class="block mb-1 text-gray-700 font-sans">Category</span>
                                <div class="relative">
                                    <div class="">
                                        <select name="category_id" data-validation-key="category_id" v-model="category_id" required
                                            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 px-5 py-3 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50">
                                            <option v-for="category in category" :value="category.id"> {{ category.title }} </option>
                                        </select>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div class="my-8"></div>

                        <div class="w-full"><label class="block"><span class="block mb-1 text-gray-700 font-sans"> Enter
                                    a number, the bigger, the lower down the list this object will be </span>
                                <div class="flex rounded-lg border border-gray-300 shadow-sm"><input v-model="weight" required
                                        class="block px-5 py-3 w-full border-0 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg"
                                        name="weight" type="number" data-validation-key="weight"></div>
                            </label>
                        </div>

                        <div class="my-8"></div>

                        <div class="w-full">
                            <label class="block">
                                <span class="block mb-1 text-gray-700 font-sans">
                                    Description
                                </span>
                                <textarea name="description" data-validation-key="description" v-model="description" required
                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50">
                                </textarea>
                            </label>
                        </div>
                        <div class="my-8"></div>

                        <!-- <div class="w-full">
                            <label class="block">
                                <span class="block mb-1 text-gray-700 font-sans">
                                    Content
                                </span>

                                <textarea name="description" data-validation-key="description"
                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:opacity-50">
                                </textarea>
              
                            </label>

                        </div> -->

                        <div class="my-8"></div>

                        <div class="my-8"></div>
                        <div class="my-8"></div><button  @click="submit"
                            class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring focus:ring-opacity-50 bg-steelBlue hover:bg-blue-600 active:bg-blue-600 text-white border-transparent focus:border-blue-300 focus:ring-blue-200">
                            <div class="flex flex-row items-center justify-center"><!----><span class=""> Create
                                    Resource </span></div>
                        </button>
                        <div class="my-8"></div>
                    </fieldset>
                <!-- </form> -->
            </div>
        </div>
    </div>

</template>

<script setup>
  import { ref, watch, computed, onMounted } from 'vue';
  import { useFetch } from '#app';
  import { useRouter } from 'vue-router';
  import { useNuxtApp } from '#app';
  import { useFlowbite } from '~/composables/useFlowbite';

  const router = useRouter();

  const nuxtApp = useNuxtApp();
  const $adminService = nuxtApp.$adminService;
  const category = ref([])
  const category_id = ref('');
  const title = ref('')
  const weight = ref('')
  const description = ref('')
definePageMeta({
    ssr: false,
    layout: 'admin',
    middleware: ['role'],
    requiredRole: ['admin'],
});

onMounted(() => {
    fetchData();
  
    useFlowbite(() => {
        initFlowbite();
    })
  });

  const fetchData = async () => {
    try {
     
      // Fetch data from the server with pagination and search parameters
      const dataSets = await $adminService.resource_category();
      category.value =dataSets.dataSets
      
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
    }
    filterView()
  };

  const submit = async() =>{
    const response = await $adminService.new_resource_create({
            title:title.value,
            content:description.value,
            weight:weight.value,
            category_id:category_id.value
        });
        clear()
        nuxtApp.$notification.triggerNotification("Resorces Created", 'success');

        // router.push({
        //     path: '/admin/resources'
        // });
  }

  const clear = () =>{
    title.value =''
    description.value =''
    weight.value =''
    category_id.value =''
  }
</script>
<style scoped></style>
