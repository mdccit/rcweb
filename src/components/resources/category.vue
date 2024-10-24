<template>
    <div class="grid grid-cols-6 gap-6 mt-6">
        <!-- Card 1 -->
        <!-- <div  class="bg-culturedBlue p-4 rounded-lg flex items-center space-x-4">
            <div class="bg-lightGray1 p-3 rounded-full w-[60px] h-[60px]">
                <img src="@/assets/images/elegibility.png" alt="" class="w-[40px] h-[20px]">
            </div>
            <div>
                <h3 class="font-bold text-black">{{ data.title }}</h3>
                <p class="text-lightSteelBlue text-sm">{{ data.description }}</p>
            </div>
        </div> -->

        <div v-for="data in props.data" class="bg-culturedBlue p-4 rounded-lg flex items-center space-x-4 col-span-3">
            <div @click="redirectResource(data)" class="grid grid-cols-10 w-full">
                <div class="col-span-2">
                    <div class="bg-lightGray1 p-3 rounded-full w-[60px] h-[60px]">
                        <img :src="data.icon" alt="" class="w-[35px] h-[35px] m-auto">
                    </div>
                </div>
                <div class="col-span-8 pl-1">
                    <h3 class="font-bold text-black">{{ data.title }}</h3>
                    <p class="text-lightSteelBlue text-sm">{{ data.description }}</p>
                </div>
            </div>
        </div>

        <!-- Card 2 -->
        <!-- <div class="bg-culturedBlue p-4 rounded-lg flex items-center space-x-4">
                    <div class="bg-lightGray1 p-3 rounded-full">
                        <img src="@/assets/images/immigration.png" alt="" class="w-6 h-4">
                    </div>
                    <div>
                        <h3 class="font-bold text-black">Immigration/Visas</h3>
                        <p class="text-lightSteelBlue text-sm">Providing international students information on how to
                            navigate
                            visa processes.</p>
                    </div>
                </div> -->

        <!-- Card 3 -->
        <!-- <div class="bg-culturedBlue p-4 rounded-lg flex items-center space-x-4">
                    <div class="bg-lightGray1 p-3 rounded-full">
                        <img src="@/assets/images/world.png" alt="" class="w-6 h-4">
                    </div>
                    <div>
                        <h3 class="font-bold text-black">Life in the USA</h3>
                        <p class="text-lightSteelBlue text-sm">Providing an in-depth guide of staying eligible and
                            complying
                            with NCAA rules.</p>
                    </div>
                </div> -->

        <!-- Card 4 -->
        <!-- <div class="bg-culturedBlue p-4 rounded-lg flex items-center space-x-4">
                    <div class="bg-lightGray1 p-3 rounded-full">
                        <img src="@/assets/images/transfer.png" alt="" class="w-6 h-4">
                    </div>
                    <div>
                        <h3 class="font-bold text-black">Transfer Information</h3>
                        <p class="text-lightSteelBlue text-sm">Providing international students information on how to
                            navigate
                            visa processes.</p>
                    </div>
                </div> -->

        <!-- Card 5 -->
        <!-- <div class="bg-culturedBlue p-4 rounded-lg flex items-center space-x-4">
                    <div class="bg-lightGray1 p-3 rounded-full">
                        <img src="@/assets/images/info.png" alt="" class="w-6 h-4">
                    </div>
                    <div>
                        <h3 class="font-bold text-black">NIL Information</h3>
                        <p class="text-lightSteelBlue text-sm">Helping players understand the ins and outs of Name Image
                            and
                            Likeness in college sports.</p>
                    </div>
                </div> -->

        <!-- Card 6 -->
        <!-- <div class="bg-culturedBlue p-4 rounded-lg flex items-center space-x-4">
                    <div class="bg-lightGray1 p-3 rounded-full">
                        <img src="@/assets/images/map.png" alt="" class="w-6 h-4">
                    </div>
                    <div>
                        <h3 class="font-bold text-black">Eligibility</h3>
                        <p class="text-lightSteelBlue text-sm">Providing an in-depth guide to staying eligible and
                            complying
                            with NCAA rules.</p>
                    </div>
                </div> -->
    </div>
</template>

<script setup>
import { ref, defineEmits, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const nuxtApp = useNuxtApp();

const props = defineProps({

    data: {
        type: Array,
        required: true,
    }
});

const redirectResource = (resource) =>{
    console.log(resource.id)
    userStore.setResourceId(resource.id)
    console.log(userStore.resourceId)
    if(resource.resources.length > 0){

        userStore.setResourceData(resource.resources[0])
    }
    
    
}
</script>