<template>
   <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <!-- Card 1 -->
                <div v-for="data in props.data" class="bg-culturedBlue p-4 rounded-lg flex items-center space-x-4">
                    <div class="bg-lightGray1 p-3 rounded-full">
                        <img src="@/assets/images/elegibility.png" alt="" class="w-6 h-4">
                    </div>
                    <div>
                        <h3 class="font-bold text-black">{{  data.title }}</h3>
                        <p class="text-lightSteelBlue text-sm">{{ data.description }}</p>
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
const props = defineProps({

data: {
    type: Array,
    required: true,
}
});


</script>