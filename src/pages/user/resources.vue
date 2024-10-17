<template>
    <div>

        <!-- Resources -->

        <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
            <!-- Section Header -->
            <div class="mb-6">
                <h2 class="text-2xl text-black font-bold">{{ tab==1?'Resources':'Tutorial'}}</h2>
                <p class="text-darkSlateBlue mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>

            <!-- Tabs -->
            <div class="flex space-x-8 border-b">
                <button @click="changeTab(1)" :class="tab==1?'pb-2 border-b-2 border-steelBlue text-steelBlue focus:outline-none':'pb-2 border-b-2 border-transparent text-black hover:text-lightSteelBlue hover:border-lightSteelBlue focus:outline-none'">
                    Free Resources
                </button>
                <button @click="changeTab(2)" 
                    :class="tab==2?'pb-2 border-b-2 border-steelBlue text-steelBlue focus:outline-none':'pb-2 border-b-2 border-transparent text-black hover:text-lightSteelBlue hover:border-lightSteelBlue focus:outline-none'">
                    Tutorial
                </button>
            </div>

            <!-- Cards Section 1 -->
             <Category v-if="tab==1" :data="category"  />
            <!-- Card Section End -->
            <!-- Cards Section 2 -->
             <Tutorial v-if="tab==2" />
            <!-- Card Section End -->

        </div>

        <!--/ Resources -->

        <!-- Tutorial -->
        <!-- <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
            <div class="mb-6">
                <h2 class="text-2xl text-black font-bold">Tutorial</h2>
                <p class="text-darkSlateBlue mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>

            <div class="flex space-x-8 border-b">
                <button class="pb-2 border-b-2 border-transparent text-black hover:text-lightSteelBlue hover:border-lightSteelBlue focus:outline-none">
                    Free Resources
                </button>
                <button
                    class=" pb-2 border-b-2 border-steelBlue text-steelBlue focus:outline-none ">
                    Tutorial
                </button>
            </div>

          
         
        </div> -->

        <!-- Pro Tennis Eligibility Guide -->

        <div v-if="userStore.resource != null" class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-4 mt-3">
            <h1 class="text-3xl font-bold mb-6 text-black">{{userStore.resource.title  }}</h1>

            <section class="mb-8">
                <!-- <h2 class="text-lg font-semibold mb-2 text-black">NCAA Eligibility and Professionalism Rules</h2>
                <h3 class="font-medium mb-2 text-black text-md">Professional Play:</h3> -->
                <ul class="list-disc ml-5 mb-4 text-darkSlateBlue">
                    <li>
                        {{ userStore.resource.content }}
                    </li>
                </ul>
                <!-- <h3 class="font-medium mb-2 text-black text-md">Prize Money:</h3>
                <ul class="list-disc ml-5 mb-4 text-darkSlateBlue">
                    <li>As of the latest updates, NCAA athletes can accept prize money up to an amount covering their
                        actual and necessary expenses for the competition, such as travel, lodging, equipment, and
                        apparel.</li>
                </ul> -->
            </section>

            <!-- <section class="mb-8">
                <h2 class="text-lg font-semibold mb-2 text-black">NAIA Eligibility and Professionalism Rules</h2>
                <h3 class="font-medium mb-2 text-black text-md">Professional Play:</h3>
                <ul class="list-disc ml-5 mb-4 text-darkSlateBlue">
                    <li>The NAIA is generally more lenient than the NCAA regarding professional play.</li>
                </ul>
                <h3 class="font-medium mb-2 text-black text-md">Prize Money:</h3>
                <ul class="list-disc ml-5 mb-4 text-darkSlateBlue">
                    <li>NAIA athletes are allowed to accept prize money in an amount not exceeding actual and necessary
                        expenses, similar to the NCAA's stance.</li>
                </ul>
            </section>

            <section class="mb-8">
                <h2 class="text-lg font-semibold mb-2 text-black">NJCAA Eligibility and Professionalism Rules</h2>
                <h3 class="font-medium mb-2 text-black text-md">Professional Play:</h3>
                <ul class="list-disc ml-5 mb-4 text-darkSlateBlue">
                    <li>The NJCAA has specific rules that prohibit athletes from having signed contracts with or played
                        for professional teams.</li>
                </ul>
                <h3 class="font-medium mb-2 text-black text-md">Prize Money:</h3>
                <ul class="list-disc ml-5 mb-4 text-darkSlateBlue">
                    <li>NJCAA rules state that student-athletes may accept prize money based on their place finish in a
                        competition.</li>
                </ul>
            </section>

            <section class="mb-8">
                <h2 class="text-lg font-semibold mb-2 text-black">Key Considerations:</h2>
                <ul class="list-disc ml-5 mb-4 text-darkSlateBlue">
                    <li>Documentation: Athletes should keep thorough records of their expenses and any prize money
                        accepted to prove compliance with these rules.</li>
                    <li>Changes and Exceptions: Rules regarding amateurism and eligibility can evolve.</li>
                    <li>Advice and Guidance: Seek advice from compliance officers at prospective colleges or sports
                        organizations.</li>
                </ul>
            </section> -->
        </div>
        <!-- / Pro Tennis Eligibility Guide -->

    </div>
</template>


<script setup>
definePageMeta({
    layout: 'socialhub-three-column',
    middleware: ['role'],
    requiredRole: ['admin', 'coach', 'business_manager', 'player', 'parent', 'default'],
});

import { ref, watchEffect ,onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { useUserStore } from '@/stores/userStore';
import Category from '~/components/resources/category.vue';
import Tutorial from '~/components/resources/tutorial.vue';


const userStore = useUserStore();
const tab = ref(1)
const nuxtApp = useNuxtApp();
const $userService = nuxtApp.$userService;
const category = ref([])

onMounted(() => {
    fetchResourcresCategory()
    console.log("Resouce Store")
    console.log(userStore.resourceData)
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

const changeTab = (data) =>{
  tab.value = data
}

</script>